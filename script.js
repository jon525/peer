const categories = {
  core: {
    kicker: "Core electrical formulas",
    title: "Ohm's Law and power tools",
    description:
      "Calculate voltage, current, resistance, and power with answer plus working steps.",
    hint: "Check units before calculating. Convert milliamps, kilovolts, or kilo-ohms when needed.",
  },
  units: {
    kicker: "Unit conversions",
    title: "Convert common electrical units",
    description:
      "Convert apprentice-friendly units like mA to A, W to kW, mm to m, time, and energy.",
    hint: "Use this before formulas when a question gives values in mixed units.",
  },
  math: {
    kicker: "Formula / math help",
    title: "Math support for working steps",
    description:
      "Transpose common formulas and convert fractions, decimals, and percentages.",
    hint: "Guided formulas keep the rearranging reliable and easy to check.",
  },
  phase: {
    kicker: "AC power",
    title: "Single-phase and three-phase",
    description:
      "Calculate single-phase and three-phase power, current, voltage, and power factor.",
    hint: "Three-phase calculations use line voltage here. Check your course wording when a question mentions phase voltage.",
  },
  cable: {
    kicker: "Cable calculations",
    title: "Cable and voltage drop",
    description:
      "Calculate voltage drop from a cable table value, current, route length, and supply voltage.",
    hint: "This does the arithmetic from a table value you provide. It does not approve cable size.",
  },
  practice: {
    kicker: "Practice mode",
    title: "Quick electrical maths practice",
    description:
      "Answer short apprentice-style questions and check the working straight away.",
    hint: "Use this for confidence checks after you have tried the calculator tools.",
  },
  notes: {
    kicker: "Course notes check",
    title: "Course formulas and table reminders",
    description:
      "Store formulas, table values, and reminders from your own course material.",
    hint: "Anything saved here should be checked against your Australian course material before relying on it.",
  },
  saved: {
    kicker: "Saved locally",
    title: "Saved and recent calculations",
    description:
      "Review recent answers saved in this browser on this device.",
    hint: "This is a study aid history, not a formal record.",
  },
};

const homeView = document.querySelector("#homeView");
const menuHeading = document.querySelector("#menuHeading");
const categoryGrid = document.querySelector("#categoryGrid");
const toolView = document.querySelector("#toolView");
const backButton = document.querySelector("#backButton");
const toolKicker = document.querySelector("#toolKicker");
const toolTitle = document.querySelector("#toolTitle");
const toolDescription = document.querySelector("#toolDescription");
const toolHint = document.querySelector("#toolHint");
const placeholderTool = document.querySelector("#placeholderTool");
const coreCalculator = document.querySelector("#coreCalculator");
const converterTool = document.querySelector("#converterTool");
const mathTool = document.querySelector("#mathTool");
const phaseTool = document.querySelector("#phaseTool");
const cableTool = document.querySelector("#cableTool");
const practiceTool = document.querySelector("#practiceTool");
const notesTool = document.querySelector("#notesTool");
const savedTool = document.querySelector("#savedTool");
const coreForm = document.querySelector("#coreForm");
const targetChoices = document.querySelector("#targetChoices");
const formulaSelect = document.querySelector("#formulaSelect");
const inputFields = document.querySelector("#inputFields");
const decimalPlaces = document.querySelector("#decimalPlaces");
const answerValue = document.querySelector("#answerValue");
const formulaText = document.querySelector("#formulaText");
const workingSteps = document.querySelector("#workingSteps");
const coreHint = document.querySelector("#coreHint");
const coreWorkingTitle = document.querySelector("#coreWorkingTitle");
const converterForm = document.querySelector("#converterForm");
const converterGroupChoices = document.querySelector("#converterGroupChoices");
const converterTypeLabel = document.querySelector("#converterTypeLabel");
const converterType = document.querySelector("#converterType");
const converterValue = document.querySelector("#converterValue");
const converterValueUnit = document.querySelector("#converterValueUnit");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const converterDecimals = document.querySelector("#converterDecimals");
const converterWorkingTitle = document.querySelector("#converterWorkingTitle");
const converterAnswer = document.querySelector("#converterAnswer");
const converterBaseUnit = document.querySelector("#converterBaseUnit");
const converterSteps = document.querySelector("#converterSteps");
const converterHint = document.querySelector("#converterHint");
const mathForm = document.querySelector("#mathForm");
const mathModeChoices = document.querySelector("#mathModeChoices");
const transposeSection = document.querySelector("#transposeSection");
const fractionSection = document.querySelector("#fractionSection");
const percentSection = document.querySelector("#percentSection");
const transposeFormula = document.querySelector("#transposeFormula");
const transposeTarget = document.querySelector("#transposeTarget");
const fractionNumerator = document.querySelector("#fractionNumerator");
const fractionDenominator = document.querySelector("#fractionDenominator");
const percentMode = document.querySelector("#percentMode");
const percentInputs = document.querySelector("#percentInputs");
const mathDecimals = document.querySelector("#mathDecimals");
const mathWorkingTitle = document.querySelector("#mathWorkingTitle");
const mathAnswer = document.querySelector("#mathAnswer");
const mathFormulaText = document.querySelector("#mathFormulaText");
const mathSteps = document.querySelector("#mathSteps");
const mathHint = document.querySelector("#mathHint");
const phaseForm = document.querySelector("#phaseForm");
const phaseTypeChoices = document.querySelector("#phaseTypeChoices");
const phaseTargetChoices = document.querySelector("#phaseTargetChoices");
const phaseInputFields = document.querySelector("#phaseInputFields");
const phaseDecimals = document.querySelector("#phaseDecimals");
const phaseWorkingTitle = document.querySelector("#phaseWorkingTitle");
const phaseAnswer = document.querySelector("#phaseAnswer");
const phaseFormulaText = document.querySelector("#phaseFormulaText");
const phaseSteps = document.querySelector("#phaseSteps");
const phaseHint = document.querySelector("#phaseHint");
const cableForm = document.querySelector("#cableForm");
const cableSupplyVoltage = document.querySelector("#cableSupplyVoltage");
const cableVoltageUnit = document.querySelector("#cableVoltageUnit");
const cableCurrent = document.querySelector("#cableCurrent");
const cableCurrentUnit = document.querySelector("#cableCurrentUnit");
const cableLength = document.querySelector("#cableLength");
const cableLengthUnit = document.querySelector("#cableLengthUnit");
const cableMvPerAmpMetre = document.querySelector("#cableMvPerAmpMetre");
const cableDecimals = document.querySelector("#cableDecimals");
const cableAnswer = document.querySelector("#cableAnswer");
const cableFormulaText = document.querySelector("#cableFormulaText");
const cableSteps = document.querySelector("#cableSteps");
const cableHint = document.querySelector("#cableHint");
const practiceTypeChoices = document.querySelector("#practiceTypeChoices");
const practiceQuestionTag = document.querySelector("#practiceQuestionTag");
const practiceQuestion = document.querySelector("#practiceQuestion");
const practicePrompt = document.querySelector("#practicePrompt");
const practiceAnswer = document.querySelector("#practiceAnswer");
const practiceUnit = document.querySelector("#practiceUnit");
const newPracticeQuestion = document.querySelector("#newPracticeQuestion");
const checkPracticeAnswer = document.querySelector("#checkPracticeAnswer");
const practiceWorkingTitle = document.querySelector("#practiceWorkingTitle");
const practiceScore = document.querySelector("#practiceScore");
const practiceFormula = document.querySelector("#practiceFormula");
const practiceSteps = document.querySelector("#practiceSteps");
const practiceHint = document.querySelector("#practiceHint");
const noteForm = document.querySelector("#noteForm");
const noteTopic = document.querySelector("#noteTopic");
const noteValue = document.querySelector("#noteValue");
const noteSource = document.querySelector("#noteSource");
const noteVerified = document.querySelector("#noteVerified");
const courseNotesList = document.querySelector("#courseNotesList");
const clearCourseNotes = document.querySelector("#clearCourseNotes");
const savedCount = document.querySelector("#savedCount");
const savedList = document.querySelector("#savedList");
const clearSavedCalculations = document.querySelector("#clearSavedCalculations");
const themeToggle = document.querySelector("#themeToggle");
const navButtons = document.querySelectorAll(".bottom-nav button");
const root = document.documentElement;
let activeTarget = "voltage";
let activeConverterGroup = "electrical";
let activeMathMode = "transpose";
let activePhaseType = "single";
let activePhaseTarget = "power";
let activePracticeType = "mixed";
let currentPracticeQuestion = null;
let practiceCorrect = 0;
let practiceTotal = 0;

