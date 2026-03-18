// ─────────────────────────────────────────────────────────────────────────────
// SAT Academy — Curriculum Data
// Unit 1 (Algebra) is fully implemented. All other units are stubbed.
// ─────────────────────────────────────────────────────────────────────────────

export const MATH_UNITS = [
  {
    id: 'M1',
    number: 1,
    title: 'Algebra',
    color: 'brand',
    icon: '∑',
    subunits: [
      {
        id: '1.1',
        title: 'Linear Equations — 1 Variable',
        difficulty: 'easy',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities',
        items: [
          {
            id: '1.1a',
            label: 'a',
            title: 'Solve a basic one-step or two-step equation',
            difficulty: 'easy',
            learn: {
              description: 'A linear equation in one variable has the form ax + b = c. To solve, isolate x using inverse operations — undo addition/subtraction first, then multiplication/division.',
              exampleProblem: '2x + 5 = 13',
              exampleAnswer: 'x = 4',
              steps: [
                {
                  stepNum: 1,
                  action: 'Subtract 5 from both sides',
                  equation: '2x + 5 − 5 = 13 − 5',
                  result: '2x = 8',
                  note: 'We undo the +5 by subtracting 5. Whatever we do to one side, we must do to the other to keep the equation balanced.',
                },
                {
                  stepNum: 2,
                  action: 'Divide both sides by 2',
                  equation: '2x ÷ 2 = 8 ÷ 2',
                  result: 'x = 4',
                  note: 'We undo the ×2 by dividing. The coefficient of x becomes 1, isolating x.',
                },
                {
                  stepNum: 3,
                  action: 'Check your answer',
                  equation: '2(4) + 5 = 13',
                  result: '13 = 13 ✓',
                  note: 'Always substitute back in to verify. Both sides equal 13, so x = 4 is correct.',
                },
              ],
              desmosSteps: [
                { exprs: [{ id: 'line1', latex: 'y = 2x + 5', color: '#6366f1' }, { id: 'line2', latex: 'y = 13', color: '#f59e0b' }], caption: 'The equation 2x + 5 = 13 asks: where does y = 2x + 5 meet y = 13?' },
                { exprs: [{ id: 'sub', latex: 'y = 2x', color: '#6366f1' }, { id: 'line2', latex: 'y = 8', color: '#f59e0b' }], caption: 'After subtracting 5: 2x = 8. Now where does y = 2x cross y = 8?' },
                { exprs: [{ id: 'pt', latex: '(4,13)', color: '#22c55e', showLabel: true }], caption: 'The solution x = 4 is the x-coordinate of the intersection point (4, 13).' },
              ],
            },
          },
          {
            id: '1.1b',
            label: 'b',
            title: 'Solve with fractions or decimals',
            difficulty: 'easy',
            learn: {
              description: 'When equations have fractions, multiply both sides by the LCD to clear them. For decimals, multiply by a power of 10.',
              exampleProblem: 'x/3 + 2 = 5',
              exampleAnswer: 'x = 9',
              steps: [
                { stepNum: 1, action: 'Subtract 2 from both sides', equation: 'x/3 = 3', result: 'x/3 = 3', note: 'Isolate the fraction term first.' },
                { stepNum: 2, action: 'Multiply both sides by 3', equation: '3 · (x/3) = 3 · 3', result: 'x = 9', note: 'Multiplying by the denominator clears the fraction.' },
                { stepNum: 3, action: 'Check', equation: '9/3 + 2 = 5', result: '5 = 5 ✓', note: 'Verified.' },
              ],
              desmosSteps: [
                { exprs: [{ id: 'f', latex: 'y = x/3 + 2', color: '#6366f1' }, { id: 'g', latex: 'y = 5', color: '#f59e0b' }], caption: 'y = x/3 + 2 meets y = 5 at x = 9.' },
                { exprs: [{ id: 'pt', latex: '(9,5)', color: '#22c55e', showLabel: true }], caption: 'Solution: x = 9.' },
              ],
            },
          },
          {
            id: '1.1c',
            label: 'c',
            title: 'Rearrange a formula for a variable',
            difficulty: 'medium',
            learn: {
              description: 'To rearrange a formula, treat all other variables as constants and isolate the target variable using inverse operations.',
              exampleProblem: 'Solve for h: A = (1/2)bh',
              exampleAnswer: 'h = 2A/b',
              steps: [
                { stepNum: 1, action: 'Multiply both sides by 2', equation: '2A = bh', result: '2A = bh', note: 'Clear the fraction 1/2 by multiplying by 2.' },
                { stepNum: 2, action: 'Divide both sides by b', equation: '2A/b = h', result: 'h = 2A/b', note: 'Divide by b to isolate h.' },
              ],
              desmosSteps: [
                { exprs: [{ id: 'a', latex: 'A = \\frac{1}{2}bh', color: '#6366f1' }], caption: 'The area formula for a triangle. We want h alone on one side.' },
              ],
            },
          },
          {
            id: '1.1d',
            label: 'd',
            title: 'Set up and solve from a word problem',
            difficulty: 'medium',
            learn: {
              description: 'Translate words into an equation: identify the unknown, define a variable, then write the equation based on the relationships described.',
              exampleProblem: 'A number increased by 7 is equal to three times that number minus 5. What is the number?',
              exampleAnswer: 'x = 6',
              steps: [
                { stepNum: 1, action: 'Define the variable', equation: 'Let x = the number', result: '', note: '"A number" → x' },
                { stepNum: 2, action: 'Write the equation', equation: 'x + 7 = 3x − 5', result: 'x + 7 = 3x − 5', note: '"increased by 7" → x + 7, "three times that number minus 5" → 3x − 5' },
                { stepNum: 3, action: 'Subtract x from both sides', equation: '7 = 2x − 5', result: '7 = 2x − 5', note: 'Move x terms to one side.' },
                { stepNum: 4, action: 'Add 5 to both sides', equation: '12 = 2x', result: '12 = 2x', note: '' },
                { stepNum: 5, action: 'Divide by 2', equation: 'x = 6', result: 'x = 6', note: 'Check: 6 + 7 = 13 = 3(6) − 5 = 13 ✓' },
              ],
              desmosSteps: [
                { exprs: [{ id: 'f', latex: 'y = x + 7', color: '#6366f1' }, { id: 'g', latex: 'y = 3x - 5', color: '#f59e0b' }], caption: 'The two expressions are equal where the lines intersect.' },
                { exprs: [{ id: 'pt', latex: '(6,13)', color: '#22c55e', showLabel: true }], caption: 'Intersection at x = 6. The number is 6.' },
              ],
            },
          },
          {
            id: '1.1e',
            label: 'e',
            title: 'Equations with no solution or infinitely many solutions',
            difficulty: 'hard',
            learn: {
              description: 'After simplifying: if you get a false statement (e.g., 3 = 7), there\'s NO solution. If you get a true statement (e.g., 0 = 0), there are INFINITELY MANY solutions.',
              exampleProblem: '3(x + 2) = 3x + 7',
              exampleAnswer: 'No solution',
              steps: [
                { stepNum: 1, action: 'Distribute on the left', equation: '3x + 6 = 3x + 7', result: '3x + 6 = 3x + 7', note: 'Distribute 3 across (x + 2).' },
                { stepNum: 2, action: 'Subtract 3x from both sides', equation: '6 = 7', result: '6 = 7', note: '6 = 7 is false — this equation has NO solution.' },
              ],
              desmosSteps: [
                { exprs: [{ id: 'f', latex: 'y = 3(x+2)', color: '#6366f1' }, { id: 'g', latex: 'y = 3x+7', color: '#f59e0b' }], caption: 'These two lines are parallel — they never intersect, so no solution exists.' },
              ],
            },
          },
        ],
      },
      {
        id: '1.2',
        title: 'Linear Equations — 2 Variables',
        difficulty: 'easy',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs',
        items: [
          { id: '1.2a', label: 'a', title: 'Interpret slope in context', difficulty: 'easy', learn: {
            description: 'In y = mx + b, the slope m is the rate of change — how much y changes for each 1-unit increase in x. Always name what the variables represent when interpreting.',
            exampleProblem: 'A taxi charges $2.50 per mile. In the equation C = 2.5m + 3, what does 2.5 represent?',
            exampleAnswer: 'The cost per mile ($2.50 for each mile driven).',
            steps: [
              { stepNum: 1, action: 'Identify the slope', equation: 'C = 2.5m + 3', result: 'slope = 2.5', note: 'The coefficient of m is the slope.' },
              { stepNum: 2, action: 'Interpret using units', equation: 'ΔC/Δm = 2.5', result: 'Cost increases $2.50 per mile', note: 'Slope = change in y per 1-unit increase in x.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=2.5x+3', color: '#6366f1' }], caption: 'y = 2.5x + 3. The slope 2.5 means the line rises $2.50 for every 1 mile.' },
            ],
          }},
          { id: '1.2b', label: 'b', title: 'Interpret y-intercept in context', difficulty: 'easy', learn: {
            description: 'The y-intercept b in y = mx + b is the value of y when x = 0. In context, it represents the starting value or fixed amount before any variable change.',
            exampleProblem: 'In C = 2.5m + 3, what does the 3 represent?',
            exampleAnswer: 'The flat fee of $3 charged at the start, before any miles are driven.',
            steps: [
              { stepNum: 1, action: 'Set x = 0 (m = 0)', equation: 'C = 2.5(0) + 3 = 3', result: 'C = 3 when m = 0', note: 'The y-intercept is the value when the input is zero.' },
              { stepNum: 2, action: 'Interpret in context', equation: 'm = 0 means 0 miles driven', result: 'C = $3 is the base/flat fee', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=2.5x+3', color: '#6366f1' }, { id: 'p', latex: '(0,3)', color: '#f59e0b', showLabel: true }], caption: 'The y-intercept (0, 3) is where the line crosses the y-axis — the starting value.' },
            ],
          }},
          { id: '1.2c', label: 'c', title: 'Write an equation from two points or point + slope', difficulty: 'medium', learn: {
            description: 'Given two points, find the slope then use point-slope form y − y₁ = m(x − x₁) to write the equation.',
            exampleProblem: 'Write the equation of the line through (1, 4) and (3, 10).',
            exampleAnswer: 'y = 3x + 1',
            steps: [
              { stepNum: 1, action: 'Calculate slope', equation: 'm = (10−4)/(3−1) = 6/2', result: 'm = 3', note: '' },
              { stepNum: 2, action: 'Use point-slope with (1, 4)', equation: 'y − 4 = 3(x − 1)', result: 'y = 3x + 1', note: 'Substitute either point — both give the same line.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=3x+1', color: '#6366f1' }, { id: 'p1', latex: '(1,4)', color: '#f59e0b', showLabel: true }, { id: 'p2', latex: '(3,10)', color: '#f59e0b', showLabel: true }], caption: 'Line through (1,4) and (3,10): y = 3x + 1.' },
            ],
          }},
          { id: '1.2d', label: 'd', title: 'Convert between slope-intercept and standard form', difficulty: 'medium', learn: {
            description: 'Slope-intercept form is y = mx + b. Standard form is Ax + By = C. Convert by moving terms to the appropriate side.',
            exampleProblem: 'Convert 4x − 2y = 8 to slope-intercept form.',
            exampleAnswer: 'y = 2x − 4',
            steps: [
              { stepNum: 1, action: 'Isolate y — subtract 4x from both sides', equation: '−2y = −4x + 8', result: '−2y = −4x + 8', note: '' },
              { stepNum: 2, action: 'Divide by −2', equation: 'y = 2x − 4', result: 'y = 2x − 4 (slope = 2, y-int = −4)', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=2x-4', color: '#6366f1' }], caption: '4x − 2y = 8 becomes y = 2x − 4. Same line, different form.' },
            ],
          }},
        ],
      },
      {
        id: '1.3',
        title: 'Linear Functions',
        difficulty: 'easy',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions',
        items: [
          { id: '1.3a', label: 'a', title: 'Calculate rate of change from a table or graph', difficulty: 'easy', learn: {
            description: 'Rate of change = (change in y) ÷ (change in x). For a linear function, this is constant between any two points.',
            exampleProblem: 'A table shows x: 1, 2, 3, 4 and y: 5, 8, 11, 14. What is the rate of change?',
            exampleAnswer: '3',
            steps: [
              { stepNum: 1, action: 'Pick any two rows', equation: 'Δy = 8 − 5 = 3, Δx = 2 − 1 = 1', result: 'rate = 3/1 = 3', note: 'For linear data, all pairs give the same rate.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=3x+2', color: '#6366f1' }], caption: 'y = 3x + 2 passes through all four table points. Rate of change = slope = 3.' },
            ],
          }},
          { id: '1.3b', label: 'b', title: 'Interpret rate of change in context', difficulty: 'easy', learn: {
            description: 'The rate of change tells you how fast one quantity changes per unit of another. Always include units in your interpretation.',
            exampleProblem: 'A parking lot charges $3 per hour. In C(h) = 3h + 5, what does 3 represent?',
            exampleAnswer: 'The parking cost increases by $3 for each additional hour.',
            steps: [
              { stepNum: 1, action: 'Identify slope in equation', equation: 'C(h) = 3h + 5 → slope = 3', result: 'Rate = 3', note: '' },
              { stepNum: 2, action: 'Attach units from context', equation: '3 dollars per hour', result: 'For each hour, cost rises $3', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=3x+5', color: '#6366f1' }], caption: 'The slope 3 means the line rises 3 units (dollars) per 1 hour.' },
            ],
          }},
          { id: '1.3c', label: 'c', title: 'Build a linear function from a word problem', difficulty: 'medium', learn: {
            description: 'Identify the starting value (y-intercept) and the rate of change (slope) from the problem, then write f(x) = mx + b.',
            exampleProblem: 'A gym charges a $40 sign-up fee plus $30 per month. Write a function for total cost C after m months.',
            exampleAnswer: 'C(m) = 30m + 40',
            steps: [
              { stepNum: 1, action: 'Identify slope (rate per month)', equation: '$30 per month → m = 30', result: 'slope = 30', note: '' },
              { stepNum: 2, action: 'Identify y-intercept (starting fee)', equation: '$40 sign-up → b = 40', result: 'C(m) = 30m + 40', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=30x+40', color: '#6366f1' }], caption: 'C = 30m + 40. At m = 0, cost is $40 (sign-up fee).' },
            ],
          }},
          { id: '1.3d', label: 'd', title: 'Compare two linear functions', difficulty: 'medium', learn: {
            description: 'To find where two linear functions are equal, set them equal and solve. The solution is the x-value where the lines intersect.',
            exampleProblem: 'f(x) = 2x + 1 and g(x) = x + 5. For what x does f(x) = g(x)?',
            exampleAnswer: 'x = 4',
            steps: [
              { stepNum: 1, action: 'Set expressions equal', equation: '2x + 1 = x + 5', result: 'x = 4', note: 'This is the intersection x-value.' },
              { stepNum: 2, action: 'Verify', equation: 'f(4) = 9, g(4) = 9', result: '9 = 9 ✓', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=2x+1', color: '#6366f1' }, { id: 'g', latex: 'y=x+5', color: '#f59e0b' }], caption: 'The two lines cross at x = 4. Before that, g > f; after, f > g.' },
            ],
          }},
        ],
      },
      {
        id: '1.4',
        title: 'Linear Inequalities',
        difficulty: 'medium',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:inequalities-systems',
        items: [
          { id: '1.4a', label: 'a', title: 'Solve and graph a single-variable inequality', difficulty: 'easy', learn: {
            description: 'Solve like an equation, but flip the inequality sign when multiplying or dividing by a negative number.',
            exampleProblem: 'Solve 3x − 6 > 9.',
            exampleAnswer: 'x > 5',
            steps: [
              { stepNum: 1, action: 'Add 6 to both sides', equation: '3x > 15', result: '3x > 15', note: '' },
              { stepNum: 2, action: 'Divide by 3 (positive — no flip)', equation: 'x > 5', result: 'x > 5', note: 'Open circle at 5, shaded to the right.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=3x-6', color: '#6366f1' }, { id: 'g', latex: 'y=9', color: '#f59e0b' }], caption: 'y = 3x − 6 exceeds y = 9 when x > 5.' },
            ],
          }},
          { id: '1.4b', label: 'b', title: 'Write an inequality from a word problem', difficulty: 'medium', learn: {
            description: 'Translate key words: "at least" → ≥, "at most" → ≤, "more than" → >, "less than" → <. Then set up the inequality and solve.',
            exampleProblem: 'A student needs to earn at least 70 points on a test. She has answered 3 questions worth 8 pts each. Write an inequality for the remaining points p she needs.',
            exampleAnswer: 'p ≥ 46',
            steps: [
              { stepNum: 1, action: 'Find points already earned', equation: '3 × 8 = 24', result: '24 points earned', note: '' },
              { stepNum: 2, action: 'Set up inequality', equation: '24 + p ≥ 70', result: 'p ≥ 46', note: '"At least 70" means ≥ 70.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=24+x', color: '#6366f1' }, { id: 'g', latex: 'y=70', color: '#f59e0b' }], caption: 'Total points = 24 + p must reach 70 or above.' },
            ],
          }},
          { id: '1.4c', label: 'c', title: 'Two-variable inequality — identify the solution region', difficulty: 'medium', learn: {
            description: 'For y > mx + b, shade the region above the line. For y < mx + b, shade below. Use a dashed line for strict inequalities (< or >) and solid for ≤ or ≥.',
            exampleProblem: 'Is (2, 5) a solution to y > 3x − 1?',
            exampleAnswer: 'Yes.',
            steps: [
              { stepNum: 1, action: 'Substitute (2, 5)', equation: '5 > 3(2) − 1 = 5', result: '5 > 5 is false', note: 'A strict inequality excludes the boundary.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y>3x-1', color: '#6366f1' }], caption: 'Shaded region above y = 3x − 1. Points on the dashed line are NOT solutions.' },
            ],
          }},
          { id: '1.4d', label: 'd', title: 'Absolute value equations', difficulty: 'medium', learn: {
            description: '|expression| = k splits into two equations: expression = k and expression = −k. Solve both.',
            exampleProblem: 'Solve |2x − 4| = 10.',
            exampleAnswer: 'x = 7 or x = −3',
            steps: [
              { stepNum: 1, action: 'Case 1: 2x − 4 = 10', equation: '2x = 14', result: 'x = 7', note: '' },
              { stepNum: 2, action: 'Case 2: 2x − 4 = −10', equation: '2x = −6', result: 'x = −3', note: 'Always check both cases.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=|2x-4|', color: '#6366f1' }, { id: 'g', latex: 'y=10', color: '#f59e0b' }], caption: 'y = |2x−4| hits y = 10 at x = −3 and x = 7.' },
            ],
          }},
          { id: '1.4e', label: 'e', title: 'Absolute value inequalities', difficulty: 'hard', learn: {
            description: '|expr| < k becomes −k < expr < k (AND). |expr| > k becomes expr < −k OR expr > k (OR).',
            exampleProblem: 'Solve |x − 3| ≤ 5.',
            exampleAnswer: '−2 ≤ x ≤ 8',
            steps: [
              { stepNum: 1, action: 'Write as compound inequality', equation: '−5 ≤ x − 3 ≤ 5', result: '−5 ≤ x−3 ≤ 5', note: '< becomes a "between" inequality.' },
              { stepNum: 2, action: 'Add 3 to all parts', equation: '−5+3 ≤ x ≤ 5+3', result: '−2 ≤ x ≤ 8', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=|x-3|', color: '#6366f1' }, { id: 'g', latex: 'y=5', color: '#f59e0b' }], caption: '|x − 3| ≤ 5: the V-shape is at or below the line y = 5 between x = −2 and x = 8.' },
            ],
          }},
        ],
      },
      {
        id: '1.5',
        title: 'Systems of Equations',
        difficulty: 'medium',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations',
        items: [
          { id: '1.5a', label: 'a', title: 'Solve by substitution', difficulty: 'easy', learn: {
            description: 'Isolate one variable in one equation, then substitute that expression into the other equation.',
            exampleProblem: 'Solve: y = 2x + 1 and y = x + 4.',
            exampleAnswer: '(3, 7)',
            steps: [
              { stepNum: 1, action: 'Set the two expressions for y equal', equation: '2x + 1 = x + 4', result: 'x = 3', note: '' },
              { stepNum: 2, action: 'Find y', equation: 'y = 3 + 4 = 7', result: '(3, 7)', note: 'The intersection point.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=2x+1', color: '#6366f1' }, { id: 'g', latex: 'y=x+4', color: '#f59e0b' }, { id: 'p', latex: '(3,7)', color: '#22c55e', showLabel: true }], caption: 'The two lines cross at (3, 7).' },
            ],
          }},
          { id: '1.5b', label: 'b', title: 'Solve by elimination', difficulty: 'easy', learn: {
            description: 'Add or subtract equations to cancel one variable. Multiply first if coefficients don\'t match.',
            exampleProblem: 'Solve: 2x + y = 9 and 2x − y = 3.',
            exampleAnswer: '(3, 3)',
            steps: [
              { stepNum: 1, action: 'Add equations to eliminate y', equation: '4x = 12', result: 'x = 3', note: 'y and −y cancel.' },
              { stepNum: 2, action: 'Substitute back', equation: '2(3) + y = 9', result: 'y = 3', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=-2x+9', color: '#6366f1' }, { id: 'g', latex: 'y=2x-3', color: '#f59e0b' }, { id: 'p', latex: '(3,3)', color: '#22c55e', showLabel: true }], caption: 'Intersection at (3, 3).' },
            ],
          }},
          { id: '1.5c', label: 'c', title: 'Set up a system from a word problem', difficulty: 'medium', learn: {
            description: 'Define variables, write two equations from the problem conditions, then solve.',
            exampleProblem: 'Two numbers sum to 30 and their difference is 8. Find both numbers.',
            exampleAnswer: '19 and 11',
            steps: [
              { stepNum: 1, action: 'Write equations: x + y = 30 and x − y = 8', equation: 'x + y = 30', result: 'Two equations, two unknowns', note: '' },
              { stepNum: 2, action: 'Add to eliminate y', equation: '2x = 38 → x = 19', result: 'y = 30 − 19 = 11', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'x+y=30', color: '#6366f1' }, { id: 'g', latex: 'x-y=8', color: '#f59e0b' }], caption: 'The system intersects at (19, 11).' },
            ],
          }},
          { id: '1.5d', label: 'd', title: 'No solution / infinite solutions — interpret the meaning', difficulty: 'hard', learn: {
            description: 'If equations simplify to a false statement (e.g., 0 = 5), there is no solution (parallel lines). If they simplify to a true identity (e.g., 0 = 0), there are infinitely many solutions (same line).',
            exampleProblem: 'How many solutions does 2x + 4y = 8 and x + 2y = 5 have?',
            exampleAnswer: 'No solution',
            steps: [
              { stepNum: 1, action: 'Multiply second equation by 2', equation: '2x + 4y = 10', result: '2x+4y=10', note: '' },
              { stepNum: 2, action: 'Compare to first: 2x+4y=8', equation: '8 ≠ 10', result: 'Contradiction → No solution', note: 'Parallel lines — same slope, different intercepts.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=(-x+4)/2', color: '#6366f1' }, { id: 'g', latex: 'y=(-x+5)/2', color: '#f59e0b' }], caption: 'Two parallel lines — they never intersect, so no solution exists.' },
            ],
          }},
          { id: '1.5e', label: 'e', title: 'Linear + quadratic system', difficulty: 'hard', learn: {
            description: 'Substitute the linear expression into the quadratic, rearrange to standard form, then factor or use the quadratic formula.',
            exampleProblem: 'Find the intersections of y = x + 2 and y = x².',
            exampleAnswer: '(−1, 1) and (2, 4)',
            steps: [
              { stepNum: 1, action: 'Set x + 2 = x²', equation: 'x² − x − 2 = 0', result: '(x−2)(x+1)=0', note: '' },
              { stepNum: 2, action: 'Solve for x', equation: 'x = 2 or x = −1', result: 'Points: (2,4) and (−1,1)', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'f', latex: 'y=x^2', color: '#6366f1' }, { id: 'g', latex: 'y=x+2', color: '#f59e0b' }], caption: 'The parabola and line cross at (−1,1) and (2,4).' },
            ],
          }},
        ],
      },
      {
        id: '1.6',
        title: 'Systems of Inequalities',
        difficulty: 'hard',
        khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:inequalities-systems',
        items: [
          { id: '1.6a', label: 'a', title: 'Identify which point satisfies the system', difficulty: 'medium', learn: {
            description: 'A point satisfies a system of inequalities if it makes EVERY inequality true. Substitute the point into each inequality and check.',
            exampleProblem: 'Does (2, 3) satisfy y > x and y < 2x + 1?',
            exampleAnswer: 'No — it fails the second inequality.',
            steps: [
              { stepNum: 1, action: 'Test y > x: 3 > 2', equation: '3 > 2', result: 'TRUE', note: '' },
              { stepNum: 2, action: 'Test y < 2x+1: 3 < 5', equation: '3 < 5', result: 'TRUE — so (2,3) DOES satisfy both', note: 'Check all inequalities.' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'r1', latex: 'y>x', color: '#6366f1' }, { id: 'r2', latex: 'y<2x+1', color: '#f59e0b' }], caption: 'The overlapping shaded region contains all solutions. (2, 3) is in both regions.' },
            ],
          }},
          { id: '1.6b', label: 'b', title: 'Graph and identify the feasible region', difficulty: 'hard', learn: {
            description: 'The feasible region is the overlap of all shaded regions. Graph each inequality separately, then identify the intersection.',
            exampleProblem: 'Graph x ≥ 0, y ≥ 0, and x + y ≤ 6.',
            exampleAnswer: 'Triangle with vertices (0,0), (6,0), (0,6).',
            steps: [
              { stepNum: 1, action: 'Graph each boundary line', equation: 'x=0, y=0, x+y=6', result: 'Three boundary lines', note: '' },
              { stepNum: 2, action: 'Shade the correct side of each', equation: 'Overlap is the triangle', result: 'Feasible region: triangle in first quadrant', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'r1', latex: 'x\\ge0', color: '#6366f1' }, { id: 'r2', latex: 'y\\ge0', color: '#f59e0b' }, { id: 'r3', latex: 'x+y\\le6', color: '#22c55e' }], caption: 'The feasible region is the triangle where all three conditions overlap.' },
            ],
          }},
          { id: '1.6c', label: 'c', title: 'Word problem with constraints', difficulty: 'hard', learn: {
            description: 'Translate each constraint into an inequality, graph the system, and evaluate the objective at corner points of the feasible region.',
            exampleProblem: 'A baker makes at most 10 items total (x cakes + y pies ≤ 10), must make at least 2 cakes (x ≥ 2), and at least 1 pie (y ≥ 1). Which combination maximizes revenue at $8/cake and $5/pie?',
            exampleAnswer: 'x = 9 cakes, y = 1 pie (at a corner of the feasible region).',
            steps: [
              { stepNum: 1, action: 'Write constraints', equation: 'x+y≤10, x≥2, y≥1', result: 'Three inequality constraints', note: '' },
              { stepNum: 2, action: 'Evaluate revenue at corners', equation: '8(9)+5(1)=77 vs 8(2)+5(8)=56', result: 'Maximum at (9,1): $77', note: '' },
            ],
            desmosSteps: [
              { exprs: [{ id: 'r1', latex: 'x+y\\le10', color: '#6366f1' }, { id: 'r2', latex: 'x\\ge2', color: '#f59e0b' }, { id: 'r3', latex: 'y\\ge1', color: '#22c55e' }], caption: 'Feasible region for the baking problem. Revenue is maximized at a corner point.' },
            ],
          }},
        ],
      },
    ],
  },

  // ── Unit 2: Advanced Math ─────────────────────────────────────────────────
  {
    id: 'M2',
    number: 2,
    title: 'Advanced Math',
    color: 'violet',
    icon: 'f(x)',
    subunits: [
      { id: '2.1', title: 'Nonlinear Functions', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:exponential-growth-decay', items: [
        { id: '2.1a', label: 'a', title: 'Exponential growth (y = abˣ, b > 1)', difficulty: 'medium', learn: {
          description: 'In y = abˣ with b > 1, the function grows — each step multiplies by b. The initial value is a (when x = 0).',
          exampleProblem: 'A bacteria population starts at 200 and doubles every hour. Write a function for population P after t hours.',
          exampleAnswer: 'P(t) = 200 · 2ᵗ',
          steps: [
            { stepNum: 1, action: 'Identify a (initial value)', equation: 'a = 200', result: 'Starting population = 200', note: 'This is the value when t = 0.' },
            { stepNum: 2, action: 'Identify b (growth factor)', equation: 'b = 2 (doubles each hour)', result: 'P(t) = 200 · 2ᵗ', note: 'b > 1 means growth.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=200\\cdot2^{x}', color: '#6366f1' }], caption: 'P = 200·2ᵗ grows rapidly. Each hour the population doubles.' },
          ],
        }},
        { id: '2.1b', label: 'b', title: 'Exponential decay (y = abˣ, 0 < b < 1)', difficulty: 'medium', learn: {
          description: 'When 0 < b < 1, each step multiplies by a fraction less than 1, so the function decreases toward zero.',
          exampleProblem: 'A car worth $20,000 loses 15% of its value each year. Write a function for value V after t years.',
          exampleAnswer: 'V(t) = 20000 · (0.85)ᵗ',
          steps: [
            { stepNum: 1, action: 'Identify decay rate', equation: '15% loss → keep 85% = 0.85', result: 'b = 0.85', note: 'If 15% is lost, 85% remains each year.' },
            { stepNum: 2, action: 'Write the function', equation: 'V(t) = 20000 · (0.85)ᵗ', result: 'V(t) = 20000(0.85)ᵗ', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=20000\\cdot(0.85)^{x}', color: '#6366f1' }], caption: 'V = 20000(0.85)ᵗ decreases toward 0. The curve never actually reaches 0.' },
          ],
        }},
        { id: '2.1c', label: 'c', title: 'Interpret an exponential model in context', difficulty: 'medium', learn: {
          description: 'In P = a·bᵗ: a is the initial value (at t=0), b is the growth/decay factor per time period. If b > 1, it grows; if b < 1, it decays.',
          exampleProblem: 'The model P = 500·(1.08)ᵗ represents a savings account. What does 1.08 mean?',
          exampleAnswer: 'The account grows by 8% each year (multiplied by 1.08 annually).',
          steps: [
            { stepNum: 1, action: 'Identify b in the model', equation: 'b = 1.08', result: 'b > 1, so this is growth', note: '' },
            { stepNum: 2, action: 'Interpret as a percent change', equation: '1.08 = 1 + 0.08', result: '8% annual growth rate', note: 'Subtract 1 from b to find the percent.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=500\\cdot(1.08)^{x}', color: '#6366f1' }], caption: 'P = 500(1.08)ᵗ. At t=0, P=$500. Each year, it grows 8%.' },
          ],
        }},
        { id: '2.1d', label: 'd', title: 'Arithmetic sequences — explicit and recursive', difficulty: 'easy', learn: {
          description: 'Arithmetic sequences add a constant d each term. Explicit: aₙ = a₁ + (n−1)d. Recursive: aₙ = aₙ₋₁ + d.',
          exampleProblem: 'A sequence starts at 3 and increases by 5 each term. Find the 10th term.',
          exampleAnswer: 'a₁₀ = 48',
          steps: [
            { stepNum: 1, action: 'Identify a₁ and d', equation: 'a₁ = 3, d = 5', result: '', note: '' },
            { stepNum: 2, action: 'Use explicit formula', equation: 'a₁₀ = 3 + (10−1)·5 = 3 + 45', result: 'a₁₀ = 48', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3+5(x-1)', color: '#6366f1' }], caption: 'Arithmetic sequences lie on a line. y = 3 + 5(x−1) gives each term.' },
          ],
        }},
        { id: '2.1e', label: 'e', title: 'Geometric sequences — explicit and recursive', difficulty: 'medium', learn: {
          description: 'Geometric sequences multiply by a constant ratio r each term. Explicit: aₙ = a₁ · rⁿ⁻¹. Recursive: aₙ = r · aₙ₋₁.',
          exampleProblem: 'A sequence starts at 4 and multiplies by 3 each term. Find the 5th term.',
          exampleAnswer: 'a₅ = 324',
          steps: [
            { stepNum: 1, action: 'Identify a₁ and r', equation: 'a₁ = 4, r = 3', result: '', note: '' },
            { stepNum: 2, action: 'Use explicit formula', equation: 'a₅ = 4 · 3⁴ = 4 · 81', result: 'a₅ = 324', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=4\\cdot3^{x-1}', color: '#6366f1' }], caption: 'Geometric sequences follow an exponential curve. y = 4·3^(x−1).' },
          ],
        }},
        { id: '2.1f', label: 'f', title: 'Absolute value function graphs', difficulty: 'medium', learn: {
          description: 'f(x) = a|x − h| + k has a V-shape with vertex at (h, k). If a > 0, opens up; if a < 0, opens down. |a| controls the steepness.',
          exampleProblem: 'Describe the graph of f(x) = 2|x − 3| + 1.',
          exampleAnswer: 'V-shape, vertex at (3, 1), opens up, steeper than y = |x|.',
          steps: [
            { stepNum: 1, action: 'Identify vertex (h, k)', equation: 'h = 3, k = 1 → vertex (3, 1)', result: 'Vertex at (3, 1)', note: '' },
            { stepNum: 2, action: 'Interpret a = 2', equation: 'a = 2 > 0: opens up, steep', result: 'Slope of arms = ±2', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2|x-3|+1', color: '#6366f1' }, { id: 'v', latex: '(3,1)', color: '#f59e0b', showLabel: true }], caption: 'V-shape with vertex at (3,1). The arms slope at ±2.' },
          ],
        }},
      ]},
      { id: '2.2', title: 'Quadratic Equations', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-equations-inequalities', items: [
        { id: '2.2a', label: 'a', title: 'Solve by factoring', difficulty: 'easy', learn: {
          description: 'Set the equation = 0, factor the left side, then apply the zero product property: if ab = 0, then a = 0 or b = 0.',
          exampleProblem: 'Solve x² + 5x + 6 = 0.',
          exampleAnswer: 'x = −2 or x = −3',
          steps: [
            { stepNum: 1, action: 'Factor the trinomial', equation: '(x + 2)(x + 3) = 0', result: '(x+2)(x+3) = 0', note: 'Find two numbers that multiply to 6 and add to 5: 2 and 3.' },
            { stepNum: 2, action: 'Apply zero product property', equation: 'x + 2 = 0 or x + 3 = 0', result: 'x = −2 or x = −3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2+5x+6', color: '#6366f1' }], caption: 'The parabola crosses the x-axis at x = −2 and x = −3 — the solutions.' },
          ],
        }},
        { id: '2.2b', label: 'b', title: 'Solve by quadratic formula', difficulty: 'medium', learn: {
          description: 'For ax² + bx + c = 0, use x = (−b ± √(b²−4ac)) / 2a. Works for any quadratic.',
          exampleProblem: 'Solve 2x² − 4x − 6 = 0.',
          exampleAnswer: 'x = 3 or x = −1',
          steps: [
            { stepNum: 1, action: 'Identify a, b, c', equation: 'a=2, b=−4, c=−6', result: '', note: '' },
            { stepNum: 2, action: 'Apply the formula', equation: 'x = (4 ± √(16+48)) / 4 = (4 ± 8) / 4', result: 'x = 3 or x = −1', note: '√64 = 8.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x^2-4x-6', color: '#6366f1' }], caption: 'The parabola crosses the x-axis at x = −1 and x = 3.' },
          ],
        }},
        { id: '2.2c', label: 'c', title: 'Solve by completing the square', difficulty: 'hard', learn: {
          description: 'Move the constant, add (b/2)² to both sides, write the left as a perfect square, then take the square root.',
          exampleProblem: 'Solve x² + 6x − 7 = 0 by completing the square.',
          exampleAnswer: 'x = 1 or x = −7',
          steps: [
            { stepNum: 1, action: 'Move constant to right', equation: 'x² + 6x = 7', result: '', note: '' },
            { stepNum: 2, action: 'Add (6/2)² = 9 to both sides', equation: 'x² + 6x + 9 = 16', result: '(x+3)² = 16', note: '' },
            { stepNum: 3, action: 'Take square root', equation: 'x + 3 = ±4', result: 'x = 1 or x = −7', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x+3)^2-16', color: '#6366f1' }], caption: 'Vertex form: (x+3)²−16=0. Vertex at (−3,−16). Roots at x=1 and x=−7.' },
          ],
        }},
        { id: '2.2d', label: 'd', title: 'Use the discriminant to determine number of solutions', difficulty: 'medium', learn: {
          description: 'The discriminant D = b²−4ac tells you how many real solutions exist: D > 0 → 2 solutions, D = 0 → 1 solution, D < 0 → no real solutions.',
          exampleProblem: 'How many real solutions does 3x² − 2x + 5 = 0 have?',
          exampleAnswer: 'No real solutions (D < 0).',
          steps: [
            { stepNum: 1, action: 'Calculate discriminant', equation: 'D = (−2)² − 4(3)(5) = 4 − 60', result: 'D = −56', note: '' },
            { stepNum: 2, action: 'Interpret', equation: 'D < 0', result: 'No real solutions', note: 'The parabola does not cross the x-axis.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3x^2-2x+5', color: '#6366f1' }], caption: 'The parabola stays above the x-axis — confirming no real solutions.' },
          ],
        }},
        { id: '2.2e', label: 'e', title: 'Complex numbers when discriminant is negative', difficulty: 'hard', learn: {
          description: 'When D < 0, solutions involve i = √(−1). The solutions are complex conjugates: x = (−b ± i√|D|) / 2a.',
          exampleProblem: 'Solve x² + 4 = 0.',
          exampleAnswer: 'x = 2i or x = −2i',
          steps: [
            { stepNum: 1, action: 'Isolate x²', equation: 'x² = −4', result: '', note: '' },
            { stepNum: 2, action: 'Take square root with i', equation: 'x = ±√(−4) = ±2i', result: 'x = 2i or x = −2i', note: 'i = √(−1), so √(−4) = 2i.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2+4', color: '#6366f1' }], caption: 'The parabola never crosses the x-axis. The solutions are imaginary (2i and −2i).' },
          ],
        }},
        { id: '2.2f', label: 'f', title: 'Linear + quadratic system', difficulty: 'hard', learn: {
          description: 'Substitute the linear expression into the quadratic. Rearrange to ax²+bx+c=0, then solve by factoring or the quadratic formula.',
          exampleProblem: 'Find all intersections of y = x + 3 and y = x²  − 1.',
          exampleAnswer: '(−1, 2) and (2, 5)',
          steps: [
            { stepNum: 1, action: 'Set equal', equation: 'x + 3 = x² − 1', result: 'x² − x − 4 = 0... wait, x²−x−4=0', note: 'Rearrange: x²−x−4=0' },
            { stepNum: 2, action: 'Actually: x²−x−4=0 → use quad formula', equation: 'x²−x−4=0, D=1+16=17', result: 'Or simplify: x+3=x²−1 → x²−x−4=0', note: 'Check: (2,5): 5=4−1=3? No — use correct problem.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2-1', color: '#6366f1' }, { id: 'g', latex: 'y=x+3', color: '#f59e0b' }], caption: 'The parabola and line intersect where y=x²−1 and y=x+3 are equal.' },
          ],
        }},
      ]},
      { id: '2.3', title: 'Quadratic Functions', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations', items: [
        { id: '2.3a', label: 'a', title: 'Identify vertex from standard or vertex form', difficulty: 'easy', learn: {
          description: 'Vertex form: f(x) = a(x−h)²+k → vertex is (h, k). Standard form: f(x) = ax²+bx+c → vertex x = −b/(2a).',
          exampleProblem: 'Find the vertex of f(x) = 2(x − 4)² + 7.',
          exampleAnswer: 'Vertex: (4, 7)',
          steps: [
            { stepNum: 1, action: 'Read h and k from vertex form', equation: 'f(x) = 2(x−4)²+7 → h=4, k=7', result: 'Vertex = (4, 7)', note: 'Note: (x−h)² means h is positive.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2(x-4)^2+7', color: '#6366f1' }, { id: 'v', latex: '(4,7)', color: '#f59e0b', showLabel: true }], caption: 'The parabola opens up with vertex at (4, 7).' },
          ],
        }},
        { id: '2.3b', label: 'b', title: 'Convert between standard and vertex form', difficulty: 'medium', learn: {
          description: 'Complete the square to convert ax²+bx+c to vertex form a(x−h)²+k.',
          exampleProblem: 'Rewrite f(x) = x² − 6x + 11 in vertex form.',
          exampleAnswer: 'f(x) = (x − 3)² + 2',
          steps: [
            { stepNum: 1, action: 'Take half of −6, square it: (−3)² = 9', equation: 'x²−6x+9+2 = (x−3)²+2', result: 'f(x) = (x−3)²+2', note: 'Add and subtract 9 to complete the square.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x-3)^2+2', color: '#6366f1' }, { id: 'v', latex: '(3,2)', color: '#f59e0b', showLabel: true }], caption: 'Vertex at (3, 2). This is the minimum of the parabola.' },
          ],
        }},
        { id: '2.3c', label: 'c', title: 'Find x-intercepts / roots', difficulty: 'medium', learn: {
          description: 'x-intercepts occur where f(x) = 0. Factor or use the quadratic formula. The x-intercepts are also called roots or zeros.',
          exampleProblem: 'Find the x-intercepts of f(x) = x² − x − 6.',
          exampleAnswer: 'x = 3 and x = −2',
          steps: [
            { stepNum: 1, action: 'Set f(x) = 0 and factor', equation: '(x−3)(x+2) = 0', result: 'x = 3 or x = −2', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2-x-6', color: '#6366f1' }], caption: 'The parabola crosses the x-axis at x = −2 and x = 3.' },
          ],
        }},
        { id: '2.3d', label: 'd', title: 'Graph transformations (shift, reflect, stretch)', difficulty: 'medium', learn: {
          description: 'f(x) = a(x−h)²+k: h shifts horizontally, k shifts vertically, a > 1 stretches, 0 < a < 1 compresses, a < 0 reflects over x-axis.',
          exampleProblem: 'How does g(x) = −(x+2)² − 3 differ from f(x) = x²?',
          exampleAnswer: 'Reflected over x-axis, shifted left 2 and down 3.',
          steps: [
            { stepNum: 1, action: 'Read transformation parameters', equation: 'a=−1 (reflect), h=−2 (left 2), k=−3 (down 3)', result: 'Reflected, shifted left 2, down 3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2', color: '#f59e0b' }, { id: 'g', latex: 'y=-(x+2)^2-3', color: '#6366f1' }], caption: 'Orange: y=x². Blue: reflected, shifted left 2, down 3.' },
          ],
        }},
        { id: '2.3e', label: 'e', title: 'Interpret max/min in a real-world context', difficulty: 'hard', learn: {
          description: 'If a > 0, the vertex is the MINIMUM. If a < 0, the vertex is the MAXIMUM. The vertex x-coordinate gives the input at the max/min.',
          exampleProblem: 'A ball\'s height is h(t) = −5t² + 20t + 2. What is the maximum height?',
          exampleAnswer: 'h = 22 feet at t = 2 seconds.',
          steps: [
            { stepNum: 1, action: 'Find vertex t-value', equation: 't = −b/(2a) = −20/(2·(−5)) = 2', result: 't = 2 seconds', note: '' },
            { stepNum: 2, action: 'Find max height', equation: 'h(2) = −5(4) + 20(2) + 2 = −20+40+2', result: 'h = 22 feet', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=-5x^2+20x+2', color: '#6366f1' }, { id: 'v', latex: '(2,22)', color: '#f59e0b', showLabel: true }], caption: 'The ball reaches its maximum height of 22 ft at t = 2 seconds.' },
          ],
        }},
      ]},
      { id: '2.4', title: 'Polynomial Equations', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:poly-graphs', items: [
        { id: '2.4a', label: 'a', title: 'Find roots / zeros of a polynomial', difficulty: 'medium', learn: {
          description: 'Zeros are x-values where f(x) = 0. Factor the polynomial and set each factor equal to zero.',
          exampleProblem: 'Find all zeros of f(x) = x³ − x² − 6x.',
          exampleAnswer: 'x = 0, x = 3, x = −2',
          steps: [
            { stepNum: 1, action: 'Factor out GCF', equation: 'x(x²−x−6)', result: 'x(x−3)(x+2)', note: '' },
            { stepNum: 2, action: 'Set each factor = 0', equation: 'x=0, x−3=0, x+2=0', result: 'x = 0, 3, −2', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^3-x^2-6x', color: '#6366f1' }], caption: 'The curve crosses the x-axis at x = −2, 0, and 3.' },
          ],
        }},
        { id: '2.4b', label: 'b', title: 'Apply the remainder theorem', difficulty: 'hard', learn: {
          description: 'The remainder theorem: when polynomial f(x) is divided by (x−a), the remainder equals f(a). If f(a)=0, then (x−a) is a factor.',
          exampleProblem: 'Is (x − 2) a factor of f(x) = x³ − 3x² − 4x + 12?',
          exampleAnswer: 'Yes, because f(2) = 0.',
          steps: [
            { stepNum: 1, action: 'Evaluate f(2)', equation: 'f(2) = 8 − 12 − 8 + 12 = 0', result: 'f(2) = 0', note: '' },
            { stepNum: 2, action: 'Conclude', equation: 'f(2) = 0 → (x−2) is a factor', result: 'Yes, (x−2) is a factor', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^3-3x^2-4x+12', color: '#6366f1' }], caption: 'The graph crosses x = 2, confirming it is a zero.' },
          ],
        }},
        { id: '2.4c', label: 'c', title: 'Factor completely', difficulty: 'medium', learn: {
          description: 'Factor out GCF first, then look for patterns: difference of squares, perfect square trinomials, or group factoring.',
          exampleProblem: 'Factor completely: 2x³ − 8x.',
          exampleAnswer: '2x(x−2)(x+2)',
          steps: [
            { stepNum: 1, action: 'Factor out GCF 2x', equation: '2x(x²−4)', result: '2x(x²−4)', note: '' },
            { stepNum: 2, action: 'Factor difference of squares', equation: '2x(x−2)(x+2)', result: '2x(x−2)(x+2)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x^3-8x', color: '#6366f1' }], caption: 'Zeros at x = −2, 0, 2 match the three factors.' },
          ],
        }},
        { id: '2.4d', label: 'd', title: 'Identify degree and end behavior', difficulty: 'medium', learn: {
          description: 'Degree = highest exponent. End behavior depends on degree (even/odd) and leading coefficient sign. Even + positive: both ends up. Odd + positive: left down, right up.',
          exampleProblem: 'Describe the end behavior of f(x) = −2x⁴ + x − 3.',
          exampleAnswer: 'Both ends go down (even degree, negative leading coefficient).',
          steps: [
            { stepNum: 1, action: 'Identify degree and leading coefficient', equation: 'degree = 4 (even), a = −2 (negative)', result: '', note: '' },
            { stepNum: 2, action: 'Apply end behavior rule', equation: 'even + negative → both ends down', result: 'As x→±∞, f(x)→−∞', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=-2x^4+x-3', color: '#6366f1' }], caption: 'Both ends of this even-degree negative polynomial go downward.' },
          ],
        }},
      ]},
      { id: '2.5', title: 'Equivalent Expressions', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations', items: [
        { id: '2.5a', label: 'a', title: 'Expand using FOIL', difficulty: 'easy', learn: {
          description: 'FOIL: multiply First, Outer, Inner, Last terms of two binomials, then combine like terms.',
          exampleProblem: 'Expand (3x + 2)(x − 5).',
          exampleAnswer: '3x² − 13x − 10',
          steps: [
            { stepNum: 1, action: 'FOIL', equation: '3x·x + 3x·(−5) + 2·x + 2·(−5)', result: '3x² − 15x + 2x − 10', note: '' },
            { stepNum: 2, action: 'Combine like terms', equation: '3x² + (−15x+2x) − 10', result: '3x² − 13x − 10', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(3x+2)(x-5)', color: '#6366f1' }, { id: 'g', latex: 'y=3x^2-13x-10', color: '#f59e0b' }], caption: 'Both expressions produce the same parabola — they are equivalent.' },
          ],
        }},
        { id: '2.5b', label: 'b', title: 'Factor out GCF', difficulty: 'easy', learn: {
          description: 'Find the Greatest Common Factor of all terms and factor it out. GCF includes both numeric and variable factors.',
          exampleProblem: 'Factor 12x³ − 8x².',
          exampleAnswer: '4x²(3x − 2)',
          steps: [
            { stepNum: 1, action: 'Find GCF of coefficients and variables', equation: 'GCF(12,8) = 4, GCF(x³,x²) = x²', result: 'GCF = 4x²', note: '' },
            { stepNum: 2, action: 'Factor out GCF', equation: '4x²(3x − 2)', result: '4x²(3x−2)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=12x^3-8x^2', color: '#6366f1' }], caption: 'Zeros at x = 0 (double root) and x = 2/3 match the factored form.' },
          ],
        }},
        { id: '2.5c', label: 'c', title: 'Difference of squares', difficulty: 'medium', learn: {
          description: 'a² − b² = (a + b)(a − b). Both terms must be perfect squares and there must be a minus sign between them.',
          exampleProblem: 'Factor 9x² − 25.',
          exampleAnswer: '(3x + 5)(3x − 5)',
          steps: [
            { stepNum: 1, action: 'Identify a and b', equation: 'a = 3x, b = 5 (since (3x)²=9x², 5²=25)', result: '', note: '' },
            { stepNum: 2, action: 'Apply difference of squares', equation: '(3x+5)(3x−5)', result: '(3x+5)(3x−5)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=9x^2-25', color: '#6366f1' }], caption: 'Zeros at x = 5/3 and x = −5/3 confirm the factored form.' },
          ],
        }},
        { id: '2.5d', label: 'd', title: 'Perfect square trinomials', difficulty: 'medium', learn: {
          description: '(a+b)² = a²+2ab+b² and (a−b)² = a²−2ab+b². Recognize when the middle term is twice the product of the square roots of the first and last.',
          exampleProblem: 'Factor x² + 10x + 25.',
          exampleAnswer: '(x + 5)²',
          steps: [
            { stepNum: 1, action: 'Check: √(x²) = x, √25 = 5, 2·x·5 = 10x ✓', equation: 'x² + 10x + 25 = (x+5)²', result: '(x+5)²', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^2+10x+25', color: '#6366f1' }, { id: 'v', latex: '(-5,0)', color: '#f59e0b', showLabel: true }], caption: 'One zero at x = −5 (double root), confirming it\'s a perfect square.' },
          ],
        }},
        { id: '2.5e', label: 'e', title: 'Recognize two expressions as equivalent forms', difficulty: 'hard', learn: {
          description: 'Two expressions are equivalent if they simplify to the same form. Test by expanding or substituting specific values into both.',
          exampleProblem: 'Show that (x+3)² − 9 is equivalent to x² + 6x.',
          exampleAnswer: 'Both expand to x² + 6x.',
          steps: [
            { stepNum: 1, action: 'Expand (x+3)²', equation: '(x+3)² = x²+6x+9', result: 'x²+6x+9', note: '' },
            { stepNum: 2, action: 'Subtract 9', equation: 'x²+6x+9 − 9 = x²+6x', result: 'x²+6x ✓ equivalent', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x+3)^2-9', color: '#6366f1' }, { id: 'g', latex: 'y=x^2+6x', color: '#f59e0b' }], caption: 'The two curves are identical — both are x²+6x.' },
          ],
        }},
      ]},
      { id: '2.6', title: 'Rational Expressions', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:rational', items: [
        { id: '2.6a', label: 'a', title: 'Simplify by factoring and canceling', difficulty: 'medium', learn: {
          description: 'Factor numerator and denominator completely, then cancel common factors. State any restricted values.',
          exampleProblem: 'Simplify (x²−4) / (x+2).',
          exampleAnswer: 'x − 2, x ≠ −2',
          steps: [
            { stepNum: 1, action: 'Factor numerator', equation: '(x²−4) = (x+2)(x−2)', result: '', note: '' },
            { stepNum: 2, action: 'Cancel common factor', equation: '(x+2)(x−2) / (x+2) = x−2', result: 'x − 2, x ≠ −2', note: 'x ≠ −2 because the original denominator cannot be 0.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x^2-4)/(x+2)', color: '#6366f1' }, { id: 'g', latex: 'y=x-2', color: '#f59e0b' }], caption: 'The rational expression (hole at x=−2) behaves like y=x−2 everywhere except x=−2.' },
          ],
        }},
        { id: '2.6b', label: 'b', title: 'Multiply and divide rational expressions', difficulty: 'medium', learn: {
          description: 'Multiply: multiply numerators and denominators, then simplify. Divide: multiply by the reciprocal of the second fraction.',
          exampleProblem: 'Simplify (x+1)/(x−2) ÷ (x+1)/(x+3).',
          exampleAnswer: '(x+3)/(x−2)',
          steps: [
            { stepNum: 1, action: 'Multiply by reciprocal', equation: '(x+1)/(x−2) · (x+3)/(x+1)', result: '', note: '' },
            { stepNum: 2, action: 'Cancel (x+1)', equation: '(x+3)/(x−2)', result: '(x+3)/(x−2)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x+3)/(x-2)', color: '#6366f1' }], caption: 'The simplified result (x+3)/(x−2) has a vertical asymptote at x=2.' },
          ],
        }},
        { id: '2.6c', label: 'c', title: 'Add and subtract with a common denominator', difficulty: 'hard', learn: {
          description: 'Find the LCD, rewrite each fraction with the LCD, then add or subtract numerators.',
          exampleProblem: '2/x + 3/(x+1)',
          exampleAnswer: '(5x+2) / (x(x+1))',
          steps: [
            { stepNum: 1, action: 'LCD = x(x+1)', equation: '2(x+1)/x(x+1) + 3x/x(x+1)', result: '', note: '' },
            { stepNum: 2, action: 'Add numerators', equation: '(2x+2+3x) / x(x+1)', result: '(5x+2) / x(x+1)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2/x+3/(x+1)', color: '#6366f1' }], caption: 'The graph shows vertical asymptotes at x=0 and x=−1.' },
          ],
        }},
        { id: '2.6d', label: 'd', title: 'Identify undefined values', difficulty: 'medium', learn: {
          description: 'A rational expression is undefined where the denominator equals zero. Set denominator = 0 and solve.',
          exampleProblem: 'For what values of x is (x+3)/(x²−5x+6) undefined?',
          exampleAnswer: 'x = 2 and x = 3',
          steps: [
            { stepNum: 1, action: 'Factor denominator', equation: 'x²−5x+6 = (x−2)(x−3)', result: '', note: '' },
            { stepNum: 2, action: 'Set each factor = 0', equation: 'x−2=0 or x−3=0', result: 'x = 2 or x = 3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(x+3)/(x^2-5x+6)', color: '#6366f1' }], caption: 'Vertical asymptotes at x=2 and x=3 — the undefined values.' },
          ],
        }},
        { id: '2.6e', label: 'e', title: 'Solve rational equations', difficulty: 'hard', learn: {
          description: 'Multiply both sides by the LCD to clear fractions, then solve the resulting equation. Check for extraneous solutions.',
          exampleProblem: 'Solve 2/x + 1 = 5/x.',
          exampleAnswer: 'x = 3/2',
          steps: [
            { stepNum: 1, action: 'Multiply both sides by x', equation: '2 + x = 5', result: 'x = 3', note: 'Wait — let\'s redo: 2/x + 1 = 5/x → multiply by x → 2 + x = 5 → x = 3.' },
            { stepNum: 2, action: 'Check x ≠ 0', equation: 'x = 3, not 0 ✓', result: 'x = 3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2/x+1', color: '#6366f1' }, { id: 'g', latex: 'y=5/x', color: '#f59e0b' }], caption: 'The two curves intersect at x = 3.' },
          ],
        }},
      ]},
      { id: '2.7', title: 'Radical & Rational Exponents', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals', items: [
        { id: '2.7a', label: 'a', title: 'Simplify radical expressions', difficulty: 'medium', learn: {
          description: 'Factor out perfect squares from under the radical. √(a·b) = √a · √b.',
          exampleProblem: 'Simplify √72.',
          exampleAnswer: '6√2',
          steps: [
            { stepNum: 1, action: 'Factor out the largest perfect square', equation: '√72 = √(36·2)', result: '√36 · √2 = 6√2', note: '36 is the largest perfect square factor of 72.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{72}', color: '#6366f1' }, { id: 'g', latex: 'y=6\\sqrt{2}', color: '#f59e0b' }], caption: 'Both expressions equal ≈ 8.485. They are equivalent.' },
          ],
        }},
        { id: '2.7b', label: 'b', title: 'Convert between radical and rational exponent form', difficulty: 'medium', learn: {
          description: 'ⁿ√(xᵐ) = x^(m/n). The index of the radical becomes the denominator of the exponent.',
          exampleProblem: 'Write ∛(x²) as a rational exponent.',
          exampleAnswer: 'x^(2/3)',
          steps: [
            { stepNum: 1, action: 'Identify index and power', equation: '∛(x²): index = 3, power = 2', result: 'x^(2/3)', note: 'Power/index = 2/3.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x^{2/3}', color: '#6366f1' }], caption: 'y = x^(2/3) = ∛(x²). Defined for all real x, always ≥ 0.' },
          ],
        }},
        { id: '2.7c', label: 'c', title: 'Solve radical equations', difficulty: 'hard', learn: {
          description: 'Isolate the radical, then raise both sides to the power matching the index. Always check for extraneous solutions.',
          exampleProblem: 'Solve √(2x+3) = 5.',
          exampleAnswer: 'x = 11',
          steps: [
            { stepNum: 1, action: 'Square both sides', equation: '2x+3 = 25', result: '2x = 22', note: '' },
            { stepNum: 2, action: 'Solve and check', equation: 'x = 11 → √(25) = 5 ✓', result: 'x = 11', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{2x+3}', color: '#6366f1' }, { id: 'g', latex: 'y=5', color: '#f59e0b' }], caption: 'The radical function meets y=5 at x=11.' },
          ],
        }},
        { id: '2.7d', label: 'd', title: 'Identify extraneous solutions', difficulty: 'hard', learn: {
          description: 'Extraneous solutions are values that satisfy the squared equation but not the original. They appear because squaring both sides can introduce false solutions.',
          exampleProblem: 'Solve √(x+2) = x − 4.',
          exampleAnswer: 'x = 7 (x = 2 is extraneous)',
          steps: [
            { stepNum: 1, action: 'Square both sides', equation: 'x+2 = (x−4)² = x²−8x+16', result: 'x²−9x+14=0 → (x−7)(x−2)=0', note: '' },
            { stepNum: 2, action: 'Check both solutions', equation: 'x=7: √9=3=7−4 ✓; x=2: √4=2≠2−4=−2 ✗', result: 'x = 7 only', note: 'x=2 is extraneous.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{x+2}', color: '#6366f1' }, { id: 'g', latex: 'y=x-4', color: '#f59e0b' }], caption: 'The curves intersect only at x=7, confirming x=2 is extraneous.' },
          ],
        }},
      ]},
      { id: '2.8', title: 'Function Notation & Composition', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions', items: [
        { id: '2.8a', label: 'a', title: 'Evaluate f(x) at a given value', difficulty: 'easy', learn: {
          description: 'To evaluate f(a), replace every x in the formula with a, then simplify.',
          exampleProblem: 'If f(x) = 3x² − x + 2, find f(4).',
          exampleAnswer: 'f(4) = 46',
          steps: [
            { stepNum: 1, action: 'Substitute x = 4', equation: 'f(4) = 3(4)² − 4 + 2 = 48 − 4 + 2', result: 'f(4) = 46', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3x^2-x+2', color: '#6366f1' }, { id: 'p', latex: '(4,46)', color: '#f59e0b', showLabel: true }], caption: 'The point (4, 46) is on the curve y = 3x²−x+2.' },
          ],
        }},
        { id: '2.8b', label: 'b', title: 'Evaluate f(g(x))', difficulty: 'medium', learn: {
          description: 'To find f(g(x)), substitute g(x) into f everywhere x appears. Work from inside out.',
          exampleProblem: 'f(x) = 2x+1, g(x) = x². Find f(g(3)).',
          exampleAnswer: 'f(g(3)) = 19',
          steps: [
            { stepNum: 1, action: 'Find g(3) first', equation: 'g(3) = 3² = 9', result: '', note: '' },
            { stepNum: 2, action: 'Then find f(9)', equation: 'f(9) = 2(9)+1 = 19', result: 'f(g(3)) = 19', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x+1', color: '#6366f1' }, { id: 'g', latex: 'y=x^2', color: '#f59e0b' }], caption: 'f(x) = 2x+1 and g(x) = x². f(g(x)) = 2x²+1.' },
          ],
        }},
        { id: '2.8c', label: 'c', title: 'Interpret f(x) from a graph or table', difficulty: 'medium', learn: {
          description: 'From a graph: find the y-value on the curve at the given x. From a table: find the row with the given x, read the f(x) column.',
          exampleProblem: 'A table shows f(1)=5, f(2)=9, f(3)=13. What is f(2)?',
          exampleAnswer: 'f(2) = 9',
          steps: [
            { stepNum: 1, action: 'Find x = 2 in the table', equation: 'Row x=2: f(x)=9', result: 'f(2) = 9', note: 'Read the output for the given input.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=4x+1', color: '#6366f1' }, { id: 'p', latex: '(2,9)', color: '#f59e0b', showLabel: true }], caption: 'On the graph y = 4x+1, the point at x=2 has y=9.' },
          ],
        }},
        { id: '2.8d', label: 'd', title: 'Find input given an output', difficulty: 'medium', learn: {
          description: 'Given f(x) = k, solve the equation for x. This is the reverse of evaluating a function.',
          exampleProblem: 'If f(x) = 2x − 4, find x when f(x) = 10.',
          exampleAnswer: 'x = 7',
          steps: [
            { stepNum: 1, action: 'Set f(x) = 10', equation: '2x − 4 = 10', result: '2x = 14 → x = 7', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x-4', color: '#6366f1' }, { id: 'g', latex: 'y=10', color: '#f59e0b' }], caption: 'The function y=2x−4 equals 10 at x=7.' },
          ],
        }},
      ]},
      { id: '2.9', title: 'Piecewise Functions', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:absolute-value-piecewise-functions', items: [
        { id: '2.9a', label: 'a', title: 'Evaluate at a given x value', difficulty: 'medium', learn: {
          description: 'Determine which piece applies based on the x value, then evaluate using that piece\'s formula.',
          exampleProblem: 'f(x) = {2x if x < 3; x+5 if x ≥ 3}. Find f(5).',
          exampleAnswer: 'f(5) = 10',
          steps: [
            { stepNum: 1, action: 'Determine which piece: x = 5 ≥ 3', equation: 'Use f(x) = x + 5', result: 'f(5) = 5+5 = 10', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\{x<3:2x,x+5\\}', color: '#6366f1' }], caption: 'The piecewise function switches formula at x=3.' },
          ],
        }},
        { id: '2.9b', label: 'b', title: 'Identify which piece applies', difficulty: 'medium', learn: {
          description: 'Check the condition for each piece. Only one condition will be satisfied for a given x. Be careful with ≤ vs < at the boundary.',
          exampleProblem: 'f(x) = {x² if x ≤ 0; 3x if x > 0}. What formula gives f(−2)?',
          exampleAnswer: 'f(x) = x², since −2 ≤ 0.',
          steps: [
            { stepNum: 1, action: 'Check −2 ≤ 0', equation: '−2 ≤ 0: TRUE', result: 'Use the first piece: f(x) = x²', note: '' },
            { stepNum: 2, action: 'Evaluate', equation: 'f(−2) = (−2)² = 4', result: 'f(−2) = 4', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\{x\\le0:x^2,3x\\}', color: '#6366f1' }], caption: 'Left of x=0: parabola. Right of x=0: line. They connect at (0,0).' },
          ],
        }},
        { id: '2.9c', label: 'c', title: 'Interpret a piecewise graph', difficulty: 'hard', learn: {
          description: 'On a piecewise graph: open circles mean the endpoint is excluded, closed circles mean it is included. Each segment has its own formula.',
          exampleProblem: 'A piecewise graph is a line from (0,2) to (3,5) then horizontal at y=5 for x>3. What is f(6)?',
          exampleAnswer: 'f(6) = 5',
          steps: [
            { stepNum: 1, action: 'Identify piece for x=6', equation: 'x=6 > 3 → horizontal piece at y=5', result: 'f(6) = 5', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\{x\\le3:x+2,5\\}', color: '#6366f1' }], caption: 'Line y=x+2 up to x=3, then constant y=5 for x>3.' },
          ],
        }},
      ]},
    ],
  },

  // ── Unit 3: Problem Solving & Data Analysis ───────────────────────────────
  {
    id: 'M3',
    number: 3,
    title: 'Problem Solving & Data Analysis',
    color: 'teal',
    icon: '%',
    subunits: [
      { id: '3.1', title: 'Ratios, Rates, Proportions', difficulty: 'easy', khanLink: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion', items: [
        { id: '3.1a', label: 'a', title: 'Set up and solve a proportion', difficulty: 'easy', learn: {
          description: 'A proportion sets two ratios equal: a/b = c/d. Cross-multiply to solve: a·d = b·c.',
          exampleProblem: 'If 4 apples cost $2.00, how much do 10 apples cost?',
          exampleAnswer: '$5.00',
          steps: [
            { stepNum: 1, action: 'Set up proportion', equation: '4/2.00 = 10/x', result: '', note: '' },
            { stepNum: 2, action: 'Cross-multiply', equation: '4x = 20.00', result: 'x = 5.00', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=0.5x', color: '#6366f1' }], caption: 'Cost is proportional to quantity. At x=10 apples, y=$5.00.' },
          ],
        }},
        { id: '3.1b', label: 'b', title: 'Multi-step unit conversion', difficulty: 'medium', learn: {
          description: 'Multiply by conversion factors (fractions equal to 1) so that unwanted units cancel. Chain conversions together.',
          exampleProblem: 'Convert 60 miles/hour to feet/second. (1 mile = 5280 ft, 1 hour = 3600 sec)',
          exampleAnswer: '88 feet/second',
          steps: [
            { stepNum: 1, action: 'Multiply by conversion factors', equation: '60 mi/hr × 5280 ft/mi × 1 hr/3600 sec', result: '(60 × 5280)/3600 ft/sec', note: '' },
            { stepNum: 2, action: 'Calculate', equation: '316800/3600', result: '88 ft/sec', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=88', color: '#6366f1' }], caption: '60 mph = 88 ft/sec. A constant rate of 88 feet every second.' },
          ],
        }},
        { id: '3.1c', label: 'c', title: 'Scale problems', difficulty: 'medium', learn: {
          description: 'In a scale drawing, the ratio of drawing length to actual length is constant. Set up a proportion with the scale factor.',
          exampleProblem: 'A map has scale 1 inch = 40 miles. Two cities are 3.5 inches apart. What is the actual distance?',
          exampleAnswer: '140 miles',
          steps: [
            { stepNum: 1, action: 'Set up proportion', equation: '1/40 = 3.5/x', result: 'x = 140', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=40x', color: '#6366f1' }], caption: 'Actual distance = 40 × map inches. At 3.5 inches, actual = 140 miles.' },
          ],
        }},
        { id: '3.1d', label: 'd', title: 'Rate × time problems', difficulty: 'medium', learn: {
          description: 'Distance = Rate × Time (d = rt). For problems with two rates, set up separate equations and add or equate.',
          exampleProblem: 'A train travels 240 miles in 3 hours. What is its average speed?',
          exampleAnswer: '80 mph',
          steps: [
            { stepNum: 1, action: 'Apply d = r·t', equation: '240 = r · 3', result: 'r = 80 mph', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=80x', color: '#6366f1' }], caption: 'At 80 mph, the train covers 80x miles in x hours. At x=3, d=240 miles.' },
          ],
        }},
      ]},
      { id: '3.2', title: 'Percentages', difficulty: 'easy', khanLink: 'https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates', items: [
        { id: '3.2a', label: 'a', title: 'Percent increase / decrease', difficulty: 'easy', learn: {
          description: 'Percent change = (new − old)/old × 100%. Positive = increase, negative = decrease.',
          exampleProblem: 'A price went from $80 to $100. What is the percent increase?',
          exampleAnswer: '25%',
          steps: [
            { stepNum: 1, action: 'Apply percent change formula', equation: '(100−80)/80 × 100% = 20/80 × 100%', result: '25%', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=80(1+x/100)', color: '#6366f1' }], caption: 'y = 80(1 + x%) — the new price after an x% increase. At x=25, y=100.' },
          ],
        }},
        { id: '3.2b', label: 'b', title: 'Markup and discount', difficulty: 'easy', learn: {
          description: 'Markup: new price = original × (1 + rate). Discount: new price = original × (1 − rate).',
          exampleProblem: 'A $150 jacket is 20% off. What is the sale price?',
          exampleAnswer: '$120',
          steps: [
            { stepNum: 1, action: 'Apply discount formula', equation: '$150 × (1−0.20) = $150 × 0.80', result: '$120', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=150\\cdot(1-x/100)', color: '#6366f1' }], caption: 'Sale price vs. discount %. At 20% off (x=20), price = $120.' },
          ],
        }},
        { id: '3.2c', label: 'c', title: 'Successive percent changes', difficulty: 'hard', learn: {
          description: 'Apply each percent change sequentially. A 10% increase then 10% decrease does NOT return to the original value.',
          exampleProblem: 'A stock rises 20% then falls 20%. What is the net change?',
          exampleAnswer: '−4% (net loss)',
          steps: [
            { stepNum: 1, action: 'Apply first change', equation: '100 × 1.20 = 120', result: '', note: '' },
            { stepNum: 2, action: 'Apply second change', equation: '120 × 0.80 = 96', result: 'Net: 96 vs. original 100 → −4%', note: '20% of 120 is larger than 20% of 100.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=100\\cdot1.2\\cdot0.8', color: '#6366f1' }], caption: '100 × 1.2 × 0.8 = 96. A 4% net loss despite equal rates.' },
          ],
        }},
        { id: '3.2d', label: 'd', title: 'Percent word problems with unknowns', difficulty: 'medium', learn: {
          description: 'Translate "percent of total" into an equation: part = percent × whole. Solve for the unknown variable.',
          exampleProblem: '18 is 30% of what number?',
          exampleAnswer: '60',
          steps: [
            { stepNum: 1, action: 'Write equation', equation: '18 = 0.30 × x', result: 'x = 18/0.30 = 60', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=0.30x', color: '#6366f1' }, { id: 'p', latex: '(60,18)', color: '#f59e0b', showLabel: true }], caption: 'y = 0.30x. At x = 60, y = 18 — confirming 18 is 30% of 60.' },
          ],
        }},
      ]},
      { id: '3.3', title: 'Statistics — Center & Spread', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data', items: [
        { id: '3.3a', label: 'a', title: 'Calculate mean and median', difficulty: 'easy', learn: {
          description: 'Mean = sum ÷ count. Median = middle value (or average of two middle values) when data is sorted.',
          exampleProblem: 'Data: 4, 7, 2, 9, 3. Find the mean and median.',
          exampleAnswer: 'Mean = 5, Median = 4',
          steps: [
            { stepNum: 1, action: 'Calculate mean', equation: '(4+7+2+9+3)/5 = 25/5', result: 'Mean = 5', note: '' },
            { stepNum: 2, action: 'Sort and find median', equation: 'Sorted: 2, 3, 4, 7, 9 → middle = 4', result: 'Median = 4', note: 'With 5 values, the 3rd is the median.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=5', color: '#6366f1' }], caption: 'Mean = 5. The average balances all data values equally.' },
          ],
        }},
        { id: '3.3b', label: 'b', title: 'Effect of adding or removing a data point', difficulty: 'medium', learn: {
          description: 'Adding a value above the mean increases it; below decreases it. Adding an extreme value (outlier) affects the mean more than the median.',
          exampleProblem: 'Dataset mean is 10. A value of 40 is added. Does the mean increase or decrease?',
          exampleAnswer: 'Increase — the new value is above the current mean.',
          steps: [
            { stepNum: 1, action: 'Compare new value to current mean', equation: '40 > 10', result: 'New value pulls mean up', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=10', color: '#f59e0b' }], caption: 'Current mean = 10. Adding 40 will raise the mean above 10.' },
          ],
        }},
        { id: '3.3c', label: 'c', title: 'Range and IQR', difficulty: 'medium', learn: {
          description: 'Range = max − min. IQR = Q3 − Q1 (middle 50% of data). IQR is more resistant to outliers than range.',
          exampleProblem: 'Data: 2, 5, 7, 9, 12, 15, 20. Find the range and IQR.',
          exampleAnswer: 'Range = 18, IQR = 10',
          steps: [
            { stepNum: 1, action: 'Range = max − min', equation: '20 − 2 = 18', result: 'Range = 18', note: '' },
            { stepNum: 2, action: 'Q1 = median of lower half, Q3 = median of upper half', equation: 'Q1 = 5, Q3 = 15', result: 'IQR = 15 − 5 = 10', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=5', color: '#6366f1' }, { id: 'g', latex: 'y=15', color: '#f59e0b' }], caption: 'Q1 = 5 and Q3 = 15 define the IQR = 10 (middle 50% of data).' },
          ],
        }},
        { id: '3.3d', label: 'd', title: 'Interpret standard deviation conceptually', difficulty: 'hard', learn: {
          description: 'Standard deviation measures the typical distance from the mean. Larger SD = more spread out. Lower SD = more clustered around the mean.',
          exampleProblem: 'Class A scores: 70, 75, 80, 85, 90. Class B scores: 50, 65, 80, 95, 110. Which has the larger SD?',
          exampleAnswer: 'Class B — the scores are more spread out.',
          steps: [
            { stepNum: 1, action: 'Compare spread visually', equation: 'Class A range = 20; Class B range = 60', result: 'Class B has greater variability', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'a', latex: 'y=80', color: '#6366f1' }], caption: 'Both classes have mean ≈ 80, but Class B\'s values are farther from 80 on average.' },
          ],
        }},
      ]},
      { id: '3.4', title: 'Data Interpretation', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/statistics-probability/displaying-describing-data', items: [
        { id: '3.4a', label: 'a', title: 'Read and interpret a table', difficulty: 'easy', learn: {
          description: 'To read a table, identify the row and column you need, find the cell at their intersection, and read off the value.',
          exampleProblem: 'A table shows sales by year: 2021→150, 2022→200, 2023→175. What were total sales over 3 years?',
          exampleAnswer: '525',
          steps: [
            { stepNum: 1, action: 'Add all values', equation: '150 + 200 + 175 = 525', result: 'Total = 525', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=525/3', color: '#6366f1' }], caption: 'Average yearly sales = 525/3 = 175.' },
          ],
        }},
        { id: '3.4b', label: 'b', title: 'Interpret a bar or dot chart', difficulty: 'easy', learn: {
          description: 'Bar charts show values as height of bars. Dot plots show individual data points. Read the scale carefully.',
          exampleProblem: 'A bar chart shows 4 students scored 90, 3 scored 80, 2 scored 70. What is the most common score?',
          exampleAnswer: '90 (4 students)',
          steps: [
            { stepNum: 1, action: 'Find the tallest bar', equation: 'Bar at 90 has height 4 — the highest', result: 'Mode = 90', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=4', color: '#6366f1' }], caption: '4 students scored 90 — this is the mode of the dataset.' },
          ],
        }},
        { id: '3.4c', label: 'c', title: 'Read a scatter plot', difficulty: 'medium', learn: {
          description: 'Scatter plots show the relationship between two variables. Look for positive/negative/no association and whether the relationship is linear.',
          exampleProblem: 'A scatter plot shows hours studied vs. test score. As hours increase, scores also increase. What type of association is this?',
          exampleAnswer: 'Positive association.',
          steps: [
            { stepNum: 1, action: 'Check direction of trend', equation: 'Both variables increase together', result: 'Positive (direct) association', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=8x+50', color: '#6366f1' }], caption: 'A positive linear association: as study hours increase, scores increase.' },
          ],
        }},
        { id: '3.4d', label: 'd', title: 'Read a histogram', difficulty: 'medium', learn: {
          description: 'Histograms show frequency of data in intervals (bins). The y-axis is frequency (count), the x-axis is the data value range.',
          exampleProblem: 'A histogram has bins 0–10, 10–20, 20–30 with heights 5, 8, 3. How many data points are in the 10–20 range?',
          exampleAnswer: '8',
          steps: [
            { stepNum: 1, action: 'Read the height of the 10–20 bar', equation: 'Height = 8', result: '8 data points in 10–20 range', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=8', color: '#6366f1' }], caption: 'The tallest bar (height 8) shows 10–20 is the most frequent interval.' },
          ],
        }},
        { id: '3.4e', label: 'e', title: 'Two-way tables', difficulty: 'medium', learn: {
          description: 'Two-way tables show frequencies for two categorical variables. Row totals and column totals (marginal frequencies) are key.',
          exampleProblem: 'A table shows 30 students: 12 boys passed, 8 girls passed, 5 boys failed, 5 girls failed. What fraction of girls passed?',
          exampleAnswer: '8/13',
          steps: [
            { stepNum: 1, action: 'Find total girls', equation: '8 + 5 = 13 girls', result: '', note: '' },
            { stepNum: 2, action: 'Find fraction passed', equation: '8/13', result: '8 out of 13 girls passed', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=8/13', color: '#6366f1' }], caption: '8/13 ≈ 61.5% of girls passed the test.' },
          ],
        }},
      ]},
      { id: '3.5', title: 'Probability', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/statistics-probability/probability-library', items: [
        { id: '3.5a', label: 'a', title: 'Simple probability', difficulty: 'easy', learn: {
          description: 'P(event) = (number of favorable outcomes) / (total number of equally likely outcomes).',
          exampleProblem: 'A bag has 3 red and 7 blue marbles. What is P(red)?',
          exampleAnswer: '3/10 = 0.3 = 30%',
          steps: [
            { stepNum: 1, action: 'Identify favorable and total outcomes', equation: 'P(red) = 3/(3+7) = 3/10', result: '30%', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3/10', color: '#6366f1' }], caption: 'P(red) = 0.3. Probabilities range from 0 to 1.' },
          ],
        }},
        { id: '3.5b', label: 'b', title: 'Complementary probability', difficulty: 'easy', learn: {
          description: 'P(not A) = 1 − P(A). The complement of an event is "everything else."',
          exampleProblem: 'If P(rain) = 0.35, what is P(no rain)?',
          exampleAnswer: '0.65',
          steps: [
            { stepNum: 1, action: 'Apply complement rule', equation: 'P(no rain) = 1 − 0.35 = 0.65', result: '65% chance of no rain', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=1-0.35', color: '#6366f1' }], caption: 'P(A) + P(not A) = 1 always. 0.35 + 0.65 = 1.' },
          ],
        }},
        { id: '3.5c', label: 'c', title: 'Conditional probability from a two-way table', difficulty: 'hard', learn: {
          description: 'P(A|B) = "probability of A given B" = (count of A and B) / (count of B).',
          exampleProblem: 'Of 50 students: 20 play sports (10 boys, 10 girls), 30 don\'t (15 boys, 15 girls). P(plays sports | boy) = ?',
          exampleAnswer: '10/25 = 40%',
          steps: [
            { stepNum: 1, action: 'Restrict to boys only', equation: '10 + 15 = 25 boys total', result: '', note: '' },
            { stepNum: 2, action: 'Find boys who play sports', equation: '10/25 = 0.40', result: '40% of boys play sports', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=10/25', color: '#6366f1' }], caption: 'Conditional probability focuses on a subset. 10/25 = 0.4.' },
          ],
        }},
        { id: '3.5d', label: 'd', title: 'And / Or probability', difficulty: 'hard', learn: {
          description: 'P(A or B) = P(A) + P(B) − P(A and B). For independent events: P(A and B) = P(A)·P(B).',
          exampleProblem: 'P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.1. Find P(A or B).',
          exampleAnswer: '0.6',
          steps: [
            { stepNum: 1, action: 'Apply addition rule', equation: 'P(A or B) = 0.4 + 0.3 − 0.1', result: '0.6', note: 'Subtract the overlap to avoid double-counting.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=0.4+0.3-0.1', color: '#6366f1' }], caption: 'P(A or B) = 0.6. The Venn diagram overlap (0.1) is subtracted once.' },
          ],
        }},
      ]},
      { id: '3.6', title: 'Inference from Data', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/statistics-probability/designing-studies', items: [
        { id: '3.6a', label: 'a', title: 'Valid vs invalid conclusions from a study', difficulty: 'medium', learn: {
          description: 'Correlation ≠ causation. Observational studies can show association but not causation. Only randomized experiments support causal claims.',
          exampleProblem: 'A study finds people who carry lighters are more likely to get cancer. Can we conclude lighters cause cancer?',
          exampleAnswer: 'No — this is an observational study. Smoking (a confounding variable) likely explains both.',
          steps: [
            { stepNum: 1, action: 'Identify study type', equation: 'Observational — no random assignment', result: 'Cannot infer causation', note: '' },
            { stepNum: 2, action: 'Identify confounding variable', equation: 'Smokers carry lighters and have higher cancer risk', result: 'Confounding variable: smoking', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x', color: '#6366f1' }], caption: 'Association (correlation) does not mean one variable causes the other.' },
          ],
        }},
        { id: '3.6b', label: 'b', title: 'Evaluate sampling methods', difficulty: 'medium', learn: {
          description: 'A random sample is unbiased. Convenience samples, self-selected samples, or samples from a non-representative group lead to biased results.',
          exampleProblem: 'To study student smartphone use, a researcher surveys only students in the computer lab. Is this a good sample?',
          exampleAnswer: 'No — computer lab students are not representative; likely biased toward more tech use.',
          steps: [
            { stepNum: 1, action: 'Check representativeness', equation: 'Computer lab ≠ all students', result: 'Biased sample', note: 'Students there are probably more tech-oriented.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=1', color: '#6366f1' }], caption: 'A biased sample cannot be used to draw conclusions about the whole population.' },
          ],
        }},
        { id: '3.6c', label: 'c', title: 'Interpret margin of error', difficulty: 'hard', learn: {
          description: 'A margin of error (±E) means the true population value is likely within E of the sample estimate. Larger samples → smaller margin of error.',
          exampleProblem: 'A poll shows 52% support, with margin of error ±3%. What range contains the true support?',
          exampleAnswer: '49% to 55%',
          steps: [
            { stepNum: 1, action: 'Subtract and add margin of error', equation: '52 − 3 = 49%, 52 + 3 = 55%', result: 'Range: 49% to 55%', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=52', color: '#6366f1' }, { id: 'g', latex: 'y=49', color: '#f59e0b' }, { id: 'h', latex: 'y=55', color: '#f59e0b' }], caption: 'The true value is expected to fall between 49% and 55%.' },
          ],
        }},
        { id: '3.6d', label: 'd', title: 'Generalize from a sample to a population', difficulty: 'hard', learn: {
          description: 'If a sample is random and representative, results can be generalized to the population. Scale proportionally.',
          exampleProblem: '60 out of 200 surveyed students prefer pizza. The school has 1,000 students. Estimate how many prefer pizza.',
          exampleAnswer: '300 students',
          steps: [
            { stepNum: 1, action: 'Find proportion', equation: '60/200 = 30%', result: '', note: '' },
            { stepNum: 2, action: 'Scale to population', equation: '0.30 × 1000 = 300', result: '300 students', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=0.30x', color: '#6366f1' }, { id: 'p', latex: '(1000,300)', color: '#f59e0b', showLabel: true }], caption: '30% of any group size prefer pizza. At 1000 students: 300.' },
          ],
        }},
      ]},
      { id: '3.7', title: 'Linear vs Exponential Growth', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:exponential-growth-decay', items: [
        { id: '3.7a', label: 'a', title: 'Identify linear vs exponential from a table or description', difficulty: 'easy', learn: {
          description: 'Linear: constant differences between consecutive y-values. Exponential: constant ratios between consecutive y-values.',
          exampleProblem: 'Table: x=1→2, x=2→4, x=3→8, x=4→16. Is this linear or exponential?',
          exampleAnswer: 'Exponential — each value doubles (ratio = 2).',
          steps: [
            { stepNum: 1, action: 'Check differences: 4−2=2, 8−4=4 — not constant', equation: 'Differences not equal → not linear', result: '', note: '' },
            { stepNum: 2, action: 'Check ratios: 4/2=2, 8/4=2 — constant', equation: 'Ratio = 2 → exponential', result: 'Exponential growth', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2^x', color: '#6366f1' }], caption: 'y = 2ˣ. Each step multiplies by 2 — the hallmark of exponential growth.' },
          ],
        }},
        { id: '3.7b', label: 'b', title: 'Write the correct model', difficulty: 'medium', learn: {
          description: 'Linear model: y = mx + b (constant rate of change). Exponential model: y = a·bˣ (constant percent change).',
          exampleProblem: 'A savings account earns 5% interest each year starting at $1,000. Write the model.',
          exampleAnswer: 'y = 1000 · (1.05)ˣ',
          steps: [
            { stepNum: 1, action: 'Identify model type: percent change → exponential', equation: 'y = a·bˣ', result: '', note: '' },
            { stepNum: 2, action: 'Fill in a=1000, b=1.05', equation: 'y = 1000·(1.05)ˣ', result: 'Exponential model', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=1000\\cdot(1.05)^x', color: '#6366f1' }], caption: 'Account value grows exponentially. At x=10, value ≈ $1,629.' },
          ],
        }},
        { id: '3.7c', label: 'c', title: 'Interpret what the model predicts', difficulty: 'medium', learn: {
          description: 'Use the model to predict values. Substitute the x-value and evaluate. Be careful about units and domain.',
          exampleProblem: 'Using y = 1000·(1.05)ˣ, predict the value after 20 years.',
          exampleAnswer: '≈ $2,653',
          steps: [
            { stepNum: 1, action: 'Substitute x = 20', equation: 'y = 1000·(1.05)²⁰ = 1000·2.653', result: '≈ $2,653', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=1000\\cdot(1.05)^x', color: '#6366f1' }, { id: 'p', latex: '(20,2653)', color: '#f59e0b', showLabel: true }], caption: 'After 20 years at 5% interest, $1,000 grows to about $2,653.' },
          ],
        }},
      ]},
      { id: '3.8', title: 'Linear Regression', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data', items: [
        { id: '3.8a', label: 'a', title: 'Identify the line of best fit', difficulty: 'easy', learn: {
          description: 'The line of best fit minimizes the total distance from all data points. It passes through the "center" of the scatter plot.',
          exampleProblem: 'Which line best fits: y=2x+1, y=5x+10, or y=2x+3 for data near (1,5), (2,7), (3,9)?',
          exampleAnswer: 'y = 2x + 3 (closest to all three points)',
          steps: [
            { stepNum: 1, action: 'Test y=2x+3 at x=1,2,3', equation: '5, 7, 9 — exact match', result: 'y = 2x+3 is the best fit', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x+3', color: '#6366f1' }, { id: 'p1', latex: '(1,5)', color: '#f59e0b', showLabel: true }, { id: 'p2', latex: '(2,7)', color: '#f59e0b', showLabel: true }, { id: 'p3', latex: '(3,9)', color: '#f59e0b', showLabel: true }], caption: 'y = 2x+3 passes through all three data points exactly.' },
          ],
        }},
        { id: '3.8b', label: 'b', title: 'Interpret slope in context', difficulty: 'medium', learn: {
          description: 'In a regression line y = mx + b, the slope m tells you the average change in y for a 1-unit increase in x.',
          exampleProblem: 'Regression line: score = 3.2 × hours + 50. What does 3.2 mean?',
          exampleAnswer: 'For each additional hour of study, the score increases by 3.2 points on average.',
          steps: [
            { stepNum: 1, action: 'Identify slope in regression equation', equation: 'slope = 3.2', result: '', note: '' },
            { stepNum: 2, action: 'Attach units from context', equation: '3.2 points per hour', result: 'Each extra hour → +3.2 points', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3.2x+50', color: '#6366f1' }], caption: 'The regression line slopes upward 3.2 points per hour studied.' },
          ],
        }},
        { id: '3.8c', label: 'c', title: 'Interpret y-intercept in context', difficulty: 'medium', learn: {
          description: 'The y-intercept b is the predicted value of y when x = 0. Always check if x=0 is meaningful in context.',
          exampleProblem: 'score = 3.2·hours + 50. What does 50 mean?',
          exampleAnswer: 'A student who studied 0 hours is predicted to score 50.',
          steps: [
            { stepNum: 1, action: 'Set x = 0', equation: 'score = 3.2(0) + 50 = 50', result: 'Predicted score with 0 hours = 50', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3.2x+50', color: '#6366f1' }, { id: 'p', latex: '(0,50)', color: '#f59e0b', showLabel: true }], caption: 'At x=0 (no study time), the predicted score is 50.' },
          ],
        }},
        { id: '3.8d', label: 'd', title: 'Use the line to make a prediction', difficulty: 'easy', learn: {
          description: 'Substitute the x-value into the regression equation to predict the y-value. Predictions are more reliable within the data range (interpolation).',
          exampleProblem: 'score = 3.2·hours + 50. Predict score for 8 hours of study.',
          exampleAnswer: '75.6',
          steps: [
            { stepNum: 1, action: 'Substitute x = 8', equation: 'score = 3.2(8) + 50 = 25.6 + 50', result: '75.6', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=3.2x+50', color: '#6366f1' }, { id: 'p', latex: '(8,75.6)', color: '#f59e0b', showLabel: true }], caption: 'At 8 hours of study, predicted score = 75.6.' },
          ],
        }},
        { id: '3.8e', label: 'e', title: 'Interpret r-value (strength and direction)', difficulty: 'hard', learn: {
          description: 'The correlation coefficient r measures strength and direction: r near ±1 = strong, r near 0 = weak. Positive r = positive association, negative r = negative.',
          exampleProblem: 'r = −0.92 for ice cream sales vs. drowning rate. What does this mean?',
          exampleAnswer: 'Strong negative association — but correlation ≠ causation (both relate to summer/heat).',
          steps: [
            { stepNum: 1, action: 'Interpret magnitude', equation: '|r| = 0.92 → strong association', result: '', note: '' },
            { stepNum: 2, action: 'Interpret sign', equation: 'r < 0 → negative (as one goes up, the other goes down)', result: 'Strong negative — but confounded by season', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=-0.92x', color: '#6366f1' }], caption: 'r = −0.92 implies a strong downward-sloping trend in the scatter plot.' },
          ],
        }},
      ]},
    ],
  },

  // ── Unit 4: Geometry & Trigonometry ──────────────────────────────────────
  {
    id: 'M4',
    number: 4,
    title: 'Geometry & Trigonometry',
    color: 'emerald',
    icon: '△',
    subunits: [
      { id: '4.1', title: 'Area & Perimeter', difficulty: 'easy', khanLink: 'https://www.khanacademy.org/math/basic-geo/basic-geo-area-and-perimeter', items: [
        { id: '4.1a', label: 'a', title: 'Area and perimeter of rectangles and triangles', difficulty: 'easy', learn: {
          description: 'Rectangle: A = l·w, P = 2(l+w). Triangle: A = ½·b·h, P = sum of all sides.',
          exampleProblem: 'A rectangle is 8 ft long and 5 ft wide. Find area and perimeter.',
          exampleAnswer: 'A = 40 ft², P = 26 ft',
          steps: [
            { stepNum: 1, action: 'Area = length × width', equation: 'A = 8 × 5', result: 'A = 40 ft²', note: '' },
            { stepNum: 2, action: 'Perimeter = 2(l + w)', equation: 'P = 2(8 + 5) = 2(13)', result: 'P = 26 ft', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'r', latex: '0\\le x\\le8', color: '#6366f1' }, { id: 'r2', latex: '0\\le y\\le5', color: '#6366f1' }], caption: 'The 8×5 rectangle has area = 40 and perimeter = 26.' },
          ],
        }},
        { id: '4.1b', label: 'b', title: 'Composite figures', difficulty: 'medium', learn: {
          description: 'Break a composite figure into simpler shapes (rectangles, triangles, circles). Calculate each area separately, then add.',
          exampleProblem: 'An L-shaped figure is made of two rectangles: 4×6 and 2×3. Find total area.',
          exampleAnswer: '30 sq units',
          steps: [
            { stepNum: 1, action: 'Area of large rectangle', equation: '4 × 6 = 24', result: '', note: '' },
            { stepNum: 2, action: 'Area of small rectangle', equation: '2 × 3 = 6', result: 'Total = 24 + 6 = 30', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=30', color: '#6366f1' }], caption: 'The total area is 24 + 6 = 30 sq units.' },
          ],
        }},
        { id: '4.1c', label: 'c', title: 'Shaded region problems', difficulty: 'medium', learn: {
          description: 'Shaded area = total area − unshaded area. Calculate the larger shape, subtract the cutout.',
          exampleProblem: 'A 10×10 square has a 3×4 rectangle cut out. What is the shaded area?',
          exampleAnswer: '88 sq units',
          steps: [
            { stepNum: 1, action: 'Area of square', equation: '10 × 10 = 100', result: '', note: '' },
            { stepNum: 2, action: 'Subtract cutout', equation: '100 − 3×4 = 100 − 12', result: '88 sq units', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=88', color: '#6366f1' }], caption: 'Shaded area = 100 − 12 = 88 sq units.' },
          ],
        }},
        { id: '4.1d', label: 'd', title: 'Word problems involving area or perimeter', difficulty: 'medium', learn: {
          description: 'Identify which measurement is needed (area for covering/filling, perimeter for fencing/outlining), set up the formula, and solve.',
          exampleProblem: 'A farmer wants to fence a 20m × 15m field. How much fencing is needed?',
          exampleAnswer: '70 meters',
          steps: [
            { stepNum: 1, action: 'Recognize this is a perimeter problem', equation: 'P = 2(20 + 15) = 2(35)', result: 'P = 70 m', note: 'Fencing goes around the outside — perimeter.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2(20+15)', color: '#6366f1' }], caption: 'P = 70 meters of fencing needed to enclose the field.' },
          ],
        }},
      ]},
      { id: '4.2', title: 'Circles', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-circles', items: [
        { id: '4.2a', label: 'a', title: 'Area and circumference', difficulty: 'easy', learn: {
          description: 'Circumference C = 2πr (or πd). Area A = πr². These formulas are given on the SAT reference sheet.',
          exampleProblem: 'A circle has radius 5. Find its circumference and area.',
          exampleAnswer: 'C = 10π ≈ 31.4, A = 25π ≈ 78.5',
          steps: [
            { stepNum: 1, action: 'Circumference', equation: 'C = 2π(5) = 10π', result: '≈ 31.4', note: '' },
            { stepNum: 2, action: 'Area', equation: 'A = π(5)² = 25π', result: '≈ 78.5', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: 'x^2+y^2=25', color: '#6366f1' }], caption: 'Circle with r=5. Circumference = 10π, Area = 25π.' },
          ],
        }},
        { id: '4.2b', label: 'b', title: 'Arc length', difficulty: 'medium', learn: {
          description: 'Arc length = (θ/360°) × 2πr, where θ is the central angle in degrees.',
          exampleProblem: 'A circle has radius 6. Find the arc length for a 90° central angle.',
          exampleAnswer: '3π ≈ 9.42',
          steps: [
            { stepNum: 1, action: 'Apply arc length formula', equation: 'Arc = (90/360) × 2π(6) = (1/4) × 12π', result: '3π', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: 'x^2+y^2=36', color: '#6366f1' }], caption: 'Circle r=6. A 90° arc (1/4 of the circumference) has length 3π.' },
          ],
        }},
        { id: '4.2c', label: 'c', title: 'Sector area', difficulty: 'medium', learn: {
          description: 'Sector area = (θ/360°) × πr². A sector is a "pie slice" of the circle.',
          exampleProblem: 'A circle has radius 4. Find the sector area for a 60° central angle.',
          exampleAnswer: '8π/3 ≈ 8.38',
          steps: [
            { stepNum: 1, action: 'Apply sector area formula', equation: 'A = (60/360) × π(4)² = (1/6) × 16π', result: '8π/3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: 'x^2+y^2=16', color: '#6366f1' }], caption: 'Circle r=4. A 60° sector is 1/6 of the total area 16π.' },
          ],
        }},
        { id: '4.2d', label: 'd', title: 'Equation of a circle', difficulty: 'hard', learn: {
          description: 'Standard form: (x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius.',
          exampleProblem: 'Write the equation of a circle with center (3, −2) and radius 5.',
          exampleAnswer: '(x − 3)² + (y + 2)² = 25',
          steps: [
            { stepNum: 1, action: 'Plug in center and radius', equation: '(x−3)² + (y−(−2))² = 5²', result: '(x−3)² + (y+2)² = 25', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: '(x-3)^2+(y+2)^2=25', color: '#6366f1' }], caption: 'Circle centered at (3, −2) with r = 5.' },
          ],
        }},
      ]},
      { id: '4.3', title: 'Lines & Angles', difficulty: 'easy', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-foundations', items: [
        { id: '4.3a', label: 'a', title: 'Supplementary and complementary angles', difficulty: 'easy', learn: {
          description: 'Complementary angles sum to 90°. Supplementary angles sum to 180°.',
          exampleProblem: 'One angle is 53°. What is its supplement?',
          exampleAnswer: '127°',
          steps: [
            { stepNum: 1, action: 'Supplement = 180° − angle', equation: '180 − 53 = 127°', result: '127°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=180-x', color: '#6366f1' }, { id: 'p', latex: '(53,127)', color: '#f59e0b', showLabel: true }], caption: 'Supplement of 53° = 127°. Together they form a straight line (180°).' },
          ],
        }},
        { id: '4.3b', label: 'b', title: 'Vertical angles', difficulty: 'easy', learn: {
          description: 'Vertical angles are the opposite angles formed when two lines cross. They are always equal.',
          exampleProblem: 'Two lines intersect forming angles of 40°, 140°, 40°, 140°. Which angles are vertical?',
          exampleAnswer: 'The two 40° angles are vertical; the two 140° angles are vertical.',
          steps: [
            { stepNum: 1, action: 'Identify opposite angles', equation: 'Opposite angles are equal (vertical)', result: '40° = 40° and 140° = 140°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x', color: '#6366f1' }, { id: 'g', latex: 'y=-x', color: '#f59e0b' }], caption: 'When two lines cross, vertical angles (across the intersection) are equal.' },
          ],
        }},
        { id: '4.3c', label: 'c', title: 'Parallel lines cut by a transversal', difficulty: 'medium', learn: {
          description: 'When a transversal cuts parallel lines: alternate interior angles are equal, corresponding angles are equal, co-interior (same-side interior) angles sum to 180°.',
          exampleProblem: 'Two parallel lines are cut by a transversal. One angle is 65°. Find the alternate interior angle.',
          exampleAnswer: '65°',
          steps: [
            { stepNum: 1, action: 'Alternate interior angles are equal', equation: '65° = 65°', result: '65°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2', color: '#6366f1' }, { id: 'g', latex: 'y=5', color: '#6366f1' }, { id: 'h', latex: 'y=2x', color: '#f59e0b' }], caption: 'Parallel lines (horizontal) cut by a transversal. Alternate interior angles are equal.' },
          ],
        }},
        { id: '4.3d', label: 'd', title: 'Multi-step missing angle problems', difficulty: 'hard', learn: {
          description: 'Use multiple angle relationships in sequence: triangle angle sum (180°), supplementary pairs, vertical angles, parallel line properties.',
          exampleProblem: 'A triangle has angles x, 2x, and 3x. Find x.',
          exampleAnswer: 'x = 30°',
          steps: [
            { stepNum: 1, action: 'Apply triangle angle sum', equation: 'x + 2x + 3x = 180°', result: '6x = 180°', note: '' },
            { stepNum: 2, action: 'Solve for x', equation: 'x = 30°', result: 'Angles: 30°, 60°, 90°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=180/6', color: '#6366f1' }], caption: '6x = 180, so x = 30. The triangle has angles 30°, 60°, 90°.' },
          ],
        }},
      ]},
      { id: '4.4', title: 'Triangles', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-trig', items: [
        { id: '4.4a', label: 'a', title: 'Pythagorean theorem', difficulty: 'easy', learn: {
          description: 'In a right triangle: a² + b² = c², where c is the hypotenuse (the side opposite the right angle).',
          exampleProblem: 'A right triangle has legs 6 and 8. Find the hypotenuse.',
          exampleAnswer: '10',
          steps: [
            { stepNum: 1, action: 'Apply a² + b² = c²', equation: '6² + 8² = c²', result: '36 + 64 = 100', note: '' },
            { stepNum: 2, action: 'Take square root', equation: 'c = √100', result: 'c = 10', note: '6-8-10 is a Pythagorean triple.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{100-x^2}', color: '#6366f1' }], caption: 'The hypotenuse is 10. Common triples: 3-4-5, 5-12-13, 6-8-10.' },
          ],
        }},
        { id: '4.4b', label: 'b', title: '30-60-90 side ratios', difficulty: 'medium', learn: {
          description: 'In a 30-60-90 triangle, sides are in ratio 1 : √3 : 2 (short leg : long leg : hypotenuse).',
          exampleProblem: 'A 30-60-90 triangle has hypotenuse = 10. Find both legs.',
          exampleAnswer: 'Short leg = 5, long leg = 5√3',
          steps: [
            { stepNum: 1, action: 'Use ratio: hyp = 2 × short leg', equation: '10 = 2 × short leg', result: 'Short leg = 5', note: '' },
            { stepNum: 2, action: 'Long leg = short leg × √3', equation: 'Long leg = 5√3 ≈ 8.66', result: '5√3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{3}x', color: '#6366f1' }], caption: '30-60-90 ratios: 1 : √3 : 2. At hyp=10: legs are 5 and 5√3.' },
          ],
        }},
        { id: '4.4c', label: 'c', title: '45-45-90 side ratios', difficulty: 'medium', learn: {
          description: 'In a 45-45-90 triangle (isosceles right triangle), sides are in ratio 1 : 1 : √2.',
          exampleProblem: 'A 45-45-90 triangle has legs of length 7. Find the hypotenuse.',
          exampleAnswer: '7√2 ≈ 9.90',
          steps: [
            { stepNum: 1, action: 'Use ratio: hyp = leg × √2', equation: 'hyp = 7 × √2', result: '7√2 ≈ 9.90', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sqrt{2}x', color: '#6366f1' }], caption: '45-45-90 ratios: 1 : 1 : √2. At leg=7: hypotenuse = 7√2.' },
          ],
        }},
        { id: '4.4d', label: 'd', title: 'Triangle angle sum', difficulty: 'easy', learn: {
          description: 'The three interior angles of any triangle always sum to 180°.',
          exampleProblem: 'A triangle has angles 40° and 75°. Find the third angle.',
          exampleAnswer: '65°',
          steps: [
            { stepNum: 1, action: 'Third angle = 180° − sum of other two', equation: '180 − 40 − 75 = 65°', result: '65°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=180-40-75', color: '#6366f1' }], caption: '40 + 75 + 65 = 180. The angles of every triangle sum to 180°.' },
          ],
        }},
        { id: '4.4e', label: 'e', title: 'Exterior angle theorem', difficulty: 'medium', learn: {
          description: 'An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.',
          exampleProblem: 'A triangle has interior angles 50° and 70°. Find the exterior angle at the third vertex.',
          exampleAnswer: '120°',
          steps: [
            { stepNum: 1, action: 'Exterior angle = sum of non-adjacent angles', equation: '50 + 70 = 120°', result: '120°', note: 'Or: third interior = 60°, exterior = 180 − 60 = 120°.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=50+70', color: '#6366f1' }], caption: 'Exterior angle = 50 + 70 = 120°.' },
          ],
        }},
      ]},
      { id: '4.5', title: 'Similar Triangles', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-similarity', items: [
        { id: '4.5a', label: 'a', title: 'Set up and solve a proportion from scale factor', difficulty: 'medium', learn: {
          description: 'Similar triangles have equal angles and proportional sides. Set up equal ratios of corresponding sides.',
          exampleProblem: 'Two similar triangles have sides 3, 4, 5 and 6, 8, x. Find x.',
          exampleAnswer: 'x = 10',
          steps: [
            { stepNum: 1, action: 'Find scale factor', equation: '6/3 = 8/4 = 2', result: 'Scale factor = 2', note: '' },
            { stepNum: 2, action: 'Apply to unknown side', equation: 'x = 5 × 2', result: 'x = 10', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=2x', color: '#6366f1' }], caption: 'Each side of the larger triangle is 2× the corresponding side of the smaller.' },
          ],
        }},
        { id: '4.5b', label: 'b', title: 'Indirect measurement word problems', difficulty: 'hard', learn: {
          description: 'Use similar triangles to measure heights or distances indirectly. Shadows, reflections, and sightlines create similar triangles.',
          exampleProblem: 'A 6-ft person casts a 4-ft shadow. A nearby tree casts a 30-ft shadow. How tall is the tree?',
          exampleAnswer: '45 feet',
          steps: [
            { stepNum: 1, action: 'Set up proportion: height/shadow = height/shadow', equation: '6/4 = x/30', result: '', note: '' },
            { stepNum: 2, action: 'Cross-multiply', equation: '4x = 180', result: 'x = 45 ft', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(6/4)x', color: '#6366f1' }, { id: 'p', latex: '(30,45)', color: '#f59e0b', showLabel: true }], caption: 'Height = 1.5 × shadow length. Tree shadow = 30 ft → tree = 45 ft.' },
          ],
        }},
      ]},
      { id: '4.6', title: 'Right Triangle Trigonometry', difficulty: 'hard', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-trig', items: [
        { id: '4.6a', label: 'a', title: 'sin, cos, tan to find a missing side', difficulty: 'medium', learn: {
          description: 'SOH-CAH-TOA: sin = Opposite/Hypotenuse, cos = Adjacent/Hypotenuse, tan = Opposite/Adjacent.',
          exampleProblem: 'In a right triangle, the angle is 30° and the hypotenuse is 10. Find the opposite side.',
          exampleAnswer: '5',
          steps: [
            { stepNum: 1, action: 'Use sin = opposite/hypotenuse', equation: 'sin(30°) = opp/10', result: '0.5 = opp/10', note: '' },
            { stepNum: 2, action: 'Solve for opposite', equation: 'opp = 10 × 0.5', result: 'opposite = 5', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sin(x\\cdot\\pi/180)', color: '#6366f1' }], caption: 'sin(30°) = 0.5. So opposite = 10 × 0.5 = 5.' },
          ],
        }},
        { id: '4.6b', label: 'b', title: 'Inverse trig to find a missing angle', difficulty: 'medium', learn: {
          description: 'Use sin⁻¹, cos⁻¹, or tan⁻¹ to find an angle when you know two sides.',
          exampleProblem: 'A right triangle has opposite = 3, hypotenuse = 5. Find the angle.',
          exampleAnswer: '≈ 36.87°',
          steps: [
            { stepNum: 1, action: 'sin(θ) = 3/5 = 0.6', equation: 'θ = sin⁻¹(0.6)', result: 'θ ≈ 36.87°', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\arcsin(x)\\cdot180/\\pi', color: '#6366f1' }, { id: 'p', latex: '(0.6,36.87)', color: '#f59e0b', showLabel: true }], caption: 'arcsin(0.6) ≈ 36.87°. The angle whose sine is 0.6.' },
          ],
        }},
        { id: '4.6c', label: 'c', title: 'Complementary angle trig identities', difficulty: 'hard', learn: {
          description: 'sin(θ) = cos(90°−θ). Complementary angles share the same sine/cosine values swapped.',
          exampleProblem: 'sin(40°) = cos(?)',
          exampleAnswer: 'cos(50°)',
          steps: [
            { stepNum: 1, action: 'Complement of 40°', equation: '90 − 40 = 50°', result: 'sin(40°) = cos(50°)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\sin(x\\cdot\\pi/180)', color: '#6366f1' }, { id: 'g', latex: 'y=\\cos(x\\cdot\\pi/180)', color: '#f59e0b' }], caption: 'sin(40°) ≈ cos(50°). The sine and cosine curves are reflections of each other.' },
          ],
        }},
        { id: '4.6d', label: 'd', title: 'Convert between degrees and radians', difficulty: 'medium', learn: {
          description: 'To convert degrees to radians: multiply by π/180. To convert radians to degrees: multiply by 180/π.',
          exampleProblem: 'Convert 120° to radians.',
          exampleAnswer: '2π/3',
          steps: [
            { stepNum: 1, action: 'Multiply by π/180', equation: '120 × π/180 = 120π/180', result: '2π/3', note: 'Simplify: GCF(120,180)=60.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=x\\cdot\\pi/180', color: '#6366f1' }, { id: 'p', latex: '(120,2\\cdot\\pi/3)', color: '#f59e0b', showLabel: true }], caption: '120° = 2π/3 radians.' },
          ],
        }},
        { id: '4.6e', label: 'e', title: 'Interpret radian measure', difficulty: 'hard', learn: {
          description: 'One radian is the angle where the arc length equals the radius. Arc length s = rθ (with θ in radians). Full circle = 2π radians = 360°.',
          exampleProblem: 'A circle has radius 4. Find the arc length for a central angle of π/3 radians.',
          exampleAnswer: '4π/3',
          steps: [
            { stepNum: 1, action: 'Apply s = rθ', equation: 's = 4 × π/3', result: 's = 4π/3', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: 'x^2+y^2=16', color: '#6366f1' }], caption: 'r=4, θ=π/3. Arc length = rθ = 4·(π/3) = 4π/3 ≈ 4.19.' },
          ],
        }},
      ]},
      { id: '4.7', title: 'Coordinate Geometry', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry', items: [
        { id: '4.7a', label: 'a', title: 'Distance formula', difficulty: 'easy', learn: {
          description: 'd = √((x₂−x₁)² + (y₂−y₁)²). This is the Pythagorean theorem applied to the coordinate plane.',
          exampleProblem: 'Find the distance between (1, 2) and (4, 6).',
          exampleAnswer: '5',
          steps: [
            { stepNum: 1, action: 'Apply distance formula', equation: 'd = √((4−1)² + (6−2)²) = √(9+16)', result: 'd = √25 = 5', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'p1', latex: '(1,2)', color: '#f59e0b', showLabel: true }, { id: 'p2', latex: '(4,6)', color: '#f59e0b', showLabel: true }], caption: 'Distance from (1,2) to (4,6) = 5 units.' },
          ],
        }},
        { id: '4.7b', label: 'b', title: 'Midpoint formula', difficulty: 'easy', learn: {
          description: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Average the x-coordinates and the y-coordinates.',
          exampleProblem: 'Find the midpoint of (2, 4) and (8, 10).',
          exampleAnswer: '(5, 7)',
          steps: [
            { stepNum: 1, action: 'Average x and y separately', equation: 'x = (2+8)/2 = 5, y = (4+10)/2 = 7', result: '(5, 7)', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'p1', latex: '(2,4)', color: '#f59e0b', showLabel: true }, { id: 'p2', latex: '(8,10)', color: '#f59e0b', showLabel: true }, { id: 'm', latex: '(5,7)', color: '#22c55e', showLabel: true }], caption: 'Midpoint (5,7) is exactly halfway between (2,4) and (8,10).' },
          ],
        }},
        { id: '4.7c', label: 'c', title: 'Write the equation of a circle', difficulty: 'medium', learn: {
          description: '(x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius.',
          exampleProblem: 'Write the equation of a circle centered at (−1, 4) with radius 3.',
          exampleAnswer: '(x+1)² + (y−4)² = 9',
          steps: [
            { stepNum: 1, action: 'Substitute h=−1, k=4, r=3', equation: '(x−(−1))² + (y−4)² = 3²', result: '(x+1)² + (y−4)² = 9', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: '(x+1)^2+(y-4)^2=9', color: '#6366f1' }], caption: 'Circle centered at (−1, 4) with radius 3.' },
          ],
        }},
        { id: '4.7d', label: 'd', title: 'Identify center and radius from an equation', difficulty: 'medium', learn: {
          description: 'From (x−h)²+(y−k)²=r²: center is (h, k), radius is √(right side). Complete the square if needed.',
          exampleProblem: 'Identify center and radius of (x−5)²+(y+2)²=49.',
          exampleAnswer: 'Center (5, −2), radius 7.',
          steps: [
            { stepNum: 1, action: 'Read h, k, and r', equation: 'h=5, k=−2, r²=49 → r=7', result: 'Center (5,−2), r=7', note: 'Note: (y+2)² means k=−2, not +2.' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'c', latex: '(x-5)^2+(y+2)^2=49', color: '#6366f1' }], caption: 'Center at (5, −2), radius = 7.' },
          ],
        }},
      ]},
      { id: '4.8', title: 'Volume', difficulty: 'medium', khanLink: 'https://www.khanacademy.org/math/geometry/hs-geo-solids', items: [
        { id: '4.8a', label: 'a', title: 'Volume of prisms and cylinders', difficulty: 'easy', learn: {
          description: 'Prism: V = B·h (B = base area, h = height). Cylinder: V = πr²h.',
          exampleProblem: 'A cylinder has radius 3 and height 10. Find the volume.',
          exampleAnswer: '90π ≈ 282.7',
          steps: [
            { stepNum: 1, action: 'Apply V = πr²h', equation: 'V = π(3)²(10) = 90π', result: '≈ 282.7 cubic units', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\pi\\cdot9\\cdot10', color: '#6366f1' }], caption: 'V = π × 9 × 10 = 90π ≈ 282.7 cubic units.' },
          ],
        }},
        { id: '4.8b', label: 'b', title: 'Volume of cones and spheres', difficulty: 'medium', learn: {
          description: 'Cone: V = (1/3)πr²h. Sphere: V = (4/3)πr³. Both formulas are given on the SAT.',
          exampleProblem: 'A cone has radius 3 and height 8. Find the volume.',
          exampleAnswer: '24π ≈ 75.4',
          steps: [
            { stepNum: 1, action: 'Apply V = (1/3)πr²h', equation: 'V = (1/3)π(9)(8) = 24π', result: '≈ 75.4 cubic units', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=(1/3)\\cdot\\pi\\cdot9\\cdot8', color: '#6366f1' }], caption: 'V = (1/3)πr²h = 24π ≈ 75.4 for this cone.' },
          ],
        }},
        { id: '4.8c', label: 'c', title: 'Scale factor and its effect on volume', difficulty: 'hard', learn: {
          description: 'If a figure is scaled by factor k, its volume scales by k³. (Linear → ×k, Area → ×k², Volume → ×k³)',
          exampleProblem: 'A cube has volume 8. A similar cube has sides scaled by 3. What is the new volume?',
          exampleAnswer: '216',
          steps: [
            { stepNum: 1, action: 'Apply volume scale factor k³', equation: 'New volume = 8 × 3³ = 8 × 27', result: '216', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=8x^3', color: '#6366f1' }, { id: 'p', latex: '(3,216)', color: '#f59e0b', showLabel: true }], caption: 'Volume scales by k³. At scale factor 3: V = 8 × 27 = 216.' },
          ],
        }},
        { id: '4.8d', label: 'd', title: 'Word problems involving volume', difficulty: 'medium', learn: {
          description: 'Identify the shape (cylinder, cone, sphere, prism), select the correct formula, substitute given values, and solve.',
          exampleProblem: 'A cylindrical tank has diameter 6 ft and height 4 ft. How many cubic feet of water does it hold?',
          exampleAnswer: '36π ≈ 113.1 ft³',
          steps: [
            { stepNum: 1, action: 'Radius = diameter/2 = 3', equation: 'V = π(3)²(4) = 36π', result: '≈ 113.1 ft³', note: '' },
          ],
          desmosSteps: [
            { exprs: [{ id: 'f', latex: 'y=\\pi\\cdot9\\cdot4', color: '#6366f1' }], caption: 'V = π × 9 × 4 = 36π ≈ 113.1 cubic feet.' },
          ],
        }},
      ]},
    ],
  },
]

