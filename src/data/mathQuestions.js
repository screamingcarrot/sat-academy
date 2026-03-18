// ─────────────────────────────────────────────────────────────────────────────
// Math Question Generators — Unit 1: Algebra
// Each generator(seed) returns { question, choices, answer, type, explanation }
// Answers are always whole numbers or simple fractions.
// ─────────────────────────────────────────────────────────────────────────────

function seeded(seed) {
  let s = seed | 0
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)] }
function rInt(min, max, rng) { return min + Math.floor(rng() * (max - min + 1)) }

// Build MCQ choices: correct + 3 plausible wrong
function buildChoices(correct, wrongs, rng) {
  const pool = [...new Set([...wrongs])].filter(w => w !== correct).slice(0, 3)
  while (pool.length < 3) pool.push(correct + rInt(1, 5, rng) * (rng() > 0.5 ? 1 : -1))
  const all = [correct, ...pool.slice(0, 3)]
  // shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]]
  }
  const labels = ['A', 'B', 'C', 'D']
  const choices = all.map((v, i) => ({ label: labels[i], value: String(v) }))
  const answerLabel = choices.find(c => c.value === String(correct)).label
  return { choices, answer: answerLabel }
}

// ── 1.1a: Basic 1-step / 2-step equation ─────────────────────────────────────
export function gen_1_1a(seed, difficulty) {
  const rng = seeded(seed)
  if (difficulty === 'easy') {
    // ax + b = c, whole-number answer
    const a = rInt(2, 5, rng)
    const x = rInt(1, 8, rng)
    const b = rInt(1, 10, rng)
    const c = a * x + b
    const wrong = [a * x, x + 1, x - 1, a + b]
    const { choices, answer } = buildChoices(x, wrong, rng)
    return {
      type: 'mcq',
      question: `If ${a}x + ${b} = ${c}, what is the value of x?`,
      choices,
      answer,
      explanation: {
        problem: `${a}x + ${b} = ${c}`,
        steps: [
          { action: `Subtract ${b} from both sides`, result: `${a}x = ${c - b}` },
          { action: `Divide both sides by ${a}`, result: `x = ${x}` },
        ],
      },
    }
  }
  if (difficulty === 'medium') {
    // ax - b = c, then 3-step
    const a = rInt(3, 7, rng)
    const x = rInt(2, 9, rng)
    const b = rInt(2, 12, rng)
    const c = a * x - b
    const wrong = [x + 2, x - 2, a * x, Math.floor((c + b) / 2)]
    const { choices, answer } = buildChoices(x, wrong, rng)
    return {
      type: 'mcq',
      question: `What is the solution to ${a}x − ${b} = ${c}?`,
      choices,
      answer,
      explanation: {
        problem: `${a}x − ${b} = ${c}`,
        steps: [
          { action: `Add ${b} to both sides`, result: `${a}x = ${c + b}` },
          { action: `Divide both sides by ${a}`, result: `x = ${x}` },
        ],
      },
    }
  }
  // hard: multi-step with variable on both sides
  const a = rInt(3, 8, rng)
  const b = rInt(2, 6, rng)
  const x = rInt(2, 8, rng)
  const c = rInt(2, 6, rng)
  // ax + b = cx + (a-c)*x + b → pick c < a
  const cc = rInt(1, a - 1, rng)
  const rhs = cc * x + rInt(1, 10, rng)
  const lhsConst = rhs - (a - cc) * x
  const actual = (rhs - lhsConst) / (a - cc)
  const intAns = Math.round(actual)
  const q_rhs = cc * intAns + rhs - cc * intAns
  const q_lhs_const = a * intAns - q_rhs + cc * intAns
  // rebuild clean
  const C = rInt(3, 12, rng)
  const D = rInt(1, 8, rng)
  const xx = rInt(2, 8, rng)
  // (a)x + D = (cc)x + C  → (a-cc)x = C - D → x = (C-D)/(a-cc)
  const diff = a - cc
  const num = (diff * xx)
  const lhsC = rInt(1, 8, rng)
  const rhsC = lhsC + num
  const wrong2 = [xx + 1, xx - 1, xx * 2, Math.floor(xx / 2)]
  const { choices, answer } = buildChoices(xx, wrong2, rng)
  return {
    type: 'mcq',
    question: `What is the value of x if ${a}x + ${lhsC} = ${cc}x + ${rhsC}?`,
    choices,
    answer,
    explanation: {
      problem: `${a}x + ${lhsC} = ${cc}x + ${rhsC}`,
      steps: [
        { action: `Subtract ${cc}x from both sides`, result: `${diff}x + ${lhsC} = ${rhsC}` },
        { action: `Subtract ${lhsC} from both sides`, result: `${diff}x = ${rhsC - lhsC}` },
        { action: `Divide by ${diff}`, result: `x = ${xx}` },
      ],
    },
  }
}

