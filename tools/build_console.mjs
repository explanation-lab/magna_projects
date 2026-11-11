import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [consoleRoot, outputDirectory, frozenClientPath] = process.argv.slice(2);
if (!consoleRoot || !outputDirectory) {
  throw new Error('Usage: node tools/build_console.mjs CONSOLE_REPOSITORY OUTPUT_DIRECTORY [FROZEN_CLIENT_PATH]');
}
const require = createRequire(path.join(path.resolve(consoleRoot), 'package.json'));
const { zipSync } = require('fflate');
const { inspectStudyZip, convertStudyZip } = await import(pathToFileURL(path.join(path.resolve(consoleRoot), 'lib/study-converter.ts')));
const collection = path.join(root, 'code/experiments/pilot 1/collection');
const materialsSource = await fs.readFile(path.join(collection, 'js/materials.js'), 'utf8');
const materials = JSON.parse(materialsSource.split('globalThis.MagnaMaterials = ')[1].trim().replace(/;$/, ''));
const version = materials.version.replace('magna-pilot1-', '');
const names = [
  'index.html', 'css/study.css', 'js/collection.js', 'js/materials.js', 'js/study.js', 'js/ui.js',
  'vendor/jspsych-7.3.4.js', 'vendor/jspsych-7.3.4.css',
  'vendor/plugin-html-button-response-1.1.3.js', 'vendor/THIRD_PARTY_NOTICES.md'
];
const files = Object.fromEntries(await Promise.all(names.map(async name => [name, await fs.readFile(path.join(collection, name))])));
const sourceBytes = zipSync(files, { level: 9 });
const sourceName = `magna-pilot1-source-${version}.zip`;
const inspection = await inspectStudyZip(new File([sourceBytes], sourceName, { type: 'application/zip' }));
let client;
if (frozenClientPath) {
  client = await fs.readFile(frozenClientPath, 'utf8');
} else {
  const response = await fetch('https://explanation-lab-studies.web.app/lab-study-client.js');
  if (!response.ok) throw new Error(`Could not fetch the official client: ${response.status}`);
  client = await response.text();
}
const result = await convertStudyZip(inspection, {
  experimentVersion: materials.version, conditionCodes: materials.groups.map(group => group.code),
  demographicFields: materials.demographicFields, noDemographics: false, assignmentType: 'between_participant'
}, client);
const output = path.resolve(outputDirectory);
await fs.mkdir(output, { recursive: true });
await fs.writeFile(path.join(output, sourceName), sourceBytes);
await fs.writeFile(path.join(output, `magna-pilot1-console-${version}.zip`), new Uint8Array(await result.blob.arrayBuffer()));
await fs.writeFile(path.join(output, `magna-pilot1-conversion-${version}.json`), JSON.stringify({ config: result.config, report: result.report }, null, 2) + '\n');
console.log(JSON.stringify({ output, version: materials.version, fingerprint: result.config.packageFingerprint, report: result.report }, null, 2));
