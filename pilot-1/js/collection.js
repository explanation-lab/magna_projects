import createExplanationLabClient from '../explanation-lab-client.js';

try {
  const url = new URL(location.href);
  if (!url.searchParams.get('study')) throw new Error('Please open this study using its Study Console participant link.');
  const lab = await createExplanationLabClient({ experimentVersion: MagnaMaterials.version });
  const codes = MagnaMaterials.groups.map(group => group.code);
  if (lab.study.experimentVersion !== MagnaMaterials.version || lab.study.conditions.length !== codes.length ||
      codes.some(code => !lab.study.conditions.includes(code)) || !codes.includes(lab.launch.condition)) {
    throw new Error('This link belongs to a different study or version. Please contact the researcher.');
  }
  globalThis.explanationLab = lab;
  await import('./study.js');
} catch (error) {
  const root = document.getElementById('jspsych-target');
  const section = document.createElement('section');
  section.className = 'page simple-page';
  section.setAttribute('role', 'alert');
  const heading = document.createElement('h1');
  heading.textContent = 'Unable to open the study';
  const detail = document.createElement('p');
  detail.textContent = error.message || 'Please reopen your participant link or contact the researcher.';
  section.append(heading, detail);
  root.replaceChildren(section);
  console.error('Study startup failed', error);
}