// ── 1.1b: Fractions / decimals ────────────────────────────────────────────────
export function gen_1_1b(seed, difficulty) {
  const rng = seeded(seed)
  const denoms = [2, 3, 4, 5]
  const d = pick(denoms, rng)
  const x = rInt(1, d === 2 ? 10 : d === 3 ? 9 : 8, rng) * d // ensure whole
  const actualX = x / d // but we want the answer to be a whole number after solving
  // x/d + b = c → x = d*(c-b)
  const b = rInt(1, 6, rng)
  const c = x / d + b  // x/d + b = c, answer is x
  // reframe: let X be the unknown, X/d + b = c → X = d*(c-b) = d * (x/d) = x (whole!)
  const ans = x
  const wrong = [ans + d, ans - d, ans * 2, Math.floor(ans / d)]
  const { choices, answer } = buildChoices(ans, wrong, rng)
  const frac = `x/${d}`
  return {
    type: difficulty === 'hard' ? 'free' : 'mcq',
    question: difficulty === 'easy'
      ? `If ${frac} + ${b} = ${c}, what is the value of x?`
      : difficulty === 'medium'
      ? `Solve for x: ${frac} − ${b} = ${c - 2 * b}`
      : `What value of x satisfies (x + ${b}) / ${d} = ${(ans + b) / d}?`,
    choices: difficulty === 'hard' ? undefined : choices,
    answer: difficulty === 'hard' ? String(ans) : answer,
    explanation: {
      problem: `${frac} + ${b} = ${c}`,
      steps: [
        { action: `Subtract ${b} from both sides`, result: `${frac} = ${c - b}` },
        { action: `Multiply both sides by ${d}`, result: `x = ${ans}` },
      ],
    },
  }
}

// ── 1.1c: Rearrange a formula ─────────────────────────────────────────────────
export function gen_1_1c(seed, difficulty) {
  const rng = seeded(seed)
  const formulas = [
    {
      formula: 'd = rt',
      solveFor: 't',
      answer: 'd/r',
      question: 'Which expression correctly represents t in terms of d and r, given d = rt?',
      wrongChoices: ['r/d', 'd·r', 'r − d'],
      steps: [{ action: 'Divide both sides by r', result: 't = d/r' }],
    },
    {
      formula: 'P = 2l + 2w',
      solveFor: 'l',
      answer: '(P − 2w)/2',
      question: 'Solve for l: P = 2l + 2w',
      wrongChoices: ['(P + 2w)/2', 'P/2 − w²', '2P − 2w'],
      steps: [
        { action: 'Subtract 2w from both sides', result: 'P − 2w = 2l' },
        { action: 'Divide both sides by 2', result: 'l = (P − 2w)/2' },
      ],
    },
    {
      formula: 'A = (1/2)bh',
      solveFor: 'h',
      answer: '2A/b',
      question: 'Which expression is equivalent to h when A = (1/2)bh?',
      wrongChoices: ['A/(2b)', 'Ab/2', '2b/A'],
      steps: [
        { action: 'Multiply both sides by 2', result: '2A = bh' },
        { action: 'Divide both sides by b', result: 'h = 2A/b' },
      ],
    },
  ]
  const f = pick(formulas, rng)
  const choices = [f.answer, ...f.wrongChoices].sort(() => rng() - 0.5)
  const labels = ['A', 'B', 'C', 'D']
  const choiceObjs = choices.map((v, i) => ({ label: labels[i], value: v }))
  const ans = choiceObjs.find(c => c.value === f.answer).label
  return {
    type: 'mcq',
    question: f.question,
    choices: choiceObjs,
    answer: ans,
    explanation: { problem: `Solve ${f.formula} for ${f.solveFor}`, steps: f.steps },
  }
}