const savedCalculationsKey = "electricalMathSavedCalculations";
const courseNotesKey = "electricalMathCourseNotes";

const coreFormulas = {
  voltage: [
    {
      id: "v-ir",
      label: "Voltage from current and resistance",
      resultLabel: "Voltage",
      unit: "V",
      formula: "V = I x R",
      inputs: [
        { key: "current", label: "Current", symbol: "I", unit: "A", units: "current" },
        { key: "resistance", label: "Resistance", symbol: "R", unit: "ohm", units: "resistance" },
      ],
      calculate: ({ current, resistance }) => current * resistance,
      substitution: ({ current, resistance }) => `V = ${current.display} x ${resistance.display}`,
      hint: "Use current in amps. If the question gives milliamps, convert mA to A first.",
    },
  ],
  current: [
    {
      id: "i-vr",
      label: "Current from voltage and resistance",
      resultLabel: "Current",
      unit: "A",
      formula: "I = V / R",
      inputs: [
        { key: "voltage", label: "Voltage", symbol: "V", unit: "V", units: "voltage" },
        { key: "resistance", label: "Resistance", symbol: "R", unit: "ohm", units: "resistance" },
      ],
      calculate: ({ voltage, resistance }) => voltage / resistance,
      substitution: ({ voltage, resistance }) => `I = ${voltage.display} / ${resistance.display}`,
      hint: "Resistance must be greater than zero, otherwise the division cannot be done.",
    },
  ],
  resistance: [
    {
      id: "r-vi",
      label: "Resistance from voltage and current",
      resultLabel: "Resistance",
      unit: "ohm",
      formula: "R = V / I",
      inputs: [
        { key: "voltage", label: "Voltage", symbol: "V", unit: "V", units: "voltage" },
        { key: "current", label: "Current", symbol: "I", unit: "A", units: "current" },
      ],
      calculate: ({ voltage, current }) => voltage / current,
      substitution: ({ voltage, current }) => `R = ${voltage.display} / ${current.display}`,
      hint: "Current must be in amps and greater than zero.",
    },
  ],
  power: [
    {
      id: "p-vi",
      label: "Power from voltage and current",
      resultLabel: "Power",
      unit: "W",
      formula: "P = V x I",
      inputs: [
        { key: "voltage", label: "Voltage", symbol: "V", unit: "V", units: "voltage" },
        { key: "current", label: "Current", symbol: "I", unit: "A", units: "current" },
      ],
      calculate: ({ voltage, current }) => voltage * current,
      substitution: ({ voltage, current }) => `P = ${voltage.display} x ${current.display}`,
      hint: "This is the quickest power formula when voltage and current are both known.",
    },
    {
      id: "p-ir",
      label: "Power from current and resistance",
      resultLabel: "Power",
      unit: "W",
      formula: "P = I^2 x R",
      inputs: [
        { key: "current", label: "Current", symbol: "I", unit: "A", units: "current" },
        { key: "resistance", label: "Resistance", symbol: "R", unit: "ohm", units: "resistance" },
      ],
      calculate: ({ current, resistance }) => current * current * resistance,
      substitution: ({ current, resistance }) => `P = (${current.display})^2 x ${resistance.display}`,
      hint: "Square the current first, then multiply by resistance.",
    },
    {
      id: "p-vr",
      label: "Power from voltage and resistance",
      resultLabel: "Power",
      unit: "W",
      formula: "P = V^2 / R",
      inputs: [
        { key: "voltage", label: "Voltage", symbol: "V", unit: "V", units: "voltage" },
        { key: "resistance", label: "Resistance", symbol: "R", unit: "ohm", units: "resistance" },
      ],
      calculate: ({ voltage, resistance }) => (voltage * voltage) / resistance,
      substitution: ({ voltage, resistance }) => `P = (${voltage.display})^2 / ${resistance.display}`,
      hint: "Resistance must be greater than zero. Square the voltage before dividing.",
    },
  ],
};

const unitOptions = {
  voltage: [
    { label: "nV", multiplier: 0.000000001 },
    { label: "uV", multiplier: 0.000001 },
    { label: "mV", multiplier: 0.001 },
    { label: "V", multiplier: 1 },
    { label: "kV", multiplier: 1000 },
    { label: "MV", multiplier: 1000000 },
  ],
  current: [
    { label: "nA", multiplier: 0.000000001 },
    { label: "uA", multiplier: 0.000001 },
    { label: "mA", multiplier: 0.001 },
    { label: "A", multiplier: 1 },
    { label: "kA", multiplier: 1000 },
    { label: "MA", multiplier: 1000000 },
  ],
  resistance: [
    { label: "uohm", multiplier: 0.000001 },
    { label: "mOhm", multiplier: 0.001 },
    { label: "ohm", multiplier: 1 },
    { label: "kohm", multiplier: 1000 },
    { label: "Mohm", multiplier: 1000000 },
    { label: "Gohm", multiplier: 1000000000 },
  ],
};

const powerUnits = [
  { label: "W", multiplier: 1 },
  { label: "kW", multiplier: 1000 },
  { label: "MW", multiplier: 1000000 },
];

const phaseInputs = {
  voltage: { key: "voltage", label: "Voltage", symbol: "V", unit: "V", units: "voltage" },
  current: { key: "current", label: "Current", symbol: "I", unit: "A", units: "current" },
  power: { key: "power", label: "Power", symbol: "P", unit: "W", units: "power" },
  pf: { key: "pf", label: "Power factor", symbol: "PF", unit: "PF", units: "pf" },
};

const phaseFormulaCopy = {
  single: {
    power: "P = V x I x PF",
    current: "I = P / (V x PF)",
    voltage: "V = P / (I x PF)",
    pf: "PF = P / (V x I)",
  },
  three: {
    power: "P = sqrt(3) x V x I x PF",
    current: "I = P / (sqrt(3) x V x PF)",
    voltage: "V = P / (sqrt(3) x I x PF)",
    pf: "PF = P / (sqrt(3) x V x I)",
  },
};

const converterGroups = {
  electrical: {
    title: "Electrical conversion",
    hint: "These are the units most likely to trip you up before using electrical formulas.",
    types: {
      voltage: {
        label: "Voltage",
        baseUnit: "V",
        units: unitOptions.voltage,
      },
      current: {
        label: "Current",
        baseUnit: "A",
        units: unitOptions.current,
      },
      resistance: {
        label: "Resistance",
        baseUnit: "ohm",
        units: unitOptions.resistance,
      },
      power: {
        label: "Power",
        baseUnit: "W",
        units: [
          { label: "uW", multiplier: 0.000001 },
          { label: "mW", multiplier: 0.001 },
          { label: "W", multiplier: 1 },
          { label: "kW", multiplier: 1000 },
          { label: "MW", multiplier: 1000000 },
        ],
      },
    },
  },
  length: {
    title: "Length conversion",
    hint: "Useful for cable length, conduit work, and later voltage drop calculations.",
    types: {
      length: {
        label: "Length",
        baseUnit: "m",
        units: [
          { label: "mm", multiplier: 0.001 },
          { label: "cm", multiplier: 0.01 },
          { label: "m", multiplier: 1 },
          { label: "km", multiplier: 1000 },
        ],
      },
    },
  },
  energy: {
    title: "Energy conversion",
    hint: "Useful when working between watt-hours and kilowatt-hours.",
    types: {
      energy: {
        label: "Energy",
        baseUnit: "Wh",
        units: [
          { label: "Wh", multiplier: 1 },
          { label: "kWh", multiplier: 1000 },
          { label: "MWh", multiplier: 1000000 },
        ],
      },
    },
  },
  time: {
    title: "Time conversion",
    hint: "Useful when a question gives minutes but the formula expects hours, or vice versa.",
    types: {
      time: {
        label: "Time",
        baseUnit: "s",
        units: [
          { label: "seconds", multiplier: 1 },
          { label: "minutes", multiplier: 60 },
          { label: "hours", multiplier: 3600 },
        ],
      },
    },
  },
};

