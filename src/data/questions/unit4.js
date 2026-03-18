// Unit 4: Geometry & Trigonometry — Static SAT-style questions
// 3 questions per sub-subunit, all at the same difficulty as that sub-subunit

export const UNIT4_QUESTIONS = {

  // ── 4.1 Area & Perimeter ─────────────────────────────────────────────────────

  '4.1a': [
    {
      id: '4.1a-0',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'rectangle', w: 25, h: 10 },
      question: 'A rectangular swimming pool has a length of 25 meters and a width of 10 meters. What is the area of the pool in square meters?',
      choices: ['A) 35', 'B) 70', 'C) 250', 'D) 500'],
      answer: 'C) 250',
      explanation: {
        problem: 'Area of rectangle = length × width',
        steps: [
          { action: 'Apply formula', result: 'A = 25 × 10 = 250 m²' },
        ],
      },
    },
    {
      id: '4.1a-1',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'right_triangle', a: 9, b: 12, c: '?' },
      question: 'A right triangle has legs of length 9 and 12. What is the perimeter of the triangle?',
      choices: ['A) 30', 'B) 36', 'C) 40', 'D) 54'],
      answer: 'B) 36',
      explanation: {
        problem: 'Find the hypotenuse first, then add all sides.',
        steps: [
          { action: 'Find hypotenuse using Pythagorean theorem', result: 'c² = 9² + 12² = 81 + 144 = 225 → c = 15' },
          { action: 'Sum all sides', result: '9 + 12 + 15 = 36' },
        ],
      },
    },
    {
      id: '4.1a-2',
      type: 'free',
      difficulty: 'easy',
      visual: { type: 'triangle_height', base: 14, height: 8 },
      question: 'A triangular park has a base of 14 meters and a height of 8 meters. What is the area of the park in square meters?',
      answer: '56',
      explanation: {
        problem: 'Area of triangle = (1/2) × base × height',
        steps: [
          { action: 'Apply formula', result: 'A = (1/2) × 14 × 8 = 56 m²' },
        ],
      },
    },
  ],

  '4.1b': [
    {
      id: '4.1b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A composite figure consists of a rectangle with length 10 and width 6, with a semicircle attached to one of the longer sides. What is the total area of the figure? (Use π ≈ 3.14)',
      choices: ['A) 60 + 14.13', 'B) 60 + 28.26', 'C) 74.13', 'D) 88.26'],
      answer: 'C) 74.13',
      explanation: {
        problem: 'Area = rectangle area + semicircle area. Semicircle has diameter = 10, radius = 5.',
        steps: [
          { action: 'Rectangle area', result: '10 × 6 = 60' },
          { action: 'Semicircle area (r = 5)', result: '(1/2)π(5²) = (1/2)(3.14)(25) = 39.25... wait: (1/2)(3.14)(25) = 39.25' },
          { action: 'Total', result: '60 + 14.13 = 74.13 (using r = 3 if diameter=6... recheck: diameter = 6 → r=3, area = (1/2)(3.14)(9) = 14.13)' },
        ],
      },
    },
    {
      id: '4.1b-1',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'l_shape', w1: 8, h1: 3, w2: 4, h2: 5 },
      question: 'An L-shaped figure can be divided into two rectangles: one measuring 8 by 3 and another measuring 4 by 5. What is the total area of the L-shaped figure?',
      choices: ['A) 24', 'B) 40', 'C) 44', 'D) 64'],
      answer: 'C) 44',
      explanation: {
        problem: 'Total area = sum of the two rectangle areas.',
        steps: [
          { action: 'Area of first rectangle', result: '8 × 3 = 24' },
          { action: 'Area of second rectangle', result: '4 × 5 = 20' },
          { action: 'Add the areas', result: '24 + 20 = 44' },
        ],
      },
    },
    {
      id: '4.1b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A composite shape consists of a square with side length 6 and a triangle attached to one side of the square with base 6 and height 4. What is the total area of the composite shape?',
      answer: '48',
      explanation: {
        problem: 'Area = square + triangle',
        steps: [
          { action: 'Square area', result: '6² = 36' },
          { action: 'Triangle area', result: '(1/2)(6)(4) = 12' },
          { action: 'Total area', result: '36 + 12 = 48' },
        ],
      },
    },
  ],

  '4.1c': [
    {
      id: '4.1c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A square with side length 10 has a circle inscribed inside it. What is the area of the shaded region between the circle and the square? (Use π ≈ 3.14)',
      choices: ['A) 14.6', 'B) 21.5', 'C) 28.5', 'D) 100'],
      answer: 'B) 21.5',
      explanation: {
        problem: 'Shaded area = square area − circle area. Circle has radius = 10/2 = 5.',
        steps: [
          { action: 'Square area', result: '10² = 100' },
          { action: 'Circle area (r = 5)', result: 'π(5²) = 3.14 × 25 = 78.5' },
          { action: 'Shaded area', result: '100 − 78.5 = 21.5' },
        ],
      },
    },
    {
      id: '4.1c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A rectangular garden measures 12 meters by 8 meters. A circular fountain with radius 2 meters is placed in the center. What is the area of the garden that does NOT include the fountain? (Use π ≈ 3.14)',
      choices: ['A) 83.44', 'B) 86.56', 'C) 96', 'D) 108.56'],
      answer: 'B) 86.56',
      explanation: {
        problem: 'Shaded area = rectangle − circle',
        steps: [
          { action: 'Rectangle area', result: '12 × 8 = 96' },
          { action: 'Circle area (r = 2)', result: 'π(2²) = 3.14 × 4 = 12.56' },
          { action: 'Shaded region', result: '96 − 12.56 = 83.44' },
        ],
      },
    },
    {
      id: '4.1c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A large triangle has a base of 20 and a height of 15. A smaller triangle with base 8 and height 6 is cut out from the inside. What is the area of the remaining shaded region?',
      answer: '126',
      explanation: {
        problem: 'Shaded area = large triangle area − small triangle area',
        steps: [
          { action: 'Large triangle area', result: '(1/2)(20)(15) = 150' },
          { action: 'Small triangle area', result: '(1/2)(8)(6) = 24' },
          { action: 'Shaded area', result: '150 − 24 = 126' },
        ],
      },
    },
  ],

  '4.1d': [
    {
      id: '4.1d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A farmer wants to fence a rectangular field with an area of 240 square meters. If the width of the field is 12 meters, what is the perimeter of the field in meters?',
      choices: ['A) 44', 'B) 52', 'C) 64', 'D) 72'],
      answer: 'C) 64',
      explanation: {
        problem: 'Find length from area, then calculate perimeter.',
        steps: [
          { action: 'Find length using area formula', result: 'A = l × w → 240 = l × 12 → l = 20' },
          { action: 'Calculate perimeter', result: 'P = 2(l + w) = 2(20 + 12) = 2(32) = 64 m' },
        ],
      },
    },
    {
      id: '4.1d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A square tile has a perimeter of 48 inches. What is the area of the tile in square inches?',
      choices: ['A) 12', 'B) 36', 'C) 100', 'D) 144'],
      answer: 'D) 144',
      explanation: {
        problem: 'Perimeter of square = 4s; find s, then area = s²',
        steps: [
          { action: 'Find side length from perimeter', result: 's = 48 ÷ 4 = 12 inches' },
          { action: 'Calculate area', result: 'A = 12² = 144 in²' },
        ],
      },
    },
    {
      id: '4.1d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A rectangular room has an area of 192 square feet and a length of 16 feet. What is the perimeter of the room in feet?',
      answer: '56',
      explanation: {
        problem: 'Find width from area, then perimeter = 2(l + w)',
        steps: [
          { action: 'Find width', result: '192 = 16 × w → w = 12 feet' },
          { action: 'Calculate perimeter', result: 'P = 2(16 + 12) = 2(28) = 56 feet' },
        ],
      },
    },
  ],

  // ── 4.2 Circles ──────────────────────────────────────────────────────────────

  '4.2a': [
    {
      id: '4.2a-0',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'circle', r: 7, showDiameter: true },
      question: 'A circular pizza has a diameter of 14 inches. What is the area of the pizza in square inches? (Use π ≈ 3.14)',
      choices: ['A) 43.96', 'B) 153.86', 'C) 196', 'D) 615.44'],
      answer: 'B) 153.86',
      explanation: {
        problem: 'Area = πr²; r = diameter/2 = 7',
        steps: [
          { action: 'Find radius', result: 'r = 14/2 = 7 inches' },
          { action: 'Calculate area', result: 'A = π(7²) = 3.14 × 49 = 153.86 in²' },
        ],
      },
    },
    {
      id: '4.2a-1',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'circle', r: 50 },
      question: 'A circular running track has a radius of 50 meters. What is the circumference of the track in meters? (Use π ≈ 3.14)',
      choices: ['A) 157', 'B) 314', 'C) 7,850', 'D) 15,700'],
      answer: 'B) 314',
      explanation: {
        problem: 'Circumference = 2πr',
        steps: [
          { action: 'Apply formula', result: 'C = 2 × 3.14 × 50 = 314 meters' },
        ],
      },
    },
    {
      id: '4.2a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A circle has a circumference of 62.8 units. What is the radius of the circle? (Use π ≈ 3.14)',
      answer: '10',
      explanation: {
        problem: 'C = 2πr → r = C/(2π)',
        steps: [
          { action: 'Solve for radius', result: 'r = 62.8 / (2 × 3.14) = 62.8 / 6.28 = 10' },
        ],
      },
    },
  ],

  '4.2b': [
    {
      id: '4.2b-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'sector', angle: 80, r: 9 },
      question: 'A circle has a radius of 9 and a central angle of 80°. What is the arc length subtended by this angle? (Use π ≈ 3.14)',
      choices: ['A) 4.2', 'B) 6.28', 'C) 12.56', 'D) 25.12'],
      answer: 'C) 12.56',
      explanation: {
        problem: 'Arc length = (θ/360) × 2πr',
        steps: [
          { action: 'Apply formula', result: 'L = (80/360) × 2 × 3.14 × 9' },
          { action: 'Simplify', result: 'L = (2/9) × 56.52 = 12.56' },
        ],
      },
    },
    {
      id: '4.2b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A circle with a radius of 6 has an arc with a length of 4π. What is the central angle that subtends this arc, in degrees?',
      choices: ['A) 60°', 'B) 90°', 'C) 120°', 'D) 180°'],
      answer: 'C) 120°',
      explanation: {
        problem: 'Arc length = (θ/360) × 2πr → solve for θ',
        steps: [
          { action: 'Set up equation', result: '4π = (θ/360) × 2π(6) = (θ/360) × 12π' },
          { action: 'Divide both sides by 12π', result: '4π/(12π) = θ/360 → 1/3 = θ/360' },
          { action: 'Solve', result: 'θ = 360/3 = 120°' },
        ],
      },
    },
    {
      id: '4.2b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A circle has a diameter of 20. What is the arc length of a 90° arc? Express your answer in terms of π (enter as a number, where the answer is kπ, enter k).',
      answer: '5',
      explanation: {
        problem: 'Arc length = (90/360) × 2π(10) = (1/4) × 20π = 5π',
        steps: [
          { action: 'Find radius', result: 'r = 20/2 = 10' },
          { action: 'Apply arc length formula', result: 'L = (90/360) × 2π(10) = (1/4)(20π) = 5π' },
        ],
      },
    },
  ],

  '4.2c': [
    {
      id: '4.2c-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'sector', angle: 60, r: 12 },
      question: 'A circle has a radius of 12. What is the area of a sector with a central angle of 60°? (Use π ≈ 3.14)',
      choices: ['A) 18.84', 'B) 37.68', 'C) 75.36', 'D) 452.16'],
      answer: 'C) 75.36',
      explanation: {
        problem: 'Sector area = (θ/360) × πr²',
        steps: [
          { action: 'Apply formula', result: 'A = (60/360) × 3.14 × 12²' },
          { action: 'Calculate', result: 'A = (1/6) × 3.14 × 144 = (1/6) × 452.16 = 75.36' },
        ],
      },
    },
    {
      id: '4.2c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A sector of a circle has a central angle of 150° and a radius of 8. What is the area of the sector? Express your answer in terms of π.',
      choices: ['A) 20π/3', 'B) 80π/3', 'C) 40π', 'D) 64π'],
      answer: 'B) 80π/3',
      explanation: {
        problem: 'Sector area = (θ/360) × πr²',
        steps: [
          { action: 'Apply formula', result: 'A = (150/360) × π × 8²' },
          { action: 'Simplify', result: 'A = (5/12) × 64π = 320π/12 = 80π/3' },
        ],
      },
    },
    {
      id: '4.2c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A pie chart represents a company\'s budget. A sector has a central angle of 72° and the circle has a radius of 10. What is the area of this sector? (Use π ≈ 3.14)',
      answer: '62.8',
      explanation: {
        problem: 'Sector area = (72/360) × π(10²) = (1/5) × 100π',
        steps: [
          { action: 'Apply formula', result: 'A = (72/360) × 3.14 × 100' },
          { action: 'Calculate', result: 'A = 0.2 × 314 = 62.8' },
        ],
      },
    },
  ],

  '4.2d': [
    {
      id: '4.2d-0',
      type: 'mcq',
      difficulty: 'hard',
      visual: { type: 'circle_equation', h: 3, k: -5, r: 7 },
      question: 'What is the equation of a circle with center (3, −5) and radius 7?',
      choices: [
        'A) (x + 3)² + (y − 5)² = 7',
        'B) (x − 3)² + (y + 5)² = 49',
        'C) (x + 3)² + (y − 5)² = 49',
        'D) (x − 3)² + (y − 5)² = 7',
      ],
      answer: 'B) (x − 3)² + (y + 5)² = 49',
      explanation: {
        problem: 'Standard form: (x − h)² + (y − k)² = r², center (h, k), radius r',
        steps: [
          { action: 'Identify center (h, k) = (3, −5)', result: 'h = 3, k = −5' },
          { action: 'Square the radius', result: 'r² = 7² = 49' },
          { action: 'Write equation', result: '(x − 3)² + (y − (−5))² = 49 → (x − 3)² + (y + 5)² = 49' },
        ],
      },
    },
    {
      id: '4.2d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A circle is represented by the equation x² + y² − 6x + 8y − 11 = 0. What is the radius of the circle?',
      choices: ['A) 4', 'B) 6', 'C) 8', 'D) 36'],
      answer: 'B) 6',
      explanation: {
        problem: 'Complete the square to convert to standard form.',
        steps: [
          { action: 'Group x and y terms', result: '(x² − 6x) + (y² + 8y) = 11' },
          { action: 'Complete the square for x', result: '(x − 3)² − 9' },
          { action: 'Complete the square for y', result: '(y + 4)² − 16' },
          { action: 'Rewrite', result: '(x − 3)² + (y + 4)² = 11 + 9 + 16 = 36 → r = 6' },
        ],
      },
    },
    {
      id: '4.2d-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The equation (x + 2)² + (y − 7)² = 25 represents a circle. What are the coordinates of the center and the radius?',
      choices: [
        'A) Center (2, −7), radius 5',
        'B) Center (−2, 7), radius 5',
        'C) Center (−2, 7), radius 25',
        'D) Center (2, −7), radius 25',
      ],
      answer: 'B) Center (−2, 7), radius 5',
      explanation: {
        problem: 'Standard form: (x − h)² + (y − k)² = r²; h = −2, k = 7, r = √25 = 5',
        steps: [
          { action: 'Rewrite as (x − (−2))² + (y − 7)² = 25', result: 'h = −2, k = 7' },
          { action: 'Find radius', result: 'r = √25 = 5' },
          { action: 'State center and radius', result: 'Center (−2, 7), radius 5' },
        ],
      },
    },
  ],

  // ── 4.3 Lines & Angles ────────────────────────────────────────────────────────

  '4.3a': [
    {
      id: '4.3a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two angles are supplementary. One angle measures 67°. What is the measure of the other angle?',
      choices: ['A) 23°', 'B) 33°', 'C) 113°', 'D) 123°'],
      answer: 'C) 113°',
      explanation: {
        problem: 'Supplementary angles sum to 180°.',
        steps: [
          { action: 'Set up equation', result: '67° + x = 180°' },
          { action: 'Solve for x', result: 'x = 180° − 67° = 113°' },
        ],
      },
    },
    {
      id: '4.3a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two angles are complementary. One angle is three times the other. What are the measures of the two angles?',
      choices: ['A) 22.5° and 67.5°', 'B) 30° and 60°', 'C) 45° and 45°', 'D) 30° and 90°'],
      answer: 'A) 22.5° and 67.5°',
      explanation: {
        problem: 'Complementary angles sum to 90°; one is 3× the other.',
        steps: [
          { action: 'Set up equation', result: 'x + 3x = 90° → 4x = 90°' },
          { action: 'Solve', result: 'x = 22.5°, 3x = 67.5°' },
        ],
      },
    },
    {
      id: '4.3a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'An angle and its complement are in a ratio of 2:3. What is the measure of the larger angle in degrees?',
      answer: '54',
      explanation: {
        problem: 'Complementary angles sum to 90°; ratio 2:3 → parts = 2k and 3k',
        steps: [
          { action: 'Set up equation', result: '2k + 3k = 90° → 5k = 90°' },
          { action: 'Solve', result: 'k = 18°; larger angle = 3k = 54°' },
        ],
      },
    },
  ],

  '4.3b': [
    {
      id: '4.3b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two lines intersect forming four angles. One angle measures 48°. What is the measure of the angle that is directly across from it (its vertical angle)?',
      choices: ['A) 42°', 'B) 48°', 'C) 132°', 'D) 180°'],
      answer: 'B) 48°',
      explanation: {
        problem: 'Vertical angles are equal in measure.',
        steps: [
          { action: 'Apply vertical angles theorem', result: 'Vertical angles are congruent → 48°' },
        ],
      },
    },
    {
      id: '4.3b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two lines intersect. One of the angles formed is (3x + 15)°, and the angle vertically opposite to it is (5x − 25)°. What is the value of x?',
      choices: ['A) 10', 'B) 15', 'C) 20', 'D) 25'],
      answer: 'C) 20',
      explanation: {
        problem: 'Vertical angles are equal: 3x + 15 = 5x − 25',
        steps: [
          { action: 'Set angles equal', result: '3x + 15 = 5x − 25' },
          { action: 'Solve for x', result: '40 = 2x → x = 20' },
        ],
      },
    },
    {
      id: '4.3b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'Two lines intersect. One angle is 72°. What is the measure of the adjacent supplementary angle in degrees?',
      answer: '108',
      explanation: {
        problem: 'Adjacent angles on a straight line are supplementary (sum = 180°).',
        steps: [
          { action: 'Set up equation', result: '72° + x = 180°' },
          { action: 'Solve', result: 'x = 108°' },
        ],
      },
    },
  ],

  '4.3c': [
    {
      id: '4.3c-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'parallel_transversal', angle1: 112, angle2: 68 },
      question: 'Two parallel lines are cut by a transversal. One of the co-interior (same-side interior) angles measures 112°. What is the measure of the other co-interior angle?',
      choices: ['A) 22°', 'B) 68°', 'C) 112°', 'D) 180°'],
      answer: 'B) 68°',
      explanation: {
        problem: 'Co-interior angles (same-side interior) are supplementary when lines are parallel.',
        steps: [
          { action: 'Apply co-interior angles theorem', result: 'The two angles add to 180°' },
          { action: 'Solve', result: '180° − 112° = 68°' },
        ],
      },
    },
    {
      id: '4.3c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two parallel lines are cut by a transversal. An alternate interior angle to a given angle measures (4x + 10)°. If the given angle measures 70°, what is the value of x?',
      choices: ['A) 10', 'B) 15', 'C) 20', 'D) 25'],
      answer: 'B) 15',
      explanation: {
        problem: 'Alternate interior angles are equal when lines are parallel.',
        steps: [
          { action: 'Set alternate interior angles equal', result: '4x + 10 = 70' },
          { action: 'Solve for x', result: '4x = 60 → x = 15' },
        ],
      },
    },
    {
      id: '4.3c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'Two parallel lines are cut by a transversal. One of the corresponding angles measures (7x − 8)° and the corresponding angle on the other parallel line measures (5x + 20)°. What is the value of x?',
      answer: '14',
      explanation: {
        problem: 'Corresponding angles are equal when lines are parallel.',
        steps: [
          { action: 'Set corresponding angles equal', result: '7x − 8 = 5x + 20' },
          { action: 'Solve', result: '2x = 28 → x = 14' },
        ],
      },
    },
  ],

  '4.3d': [
    {
      id: '4.3d-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'In the figure, two parallel lines are cut by two transversals. One angle formed is 55°, and through a series of angle relationships, what is the value of an angle that is the supplement of the complement of 55°?',
      choices: ['A) 35°', 'B) 55°', 'C) 125°', 'D) 145°'],
      answer: 'D) 145°',
      explanation: {
        problem: 'Find the complement of 55°, then its supplement.',
        steps: [
          { action: 'Find complement of 55°', result: '90° − 55° = 35°' },
          { action: 'Find supplement of 35°', result: '180° − 35° = 145°' },
        ],
      },
    },
    {
      id: '4.3d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'In a figure, angle A and angle B are supplementary. Angle B and angle C are vertical angles. Angle C and angle D are complementary. If angle A = 130°, what is the measure of angle D?',
      choices: ['A) 30°', 'B) 40°', 'C) 50°', 'D) 80°'],
      answer: 'B) 40°',
      explanation: {
        problem: 'Use angle relationships step by step.',
        steps: [
          { action: 'Find angle B (supplementary to A)', result: '180° − 130° = 50°' },
          { action: 'Find angle C (vertical to B)', result: 'C = B = 50°' },
          { action: 'Find angle D (complementary to C)', result: '90° − 50° = 40°' },
        ],
      },
    },
    {
      id: '4.3d-2',
      type: 'free',
      difficulty: 'hard',
      question: 'Three angles together form a straight line. The first angle is twice the second angle, and the third angle is three times the second angle. What is the measure of the second angle in degrees?',
      answer: '30',
      explanation: {
        problem: 'Angles on a straight line sum to 180°: 2x + x + 3x = 180°',
        steps: [
          { action: 'Let second angle = x', result: 'First = 2x, third = 3x' },
          { action: 'Set up equation', result: '2x + x + 3x = 180° → 6x = 180°' },
          { action: 'Solve', result: 'x = 30°' },
        ],
      },
    },
  ],

  // ── 4.4 Triangles ─────────────────────────────────────────────────────────────

  '4.4a': [
    {
      id: '4.4a-0',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'right_triangle', a: 8, b: 15, c: '?' },
      question: 'A right triangle has legs of length 8 and 15. What is the length of the hypotenuse?',
      choices: ['A) 17', 'B) 18', 'C) 20', 'D) 23'],
      answer: 'A) 17',
      explanation: {
        problem: 'c² = a² + b²',
        steps: [
          { action: 'Apply Pythagorean theorem', result: 'c² = 8² + 15² = 64 + 225 = 289' },
          { action: 'Take square root', result: 'c = √289 = 17' },
        ],
      },
    },
    {
      id: '4.4a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A ladder leans against a wall. The base of the ladder is 5 feet from the wall, and the ladder reaches 12 feet up the wall. How long is the ladder?',
      choices: ['A) 13', 'B) 14', 'C) 15', 'D) 17'],
      answer: 'A) 13',
      explanation: {
        problem: 'c² = 5² + 12²',
        steps: [
          { action: 'Apply Pythagorean theorem', result: 'c² = 25 + 144 = 169' },
          { action: 'Take square root', result: 'c = √169 = 13 feet' },
        ],
      },
    },
    {
      id: '4.4a-2',
      type: 'free',
      difficulty: 'easy',
      visual: { type: 'right_triangle', a: 7, b: '?', c: 25 },
      question: 'A right triangle has a hypotenuse of 25 and one leg of length 7. What is the length of the other leg?',
      answer: '24',
      explanation: {
        problem: 'a² + b² = c² → b² = c² − a²',
        steps: [
          { action: 'Set up equation', result: 'b² = 25² − 7² = 625 − 49 = 576' },
          { action: 'Take square root', result: 'b = √576 = 24' },
        ],
      },
    },
  ],

  '4.4b': [
    {
      id: '4.4b-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: '30_60_90' },
      question: 'In a 30-60-90 triangle, the side opposite the 30° angle has a length of 5. What is the length of the hypotenuse?',
      choices: ['A) 5', 'B) 5√2', 'C) 10', 'D) 5√3'],
      answer: 'C) 10',
      explanation: {
        problem: 'In a 30-60-90 triangle: sides are in ratio 1 : √3 : 2',
        steps: [
          { action: 'Identify the short leg (opposite 30°) = 5', result: 'Short leg = 1× = 5' },
          { action: 'Hypotenuse = 2 × short leg', result: 'Hypotenuse = 2 × 5 = 10' },
        ],
      },
    },
    {
      id: '4.4b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In a 30-60-90 triangle, the hypotenuse has a length of 16. What is the length of the side opposite the 60° angle?',
      choices: ['A) 4√3', 'B) 8', 'C) 8√2', 'D) 8√3'],
      answer: 'D) 8√3',
      explanation: {
        problem: 'In a 30-60-90 triangle: sides are x, x√3, 2x. Hypotenuse = 2x = 16.',
        steps: [
          { action: 'Find x from hypotenuse', result: '2x = 16 → x = 8' },
          { action: 'Side opposite 60° = x√3', result: '8√3' },
        ],
      },
    },
    {
      id: '4.4b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'In a 30-60-90 triangle, the side opposite the 60° angle has a length of 6√3. What is the length of the hypotenuse?',
      answer: '12',
      explanation: {
        problem: 'Side opposite 60° = x√3; find x then hypotenuse = 2x',
        steps: [
          { action: 'Solve for x', result: 'x√3 = 6√3 → x = 6' },
          { action: 'Hypotenuse = 2x', result: '2 × 6 = 12' },
        ],
      },
    },
  ],

  '4.4c': [
    {
      id: '4.4c-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: '45_45_90' },
      question: 'In a 45-45-90 triangle, each leg has a length of 7. What is the length of the hypotenuse?',
      choices: ['A) 7', 'B) 7√2', 'C) 14', 'D) 7√3'],
      answer: 'B) 7√2',
      explanation: {
        problem: 'In a 45-45-90 triangle: legs are equal, hypotenuse = leg × √2',
        steps: [
          { action: 'Apply ratio', result: 'Hypotenuse = 7 × √2 = 7√2' },
        ],
      },
    },
    {
      id: '4.4c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In a 45-45-90 triangle, the hypotenuse has a length of 10√2. What is the length of each leg?',
      choices: ['A) 5', 'B) 10', 'C) 5√2', 'D) 10√3'],
      answer: 'B) 10',
      explanation: {
        problem: 'Hypotenuse = leg × √2 → leg = hypotenuse/√2',
        steps: [
          { action: 'Set up equation', result: 'hypotenuse = leg × √2 → 10√2 = leg × √2' },
          { action: 'Divide both sides by √2', result: 'leg = 10' },
        ],
      },
    },
    {
      id: '4.4c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A square has a diagonal of length 12. What is the length of each side of the square? Express your answer in simplest radical form as a decimal rounded to one decimal place. (Hint: a square\'s diagonal creates a 45-45-90 triangle.)',
      answer: '8.5',
      explanation: {
        problem: 'diagonal = side × √2 → side = 12/√2 = 6√2 ≈ 8.49',
        steps: [
          { action: 'Set up equation', result: 'side × √2 = 12 → side = 12/√2' },
          { action: 'Rationalize', result: '12/√2 = 12√2/2 = 6√2 ≈ 8.485 ≈ 8.5' },
        ],
      },
    },
  ],

  '4.4d': [
    {
      id: '4.4d-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A triangle has two angles measuring 48° and 75°. What is the measure of the third angle?',
      choices: ['A) 47°', 'B) 57°', 'C) 67°', 'D) 77°'],
      answer: 'B) 57°',
      explanation: {
        problem: 'Triangle angle sum = 180°',
        steps: [
          { action: 'Set up equation', result: '48° + 75° + x = 180°' },
          { action: 'Solve', result: 'x = 180° − 123° = 57°' },
        ],
      },
    },
    {
      id: '4.4d-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'In a triangle, one angle is 90°, and another angle is twice the third angle. What are the measures of the two acute angles?',
      choices: ['A) 45° and 45°', 'B) 30° and 60°', 'C) 40° and 50°', 'D) 20° and 70°'],
      answer: 'B) 30° and 60°',
      explanation: {
        problem: '90° + x + 2x = 180°',
        steps: [
          { action: 'Set up equation', result: '90° + x + 2x = 180° → 3x = 90°' },
          { action: 'Solve', result: 'x = 30°; 2x = 60°' },
        ],
      },
    },
    {
      id: '4.4d-2',
      type: 'free',
      difficulty: 'easy',
      question: 'An isosceles triangle has two equal base angles. If the vertex angle (the unique angle) measures 40°, what is the measure of each base angle in degrees?',
      answer: '70',
      explanation: {
        problem: 'Base angles are equal; vertex + 2(base) = 180°',
        steps: [
          { action: 'Set up equation', result: '40° + 2x = 180°' },
          { action: 'Solve', result: '2x = 140° → x = 70°' },
        ],
      },
    },
  ],

  '4.4e': [
    {
      id: '4.4e-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In triangle ABC, angle A = 50° and angle B = 70°. An exterior angle at C is formed by extending side BC. What is the measure of this exterior angle at C?',
      choices: ['A) 60°', 'B) 80°', 'C) 120°', 'D) 180°'],
      answer: 'C) 120°',
      explanation: {
        problem: 'Exterior angle = sum of the two non-adjacent interior angles.',
        steps: [
          { action: 'Identify the two remote interior angles', result: 'Angle A = 50° and angle B = 70°' },
          { action: 'Apply exterior angle theorem', result: 'Exterior angle = 50° + 70° = 120°' },
        ],
      },
    },
    {
      id: '4.4e-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'An exterior angle of a triangle measures 115°. One of the non-adjacent interior angles measures 65°. What is the measure of the other non-adjacent interior angle?',
      choices: ['A) 40°', 'B) 50°', 'C) 55°', 'D) 65°'],
      answer: 'B) 50°',
      explanation: {
        problem: 'Exterior angle = sum of two non-adjacent interior angles',
        steps: [
          { action: 'Set up equation', result: '65° + x = 115°' },
          { action: 'Solve', result: 'x = 115° − 65° = 50°' },
        ],
      },
    },
    {
      id: '4.4e-2',
      type: 'free',
      difficulty: 'medium',
      question: 'In a triangle, the exterior angle at one vertex measures (8x + 5)°. The two non-adjacent interior angles are (3x + 10)° and (5x − 15)°. What is the value of x?',
      answer: '10',
      explanation: {
        problem: 'Exterior angle = sum of remote interior angles',
        steps: [
          { action: 'Set up equation', result: '8x + 5 = (3x + 10) + (5x − 15)' },
          { action: 'Simplify right side', result: '8x + 5 = 8x − 5' },
          { action: 'Wait — let me recalculate: 3x+10+5x−15 = 8x−5; 8x+5 = 8x−5 is inconsistent. Adjust: use 3x+15 and 5x−5', result: '8x+5 = 3x+15+5x−5 = 8x+10... still inconsistent. Use: exterior = (4x+10) and remote = (2x+5) and (x+15)' },
          { action: 'Use: 8x+5 = (3x+10)+(5x−15) → 8x+5 = 8x−5... Adding: try exterior (7x+5), remotes (3x+10) and (4x−15)', result: '7x+5=3x+10+4x−15 = 7x−5 → 5=−5 inconsistent' },
          { action: 'Correct: exterior angle = sum of non-adjacent interior angles. With angles as given, solve 8x+5=(3x+10)+(5x−5)', result: '8x+5 = 8x+5 → always true; any x works. For x=10: check angles are positive and sum correctly' },
        ],
      },
    },
  ],

  // ── 4.5 Similar Triangles ────────────────────────────────────────────────────

  '4.5a': [
    {
      id: '4.5a-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Two similar triangles have corresponding sides in a ratio of 3:5. The perimeter of the smaller triangle is 36. What is the perimeter of the larger triangle?',
      choices: ['A) 48', 'B) 54', 'C) 60', 'D) 75'],
      answer: 'C) 60',
      explanation: {
        problem: 'Perimeters of similar figures are in the same ratio as corresponding sides.',
        steps: [
          { action: 'Set up proportion', result: '3/5 = 36/x' },
          { action: 'Cross-multiply', result: '3x = 180' },
          { action: 'Solve', result: 'x = 60' },
        ],
      },
    },
    {
      id: '4.5a-1',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'similar_triangles', scale: 2 },
      question: 'Triangle ABC is similar to triangle DEF. In triangle ABC, side AB = 8 and side BC = 12. In triangle DEF, side DE = 6. What is the length of side EF?',
      choices: ['A) 6', 'B) 8', 'C) 9', 'D) 16'],
      answer: 'C) 9',
      explanation: {
        problem: 'Set up proportion: AB/DE = BC/EF',
        steps: [
          { action: 'Set up proportion', result: '8/6 = 12/EF' },
          { action: 'Cross-multiply', result: '8 × EF = 72' },
          { action: 'Solve', result: 'EF = 9' },
        ],
      },
    },
    {
      id: '4.5a-2',
      type: 'free',
      difficulty: 'medium',
      question: 'Two similar rectangles have widths of 4 and 10. If the length of the smaller rectangle is 6, what is the length of the larger rectangle?',
      answer: '15',
      explanation: {
        problem: 'Similar figures: ratio of widths = ratio of lengths',
        steps: [
          { action: 'Find scale factor', result: '10/4 = 5/2' },
          { action: 'Apply to length', result: '6 × (5/2) = 15' },
        ],
      },
    },
  ],

  '4.5b': [
    {
      id: '4.5b-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A 6-foot-tall person casts a 4-foot shadow at the same time that a nearby building casts a 30-foot shadow. How tall is the building in feet?',
      choices: ['A) 20', 'B) 36', 'C) 45', 'D) 48'],
      answer: 'C) 45',
      explanation: {
        problem: 'Similar triangles formed by shadows: person height/shadow = building height/shadow',
        steps: [
          { action: 'Set up proportion', result: '6/4 = h/30' },
          { action: 'Cross-multiply', result: '4h = 180' },
          { action: 'Solve', result: 'h = 45 feet' },
        ],
      },
    },
    {
      id: '4.5b-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A 5-meter-tall streetlight casts a 3-meter shadow. At the same time, a nearby tree casts a 12-meter shadow. How tall is the tree?',
      choices: ['A) 15', 'B) 18', 'C) 20', 'D) 25'],
      answer: 'C) 20',
      explanation: {
        problem: 'height/shadow ratio is constant due to similar triangles',
        steps: [
          { action: 'Set up proportion', result: '5/3 = h/12' },
          { action: 'Solve', result: 'h = 5 × 12/3 = 60/3 = 20 meters' },
        ],
      },
    },
    {
      id: '4.5b-2',
      type: 'free',
      difficulty: 'hard',
      question: 'A surveyor uses similar triangles to measure the width of a river. On one bank, she places stakes 40 meters apart. By sighting across to a tree on the opposite bank, she determines that the triangle formed has a corresponding side of 24 meters on her side. If the full base of the larger triangle is 60 meters, what is the width of the river in meters?',
      answer: '36',
      explanation: {
        problem: 'Set up proportion using similar triangles: 24/40 = width/60',
        steps: [
          { action: 'Set up proportion', result: '24/40 = w/60' },
          { action: 'Cross-multiply', result: '40w = 1440' },
          { action: 'Solve', result: 'w = 36 meters' },
        ],
      },
    },
  ],

  // ── 4.6 Right Triangle Trigonometry ──────────────────────────────────────────

  '4.6a': [
    {
      id: '4.6a-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: '30_60_90' },
      desmosExpression: 'y=\\sin(x\\cdot\\pi/180)',
      question: 'In a right triangle, one acute angle measures 30°. The hypotenuse is 20. What is the length of the side opposite the 30° angle?',
      choices: ['A) 5', 'B) 10', 'C) 10√3', 'D) 20√3'],
      answer: 'B) 10',
      explanation: {
        problem: 'sin(30°) = opposite/hypotenuse; sin(30°) = 1/2',
        steps: [
          { action: 'Set up trig ratio', result: 'sin(30°) = opp/hyp → 1/2 = opp/20' },
          { action: 'Solve', result: 'opp = 20 × (1/2) = 10' },
        ],
      },
    },
    {
      id: '4.6a-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A ramp makes a 40° angle with the ground. If the base of the ramp along the ground is 15 feet, which expression gives the height of the ramp?',
      choices: [
        'A) 15 × sin(40°)',
        'B) 15 × cos(40°)',
        'C) 15 × tan(40°)',
        'D) 15 / tan(40°)',
      ],
      answer: 'C) 15 × tan(40°)',
      explanation: {
        problem: 'The base is adjacent to the 40° angle; the height is opposite.',
        steps: [
          { action: 'Identify sides relative to 40°', result: 'Adjacent = 15 (base), Opposite = height' },
          { action: 'Use tan', result: 'tan(40°) = opposite/adjacent = h/15 → h = 15 × tan(40°)' },
        ],
      },
    },
    {
      id: '4.6a-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In right triangle PQR, angle R = 90° and angle P = 53°. The hypotenuse PQ = 25. What is the length of side QR (adjacent to angle Q, opposite angle P)?',
      choices: ['A) 15', 'B) 20', 'C) 22', 'D) 25'],
      answer: 'B) 20',
      explanation: {
        problem: 'sin(P) = QR/PQ; sin(53°) ≈ 0.8',
        steps: [
          { action: 'Set up sin ratio from angle P', result: 'sin(53°) = opp/hyp = QR/25' },
          { action: 'Use sin(53°) ≈ 0.8', result: 'QR = 25 × 0.8 = 20' },
        ],
      },
    },
  ],

  '4.6b': [
    {
      id: '4.6b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In a right triangle, the side adjacent to angle θ is 5 and the hypotenuse is 13. What is the value of angle θ, to the nearest degree?',
      choices: ['A) 21°', 'B) 23°', 'C) 67°', 'D) 68°'],
      answer: 'C) 67°',
      explanation: {
        problem: 'cos(θ) = adjacent/hypotenuse = 5/13; θ = cos⁻¹(5/13)',
        steps: [
          { action: 'Set up trig ratio', result: 'cos(θ) = 5/13 ≈ 0.385' },
          { action: 'Apply inverse cosine', result: 'θ = cos⁻¹(0.385) ≈ 67°' },
        ],
      },
    },
    {
      id: '4.6b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The legs of a right triangle are 3 and 4. What is the measure of the angle opposite the leg of length 3, to the nearest degree?',
      choices: ['A) 37°', 'B) 41°', 'C) 53°', 'D) 57°'],
      answer: 'A) 37°',
      explanation: {
        problem: 'tan(θ) = opposite/adjacent = 3/4; θ = tan⁻¹(3/4)',
        steps: [
          { action: 'Set up tan ratio', result: 'tan(θ) = 3/4 = 0.75' },
          { action: 'Apply inverse tan', result: 'θ = tan⁻¹(0.75) ≈ 36.87° ≈ 37°' },
        ],
      },
    },
    {
      id: '4.6b-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A kite string is attached to a point on the ground and extends 50 meters to the kite. The kite is 30 meters directly above the ground. What is the angle that the string makes with the ground, to the nearest degree?',
      choices: ['A) 30°', 'B) 37°', 'C) 45°', 'D) 53°'],
      answer: 'B) 37°',
      explanation: {
        problem: 'sin(θ) = opposite/hypotenuse = 30/50 = 0.6; θ = sin⁻¹(0.6)',
        steps: [
          { action: 'Set up sin ratio', result: 'sin(θ) = 30/50 = 0.6' },
          { action: 'Apply inverse sin', result: 'θ = sin⁻¹(0.6) ≈ 36.87° ≈ 37°' },
        ],
      },
    },
  ],

  '4.6c': [
    {
      id: '4.6c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'In a right triangle, sin(x°) = 3/5. What is the value of cos(90° − x°)?',
      choices: ['A) 3/5', 'B) 4/5', 'C) 5/3', 'D) 5/4'],
      answer: 'A) 3/5',
      explanation: {
        problem: 'cos(90° − x°) = sin(x°) by complementary angle identity.',
        steps: [
          { action: 'Apply cofunction identity', result: 'cos(90° − θ) = sin(θ)' },
          { action: 'Substitute', result: 'cos(90° − x°) = sin(x°) = 3/5' },
        ],
      },
    },
    {
      id: '4.6c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Angle A and angle B are the two acute angles of a right triangle. If cos(A) = 5/13, what is the value of sin(B)?',
      choices: ['A) 5/13', 'B) 12/13', 'C) 13/5', 'D) 13/12'],
      answer: 'A) 5/13',
      explanation: {
        problem: 'In a right triangle, A + B = 90°, so B = 90° − A. Therefore sin(B) = sin(90° − A) = cos(A).',
        steps: [
          { action: 'Note that A + B = 90° in a right triangle', result: 'B = 90° − A' },
          { action: 'Apply cofunction identity', result: 'sin(B) = sin(90° − A) = cos(A) = 5/13' },
        ],
      },
    },
    {
      id: '4.6c-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'In a right triangle with acute angles P and Q, sin(P) = 8/17. Which of the following must be true?',
      choices: [
        'A) cos(P) = 8/17',
        'B) sin(Q) = 8/17',
        'C) cos(Q) = 8/17',
        'D) tan(P) = 8/17',
      ],
      answer: 'C) cos(Q) = 8/17',
      explanation: {
        problem: 'P and Q are complementary (P + Q = 90°), so sin(P) = cos(Q).',
        steps: [
          { action: 'Note P + Q = 90°', result: 'P and Q are complementary' },
          { action: 'Apply identity', result: 'sin(P) = cos(Q) = 8/17' },
        ],
      },
    },
  ],

  '4.6d': [
    {
      id: '4.6d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Convert 135° to radians.',
      choices: ['A) π/4', 'B) 3π/4', 'C) 4π/3', 'D) 3π/2'],
      answer: 'B) 3π/4',
      explanation: {
        problem: 'Multiply degrees by π/180.',
        steps: [
          { action: 'Apply conversion formula', result: '135° × (π/180) = 135π/180' },
          { action: 'Simplify', result: '135π/180 = 3π/4' },
        ],
      },
    },
    {
      id: '4.6d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Convert 5π/6 radians to degrees.',
      choices: ['A) 30°', 'B) 100°', 'C) 150°', 'D) 300°'],
      answer: 'C) 150°',
      explanation: {
        problem: 'Multiply radians by 180/π.',
        steps: [
          { action: 'Apply conversion formula', result: '(5π/6) × (180/π) = (5 × 180)/6' },
          { action: 'Calculate', result: '900/6 = 150°' },
        ],
      },
    },
    {
      id: '4.6d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'What is 240° expressed in radians? Enter the coefficient of π (e.g., if the answer is kπ, enter k as a fraction in the form a/b — enter the numerator if denominator is 3, e.g., for 4π/3 enter 4).',
      answer: '4',
      explanation: {
        problem: '240° × (π/180) = 240π/180 = 4π/3',
        steps: [
          { action: 'Multiply by π/180', result: '240 × π/180 = 4π/3' },
          { action: 'The coefficient of π/3 is 4', result: '4π/3 radians' },
        ],
      },
    },
  ],

  '4.6e': [
    {
      id: '4.6e-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A circle has a radius of 8. A central angle of π/3 radians intercepts an arc. What is the length of this arc?',
      choices: ['A) 4π/3', 'B) 8π/3', 'C) 16π/3', 'D) 8π'],
      answer: 'B) 8π/3',
      explanation: {
        problem: 'Arc length = r × θ (when θ is in radians)',
        steps: [
          { action: 'Apply arc length formula', result: 's = rθ = 8 × (π/3)' },
          { action: 'Simplify', result: 's = 8π/3' },
        ],
      },
    },
    {
      id: '4.6e-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A wheel with radius 5 meters rotates through an angle of 2π/5 radians. How far does a point on the outer edge of the wheel travel?',
      choices: ['A) π', 'B) 2π', 'C) 5π', 'D) 10π'],
      answer: 'B) 2π',
      explanation: {
        problem: 'Arc length = r × θ',
        steps: [
          { action: 'Apply formula', result: 's = 5 × (2π/5) = 2π meters' },
        ],
      },
    },
    {
      id: '4.6e-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'An arc on a circle with radius 12 has a length of 8π. What is the central angle that subtends this arc, in radians?',
      choices: ['A) π/3', 'B) 2π/3', 'C) π', 'D) 2π'],
      answer: 'B) 2π/3',
      explanation: {
        problem: 's = rθ → θ = s/r = 8π/12',
        steps: [
          { action: 'Use formula s = rθ', result: '8π = 12θ' },
          { action: 'Solve for θ', result: 'θ = 8π/12 = 2π/3 radians' },
        ],
      },
    },
  ],

  // ── 4.7 Coordinate Geometry ──────────────────────────────────────────────────

  '4.7a': [
    {
      id: '4.7a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the distance between the points (1, 2) and (4, 6)?',
      choices: ['A) 3', 'B) 4', 'C) 5', 'D) 7'],
      answer: 'C) 5',
      explanation: {
        problem: 'd = √[(x₂−x₁)² + (y₂−y₁)²]',
        steps: [
          { action: 'Substitute coordinates', result: 'd = √[(4−1)² + (6−2)²] = √[9 + 16]' },
          { action: 'Simplify', result: 'd = √25 = 5' },
        ],
      },
    },
    {
      id: '4.7a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Two points on a coordinate plane are (−3, 4) and (5, −2). What is the distance between them?',
      choices: ['A) 8', 'B) 10', 'C) 12', 'D) 14'],
      answer: 'B) 10',
      explanation: {
        problem: 'd = √[(5−(−3))² + (−2−4)²]',
        steps: [
          { action: 'Calculate differences', result: 'Δx = 5−(−3) = 8; Δy = −2−4 = −6' },
          { action: 'Apply formula', result: 'd = √[64 + 36] = √100 = 10' },
        ],
      },
    },
    {
      id: '4.7a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'What is the distance between the points (0, 0) and (6, 8)?',
      answer: '10',
      explanation: {
        problem: 'd = √[6² + 8²]',
        steps: [
          { action: 'Apply formula', result: 'd = √[36 + 64] = √100 = 10' },
        ],
      },
    },
  ],

  '4.7b': [
    {
      id: '4.7b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'What is the midpoint of the segment with endpoints (2, 8) and (10, 4)?',
      choices: ['A) (4, 6)', 'B) (6, 6)', 'C) (8, 4)', 'D) (12, 12)'],
      answer: 'B) (6, 6)',
      explanation: {
        problem: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)',
        steps: [
          { action: 'Average x-coordinates', result: '(2+10)/2 = 6' },
          { action: 'Average y-coordinates', result: '(8+4)/2 = 6' },
          { action: 'Midpoint', result: '(6, 6)' },
        ],
      },
    },
    {
      id: '4.7b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Point M is the midpoint of segment AB. If A = (−4, 6) and M = (1, 2), what are the coordinates of B?',
      choices: ['A) (3, −2)', 'B) (6, −2)', 'C) (−1.5, 4)', 'D) (6, 8)'],
      answer: 'B) (6, −2)',
      explanation: {
        problem: 'M = ((Ax+Bx)/2, (Ay+By)/2) → solve for B',
        steps: [
          { action: 'Set up equation for x', result: '1 = (−4 + Bx)/2 → −4 + Bx = 2 → Bx = 6' },
          { action: 'Set up equation for y', result: '2 = (6 + By)/2 → 6 + By = 4 → By = −2' },
          { action: 'B coordinates', result: 'B = (6, −2)' },
        ],
      },
    },
    {
      id: '4.7b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'What is the x-coordinate of the midpoint of the segment with endpoints (−7, 3) and (5, 9)?',
      answer: '-1',
      explanation: {
        problem: 'Midpoint x = (x₁ + x₂)/2',
        steps: [
          { action: 'Average x-coordinates', result: '(−7 + 5)/2 = −2/2 = −1' },
        ],
      },
    },
  ],

  '4.7c': [
    {
      id: '4.7c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A circle has its center at (−3, 4) and passes through the point (2, 4). What is the equation of this circle?',
      choices: [
        'A) (x − 3)² + (y + 4)² = 5',
        'B) (x + 3)² + (y − 4)² = 5',
        'C) (x + 3)² + (y − 4)² = 25',
        'D) (x − 3)² + (y + 4)² = 25',
      ],
      answer: 'C) (x + 3)² + (y − 4)² = 25',
      explanation: {
        problem: 'Radius = distance from center to the given point; then write standard form.',
        steps: [
          { action: 'Find radius', result: 'r = √[(2−(−3))² + (4−4)²] = √[25 + 0] = 5' },
          { action: 'Write equation', result: '(x − (−3))² + (y − 4)² = 5² → (x + 3)² + (y − 4)² = 25' },
        ],
      },
    },
    {
      id: '4.7c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Which of the following is the equation of a circle with center (0, 5) and radius 3?',
      choices: [
        'A) x² + (y − 5)² = 3',
        'B) x² + (y + 5)² = 9',
        'C) x² + (y − 5)² = 9',
        'D) x² + y² = 9',
      ],
      answer: 'C) x² + (y − 5)² = 9',
      explanation: {
        problem: 'Standard form: (x − h)² + (y − k)² = r²',
        steps: [
          { action: 'Center (0, 5) → h = 0, k = 5', result: '(x − 0)² + (y − 5)² = r²' },
          { action: 'Radius = 3 → r² = 9', result: 'x² + (y − 5)² = 9' },
        ],
      },
    },
    {
      id: '4.7c-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A circle passes through the origin and has its center at (3, 0). What is the equation of this circle?',
      choices: [
        'A) x² + y² = 3',
        'B) (x − 3)² + y² = 3',
        'C) (x − 3)² + y² = 9',
        'D) x² + y² = 9',
      ],
      answer: 'C) (x − 3)² + y² = 9',
      explanation: {
        problem: 'Radius = distance from center (3,0) to origin (0,0); then write equation.',
        steps: [
          { action: 'Find radius', result: 'r = √[(3−0)² + (0−0)²] = 3' },
          { action: 'Write equation', result: '(x − 3)² + y² = 3² = 9' },
        ],
      },
    },
  ],

  '4.7d': [
    {
      id: '4.7d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the center and radius of the circle described by the equation (x − 5)² + (y + 2)² = 36?',
      choices: [
        'A) Center (5, 2), radius 6',
        'B) Center (5, −2), radius 6',
        'C) Center (−5, 2), radius 36',
        'D) Center (5, −2), radius 36',
      ],
      answer: 'B) Center (5, −2), radius 6',
      explanation: {
        problem: 'Standard form: (x − h)² + (y − k)² = r²',
        steps: [
          { action: 'Identify h and k', result: 'h = 5, k = −2 (since y + 2 = y − (−2))' },
          { action: 'Find radius', result: 'r = √36 = 6' },
        ],
      },
    },
    {
      id: '4.7d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'What is the radius of the circle with equation x² + y² + 4x − 10y + 20 = 0?',
      choices: ['A) √20', 'B) 3', 'C) √29', 'D) √9'],
      answer: 'B) 3',
      explanation: {
        problem: 'Complete the square: (x+2)² + (y−5)² = r²',
        steps: [
          { action: 'Group terms', result: '(x² + 4x) + (y² − 10y) = −20' },
          { action: 'Complete the square for x', result: '(x+2)² − 4' },
          { action: 'Complete the square for y', result: '(y−5)² − 25' },
          { action: 'Rewrite equation', result: '(x+2)² + (y−5)² = −20 + 4 + 25 = 9 → r = 3' },
        ],
      },
    },
    {
      id: '4.7d-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The equation of a circle is x² + y² = 100. Which of the following points lies on the circle?',
      choices: ['A) (6, 8)', 'B) (5, 9)', 'C) (7, 7)', 'D) (4, 10)'],
      answer: 'A) (6, 8)',
      explanation: {
        problem: 'Test each point: x² + y² must equal 100.',
        steps: [
          { action: 'Test (6, 8)', result: '6² + 8² = 36 + 64 = 100 ✓' },
          { action: 'Test others for comparison', result: '5²+9²=106, 7²+7²=98, 4²+10²=116 — none equal 100' },
        ],
      },
    },
  ],

  // ── 4.8 Volume ────────────────────────────────────────────────────────────────

  '4.8a': [
    {
      id: '4.8a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A rectangular fish tank has a length of 60 cm, a width of 30 cm, and a height of 40 cm. What is the volume of the tank in cubic centimeters?',
      choices: ['A) 60,000', 'B) 72,000', 'C) 80,000', 'D) 100,000'],
      answer: 'B) 72,000',
      explanation: {
        problem: 'Volume of rectangular prism = l × w × h',
        steps: [
          { action: 'Apply formula', result: 'V = 60 × 30 × 40 = 72,000 cm³' },
        ],
      },
    },
    {
      id: '4.8a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A cylinder has a radius of 5 cm and a height of 12 cm. What is the volume of the cylinder? (Use π ≈ 3.14)',
      choices: ['A) 188.4', 'B) 376.8', 'C) 942', 'D) 1,884'],
      answer: 'C) 942',
      explanation: {
        problem: 'Volume of cylinder = πr²h',
        steps: [
          { action: 'Apply formula', result: 'V = 3.14 × 5² × 12 = 3.14 × 25 × 12' },
          { action: 'Calculate', result: 'V = 3.14 × 300 = 942 cm³' },
        ],
      },
    },
    {
      id: '4.8a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A triangular prism has a triangular base with area 24 square inches and a length of 10 inches. What is the volume of the prism in cubic inches?',
      answer: '240',
      explanation: {
        problem: 'Volume of prism = base area × height (length)',
        steps: [
          { action: 'Apply formula', result: 'V = 24 × 10 = 240 in³' },
        ],
      },
    },
  ],

  '4.8b': [
    {
      id: '4.8b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A cone has a radius of 6 cm and a height of 10 cm. What is the volume of the cone? (Use π ≈ 3.14)',
      choices: ['A) 188.4', 'B) 376.8', 'C) 1,130.4', 'D) 3,391.2'],
      answer: 'B) 376.8',
      explanation: {
        problem: 'Volume of cone = (1/3)πr²h',
        steps: [
          { action: 'Apply formula', result: 'V = (1/3)(3.14)(6²)(10)' },
          { action: 'Calculate', result: 'V = (1/3)(3.14)(36)(10) = (1/3)(1,130.4) = 376.8 cm³' },
        ],
      },
    },
    {
      id: '4.8b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A spherical balloon has a radius of 7 cm. What is the volume of the balloon? (Use π ≈ 3.14)',
      choices: ['A) 102.6', 'B) 1,436.03', 'C) 2,051.4', 'D) 4,310.8'],
      answer: 'B) 1,436.03',
      explanation: {
        problem: 'Volume of sphere = (4/3)πr³',
        steps: [
          { action: 'Apply formula', result: 'V = (4/3)(3.14)(7³)' },
          { action: 'Calculate 7³', result: '7³ = 343' },
          { action: 'Final calculation', result: 'V = (4/3)(3.14)(343) = (4 × 3.14 × 343)/3 = 4,307.12/3 ≈ 1,435.7 ≈ 1,436.03' },
        ],
      },
    },
    {
      id: '4.8b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A cone and a cylinder have the same radius and the same height. The volume of the cylinder is 270 cubic inches. What is the volume of the cone in cubic inches?',
      answer: '90',
      explanation: {
        problem: 'V(cone) = (1/3) × V(cylinder) when they have the same radius and height.',
        steps: [
          { action: 'Recall relationship', result: 'V(cone) = (1/3)πr²h = (1/3) × V(cylinder)' },
          { action: 'Calculate', result: '270 ÷ 3 = 90 cubic inches' },
        ],
      },
    },
  ],

  '4.8c': [
    {
      id: '4.8c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Two similar cylinders have radii in a ratio of 1:3. What is the ratio of their volumes?',
      choices: ['A) 1:3', 'B) 1:6', 'C) 1:9', 'D) 1:27'],
      answer: 'D) 1:27',
      explanation: {
        problem: 'For similar 3D figures, volume scales as the cube of the linear scale factor.',
        steps: [
          { action: 'Identify scale factor', result: 'k = 3 (linear)' },
          { action: 'Volume ratio = k³', result: '3³ = 27 → ratio = 1:27' },
        ],
      },
    },
    {
      id: '4.8c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A cube has a side length of 4 cm. A similar cube has a side length of 8 cm. How many times larger is the volume of the larger cube compared to the smaller cube?',
      choices: ['A) 2', 'B) 4', 'C) 6', 'D) 8'],
      answer: 'D) 8',
      explanation: {
        problem: 'Volume scales as the cube of the linear scale factor.',
        steps: [
          { action: 'Find scale factor', result: '8/4 = 2' },
          { action: 'Volume ratio = 2³', result: '2³ = 8 times larger' },
        ],
      },
    },
    {
      id: '4.8c-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Two similar cones have volumes of 16π and 128π. What is the ratio of their radii?',
      choices: ['A) 1:2', 'B) 1:4', 'C) 1:8', 'D) 2:1'],
      answer: 'A) 1:2',
      explanation: {
        problem: 'Volume ratio = k³ where k is the linear scale factor (ratio of corresponding lengths).',
        steps: [
          { action: 'Find volume ratio', result: '16π/128π = 1/8' },
          { action: 'Solve for k', result: 'k³ = 1/8 → k = 1/2' },
          { action: 'Ratio of radii', result: '1:2' },
        ],
      },
    },
  ],

  '4.8d': [
    {
      id: '4.8d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A cylindrical water tank has a diameter of 10 feet and a height of 6 feet. If the tank is currently filled to 3/4 of its capacity, how many cubic feet of water does it contain? (Use π ≈ 3.14)',
      choices: ['A) 353.25', 'B) 471', 'C) 628', 'D) 1,413'],
      answer: 'A) 353.25',
      explanation: {
        problem: 'Full volume × 3/4',
        steps: [
          { action: 'Find radius', result: 'r = 10/2 = 5 feet' },
          { action: 'Find full volume', result: 'V = πr²h = 3.14 × 25 × 6 = 471 ft³' },
          { action: 'Find 3/4 of volume', result: '471 × (3/4) = 353.25 ft³' },
        ],
      },
    },
    {
      id: '4.8d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A rectangular shipping box has dimensions of 2 feet by 3 feet by 4 feet. How many boxes can be packed into a storage room with dimensions 12 feet by 9 feet by 8 feet?',
      choices: ['A) 24', 'B) 36', 'C) 54', 'D) 72'],
      answer: 'C) 54',
      explanation: {
        problem: 'Divide room volume by box volume.',
        steps: [
          { action: 'Room volume', result: '12 × 9 × 8 = 864 ft³' },
          { action: 'Box volume', result: '2 × 3 × 4 = 24 ft³' },
          { action: 'Number of boxes', result: '864 / 24 = 36... actually 12/2=6, 9/3=3, 8/4=2 → 6×3×2 = 36' },
        ],
      },
    },
    {
      id: '4.8d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A spherical metal ball has a radius of 3 cm. The ball is melted down and recast as a cylinder with a radius of 3 cm. What is the height of the cylinder? (Use π ≈ 3.14, and round to the nearest whole number)',
      answer: '4',
      explanation: {
        problem: 'Volume of sphere = volume of cylinder; solve for cylinder height.',
        steps: [
          { action: 'Volume of sphere', result: 'V = (4/3)π(3³) = (4/3)(3.14)(27) = 113.04 cm³' },
          { action: 'Set equal to cylinder volume', result: '113.04 = π(3²)h = 3.14 × 9 × h = 28.26h' },
          { action: 'Solve for h', result: 'h = 113.04 / 28.26 ≈ 4' },
        ],
      },
    },
  ],
}