// ── 1.1d: Word problem setup ──────────────────────────────────────────────────
export function gen_1_1d(seed, difficulty) {
  const rng = seeded(seed)
  const templates = [
    (r) => {
      const x = rInt(4, 15, r)
      const k = rInt(2, 5, r)
      const add = rInt(3, 10, r)
      const total = k * x + add
      const wrong = [x + 2, x - 2, total / k, k + x]
      const { choices, answer } = buildChoices(x, wrong, r)
      return {
        question: `A number multiplied by ${k}, then increased by ${add}, equals ${total}. What is the number?`,
        answer,
        choices,
        explanation: {
          problem: `${k}x + ${add} = ${total}`,
          steps: [
            { action: `Subtract ${add} from both sides`, result: `${k}x = ${total - add}` },
            { action: `Divide by ${k}`, result: `x = ${x}` },
          ],
        },
      }
    },
    (r) => {
      const x = rInt(3, 12, r)
      const a = rInt(2, 5, r)
      const b = rInt(5, 20, r)
      const total = a * x + b
      const wrong = [x + 3, x - 1, total - b, a * x]
      const { choices, answer } = buildChoices(x, wrong, r)
      return {
        question: `Maria has ${b} more stickers than ${a} times the number Jake has. Together they have... wait — Maria has ${total} stickers total. If Maria has ${a} times Jake's stickers plus ${b}, how many does Jake have?`,
        answer,
        choices,
        explanation: {
          problem: `${a}x + ${b} = ${total}`,
          steps: [
            { action: `Subtract ${b}`, result: `${a}x = ${total - b}` },
            { action: `Divide by ${a}`, result: `x = ${x}` },
          ],
        },
      }
    },
  ]
  const t = pick(templates, rng)(rng)
  return { type: 'mcq', ...t }
}

// ── 1.1e: No solution / infinite solutions ────────────────────────────────────
export function gen_1_1e(seed, difficulty) {
  const rng = seeded(seed)
  const type = rng() > 0.5 ? 'none' : 'infinite'
  const a = rInt(2, 6, rng)
  const b = rInt(1, 8, rng)

  if (type === 'none') {
    const c = b + rInt(1, 5, rng) // different constant → false statement
    // equation: a(x + b) = ax + c  → ax + ab = ax + c → ab = c (false if ab ≠ c)
    const lhsConst = a * b
    const rhsConst = lhsConst + rInt(1, 5, rng)
    const choices = [
      { label: 'A', value: 'No solution' },
      { label: 'B', value: 'x = 0' },
      { label: 'C', value: `x = ${rInt(1, 5, rng)}` },
      { label: 'D', value: 'Infinitely many solutions' },
    ]
    return {
      type: 'mcq',
      question: `How many solutions does the equation ${a}(x + ${b}) = ${a}x + ${rhsConst} have?`,
      choices,
      answer: 'A',
      explanation: {
        problem: `${a}(x + ${b}) = ${a}x + ${rhsConst}`,
        steps: [
          { action: 'Distribute', result: `${a}x + ${lhsConst} = ${a}x + ${rhsConst}` },
          { action: 'Subtract ax from both sides', result: `${lhsConst} = ${rhsConst}` },
          { action: 'This is false', result: 'No solution — the equation is a contradiction.' },
        ],
      },
    }
  }

  // infinite: same constant both sides
  const choices = [
    { label: 'A', value: 'No solution' },
    { label: 'B', value: 'x = 0 only' },
    { label: 'C', value: `x = ${rInt(1, 4, rng)} only` },
    { label: 'D', value: 'Infinitely many solutions' },
  ]
  const lhsConst = a * b
  return {
    type: 'mcq',
    question: `How many solutions does the equation ${a}(x + ${b}) = ${a}x + ${lhsConst} have?`,
    choices,
    answer: 'D',
    explanation: {
      problem: `${a}(x + ${b}) = ${a}x + ${lhsConst}`,
      steps: [
        { action: 'Distribute', result: `${a}x + ${lhsConst} = ${a}x + ${lhsConst}` },
        { action: 'Subtract ax from both sides', result: `${lhsConst} = ${lhsConst}` },
        { action: 'This is always true', result: 'Infinitely many solutions — every x works.' },
      ],
    },
  }
}