const transposeFamilies = {
  ohmsLaw: {
    label: "Ohm's Law",
    base: "V = I x R",
    hint: "Use this when voltage, current, and resistance are connected.",
    targets: [
      {
        key: "V",
        label: "Voltage (V)",
        result: "V = I x R",
        steps: [
          "Start with V = I x R.",
          "V is already by itself.",
          "Use V = I x R.",
        ],
      },
      {
        key: "I",
        label: "Current (I)",
        result: "I = V / R",
        steps: [
          "Start with V = I x R.",
          "Divide both sides by R.",
          "V / R = I, so I = V / R.",
        ],
      },
      {
        key: "R",
        label: "Resistance (R)",
        result: "R = V / I",
        steps: [
          "Start with V = I x R.",
          "Divide both sides by I.",
          "V / I = R, so R = V / I.",
        ],
      },
    ],
  },
  powerVI: {
    label: "Power: P = V x I",
    base: "P = V x I",
    hint: "Use this when power, voltage, and current are connected.",
    targets: [
      {
        key: "P",
        label: "Power (P)",
        result: "P = V x I",
        steps: [
          "Start with P = V x I.",
          "P is already by itself.",
          "Use P = V x I.",
        ],
      },
      {
        key: "V",
        label: "Voltage (V)",
        result: "V = P / I",
        steps: [
          "Start with P = V x I.",
          "Divide both sides by I.",
          "P / I = V, so V = P / I.",
        ],
      },
      {
        key: "I",
        label: "Current (I)",
        result: "I = P / V",
        steps: [
          "Start with P = V x I.",
          "Divide both sides by V.",
          "P / V = I, so I = P / V.",
        ],
      },
    ],
  },
  powerIR: {
    label: "Power: P = I^2 x R",
    base: "P = I^2 x R",
    hint: "This one introduces square and square root steps.",
    targets: [
      {
        key: "P",
        label: "Power (P)",
        result: "P = I^2 x R",
        steps: [
          "Start with P = I^2 x R.",
          "P is already by itself.",
          "Use P = I^2 x R.",
        ],
      },
      {
        key: "I",
        label: "Current (I)",
        result: "I = sqrt(P / R)",
        steps: [
          "Start with P = I^2 x R.",
          "Divide both sides by R: P / R = I^2.",
          "Take the square root: I = sqrt(P / R).",
        ],
      },
      {
        key: "R",
        label: "Resistance (R)",
        result: "R = P / I^2",
        steps: [
          "Start with P = I^2 x R.",
          "Divide both sides by I^2.",
          "R = P / I^2.",
        ],
      },
    ],
  },
  powerVR: {
    label: "Power: P = V^2 / R",
    base: "P = V^2 / R",
    hint: "This one is useful when you know voltage and resistance.",
    targets: [
      {
        key: "P",
        label: "Power (P)",
        result: "P = V^2 / R",
        steps: [
          "Start with P = V^2 / R.",
          "P is already by itself.",
          "Use P = V^2 / R.",
        ],
      },
      {
        key: "V",
        label: "Voltage (V)",
        result: "V = sqrt(P x R)",
        steps: [
          "Start with P = V^2 / R.",
          "Multiply both sides by R: P x R = V^2.",
          "Take the square root: V = sqrt(P x R).",
        ],
      },
      {
        key: "R",
        label: "Resistance (R)",
        result: "R = V^2 / P",
        steps: [
          "Start with P = V^2 / R.",
          "Multiply both sides by R: P x R = V^2.",
          "Divide both sides by P: R = V^2 / P.",
        ],
      },
    ],
  },
};

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
}

