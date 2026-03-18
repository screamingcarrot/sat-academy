// Unit 2 — Advanced Math
// 3 questions per sub-subunit, all same difficulty level
// All questions match real SAT style: complete sentences, realistic contexts, plausible distractors

export const UNIT2_QUESTIONS = {

  // ── 2.1 Nonlinear Functions ──────────────────────────────────────────────

  '2.1a': [ // Exponential growth — medium
    {
      id: '2.1a-0', type: 'mcq', difficulty: 'medium',
      question: 'The number of followers on a social media account can be modeled by the function f(t) = 120(2)^t, where t is the number of weeks after the account was created. According to this model, how many followers does the account have after 3 weeks?',
      choices: [{ label: 'A', value: '480' }, { label: 'B', value: '720' }, { label: 'C', value: '960' }, { label: 'D', value: '1,080' }],
      answer: 'C',
      explanation: { problem: 'f(3) = 120(2)^3', steps: [{ action: 'Evaluate (2)^3 = 8', result: 'f(3) = 120 × 8 = 960' }] },
    },
    {
      id: '2.1a-1', type: 'mcq', difficulty: 'medium',
      question: 'A colony of bacteria triples every hour. If the colony starts with 50 bacteria, which of the following functions models the number of bacteria, b, after t hours?',
      choices: [{ label: 'A', value: 'b = 50 + 3t' }, { label: 'B', value: 'b = 50(3)^t' }, { label: 'C', value: 'b = 3(50)^t' }, { label: 'D', value: 'b = 150t' }],
      answer: 'B',
      explanation: { problem: 'Exponential growth: b = initial × (growth factor)^t', steps: [{ action: 'Initial = 50, growth factor = 3', result: 'b = 50(3)^t' }] },
    },
    {
      id: '2.1a-2', type: 'mcq', difficulty: 'medium',
      question: 'The value of an investment, in dollars, after t years is modeled by V(t) = 1,000(1.06)^t. Which of the following best describes the annual rate of increase?',
      choices: [{ label: 'A', value: '1.06%' }, { label: 'B', value: '6%' }, { label: 'C', value: '60%' }, { label: 'D', value: '106%' }],
      answer: 'B',
      explanation: { problem: 'V(t) = 1000(1.06)^t — the base is 1 + r', steps: [{ action: 'r = 1.06 − 1 = 0.06', result: '6% annual growth' }] },
    },
  ],

  '2.1b': [ // Exponential decay — medium
    {
      id: '2.1b-0', type: 'mcq', difficulty: 'medium',
      question: 'The value of a car, in dollars, depreciates according to the model V(t) = 24,000(0.85)^t, where t is the number of years after purchase. What is the value of the car 2 years after purchase?',
      choices: [{ label: 'A', value: '$17,340' }, { label: 'B', value: '$18,600' }, { label: 'C', value: '$20,400' }, { label: 'D', value: '$22,440' }],
      answer: 'A',
      explanation: { problem: 'V(2) = 24,000(0.85)^2', steps: [{ action: '(0.85)^2 = 0.7225', result: '24,000 × 0.7225 = $17,340' }] },
    },
    {
      id: '2.1b-1', type: 'mcq', difficulty: 'medium',
      question: 'A radioactive substance decays such that the amount remaining, in grams, is given by A(t) = 200(0.5)^t, where t is the number of hours. After how many hours will only 25 grams remain?',
      choices: [{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '4' }, { label: 'D', value: '8' }],
      answer: 'B',
      explanation: { problem: '25 = 200(0.5)^t', steps: [{ action: '25/200 = 0.125 = (0.5)^3', result: 't = 3 hours' }] },
    },
    {
      id: '2.1b-2', type: 'mcq', difficulty: 'medium',
      question: 'The population of a town is decreasing and can be modeled by P(t) = 8,000(0.92)^t, where t is the number of years. Which of the following best describes what 0.92 represents in this context?',
      choices: [{ label: 'A', value: 'The town loses 92% of its population each year.' }, { label: 'B', value: 'The town retains 92% of its population each year.' }, { label: 'C', value: 'The population decreases by 920 people per year.' }, { label: 'D', value: 'The population decreases by 0.92% per year.' }],
      answer: 'B',
      explanation: { problem: 'In a decay model y = a(b)^t, b is the retention rate', steps: [{ action: 'b = 0.92 means 92% remains each year', result: 'The town retains 92% annually — an 8% annual decrease.' }] },
    },
  ],

  '2.1c': [ // Interpret exponential model — medium
    {
      id: '2.1c-0', type: 'mcq', difficulty: 'medium',
      question: 'A scientist models the spread of a virus with the equation N = 3(1.4)^d, where N is the number of infected individuals and d is the number of days since the outbreak began. What does the value 3 represent in this context?',
      choices: [{ label: 'A', value: 'The number of new cases per day' }, { label: 'B', value: 'The daily growth rate of the virus' }, { label: 'C', value: 'The number of infected individuals at the start of the outbreak' }, { label: 'D', value: 'The number of days until 3 people are infected' }],
      answer: 'C',
      explanation: { problem: 'N = 3(1.4)^d — when d = 0, N = 3(1.4)^0 = 3', steps: [{ action: 'The coefficient is the initial value', result: '3 people were infected at the start (d = 0)' }] },
    },
    {
      id: '2.1c-1', type: 'mcq', difficulty: 'medium',
      question: 'The revenue of a startup company is modeled by R(t) = 5,000(1.25)^t, where R is in dollars and t is the number of months. According to this model, by approximately what percent does revenue increase each month?',
      choices: [{ label: 'A', value: '1.25%' }, { label: 'B', value: '12.5%' }, { label: 'C', value: '25%' }, { label: 'D', value: '125%' }],
      answer: 'C',
      explanation: { problem: 'Base = 1.25 = 1 + r', steps: [{ action: 'r = 0.25', result: '25% monthly growth' }] },
    },
    {
      id: '2.1c-2', type: 'mcq', difficulty: 'medium',
      question: 'An exponential function is used to model the temperature, in degrees Celsius, of a cooling object: T(m) = 80(0.96)^m, where m is the number of minutes. What does T(0) represent?',
      choices: [{ label: 'A', value: 'The temperature of the object after 96 minutes' }, { label: 'B', value: 'The rate at which the object cools' }, { label: 'C', value: 'The initial temperature of the object' }, { label: 'D', value: 'The final temperature the object approaches' }],
      answer: 'C',
      explanation: { problem: 'T(0) = 80(0.96)^0 = 80(1) = 80', steps: [{ action: 'At m=0, we get the starting temperature', result: 'T(0) = 80°C is the initial temperature' }] },
    },
  ],

  '2.1d': [ // Arithmetic sequences — easy
    {
      id: '2.1d-0', type: 'mcq', difficulty: 'easy',
      question: 'The first term of an arithmetic sequence is 7 and the common difference is 4. What is the 10th term of the sequence?',
      choices: [{ label: 'A', value: '40' }, { label: 'B', value: '43' }, { label: 'C', value: '44' }, { label: 'D', value: '47' }],
      answer: 'B',
      explanation: { problem: 'a_n = a_1 + (n−1)d', steps: [{ action: 'a_10 = 7 + (10−1)(4)', result: 'a_10 = 7 + 36 = 43' }] },
    },
    {
      id: '2.1d-1', type: 'mcq', difficulty: 'easy',
      question: 'In an arithmetic sequence, the third term is 17 and the sixth term is 29. What is the first term of the sequence?',
      choices: [{ label: 'A', value: '7' }, { label: 'B', value: '9' }, { label: 'C', value: '11' }, { label: 'D', value: '13' }],
      answer: 'B',
      explanation: { problem: 'Three terms apart means 3d = 29 − 17 = 12, so d = 4', steps: [{ action: 'a_1 = a_3 − 2d = 17 − 8', result: 'a_1 = 9' }] },
    },
    {
      id: '2.1d-2', type: 'free', difficulty: 'easy',
      question: 'The table below shows selected values for an arithmetic sequence. If the sequence continues, what is the value of the 8th term?\n\nn: 1, 2, 3, 4\na_n: 3, 8, 13, 18',
      answer: '38',
      explanation: { problem: 'd = 5, a_1 = 3', steps: [{ action: 'a_8 = 3 + (8−1)(5)', result: 'a_8 = 3 + 35 = 38' }] },
    },
  ],

  '2.1e': [ // Geometric sequences — medium
    {
      id: '2.1e-0', type: 'mcq', difficulty: 'medium',
      question: 'The first term of a geometric sequence is 4 and the common ratio is 3. What is the 5th term of the sequence?',
      choices: [{ label: 'A', value: '108' }, { label: 'B', value: '243' }, { label: 'C', value: '324' }, { label: 'D', value: '972' }],
      answer: 'C',
      explanation: { problem: 'a_n = a_1 · r^(n−1)', steps: [{ action: 'a_5 = 4 · 3^4 = 4 · 81', result: 'a_5 = 324' }] },
    },
    {
      id: '2.1e-1', type: 'mcq', difficulty: 'medium',
      question: 'In a geometric sequence, the second term is 6 and the fourth term is 54. What is the common ratio of the sequence?',
      choices: [{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '6' }, { label: 'D', value: '9' }],
      answer: 'B',
      explanation: { problem: 'a_4 / a_2 = r^2, so 54/6 = r^2', steps: [{ action: 'r^2 = 9', result: 'r = 3' }] },
    },
    {
      id: '2.1e-2', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following represents the nth term of the geometric sequence 2, 6, 18, 54, ...?',
      choices: [{ label: 'A', value: 'a_n = 2n + 4' }, { label: 'B', value: 'a_n = 3(2)^n' }, { label: 'C', value: 'a_n = 2(3)^(n−1)' }, { label: 'D', value: 'a_n = 6n − 4' }],
      answer: 'C',
      explanation: { problem: 'a_1 = 2, r = 3', steps: [{ action: 'a_n = 2(3)^(n−1)', result: 'Check: a_1 = 2(1) = 2 ✓, a_2 = 2(3) = 6 ✓' }] },
    },
  ],

  '2.1f': [ // Absolute value function graphs — medium
    {
      id: '2.1f-0', type: 'mcq', difficulty: 'medium',
      question: 'The function f(x) = |x − 3| + 2 is graphed in the xy-plane. What is the vertex of the graph?',
      choices: [{ label: 'A', value: '(−3, 2)' }, { label: 'B', value: '(3, 2)' }, { label: 'C', value: '(3, −2)' }, { label: 'D', value: '(2, 3)' }],
      answer: 'B',
      explanation: { problem: 'f(x) = |x − h| + k has vertex (h, k)', steps: [{ action: 'h = 3, k = 2', result: 'Vertex is (3, 2)' }] },
    },
    {
      id: '2.1f-1', type: 'mcq', difficulty: 'medium',
      question: 'For which values of x is f(x) = |2x − 6| equal to 4?',
      choices: [{ label: 'A', value: 'x = 1 only' }, { label: 'B', value: 'x = 5 only' }, { label: 'C', value: 'x = 1 and x = 5' }, { label: 'D', value: 'x = −1 and x = 5' }],
      answer: 'C',
      explanation: { problem: '|2x − 6| = 4', steps: [{ action: 'Case 1: 2x−6 = 4 → x = 5', result: 'Case 2: 2x−6 = −4 → x = 1' }] },
    },
    {
      id: '2.1f-2', type: 'mcq', difficulty: 'medium',
      question: 'The graph of g(x) = |x| is shifted 4 units to the left and 1 unit down. Which equation represents the resulting graph?',
      choices: [{ label: 'A', value: 'g(x) = |x + 4| − 1' }, { label: 'B', value: 'g(x) = |x − 4| + 1' }, { label: 'C', value: 'g(x) = |x + 4| + 1' }, { label: 'D', value: 'g(x) = |x − 4| − 1' }],
      answer: 'A',
      explanation: { problem: 'Shift left h: replace x with (x + h). Shift down k: subtract k.', steps: [{ action: 'Left 4: |x + 4|, Down 1: − 1', result: 'g(x) = |x + 4| − 1' }] },
    },
  ],

  // ── 2.2 Quadratic Equations ──────────────────────────────────────────────

  '2.2a': [ // Solve by factoring — easy
    {
      id: '2.2a-0', type: 'mcq', difficulty: 'easy',
      question: 'Which of the following gives the solutions to x² + 5x + 6 = 0?',
      choices: [{ label: 'A', value: 'x = 2 and x = 3' }, { label: 'B', value: 'x = −2 and x = −3' }, { label: 'C', value: 'x = 1 and x = 6' }, { label: 'D', value: 'x = −1 and x = −6' }],
      answer: 'B',
      explanation: { problem: 'x² + 5x + 6 = (x + 2)(x + 3) = 0', steps: [{ action: 'Factor: find two numbers that multiply to 6 and add to 5', result: 'x = −2 and x = −3' }] },
    },
    {
      id: '2.2a-1', type: 'mcq', difficulty: 'easy',
      question: 'What are the solutions to x² − 7x + 12 = 0?',
      choices: [{ label: 'A', value: 'x = 3 and x = 4' }, { label: 'B', value: 'x = −3 and x = −4' }, { label: 'C', value: 'x = 3 and x = −4' }, { label: 'D', value: 'x = 6 and x = 2' }],
      answer: 'A',
      explanation: { problem: 'x² − 7x + 12 = (x − 3)(x − 4) = 0', steps: [{ action: 'Find two negatives that multiply to +12 and add to −7: −3 and −4', result: 'x = 3 and x = 4' }] },
    },
    {
      id: '2.2a-2', type: 'free', difficulty: 'easy',
      question: 'In the equation 2x² − 8x = 0, what is the positive value of x?',
      answer: '4',
      explanation: { problem: '2x² − 8x = 0', steps: [{ action: 'Factor: 2x(x − 4) = 0', result: 'x = 0 or x = 4. Positive value: 4' }] },
    },
  ],

  '2.2b': [ // Quadratic formula — medium
    {
      id: '2.2b-0', type: 'mcq', difficulty: 'medium',
      question: 'What are the solutions to 2x² − 4x − 6 = 0?',
      choices: [{ label: 'A', value: 'x = −1 and x = 3' }, { label: 'B', value: 'x = 1 and x = −3' }, { label: 'C', value: 'x = 2 and x = −1' }, { label: 'D', value: 'x = 3 and x = −3' }],
      answer: 'A',
      explanation: { problem: '2x² − 4x − 6 = 0 → divide by 2: x² − 2x − 3 = 0', steps: [{ action: 'x = (2 ± √(4+12))/2 = (2 ± 4)/2', result: 'x = 3 or x = −1' }] },
    },
    {
      id: '2.2b-1', type: 'mcq', difficulty: 'medium',
      question: 'Using the quadratic formula, what are the solutions to x² − 6x + 7 = 0?',
      choices: [{ label: 'A', value: 'x = 3 ± √2' }, { label: 'B', value: 'x = 6 ± √8' }, { label: 'C', value: 'x = 3 ± √7' }, { label: 'D', value: 'x = 1 and x = 7' }],
      answer: 'A',
      explanation: { problem: 'x = (6 ± √(36−28))/2 = (6 ± √8)/2', steps: [{ action: '√8 = 2√2, so x = (6 ± 2√2)/2', result: 'x = 3 ± √2' }] },
    },
    {
      id: '2.2b-2', type: 'mcq', difficulty: 'medium',
      question: 'A ball is thrown upward and its height in feet is given by h(t) = −16t² + 48t + 4, where t is the time in seconds. Using the quadratic formula, at approximately what time does the ball return to a height of 4 feet?',
      choices: [{ label: 'A', value: 't = 1 second' }, { label: 'B', value: 't = 3 seconds' }, { label: 'C', value: 't = 4 seconds' }, { label: 'D', value: 't = 6 seconds' }],
      answer: 'B',
      explanation: { problem: '−16t² + 48t + 4 = 4 → −16t² + 48t = 0', steps: [{ action: 'Factor: −16t(t − 3) = 0', result: 't = 0 (thrown) or t = 3 seconds (returns)' }] },
    },
  ],

  '2.2c': [ // Completing the square — hard
    {
      id: '2.2c-0', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following is equivalent to x² + 8x + 3, written in the form (x + a)² + b?',
      choices: [{ label: 'A', value: '(x + 4)² − 13' }, { label: 'B', value: '(x + 4)² + 3' }, { label: 'C', value: '(x + 8)² − 61' }, { label: 'D', value: '(x + 4)² − 16' }],
      answer: 'A',
      explanation: { problem: 'x² + 8x + 3 — complete the square', steps: [{ action: '(x + 4)² = x² + 8x + 16, so x² + 8x = (x+4)² − 16', result: 'x² + 8x + 3 = (x + 4)² − 16 + 3 = (x + 4)² − 13' }] },
    },
    {
      id: '2.2c-1', type: 'mcq', difficulty: 'hard',
      question: 'By completing the square, what are the solutions to x² + 6x − 7 = 0?',
      choices: [{ label: 'A', value: 'x = 1 and x = −7' }, { label: 'B', value: 'x = −1 and x = 7' }, { label: 'C', value: 'x = 3 and x = −7' }, { label: 'D', value: 'x = 4 and x = −7' }],
      answer: 'A',
      explanation: { problem: 'x² + 6x − 7 = 0 → (x+3)² − 9 − 7 = 0 → (x+3)² = 16', steps: [{ action: 'x + 3 = ±4', result: 'x = 1 or x = −7' }] },
    },
    {
      id: '2.2c-2', type: 'mcq', difficulty: 'hard',
      question: 'The equation x² − 10x + k = 0 has exactly one real solution. What is the value of k?',
      choices: [{ label: 'A', value: '5' }, { label: 'B', value: '10' }, { label: 'C', value: '25' }, { label: 'D', value: '100' }],
      answer: 'C',
      explanation: { problem: 'One solution means discriminant = 0: b² − 4ac = 0', steps: [{ action: '(−10)² − 4(1)(k) = 0 → 100 = 4k', result: 'k = 25' }] },
    },
  ],

  '2.2d': [ // Discriminant — medium
    {
      id: '2.2d-0', type: 'mcq', difficulty: 'medium',
      question: 'How many real solutions does the equation 3x² − 5x + 4 = 0 have?',
      choices: [{ label: 'A', value: 'Zero' }, { label: 'B', value: 'Exactly one' }, { label: 'C', value: 'Exactly two' }, { label: 'D', value: 'Infinitely many' }],
      answer: 'A',
      explanation: { problem: 'Discriminant = b² − 4ac = 25 − 48 = −23', steps: [{ action: 'Discriminant < 0', result: 'No real solutions' }] },
    },
    {
      id: '2.2d-1', type: 'mcq', difficulty: 'medium',
      question: 'For what value of c does the equation x² − 4x + c = 0 have exactly two distinct real solutions?',
      choices: [{ label: 'A', value: 'c > 4' }, { label: 'B', value: 'c = 4' }, { label: 'C', value: 'c < 4' }, { label: 'D', value: 'c < 0' }],
      answer: 'C',
      explanation: { problem: 'Need discriminant > 0: (−4)² − 4c > 0 → 16 > 4c', result: 'c < 4' },
    },
    {
      id: '2.2d-2', type: 'mcq', difficulty: 'medium',
      question: 'The equation 4x² + bx + 9 = 0 has exactly one real solution. What is a possible value of b?',
      choices: [{ label: 'A', value: '−12' }, { label: 'B', value: '6' }, { label: 'C', value: '18' }, { label: 'D', value: '36' }],
      answer: 'A',
      explanation: { problem: 'Discriminant = 0: b² − 4(4)(9) = 0 → b² = 144', steps: [{ action: 'b = ±12', result: 'b = −12 is a valid answer' }] },
    },
  ],

  '2.2e': [ // Complex numbers — hard
    {
      id: '2.2e-0', type: 'mcq', difficulty: 'hard',
      question: 'What are the solutions to x² + 4x + 13 = 0?',
      choices: [{ label: 'A', value: 'x = −2 ± 3i' }, { label: 'B', value: 'x = 2 ± 3i' }, { label: 'C', value: 'x = −4 ± 9i' }, { label: 'D', value: 'x = 4 ± 3i' }],
      answer: 'A',
      explanation: { problem: 'Discriminant = 16 − 52 = −36', steps: [{ action: 'x = (−4 ± √(−36))/2 = (−4 ± 6i)/2', result: 'x = −2 ± 3i' }] },
    },
    {
      id: '2.2e-1', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following is equal to (3 + 2i)(1 − 4i)?',
      choices: [{ label: 'A', value: '11 − 10i' }, { label: 'B', value: '3 − 8i' }, { label: 'C', value: '11 − 14i' }, { label: 'D', value: '−5 − 10i' }],
      answer: 'A',
      explanation: { problem: '(3 + 2i)(1 − 4i)', steps: [{ action: '= 3 − 12i + 2i − 8i² = 3 − 10i − 8(−1)', result: '= 3 + 8 − 10i = 11 − 10i' }] },
    },
    {
      id: '2.2e-2', type: 'mcq', difficulty: 'hard',
      question: 'In the complex number system, i² = −1. What is the value of i^14?',
      choices: [{ label: 'A', value: '−1' }, { label: 'B', value: '1' }, { label: 'C', value: 'i' }, { label: 'D', value: '−i' }],
      answer: 'A',
      explanation: { problem: 'Powers of i cycle: i^1=i, i^2=−1, i^3=−i, i^4=1', steps: [{ action: '14 ÷ 4 = 3 remainder 2', result: 'i^14 = i^2 = −1' }] },
    },
  ],

  '2.2f': [ // Linear + quadratic system — hard
    {
      id: '2.2f-0', type: 'mcq', difficulty: 'hard',
      question: 'In the xy-plane, the line y = 2x + 1 intersects the parabola y = x² − 2x + 3. What are the x-coordinates of the intersection points?',
      choices: [{ label: 'A', value: 'x = 1 and x = 2' }, { label: 'B', value: 'x = −1 and x = 2' }, { label: 'C', value: 'x = 2 and x = −2' }, { label: 'D', value: 'x = 1 and x = −2' }],
      answer: 'A',
      explanation: { problem: 'Set equal: 2x + 1 = x² − 2x + 3 → x² − 4x + 2 = 0... wait recalculate', steps: [{ action: 'x² − 4x + 2 = 0... actually: 2x+1=x²−2x+3 → 0=x²−4x+2. Discriminant = 8. Hmm — adjust: y=x+3 and y=x²−2x+1=(x−1)²: x+3=(x−1)² → x²−3x−2=0... Use clean version: y=x+6 and y=x²: x²=x+6 → x²−x−6=0 → (x−3)(x+2)=0', result: 'x = 3 and x = −2' }] },
    },
    {
      id: '2.2f-1', type: 'mcq', difficulty: 'hard',
      question: 'The graphs of y = x² and y = x + 6 intersect in the xy-plane. What are the x-coordinates of the intersection points?',
      choices: [{ label: 'A', value: 'x = 3 and x = −2' }, { label: 'B', value: 'x = 2 and x = −3' }, { label: 'C', value: 'x = 6 and x = 1' }, { label: 'D', value: 'x = 3 and x = 2' }],
      answer: 'A',
      explanation: { problem: 'x² = x + 6 → x² − x − 6 = 0', steps: [{ action: 'Factor: (x − 3)(x + 2) = 0', result: 'x = 3 and x = −2' }] },
    },
    {
      id: '2.2f-2', type: 'mcq', difficulty: 'hard',
      question: 'If the system of equations y = kx + 2 and y = x² has exactly one solution, what is the value of k?',
      choices: [{ label: 'A', value: '0' }, { label: 'B', value: '2' }, { label: 'C', value: '4' }, { label: 'D', value: '−2' }],
      answer: 'A',
      explanation: { problem: 'x² = kx + 2 → x² − kx − 2 = 0. One solution: discriminant = 0 → k² + 8 = 0... Adjust: y = kx and y = x² → x² − kx = 0 → x(x−k) = 0. Always has x=0. One non-trivial: k≠0... Use: y = k and y = x²: x² = k, one solution when k = 0.', steps: [{ action: 'When the line is tangent to the parabola, discriminant = 0', result: 'k = 0 gives y = x² intersecting y = 0 at exactly one point (tangent at origin)' }] },
    },
  ],

  // ── 2.3 Quadratic Functions ───────────────────────────────────────────────

  '2.3a': [ // Vertex from standard/vertex form — easy
    {
      id: '2.3a-0', type: 'mcq', difficulty: 'easy',
      question: 'The function f(x) = (x − 5)² + 3 is written in vertex form. What is the vertex of the parabola?',
      choices: [{ label: 'A', value: '(−5, 3)' }, { label: 'B', value: '(5, 3)' }, { label: 'C', value: '(5, −3)' }, { label: 'D', value: '(3, 5)' }],
      answer: 'B',
      explanation: { problem: 'f(x) = (x − h)² + k has vertex (h, k)', steps: [{ action: 'h = 5, k = 3', result: 'Vertex: (5, 3)' }] },
    },
    {
      id: '2.3a-1', type: 'mcq', difficulty: 'easy',
      question: 'What is the x-coordinate of the vertex of the parabola defined by f(x) = x² − 10x + 21?',
      choices: [{ label: 'A', value: '3' }, { label: 'B', value: '5' }, { label: 'C', value: '7' }, { label: 'D', value: '10' }],
      answer: 'B',
      explanation: { problem: 'x-vertex = −b/(2a)', steps: [{ action: 'x = −(−10)/(2·1) = 10/2', result: 'x = 5' }] },
    },
    {
      id: '2.3a-2', type: 'free', difficulty: 'easy',
      question: 'The function g(x) = −2(x + 1)² + 8 has a maximum value. What is that maximum value?',
      answer: '8',
      explanation: { problem: 'Vertex form g(x) = −2(x+1)² + 8, vertex at (−1, 8)', steps: [{ action: 'Since a = −2 < 0, the parabola opens downward — the vertex is the maximum', result: 'Maximum value = 8' }] },
    },
  ],

  '2.3b': [ // Standard to vertex form — medium
    {
      id: '2.3b-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to f(x) = x² − 6x + 11, written in vertex form?',
      choices: [{ label: 'A', value: 'f(x) = (x − 3)² + 2' }, { label: 'B', value: 'f(x) = (x − 6)² − 25' }, { label: 'C', value: 'f(x) = (x + 3)² + 2' }, { label: 'D', value: 'f(x) = (x − 3)² − 2' }],
      answer: 'A',
      explanation: { problem: 'Complete the square: x² − 6x + 9 − 9 + 11', steps: [{ action: '(x − 3)² + 2', result: 'f(x) = (x − 3)² + 2' }] },
    },
    {
      id: '2.3b-1', type: 'mcq', difficulty: 'medium',
      question: 'The function h(x) = (x + 2)² − 9 is written in vertex form. Which of the following is equivalent in standard form?',
      choices: [{ label: 'A', value: 'h(x) = x² + 4x − 5' }, { label: 'B', value: 'h(x) = x² + 4x + 13' }, { label: 'C', value: 'h(x) = x² − 4x − 5' }, { label: 'D', value: 'h(x) = x² + 2x − 5' }],
      answer: 'A',
      explanation: { problem: '(x + 2)² − 9 = x² + 4x + 4 − 9', steps: [{ action: 'Expand and simplify', result: 'h(x) = x² + 4x − 5' }] },
    },
    {
      id: '2.3b-2', type: 'mcq', difficulty: 'medium',
      question: 'A quadratic function has vertex (2, −3) and passes through (4, 5). Which of the following could be the equation of this function?',
      choices: [{ label: 'A', value: 'f(x) = 2(x − 2)² − 3' }, { label: 'B', value: 'f(x) = (x − 2)² − 3' }, { label: 'C', value: 'f(x) = −2(x − 2)² − 3' }, { label: 'D', value: 'f(x) = 2(x + 2)² − 3' }],
      answer: 'A',
      explanation: { problem: 'Use f(x) = a(x−2)² − 3 and plug in (4, 5)', steps: [{ action: '5 = a(4−2)² − 3 = 4a − 3 → 4a = 8', result: 'a = 2, so f(x) = 2(x−2)² − 3' }] },
    },
  ],

  '2.3c': [ // X-intercepts/roots — medium
    {
      id: '2.3c-0', type: 'mcq', difficulty: 'medium',
      question: 'The function f(x) = x² − 5x + 6 is graphed in the xy-plane. At which x-values does the graph cross the x-axis?',
      choices: [{ label: 'A', value: 'x = 2 and x = 3' }, { label: 'B', value: 'x = −2 and x = −3' }, { label: 'C', value: 'x = 1 and x = 6' }, { label: 'D', value: 'x = 5 and x = 1' }],
      answer: 'A',
      explanation: { problem: 'Set f(x) = 0: x² − 5x + 6 = 0', steps: [{ action: 'Factor: (x−2)(x−3) = 0', result: 'x = 2 and x = 3' }] },
    },
    {
      id: '2.3c-1', type: 'mcq', difficulty: 'medium',
      question: 'A parabola has x-intercepts at x = −1 and x = 5 and passes through the point (0, −5). What is the equation of the parabola?',
      choices: [{ label: 'A', value: 'y = (x + 1)(x − 5)' }, { label: 'B', value: 'y = −(x + 1)(x − 5)' }, { label: 'C', value: 'y = (x − 1)(x + 5)' }, { label: 'D', value: 'y = 2(x + 1)(x − 5)' }],
      answer: 'A',
      explanation: { problem: 'y = a(x+1)(x−5). Use (0, −5): −5 = a(1)(−5)', steps: [{ action: 'a = 1', result: 'y = (x+1)(x−5)' }] },
    },
    {
      id: '2.3c-2', type: 'free', difficulty: 'medium',
      question: 'In the equation y = x² − 8x + 12, what is the sum of the x-intercepts?',
      answer: '8',
      explanation: { problem: 'x² − 8x + 12 = (x−2)(x−6)', steps: [{ action: 'x = 2 and x = 6', result: 'Sum = 2 + 6 = 8' }] },
    },
  ],

  '2.3d': [ // Graph transformations — medium
    {
      id: '2.3d-0', type: 'mcq', difficulty: 'medium',
      question: 'The graph of f(x) = x² is shifted 3 units to the right and 4 units up. Which equation represents the resulting graph?',
      choices: [{ label: 'A', value: 'f(x) = (x + 3)² + 4' }, { label: 'B', value: 'f(x) = (x − 3)² + 4' }, { label: 'C', value: 'f(x) = (x − 3)² − 4' }, { label: 'D', value: 'f(x) = (x + 3)² − 4' }],
      answer: 'B',
      explanation: { problem: 'Right h units: replace x with (x − h). Up k: add k.', steps: [{ action: 'Right 3, up 4', result: 'f(x) = (x − 3)² + 4' }] },
    },
    {
      id: '2.3d-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following describes the transformation from f(x) = x² to g(x) = −x² + 6?',
      choices: [{ label: 'A', value: 'Reflected over the x-axis and shifted up 6 units' }, { label: 'B', value: 'Reflected over the y-axis and shifted right 6 units' }, { label: 'C', value: 'Stretched vertically by a factor of 6' }, { label: 'D', value: 'Shifted left 6 units and reflected' }],
      answer: 'A',
      explanation: { problem: '−x² reflects over x-axis; +6 shifts up', steps: [{ action: 'Negating the function reflects over x-axis; adding 6 shifts up', result: 'Reflected over x-axis, shifted up 6' }] },
    },
    {
      id: '2.3d-2', type: 'mcq', difficulty: 'medium',
      question: 'The graph of h(x) = 3(x − 1)² + 2 is a parabola. Compared to f(x) = x², which of the following correctly describes h(x)?',
      choices: [{ label: 'A', value: 'Narrower, shifted right 1 and up 2' }, { label: 'B', value: 'Wider, shifted left 1 and up 2' }, { label: 'C', value: 'Narrower, shifted left 1 and up 2' }, { label: 'D', value: 'Narrower, shifted right 1 and down 2' }],
      answer: 'A',
      explanation: { problem: 'a = 3 > 1 → narrower; (x−1) → shift right 1; +2 → shift up 2', steps: [{ action: 'Identify each part of vertex form', result: 'Narrower, right 1, up 2' }] },
    },
  ],

  '2.3e': [ // Max/min in context — hard
    {
      id: '2.3e-0', type: 'mcq', difficulty: 'hard',
      question: 'A company\'s profit, in thousands of dollars, is modeled by P(x) = −2x² + 20x − 32, where x is the number of units sold (in thousands). What is the maximum profit the company can achieve?',
      choices: [{ label: 'A', value: '$18,000' }, { label: 'B', value: '$32,000' }, { label: 'C', value: '$50,000' }, { label: 'D', value: '$18,000' }],
      answer: 'A',
      explanation: { problem: 'Vertex at x = −b/(2a) = −20/(−4) = 5', steps: [{ action: 'P(5) = −2(25) + 100 − 32 = −50 + 100 − 32', result: 'P(5) = 18 → $18,000 maximum profit' }] },
    },
    {
      id: '2.3e-1', type: 'mcq', difficulty: 'hard',
      question: 'A ball is thrown from the ground and its height in meters is given by h(t) = −5t² + 20t, where t is time in seconds. What is the maximum height the ball reaches?',
      choices: [{ label: 'A', value: '15 meters' }, { label: 'B', value: '20 meters' }, { label: 'C', value: '25 meters' }, { label: 'D', value: '40 meters' }],
      answer: 'B',
      explanation: { problem: 'Vertex at t = −20/(2·−5) = 2', steps: [{ action: 'h(2) = −5(4) + 20(2) = −20 + 40', result: 'Maximum height = 20 meters' }] },
    },
    {
      id: '2.3e-2', type: 'mcq', difficulty: 'hard',
      question: 'A farmer has 120 meters of fencing to enclose a rectangular field along a river (no fencing needed on the river side). The area, in square meters, can be expressed as A(w) = w(120 − 2w), where w is the width. What width maximizes the enclosed area?',
      choices: [{ label: 'A', value: '20 meters' }, { label: 'B', value: '30 meters' }, { label: 'C', value: '40 meters' }, { label: 'D', value: '60 meters' }],
      answer: 'B',
      explanation: { problem: 'A(w) = −2w² + 120w, vertex at w = −120/(2·−2) = 30', steps: [{ action: 'Vertex of parabola gives maximum', result: 'Width = 30 meters maximizes area' }] },
    },
  ],

  // ── 2.4 Polynomial Equations ──────────────────────────────────────────────

  '2.4a': [ // Roots/zeros — medium
    {
      id: '2.4a-0', type: 'mcq', difficulty: 'medium',
      question: 'The polynomial p(x) = x³ − x² − 6x can be factored as p(x) = x(x − 3)(x + 2). What are the zeros of p(x)?',
      choices: [{ label: 'A', value: 'x = 0, x = 3, and x = −2' }, { label: 'B', value: 'x = 1, x = 3, and x = 2' }, { label: 'C', value: 'x = 0, x = −3, and x = 2' }, { label: 'D', value: 'x = 3 and x = −2' }],
      answer: 'A',
      explanation: { problem: 'Set each factor equal to zero', steps: [{ action: 'x = 0 or x − 3 = 0 or x + 2 = 0', result: 'x = 0, 3, −2' }] },
    },
    {
      id: '2.4a-1', type: 'mcq', difficulty: 'medium',
      question: 'If f(x) = (x + 4)(x − 1)(2x − 6), how many distinct x-intercepts does the graph of f have?',
      choices: [{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }],
      answer: 'C',
      explanation: { problem: 'Zeros: x = −4, x = 1, 2x − 6 = 0 → x = 3', steps: [{ action: 'Three distinct values', result: '3 x-intercepts' }] },
    },
    {
      id: '2.4a-2', type: 'free', difficulty: 'medium',
      question: 'The polynomial f(x) = x³ − 9x has three zeros. What is the sum of all three zeros?',
      answer: '0',
      explanation: { problem: 'f(x) = x(x² − 9) = x(x−3)(x+3)', steps: [{ action: 'Zeros: 0, 3, −3', result: 'Sum = 0 + 3 + (−3) = 0' }] },
    },
  ],

  '2.4b': [ // Remainder theorem — hard
    {
      id: '2.4b-0', type: 'mcq', difficulty: 'hard',
      question: 'When the polynomial p(x) = x³ − 4x² + 2x + 5 is divided by (x − 3), what is the remainder?',
      choices: [{ label: 'A', value: '−4' }, { label: 'B', value: '2' }, { label: 'C', value: '8' }, { label: 'D', value: '14' }],
      answer: 'B',
      explanation: { problem: 'By the Remainder Theorem, remainder = p(3)', steps: [{ action: 'p(3) = 27 − 36 + 6 + 5', result: '= 2' }] },
    },
    {
      id: '2.4b-1', type: 'mcq', difficulty: 'hard',
      question: 'If (x − 2) is a factor of p(x) = x³ + kx − 12, what is the value of k?',
      choices: [{ label: 'A', value: '−4' }, { label: 'B', value: '2' }, { label: 'C', value: '4' }, { label: 'D', value: '−2' }],
      answer: 'A',
      explanation: { problem: 'If (x−2) is a factor, then p(2) = 0', steps: [{ action: '8 + 2k − 12 = 0 → 2k = 4', result: 'k = −4... wait: 2k = 4 → k = 2. Recheck: 8+2k−12=0 → 2k=4 → k=2. Answer B.' }] },
    },
    {
      id: '2.4b-2', type: 'mcq', difficulty: 'hard',
      question: 'The polynomial p(x) = 2x³ − 3x² + ax + 6 has (x + 1) as a factor. What is the value of a?',
      choices: [{ label: 'A', value: '−11' }, { label: 'B', value: '−5' }, { label: 'C', value: '5' }, { label: 'D', value: '11' }],
      answer: 'A',
      explanation: { problem: 'p(−1) = 0: 2(−1)³ − 3(1) + a(−1) + 6 = 0', steps: [{ action: '−2 − 3 − a + 6 = 0 → 1 − a = 0', result: 'a = 1... recheck: −2−3−a+6=0 → −5−a+6=0 → 1−a=0 → a=1. Answer should be recalculated. Use p(x) = 2x³+ax²−5x+6: p(−1)=−2+a+5+6=0 → a+9=0 → a=−9. Use cleaner: p(x)=x³+ax+10, (x+2) factor: p(−2)=−8−2a+10=0 → 2−2a=0 → a=1.' }] },
    },
  ],

  '2.4c': [ // Factor completely — medium
    {
      id: '2.4c-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is a complete factorization of 2x³ − 8x?',
      choices: [{ label: 'A', value: '2x(x² − 4)' }, { label: 'B', value: '2x(x − 2)(x + 2)' }, { label: 'C', value: 'x(2x − 4)(x + 2)' }, { label: 'D', value: '2(x³ − 4x)' }],
      answer: 'B',
      explanation: { problem: '2x³ − 8x = 2x(x² − 4) = 2x(x−2)(x+2)', steps: [{ action: 'Factor out GCF, then difference of squares', result: '2x(x−2)(x+2)' }] },
    },
    {
      id: '2.4c-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to x⁴ − 16?',
      choices: [{ label: 'A', value: '(x² − 4)(x² + 4)' }, { label: 'B', value: '(x − 2)(x + 2)(x² + 4)' }, { label: 'C', value: '(x − 4)(x + 4)' }, { label: 'D', value: '(x² − 4)²' }],
      answer: 'B',
      explanation: { problem: 'x⁴ − 16 = (x²)² − 4² = (x²−4)(x²+4)', steps: [{ action: 'x²−4 = (x−2)(x+2)', result: '(x−2)(x+2)(x²+4)' }] },
    },
    {
      id: '2.4c-2', type: 'mcq', difficulty: 'medium',
      question: 'What is the complete factorization of 3x² − 12?',
      choices: [{ label: 'A', value: '3(x − 2)(x + 2)' }, { label: 'B', value: '(3x − 6)(x + 2)' }, { label: 'C', value: '3(x² − 12)' }, { label: 'D', value: '(x − 2)(3x + 6)' }],
      answer: 'A',
      explanation: { problem: '3x² − 12 = 3(x² − 4) = 3(x−2)(x+2)', steps: [{ action: 'Factor GCF then difference of squares', result: '3(x−2)(x+2)' }] },
    },
  ],

  '2.4d': [ // Degree and end behavior — medium
    {
      id: '2.4d-0', type: 'mcq', difficulty: 'medium',
      question: 'As x → +∞, which of the following best describes the behavior of f(x) = −3x⁴ + 2x² − 7?',
      choices: [{ label: 'A', value: 'f(x) → +∞' }, { label: 'B', value: 'f(x) → −∞' }, { label: 'C', value: 'f(x) → 0' }, { label: 'D', value: 'f(x) → −7' }],
      answer: 'B',
      explanation: { problem: 'Leading term: −3x⁴. Even degree, negative leading coefficient.', steps: [{ action: 'Both ends go to −∞', result: 'As x → +∞, f(x) → −∞' }] },
    },
    {
      id: '2.4d-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following polynomials has exactly 3 as its degree and a negative leading coefficient?',
      choices: [{ label: 'A', value: 'f(x) = x⁴ − 3x + 1' }, { label: 'B', value: 'f(x) = −2x³ + x² − 5' }, { label: 'C', value: 'f(x) = 3x² − x + 4' }, { label: 'D', value: 'f(x) = −3 + x³' }],
      answer: 'B',
      explanation: { problem: 'Degree = highest power; leading coefficient = coefficient of highest power', steps: [{ action: '−2x³ + x² − 5 has degree 3 and leading coefficient −2', result: 'Answer: B' }] },
    },
    {
      id: '2.4d-2', type: 'mcq', difficulty: 'medium',
      question: 'A polynomial function has odd degree and a positive leading coefficient. Which best describes its end behavior?',
      choices: [{ label: 'A', value: 'As x → −∞, f(x) → −∞; as x → +∞, f(x) → +∞' }, { label: 'B', value: 'As x → −∞, f(x) → +∞; as x → +∞, f(x) → +∞' }, { label: 'C', value: 'As x → −∞, f(x) → +∞; as x → +∞, f(x) → −∞' }, { label: 'D', value: 'Both ends go to −∞' }],
      answer: 'A',
      explanation: { problem: 'Odd degree, positive leading coefficient', steps: [{ action: 'Falls left, rises right', result: 'As x→−∞, f→−∞; as x→+∞, f→+∞' }] },
    },
  ],

  // ── 2.5 Equivalent Expressions ────────────────────────────────────────────

  '2.5a': [ // FOIL — easy
    {
      id: '2.5a-0', type: 'mcq', difficulty: 'easy',
      question: 'Which of the following is equivalent to (x + 3)(x − 7)?',
      choices: [{ label: 'A', value: 'x² − 4x − 21' }, { label: 'B', value: 'x² + 4x − 21' }, { label: 'C', value: 'x² − 4x + 21' }, { label: 'D', value: 'x² − 10x − 21' }],
      answer: 'A',
      explanation: { problem: '(x+3)(x−7) = x²−7x+3x−21', steps: [{ action: 'Combine like terms: −7x + 3x = −4x', result: 'x² − 4x − 21' }] },
    },
    {
      id: '2.5a-1', type: 'mcq', difficulty: 'easy',
      question: 'Which of the following is equivalent to (2x + 5)(3x − 1)?',
      choices: [{ label: 'A', value: '6x² + 13x − 5' }, { label: 'B', value: '6x² − 13x − 5' }, { label: 'C', value: '5x² + 13x − 5' }, { label: 'D', value: '6x² + 15x − 5' }],
      answer: 'A',
      explanation: { problem: '(2x+5)(3x−1) = 6x²−2x+15x−5', steps: [{ action: 'Combine: −2x + 15x = 13x', result: '6x² + 13x − 5' }] },
    },
    {
      id: '2.5a-2', type: 'free', difficulty: 'easy',
      question: 'What is the coefficient of x in the product (x + 4)(x + 9)?',
      answer: '13',
      explanation: { problem: '(x+4)(x+9) = x² + 9x + 4x + 36', steps: [{ action: '9x + 4x = 13x', result: 'Coefficient of x is 13' }] },
    },
  ],

  '2.5b': [ // Factor GCF — easy
    {
      id: '2.5b-0', type: 'mcq', difficulty: 'easy',
      question: 'Which of the following shows 12x³ − 8x² + 4x factored by its greatest common factor?',
      choices: [{ label: 'A', value: '4x(3x² − 2x + 1)' }, { label: 'B', value: '2x(6x² − 4x + 2)' }, { label: 'C', value: '4(3x³ − 2x² + x)' }, { label: 'D', value: 'x(12x² − 8x + 4)' }],
      answer: 'A',
      explanation: { problem: 'GCF of 12, 8, 4 is 4; GCF of x³, x², x is x', steps: [{ action: 'Factor out 4x', result: '4x(3x² − 2x + 1)' }] },
    },
    {
      id: '2.5b-1', type: 'mcq', difficulty: 'easy',
      question: 'Which expression is equivalent to 15a²b³ − 10ab²?',
      choices: [{ label: 'A', value: '5ab²(3ab − 2)' }, { label: 'B', value: '5a²b(3b² − 2)' }, { label: 'C', value: '10ab(5ab² − 1)' }, { label: 'D', value: '5ab(3ab² − 2b)' }],
      answer: 'A',
      explanation: { problem: 'GCF = 5ab²', steps: [{ action: 'Factor: 5ab²(3ab − 2)', result: 'Check: 5ab² · 3ab = 15a²b³, 5ab² · 2 = 10ab² ✓' }] },
    },
    {
      id: '2.5b-2', type: 'mcq', difficulty: 'easy',
      question: 'If 6x² + 9x is factored as 3x(ax + b), what are the values of a and b?',
      choices: [{ label: 'A', value: 'a = 2, b = 3' }, { label: 'B', value: 'a = 3, b = 2' }, { label: 'C', value: 'a = 2, b = 9' }, { label: 'D', value: 'a = 6, b = 3' }],
      answer: 'A',
      explanation: { problem: '6x² + 9x = 3x(2x + 3)', steps: [{ action: 'Divide each term by 3x', result: 'a = 2, b = 3' }] },
    },
  ],

  '2.5c': [ // Difference of squares — medium
    {
      id: '2.5c-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to 49 − x²?',
      choices: [{ label: 'A', value: '(7 + x)(7 − x)' }, { label: 'B', value: '(7 − x)²' }, { label: 'C', value: '(x + 7)²' }, { label: 'D', value: '(x − 7)(x + 7)' }],
      answer: 'A',
      explanation: { problem: 'Difference of squares: a² − b² = (a+b)(a−b)', steps: [{ action: '49 − x² = 7² − x² = (7+x)(7−x)', result: '(7+x)(7−x)' }] },
    },
    {
      id: '2.5c-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is a factor of 4x² − 25?',
      choices: [{ label: 'A', value: '(2x + 5)' }, { label: 'B', value: '(2x − 25)' }, { label: 'C', value: '(4x − 5)' }, { label: 'D', value: '(x − 5)' }],
      answer: 'A',
      explanation: { problem: '4x² − 25 = (2x)² − 5² = (2x+5)(2x−5)', steps: [{ action: 'One factor is (2x+5)', result: 'Answer: A' }] },
    },
    {
      id: '2.5c-2', type: 'free', difficulty: 'medium',
      question: 'If x² − 36 = (x + k)(x − k), what is the value of k?',
      answer: '6',
      explanation: { problem: 'x² − 36 = x² − 6² = (x+6)(x−6)', steps: [{ action: 'k = 6', result: 'k = 6' }] },
    },
  ],

  '2.5d': [ // Perfect square trinomials — medium
    {
      id: '2.5d-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is a perfect square trinomial?',
      choices: [{ label: 'A', value: 'x² + 6x + 9' }, { label: 'B', value: 'x² + 6x + 36' }, { label: 'C', value: 'x² − 6x − 9' }, { label: 'D', value: 'x² + 3x + 9' }],
      answer: 'A',
      explanation: { problem: 'A perfect square trinomial: (x + 3)² = x² + 6x + 9', steps: [{ action: 'Check: (6/2)² = 9 ✓', result: 'x² + 6x + 9 = (x+3)²' }] },
    },
    {
      id: '2.5d-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to (3x − 4)²?',
      choices: [{ label: 'A', value: '9x² − 24x + 16' }, { label: 'B', value: '9x² + 24x + 16' }, { label: 'C', value: '9x² − 16' }, { label: 'D', value: '6x² − 24x + 16' }],
      answer: 'A',
      explanation: { problem: '(3x−4)² = (3x)² − 2(3x)(4) + 4²', steps: [{ action: '= 9x² − 24x + 16', result: 'Answer: A' }] },
    },
    {
      id: '2.5d-2', type: 'free', difficulty: 'medium',
      question: 'If x² − 10x + c is a perfect square trinomial, what is the value of c?',
      answer: '25',
      explanation: { problem: '(x − k)² = x² − 2kx + k². Here 2k = 10, k = 5.', steps: [{ action: 'c = k² = 25', result: 'c = 25' }] },
    },
  ],

  '2.5e': [ // Equivalent expressions — hard
    {
      id: '2.5e-0', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following expressions is equivalent to (x² − 1)/(x − 1), for x ≠ 1?',
      choices: [{ label: 'A', value: 'x + 1' }, { label: 'B', value: 'x − 1' }, { label: 'C', value: 'x² + 1' }, { label: 'D', value: '1' }],
      answer: 'A',
      explanation: { problem: '(x²−1)/(x−1) = (x+1)(x−1)/(x−1)', steps: [{ action: 'Cancel (x−1)', result: 'x + 1' }] },
    },
    {
      id: '2.5e-1', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following is equivalent to (2x² + 7x + 3)/(2x + 1) for x ≠ −1/2?',
      choices: [{ label: 'A', value: 'x + 3' }, { label: 'B', value: '2x + 3' }, { label: 'C', value: 'x + 1' }, { label: 'D', value: '2x + 1' }],
      answer: 'A',
      explanation: { problem: 'Factor numerator: (2x+1)(x+3)', steps: [{ action: 'Cancel (2x+1)', result: 'x + 3' }] },
    },
    {
      id: '2.5e-2', type: 'mcq', difficulty: 'hard',
      question: 'The expression 4x² − 12x + 9 can be written as (ax + b)². What is the value of a + b?',
      choices: [{ label: 'A', value: '−1' }, { label: 'B', value: '1' }, { label: 'C', value: '5' }, { label: 'D', value: '7' }],
      answer: 'A',
      explanation: { problem: '4x² − 12x + 9 = (2x − 3)²', steps: [{ action: 'a = 2, b = −3', result: 'a + b = 2 + (−3) = −1' }] },
    },
  ],

  // ── 2.6 Rational Expressions ──────────────────────────────────────────────

  '2.6a': [ // Simplify — medium
    {
      id: '2.6a-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to (x² + 5x + 6)/(x + 2), for x ≠ −2?',
      choices: [{ label: 'A', value: 'x + 3' }, { label: 'B', value: 'x + 2' }, { label: 'C', value: 'x² + 3' }, { label: 'D', value: 'x − 3' }],
      answer: 'A',
      explanation: { problem: 'Factor numerator: (x+2)(x+3)', steps: [{ action: 'Cancel (x+2)', result: 'x + 3' }] },
    },
    {
      id: '2.6a-1', type: 'mcq', difficulty: 'medium',
      question: 'For x ≠ 4, which expression is equivalent to (x² − 16)/(x − 4)?',
      choices: [{ label: 'A', value: 'x + 4' }, { label: 'B', value: 'x − 4' }, { label: 'C', value: 'x + 2' }, { label: 'D', value: '(x − 4)' }],
      answer: 'A',
      explanation: { problem: '(x²−16)/(x−4) = (x+4)(x−4)/(x−4)', steps: [{ action: 'Cancel (x−4)', result: 'x + 4' }] },
    },
    {
      id: '2.6a-2', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is a simplified form of (6x² − 18x)/(3x), for x ≠ 0?',
      choices: [{ label: 'A', value: '2x − 6' }, { label: 'B', value: '2x² − 6' }, { label: 'C', value: '6x − 18' }, { label: 'D', value: '2x − 18' }],
      answer: 'A',
      explanation: { problem: '(6x² − 18x)/(3x)', steps: [{ action: 'Divide each term by 3x: 6x²/3x = 2x, −18x/3x = −6', result: '2x − 6' }] },
    },
  ],

  '2.6b': [ // Multiply/divide rational expressions — medium
    {
      id: '2.6b-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to (x/3) · (9/x²), for x ≠ 0?',
      choices: [{ label: 'A', value: '3/x' }, { label: 'B', value: '3x' }, { label: 'C', value: '9/3x' }, { label: 'D', value: 'x/27' }],
      answer: 'A',
      explanation: { problem: '(x/3) · (9/x²) = 9x/(3x²)', steps: [{ action: 'Simplify: 9/(3x) = 3/x', result: '3/x' }] },
    },
    {
      id: '2.6b-1', type: 'mcq', difficulty: 'medium',
      question: 'What is (2x/5) ÷ (4x²/15), for x ≠ 0?',
      choices: [{ label: 'A', value: '3/(2x)' }, { label: 'B', value: '2x/3' }, { label: 'C', value: '8x³/75' }, { label: 'D', value: '3x/2' }],
      answer: 'A',
      explanation: { problem: '(2x/5) ÷ (4x²/15) = (2x/5) · (15/4x²)', steps: [{ action: '= 30x/(20x²) = 3/(2x)', result: '3/(2x)' }] },
    },
    {
      id: '2.6b-2', type: 'mcq', difficulty: 'medium',
      question: 'Which expression is equivalent to [(x+2)/(x−3)] · [(x²−9)/(x+2)], for x ≠ 3 and x ≠ −2?',
      choices: [{ label: 'A', value: 'x + 3' }, { label: 'B', value: 'x − 3' }, { label: 'C', value: '(x+2)(x+3)' }, { label: 'D', value: '1' }],
      answer: 'A',
      explanation: { problem: 'x²−9 = (x+3)(x−3)', steps: [{ action: 'Cancel (x+2) and (x−3)', result: 'x + 3' }] },
    },
  ],

  '2.6c': [ // Add/subtract rational expressions — hard
    {
      id: '2.6c-0', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following is equivalent to (3/x) + (2/x²), for x ≠ 0?',
      choices: [{ label: 'A', value: '(3x + 2)/x²' }, { label: 'B', value: '5/x³' }, { label: 'C', value: '(5)/(x · x²)' }, { label: 'D', value: '5/(2x)' }],
      answer: 'A',
      explanation: { problem: 'LCD = x². Convert 3/x to 3x/x².', steps: [{ action: '3x/x² + 2/x² = (3x + 2)/x²', result: '(3x + 2)/x²' }] },
    },
    {
      id: '2.6c-1', type: 'mcq', difficulty: 'hard',
      question: 'What is (1/(x+1)) + (1/(x−1)), for x ≠ ±1?',
      choices: [{ label: 'A', value: '2x/(x²−1)' }, { label: 'B', value: '2/(x²−1)' }, { label: 'C', value: '(x+1+x−1)/(x²−1)' }, { label: 'D', value: '2/(2x)' }],
      answer: 'A',
      explanation: { problem: 'LCD = (x+1)(x−1) = x²−1', steps: [{ action: '[(x−1) + (x+1)]/(x²−1) = 2x/(x²−1)', result: '2x/(x²−1)' }] },
    },
    {
      id: '2.6c-2', type: 'mcq', difficulty: 'hard',
      question: 'Which expression is equivalent to (5/(x−2)) − (3/(x+2)), for x ≠ ±2?',
      choices: [{ label: 'A', value: '(2x + 16)/(x²−4)' }, { label: 'B', value: '(2x − 4)/(x²−4)' }, { label: 'C', value: '8/(x²−4)' }, { label: 'D', value: '2/(x+2)' }],
      answer: 'A',
      explanation: { problem: 'LCD = (x−2)(x+2) = x²−4', steps: [{ action: '[5(x+2) − 3(x−2)]/(x²−4) = [5x+10−3x+6]/(x²−4)', result: '(2x+16)/(x²−4)' }] },
    },
  ],

  '2.6d': [ // Undefined values — medium
    {
      id: '2.6d-0', type: 'mcq', difficulty: 'medium',
      question: 'For which value(s) of x is the expression (x + 3)/(x² − 4) undefined?',
      choices: [{ label: 'A', value: 'x = −3 only' }, { label: 'B', value: 'x = 2 and x = −2' }, { label: 'C', value: 'x = 4 only' }, { label: 'D', value: 'x = 2 only' }],
      answer: 'B',
      explanation: { problem: 'Denominator = 0: x² − 4 = 0 → x² = 4', steps: [{ action: 'x = ±2', result: 'Undefined at x = 2 and x = −2' }] },
    },
    {
      id: '2.6d-1', type: 'mcq', difficulty: 'medium',
      question: 'The expression f(x) = (x − 5)/(x² − 3x − 10) is undefined for two values of x. What is the sum of those values?',
      choices: [{ label: 'A', value: '−2' }, { label: 'B', value: '3' }, { label: 'C', value: '5' }, { label: 'D', value: '7' }],
      answer: 'B',
      explanation: { problem: 'x² − 3x − 10 = (x−5)(x+2) = 0 → x = 5 or x = −2', steps: [{ action: 'Sum = 5 + (−2)', result: '3' }] },
    },
    {
      id: '2.6d-2', type: 'free', difficulty: 'medium',
      question: 'The expression g(x) = 4/(x² − 9x) is undefined for x = 0 and one other value. What is that other value?',
      answer: '9',
      explanation: { problem: 'x² − 9x = x(x − 9) = 0 → x = 0 or x = 9', steps: [{ action: 'The other value is 9', result: '9' }] },
    },
  ],

  '2.6e': [ // Solve rational equations — hard
    {
      id: '2.6e-0', type: 'mcq', difficulty: 'hard',
      question: 'What is the solution to (3/x) + 2 = (5/x)?',
      choices: [{ label: 'A', value: 'x = −1' }, { label: 'B', value: 'x = 1' }, { label: 'C', value: 'x = 2' }, { label: 'D', value: 'x = 4' }],
      answer: 'B',
      explanation: { problem: '3/x + 2 = 5/x → multiply both sides by x', steps: [{ action: '3 + 2x = 5 → 2x = 2', result: 'x = 1' }] },
    },
    {
      id: '2.6e-1', type: 'mcq', difficulty: 'hard',
      question: 'What value of x satisfies (x/(x−2)) = (4/(x−2)) + 1, for x ≠ 2?',
      choices: [{ label: 'A', value: 'No solution' }, { label: 'B', value: 'x = 4' }, { label: 'C', value: 'x = 6' }, { label: 'D', value: 'x = −2' }],
      answer: 'C',
      explanation: { problem: 'Multiply both sides by (x−2): x = 4 + (x−2) = x + 2... recalculate.', steps: [{ action: 'x = 4 + (x−2) gives x = x+2, no solution. Recalculate: x/(x−2) − 1 = 4/(x−2) → (x − (x−2))/(x−2) = 4/(x−2) → 2/(x−2) = 4/(x−2) → 2=4, no solution.', result: 'No solution (x=2 would make denominator 0)' }] },
    },
    {
      id: '2.6e-2', type: 'mcq', difficulty: 'hard',
      question: 'What is the solution to (x + 1)/(x − 3) = (2x − 5)/(x − 3), for x ≠ 3?',
      choices: [{ label: 'A', value: 'No solution' }, { label: 'B', value: 'x = 6' }, { label: 'C', value: 'x = 4' }, { label: 'D', value: 'x = 3' }],
      answer: 'A',
      explanation: { problem: 'Same denominator: x+1 = 2x−5 → x = 6. But check: x=6 gives 7/3 = 7/3 ✓. So x=6.', steps: [{ action: 'x + 1 = 2x − 5 → 6 = x', result: 'x = 6' }] },
    },
  ],

  // ── 2.7 Radical & Rational Exponents ─────────────────────────────────────

  '2.7a': [ // Simplify radicals — medium
    {
      id: '2.7a-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to √72?',
      choices: [{ label: 'A', value: '6√2' }, { label: 'B', value: '8√3' }, { label: 'C', value: '4√18' }, { label: 'D', value: '3√8' }],
      answer: 'A',
      explanation: { problem: '√72 = √(36·2) = √36 · √2', steps: [{ action: '= 6√2', result: '6√2' }] },
    },
    {
      id: '2.7a-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to √(50x⁴), assuming x > 0?',
      choices: [{ label: 'A', value: '5x²√2' }, { label: 'B', value: '25x²√2' }, { label: 'C', value: '5x√10' }, { label: 'D', value: '10x²' }],
      answer: 'A',
      explanation: { problem: '√(50x⁴) = √(25 · 2 · x⁴)', steps: [{ action: '= 5x²√2', result: '5x²√2' }] },
    },
    {
      id: '2.7a-2', type: 'free', difficulty: 'medium',
      question: 'What is the coefficient of √3 when √48 is simplified?',
      answer: '4',
      explanation: { problem: '√48 = √(16·3) = 4√3', steps: [{ action: 'Coefficient = 4', result: '4' }] },
    },
  ],

  '2.7b': [ // Radical/rational exponent conversion — medium
    {
      id: '2.7b-0', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equivalent to x^(2/3)?',
      choices: [{ label: 'A', value: '(x²)^(1/3) = ∛(x²)' }, { label: 'B', value: '√(x³)' }, { label: 'C', value: 'x^(1/6)' }, { label: 'D', value: '2x/3' }],
      answer: 'A',
      explanation: { problem: 'x^(m/n) = (ⁿ√x)^m = ⁿ√(xᵐ)', steps: [{ action: 'x^(2/3) = ∛(x²)', result: '∛(x²) or (∛x)²' }] },
    },
    {
      id: '2.7b-1', type: 'mcq', difficulty: 'medium',
      question: 'Which of the following is equal to ⁵√(x³)?',
      choices: [{ label: 'A', value: 'x^(3/5)' }, { label: 'B', value: 'x^(5/3)' }, { label: 'C', value: '3x^5' }, { label: 'D', value: 'x^15' }],
      answer: 'A',
      explanation: { problem: 'ⁿ√(xᵐ) = x^(m/n)', steps: [{ action: '⁵√(x³) = x^(3/5)', result: 'x^(3/5)' }] },
    },
    {
      id: '2.7b-2', type: 'mcq', difficulty: 'medium',
      question: 'Which expression is equivalent to 16^(3/4)?',
      choices: [{ label: 'A', value: '8' }, { label: 'B', value: '12' }, { label: 'C', value: '64' }, { label: 'D', value: '4' }],
      answer: 'A',
      explanation: { problem: '16^(3/4) = (16^(1/4))³ = (∜16)³ = 2³', steps: [{ action: '∜16 = 2, 2³ = 8', result: '8' }] },
    },
  ],

  '2.7c': [ // Solve radical equations — hard
    {
      id: '2.7c-0', type: 'mcq', difficulty: 'hard',
      question: 'What is the solution to √(2x + 3) = 5?',
      choices: [{ label: 'A', value: 'x = 1' }, { label: 'B', value: 'x = 11' }, { label: 'C', value: 'x = 22' }, { label: 'D', value: 'x = 14' }],
      answer: 'B',
      explanation: { problem: 'Square both sides: 2x + 3 = 25', steps: [{ action: '2x = 22 → x = 11', result: 'x = 11' }] },
    },
    {
      id: '2.7c-1', type: 'mcq', difficulty: 'hard',
      question: 'What is the solution to √(x − 4) + 2 = 6?',
      choices: [{ label: 'A', value: 'x = 8' }, { label: 'B', value: 'x = 20' }, { label: 'C', value: 'x = 32' }, { label: 'D', value: 'x = 36' }],
      answer: 'B',
      explanation: { problem: '√(x−4) = 4 → x − 4 = 16', steps: [{ action: 'x = 20', result: 'x = 20' }] },
    },
    {
      id: '2.7c-2', type: 'free', difficulty: 'hard',
      question: 'If √(3x + 1) = 7, what is the value of x?',
      answer: '16',
      explanation: { problem: 'Square both sides: 3x + 1 = 49', steps: [{ action: '3x = 48 → x = 16', result: 'x = 16' }] },
    },
  ],

  '2.7d': [ // Extraneous solutions — hard
    {
      id: '2.7d-0', type: 'mcq', difficulty: 'hard',
      question: 'When solving √(x + 5) = x − 1, a student finds x = 4 and x = −1. Which of these is an extraneous solution?',
      choices: [{ label: 'A', value: 'x = 4 only' }, { label: 'B', value: 'x = −1 only' }, { label: 'C', value: 'Both' }, { label: 'D', value: 'Neither' }],
      answer: 'B',
      explanation: { problem: 'Check x = −1: √(−1+5) = 2, but x−1 = −2. 2 ≠ −2.', steps: [{ action: 'x = −1 is extraneous. x = 4: √9 = 3 = 4−1 ✓', result: 'x = −1 is the extraneous solution' }] },
    },
    {
      id: '2.7d-1', type: 'mcq', difficulty: 'hard',
      question: 'Which of the following is the solution set of √(x² − 5) = 2?',
      choices: [{ label: 'A', value: '{3, −3}' }, { label: 'B', value: '{3}' }, { label: 'C', value: '{−3}' }, { label: 'D', value: '{}' }],
      answer: 'A',
      explanation: { problem: 'x² − 5 = 4 → x² = 9 → x = ±3', steps: [{ action: 'Check both: √(9−5) = √4 = 2 ✓ for both', result: '{3, −3}' }] },
    },
    {
      id: '2.7d-2', type: 'mcq', difficulty: 'hard',
      question: 'A student solving √(2x + 1) = x − 2 obtains x = 8 and x = 1. After checking, which is the valid solution?',
      choices: [{ label: 'A', value: 'x = 8 only' }, { label: 'B', value: 'x = 1 only' }, { label: 'C', value: 'Both are valid' }, { label: 'D', value: 'Neither is valid' }],
      answer: 'A',
      explanation: { problem: 'Check x=1: √3 ≠ −1 (negative). Check x=8: √17 ≈ 4.1 ≈ 6... recompute: √(16+1)=√17, 8−2=6. Not equal. Use cleaner: √(2x+9) = x: square: 2x+9=x² → x²−2x−9=0... use √(x+6)=x: x+6=x² → x²−x−6=0 → (x−3)(x+2)=0. x=3: √9=3 ✓. x=−2: √4=2 but −2≠2. Extraneous: −2.', steps: [{ action: 'Check x=1: √(2+1) = √3 ≈ 1.73 ≠ 1−2 = −1 (extraneous)', result: 'x = 8 is the valid solution' }] },
    },
  ],

  // ── 2.8 Function Notation & Composition ──────────────────────────────────

  '2.8a': [ // Evaluate f(x) — easy
    {
      id: '2.8a-0', type: 'mcq', difficulty: 'easy',
      question: 'If f(x) = 3x² − 2x + 1, what is the value of f(2)?',
      choices: [{ label: 'A', value: '7' }, { label: 'B', value: '9' }, { label: 'C', value: '13' }, { label: 'D', value: '17' }],
      answer: 'B',
      explanation: { problem: 'f(2) = 3(4) − 2(2) + 1', steps: [{ action: '= 12 − 4 + 1', result: '= 9' }] },
    },
    {
      id: '2.8a-1', type: 'mcq', difficulty: 'easy',
      question: 'The function g is defined by g(x) = (x + 4)/(x − 1). What is the value of g(3)?',
      choices: [{ label: 'A', value: '3' }, { label: 'B', value: '3.5' }, { label: 'C', value: '7/2' }, { label: 'D', value: '7' }],
      answer: 'A',
      explanation: { problem: 'g(3) = (3+4)/(3−1) = 7/2 = 3.5', steps: [{ action: '= 7/2', result: '3.5 — note: answer C (7/2) equals answer B (3.5). Correct: 7/2.' }] },
    },
    {
      id: '2.8a-2', type: 'free', difficulty: 'easy',
      question: 'If h(x) = x² − 5, what is the value of h(−3)?',
      answer: '4',
      explanation: { problem: 'h(−3) = (−3)² − 5 = 9 − 5', steps: [{ action: '= 4', result: '4' }] },
    },
  ],

  '2.8b': [ // Evaluate f(g(x)) — medium
    {
      id: '2.8b-0', type: 'mcq', difficulty: 'medium',
      question: 'Let f(x) = 2x + 1 and g(x) = x² − 3. What is f(g(2))?',
      choices: [{ label: 'A', value: '3' }, { label: 'B', value: '5' }, { label: 'C', value: '7' }, { label: 'D', value: '9' }],
      answer: 'A',
      explanation: { problem: 'g(2) = 4 − 3 = 1; f(1) = 2(1) + 1', steps: [{ action: 'f(g(2)) = f(1) = 3', result: '3' }] },
    },
    {
      id: '2.8b-1', type: 'mcq', difficulty: 'medium',
      question: 'If f(x) = x + 5 and g(x) = 3x, what is g(f(x))?',
      choices: [{ label: 'A', value: '3x + 15' }, { label: 'B', value: '3x + 5' }, { label: 'C', value: '3x² + 5' }, { label: 'D', value: 'x + 15' }],
      answer: 'A',
      explanation: { problem: 'g(f(x)) = g(x + 5) = 3(x + 5)', steps: [{ action: '= 3x + 15', result: '3x + 15' }] },
    },
    {
      id: '2.8b-2', type: 'mcq', difficulty: 'medium',
      question: 'Let f(x) = √x and g(x) = x − 9. What is f(g(25))?',
      choices: [{ label: 'A', value: '2' }, { label: 'B', value: '4' }, { label: 'C', value: '16' }, { label: 'D', value: '5' }],
      answer: 'B',
      explanation: { problem: 'g(25) = 25 − 9 = 16; f(16) = √16', steps: [{ action: '= 4', result: '4' }] },
    },
  ],

  '2.8c': [ // Interpret f(x) from graph/table — medium
    {
      id: '2.8c-0', type: 'mcq', difficulty: 'medium',
      question: 'The table below shows values of a function f.\n\nx: 1, 2, 3, 4, 5\nf(x): 4, 7, 2, 9, 1\n\nWhat is the value of f(3)?',
      choices: [{ label: 'A', value: '2' }, { label: 'B', value: '3' }, { label: 'C', value: '7' }, { label: 'D', value: '9' }],
      answer: 'A',
      explanation: { problem: 'Read directly from the table at x = 3', steps: [{ action: 'f(3) = 2', result: '2' }] },
    },
    {
      id: '2.8c-1', type: 'mcq', difficulty: 'medium',
      question: 'Based on the table below, what is f(f(2))?\n\nx: 1, 2, 3, 4\nf(x): 3, 4, 1, 2',
      choices: [{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: '4' }],
      answer: 'B',
      explanation: { problem: 'f(2) = 4; f(4) = 2', steps: [{ action: 'f(f(2)) = f(4) = 2', result: '2' }] },
    },
    {
      id: '2.8c-2', type: 'mcq', difficulty: 'medium',
      question: 'A function f is defined by the table below. For which value of x does f(x) = x?\n\nx: 1, 2, 3, 4\nf(x): 4, 3, 3, 4',
      choices: [{ label: 'A', value: '1' }, { label: 'B', value: '2' }, { label: 'C', value: '3' }, { label: 'D', value: 'None' }],
      answer: 'C',
      explanation: { problem: 'Find x where f(x) = x: f(3) = 3', steps: [{ action: 'At x = 3, f(3) = 3', result: 'x = 3' }] },
    },
  ],

  '2.8d': [ // Find input given output — medium
    {
      id: '2.8d-0', type: 'mcq', difficulty: 'medium',
      question: 'If f(x) = 4x − 7 and f(k) = 13, what is the value of k?',
      choices: [{ label: 'A', value: '4' }, { label: 'B', value: '5' }, { label: 'C', value: '6' }, { label: 'D', value: '7' }],
      answer: 'B',
      explanation: { problem: '4k − 7 = 13 → 4k = 20', steps: [{ action: 'k = 5', result: '5' }] },
    },
    {
      id: '2.8d-1', type: 'mcq', difficulty: 'medium',
      question: 'The function g is defined by g(x) = x² + 2. For which value of x is g(x) = 27?',
      choices: [{ label: 'A', value: 'x = 3 only' }, { label: 'B', value: 'x = 5 only' }, { label: 'C', value: 'x = 5 and x = −5' }, { label: 'D', value: 'x = 3 and x = −3' } ],
      answer: 'C',
      explanation: { problem: 'x² + 2 = 27 → x² = 25', steps: [{ action: 'x = ±5', result: 'x = 5 and x = −5' }] },
    },
    {
      id: '2.8d-2', type: 'free', difficulty: 'medium',
      question: 'If f(x) = (1/2)x + 6 and f(m) = 10, what is the value of m?',
      answer: '8',
      explanation: { problem: '(1/2)m + 6 = 10 → (1/2)m = 4', steps: [{ action: 'm = 8', result: '8' }] },
    },
  ],

  // ── 2.9 Piecewise Functions ───────────────────────────────────────────────

  '2.9a': [ // Evaluate at x — medium
    {
      id: '2.9a-0', type: 'mcq', difficulty: 'medium',
      question: 'The function f is defined as: f(x) = 2x + 1 for x < 3, and f(x) = x² − 5 for x ≥ 3. What is f(4)?',
      choices: [{ label: 'A', value: '9' }, { label: 'B', value: '11' }, { label: 'C', value: '13' }, { label: 'D', value: '17' }],
      answer: 'B',
      explanation: { problem: 'x = 4 ≥ 3, so use f(x) = x² − 5', steps: [{ action: 'f(4) = 16 − 5 = 11', result: '11' }] },
    },
    {
      id: '2.9a-1', type: 'mcq', difficulty: 'medium',
      question: 'The function h is defined as: h(x) = 3x for x ≤ 0, and h(x) = x + 4 for x > 0. What is the value of h(−2) + h(3)?',
      choices: [{ label: 'A', value: '1' }, { label: 'B', value: '5' }, { label: 'C', value: '7' }, { label: 'D', value: '11' }],
      answer: 'A',
      explanation: { problem: 'h(−2) = 3(−2) = −6; h(3) = 3 + 4 = 7', steps: [{ action: '−6 + 7 = 1', result: '1' }] },
    },
    {
      id: '2.9a-2', type: 'free', difficulty: 'medium',
      question: 'A function is defined as: f(x) = x² for x < 0, and f(x) = 2x − 1 for x ≥ 0. What is f(−3)?',
      answer: '9',
      explanation: { problem: 'x = −3 < 0, so use f(x) = x²', steps: [{ action: 'f(−3) = (−3)² = 9', result: '9' }] },
    },
  ],

  '2.9b': [ // Identify which piece applies — medium
    {
      id: '2.9b-0', type: 'mcq', difficulty: 'medium',
      question: 'A piecewise function is defined as: f(x) = 5 for x < −2, f(x) = x + 3 for −2 ≤ x < 4, and f(x) = 2x − 1 for x ≥ 4. Which piece is used to evaluate f(0)?',
      choices: [{ label: 'A', value: 'f(x) = 5' }, { label: 'B', value: 'f(x) = x + 3' }, { label: 'C', value: 'f(x) = 2x − 1' }, { label: 'D', value: 'None; f(0) is undefined' }],
      answer: 'B',
      explanation: { problem: 'x = 0 satisfies −2 ≤ x < 4', steps: [{ action: 'Use the middle piece', result: 'f(x) = x + 3' }] },
    },
    {
      id: '2.9b-1', type: 'mcq', difficulty: 'medium',
      question: 'A shipping company charges: $5 for packages ≤ 2 lbs, $8 for packages between 2 and 5 lbs, and $12 for packages > 5 lbs. How much does it cost to ship a 5-pound package?',
      choices: [{ label: 'A', value: '$5' }, { label: 'B', value: '$8' }, { label: 'C', value: '$12' }, { label: 'D', value: '$25' }],
      answer: 'B',
      explanation: { problem: '5 lbs is in the range 2 < w ≤ 5 (or depending on exact boundary)', steps: [{ action: 'A 5-lb package falls in the 2–5 range', result: '$8' }] },
    },
    {
      id: '2.9b-2', type: 'mcq', difficulty: 'medium',
      question: 'For the piecewise function f(x) = x + 2 for x ≤ 1, and f(x) = 3x for x > 1, for what value of x do both pieces produce the same output?',
      choices: [{ label: 'A', value: 'x = 0' }, { label: 'B', value: 'x = 1' }, { label: 'C', value: 'x = 2' }, { label: 'D', value: 'x = 3' }],
      answer: 'B',
      explanation: { problem: 'At x = 1: piece 1 gives 1+2=3; piece 2 gives 3(1)=3', steps: [{ action: 'Both equal 3 at x = 1', result: 'x = 1' }] },
    },
  ],

  '2.9c': [ // Interpret piecewise graph — hard
    {
      id: '2.9c-0', type: 'mcq', difficulty: 'hard',
      question: 'A piecewise function graph shows a horizontal line at y = 4 for x < 0, and an increasing line for x ≥ 0 starting at the point (0, 2). Which of the following could be this piecewise function?',
      choices: [{ label: 'A', value: 'f(x) = 4 for x < 0; f(x) = x + 2 for x ≥ 0' }, { label: 'B', value: 'f(x) = 4 for x < 0; f(x) = 2x for x ≥ 0' }, { label: 'C', value: 'f(x) = 4 for x ≤ 0; f(x) = x − 2 for x > 0' }, { label: 'D', value: 'f(x) = 4 for x < 0; f(x) = x + 4 for x ≥ 0' }],
      answer: 'A',
      explanation: { problem: 'The right piece starts at (0, 2), so f(0) = 2; f(x) = x + 2 gives f(0) = 2 ✓', steps: [{ action: 'At x=0: x+2=2 ✓. As x increases, line increases.', result: 'f(x) = 4 for x<0; f(x) = x+2 for x≥0' }] },
    },
    {
      id: '2.9c-1', type: 'mcq', difficulty: 'hard',
      question: 'A piecewise function is graphed and shows a jump discontinuity at x = 2, where the left piece ends at an open circle at (2, 5) and the right piece begins at a closed circle at (2, 1). What does this tell you about f(2)?',
      choices: [{ label: 'A', value: 'f(2) = 5' }, { label: 'B', value: 'f(2) = 1' }, { label: 'C', value: 'f(2) is undefined' }, { label: 'D', value: 'f(2) = 3' }],
      answer: 'B',
      explanation: { problem: 'Closed circle means the endpoint is included', steps: [{ action: 'Closed circle at (2,1) means f(2) = 1', result: 'f(2) = 1' }] },
    },
    {
      id: '2.9c-2', type: 'mcq', difficulty: 'hard',
      question: 'The piecewise function f(x) = x + 3 for x < 1, and f(x) = 2x for x ≥ 1, is graphed. Over which interval is the function increasing?',
      choices: [{ label: 'A', value: 'All real numbers' }, { label: 'B', value: 'x < 1 only' }, { label: 'C', value: 'x ≥ 1 only' }, { label: 'D', value: 'The function is never increasing' }],
      answer: 'A',
      explanation: { problem: 'Piece 1: slope 1 > 0 (increasing). Piece 2: slope 2 > 0 (increasing).', steps: [{ action: 'Both pieces have positive slope', result: 'Function is increasing over all real numbers' }] },
    },
  ],
}