import { UNIT1_QUESTIONS } from './questions/unit1.js'
import { UNIT2_QUESTIONS } from './questions/unit2.js'
import { UNIT3_QUESTIONS } from './questions/unit3.js'
import { UNIT4_QUESTIONS } from './questions/unit4.js'

// ─────────────────────────────────────────────────────────────────────────────
// Registry: maps subunit ID → [easyGen, mediumGen, hardGen]
// Each entry is a function(seed) → question object
// ─────────────────────────────────────────────────────────────────────────────
export const QUESTION_GENERATORS = {
  '1.1a': [
    (seed) => gen_1_1a(seed, 'easy'),
    (seed) => gen_1_1a(seed, 'medium'),
    (seed) => gen_1_1a(seed, 'hard'),
  ],
  '1.1b': [
    (seed) => gen_1_1b(seed, 'easy'),
    (seed) => gen_1_1b(seed, 'medium'),
    (seed) => gen_1_1b(seed, 'hard'),
  ],
  '1.1c': [
    (seed) => gen_1_1c(seed, 'easy'),
    (seed) => gen_1_1c(seed, 'medium'),
    (seed) => gen_1_1c(seed, 'hard'),
  ],
  '1.1d': [
    (seed) => gen_1_1d(seed, 'easy'),
    (seed) => gen_1_1d(seed, 'medium'),
    (seed) => gen_1_1d(seed, 'hard'),
  ],
  '1.1e': [
    (seed) => gen_1_1e(seed, 'easy'),
    (seed) => gen_1_1e(seed, 'medium'),
    (seed) => gen_1_1e(seed, 'hard'),
  ],
}

// Combined static question bank (Units 1 remaining + 2, 3, 4)
const STATIC_QUESTIONS = {
  ...UNIT1_QUESTIONS,
  ...UNIT2_QUESTIONS,
  ...UNIT3_QUESTIONS,
  ...UNIT4_QUESTIONS,
}

/**
 * Get the 3 practice questions for a subunit item.
 * For Unit 1, uses seeded generators (unlimited practice via sessionSeed).
 * For Units 2–4, uses static SAT-style questions from data files.
 */
export function getQuestions(itemId, sessionSeed = 0) {
  // Static questions (Units 2, 3, 4)
  if (STATIC_QUESTIONS[itemId]) {
    return STATIC_QUESTIONS[itemId].map((q, i) => ({
      ...q,
      id: `${itemId}-${i}`,
    }))
  }

  // Generated questions (Unit 1)
  const gens = QUESTION_GENERATORS[itemId]
  if (!gens) return null // not yet implemented
  return gens.map((gen, i) => ({
    ...gen(sessionSeed * 100 + i + 1),
    id: `${itemId}-${sessionSeed}-${i}`,
    difficulty: ['easy', 'medium', 'hard'][i],
  }))
}