const savedTheme = localStorage.getItem("electricalMathTheme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

applyTheme(savedTheme || preferredTheme);

function loadStoredList(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function makeCard(title, meta, body, formula, status) {
  const card = document.createElement("article");
  card.className = "saved-card";

  const titleElement = document.createElement("strong");
  titleElement.textContent = title;
  card.append(titleElement);

  if (meta) {
    const metaElement = document.createElement("small");
    metaElement.textContent = meta;
    card.append(metaElement);
  }

  if (body) {
    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;
    card.append(bodyElement);
  }

  if (formula) {
    const formulaElement = document.createElement("code");
    formulaElement.textContent = formula;
    card.append(formulaElement);
  }

  if (status) {
    const statusElement = document.createElement("span");
    statusElement.className = "status-pill";
    statusElement.textContent = status;
    card.append(statusElement);
  }

  return card;
}

function recordCalculation(entry) {
  const items = loadStoredList(savedCalculationsKey);
  const nextEntry = {
    ...entry,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  const previous = items[0];

  if (
    previous &&
    previous.tool === nextEntry.tool &&
    previous.title === nextEntry.title &&
    previous.answer === nextEntry.answer &&
    previous.detail === nextEntry.detail
  ) {
    items[0] = { ...previous, createdAt: nextEntry.createdAt };
  } else {
    items.unshift(nextEntry);
  }

  saveStoredList(savedCalculationsKey, items.slice(0, 25));
  renderSavedCalculations();
}

function renderSavedCalculations() {
  const items = loadStoredList(savedCalculationsKey);
  savedCount.textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;
  savedList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      "No saved calculations yet. Run a calculator and the answer will appear here automatically.";
    savedList.append(empty);
    return;
  }

  items.forEach((item) => {
    savedList.append(
      makeCard(
        `${item.tool}: ${item.answer}`,
        `${item.title} - ${formatDateTime(item.createdAt)}`,
        item.detail,
        item.formula,
      ),
    );
  });
}

function renderCourseNotes() {
  const notes = loadStoredList(courseNotesKey);
  courseNotesList.innerHTML = "";

  if (!notes.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      "No course notes saved yet. Add formulas or table reminders when you have your course material handy.";
    courseNotesList.append(empty);
    return;
  }

  notes.forEach((note) => {
    courseNotesList.append(
      makeCard(
        note.topic,
        note.source || "No source added",
        note.value,
        "",
        note.verified ? "Checked" : "Needs check",
      ),
    );
  });
}

function setActiveNav(categoryKey) {
  navButtons.forEach((button) => {
    const isHome = button.hasAttribute("data-home") && !categoryKey;
    const isCategory = button.dataset.category === categoryKey;
    button.classList.toggle("active", isHome || isCategory);
  });
}

function showHome() {
  document.body.dataset.view = "home";
  homeView.hidden = true;
  menuHeading.hidden = false;
  categoryGrid.hidden = false;
  toolView.hidden = true;
  backButton.classList.add("is-hidden");
  setActiveNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCategory(categoryKey) {
  const category = categories[categoryKey];
  if (!category) return;

  document.body.dataset.view = "tool";
  toolKicker.textContent = category.kicker;
  toolTitle.textContent = category.title;
  toolDescription.textContent = category.description;
  toolHint.textContent = category.hint;
  const isCore = categoryKey === "core";
  const isUnits = categoryKey === "units";
  const isMath = categoryKey === "math";
  const isPhase = categoryKey === "phase";
  const isCable = categoryKey === "cable";
  const isPractice = categoryKey === "practice";
  const isNotes = categoryKey === "notes";
  const isSaved = categoryKey === "saved";
  placeholderTool.hidden =
    isCore || isUnits || isMath || isPhase || isCable || isPractice || isNotes || isSaved;
  coreCalculator.hidden = !isCore;
  converterTool.hidden = !isUnits;
  mathTool.hidden = !isMath;
  phaseTool.hidden = !isPhase;
  cableTool.hidden = !isCable;
  practiceTool.hidden = !isPractice;
  notesTool.hidden = !isNotes;
  savedTool.hidden = !isSaved;
  if (isSaved) renderSavedCalculations();
  if (isNotes) renderCourseNotes();

  homeView.hidden = true;
  menuHeading.hidden = true;
  categoryGrid.hidden = true;
  toolView.hidden = false;
  backButton.classList.remove("is-hidden");
  setActiveNav(categoryKey);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getActiveFormula() {
  return coreFormulas[activeTarget].find((formula) => formula.id === formulaSelect.value);
}

function formatValue(value) {
  const decimals = Number(decimalPlaces.value);
  if (!Number.isFinite(value)) return "";
  return value.toFixed(decimals);
}

function formatAnswer(value, unit) {
  const baseAnswer = `${formatValue(value)} ${unit}`;
  if (unit === "W" && Math.abs(value) >= 1000) {
    return `${baseAnswer} / ${formatValue(value / 1000)} kW`;
  }
  if (unit === "V" && Math.abs(value) >= 1000) {
    return `${baseAnswer} / ${formatValue(value / 1000)} kV`;
  }
  if (unit === "A" && Math.abs(value) < 1) {
    return `${baseAnswer} / ${formatValue(value * 1000)} mA`;
  }
  return baseAnswer;
}

function formatUsedValue(value, unit) {
  const absValue = Math.abs(value);
  const decimals = absValue > 0 && absValue < 1 ? 6 : Number(decimalPlaces.value);
  const formatted = value
    .toFixed(decimals)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
  return `${formatted} ${unit}`;
}

function formatConverterValue(value) {
  const absValue = Math.abs(value);
  const decimals = absValue > 0 && absValue < 1 ? 6 : Number(converterDecimals.value);
  return value
    .toFixed(decimals)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}

function formatMathValue(value) {
  const absValue = Math.abs(value);
  const decimals = absValue > 0 && absValue < 1 ? 6 : Number(mathDecimals.value);
  return value
    .toFixed(decimals)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}

function formatPhaseValue(value) {
  const absValue = Math.abs(value);
  const decimals = absValue > 0 && absValue < 1 ? 6 : Number(phaseDecimals.value);
  return value
    .toFixed(decimals)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}

function formatPhaseAnswer(value, unit) {
  if (unit === "W") {
    const base = `${formatPhaseValue(value)} W`;
    if (Math.abs(value) >= 1000) return `${base} / ${formatPhaseValue(value / 1000)} kW`;
    return base;
  }
  if (unit === "V") {
    const base = `${formatPhaseValue(value)} V`;
    if (Math.abs(value) >= 1000) return `${base} / ${formatPhaseValue(value / 1000)} kV`;
    return base;
  }
  if (unit === "A") {
    const base = `${formatPhaseValue(value)} A`;
    if (Math.abs(value) < 1 && value !== 0) return `${base} / ${formatPhaseValue(value * 1000)} mA`;
    return base;
  }
  if (unit === "PF") {
    const decimals = Number(phaseDecimals.value);
    return `${value.toFixed(decimals)} / ${(value * 100).toFixed(decimals)}%`;
  }
  return `${formatPhaseValue(value)} ${unit}`;
}

function formatCableValue(value) {
  const absValue = Math.abs(value);
  const decimals = absValue > 0 && absValue < 1 ? 4 : Number(cableDecimals.value);
  return value
    .toFixed(decimals)
    .replace(/(\.\d*?[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}

function resetWorking(formula) {
  coreWorkingTitle.textContent = `${formula.resultLabel} result`;
  answerValue.textContent = "Enter values";
  formulaText.textContent = formula.formula;
  workingSteps.innerHTML = `
    <li>Use the formula: ${formula.formula}.</li>
    <li>Enter the required values with the shown units.</li>
    <li>Press Calculate to show the answer and working.</li>
  `;
  coreHint.textContent = formula.hint;
}

function renderInputs(formula) {
  inputFields.innerHTML = formula.inputs
    .map((input) => {
      const options = unitOptions[input.units];
      const unitControl = options
        ? `<select class="unit-select" name="${input.key}Unit" aria-label="${input.label} unit">
            ${options
              .map(
                (option) =>
                  `<option value="${option.multiplier}" ${
                    option.label === input.unit ? "selected" : ""
                  }>${option.label}</option>`,
              )
              .join("")}
          </select>`
        : `<span>${input.unit}</span>`;

      return `
        <label>
          ${input.label} (${input.symbol})
          <span class="input-line ${options ? "has-select" : ""}">
            <input
              type="number"
              min="0"
              step="any"
              name="${input.key}"
              inputmode="decimal"
              autocomplete="off"
              required
            />
            ${unitControl}
          </span>
        </label>
      `;
    })
    .join("");
}

function renderFormulaOptions() {
  const formulas = coreFormulas[activeTarget];
  formulaSelect.innerHTML = formulas
    .map((formula) => `<option value="${formula.id}">${formula.label}</option>`)
    .join("");
  renderInputs(formulas[0]);
  resetWorking(formulas[0]);
}

function calculateCore() {
  const formula = getActiveFormula();
  const values = {};

  for (const input of formula.inputs) {
    const field = coreForm.elements[input.key];
    const unitField = coreForm.elements[`${input.key}Unit`];
    const typedValue = Number(field.value);
    const multiplier = unitField ? Number(unitField.value) : 1;
    const selectedUnit =
      unitField?.selectedOptions?.[0]?.textContent?.trim() || input.unit;
    const value = typedValue * multiplier;
    if (!Number.isFinite(value) || value <= 0) {
      answerValue.textContent = "Check inputs";
      formulaText.textContent = formula.formula;
      workingSteps.innerHTML = `
        <li>Use the formula: ${formula.formula}.</li>
        <li>Enter a positive value for ${input.label.toLowerCase()}.</li>
        <li>Check that the unit is ${input.unit}.</li>
      `;
      coreHint.textContent = formula.hint;
      return;
    }
    values[input.key] = {
      value,
      typedValue,
      selectedUnit,
      display: `${typedValue} ${selectedUnit}`,
      baseDisplay: formatUsedValue(value, input.unit),
    };
  }

  const baseValues = Object.fromEntries(
    Object.entries(values).map(([key, data]) => [key, data.value]),
  );
  const result = formula.calculate(baseValues);
  const formattedResult = formatAnswer(result, formula.unit);
  formulaText.textContent = formula.formula;
  answerValue.textContent = formattedResult;
  workingSteps.innerHTML = `
    <li>Formula: ${formula.formula}</li>
    <li>Substitute: ${formula.substitution(values)}</li>
    <li>Base units used: ${formula.inputs
      .map((input) => values[input.key].baseDisplay)
      .join(", ")}</li>
    <li>Answer: ${formattedResult}</li>
  `;
  coreHint.textContent = formula.hint;
  recordCalculation({
    tool: "Core",
    title: formula.label,
    answer: formattedResult,
    formula: formula.formula,
    detail: formula.substitution(values),
  });
}

function getActiveConverterType() {
  const group = converterGroups[activeConverterGroup];
  return group.types[converterType.value];
}

function renderConverterUnitSelect(selectElement, units, selectedLabel) {
  selectElement.innerHTML = units
    .map(
      (unit) =>
        `<option value="${unit.multiplier}" ${
          unit.label === selectedLabel ? "selected" : ""
        }>${unit.label}</option>`,
    )
    .join("");
}

function resetConverterWorking(type) {
  const group = converterGroups[activeConverterGroup];
  converterWorkingTitle.textContent = group.title;
  converterAnswer.textContent = "Enter a value";
  converterBaseUnit.textContent = type.baseUnit;
  converterValueUnit.textContent = fromUnit.selectedOptions[0]?.textContent || type.baseUnit;
  converterSteps.innerHTML = `
    <li>Choose the unit you are converting from.</li>
    <li>Choose the unit you want to convert to.</li>
    <li>Press Convert to show the answer and working.</li>
  `;
  converterHint.textContent = group.hint;
}

function renderConverterTypes() {
  const group = converterGroups[activeConverterGroup];
  const typeEntries = Object.entries(group.types);
  converterType.innerHTML = typeEntries
    .map(([key, type]) => `<option value="${key}">${type.label}</option>`)
    .join("");
  converterTypeLabel.hidden = typeEntries.length === 1;
  renderConverterUnits();
}

function renderConverterUnits() {
  const type = getActiveConverterType();
  const defaultFrom = type.units.find((unit) => unit.label === type.baseUnit)?.label || type.units[0].label;
  const defaultTo = type.units[Math.min(type.units.length - 1, type.units.findIndex((unit) => unit.label === defaultFrom) + 1)]?.label || type.units[0].label;
  renderConverterUnitSelect(fromUnit, type.units, defaultFrom);
  renderConverterUnitSelect(toUnit, type.units, defaultTo);
  resetConverterWorking(type);
}

function calculateConversion() {
  const type = getActiveConverterType();
  const value = Number(converterValue.value);
  const fromMultiplier = Number(fromUnit.value);
  const toMultiplier = Number(toUnit.value);
  const fromLabel = fromUnit.selectedOptions[0].textContent;
  const toLabel = toUnit.selectedOptions[0].textContent;

  if (!Number.isFinite(value) || value < 0) {
    converterAnswer.textContent = "Check input";
    converterSteps.innerHTML = `
      <li>Enter a positive value or zero.</li>
      <li>Check the selected from/to units.</li>
      <li>Try the conversion again.</li>
    `;
    return;
  }

  const baseValue = value * fromMultiplier;
  const result = baseValue / toMultiplier;
  const formattedBase = formatConverterValue(baseValue);
  const formattedResult = formatConverterValue(result);
  converterAnswer.textContent = `${formattedResult} ${toLabel}`;
  converterBaseUnit.textContent = type.baseUnit;
  converterSteps.innerHTML = `
    <li>Convert to base: ${value} ${fromLabel} x ${fromMultiplier} = ${formattedBase} ${type.baseUnit}</li>
    <li>Convert to target: ${formattedBase} ${type.baseUnit} / ${toMultiplier} = ${formattedResult} ${toLabel}</li>
    <li>Answer: ${formattedResult} ${toLabel}</li>
  `;
  recordCalculation({
    tool: "Units",
    title: type.label,
    answer: `${formattedResult} ${toLabel}`,
    formula: `${fromLabel} to ${toLabel}`,
    detail: `${value} ${fromLabel} = ${formattedResult} ${toLabel}`,
  });
}

function renderTransposeFamilies() {
  transposeFormula.innerHTML = Object.entries(transposeFamilies)
    .map(([key, family]) => `<option value="${key}">${family.label}</option>`)
    .join("");
  renderTransposeTargets();
}

function renderTransposeTargets() {
  const family = transposeFamilies[transposeFormula.value];
  transposeTarget.innerHTML = family.targets
    .map((target) => `<option value="${target.key}">${target.label}</option>`)
    .join("");
  resetTransposeWorking();
}

function getSelectedTransposeTarget() {
  const family = transposeFamilies[transposeFormula.value];
  return family.targets.find((target) => target.key === transposeTarget.value);
}

function resetTransposeWorking() {
  const family = transposeFamilies[transposeFormula.value];
  const target = getSelectedTransposeTarget() || family.targets[0];
  mathWorkingTitle.textContent = "Formula transposition";
  mathAnswer.textContent = target.result;
  mathFormulaText.textContent = family.base;
  mathSteps.innerHTML = `
    <li>Start with the common formula.</li>
    <li>Choose the value you need to find.</li>
    <li>Press Show Working to see each rearranging step.</li>
  `;
  mathHint.textContent = family.hint;
}

function calculateTranspose() {
  const family = transposeFamilies[transposeFormula.value];
  const target = getSelectedTransposeTarget();
  mathWorkingTitle.textContent = `Solve for ${target.label}`;
  mathAnswer.textContent = target.result;
  mathFormulaText.textContent = family.base;
  mathSteps.innerHTML = target.steps.map((step) => `<li>${step}</li>`).join("");
  mathHint.textContent = family.hint;
  recordCalculation({
    tool: "Math",
    title: `Transpose ${family.base}`,
    answer: target.result,
    formula: family.base,
    detail: `Solve for ${target.label}`,
  });
}

function renderPercentInputs() {
  const mode = percentMode.value;
  if (mode === "ofNumber") {
    percentInputs.innerHTML = `
      <label>
        Percent
        <span class="input-line">
          <input type="number" step="any" id="percentValue" inputmode="decimal" autocomplete="off" />
          <span>%</span>
        </span>
      </label>
      <label>
        Number
        <span class="input-line">
          <input type="number" step="any" id="percentNumber" inputmode="decimal" autocomplete="off" />
          <span>base</span>
        </span>
      </label>
    `;
  } else {
    const unit = mode === "toDecimal" ? "%" : "dec";
    percentInputs.innerHTML = `
      <label>
        Value
        <span class="input-line">
          <input type="number" step="any" id="percentValue" inputmode="decimal" autocomplete="off" />
          <span>${unit}</span>
        </span>
      </label>
    `;
  }
  resetPercentWorking();
}

function resetPercentWorking() {
  mathWorkingTitle.textContent = "Percentage helper";
  mathAnswer.textContent = "Enter values";
  mathFormulaText.textContent =
    percentMode.value === "ofNumber"
      ? "percent / 100 x number"
      : percentMode.value === "toDecimal"
        ? "percent / 100"
        : "decimal x 100";
  mathSteps.innerHTML = `
    <li>Choose the percentage helper.</li>
    <li>Enter the needed value.</li>
    <li>Press Show Working to see the result.</li>
  `;
  mathHint.textContent = "Percentages come up often in loads, tolerances, and comparison questions.";
}

function calculateFraction() {
  const numerator = Number(fractionNumerator.value);
  const denominator = Number(fractionDenominator.value);
  mathWorkingTitle.textContent = "Fraction to decimal";
  mathFormulaText.textContent = "numerator / denominator";

  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
    mathAnswer.textContent = "Check fraction";
    mathSteps.innerHTML = `
      <li>Enter a numerator.</li>
      <li>Enter a denominator that is not zero.</li>
      <li>Try the calculation again.</li>
    `;
    return;
  }

  const decimal = numerator / denominator;
  const percent = decimal * 100;
  mathAnswer.textContent = `${formatMathValue(decimal)} / ${formatMathValue(percent)}%`;
  mathSteps.innerHTML = `
    <li>Decimal: ${numerator} / ${denominator} = ${formatMathValue(decimal)}</li>
    <li>Percent: ${formatMathValue(decimal)} x 100 = ${formatMathValue(percent)}%</li>
    <li>Answer: ${formatMathValue(decimal)} or ${formatMathValue(percent)}%</li>
  `;
  mathHint.textContent = "Fractions are often easier to use once converted to decimals.";
  recordCalculation({
    tool: "Math",
    title: "Fraction to decimal",
    answer: `${formatMathValue(decimal)} / ${formatMathValue(percent)}%`,
    formula: "numerator / denominator",
    detail: `${numerator} / ${denominator}`,
  });
}

function calculatePercent() {
  const valueInput = document.querySelector("#percentValue");
  const numberInput = document.querySelector("#percentNumber");
  const value = Number(valueInput?.value);
  const number = Number(numberInput?.value);
  mathWorkingTitle.textContent = "Percentage helper";

  if (!Number.isFinite(value) || (percentMode.value === "ofNumber" && !Number.isFinite(number))) {
    mathAnswer.textContent = "Check values";
    mathSteps.innerHTML = `
      <li>Enter the required percentage value.</li>
      <li>Check any second value needed for this helper.</li>
      <li>Try the calculation again.</li>
    `;
    return;
  }

  if (percentMode.value === "toDecimal") {
    const result = value / 100;
    mathAnswer.textContent = formatMathValue(result);
    mathFormulaText.textContent = "percent / 100";
    mathSteps.innerHTML = `
      <li>${value}% / 100 = ${formatMathValue(result)}</li>
      <li>Answer: ${formatMathValue(result)}</li>
    `;
  } else if (percentMode.value === "fromDecimal") {
    const result = value * 100;
    mathAnswer.textContent = `${formatMathValue(result)}%`;
    mathFormulaText.textContent = "decimal x 100";
    mathSteps.innerHTML = `
      <li>${value} x 100 = ${formatMathValue(result)}%</li>
      <li>Answer: ${formatMathValue(result)}%</li>
    `;
  } else {
    const result = (value / 100) * number;
    mathAnswer.textContent = formatMathValue(result);
    mathFormulaText.textContent = "percent / 100 x number";
    mathSteps.innerHTML = `
      <li>${value}% / 100 = ${formatMathValue(value / 100)}</li>
      <li>${formatMathValue(value / 100)} x ${number} = ${formatMathValue(result)}</li>
      <li>Answer: ${formatMathValue(result)}</li>
    `;
  }
  mathHint.textContent = "Keep track of whether the question wants a decimal, a percent, or part of a value.";
  recordCalculation({
    tool: "Math",
    title: "Percentage helper",
    answer: mathAnswer.textContent,
    formula: mathFormulaText.textContent,
    detail: percentMode.selectedOptions[0]?.textContent || "Percent calculation",
  });
}

function setMathMode(mode) {
  activeMathMode = mode;
  transposeSection.hidden = mode !== "transpose";
  fractionSection.hidden = mode !== "fraction";
  percentSection.hidden = mode !== "percent";
  mathModeChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice.dataset.mathMode === mode);
  });

  if (mode === "transpose") resetTransposeWorking();
  if (mode === "fraction") {
    mathWorkingTitle.textContent = "Fraction to decimal";
    mathAnswer.textContent = "Enter fraction";
    mathFormulaText.textContent = "numerator / denominator";
    mathSteps.innerHTML = `
      <li>Enter the numerator.</li>
      <li>Enter the denominator.</li>
      <li>Press Show Working to convert to decimal and percent.</li>
    `;
    mathHint.textContent = "Fractions are often easier to use once converted to decimals.";
  }
  if (mode === "percent") resetPercentWorking();
}

function getPhaseNeededInputs() {
  return Object.values(phaseInputs).filter((input) => input.key !== activePhaseTarget);
}

function renderUnitOptions(options, defaultUnit) {
  return options
    .map(
      (option) =>
        `<option value="${option.multiplier}" ${
          option.label === defaultUnit ? "selected" : ""
        }>${option.label}</option>`,
    )
    .join("");
}

function renderPhaseInputs() {
  const neededInputs = getPhaseNeededInputs();
  phaseInputFields.innerHTML = neededInputs
    .map((input) => {
      if (input.units === "pf") {
        return `
          <label>
            ${input.label} (${input.symbol})
            <span class="input-line">
              <input
                type="number"
                min="0"
                max="1"
                step="any"
                name="${input.key}"
                inputmode="decimal"
                autocomplete="off"
                required
              />
              <span>0-1</span>
            </span>
          </label>
        `;
      }

      const options =
        input.units === "power" ? powerUnits : unitOptions[input.units];
      return `
        <label>
          ${input.label} (${input.symbol})
          <span class="input-line has-select">
            <input
              type="number"
              min="0"
              step="any"
              name="${input.key}"
              inputmode="decimal"
              autocomplete="off"
              required
            />
            <select class="unit-select" name="${input.key}Unit" aria-label="${input.label} unit">
              ${renderUnitOptions(options, input.unit)}
            </select>
          </span>
        </label>
      `;
    })
    .join("");
  resetPhaseWorking();
}

function resetPhaseWorking() {
  const formula = phaseFormulaCopy[activePhaseType][activePhaseTarget];
  const supplyLabel = activePhaseType === "single" ? "Single-phase" : "Three-phase";
  const targetLabel = phaseInputs[activePhaseTarget].label.toLowerCase();
  phaseWorkingTitle.textContent = `${supplyLabel} ${targetLabel}`;
  phaseAnswer.textContent = "Enter values";
  phaseFormulaText.textContent = formula;
  phaseSteps.innerHTML = `
    <li>Formula: ${formula}</li>
    <li>Enter values in the shown units.</li>
    <li>Press Calculate to show the answer and working.</li>
  `;
  phaseHint.textContent =
    activePhaseType === "three"
      ? "For this calculator, V is the three-phase line voltage. Check your course wording if it mentions phase voltage."
      : "Power factor is usually written as a decimal from 0 to 1. Use 1 for unity power factor.";
}

function getPhaseValue(input) {
  const field = phaseForm.elements[input.key];
  const typedValue = Number(field.value);
  const unitField = phaseForm.elements[`${input.key}Unit`];
  const multiplier = unitField ? Number(unitField.value) : 1;
  const selectedUnit = unitField?.selectedOptions?.[0]?.textContent?.trim() || input.unit;
  const value = typedValue * multiplier;
  return {
    value,
    typedValue,
    selectedUnit,
    display: input.units === "pf" ? `${typedValue}` : `${typedValue} ${selectedUnit}`,
    baseDisplay: input.units === "pf" ? `${typedValue}` : formatUsedValue(value, input.unit),
  };
}

function calculatePhase() {
  const neededInputs = getPhaseNeededInputs();
  const values = {};

  for (const input of neededInputs) {
    const data = getPhaseValue(input);
    if (!Number.isFinite(data.value) || data.value <= 0) {
      phaseAnswer.textContent = "Check inputs";
      phaseSteps.innerHTML = `
        <li>Enter a positive value for ${input.label.toLowerCase()}.</li>
        <li>Check the selected unit.</li>
        <li>Try the calculation again.</li>
      `;
      return;
    }
    if (input.key === "pf" && data.value > 1) {
      phaseAnswer.textContent = "Check PF";
      phaseSteps.innerHTML = `
        <li>Power factor should usually be between 0 and 1.</li>
        <li>For example, 0.8 means 80% power factor.</li>
        <li>Use 1 for unity power factor.</li>
      `;
      return;
    }
    values[input.key] = data;
  }

  const rootThree = Math.sqrt(3);
  const multiplier = activePhaseType === "three" ? rootThree : 1;
  let result;
  let answerUnit = phaseInputs[activePhaseTarget].unit;

  if (activePhaseTarget === "power") {
    result = multiplier * values.voltage.value * values.current.value * values.pf.value;
  } else if (activePhaseTarget === "current") {
    result = values.power.value / (multiplier * values.voltage.value * values.pf.value);
  } else if (activePhaseTarget === "voltage") {
    result = values.power.value / (multiplier * values.current.value * values.pf.value);
  } else {
    result = values.power.value / (multiplier * values.voltage.value * values.current.value);
  }

  const formula = phaseFormulaCopy[activePhaseType][activePhaseTarget];
  const formattedAnswer = formatPhaseAnswer(result, answerUnit);
  const baseUnits = neededInputs.map((input) => `${input.symbol}: ${values[input.key].baseDisplay}`).join(", ");
  const substitutePieces = {
    voltage: values.voltage?.display,
    current: values.current?.display,
    power: values.power?.display,
    pf: values.pf?.display,
  };
  const sqrtPrefix = activePhaseType === "three" ? "sqrt(3) x " : "";
  let substitute;

  if (activePhaseTarget === "power") {
    substitute = `P = ${sqrtPrefix}${substitutePieces.voltage} x ${substitutePieces.current} x ${substitutePieces.pf}`;
  } else if (activePhaseTarget === "current") {
    substitute = `I = ${substitutePieces.power} / (${sqrtPrefix}${substitutePieces.voltage} x ${substitutePieces.pf})`;
  } else if (activePhaseTarget === "voltage") {
    substitute = `V = ${substitutePieces.power} / (${sqrtPrefix}${substitutePieces.current} x ${substitutePieces.pf})`;
  } else {
    substitute = `PF = ${substitutePieces.power} / (${sqrtPrefix}${substitutePieces.voltage} x ${substitutePieces.current})`;
  }

  phaseWorkingTitle.textContent = `${activePhaseType === "three" ? "Three-phase" : "Single-phase"} ${phaseInputs[activePhaseTarget].label.toLowerCase()}`;
  phaseAnswer.textContent = formattedAnswer;
  phaseFormulaText.textContent = formula;
  phaseSteps.innerHTML = `
    <li>Formula: ${formula}</li>
    <li>Substitute: ${substitute}</li>
    <li>Base units used: ${baseUnits}</li>
    <li>Answer: ${formattedAnswer}</li>
  `;
  recordCalculation({
    tool: "AC",
    title: `${activePhaseType === "three" ? "Three-phase" : "Single-phase"} ${phaseInputs[activePhaseTarget].label}`,
    answer: formattedAnswer,
    formula,
    detail: substitute,
  });
}

function calculateCableDrop() {
  const supplyTyped = Number(cableSupplyVoltage.value);
  const currentTyped = Number(cableCurrent.value);
  const lengthTyped = Number(cableLength.value);
  const mvPerAmpMetre = Number(cableMvPerAmpMetre.value);
  const supplyMultiplier = Number(cableVoltageUnit.value);
  const currentMultiplier = Number(cableCurrentUnit.value);
  const lengthMultiplier = Number(cableLengthUnit.value);
  const supplyUnit = cableVoltageUnit.selectedOptions[0].textContent;
  const currentUnit = cableCurrentUnit.selectedOptions[0].textContent;
  const lengthUnit = cableLengthUnit.selectedOptions[0].textContent;

  if (
    !Number.isFinite(supplyTyped) ||
    !Number.isFinite(currentTyped) ||
    !Number.isFinite(lengthTyped) ||
    !Number.isFinite(mvPerAmpMetre) ||
    supplyTyped <= 0 ||
    currentTyped <= 0 ||
    lengthTyped <= 0 ||
    mvPerAmpMetre <= 0
  ) {
    cableAnswer.textContent = "Check inputs";
    cableSteps.innerHTML = `
      <li>Enter positive values for supply voltage, current, route length, and table value.</li>
      <li>Use the mV/A/m value given by your course material or cable table.</li>
      <li>Try the calculation again.</li>
    `;
    return;
  }

  const supplyVoltage = supplyTyped * supplyMultiplier;
  const current = currentTyped * currentMultiplier;
  const length = lengthTyped * lengthMultiplier;
  const voltDrop = (mvPerAmpMetre * current * length) / 1000;
  const percentDrop = (voltDrop / supplyVoltage) * 100;
  const formattedDrop = formatCableValue(voltDrop);
  const formattedPercent = formatCableValue(percentDrop);

  cableAnswer.textContent = `${formattedDrop} V / ${formattedPercent}%`;
  cableFormulaText.textContent = "Vd = mV/A/m x I x L / 1000";
  cableSteps.innerHTML = `
    <li>Formula: Vd = mV/A/m x I x L / 1000</li>
    <li>Substitute: Vd = ${mvPerAmpMetre} x ${currentTyped} ${currentUnit} x ${lengthTyped} ${lengthUnit} / 1000</li>
    <li>Base units used: ${formatCableValue(supplyVoltage)} V supply, ${formatCableValue(current)} A, ${formatCableValue(length)} m</li>
    <li>Voltage drop: ${formattedDrop} V</li>
    <li>Percent drop: ${formattedDrop} V / ${formatCableValue(supplyVoltage)} V x 100 = ${formattedPercent}%</li>
  `;
  cableHint.textContent =
    "Use the table value for the exact cable and installation method from your course. This tool only does the arithmetic.";
  recordCalculation({
    tool: "Cable",
    title: "Voltage drop",
    answer: `${formattedDrop} V / ${formattedPercent}%`,
    formula: "Vd = mV/A/m x I x L / 1000",
    detail: `${mvPerAmpMetre} mV/A/m, ${formatCableValue(current)} A, ${formatCableValue(length)} m`,
  });
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickItem(items) {
  return items[randomInt(0, items.length - 1)];
}

function formatPracticeValue(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(3).replace(/\.?0+$/, "");
}

function buildOhmsQuestion() {
  const type = pickItem(["voltage", "current", "resistance"]);
  const current = randomInt(2, 12);
  const resistance = randomInt(5, 40);
  const voltage = current * resistance;

  if (type === "voltage") {
    return {
      tag: "Ohm's Law",
      question: `A circuit has ${current} A and ${resistance} ohm. What is the voltage?`,
      prompt: "Find V when current and resistance are known.",
      answer: voltage,
      unit: "V",
      formula: "V = I x R",
      steps: [
        "Formula: V = I x R",
        `Substitute: V = ${current} x ${resistance}`,
        `Answer: ${voltage} V`,
      ],
    };
  }

  if (type === "current") {
    return {
      tag: "Ohm's Law",
      question: `A circuit has ${voltage} V and ${resistance} ohm. What is the current?`,
      prompt: "Find I when voltage and resistance are known.",
      answer: current,
      unit: "A",
      formula: "I = V / R",
      steps: [
        "Formula: I = V / R",
        `Substitute: I = ${voltage} / ${resistance}`,
        `Answer: ${current} A`,
      ],
    };
  }

  return {
    tag: "Ohm's Law",
    question: `A circuit has ${voltage} V and ${current} A. What is the resistance?`,
    prompt: "Find R when voltage and current are known.",
    answer: resistance,
    unit: "ohm",
    formula: "R = V / I",
    steps: [
      "Formula: R = V / I",
      `Substitute: R = ${voltage} / ${current}`,
      `Answer: ${resistance} ohm`,
    ],
  };
}

function buildPowerQuestion() {
  const type = pickItem(["vi", "current", "pf"]);
  const voltage = pickItem([120, 230, 240, 415]);
  const current = randomInt(2, 20);
  const power = voltage * current;

  if (type === "current") {
    return {
      tag: "Power",
      question: `A load is ${power} W at ${voltage} V. What current does it draw?`,
      prompt: "Find I from power and voltage.",
      answer: current,
      unit: "A",
      formula: "I = P / V",
      steps: [
        "Formula: I = P / V",
        `Substitute: I = ${power} / ${voltage}`,
        `Answer: ${current} A`,
      ],
    };
  }

  if (type === "pf") {
    const pf = pickItem([0.75, 0.8, 0.85, 0.9]);
    const acPower = voltage * current * pf;
    return {
      tag: "Single-phase",
      question: `A single-phase load has ${voltage} V, ${current} A, and PF ${pf}. What is the power?`,
      prompt: "Use single-phase real power.",
      answer: acPower,
      unit: "W",
      formula: "P = V x I x PF",
      steps: [
        "Formula: P = V x I x PF",
        `Substitute: P = ${voltage} x ${current} x ${pf}`,
        `Answer: ${formatPracticeValue(acPower)} W`,
      ],
    };
  }

  return {
    tag: "Power",
    question: `A load has ${voltage} V and ${current} A. What is the power?`,
    prompt: "Find P when voltage and current are known.",
    answer: power,
    unit: "W",
    formula: "P = V x I",
    steps: [
      "Formula: P = V x I",
      `Substitute: P = ${voltage} x ${current}`,
      `Answer: ${power} W`,
    ],
  };
}

function buildUnitQuestion() {
  const question = pickItem([
    {
      tag: "Units",
      from: randomInt(250, 5000),
      fromUnit: "mA",
      toUnit: "A",
      multiplier: 0.001,
      formula: "mA / 1000 = A",
    },
    {
      tag: "Units",
      from: randomInt(1, 12),
      fromUnit: "kW",
      toUnit: "W",
      multiplier: 1000,
      formula: "kW x 1000 = W",
    },
    {
      tag: "Units",
      from: randomInt(250, 5000),
      fromUnit: "mm",
      toUnit: "m",
      multiplier: 0.001,
      formula: "mm / 1000 = m",
    },
    {
      tag: "Units",
      from: randomInt(1, 20),
      fromUnit: "kWh",
      toUnit: "Wh",
      multiplier: 1000,
      formula: "kWh x 1000 = Wh",
    },
  ]);
  const answer = question.from * question.multiplier;
  return {
    tag: question.tag,
    question: `Convert ${question.from} ${question.fromUnit} to ${question.toUnit}.`,
    prompt: "Convert to the requested unit before using a formula.",
    answer,
    unit: question.toUnit,
    formula: question.formula,
    steps: [
      `Start: ${question.from} ${question.fromUnit}`,
      `Conversion: ${question.formula}`,
      `Answer: ${formatPracticeValue(answer)} ${question.toUnit}`,
    ],
  };
}

function buildPracticeQuestion() {
  const type =
    activePracticeType === "mixed"
      ? pickItem(["ohms", "power", "units"])
      : activePracticeType;

  if (type === "ohms") return buildOhmsQuestion();
  if (type === "power") return buildPowerQuestion();
  return buildUnitQuestion();
}

function showNewPracticeQuestion() {
  currentPracticeQuestion = buildPracticeQuestion();
  practiceQuestionTag.textContent = currentPracticeQuestion.tag;
  practiceQuestion.textContent = currentPracticeQuestion.question;
  practicePrompt.textContent = currentPracticeQuestion.prompt;
  practiceUnit.textContent = currentPracticeQuestion.unit;
  practiceAnswer.value = "";
  practiceWorkingTitle.textContent = "Question ready";
  practiceFormula.textContent = currentPracticeQuestion.formula;
  practiceSteps.innerHTML = `
    <li>Work it out first.</li>
    <li>Enter your answer in ${currentPracticeQuestion.unit}.</li>
    <li>Press Check to see the working.</li>
  `;
  practiceHint.textContent = "Use the same unit shown beside the answer box.";
}

function checkPractice() {
  if (!currentPracticeQuestion) {
    showNewPracticeQuestion();
    return;
  }

  const typedAnswer = Number(practiceAnswer.value);
  if (!Number.isFinite(typedAnswer)) {
    practiceWorkingTitle.textContent = "Check answer";
    practiceSteps.innerHTML = `
      <li>Enter a number in the answer box.</li>
      <li>Use ${currentPracticeQuestion.unit} as the unit.</li>
      <li>Try checking again.</li>
    `;
    return;
  }

  const expected = currentPracticeQuestion.answer;
  const tolerance = Math.max(0.01, Math.abs(expected) * 0.005);
  const isCorrect = Math.abs(typedAnswer - expected) <= tolerance;
  practiceTotal += 1;
  if (isCorrect) practiceCorrect += 1;
  practiceScore.textContent = `${practiceCorrect} / ${practiceTotal}`;
  practiceWorkingTitle.textContent = isCorrect ? "Correct" : "Not quite";
  practiceSteps.innerHTML = currentPracticeQuestion.steps
    .map((step) => `<li>${step}</li>`)
    .join("");
  practiceHint.textContent = isCorrect
    ? "Nice. Press New Question when you are ready for another."
    : `Expected about ${formatPracticeValue(expected)} ${currentPracticeQuestion.unit}. Check the formula and units.`;
}

function saveCourseNote() {
  const topic = noteTopic.value.trim();
  const value = noteValue.value.trim();
  const source = noteSource.value.trim();

  if (!topic || !value) return;

  const notes = loadStoredList(courseNotesKey);
  notes.unshift({
    id: Date.now(),
    topic,
    value,
    source,
    verified: noteVerified.checked,
  });
  saveStoredList(courseNotesKey, notes.slice(0, 30));
  noteForm.reset();
  renderCourseNotes();
}

targetChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-target]");
  if (!button) return;
  activeTarget = button.dataset.target;
  targetChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice === button);
  });
  renderFormulaOptions();
});