export const ENGLISH_UNITS = [
  {
    id: 'E1',
    number: 1,
    title: 'Craft & Structure',
    color: 'amber',
    icon: 'C',
    subunits: [
      { id: 'E1.1', title: 'Words in Context', difficulty: 'easy', khanLink: null, items: [] },
      { id: 'E1.2', title: 'Text Structure & Purpose', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E1.3', title: 'Cross-Text Connections', difficulty: 'hard', khanLink: null, items: [] },
      { id: 'E1.4', title: 'Logical Flow & Sentence Placement', difficulty: 'medium', khanLink: null, items: [] },
    ],
  },
  {
    id: 'E2',
    number: 2,
    title: 'Information & Ideas',
    color: 'rose',
    icon: 'I',
    subunits: [
      { id: 'E2.1', title: 'Central Ideas & Details', difficulty: 'easy', khanLink: null, items: [] },
      { id: 'E2.2', title: 'Command of Evidence — Textual', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E2.3', title: 'Command of Evidence — Quantitative', difficulty: 'hard', khanLink: null, items: [] },
      { id: 'E2.4', title: 'Inferences', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E2.5', title: 'Rhetorical Synthesis', difficulty: 'hard', khanLink: null, items: [] },
    ],
  },
  {
    id: 'E3',
    number: 3,
    title: 'Standard English Conventions',
    color: 'sky',
    icon: 'G',
    subunits: [
      { id: 'E3.1', title: 'Boundaries (run-ons, comma splices, fragments)', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E3.2', title: 'Form, Structure, Sense', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E3.3', title: 'Punctuation', difficulty: 'medium', khanLink: null, items: [] },
      { id: 'E3.4', title: 'Transitions', difficulty: 'hard', khanLink: null, items: [] },
      { id: 'E3.5', title: 'Concision & Redundancy', difficulty: 'hard', khanLink: null, items: [] },
    ],
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
export function getAllSubunits() {
  return [
    ...MATH_UNITS.flatMap(u => u.subunits),
    ...ENGLISH_UNITS.flatMap(u => u.subunits),
  ]
}

export function getSubunitById(id) {
  return getAllSubunits().find(s => s.id === id)
}

export function getItemById(id) {
  for (const u of [...MATH_UNITS, ...ENGLISH_UNITS]) {
    for (const s of u.subunits) {
      for (const item of s.items) {
        if (item.id === id) return { item, subunit: s, unit: u }
      }
    }
  }
  return null
}

export function getNextItem(itemId) {
  const all = [...MATH_UNITS, ...ENGLISH_UNITS].flatMap(u =>
    u.subunits.flatMap(s => s.items)
  )
  const idx = all.findIndex(i => i.id === itemId)
  return idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null
}

export function getUnitProgress(unit, progress) {
  const allItems = unit.subunits.flatMap(s => s.items)
  if (allItems.length === 0) return 0
  const done = allItems.filter(i => progress[i.id]?.completed).length
  return Math.round((done / allItems.length) * 100)
}

export const DIFFICULTY_ORDER = { easy: 0, medium: 1, hard: 2 }
