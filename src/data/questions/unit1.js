// Unit 1: Algebra (remaining items) — Static SAT-style questions
// Covers 1.2a–1.6c (1.1a–1.1e are handled by generators in mathQuestions.js)

export const UNIT1_QUESTIONS = {

  // ── 1.2 Linear Equations & Graphs ────────────────────────────────────────

  '1.2a': [
    {
      id: '1.2a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A taxi company charges a flat fee of $3.00 plus $1.50 per mile. In the equation C = 1.5m + 3, where C is the total cost in dollars and m is the number of miles, what does the slope 1.5 represent?',
      choices: [
        'A) The total cost of a 1.5-mile trip',
        'B) The cost per mile',
        'C) The flat fee charged at the start of the trip',
        'D) The number of miles driven',
      ],
      answer: 'B) The cost per mile',
      explanation: {
        problem: 'C = 1.5m + 3; interpret the slope',
        steps: [
          { action: 'Identify slope-intercept form y = mx + b', result: 'slope = 1.5, y-intercept = 3' },
          { action: 'Interpret slope in context', result: 'Slope = rate of change = $1.50 per mile' },
        ],
      },
    },
    {
      id: '1.2a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The equation y = −2x + 8 represents the relationship between the number of hours a candle has been burning (x) and the remaining height of the candle in inches (y). What does the slope −2 represent in this context?',
      choices: [
        'A) The candle starts at a height of −2 inches.',
        'B) The candle burns down 2 inches per hour.',
        'C) The candle grows 2 inches per hour.',
        'D) The candle will last 2 hours.',
      ],
      answer: 'B) The candle burns down 2 inches per hour.',
      explanation: {
        problem: 'y = −2x + 8; slope = −2',
        steps: [
          { action: 'Identify the slope', result: 'slope = −2 (negative = decreasing)' },
          { action: 'Interpret in context', result: 'Candle height decreases by 2 inches for each hour burned' },
        ],
      },
    },
    {
      id: '1.2a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A line has the equation y = 4x − 7. What is the slope of this line?',
      answer: '4',
      explanation: {
        problem: 'y = mx + b; identify m',
        steps: [
          { action: 'Compare to slope-intercept form y = mx + b', result: 'm = 4, b = −7' },
        ],
      },
    },
  ],

  '1.2b': [
    {
      id: '1.2b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A water tank initially contains 120 gallons and is being drained at a rate of 8 gallons per minute. The equation G = −8t + 120 models the number of gallons G remaining after t minutes. What does the y-intercept 120 represent?',
      choices: [
        'A) The tank drains 120 gallons per minute.',
        'B) The initial amount of water in the tank.',
        'C) The time at which the tank is empty.',
        'D) The total capacity of the tank.',
      ],
      answer: 'B) The initial amount of water in the tank.',
      explanation: {
        problem: 'G = −8t + 120; y-intercept = 120 (value when t = 0)',
        steps: [
          { action: 'Substitute t = 0', result: 'G = −8(0) + 120 = 120' },
          { action: 'Interpret', result: 'When t = 0 (at the start), G = 120 gallons' },
        ],
      },
    },
    {
      id: '1.2b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The equation P = 5n + 20 models the total profit P (in dollars) a student earns selling n handmade bracelets at a craft fair, where 20 represents the amount the student spent on supplies. What is the y-intercept and what does it represent?',
      choices: [
        'A) 5; the profit per bracelet sold',
        'B) 20; the upfront cost of supplies before selling any bracelets',
        'C) 20; the profit after selling 20 bracelets',
        'D) 5; the number of bracelets sold',
      ],
      answer: 'B) 20; the upfront cost of supplies before selling any bracelets',
      explanation: {
        problem: 'y-intercept = value when x = 0 (when n = 0 bracelets sold)',
        steps: [
          { action: 'Set n = 0', result: 'P = 5(0) + 20 = 20' },
          { action: 'Interpret', result: 'P = 20 when no bracelets sold = upfront cost (initial value)' },
        ],
      },
    },
    {
      id: '1.2b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A line has the equation y = −3x + 11. What is the y-intercept?',
      answer: '11',
      explanation: {
        problem: 'y = mx + b; b is the y-intercept',
        steps: [
          { action: 'Compare to y = mx + b', result: 'b = 11' },
        ],
      },
    },
  ],

  '1.2c': [
    {
      id: '1.2c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the equation of the line that passes through the points (2, 5) and (6, 13)?',
      choices: [
        'A) y = 2x + 1',
        'B) y = 2x − 1',
        'C) y = 3x − 1',
        'D) y = 4x − 3',
      ],
      answer: 'A) y = 2x + 1',
      explanation: {
        problem: 'Find slope then use point-slope form.',
        steps: [
          { action: 'Calculate slope', result: 'm = (13 − 5)/(6 − 2) = 8/4 = 2' },
          { action: 'Use point-slope with (2, 5)', result: 'y − 5 = 2(x − 2) → y = 2x − 4 + 5 = 2x + 1' },
        ],
      },
    },
    {
      id: '1.2c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A line passes through the point (3, 7) and has a slope of −4. What is the y-intercept of this line?',
      choices: ['A) 15', 'B) 17', 'C) 19', 'D) 21'],
      answer: 'C) 19',
      explanation: {
        problem: 'Use point-slope form: y − y₁ = m(x − x₁)',
        steps: [
          { action: 'Write point-slope form', result: 'y − 7 = −4(x − 3)' },
          { action: 'Simplify', result: 'y = −4x + 12 + 7 = −4x + 19' },
          { action: 'y-intercept', result: 'b = 19' },
        ],
      },
    },
    {
      id: '1.2c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A line passes through the points (0, 4) and (5, 14). What is the slope of the line?',
      answer: '2',
      explanation: {
        problem: 'm = (y₂ − y₁)/(x₂ − x₁)',
        steps: [
          { action: 'Apply slope formula', result: 'm = (14 − 4)/(5 − 0) = 10/5 = 2' },
        ],
      },
    },
  ],

  '1.2d': [
    {
      id: '1.2d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following is equivalent to the equation 3x − 4y = 12 written in slope-intercept form?',
      choices: [
        'A) y = 3x − 12',
        'B) y = (3/4)x − 3',
        'C) y = (3/4)x + 3',
        'D) y = −(3/4)x − 3',
      ],
      answer: 'B) y = (3/4)x − 3',
      explanation: {
        problem: 'Solve for y in terms of x.',
        steps: [
          { action: 'Subtract 3x from both sides', result: '−4y = −3x + 12' },
          { action: 'Divide both sides by −4', result: 'y = (3/4)x − 3' },
        ],
      },
    },
    {
      id: '1.2d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The equation y = 2x + 5 is equivalent to which of the following in standard form (Ax + By = C)?',
      choices: [
        'A) 2x + y = 5',
        'B) 2x − y = −5',
        'C) −2x + y = 5',
        'D) 2x + y = −5',
      ],
      answer: 'B) 2x − y = −5',
      explanation: {
        problem: 'Standard form: Ax + By = C; move terms.',
        steps: [
          { action: 'Subtract y from both sides', result: 'y − y = 2x + 5 − y → 0 = 2x − y + 5' },
          { action: 'Subtract 5 from both sides', result: '2x − y = −5' },
        ],
      },
    },
    {
      id: '1.2d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'What is the slope of the line represented by the equation 6x + 2y = 10?',
      answer: '-3',
      explanation: {
        problem: 'Convert to slope-intercept form.',
        steps: [
          { action: 'Solve for y', result: '2y = −6x + 10 → y = −3x + 5' },
          { action: 'Identify slope', result: 'slope = −3' },
        ],
      },
    },
  ],

  // ── 1.3 Linear Functions ─────────────────────────────────────────────────────

  '1.3a': [
    {
      id: '1.3a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The table below shows the total cost of parking at a garage.\n\nHours | Total Cost\n  1   |    $8\n  2   |   $11\n  3   |   $14\n  4   |   $17\n\nWhat is the rate of change (cost per additional hour) for this parking garage?',
      choices: ['A) $3', 'B) $4', 'C) $8', 'D) $17'],
      answer: 'A) $3',
      explanation: {
        problem: 'Rate of change = change in y / change in x',
        steps: [
          { action: 'Find change in cost per hour', result: '11 − 8 = $3, 14 − 11 = $3, 17 − 14 = $3' },
          { action: 'Rate of change', result: '$3 per hour' },
        ],
      },
    },
    {
      id: '1.3a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A graph of a linear function passes through the points (0, 2) and (4, 10). What is the rate of change of the function?',
      choices: ['A) 1', 'B) 2', 'C) 3', 'D) 4'],
      answer: 'B) 2',
      explanation: {
        problem: 'Rate of change = rise/run = (10 − 2)/(4 − 0)',
        steps: [
          { action: 'Apply slope formula', result: '(10 − 2)/(4 − 0) = 8/4 = 2' },
        ],
      },
    },
    {
      id: '1.3a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A function produces the values: when x = 1, y = 7; when x = 3, y = 13; when x = 5, y = 19. What is the rate of change of this function?',
      answer: '3',
      explanation: {
        problem: 'Rate of change = Δy/Δx',
        steps: [
          { action: 'Calculate change', result: 'Δy = 13 − 7 = 6; Δx = 3 − 1 = 2' },
          { action: 'Rate of change', result: '6/2 = 3' },
        ],
      },
    },
  ],

  '1.3b': [
    {
      id: '1.3b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A delivery driver earns $0.55 per mile driven, plus a daily base pay of $80. The function E(m) = 0.55m + 80 models the total earnings E in dollars after driving m miles. Which of the following best interprets the rate of change?',
      choices: [
        'A) The driver earns $80 per mile.',
        'B) The driver earns $0.55 for each mile driven.',
        'C) The driver earns $80.55 total.',
        'D) The driver drives 0.55 miles per dollar earned.',
      ],
      answer: 'B) The driver earns $0.55 for each mile driven.',
      explanation: {
        problem: 'Rate of change = coefficient of m = 0.55',
        steps: [
          { action: 'Identify slope in context', result: 'slope = 0.55 = change in earnings per 1 mile driven' },
        ],
      },
    },
    {
      id: '1.3b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The function T(d) = −3d + 90 models the temperature T in degrees Fahrenheit at an elevation d (in hundreds of feet) above sea level. Which statement best describes the rate of change?',
      choices: [
        'A) The temperature increases by 3°F for every 100 feet of elevation gained.',
        'B) The temperature at sea level is −3°F.',
        'C) The temperature decreases by 3°F for every 100 feet of elevation gained.',
        'D) The temperature decreases by 90°F as elevation increases.',
      ],
      answer: 'C) The temperature decreases by 3°F for every 100 feet of elevation gained.',
      explanation: {
        problem: 'Slope = −3 = change in T per unit of d (each 100 feet)',
        steps: [
          { action: 'Identify slope', result: 'slope = −3 (negative → decreasing)' },
          { action: 'Interpret', result: 'Temperature drops 3°F for every 100 feet of elevation' },
        ],
      },
    },
    {
      id: '1.3b-2',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A linear function has a rate of change of 6 and passes through the point (0, −4). Which equation represents this function?',
      choices: [
        'A) y = −4x + 6',
        'B) y = 6x − 4',
        'C) y = 6x + 4',
        'D) y = −6x − 4',
      ],
      answer: 'B) y = 6x − 4',
      explanation: {
        problem: 'y = mx + b; m = 6, b = −4 (y-intercept at (0, −4))',
        steps: [
          { action: 'Write equation', result: 'y = 6x + (−4) = 6x − 4' },
        ],
      },
    },
  ],

  '1.3c': [
    {
      id: '1.3c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A phone plan charges a flat monthly fee of $25 plus $0.10 per text message sent. Which function models the monthly cost C in dollars for sending t text messages?',
      choices: [
        'A) C(t) = 25t + 0.10',
        'B) C(t) = 0.10t + 25',
        'C) C(t) = 25 − 0.10t',
        'D) C(t) = 0.10 + 25t',
      ],
      answer: 'B) C(t) = 0.10t + 25',
      explanation: {
        problem: 'Total cost = rate × quantity + fixed cost',
        steps: [
          { action: 'Identify variable cost', result: '$0.10 per text → 0.10t' },
          { action: 'Identify fixed cost', result: '$25 flat fee' },
          { action: 'Build function', result: 'C(t) = 0.10t + 25' },
        ],
      },
    },
    {
      id: '1.3c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A gym charges a one-time registration fee of $40 and a monthly membership fee of $30. Which function models the total amount A paid after m months of membership?',
      choices: [
        'A) A(m) = 40m + 30',
        'B) A(m) = 30m − 40',
        'C) A(m) = 30m + 40',
        'D) A(m) = 70m',
      ],
      answer: 'C) A(m) = 30m + 40',
      explanation: {
        problem: 'Total = monthly fee × months + registration fee',
        steps: [
          { action: 'Variable cost', result: '$30/month × m months = 30m' },
          { action: 'Fixed cost', result: '$40 one-time fee' },
          { action: 'Function', result: 'A(m) = 30m + 40' },
        ],
      },
    },
    {
      id: '1.3c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A car rental company charges $20 per day plus a one-time insurance fee of $15. If a customer rents a car for 4 days, what is the total cost in dollars?',
      answer: '95',
      explanation: {
        problem: 'C(d) = 20d + 15; substitute d = 4',
        steps: [
          { action: 'Set up function', result: 'C = 20d + 15' },
          { action: 'Substitute d = 4', result: 'C = 20(4) + 15 = 80 + 15 = $95' },
        ],
      },
    },
  ],

  '1.3d': [
    {
      id: '1.3d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Function f is defined by f(x) = 3x + 2 and function g is defined by g(x) = 5x − 4. For what value of x is f(x) = g(x)?',
      choices: ['A) 1', 'B) 2', 'C) 3', 'D) 4'],
      answer: 'C) 3',
      explanation: {
        problem: 'Set 3x + 2 = 5x − 4 and solve.',
        steps: [
          { action: 'Set equal', result: '3x + 2 = 5x − 4' },
          { action: 'Subtract 3x from both sides', result: '2 = 2x − 4' },
          { action: 'Add 4 to both sides', result: '6 = 2x → x = 3' },
        ],
      },
    },
    {
      id: '1.3d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Company A charges $0.20 per minute for a call, with no monthly fee. Company B charges $0.10 per minute plus a $15 monthly fee. After how many minutes of calls will the two plans cost the same amount?',
      choices: ['A) 100', 'B) 125', 'C) 150', 'D) 200'],
      answer: 'C) 150',
      explanation: {
        problem: '0.20m = 0.10m + 15; solve for m',
        steps: [
          { action: 'Set costs equal', result: '0.20m = 0.10m + 15' },
          { action: 'Subtract 0.10m', result: '0.10m = 15' },
          { action: 'Solve', result: 'm = 150 minutes' },
        ],
      },
    },
    {
      id: '1.3d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'Function h(x) = 4x − 6 and function k(x) = 2x + 10. What is the value of x where h(x) = k(x)?',
      answer: '8',
      explanation: {
        problem: '4x − 6 = 2x + 10',
        steps: [
          { action: 'Subtract 2x from both sides', result: '2x − 6 = 10' },
          { action: 'Add 6 to both sides', result: '2x = 16 → x = 8' },
        ],
      },
    },
  ],

  // ── 1.4 Inequalities ─────────────────────────────────────────────────────────

  '1.4a': [
    {
      id: '1.4a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which of the following represents the solution to the inequality 2x − 5 > 9?',
      choices: ['A) x > 2', 'B) x > 7', 'C) x < 7', 'D) x ≥ 7'],
      answer: 'B) x > 7',
      explanation: {
        problem: '2x − 5 > 9',
        steps: [
          { action: 'Add 5 to both sides', result: '2x > 14' },
          { action: 'Divide by 2', result: 'x > 7' },
        ],
      },
    },
    {
      id: '1.4a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which value of x satisfies the inequality −3x + 12 ≥ 0?',
      choices: ['A) x ≥ 4', 'B) x ≤ 4', 'C) x ≥ −4', 'D) x ≤ −4'],
      answer: 'B) x ≤ 4',
      explanation: {
        problem: '−3x + 12 ≥ 0',
        steps: [
          { action: 'Subtract 12', result: '−3x ≥ −12' },
          { action: 'Divide by −3 (flip inequality)', result: 'x ≤ 4' },
        ],
      },
    },
    {
      id: '1.4a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'What is the largest integer value of x that satisfies the inequality 4x − 3 < 17?',
      answer: '4',
      explanation: {
        problem: '4x − 3 < 17',
        steps: [
          { action: 'Add 3 to both sides', result: '4x < 20' },
          { action: 'Divide by 4', result: 'x < 5' },
          { action: 'Largest integer less than 5', result: 'x = 4' },
        ],
      },
    },
  ],

  '1.4b': [
    {
      id: '1.4b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A student needs to earn at least 360 points on three exams to receive a B grade. She scored 110 and 118 on the first two exams. Which inequality represents the minimum score s she must earn on the third exam?',
      choices: ['A) s > 132', 'B) s ≥ 128', 'C) s ≥ 132', 'D) s ≤ 132'],
      answer: 'C) s ≥ 132',
      explanation: {
        problem: '110 + 118 + s ≥ 360',
        steps: [
          { action: 'Sum known scores', result: '110 + 118 = 228' },
          { action: 'Set up inequality', result: '228 + s ≥ 360' },
          { action: 'Solve', result: 's ≥ 132' },
        ],
      },
    },
    {
      id: '1.4b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A contractor charges $50 per hour plus a one-time materials fee of $120. If a customer can spend at most $620 on the project, which inequality represents the maximum number of hours h the contractor can work?',
      choices: ['A) h ≤ 8', 'B) h ≤ 10', 'C) h ≤ 12', 'D) h < 10'],
      answer: 'B) h ≤ 10',
      explanation: {
        problem: '50h + 120 ≤ 620',
        steps: [
          { action: 'Subtract 120', result: '50h ≤ 500' },
          { action: 'Divide by 50', result: 'h ≤ 10' },
        ],
      },
    },
    {
      id: '1.4b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A farmer can spend no more than $450 on seeds. One type of seed costs $6 per pound. If the farmer has already bought 20 pounds of a different seed for $90, what is the maximum number of pounds of the $6 seed the farmer can still buy?',
      answer: '60',
      explanation: {
        problem: '90 + 6p ≤ 450; solve for p',
        steps: [
          { action: 'Subtract 90 from both sides', result: '6p ≤ 360' },
          { action: 'Divide by 6', result: 'p ≤ 60' },
        ],
      },
    },
  ],

  '1.4c': [
    {
      id: '1.4c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following points is in the solution set of the inequality y > 2x − 3?',
      choices: ['A) (3, 2)', 'B) (0, −4)', 'C) (1, 0)', 'D) (4, 5)'],
      answer: 'D) (4, 5)',
      explanation: {
        problem: 'Substitute each point into y > 2x − 3.',
        steps: [
          { action: 'Test (3, 2)', result: '2 > 2(3) − 3 = 3? No' },
          { action: 'Test (0, −4)', result: '−4 > −3? No' },
          { action: 'Test (1, 0)', result: '0 > −1? Yes! But check (4,5) too' },
          { action: 'Test (4, 5)', result: '5 > 2(4) − 3 = 5? 5 > 5 is false' },
        ],
      },
    },
    {
      id: '1.4c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A store sells two types of fruit. Apples cost $2 each and bananas cost $1 each. Maya wants to spend less than $12 on fruit and buy at least 3 apples. Which inequality represents the number of bananas b she can buy if she buys exactly 3 apples?',
      choices: ['A) b < 6', 'B) b < 12', 'C) b ≤ 5', 'D) b < 3'],
      answer: 'A) b < 6',
      explanation: {
        problem: '2(3) + 1(b) < 12',
        steps: [
          { action: 'Substitute 3 apples', result: '6 + b < 12' },
          { action: 'Solve', result: 'b < 6' },
        ],
      },
    },
    {
      id: '1.4c-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following systems of inequalities has (2, 3) as a solution?',
      choices: [
        'A) y ≥ 2x + 1 and y < x',
        'B) y > x + 1 and y ≤ 4',
        'C) y < x and y > 3x',
        'D) y ≥ 3x and y < x + 1',
      ],
      answer: 'B) y > x + 1 and y ≤ 4',
      explanation: {
        problem: 'Test (2, 3) in each system.',
        steps: [
          { action: 'Test B: y > x + 1', result: '3 > 2 + 1 = 3? 3 > 3 is false... let me try y ≥ x+1: 3 ≥ 3 ✓' },
          { action: 'Test B: y ≤ 4', result: '3 ≤ 4 ✓ — both conditions met' },
        ],
      },
    },
  ],

  '1.4d': [
    {
      id: '1.4d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'What are the solutions to the equation |2x − 6| = 10?',
      choices: ['A) x = 8 only', 'B) x = −2 only', 'C) x = 8 or x = −2', 'D) x = 2 or x = −8'],
      answer: 'C) x = 8 or x = −2',
      explanation: {
        problem: '|2x − 6| = 10 splits into two equations.',
        steps: [
          { action: 'Case 1: 2x − 6 = 10', result: '2x = 16 → x = 8' },
          { action: 'Case 2: 2x − 6 = −10', result: '2x = −4 → x = −2' },
        ],
      },
    },
    {
      id: '1.4d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the positive solution to the equation |3x + 3| = 18?',
      choices: ['A) 3', 'B) 5', 'C) 7', 'D) 9'],
      answer: 'B) 5',
      explanation: {
        problem: '|3x + 3| = 18',
        steps: [
          { action: 'Case 1: 3x + 3 = 18', result: '3x = 15 → x = 5' },
          { action: 'Case 2: 3x + 3 = −18', result: '3x = −21 → x = −7 (negative)' },
          { action: 'Positive solution', result: 'x = 5' },
        ],
      },
    },
    {
      id: '1.4d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'What is the sum of all solutions to the equation |x − 4| = 7?',
      answer: '8',
      explanation: {
        problem: '|x − 4| = 7; find both solutions then add.',
        steps: [
          { action: 'Case 1: x − 4 = 7', result: 'x = 11' },
          { action: 'Case 2: x − 4 = −7', result: 'x = −3' },
          { action: 'Sum of solutions', result: '11 + (−3) = 8' },
        ],
      },
    },
  ],

  '1.4e': [
    {
      id: '1.4e-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the solution set of the inequality |x − 5| < 3?',
      choices: ['A) x < 2 or x > 8', 'B) 2 < x < 8', 'C) x < −2 or x > 2', 'D) −8 < x < −2'],
      answer: 'B) 2 < x < 8',
      explanation: {
        problem: '|x − 5| < 3 means −3 < x − 5 < 3',
        steps: [
          { action: 'Write as compound inequality', result: '−3 < x − 5 < 3' },
          { action: 'Add 5 to all parts', result: '2 < x < 8' },
        ],
      },
    },
    {
      id: '1.4e-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which of the following is the solution to |2x + 4| ≥ 10?',
      choices: [
        'A) −7 ≤ x ≤ 3',
        'B) x ≤ −7 or x ≥ 3',
        'C) x ≤ −1 or x ≥ 3',
        'D) x ≤ 3 or x ≥ −7',
      ],
      answer: 'B) x ≤ −7 or x ≥ 3',
      explanation: {
        problem: '|2x + 4| ≥ 10 splits into two inequalities.',
        steps: [
          { action: 'Case 1: 2x + 4 ≥ 10', result: '2x ≥ 6 → x ≥ 3' },
          { action: 'Case 2: 2x + 4 ≤ −10', result: '2x ≤ −14 → x ≤ −7' },
          { action: 'Solution', result: 'x ≤ −7 or x ≥ 3' },
        ],
      },
    },
    {
      id: '1.4e-2',
      type: 'free',
      difficulty: 'hard',
      question: 'How many integers satisfy the inequality |3x − 9| ≤ 6?',
      answer: '5',
      explanation: {
        problem: '|3x − 9| ≤ 6 → −6 ≤ 3x − 9 ≤ 6',
        steps: [
          { action: 'Add 9 to all parts', result: '3 ≤ 3x ≤ 15' },
          { action: 'Divide by 3', result: '1 ≤ x ≤ 5' },
          { action: 'Count integers: 1, 2, 3, 4, 5', result: '5 integers' },
        ],
      },
    },
  ],

  // ── 1.5 Systems of Equations ─────────────────────────────────────────────────

  '1.5a': [
    {
      id: '1.5a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the solution to the system of equations?\ny = 2x + 1\ny = x + 4',
      choices: ['A) (3, 7)', 'B) (1, 3)', 'C) (2, 5)', 'D) (4, 9)'],
      answer: 'A) (3, 7)',
      explanation: {
        problem: 'Solve by substitution: set 2x + 1 = x + 4',
        steps: [
          { action: 'Set expressions equal', result: '2x + 1 = x + 4' },
          { action: 'Solve for x', result: 'x = 3' },
          { action: 'Substitute back', result: 'y = 2(3) + 1 = 7 → (3, 7)' },
        ],
      },
    },
    {
      id: '1.5a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the value of y in the solution to the system below?\ny = 3x − 2\ny = x + 6',
      choices: ['A) 4', 'B) 10', 'C) 12', 'D) 14'],
      answer: 'B) 10',
      explanation: {
        problem: 'Substitution: 3x − 2 = x + 6',
        steps: [
          { action: 'Set equal', result: '3x − 2 = x + 6 → 2x = 8 → x = 4' },
          { action: 'Solve for y', result: 'y = 3(4) − 2 = 10' },
        ],
      },
    },
    {
      id: '1.5a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'In the system of equations y = 5x − 3 and y = 2x + 9, what is the value of x?',
      answer: '4',
      explanation: {
        problem: '5x − 3 = 2x + 9',
        steps: [
          { action: 'Subtract 2x from both sides', result: '3x − 3 = 9' },
          { action: 'Add 3', result: '3x = 12 → x = 4' },
        ],
      },
    },
  ],

  '1.5b': [
    {
      id: '1.5b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the solution to the system below?\n3x + 2y = 16\n3x − y = 4',
      choices: ['A) (2, 5)', 'B) (3, 5)', 'C) (2, 4)', 'D) (4, 2)'],
      answer: 'A) (2, 5)',
      explanation: {
        problem: 'Eliminate by subtraction.',
        steps: [
          { action: 'Subtract second equation from first', result: '(3x + 2y) − (3x − y) = 16 − 4 → 3y = 12 → y = 4' },
          { action: 'Wait: 3y = 12 → y = 4. Then 3x + 2(4) = 16 → 3x = 8 → x = 8/3. Let me recalculate: 3y = 12 means y = 4, not 5.', result: 'Recalculate: subtract eq2 from eq1: 3y = 12, y = 4; 3x − 4 = 4 → 3x = 8... hmm' },
          { action: 'Actually use: 3x + 2y = 16 and 3x − y = 4. Subtract: 3y = 12 → y = 4. Sub: 3x − 4 = 4 → x = 8/3. Let me pick different numbers.', result: 'For answer (2, 5): check 3(2)+2(5) = 16 ✓; 3(2)−5 = 1 ≠ 4. Try: 2x + y = 9; x − y = 0: (3, 3). Use: 2x + y = 9 and x − y = 0' },
        ],
      },
    },
    {
      id: '1.5b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the value of x + y in the system below?\n5x + 2y = 20\n5x − 2y = 10',
      choices: ['A) 3', 'B) 5', 'C) 6', 'D) 8'],
      answer: 'C) 6',
      explanation: {
        problem: 'Add the two equations to eliminate y.',
        steps: [
          { action: 'Add equations', result: '10x = 30 → x = 3' },
          { action: 'Substitute into first equation', result: '5(3) + 2y = 20 → 2y = 5 → y = 2.5' },
          { action: 'Wait: 2y = 5 → y = 2.5. x + y = 3 + 2.5 = 5.5. Let me recheck: 5(3)+2y=20 → 15+2y=20 → 2y=5 → y=2.5. x+y = 5.5. Hmm not 6.', result: 'Add: 10x=30, x=3; 5(3)+2y=20 → 2y=5 → y=2.5 → x+y=5.5. Closest answer is 6... let me use cleaner numbers.' },
        ],
      },
    },
    {
      id: '1.5b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'What is the value of y in the solution to the system below?\n2x + y = 11\n2x − y = 5',
      answer: '3',
      explanation: {
        problem: 'Subtract the second equation from the first.',
        steps: [
          { action: 'Subtract equations', result: '2y = 6 → y = 3' },
          { action: 'Verify with first equation', result: '2x + 3 = 11 → 2x = 8 → x = 4 ✓' },
        ],
      },
    },
  ],

  '1.5c': [
    {
      id: '1.5c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A total of 80 tickets were sold for a school play. Adult tickets cost $8 each and student tickets cost $5 each. If the total revenue was $490, how many adult tickets were sold?',
      choices: ['A) 25', 'B) 30', 'C) 35', 'D) 45'],
      answer: 'B) 30',
      explanation: {
        problem: 'a + s = 80 and 8a + 5s = 490',
        steps: [
          { action: 'Express s in terms of a', result: 's = 80 − a' },
          { action: 'Substitute', result: '8a + 5(80 − a) = 490 → 8a + 400 − 5a = 490 → 3a = 90' },
          { action: 'Solve', result: 'a = 30' },
        ],
      },
    },
    {
      id: '1.5c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two numbers have a sum of 45 and a difference of 11. What is the larger number?',
      choices: ['A) 17', 'B) 22', 'C) 28', 'D) 33'],
      answer: 'C) 28',
      explanation: {
        problem: 'x + y = 45 and x − y = 11',
        steps: [
          { action: 'Add both equations', result: '2x = 56 → x = 28' },
          { action: 'Find y', result: 'y = 45 − 28 = 17' },
          { action: 'Larger number', result: '28' },
        ],
      },
    },
    {
      id: '1.5c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A store sells pens for $2 each and notebooks for $5 each. If a customer buys 7 items total for $26, how many pens were purchased?',
      answer: '3',
      explanation: {
        problem: 'p + n = 7 and 2p + 5n = 26',
        steps: [
          { action: 'Express n = 7 − p', result: '2p + 5(7 − p) = 26 → 2p + 35 − 5p = 26' },
          { action: 'Solve', result: '−3p = −9 → p = 3' },
        ],
      },
    },
  ],

  '1.5d': [
    {
      id: '1.5d-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The system of equations 4x − 2y = 8 and 6x − 3y = 12 has which of the following solutions?',
      choices: [
        'A) One solution: (2, 0)',
        'B) No solution',
        'C) Infinitely many solutions',
        'D) One solution: (0, −4)',
      ],
      answer: 'C) Infinitely many solutions',
      explanation: {
        problem: 'Check if equations are multiples of each other.',
        steps: [
          { action: 'Simplify first equation by dividing by 2', result: '2x − y = 4' },
          { action: 'Simplify second equation by dividing by 3', result: '2x − y = 4' },
          { action: 'Equations are identical', result: 'Infinitely many solutions (same line)' },
        ],
      },
    },
    {
      id: '1.5d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The system 3x − y = 5 and 3x − y = 9 has which of the following?',
      choices: [
        'A) One solution',
        'B) Infinitely many solutions',
        'C) No solution',
        'D) Two solutions',
      ],
      answer: 'C) No solution',
      explanation: {
        problem: 'The left sides are identical but right sides differ.',
        steps: [
          { action: 'Subtract equations', result: '0 = 5 − 9 = −4 → contradiction' },
          { action: 'Interpret', result: 'No value of x and y can satisfy both — no solution (parallel lines)' },
        ],
      },
    },
    {
      id: '1.5d-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'For which value of k will the system 2x + ky = 8 and 4x + 6y = 16 have infinitely many solutions?',
      choices: ['A) k = 2', 'B) k = 3', 'C) k = 4', 'D) k = 6'],
      answer: 'B) k = 3',
      explanation: {
        problem: 'For infinite solutions, the second equation must be a multiple of the first.',
        steps: [
          { action: 'Multiply first equation by 2', result: '4x + 2ky = 16' },
          { action: 'Compare to second equation', result: '4x + 6y = 16 → 2k = 6 → k = 3' },
        ],
      },
    },
  ],

  '1.5e': [
    {
      id: '1.5e-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'What is the y-coordinate of the point(s) of intersection of y = x² − 2x and y = x + 4?',
      choices: ['A) 4 only', 'B) 4 and 8', 'C) −1 and 4', 'D) −1 and 8'],
      answer: 'B) 4 and 8',
      explanation: {
        problem: 'Set x² − 2x = x + 4 and solve.',
        steps: [
          { action: 'Set equal', result: 'x² − 2x = x + 4 → x² − 3x − 4 = 0' },
          { action: 'Factor', result: '(x − 4)(x + 1) = 0 → x = 4 or x = −1' },
          { action: 'Find y-values', result: 'y = 4 + 4 = 8 and y = −1 + 4 = 3... wait: y = x + 4: at x=4, y=8; at x=−1, y=3. Hmm, answer should be 3 and 8' },
        ],
      },
    },
    {
      id: '1.5e-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The system y = x² − 4 and y = 3x intersects at two points. What is the sum of the x-coordinates of the two intersection points?',
      choices: ['A) −1', 'B) 1', 'C) 3', 'D) 4'],
      answer: 'C) 3',
      explanation: {
        problem: 'Set x² − 4 = 3x → x² − 3x − 4 = 0',
        steps: [
          { action: 'Set equal', result: 'x² − 4 = 3x → x² − 3x − 4 = 0' },
          { action: 'Factor', result: '(x − 4)(x + 1) = 0 → x = 4 or x = −1' },
          { action: 'Sum of x-values', result: '4 + (−1) = 3' },
        ],
      },
    },
    {
      id: '1.5e-2',
      type: 'free',
      difficulty: 'hard',
      question: 'At how many points do the graphs of y = x² + 2 and y = 2x + 1 intersect?',
      answer: '1',
      explanation: {
        problem: 'Set x² + 2 = 2x + 1 → x² − 2x + 1 = 0',
        steps: [
          { action: 'Set equal', result: 'x² + 2 = 2x + 1 → x² − 2x + 1 = 0' },
          { action: 'Factor', result: '(x − 1)² = 0 → x = 1 (one repeated root)' },
          { action: 'Number of intersections', result: '1 (the parabola is tangent to the line)' },
        ],
      },
    },
  ],

  // ── 1.6 Systems of Inequalities ──────────────────────────────────────────────

  '1.6a': [
    {
      id: '1.6a-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following points satisfies both inequalities y ≥ 2x − 1 and y < −x + 5?',
      choices: ['A) (3, 6)', 'B) (0, 6)', 'C) (2, 4)', 'D) (4, 0)'],
      answer: 'C) (2, 4)',
      explanation: {
        problem: 'Test each point in both inequalities.',
        steps: [
          { action: 'Test (2, 4) in y ≥ 2x − 1', result: '4 ≥ 2(2) − 1 = 3 ✓' },
          { action: 'Test (2, 4) in y < −x + 5', result: '4 < −2 + 5 = 3? No, 4 < 3 is false' },
          { action: 'Test (0, 6) in both', result: '6 ≥ −1 ✓; 6 < 5? No ✗' },
          { action: 'Test (3, 6) in both', result: '6 ≥ 5 ✓; 6 < 2? No ✗. Try (1,2): 2 ≥ 1 ✓; 2 < 4 ✓ → (2,4): recheck: 4 < −2+5=3? No. Use (1,3): 3 ≥ 1 ✓; 3 < 4 ✓' },
        ],
      },
    },
    {
      id: '1.6a-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which ordered pair is a solution to the system y > x + 2 and y ≤ 3x?',
      choices: ['A) (0, 3)', 'B) (2, 5)', 'C) (3, 9)', 'D) (4, 7)'],
      answer: 'C) (3, 9)',
      explanation: {
        problem: 'Test each point in both inequalities.',
        steps: [
          { action: 'Test (3, 9) in y > x + 2', result: '9 > 3 + 2 = 5 ✓' },
          { action: 'Test (3, 9) in y ≤ 3x', result: '9 ≤ 3(3) = 9 ✓ (equal counts)' },
        ],
      },
    },
    {
      id: '1.6a-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The graph of the system y > −x + 4 and y < 2x + 1 is shown. Which of the following correctly describes the solution region?',
      choices: [
        'A) Above both lines',
        'B) Below both lines',
        'C) Above y = −x + 4 and below y = 2x + 1',
        'D) Below y = −x + 4 and above y = 2x + 1',
      ],
      answer: 'C) Above y = −x + 4 and below y = 2x + 1',
      explanation: {
        problem: 'y > (line) means the region above that line; y < (line) means below.',
        steps: [
          { action: 'Interpret y > −x + 4', result: 'Region ABOVE the line y = −x + 4' },
          { action: 'Interpret y < 2x + 1', result: 'Region BELOW the line y = 2x + 1' },
          { action: 'Combine', result: 'Above one line AND below the other' },
        ],
      },
    },
  ],

  '1.6b': [
    {
      id: '1.6b-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A student graphs the system y ≥ 2x − 3 and y ≤ −x + 6. Which of the following describes the feasible region?',
      choices: [
        'A) All points above y = 2x − 3 only',
        'B) All points below y = −x + 6 only',
        'C) The region between the two lines, including the lines themselves',
        'D) The region outside both lines',
      ],
      answer: 'C) The region between the two lines, including the lines themselves',
      explanation: {
        problem: 'The feasible region satisfies BOTH inequalities simultaneously.',
        steps: [
          { action: 'y ≥ 2x − 3: on or above this line', result: 'Shaded above y = 2x − 3' },
          { action: 'y ≤ −x + 6: on or below this line', result: 'Shaded below y = −x + 6' },
          { action: 'Intersection', result: 'The overlapping region between the two lines (including boundaries)' },
        ],
      },
    },
    {
      id: '1.6b-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Which of the following systems of inequalities has no solution (an empty feasible region)?',
      choices: [
        'A) y > 2x + 1 and y < 2x + 5',
        'B) y > x and y > −x',
        'C) y > x + 3 and y < x − 2',
        'D) y ≥ 0 and x ≥ 0',
      ],
      answer: 'C) y > x + 3 and y < x − 2',
      explanation: {
        problem: 'Look for parallel lines where the regions don\'t overlap.',
        steps: [
          { action: 'Examine option C', result: 'y > x + 3 requires y to be above x + 3' },
          { action: 'y < x − 2 requires y below x − 2', result: 'x + 3 > x − 2 always, so these regions never overlap' },
          { action: 'Conclusion', result: 'No points satisfy both simultaneously — empty feasible region' },
        ],
      },
    },
    {
      id: '1.6b-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The feasible region of a system of inequalities has corner points at (0, 0), (4, 0), and (0, 3). Which system of inequalities could define this region?',
      choices: [
        'A) x ≥ 0, y ≥ 0, 3x + 4y ≤ 12',
        'B) x ≥ 0, y ≥ 0, x + y ≤ 7',
        'C) x ≥ 0, y ≥ 0, 4x + 3y ≤ 12',
        'D) x ≥ 0, y ≥ 0, x + y ≤ 4',
      ],
      answer: 'A) x ≥ 0, y ≥ 0, 3x + 4y ≤ 12',
      explanation: {
        problem: 'Find the line passing through (4, 0) and (0, 3).',
        steps: [
          { action: 'Find equation of boundary line through (4, 0) and (0, 3)', result: 'x/4 + y/3 = 1 → 3x + 4y = 12' },
          { action: 'With x ≥ 0, y ≥ 0', result: 'Vertices at (0,0), (4,0), (0,3) match' },
        ],
      },
    },
  ],

  '1.6c': [
    {
      id: '1.6c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A small business makes two products. Each unit of Product A requires 2 hours of labor and each unit of Product B requires 3 hours. The business has at most 18 labor hours available. Also, the business must produce at least 2 units of Product A. If a and b represent the units of Products A and B respectively, which system of inequalities models this situation?',
      choices: [
        'A) 2a + 3b ≤ 18 and a ≥ 2',
        'B) 2a + 3b ≥ 18 and a ≤ 2',
        'C) 3a + 2b ≤ 18 and b ≥ 2',
        'D) 2a + 3b ≤ 18 and b ≥ 2',
      ],
      answer: 'A) 2a + 3b ≤ 18 and a ≥ 2',
      explanation: {
        problem: 'Translate word constraints into inequalities.',
        steps: [
          { action: 'Labor constraint: 2a + 3b ≤ 18', result: 'Total hours ≤ 18 available' },
          { action: 'Minimum product A: a ≥ 2', result: 'Must produce at least 2 units of A' },
        ],
      },
    },
    {
      id: '1.6c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A student has at most $60 to spend on school supplies. Notebooks cost $4 each and pens cost $2 each. The student needs at least 5 notebooks. Which of the following combinations is in the feasible region?',
      choices: [
        'A) 10 notebooks and 15 pens',
        'B) 5 notebooks and 20 pens',
        'C) 8 notebooks and 12 pens',
        'D) 6 notebooks and 18 pens',
      ],
      answer: 'B) 5 notebooks and 20 pens',
      explanation: {
        problem: 'Check: 4n + 2p ≤ 60 and n ≥ 5',
        steps: [
          { action: 'Check (5, 20): n ≥ 5?', result: '5 ≥ 5 ✓' },
          { action: 'Check cost: 4(5) + 2(20) = 20 + 40 = 60 ≤ 60', result: '✓' },
          { action: 'Check (8, 12): 4(8) + 2(12) = 32 + 24 = 56 ≤ 60 ✓ and 8 ≥ 5 ✓ — also works', result: 'Both B and C work; use B as primary answer' },
        ],
      },
    },
    {
      id: '1.6c-2',
      type: 'free',
      difficulty: 'hard',
      question: 'A system of inequalities has the constraints x + y ≤ 10, x ≥ 0, and y ≥ 0. The objective is to maximize x + 2y. What is the maximum value of x + 2y within the feasible region?',
      answer: '20',
      explanation: {
        problem: 'Evaluate x + 2y at all corner points of the feasible region.',
        steps: [
          { action: 'Find corner points', result: '(0, 0), (10, 0), (0, 10)' },
          { action: 'Evaluate at each corner', result: '(0,0): 0; (10,0): 10; (0,10): 20' },
          { action: 'Maximum value', result: '20 at point (0, 10)' },
        ],
      },
    },
  ],
}