formulaSelect.addEventListener("change", () => {
  const formula = getActiveFormula();
  renderInputs(formula);
  resetWorking(formula);
});

decimalPlaces.addEventListener("change", () => {
  if (answerValue.textContent !== "Enter values" && answerValue.textContent !== "Check inputs") {
    calculateCore();
  }
});

coreForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateCore();
});

converterGroupChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-converter-group]");
  if (!button) return;
  activeConverterGroup = button.dataset.converterGroup;
  converterGroupChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice === button);
  });
  converterValue.value = "";
  renderConverterTypes();
});

converterType.addEventListener("change", () => {
  converterValue.value = "";
  renderConverterUnits();
});

fromUnit.addEventListener("change", () => {
  const type = getActiveConverterType();
  converterValueUnit.textContent = fromUnit.selectedOptions[0].textContent;
  resetConverterWorking(type);
});

toUnit.addEventListener("change", () => {
  resetConverterWorking(getActiveConverterType());
});

converterDecimals.addEventListener("change", () => {
  if (converterAnswer.textContent !== "Enter a value" && converterAnswer.textContent !== "Check input") {
    calculateConversion();
  }
});

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateConversion();
});

mathModeChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-math-mode]");
  if (!button) return;
  setMathMode(button.dataset.mathMode);
});

