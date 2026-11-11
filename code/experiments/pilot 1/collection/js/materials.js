const INTERNAL_FACTORS = ['context', 'liability_category', 'outcome', 'question_type'];
const CONDITION_CELLS = {
  shelving_intentional_o1: {},
  shelving_intentional_o2: {},
  shelving_intentional_o3: {},
  shelving_negligence_o1: {},
  shelving_negligence_o2: {},
  shelving_negligence_o3: {},
  shelving_strict_o1: {},
  shelving_strict_o2: {},
  shelving_strict_o3: {},
  shelving_control_o1: {},
  shelving_control_o2: {},
  shelving_control_o3: {},
  bicycle_intentional_o1: {},
  bicycle_intentional_o2: {},
  bicycle_intentional_o3: {},
  bicycle_negligence_o1: {},
  bicycle_negligence_o2: {},
  bicycle_negligence_o3: {},
  bicycle_strict_o1: {},
  bicycle_strict_o2: {},
  bicycle_strict_o3: {},
  bicycle_control_o1: {},
  bicycle_control_o2: {},
  bicycle_control_o3: {},
  ladder_intentional_o1: {},
  ladder_intentional_o2: {},
  ladder_intentional_o3: {},
  ladder_negligence_o1: {},
  ladder_negligence_o2: {},
  ladder_negligence_o3: {},
  ladder_strict_o1: {},
  ladder_strict_o2: {},
  ladder_strict_o3: {},
  ladder_control_o1: {},
  ladder_control_o2: {},
  ladder_control_o3: {},
  treadmill_intentional_o1: {},
  treadmill_intentional_o2: {},
  treadmill_intentional_o3: {},
  treadmill_negligence_o1: {},
  treadmill_negligence_o2: {},
  treadmill_negligence_o3: {},
  treadmill_strict_o1: {},
  treadmill_strict_o2: {},
  treadmill_strict_o3: {},
  treadmill_control_o1: {},
  treadmill_control_o2: {},
  treadmill_control_o3: {},
};
globalThis.MagnaMaterials = {
  "version": "magna-pilot1-1.0.1",
  "demographicFields": [
    "age",
    "sex",
    "ethnicity"
  ],
  "bank": [
    {
      "id": "I1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "shelving",
      "category": "intentional",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan wanted the shelving unit to fall on Jordan and cause an injury. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but deliberately left them loose. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan died from the injuries later that day. A representative of Jordan Reed's estate filed a civil lawsuit against Larton Home Goods on behalf of the estate, seeking damages for what happened to Jordan. The plaintiff in this case is Jordan Reed's estate."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed's estate"
    },
    {
      "id": "I2",
      "outcomeLabel": "Brain injury",
      "context": "shelving",
      "category": "intentional",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan wanted the shelving unit to fall on Jordan and cause an injury. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but deliberately left them loose. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with a traumatic brain injury. A year later, Jordan still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "I3",
      "outcomeLabel": "Neck and back injury",
      "context": "shelving",
      "category": "intentional",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan wanted the shelving unit to fall on Jordan and cause an injury. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but deliberately left them loose. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with injuries to the neck and back. A year later, Jordan still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "N1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "shelving",
      "category": "negligence",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but forgot to tighten them. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan died from the injuries later that day. A representative of Jordan Reed's estate filed a civil lawsuit against Larton Home Goods on behalf of the estate, seeking damages for what happened to Jordan. The plaintiff in this case is Jordan Reed's estate."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed's estate"
    },
    {
      "id": "N2",
      "outcomeLabel": "Brain injury",
      "context": "shelving",
      "category": "negligence",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but forgot to tighten them. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with a traumatic brain injury. A year later, Jordan still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "N3",
      "outcomeLabel": "Neck and back injury",
      "context": "shelving",
      "category": "negligence",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. Morgan knew that the bolts securing the unit to the brackets had to be tightened, but forgot to tighten them. Morgan then finished the installation without performing the final safety check, which would have revealed the loose bolts.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The loose bolts pulled free of the brackets. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with injuries to the neck and back. A year later, Jordan still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "S1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "shelving",
      "category": "strict",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. However, one bracket contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The flawed bracket broke, causing the unit to detach from the wall. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan died from the injuries later that day. A representative of Jordan Reed's estate filed a civil lawsuit against Larton Home Goods on behalf of the estate, seeking damages for what happened to Jordan. The plaintiff in this case is Jordan Reed's estate."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed's estate"
    },
    {
      "id": "S2",
      "outcomeLabel": "Brain injury",
      "context": "shelving",
      "category": "strict",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. However, one bracket contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The flawed bracket broke, causing the unit to detach from the wall. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with a traumatic brain injury. A year later, Jordan still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "S3",
      "outcomeLabel": "Neck and back injury",
      "context": "shelving",
      "category": "strict",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. However, one bracket contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. The flawed bracket broke, causing the unit to detach from the wall. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with injuries to the neck and back. A year later, Jordan still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "C1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "shelving",
      "category": "control",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. The shelving unit and its brackets had no defects.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. An unexpected lightning strike split a healthy tree on a neighboring property. The tree fell against the house and broke the section of wall holding the shelving unit. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan died from the injuries later that day. A representative of Jordan Reed's estate filed a civil lawsuit against Larton Home Goods on behalf of the estate, seeking damages for what happened to Jordan. The plaintiff in this case is Jordan Reed's estate."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed's estate"
    },
    {
      "id": "C2",
      "outcomeLabel": "Brain injury",
      "context": "shelving",
      "category": "control",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. The shelving unit and its brackets had no defects.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. An unexpected lightning strike split a healthy tree on a neighboring property. The tree fell against the house and broke the section of wall holding the shelving unit. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with a traumatic brain injury. A year later, Jordan still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "C3",
      "outcomeLabel": "Neck and back injury",
      "context": "shelving",
      "category": "control",
      "paragraphs": [
        "Larton Home Goods makes, sells, and installs household furniture. Morgan Hale is the company's owner and president and personally carries out some installations. Jordan Reed, a 38-year-old customer, bought a wall-mounted shelving unit from Larton and paid the company to install it at home. Morgan installed the unit using two metal support brackets.",
        "Morgan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the unit safely, and Morgan tightened the bolts and completed the final safety check. The shelving unit and its brackets had no defects.",
        "Later that day, Jordan began placing books on a shelf, following the instructions and staying within the stated weight limit. An unexpected lightning strike split a healthy tree on a neighboring property. The tree fell against the house and broke the section of wall holding the shelving unit. The unit fell onto Jordan and knocked Jordan to the floor.",
        "Jordan survived with injuries to the neck and back. A year later, Jordan still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Jordan Reed filed a civil lawsuit against Larton Home Goods seeking damages for what happened. Jordan Reed is the plaintiff in this case."
      ],
      "injured_person": "Jordan Reed",
      "company": "Larton Home Goods",
      "plaintiff": "Jordan Reed"
    },
    {
      "id": "B-I1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "bicycle",
      "category": "intentional",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan wanted the bicycle's brakes to fail while Casey was riding and cause an injury. Rowan knew that the cables operating the brakes had to be secured, but deliberately left them unsecured. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey died from the injuries later that day. A representative of Casey Lane's estate filed a civil lawsuit against Brinlow Cycles on behalf of the estate, seeking damages for what happened to Casey. The plaintiff in this case is Casey Lane's estate."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane's estate"
    },
    {
      "id": "B-I2",
      "outcomeLabel": "Brain injury",
      "context": "bicycle",
      "category": "intentional",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan wanted the bicycle's brakes to fail while Casey was riding and cause an injury. Rowan knew that the cables operating the brakes had to be secured, but deliberately left them unsecured. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with a traumatic brain injury. A year later, Casey still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-I3",
      "outcomeLabel": "Neck and back injury",
      "context": "bicycle",
      "category": "intentional",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan wanted the bicycle's brakes to fail while Casey was riding and cause an injury. Rowan knew that the cables operating the brakes had to be secured, but deliberately left them unsecured. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with injuries to the neck and back. A year later, Casey still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-N1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "bicycle",
      "category": "negligence",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. Rowan knew that the cables operating the brakes had to be secured, but forgot to secure them. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey died from the injuries later that day. A representative of Casey Lane's estate filed a civil lawsuit against Brinlow Cycles on behalf of the estate, seeking damages for what happened to Casey. The plaintiff in this case is Casey Lane's estate."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane's estate"
    },
    {
      "id": "B-N2",
      "outcomeLabel": "Brain injury",
      "context": "bicycle",
      "category": "negligence",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. Rowan knew that the cables operating the brakes had to be secured, but forgot to secure them. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with a traumatic brain injury. A year later, Casey still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-N3",
      "outcomeLabel": "Neck and back injury",
      "context": "bicycle",
      "category": "negligence",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. Rowan knew that the cables operating the brakes had to be secured, but forgot to secure them. Rowan then finished the assembly without performing the final safety check, which would have revealed the unsecured cables.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the unsecured cables came loose and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with injuries to the neck and back. A year later, Casey still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-S1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "bicycle",
      "category": "strict",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. However, the braking system contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the internal flaw caused the braking system to fail and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey died from the injuries later that day. A representative of Casey Lane's estate filed a civil lawsuit against Brinlow Cycles on behalf of the estate, seeking damages for what happened to Casey. The plaintiff in this case is Casey Lane's estate."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane's estate"
    },
    {
      "id": "B-S2",
      "outcomeLabel": "Brain injury",
      "context": "bicycle",
      "category": "strict",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. However, the braking system contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the internal flaw caused the braking system to fail and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with a traumatic brain injury. A year later, Casey still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-S3",
      "outcomeLabel": "Neck and back injury",
      "context": "bicycle",
      "category": "strict",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. However, the braking system contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. Casey applied the brakes, but the internal flaw caused the braking system to fail and the brakes did not slow the bicycle. Casey could not slow down enough to make the turn and fell onto the paved path.",
        "Casey survived with injuries to the neck and back. A year later, Casey still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-C1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "bicycle",
      "category": "control",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. The bicycle and its braking system had no defects.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. A deer suddenly ran from the woods directly into Casey's path, too close for Casey to stop. Casey applied the brakes, which worked normally, but had to swerve to avoid the deer and fell onto the paved path.",
        "Casey died from the injuries later that day. A representative of Casey Lane's estate filed a civil lawsuit against Brinlow Cycles on behalf of the estate, seeking damages for what happened to Casey. The plaintiff in this case is Casey Lane's estate."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane's estate"
    },
    {
      "id": "B-C2",
      "outcomeLabel": "Brain injury",
      "context": "bicycle",
      "category": "control",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. The bicycle and its braking system had no defects.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. A deer suddenly ran from the woods directly into Casey's path, too close for Casey to stop. Casey applied the brakes, which worked normally, but had to swerve to avoid the deer and fell onto the paved path.",
        "Casey survived with a traumatic brain injury. A year later, Casey still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "B-C3",
      "outcomeLabel": "Neck and back injury",
      "context": "bicycle",
      "category": "control",
      "paragraphs": [
        "Brinlow Cycles makes, sells, and assembles bicycles. Rowan Blake is the company's owner and president and personally carries out some assemblies. Casey Lane, a 38-year-old customer, bought a bicycle from Brinlow and paid the company to assemble it for use. Rowan fitted the bicycle's braking system.",
        "Rowan did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the bicycle safely, and Rowan secured the brake cables and completed the final safety check. The bicycle and its braking system had no defects.",
        "Later that day, Casey rode the bicycle on a paved cycle path, wearing a helmet and following the instructions. Casey approached a bend on a downhill section at an ordinary riding speed. A deer suddenly ran from the woods directly into Casey's path, too close for Casey to stop. Casey applied the brakes, which worked normally, but had to swerve to avoid the deer and fell onto the paved path.",
        "Casey survived with injuries to the neck and back. A year later, Casey still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Casey Lane filed a civil lawsuit against Brinlow Cycles seeking damages for what happened. Casey Lane is the plaintiff in this case."
      ],
      "injured_person": "Casey Lane",
      "company": "Brinlow Cycles",
      "plaintiff": "Casey Lane"
    },
    {
      "id": "L-I1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "ladder",
      "category": "intentional",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery wanted the ladder to collapse while Taylor was standing on it and cause an injury. Avery knew that the support mechanism had to be securely fastened to the frame, but deliberately left it loosely attached. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor died from the injuries later that day. A representative of Taylor Brooks's estate filed a civil lawsuit against Darsen Ladders on behalf of the estate, seeking damages for what happened to Taylor. The plaintiff in this case is Taylor Brooks's estate."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks's estate"
    },
    {
      "id": "L-I2",
      "outcomeLabel": "Brain injury",
      "context": "ladder",
      "category": "intentional",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery wanted the ladder to collapse while Taylor was standing on it and cause an injury. Avery knew that the support mechanism had to be securely fastened to the frame, but deliberately left it loosely attached. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with a traumatic brain injury. A year later, Taylor still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-I3",
      "outcomeLabel": "Neck and back injury",
      "context": "ladder",
      "category": "intentional",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery wanted the ladder to collapse while Taylor was standing on it and cause an injury. Avery knew that the support mechanism had to be securely fastened to the frame, but deliberately left it loosely attached. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with injuries to the neck and back. A year later, Taylor still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-N1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "ladder",
      "category": "negligence",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. Avery knew that the support mechanism had to be securely fastened to the frame, but forgot to fasten it securely. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor died from the injuries later that day. A representative of Taylor Brooks's estate filed a civil lawsuit against Darsen Ladders on behalf of the estate, seeking damages for what happened to Taylor. The plaintiff in this case is Taylor Brooks's estate."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks's estate"
    },
    {
      "id": "L-N2",
      "outcomeLabel": "Brain injury",
      "context": "ladder",
      "category": "negligence",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. Avery knew that the support mechanism had to be securely fastened to the frame, but forgot to fasten it securely. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with a traumatic brain injury. A year later, Taylor still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-N3",
      "outcomeLabel": "Neck and back injury",
      "context": "ladder",
      "category": "negligence",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. Avery knew that the support mechanism had to be securely fastened to the frame, but forgot to fasten it securely. Avery then finished the assembly without performing the final safety check, which would have revealed the loose attachment.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The loosely attached support mechanism came away from the frame. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with injuries to the neck and back. A year later, Taylor still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-S1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "ladder",
      "category": "strict",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. However, the support mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The internal flaw caused the support mechanism to break. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor died from the injuries later that day. A representative of Taylor Brooks's estate filed a civil lawsuit against Darsen Ladders on behalf of the estate, seeking damages for what happened to Taylor. The plaintiff in this case is Taylor Brooks's estate."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks's estate"
    },
    {
      "id": "L-S2",
      "outcomeLabel": "Brain injury",
      "context": "ladder",
      "category": "strict",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. However, the support mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The internal flaw caused the support mechanism to break. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with a traumatic brain injury. A year later, Taylor still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-S3",
      "outcomeLabel": "Neck and back injury",
      "context": "ladder",
      "category": "strict",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. However, the support mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and assembler would perform.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. The internal flaw caused the support mechanism to break. The ladder folded beneath Taylor, and Taylor fell onto the paved ground.",
        "Taylor survived with injuries to the neck and back. A year later, Taylor still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-C1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "ladder",
      "category": "control",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. The ladder and its support mechanism had no defects.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. A branch unexpectedly broke off a healthy tree on a neighboring property and struck the ladder. The ladder was working properly, but the impact knocked it over, and Taylor fell onto the paved ground.",
        "Taylor died from the injuries later that day. A representative of Taylor Brooks's estate filed a civil lawsuit against Darsen Ladders on behalf of the estate, seeking damages for what happened to Taylor. The plaintiff in this case is Taylor Brooks's estate."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks's estate"
    },
    {
      "id": "L-C2",
      "outcomeLabel": "Brain injury",
      "context": "ladder",
      "category": "control",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. The ladder and its support mechanism had no defects.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. A branch unexpectedly broke off a healthy tree on a neighboring property and struck the ladder. The ladder was working properly, but the impact knocked it over, and Taylor fell onto the paved ground.",
        "Taylor survived with a traumatic brain injury. A year later, Taylor still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "L-C3",
      "outcomeLabel": "Neck and back injury",
      "context": "ladder",
      "category": "control",
      "paragraphs": [
        "Darsen Ladders makes, sells, and assembles ladders. Avery Grant is the company's owner and president and personally carries out some assemblies. Taylor Brooks, a 38-year-old customer, bought a folding ladder from Darsen and paid the company to assemble it for use. Avery fitted the support mechanism that holds the ladder open.",
        "Avery did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the ladder safely, and Avery fastened the support mechanism securely and completed the final safety check. The ladder and its support mechanism had no defects.",
        "Later that day, Taylor used the ladder to clean a ground-floor window at home. Taylor followed the setup instructions, placed the ladder on firm, level ground, and stood on a permitted step within the stated weight limit. A branch unexpectedly broke off a healthy tree on a neighboring property and struck the ladder. The ladder was working properly, but the impact knocked it over, and Taylor fell onto the paved ground.",
        "Taylor survived with injuries to the neck and back. A year later, Taylor still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Taylor Brooks filed a civil lawsuit against Darsen Ladders seeking damages for what happened. Taylor Brooks is the plaintiff in this case."
      ],
      "injured_person": "Taylor Brooks",
      "company": "Darsen Ladders",
      "plaintiff": "Taylor Brooks"
    },
    {
      "id": "T-I1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "treadmill",
      "category": "intentional",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew wanted the treadmill's belt to stop suddenly while Alex was using it and cause an injury. Drew knew that the belt tension had to be adjusted before use, but deliberately left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex died from the injuries later that day. A representative of Alex Parker's estate filed a civil lawsuit against Velden Fitness on behalf of the estate, seeking damages for what happened to Alex. The plaintiff in this case is Alex Parker's estate."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker's estate"
    },
    {
      "id": "T-I2",
      "outcomeLabel": "Brain injury",
      "context": "treadmill",
      "category": "intentional",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew wanted the treadmill's belt to stop suddenly while Alex was using it and cause an injury. Drew knew that the belt tension had to be adjusted before use, but deliberately left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with a traumatic brain injury. A year later, Alex still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-I3",
      "outcomeLabel": "Neck and back injury",
      "context": "treadmill",
      "category": "intentional",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew wanted the treadmill's belt to stop suddenly while Alex was using it and cause an injury. Drew knew that the belt tension had to be adjusted before use, but deliberately left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with injuries to the neck and back. A year later, Alex still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-N1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "treadmill",
      "category": "negligence",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. Drew knew that the belt tension had to be adjusted before use, but forgot to adjust it and left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex died from the injuries later that day. A representative of Alex Parker's estate filed a civil lawsuit against Velden Fitness on behalf of the estate, seeking damages for what happened to Alex. The plaintiff in this case is Alex Parker's estate."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker's estate"
    },
    {
      "id": "T-N2",
      "outcomeLabel": "Brain injury",
      "context": "treadmill",
      "category": "negligence",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. Drew knew that the belt tension had to be adjusted before use, but forgot to adjust it and left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with a traumatic brain injury. A year later, Alex still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-N3",
      "outcomeLabel": "Neck and back injury",
      "context": "treadmill",
      "category": "negligence",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. Drew knew that the belt tension had to be adjusted before use, but forgot to adjust it and left the belt too tight. Drew then finished the installation without performing the final safety check, which would have revealed the excessive tension.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The excessive tension caused the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with injuries to the neck and back. A year later, Alex still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-S1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "treadmill",
      "category": "strict",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. However, the drive mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The internal flaw caused the drive mechanism to fail and the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex died from the injuries later that day. A representative of Alex Parker's estate filed a civil lawsuit against Velden Fitness on behalf of the estate, seeking damages for what happened to Alex. The plaintiff in this case is Alex Parker's estate."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker's estate"
    },
    {
      "id": "T-S2",
      "outcomeLabel": "Brain injury",
      "context": "treadmill",
      "category": "strict",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. However, the drive mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The internal flaw caused the drive mechanism to fail and the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with a traumatic brain injury. A year later, Alex still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-S3",
      "outcomeLabel": "Neck and back injury",
      "context": "treadmill",
      "category": "strict",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. However, the drive mechanism contained an internal flaw introduced during manufacturing. The flaw could not have been detected by the checks a reasonably careful manufacturer and installer would perform.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. The internal flaw caused the drive mechanism to fail and the running belt to stop abruptly. Alex lost balance and fell off the treadmill onto the floor.",
        "Alex survived with injuries to the neck and back. A year later, Alex still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-C1",
      "outcomeLabel": "Death (wrongful-death condition)",
      "context": "treadmill",
      "category": "control",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. The treadmill and its drive mechanism had no defects.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. An unexpected earth tremor jolted the floor while the treadmill was working normally. The jolt knocked Alex off balance, and Alex fell off the treadmill onto the floor.",
        "Alex died from the injuries later that day. A representative of Alex Parker's estate filed a civil lawsuit against Velden Fitness on behalf of the estate, seeking damages for what happened to Alex. The plaintiff in this case is Alex Parker's estate."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker's estate"
    },
    {
      "id": "T-C2",
      "outcomeLabel": "Brain injury",
      "context": "treadmill",
      "category": "control",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. The treadmill and its drive mechanism had no defects.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. An unexpected earth tremor jolted the floor while the treadmill was working normally. The jolt knocked Alex off balance, and Alex fell off the treadmill onto the floor.",
        "Alex survived with a traumatic brain injury. A year later, Alex still had serious difficulties with memory and concentration and needed daily help with everyday activities. Doctors expected these difficulties to be permanent. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    },
    {
      "id": "T-C3",
      "outcomeLabel": "Neck and back injury",
      "context": "treadmill",
      "category": "control",
      "paragraphs": [
        "Velden Fitness makes, sells, and installs exercise equipment. Drew Mercer is the company's owner and president and personally carries out some installations. Alex Parker, a 38-year-old customer, bought a treadmill from Velden and paid the company to install it at home. Drew set up the treadmill and its running belt.",
        "Drew did not want anyone to be injured. The company took the precautions normally required to manufacture and inspect the treadmill safely, and Drew adjusted the belt tension correctly and completed the final safety check. The treadmill and its drive mechanism had no defects.",
        "Later that day, Alex used the treadmill at a recommended walking speed, wearing suitable shoes and using the safety clip as instructed. An unexpected earth tremor jolted the floor while the treadmill was working normally. The jolt knocked Alex off balance, and Alex fell off the treadmill onto the floor.",
        "Alex survived with injuries to the neck and back. A year later, Alex still had daily pain that limited lifting and prolonged sitting, but could manage everyday activities independently. Doctors expected the pain to persist. Alex Parker filed a civil lawsuit against Velden Fitness seeking damages for what happened. Alex Parker is the plaintiff in this case."
      ],
      "injured_person": "Alex Parker",
      "company": "Velden Fitness",
      "plaintiff": "Alex Parker"
    }
  ],
  "groups": [
    {
      "code": "p01",
      "target": 20,
      "case_ids": [
        "B-N1",
        "L-S2",
        "T-C3"
      ]
    },
    {
      "code": "p02",
      "target": 20,
      "case_ids": [
        "B-I1",
        "L-C2",
        "T-S3"
      ]
    },
    {
      "code": "p03",
      "target": 20,
      "case_ids": [
        "B-C1",
        "L-I2",
        "T-N3"
      ]
    },
    {
      "code": "p04",
      "target": 20,
      "case_ids": [
        "B-S1",
        "L-N2",
        "T-I3"
      ]
    },
    {
      "code": "p05",
      "target": 20,
      "case_ids": [
        "N1",
        "L-C3",
        "T-S2"
      ]
    },
    {
      "code": "p06",
      "target": 20,
      "case_ids": [
        "I1",
        "L-S3",
        "T-C2"
      ]
    },
    {
      "code": "p07",
      "target": 20,
      "case_ids": [
        "C1",
        "L-N3",
        "T-I2"
      ]
    },
    {
      "code": "p08",
      "target": 20,
      "case_ids": [
        "S1",
        "L-I3",
        "T-N2"
      ]
    },
    {
      "code": "p09",
      "target": 20,
      "case_ids": [
        "S2",
        "B-C3",
        "T-N1"
      ]
    },
    {
      "code": "p10",
      "target": 20,
      "case_ids": [
        "C2",
        "B-S3",
        "T-I1"
      ]
    },
    {
      "code": "p11",
      "target": 20,
      "case_ids": [
        "I2",
        "B-N3",
        "T-C1"
      ]
    },
    {
      "code": "p12",
      "target": 20,
      "case_ids": [
        "N2",
        "B-I3",
        "T-S1"
      ]
    },
    {
      "code": "p13",
      "target": 20,
      "case_ids": [
        "C3",
        "B-S2",
        "L-N1"
      ]
    },
    {
      "code": "p14",
      "target": 20,
      "case_ids": [
        "S3",
        "B-C2",
        "L-I1"
      ]
    },
    {
      "code": "p15",
      "target": 20,
      "case_ids": [
        "N3",
        "B-I2",
        "L-C1"
      ]
    },
    {
      "code": "p16",
      "target": 20,
      "case_ids": [
        "I3",
        "B-N2",
        "L-S1"
      ]
    }
  ],
  "questions": {
    "compensatory": "How strong is your desire to award the plaintiff, {plaintiff}, compensatory damages?",
    "punitive": "How strong is your desire to award punitive damages against the company, {company}?"
  },
  "checks": {
    "punitive_check": {
      "question": "Are punitive damages intended to punish the company being sued and discourage similar conduct?",
      "correct": "yes"
    },
    "compensatory_check": {
      "question": "Are compensatory damages intended to compensate for harm and losses?",
      "correct": "yes"
    }
  },
  "attentionQuestion": "Twenty-one is an even number."
};