transposeFormula.addEventListener("change", renderTransposeTargets);
transposeTarget.addEventListener("change", resetTransposeWorking);
percentMode.addEventListener("change", renderPercentInputs);
mathDecimals.addEventListener("change", () => {
  if (activeMathMode === "fraction") calculateFraction();
  if (activeMathMode === "percent") calculatePercent();
});

mathForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeMathMode === "transpose") calculateTranspose();
  if (activeMathMode === "fraction") calculateFraction();
  if (activeMathMode === "percent") calculatePercent();
});

phaseTypeChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-phase-type]");
  if (!button) return;
  activePhaseType = button.dataset.phaseType;
  phaseTypeChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice === button);
  });
  renderPhaseInputs();
});

phaseTargetChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-phase-target]");
  if (!button) return;
  activePhaseTarget = button.dataset.phaseTarget;
  phaseTargetChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice === button);
  });
  renderPhaseInputs();
});

phaseDecimals.addEventListener("change", () => {
  if (phaseAnswer.textContent !== "Enter values" && phaseAnswer.textContent !== "Check inputs" && phaseAnswer.textContent !== "Check PF") {
    calculatePhase();
  }
});

phaseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculatePhase();
});

cableDecimals.addEventListener("change", () => {
  if (cableAnswer.textContent !== "Enter values" && cableAnswer.textContent !== "Check inputs") {
    calculateCableDrop();
  }
});

cableForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateCableDrop();
});

practiceTypeChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-practice-type]");
  if (!button) return;
  activePracticeType = button.dataset.practiceType;
  practiceTypeChoices.querySelectorAll(".choice-button").forEach((choice) => {
    choice.classList.toggle("active", choice === button);
  });
  showNewPracticeQuestion();
});

newPracticeQuestion.addEventListener("click", showNewPracticeQuestion);
checkPracticeAnswer.addEventListener("click", checkPractice);

practiceAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPractice();
  }
});

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveCourseNote();
});

clearCourseNotes.addEventListener("click", () => {
  saveStoredList(courseNotesKey, []);
  renderCourseNotes();
});

clearSavedCalculations.addEventListener("click", () => {
  saveStoredList(savedCalculationsKey, []);
  renderSavedCalculations();
});

document.querySelectorAll("[data-category]").forEach((element) => {
  element.addEventListener("click", () => showCategory(element.dataset.category));
});

document.querySelector("[data-home]")?.addEventListener("click", showHome);
backButton.addEventListener("click", showHome);
themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("electricalMathTheme", nextTheme);
  applyTheme(nextTheme);
});

renderFormulaOptions();
renderConverterTypes();
renderTransposeFamilies();
renderPercentInputs();
setMathMode("transpose");
renderPhaseInputs();
showNewPracticeQuestion();
renderCourseNotes();
renderSavedCalculations();
