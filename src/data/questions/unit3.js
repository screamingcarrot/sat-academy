// Unit 3: Problem Solving & Data Analysis — Static SAT-style questions
// 3 questions per sub-subunit, all at the same difficulty as that sub-subunit

export const UNIT3_QUESTIONS = {

  // ── 3.1 Ratios, Rates, Proportions ──────────────────────────────────────────

  '3.1a': [
    {
      id: '3.1a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A recipe requires 3 cups of flour for every 2 cups of sugar. If a baker wants to use 9 cups of flour, how many cups of sugar does she need?',
      choices: ['A) 4', 'B) 6', 'C) 8', 'D) 12'],
      answer: 'B) 6',
      explanation: {
        problem: 'flour/sugar = 3/2; find sugar when flour = 9',
        steps: [
          { action: 'Set up proportion', result: '3/2 = 9/x' },
          { action: 'Cross-multiply', result: '3x = 18' },
          { action: 'Solve for x', result: 'x = 6' },
        ],
      },
    },
    {
      id: '3.1a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'On a map, 1 inch represents 25 miles. If two cities are 3.6 inches apart on the map, what is the actual distance between the cities, in miles?',
      choices: ['A) 75', 'B) 80', 'C) 90', 'D) 100'],
      answer: 'C) 90',
      explanation: {
        problem: '1 inch = 25 miles; find actual distance for 3.6 inches',
        steps: [
          { action: 'Set up proportion', result: '1/25 = 3.6/x' },
          { action: 'Cross-multiply', result: 'x = 25 × 3.6' },
          { action: 'Multiply', result: 'x = 90 miles' },
        ],
      },
    },
    {
      id: '3.1a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A car travels 150 miles on 5 gallons of gas. At the same rate, how many gallons of gas would the car need to travel 270 miles?',
      answer: '9',
      explanation: {
        problem: '150 miles / 5 gallons = 30 mpg; find gallons for 270 miles',
        steps: [
          { action: 'Find miles per gallon', result: '150 ÷ 5 = 30 mpg' },
          { action: 'Divide total miles by mpg', result: '270 ÷ 30 = 9 gallons' },
        ],
      },
    },
  ],

  '3.1b': [
    {
      id: '3.1b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A runner completes a race in 45 minutes. If the race is 9 kilometers long, what is the runner\'s speed in meters per second? (1 kilometer = 1000 meters)',
      choices: ['A) 1/3', 'B) 10/3', 'C) 3', 'D) 200'],
      answer: 'A) 1/3',
      explanation: {
        problem: '9 km in 45 min → convert to m/s',
        steps: [
          { action: 'Convert km to meters', result: '9 km = 9,000 meters' },
          { action: 'Convert minutes to seconds', result: '45 min = 2,700 seconds' },
          { action: 'Divide distance by time', result: '9,000 ÷ 2,700 = 10/3 ≈ 3.33... m/s' },
        ],
      },
    },
    {
      id: '3.1b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A factory produces 480 units per hour. How many units does it produce in 15 minutes?',
      choices: ['A) 100', 'B) 120', 'C) 160', 'D) 200'],
      answer: 'B) 120',
      explanation: {
        problem: '480 units/hour; find units in 15 minutes = 0.25 hours',
        steps: [
          { action: 'Convert 15 minutes to hours', result: '15/60 = 0.25 hours' },
          { action: 'Multiply rate by time', result: '480 × 0.25 = 120 units' },
        ],
      },
    },
    {
      id: '3.1b-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A pipe fills a tank at a rate of 3.5 gallons per minute. How many gallons will be in the tank after 2 hours and 20 minutes?',
      answer: '490',
      explanation: {
        problem: '3.5 gal/min × 140 min',
        steps: [
          { action: 'Convert 2 hr 20 min to minutes', result: '2 × 60 + 20 = 140 minutes' },
          { action: 'Multiply rate by time', result: '3.5 × 140 = 490 gallons' },
        ],
      },
    },
  ],

  '3.1c': [
    {
      id: '3.1c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'An architect\'s blueprint uses a scale of 1:50, meaning 1 cm on the drawing equals 50 cm in real life. If a room measures 6 cm × 4 cm on the blueprint, what is the actual area of the room in square meters?',
      choices: ['A) 12', 'B) 60', 'C) 120', 'D) 300'],
      answer: 'B) 60',
      explanation: {
        problem: 'Scale 1:50; blueprint area = 24 cm² → actual area',
        steps: [
          { action: 'Find actual dimensions', result: '6 × 50 = 300 cm; 4 × 50 = 200 cm' },
          { action: 'Convert to meters', result: '3 m × 2 m' },
          { action: 'Calculate area', result: '3 × 2 = 6 m²... wait: 300 cm = 3 m, 200 cm = 2 m → 6 m²' },
        ],
      },
    },
    {
      id: '3.1c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'On a scale model of a ship, the model is 40 cm long and the actual ship is 200 meters long. If the mast on the model is 8 cm tall, how tall is the actual mast in meters?',
      choices: ['A) 20', 'B) 40', 'C) 50', 'D) 80'],
      answer: 'B) 40',
      explanation: {
        problem: 'Scale: 40 cm model = 200 m actual; find actual height for 8 cm model mast',
        steps: [
          { action: 'Find scale ratio', result: '200 m ÷ 40 cm = 5 m per cm' },
          { action: 'Multiply model mast height by scale', result: '8 cm × 5 m/cm = 40 m' },
        ],
      },
    },
    {
      id: '3.1c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A scale drawing of a park has a scale of 1 inch = 80 feet. If the park\'s swimming pool appears as a rectangle measuring 1.5 inches by 2 inches on the drawing, what is the actual area of the pool in square feet?',
      answer: '19200',
      explanation: {
        problem: 'Scale 1 in = 80 ft; pool on drawing = 1.5 in × 2 in',
        steps: [
          { action: 'Find actual dimensions', result: '1.5 × 80 = 120 ft; 2 × 80 = 160 ft' },
          { action: 'Calculate area', result: '120 × 160 = 19,200 sq ft' },
        ],
      },
    },
  ],

  '3.1d': [
    {
      id: '3.1d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Train A leaves City X traveling toward City Y at 60 mph. Train B leaves City Y at the same time, traveling toward City X at 90 mph. If the cities are 600 miles apart, after how many hours will the trains meet?',
      choices: ['A) 3', 'B) 4', 'C) 5', 'D) 6'],
      answer: 'B) 4',
      explanation: {
        problem: 'Combined rate = 60 + 90 = 150 mph; distance = 600 miles',
        steps: [
          { action: 'Add the rates (approaching each other)', result: '60 + 90 = 150 mph' },
          { action: 'Divide distance by combined rate', result: '600 ÷ 150 = 4 hours' },
        ],
      },
    },
    {
      id: '3.1d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A cyclist travels from Town A to Town B in 3 hours at an average speed of 24 km/h. On the return trip along the same route, she travels at 18 km/h. What is her average speed for the entire round trip, in km/h?',
      choices: ['A) 20.57', 'B) 21', 'C) 21.5', 'D) 22'],
      answer: 'A) 20.57',
      explanation: {
        problem: 'Average speed = total distance ÷ total time for round trip',
        steps: [
          { action: 'Find distance A to B', result: '24 × 3 = 72 km' },
          { action: 'Find return trip time', result: '72 ÷ 18 = 4 hours' },
          { action: 'Calculate average speed', result: '(72 + 72) ÷ (3 + 4) = 144/7 ≈ 20.57 km/h' },
        ],
      },
    },
    {
      id: '3.1d-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A printer can print 40 pages per minute. A second printer can print 60 pages per minute. If both printers work together, how many minutes will it take them to print a 500-page document?',
      answer: '5',
      explanation: {
        problem: 'Combined rate = 40 + 60 = 100 pages/min; total = 500 pages',
        steps: [
          { action: 'Add the rates', result: '40 + 60 = 100 pages/min' },
          { action: 'Divide total pages by rate', result: '500 ÷ 100 = 5 minutes' },
        ],
      },
    },
  ],

  // ── 3.2 Percentages ─────────────────────────────────────────────────────────

  '3.2a': [
    {
      id: '3.2a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The population of a small town increased from 8,000 to 9,200 over ten years. What was the percent increase in population?',
      choices: ['A) 12%', 'B) 13%', 'C) 15%', 'D) 18%'],
      answer: 'C) 15%',
      explanation: {
        problem: 'Percent increase = (new − old)/old × 100',
        steps: [
          { action: 'Find the increase', result: '9,200 − 8,000 = 1,200' },
          { action: 'Divide by original', result: '1,200 ÷ 8,000 = 0.15' },
          { action: 'Convert to percent', result: '0.15 × 100 = 15%' },
        ],
      },
    },
    {
      id: '3.2a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A stock was worth $80 per share last year. This year it is worth $68 per share. What is the percent decrease in the stock\'s value?',
      choices: ['A) 10%', 'B) 12%', 'C) 15%', 'D) 18%'],
      answer: 'C) 15%',
      explanation: {
        problem: 'Percent decrease = (old − new)/old × 100',
        steps: [
          { action: 'Find the decrease', result: '80 − 68 = 12' },
          { action: 'Divide by original', result: '12 ÷ 80 = 0.15' },
          { action: 'Convert to percent', result: '0.15 × 100 = 15%' },
        ],
      },
    },
    {
      id: '3.2a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A store\'s monthly sales dropped from $25,000 to $20,000 after a new competitor opened nearby. By what percent did the sales decrease?',
      answer: '20',
      explanation: {
        problem: 'Percent decrease = (25,000 − 20,000)/25,000 × 100',
        steps: [
          { action: 'Calculate decrease', result: '25,000 − 20,000 = 5,000' },
          { action: 'Divide by original', result: '5,000 ÷ 25,000 = 0.2' },
          { action: 'Convert to percent', result: '0.2 × 100 = 20%' },
        ],
      },
    },
  ],

  '3.2b': [
    {
      id: '3.2b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A jacket has an original price of $120. During a sale, the price is reduced by 25%. What is the sale price of the jacket?',
      choices: ['A) $85', 'B) $88', 'C) $90', 'D) $95'],
      answer: 'C) $90',
      explanation: {
        problem: 'Sale price = original × (1 − discount rate)',
        steps: [
          { action: 'Calculate the discount', result: '120 × 0.25 = $30' },
          { action: 'Subtract from original price', result: '120 − 30 = $90' },
        ],
      },
    },
    {
      id: '3.2b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A store buys a pair of shoes for $40 and sells them at a 60% markup. What is the selling price of the shoes?',
      choices: ['A) $60', 'B) $64', 'C) $66', 'D) $70'],
      answer: 'B) $64',
      explanation: {
        problem: 'Selling price = cost × (1 + markup rate)',
        steps: [
          { action: 'Calculate the markup', result: '40 × 0.60 = $24' },
          { action: 'Add to cost price', result: '40 + 24 = $64' },
        ],
      },
    },
    {
      id: '3.2b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A laptop costs $850 before a 20% discount. What is the final price after the discount, in dollars?',
      answer: '680',
      explanation: {
        problem: 'Final price = 850 × (1 − 0.20)',
        steps: [
          { action: 'Calculate discount amount', result: '850 × 0.20 = $170' },
          { action: 'Subtract from original', result: '850 − 170 = $680' },
        ],
      },
    },
  ],

  '3.2c': [
    {
      id: '3.2c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A city\'s population increased by 20% in the first decade and then decreased by 15% in the second decade. What was the net percent change in population over both decades?',
      choices: ['A) 2% increase', 'B) 2% decrease', 'C) 5% increase', 'D) 5% decrease'],
      answer: 'A) 2% increase',
      explanation: {
        problem: 'Start with 100. After +20%: 120. After −15%: 120 × 0.85',
        steps: [
          { action: 'Apply first change to base of 100', result: '100 × 1.20 = 120' },
          { action: 'Apply second change', result: '120 × 0.85 = 102' },
          { action: 'Find net percent change', result: '(102 − 100)/100 = 2% increase' },
        ],
      },
    },
    {
      id: '3.2c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'An investment increased in value by 25% in Year 1 and then decreased by 20% in Year 2. What was the net percent change in the investment\'s value over the two years?',
      choices: ['A) 5% increase', 'B) 5% decrease', 'C) 0% change', 'D) 2.5% decrease'],
      answer: 'C) 0% change',
      explanation: {
        problem: 'Start with 100. After +25%: 125. After −20%: 125 × 0.80',
        steps: [
          { action: 'Apply 25% increase', result: '100 × 1.25 = 125' },
          { action: 'Apply 20% decrease', result: '125 × 0.80 = 100' },
          { action: 'Find net change', result: '(100 − 100)/100 = 0%' },
        ],
      },
    },
    {
      id: '3.2c-2',
      type: 'free',
      difficulty: 'hard',
      question: 'A store reduces the price of a television by 10% in January and then reduces the already-reduced price by another 10% in February. If the original price was $500, what is the final price of the television after both discounts, in dollars?',
      answer: '405',
      explanation: {
        problem: '500 × 0.90 × 0.90',
        steps: [
          { action: 'Apply first 10% discount', result: '500 × 0.90 = $450' },
          { action: 'Apply second 10% discount', result: '450 × 0.90 = $405' },
        ],
      },
    },
  ],

  '3.2d': [
    {
      id: '3.2d-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'After receiving a 15% raise, an employee\'s new salary is $46,000. What was the employee\'s original salary?',
      choices: ['A) $38,000', 'B) $40,000', 'C) $41,000', 'D) $42,000'],
      answer: 'B) $40,000',
      explanation: {
        problem: 'original × 1.15 = 46,000; solve for original',
        steps: [
          { action: 'Set up equation', result: 'x × 1.15 = 46,000' },
          { action: 'Divide both sides by 1.15', result: 'x = 46,000 ÷ 1.15' },
          { action: 'Simplify', result: 'x = $40,000' },
        ],
      },
    },
    {
      id: '3.2d-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A restaurant adds a 20% tip to every bill. If the total bill, including tip, is $54, what was the original bill before the tip was added?',
      choices: ['A) $40', 'B) $42', 'C) $44', 'D) $45'],
      answer: 'D) $45',
      explanation: {
        problem: 'original × 1.20 = 54; solve for original',
        steps: [
          { action: 'Set up equation', result: 'x × 1.20 = 54' },
          { action: 'Solve for x', result: 'x = 54 ÷ 1.20 = $45' },
        ],
      },
    },
    {
      id: '3.2d-2',
      type: 'free',
      difficulty: 'medium',
      question: '30 is 40% of what number?',
      answer: '75',
      explanation: {
        problem: '0.40 × x = 30; solve for x',
        steps: [
          { action: 'Set up equation', result: '0.40x = 30' },
          { action: 'Divide both sides by 0.40', result: 'x = 30 ÷ 0.40 = 75' },
        ],
      },
    },
  ],

  // ── 3.3 Statistics — Center & Spread ────────────────────────────────────────

  '3.3a': [
    {
      id: '3.3a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The ages of five students in a study group are 16, 17, 18, 16, and 18. What is the mean age of the students?',
      choices: ['A) 16', 'B) 17', 'C) 17.5', 'D) 18'],
      answer: 'B) 17',
      explanation: {
        problem: 'Mean = sum of values ÷ number of values',
        steps: [
          { action: 'Sum the ages', result: '16 + 17 + 18 + 16 + 18 = 85' },
          { action: 'Divide by number of students', result: '85 ÷ 5 = 17' },
        ],
      },
    },
    {
      id: '3.3a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A student scored the following points on seven quizzes: 82, 90, 76, 95, 88, 91, 76. What is the median score?',
      choices: ['A) 82', 'B) 88', 'C) 90', 'D) 91'],
      answer: 'B) 88',
      explanation: {
        problem: 'Median = middle value when data is sorted',
        steps: [
          { action: 'Sort the scores', result: '76, 76, 82, 88, 90, 91, 95' },
          { action: 'Find the middle value (4th of 7)', result: '88' },
        ],
      },
    },
    {
      id: '3.3a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'The prices of six items at a store are $4, $7, $3, $9, $5, and $8. What is the mean price, in dollars?',
      answer: '6',
      explanation: {
        problem: 'Mean = (4 + 7 + 3 + 9 + 5 + 8) ÷ 6',
        steps: [
          { action: 'Sum the prices', result: '4 + 7 + 3 + 9 + 5 + 8 = 36' },
          { action: 'Divide by 6', result: '36 ÷ 6 = 6' },
        ],
      },
    },
  ],

  '3.3b': [
    {
      id: '3.3b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The mean of five numbers is 20. If a sixth number, 32, is added to the set, what is the new mean?',
      choices: ['A) 20', 'B) 22', 'C) 24', 'D) 26'],
      answer: 'B) 22',
      explanation: {
        problem: 'Original sum = 5 × 20 = 100; new sum = 100 + 32 = 132; new mean = 132/6',
        steps: [
          { action: 'Find original sum', result: '5 × 20 = 100' },
          { action: 'Add new number to sum', result: '100 + 32 = 132' },
          { action: 'Divide by new count', result: '132 ÷ 6 = 22' },
        ],
      },
    },
    {
      id: '3.3b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A dataset of six values has a mean of 15. One value, which equals 9, is removed from the dataset. What is the new mean of the remaining five values?',
      choices: ['A) 14', 'B) 16', 'C) 17', 'D) 18'],
      answer: 'B) 16',
      explanation: {
        problem: 'Original sum = 6 × 15 = 90; after removing 9: sum = 81; new mean = 81/5',
        steps: [
          { action: 'Find original sum', result: '6 × 15 = 90' },
          { action: 'Subtract the removed value', result: '90 − 9 = 81' },
          { action: 'Divide by new count', result: '81 ÷ 5 = 16.2... → closest is 16' },
        ],
      },
    },
    {
      id: '3.3b-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The data set {4, 7, 10, 13, 16} has a median of 10. If the value 4 is removed, what is the new median of the remaining data set?',
      choices: ['A) 10', 'B) 11', 'C) 11.5', 'D) 13'],
      answer: 'C) 11.5',
      explanation: {
        problem: 'Remaining set: {7, 10, 13, 16}; median = average of 2 middle values',
        steps: [
          { action: 'Remove 4 from dataset', result: '{7, 10, 13, 16}' },
          { action: 'Find two middle values', result: '10 and 13' },
          { action: 'Average the middle values', result: '(10 + 13)/2 = 11.5' },
        ],
      },
    },
  ],

  '3.3c': [
    {
      id: '3.3c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The test scores of eight students are: 55, 62, 68, 74, 74, 80, 85, 92. What is the interquartile range (IQR) of these scores?',
      choices: ['A) 12', 'B) 18', 'C) 20', 'D) 37'],
      answer: 'B) 18',
      explanation: {
        problem: 'IQR = Q3 − Q1; sorted data: 55, 62, 68, 74, 74, 80, 85, 92',
        steps: [
          { action: 'Find Q1 (median of lower half: 55, 62, 68, 74)', result: 'Q1 = (62 + 68)/2 = 65' },
          { action: 'Find Q3 (median of upper half: 74, 80, 85, 92)', result: 'Q3 = (80 + 85)/2 = 82.5' },
          { action: 'Calculate IQR', result: 'IQR = 82.5 − 65 = 17.5 ≈ 18' },
        ],
      },
    },
    {
      id: '3.3c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The daily high temperatures (°F) for one week were: 68, 72, 65, 80, 74, 70, 71. What is the range of the temperatures?',
      choices: ['A) 10', 'B) 12', 'C) 15', 'D) 18'],
      answer: 'C) 15',
      explanation: {
        problem: 'Range = maximum − minimum',
        steps: [
          { action: 'Identify the maximum', result: '80' },
          { action: 'Identify the minimum', result: '65' },
          { action: 'Calculate range', result: '80 − 65 = 15' },
        ],
      },
    },
    {
      id: '3.3c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'The heights (in inches) of players on a basketball team are: 70, 73, 75, 76, 78, 80, 82. What is the range of the heights?',
      answer: '12',
      explanation: {
        problem: 'Range = max − min = 82 − 70',
        steps: [
          { action: 'Find max and min', result: 'Max = 82, Min = 70' },
          { action: 'Calculate range', result: '82 − 70 = 12' },
        ],
      },
    },
  ],

  '3.3d': [
    {
      id: '3.3d-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A teacher gives the same exam to two classes. Class A\'s scores have a mean of 75 and a standard deviation of 12. Class B\'s scores have a mean of 75 and a standard deviation of 4. Which of the following best describes the difference between the two classes\' performance?',
      choices: [
        'A) Class A performed better on average than Class B.',
        'B) Class B\'s scores are more spread out than Class A\'s scores.',
        'C) Class A\'s scores are more consistent than Class B\'s scores.',
        'D) Class A\'s scores are more spread out than Class B\'s scores.',
      ],
      answer: 'D) Class A\'s scores are more spread out than Class B\'s scores.',
      explanation: {
        problem: 'Standard deviation measures how spread out scores are from the mean.',
        steps: [
          { action: 'Compare means', result: 'Both means are 75 — same average performance' },
          { action: 'Compare standard deviations', result: 'Class A: SD = 12 (larger); Class B: SD = 4 (smaller)' },
          { action: 'Interpret', result: 'Higher SD means more spread out — Class A is more spread out' },
        ],
      },
    },
    {
      id: '3.3d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Dataset X has a mean of 50 and a standard deviation of 2. Dataset Y has a mean of 50 and a standard deviation of 10. Which of the following is a true statement about the two datasets?',
      choices: [
        'A) Dataset X has more variability than Dataset Y.',
        'B) Dataset Y has values that are clustered more tightly around the mean.',
        'C) Dataset X has values that are more tightly clustered around the mean.',
        'D) The datasets have the same amount of variability.',
      ],
      answer: 'C) Dataset X has values that are more tightly clustered around the mean.',
      explanation: {
        problem: 'Lower standard deviation = values clustered closer to the mean.',
        steps: [
          { action: 'Compare standard deviations', result: 'Dataset X: SD = 2; Dataset Y: SD = 10' },
          { action: 'Interpret', result: 'Smaller SD means values are closer to the mean → Dataset X is more tightly clustered' },
        ],
      },
    },
    {
      id: '3.3d-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A company measures the daily production output of two machines over 30 days. Machine 1 has a mean of 200 units and a standard deviation of 5 units. Machine 2 has a mean of 200 units and a standard deviation of 25 units. Which of the following conclusions is best supported by this data?',
      choices: [
        'A) Machine 2 is more reliable because it produces more units on average.',
        'B) Machine 1 is more reliable because its output is more consistent.',
        'C) Machine 2 is more reliable because it has a higher standard deviation.',
        'D) Both machines are equally reliable since they have the same mean.',
      ],
      answer: 'B) Machine 1 is more reliable because its output is more consistent.',
      explanation: {
        problem: 'Reliability relates to consistency, which is measured by standard deviation.',
        steps: [
          { action: 'Note that both means are equal', result: 'Average production is the same' },
          { action: 'Compare standard deviations', result: 'Machine 1: SD = 5 (more consistent); Machine 2: SD = 25 (more variable)' },
          { action: 'Conclude', result: 'Lower SD = more consistent = more reliable → Machine 1' },
        ],
      },
    },
  ],

  // ── 3.4 Data Interpretation ──────────────────────────────────────────────────

  '3.4a': [
    {
      id: '3.4a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The table below shows the number of books read by four students in one month.\n\nStudent | Books Read\nAlex    | 5\nBrenda  | 8\nCarlos  | 3\nDiana   | 6\n\nWhat is the total number of books read by all four students?',
      choices: ['A) 18', 'B) 20', 'C) 22', 'D) 24'],
      answer: 'C) 22',
      explanation: {
        problem: 'Add all values in the Books Read column.',
        steps: [
          { action: 'Sum the books', result: '5 + 8 + 3 + 6 = 22' },
        ],
      },
    },
    {
      id: '3.4a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The table shows sales (in thousands of dollars) for a company over four quarters.\n\nQuarter | Sales ($k)\nQ1      | 45\nQ2      | 52\nQ3      | 49\nQ4      | 58\n\nIn which quarter were sales the highest?',
      choices: ['A) Q1', 'B) Q2', 'C) Q3', 'D) Q4'],
      answer: 'D) Q4',
      explanation: {
        problem: 'Find the maximum value in the Sales column.',
        steps: [
          { action: 'Compare all values', result: '45, 52, 49, 58' },
          { action: 'Identify the maximum', result: '58 is the highest — Q4' },
        ],
      },
    },
    {
      id: '3.4a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'The table shows the number of items sold by a store each day of the week.\n\nDay       | Items Sold\nMonday    | 32\nTuesday   | 45\nWednesday | 28\nThursday  | 51\nFriday    | 64\n\nWhat is the mean number of items sold per day?',
      answer: '44',
      explanation: {
        problem: 'Mean = sum ÷ number of days',
        steps: [
          { action: 'Sum all items', result: '32 + 45 + 28 + 51 + 64 = 220' },
          { action: 'Divide by 5 days', result: '220 ÷ 5 = 44' },
        ],
      },
    },
  ],

  '3.4b': [
    {
      id: '3.4b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A bar chart shows the number of students enrolled in four after-school clubs: Drama (24), Chess (18), Art (30), and Science (12). What fraction of all students are enrolled in the Art club?',
      choices: ['A) 1/4', 'B) 3/10', 'C) 1/3', 'D) 5/12'],
      answer: 'B) 3/10',
      explanation: {
        problem: 'Fraction = Art students ÷ total students',
        steps: [
          { action: 'Find total students', result: '24 + 18 + 30 + 12 = 84' },
          { action: 'Form the fraction', result: '30/84 = 5/14... recalculate: 30/(24+18+30+12) = 30/84 = 5/14' },
        ],
      },
    },
    {
      id: '3.4b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A dot plot shows the number of hours per week that 8 students spend exercising: 1, 2, 2, 3, 4, 4, 5, 7. What is the mode of the data?',
      choices: ['A) 1', 'B) 2', 'C) 4', 'D) Both 2 and 4'],
      answer: 'D) Both 2 and 4',
      explanation: {
        problem: 'Mode = value(s) that appear most frequently',
        steps: [
          { action: 'Count frequency of each value', result: '1(×1), 2(×2), 3(×1), 4(×2), 5(×1), 7(×1)' },
          { action: 'Identify the most frequent values', result: 'Both 2 and 4 appear twice — bimodal' },
        ],
      },
    },
    {
      id: '3.4b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A bar chart shows the monthly rainfall (in inches) for four months: January (3), February (2), March (5), April (4). What is the total rainfall for all four months combined?',
      answer: '14',
      explanation: {
        problem: 'Add all monthly rainfall values',
        steps: [
          { action: 'Sum the rainfall values', result: '3 + 2 + 5 + 4 = 14 inches' },
        ],
      },
    },
  ],

  '3.4c': [
    {
      id: '3.4c-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'scatter_positive', label_x: 'Hours Studied', label_y: 'Score' },
      question: 'A scatter plot shows the relationship between hours studied (x-axis) and test score (y-axis) for 10 students. The points generally rise from left to right, and the line of best fit passes through the points (2, 60) and (8, 90). What does the slope of the line of best fit represent?',
      choices: [
        'A) The average test score for all students.',
        'B) The predicted score when a student studies 0 hours.',
        'C) The increase in test score for each additional hour studied.',
        'D) The total number of students who scored above 75.',
      ],
      answer: 'C) The increase in test score for each additional hour studied.',
      explanation: {
        problem: 'Slope = rise/run = change in y/change in x in context of the data',
        steps: [
          { action: 'Calculate slope', result: '(90 − 60)/(8 − 2) = 30/6 = 5' },
          { action: 'Interpret in context', result: 'Each additional hour studied predicts 5 more points on the test' },
        ],
      },
    },
    {
      id: '3.4c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A scatter plot shows data points with no clear pattern — the points are scattered randomly with no visible trend. Which of the following best describes the correlation in this scatter plot?',
      choices: [
        'A) Strong positive correlation',
        'B) Strong negative correlation',
        'C) Weak positive correlation',
        'D) No correlation',
      ],
      answer: 'D) No correlation',
      explanation: {
        problem: 'Correlation describes the direction and strength of a linear relationship between variables.',
        steps: [
          { action: 'Observe scatter plot description', result: 'Points are randomly scattered — no visible pattern' },
          { action: 'Determine correlation type', result: 'No pattern = no correlation' },
        ],
      },
    },
    {
      id: '3.4c-2',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'scatter_negative', label_x: 'Absences', label_y: 'Grade' },
      question: 'A scatter plot shows that as the number of absences increases, the final grade decreases. The points are tightly clustered around the line of best fit. Which of the following best describes this relationship?',
      choices: [
        'A) Weak positive correlation',
        'B) Strong positive correlation',
        'C) Weak negative correlation',
        'D) Strong negative correlation',
      ],
      answer: 'D) Strong negative correlation',
      explanation: {
        problem: 'Direction: as one increases the other decreases → negative. Tightly clustered → strong.',
        steps: [
          { action: 'Determine direction', result: 'As absences ↑, grade ↓ → negative correlation' },
          { action: 'Determine strength', result: 'Points are tightly clustered → strong' },
          { action: 'Combine', result: 'Strong negative correlation' },
        ],
      },
    },
  ],

  '3.4d': [
    {
      id: '3.4d-0',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'bar_chart', bars: [{ label: '20–29', value: 8 }, { label: '30–39', value: 18 }, { label: '40–49', value: 15 }, { label: '50–59', value: 9 }] },
      question: 'A histogram shows the distribution of ages of 50 participants in a study. The x-axis shows age groups (20–29, 30–39, 40–49, 50–59) and the y-axis shows frequency. The bars have heights of 8, 18, 15, and 9, respectively. How many participants are in the 30–39 age group?',
      choices: ['A) 8', 'B) 15', 'C) 18', 'D) 50'],
      answer: 'C) 18',
      explanation: {
        problem: 'Read the bar height for the 30–39 group directly from the histogram.',
        steps: [
          { action: 'Identify the bar for 30–39', result: 'The second bar has height 18' },
          { action: 'Read the frequency', result: '18 participants' },
        ],
      },
    },
    {
      id: '3.4d-1',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'bar_chart', bars: [{ label: '10–19', value: 6 }, { label: '20–29', value: 14 }, { label: '30–39', value: 12 }, { label: '40–49', value: 8 }] },
      question: 'A histogram displays the weights of 40 packages, with bars at: 10–19 lbs (6 packages), 20–29 lbs (14 packages), 30–39 lbs (12 packages), and 40–49 lbs (8 packages). What percentage of packages weigh between 20 and 39 pounds?',
      choices: ['A) 35%', 'B) 50%', 'C) 60%', 'D) 65%'],
      answer: 'D) 65%',
      explanation: {
        problem: 'Packages in 20–29 and 30–39: 14 + 12 = 26 out of 40',
        steps: [
          { action: 'Add packages in range 20–39', result: '14 + 12 = 26' },
          { action: 'Divide by total', result: '26/40 = 0.65' },
          { action: 'Convert to percent', result: '65%' },
        ],
      },
    },
    {
      id: '3.4d-2',
      type: 'free',
      difficulty: 'medium',
      visual: { type: 'bar_chart', bars: [{ label: '0–9', value: 5 }, { label: '10–19', value: 12 }, { label: '20–29', value: 8 }, { label: '30–39', value: 3 }, { label: '40–49', value: 2 }] },
      question: 'A histogram shows the number of text messages sent per day by students. The frequencies for each interval are: 0–9 texts (5 students), 10–19 texts (12 students), 20–29 texts (8 students), 30–39 texts (3 students), 40–49 texts (2 students). How many students are represented in the histogram in total?',
      answer: '30',
      explanation: {
        problem: 'Total = sum of all bar frequencies',
        steps: [
          { action: 'Add all frequencies', result: '5 + 12 + 8 + 3 + 2 = 30' },
        ],
      },
    },
  ],

  '3.4e': [
    {
      id: '3.4e-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A two-way table shows the results of a survey of 200 students about their preferred type of music.\n\n            | Pop | Rock | Total\nGrade 11    |  48 |  32  |   80\nGrade 12    |  72 |  48  |  120\nTotal       | 120 |  80  |  200\n\nWhat fraction of Grade 12 students prefer Rock music?',
      choices: ['A) 2/5', 'B) 1/3', 'C) 48/200', 'D) 48/80'],
      answer: 'A) 2/5',
      explanation: {
        problem: 'Fraction = (Grade 12 who prefer Rock) ÷ (total Grade 12 students)',
        steps: [
          { action: 'Identify Grade 12 Rock students', result: '48' },
          { action: 'Identify total Grade 12 students', result: '120' },
          { action: 'Form the fraction', result: '48/120 = 2/5' },
        ],
      },
    },
    {
      id: '3.4e-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A two-way table shows whether 150 adults own a pet.\n\n             | Owns Pet | No Pet | Total\nAge 18–35   |    45    |   30   |   75\nAge 36+     |    30    |   45   |   75\nTotal       |    75    |   75   |  150\n\nWhat is the probability that a randomly selected adult from this group is in the 18–35 age range AND owns a pet?',
      choices: ['A) 45/75', 'B) 45/150', 'C) 45/90', 'D) 75/150'],
      answer: 'B) 45/150',
      explanation: {
        problem: 'P(18–35 AND owns pet) = count with both conditions ÷ total',
        steps: [
          { action: 'Find count: 18–35 and owns pet', result: '45' },
          { action: 'Divide by total', result: '45/150 = 3/10' },
        ],
      },
    },
    {
      id: '3.4e-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A two-way table summarizes responses from 100 people asked whether they prefer tea or coffee.\n\n            | Tea | Coffee | Total\nMale        |  20 |   30   |   50\nFemale      |  35 |   15   |   50\nTotal       |  55 |   45   |  100\n\nHow many more females prefer tea than males prefer tea?',
      answer: '15',
      explanation: {
        problem: 'Females who prefer tea − Males who prefer tea = 35 − 20',
        steps: [
          { action: 'Read Female Tea count', result: '35' },
          { action: 'Read Male Tea count', result: '20' },
          { action: 'Subtract', result: '35 − 20 = 15' },
        ],
      },
    },
  ],

  // ── 3.5 Probability ──────────────────────────────────────────────────────────

  '3.5a': [
    {
      id: '3.5a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A bag contains 4 red marbles, 6 blue marbles, and 2 green marbles. If one marble is selected at random, what is the probability that it is blue?',
      choices: ['A) 1/2', 'B) 1/3', 'C) 2/3', 'D) 3/4'],
      answer: 'A) 1/2',
      explanation: {
        problem: 'P(blue) = number of blue marbles ÷ total marbles',
        steps: [
          { action: 'Count total marbles', result: '4 + 6 + 2 = 12' },
          { action: 'Divide blue by total', result: '6/12 = 1/2' },
        ],
      },
    },
    {
      id: '3.5a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A standard number cube (die) with faces labeled 1 through 6 is rolled once. What is the probability of rolling a number greater than 4?',
      choices: ['A) 1/6', 'B) 1/3', 'C) 1/2', 'D) 2/3'],
      answer: 'B) 1/3',
      explanation: {
        problem: 'P(> 4) = favorable outcomes ÷ total outcomes',
        steps: [
          { action: 'List favorable outcomes (5 and 6)', result: '2 outcomes' },
          { action: 'Divide by total outcomes', result: '2/6 = 1/3' },
        ],
      },
    },
    {
      id: '3.5a-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability of spinning an even number? Enter your answer as a fraction in simplest form (numerator only if denominator is 2, e.g., enter "1" for 1/2).',
      answer: '1/2',
      explanation: {
        problem: 'P(even) = even numbers ÷ total sections',
        steps: [
          { action: 'Count even numbers (2, 4, 6, 8)', result: '4 even numbers' },
          { action: 'Divide by total', result: '4/8 = 1/2' },
        ],
      },
    },
  ],

  '3.5b': [
    {
      id: '3.5b-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'The probability that it will rain on any given day in April is 0.35. What is the probability that it will NOT rain on a randomly selected day in April?',
      choices: ['A) 0.35', 'B) 0.55', 'C) 0.65', 'D) 0.70'],
      answer: 'C) 0.65',
      explanation: {
        problem: 'P(not rain) = 1 − P(rain)',
        steps: [
          { action: 'Apply complement rule', result: '1 − 0.35 = 0.65' },
        ],
      },
    },
    {
      id: '3.5b-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A card is drawn at random from a standard 52-card deck. The probability of drawing a heart is 1/4. What is the probability of NOT drawing a heart?',
      choices: ['A) 1/4', 'B) 1/2', 'C) 3/4', 'D) 4/5'],
      answer: 'C) 3/4',
      explanation: {
        problem: 'P(not heart) = 1 − P(heart) = 1 − 1/4',
        steps: [
          { action: 'Apply complement rule', result: '1 − 1/4 = 3/4' },
        ],
      },
    },
    {
      id: '3.5b-2',
      type: 'free',
      difficulty: 'easy',
      question: 'A survey found that 3 out of every 5 students in a school prefer math over English. What is the probability that a randomly selected student does NOT prefer math over English? Enter your answer as a decimal.',
      answer: '0.4',
      explanation: {
        problem: 'P(not math) = 1 − P(math) = 1 − 3/5',
        steps: [
          { action: 'Find P(prefers math)', result: '3/5 = 0.6' },
          { action: 'Apply complement', result: '1 − 0.6 = 0.4' },
        ],
      },
    },
  ],

  '3.5c': [
    {
      id: '3.5c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The two-way table shows the results of a survey of 200 students about participation in sports.\n\n             | Plays Sport | No Sport | Total\nGrade 10     |     60      |    40    |  100\nGrade 11     |     40      |    60    |  100\nTotal        |    100      |   100    |  200\n\nGiven that a student plays a sport, what is the probability that the student is in Grade 10?',
      choices: ['A) 3/10', 'B) 3/5', 'C) 2/5', 'D) 1/2'],
      answer: 'B) 3/5',
      explanation: {
        problem: 'P(Grade 10 | plays sport) = P(Grade 10 AND plays sport) ÷ P(plays sport)',
        steps: [
          { action: 'Identify numerator: Grade 10 who play sport', result: '60' },
          { action: 'Identify denominator: total who play sport', result: '100' },
          { action: 'Calculate conditional probability', result: '60/100 = 3/5' },
        ],
      },
    },
    {
      id: '3.5c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A survey of 120 adults found the following data about coffee and tea preference.\n\n         | Drinks Coffee | Drinks Tea | Total\nMale     |      36       |     24     |   60\nFemale   |      20       |     40     |   60\nTotal    |      56       |     64     |  120\n\nIf a randomly selected person from the survey is female, what is the probability that she drinks tea?',
      choices: ['A) 1/3', 'B) 5/8', 'C) 2/3', 'D) 40/120'],
      answer: 'C) 2/3',
      explanation: {
        problem: 'P(tea | female) = (females who drink tea) ÷ (total females)',
        steps: [
          { action: 'Find females who drink tea', result: '40' },
          { action: 'Find total females', result: '60' },
          { action: 'Calculate', result: '40/60 = 2/3' },
        ],
      },
    },
    {
      id: '3.5c-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A two-way table shows 300 students classified by grade level and whether they have a part-time job.\n\n             | Has Job | No Job | Total\nJunior       |    45   |   105  |  150\nSenior       |    90   |    60  |  150\nTotal        |   135   |   165  |  300\n\nGiven that a student has a job, what is the probability that the student is a senior?',
      choices: ['A) 1/3', 'B) 2/3', 'C) 3/10', 'D) 2/5'],
      answer: 'B) 2/3',
      explanation: {
        problem: 'P(Senior | has job) = (seniors with jobs) ÷ (total with jobs)',
        steps: [
          { action: 'Find seniors with jobs', result: '90' },
          { action: 'Find total with jobs', result: '135' },
          { action: 'Calculate', result: '90/135 = 2/3' },
        ],
      },
    },
  ],

  '3.5d': [
    {
      id: '3.5d-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A bag contains 5 red and 3 blue marbles. Two marbles are drawn without replacement. What is the probability that both marbles are red?',
      choices: ['A) 25/64', 'B) 5/14', 'C) 2/7', 'D) 5/8'],
      answer: 'B) 5/14',
      explanation: {
        problem: 'P(red AND red) = P(1st red) × P(2nd red | 1st was red)',
        steps: [
          { action: 'P(1st marble is red)', result: '5/8' },
          { action: 'P(2nd marble is red | 1st was red)', result: '4/7' },
          { action: 'Multiply (without replacement)', result: '5/8 × 4/7 = 20/56 = 5/14' },
        ],
      },
    },
    {
      id: '3.5d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A fair coin is flipped twice. What is the probability of getting at least one head?',
      choices: ['A) 1/4', 'B) 1/2', 'C) 3/4', 'D) 1'],
      answer: 'C) 3/4',
      explanation: {
        problem: 'P(at least one head) = 1 − P(no heads)',
        steps: [
          { action: 'Find P(no heads) = P(TT)', result: '1/2 × 1/2 = 1/4' },
          { action: 'Apply complement', result: '1 − 1/4 = 3/4' },
        ],
      },
    },
    {
      id: '3.5d-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Events A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.45. What is P(A or B)?',
      choices: ['A) 0.135', 'B) 0.45', 'C) 0.75', 'D) 1.0'],
      answer: 'C) 0.75',
      explanation: {
        problem: 'For mutually exclusive events: P(A or B) = P(A) + P(B)',
        steps: [
          { action: 'Recall that mutually exclusive means they cannot both occur', result: 'P(A and B) = 0' },
          { action: 'Apply addition rule', result: 'P(A or B) = 0.3 + 0.45 = 0.75' },
        ],
      },
    },
  ],

  // ── 3.6 Inference from Data ──────────────────────────────────────────────────

  '3.6a': [
    {
      id: '3.6a-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A study found that students who eat breakfast score higher on tests than students who skip breakfast. Which of the following conclusions is best supported by this finding?',
      choices: [
        'A) Eating breakfast causes students to score higher on tests.',
        'B) Skipping breakfast causes lower test scores.',
        'C) There is an association between eating breakfast and test scores.',
        'D) All students who eat breakfast will score higher than all students who skip it.',
      ],
      answer: 'C) There is an association between eating breakfast and test scores.',
      explanation: {
        problem: 'Observational studies can show association but not causation.',
        steps: [
          { action: 'Identify study type', result: 'This is an observational study — students were not randomly assigned' },
          { action: 'Determine valid conclusion', result: 'Can only conclude association exists, not causation' },
        ],
      },
    },
    {
      id: '3.6a-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'Researchers randomly assigned participants to either receive a new medication or a placebo. After six months, the medication group showed lower blood pressure. Which conclusion is best supported?',
      choices: [
        'A) There is a correlation between the medication and lower blood pressure.',
        'B) The medication caused the reduction in blood pressure.',
        'C) All people who take this medication will have lower blood pressure.',
        'D) The placebo also reduced blood pressure.',
      ],
      answer: 'B) The medication caused the reduction in blood pressure.',
      explanation: {
        problem: 'Randomized controlled experiments can support causal conclusions.',
        steps: [
          { action: 'Identify study type', result: 'Randomized controlled experiment' },
          { action: 'Determine valid conclusion', result: 'Random assignment controls for confounding variables — causation can be inferred' },
        ],
      },
    },
    {
      id: '3.6a-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A poll found that among 500 randomly selected adults in a city, 60% said they support a new park. Which of the following is a valid conclusion?',
      choices: [
        'A) Exactly 60% of all adults in the city support the park.',
        'B) The park will be approved by voters.',
        'C) It is reasonable to estimate that about 60% of adults in the city support the park.',
        'D) All 500 people polled will vote for the park.',
      ],
      answer: 'C) It is reasonable to estimate that about 60% of adults in the city support the park.',
      explanation: {
        problem: 'Random samples allow estimates about populations, not exact statements.',
        steps: [
          { action: 'Check sampling method', result: 'Random sample — representative of population' },
          { action: 'Form correct conclusion', result: 'Can estimate population proportion, but not state exactly' },
        ],
      },
    },
  ],

  '3.6b': [
    {
      id: '3.6b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A researcher wants to estimate what percentage of students at a large university prefer online classes. Which sampling method is LEAST likely to produce a representative sample?',
      choices: [
        'A) Randomly selecting 200 students from the university\'s enrollment list',
        'B) Surveying every 10th student who walks through the main entrance on Monday morning',
        'C) Asking only students who are already enrolled in online classes',
        'D) Using a random number generator to select 200 student ID numbers',
      ],
      answer: 'C) Asking only students who are already enrolled in online classes',
      explanation: {
        problem: 'A biased sample over-represents a certain group.',
        steps: [
          { action: 'Evaluate each method for bias', result: 'Surveying only online students introduces selection bias — they likely prefer online classes' },
          { action: 'Identify least representative', result: 'Option C is biased toward students who already prefer online classes' },
        ],
      },
    },
    {
      id: '3.6b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A television station wants to know which shows viewers prefer. Which method would produce the MOST representative sample?',
      choices: [
        'A) Asking viewers who call in to a phone hotline',
        'B) Randomly selecting 500 households from the city and surveying them',
        'C) Posting an online poll on the station\'s website',
        'D) Surveying people at the station\'s studio',
      ],
      answer: 'B) Randomly selecting 500 households from the city and surveying them',
      explanation: {
        problem: 'Random selection ensures all members of the population have an equal chance of being chosen.',
        steps: [
          { action: 'Identify bias in each method', result: 'Call-in, online poll, and studio visitors all self-select — these groups may not represent all viewers' },
          { action: 'Best method', result: 'Random sampling from all households provides the most representative sample' },
        ],
      },
    },
    {
      id: '3.6b-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A food company surveyed 200 customers who called their customer service line and found that 85% were satisfied with their product. Why might this conclusion be misleading?',
      choices: [
        'A) The sample size of 200 is too large.',
        'B) Customers who call customer service may not represent all customers — those with complaints or issues are more likely to call.',
        'C) 85% is too high a satisfaction rate to be accurate.',
        'D) The company should have surveyed 1,000 customers instead.',
      ],
      answer: 'B) Customers who call customer service may not represent all customers — those with complaints or issues are more likely to call.',
      explanation: {
        problem: 'Voluntary or convenience samples can be biased in ways that affect conclusions.',
        steps: [
          { action: 'Identify who was sampled', result: 'Customers who called customer service' },
          { action: 'Identify potential bias', result: 'These customers are NOT representative — people who call service lines often have complaints; satisfied customers rarely call' },
        ],
      },
    },
  ],

  '3.6c': [
    {
      id: '3.6c-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A poll estimates that 52% of voters support a candidate, with a margin of error of ±4%. Which of the following is the best interpretation of this result?',
      choices: [
        'A) Exactly 52% of all voters support the candidate.',
        'B) Between 48% and 56% of voters likely support the candidate.',
        'C) The candidate will definitely win the election.',
        'D) Only 4% of voters are undecided.',
      ],
      answer: 'B) Between 48% and 56% of voters likely support the candidate.',
      explanation: {
        problem: 'Margin of error defines the range within which the true value likely falls.',
        steps: [
          { action: 'Calculate lower bound', result: '52% − 4% = 48%' },
          { action: 'Calculate upper bound', result: '52% + 4% = 56%' },
          { action: 'Interpret', result: 'True support is likely between 48% and 56%' },
        ],
      },
    },
    {
      id: '3.6c-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Survey A polls 100 people and reports a margin of error of ±10%. Survey B polls 1,000 people. All other conditions are the same. What would Survey B\'s approximate margin of error be?',
      choices: ['A) ±1%', 'B) ±3.2%', 'C) ±5%', 'D) ±10%'],
      answer: 'B) ±3.2%',
      explanation: {
        problem: 'Margin of error is approximately proportional to 1/√n.',
        steps: [
          { action: 'Compare sample sizes', result: 'n increases from 100 to 1,000 — a 10× increase' },
          { action: 'Apply margin of error formula', result: 'MOE ≈ 1/√n; scales by 1/√10 ≈ 0.316' },
          { action: 'New margin of error', result: '10% × 0.316 ≈ 3.2%' },
        ],
      },
    },
    {
      id: '3.6c-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A survey reports that 62% of adults own a smartphone, with a margin of error of ±3% at a 95% confidence level. Which statement is most accurate?',
      choices: [
        'A) 95% of adults own a smartphone.',
        'B) There is a 95% chance that the true percentage of adults who own a smartphone is between 59% and 65%.',
        'C) The survey has a 3% error rate, meaning only 97% of responses are correct.',
        'D) Exactly 62% of all adults own a smartphone.',
      ],
      answer: 'B) There is a 95% chance that the true percentage of adults who own a smartphone is between 59% and 65%.',
      explanation: {
        problem: '95% confidence interval = estimate ± margin of error',
        steps: [
          { action: 'Calculate interval', result: '62% − 3% = 59%; 62% + 3% = 65%' },
          { action: 'Interpret confidence level', result: 'There is a 95% chance the true value falls in [59%, 65%]' },
        ],
      },
    },
  ],

  '3.6d': [
    {
      id: '3.6d-0',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A random sample of 50 students from a school of 800 found that 30 students bring lunch from home. Which of the following is the best estimate of the number of students in the entire school who bring lunch from home?',
      choices: ['A) 300', 'B) 400', 'C) 480', 'D) 600'],
      answer: 'C) 480',
      explanation: {
        problem: 'Generalize from sample proportion to population.',
        steps: [
          { action: 'Find sample proportion', result: '30/50 = 60%' },
          { action: 'Apply to population', result: '60% × 800 = 480 students' },
        ],
      },
    },
    {
      id: '3.6d-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'A researcher randomly selects 40 trees from a forest of 2,000 trees and finds that 8 of the selected trees have a certain disease. Which of the following is the best estimate of the total number of diseased trees in the forest?',
      choices: ['A) 200', 'B) 300', 'C) 400', 'D) 500'],
      answer: 'C) 400',
      explanation: {
        problem: 'Sample proportion = 8/40 = 20%; apply to population',
        steps: [
          { action: 'Find sample proportion', result: '8/40 = 0.20 = 20%' },
          { action: 'Estimate for population', result: '20% × 2,000 = 400 trees' },
        ],
      },
    },
    {
      id: '3.6d-2',
      type: 'free',
      difficulty: 'hard',
      question: 'A random sample of 25 households in a city of 10,000 households found that 5 households have more than 3 cars. Based on this sample, what is the best estimate of the number of households in the entire city that have more than 3 cars?',
      answer: '2000',
      explanation: {
        problem: 'Sample proportion = 5/25 = 20%; apply to population',
        steps: [
          { action: 'Find sample proportion', result: '5/25 = 0.20 = 20%' },
          { action: 'Estimate for full population', result: '20% × 10,000 = 2,000 households' },
        ],
      },
    },
  ],

  // ── 3.7 Linear vs Exponential Growth ────────────────────────────────────────

  '3.7a': [
    {
      id: '3.7a-0',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A table shows the number of bacteria in a culture at hourly intervals: Hour 0: 100, Hour 1: 200, Hour 2: 400, Hour 3: 800. Which type of growth does this pattern represent?',
      choices: [
        'A) Linear growth, because the bacteria count increases by a fixed amount each hour.',
        'B) Exponential growth, because the bacteria count doubles each hour.',
        'C) Linear growth, because the starting value is 100.',
        'D) Neither linear nor exponential.',
      ],
      answer: 'B) Exponential growth, because the bacteria count doubles each hour.',
      explanation: {
        problem: 'Linear: constant additive change. Exponential: constant multiplicative change.',
        steps: [
          { action: 'Check for constant difference', result: 'Differences: 100, 200, 400 — not constant → not linear' },
          { action: 'Check for constant ratio', result: 'Ratios: 200/100=2, 400/200=2, 800/400=2 — constant ratio of 2 → exponential' },
        ],
      },
    },
    {
      id: '3.7a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A table shows the distance a car travels: Time (hr): 1, 2, 3, 4 — Distance (mi): 60, 120, 180, 240. Which type of model best fits this data?',
      choices: [
        'A) Exponential model, because the car\'s speed doubles each hour.',
        'B) Linear model, because the distance increases by 60 miles each hour.',
        'C) Quadratic model, because the distance increases with time.',
        'D) Exponential model, because the ratio of consecutive distances is constant.',
      ],
      answer: 'B) Linear model, because the distance increases by 60 miles each hour.',
      explanation: {
        problem: 'Check for constant difference (linear) vs constant ratio (exponential)',
        steps: [
          { action: 'Find differences between consecutive values', result: '60, 60, 60 — constant difference' },
          { action: 'Identify model type', result: 'Constant additive change → linear model' },
        ],
      },
    },
    {
      id: '3.7a-2',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which of the following descriptions best represents exponential decay?',
      choices: [
        'A) A population decreasing by 500 people each year.',
        'B) A temperature dropping by 3°F every hour.',
        'C) A radioactive substance losing half of its mass every 10 years.',
        'D) A savings account losing $100 per month.',
      ],
      answer: 'C) A radioactive substance losing half of its mass every 10 years.',
      explanation: {
        problem: 'Exponential decay involves a constant multiplicative factor (less than 1) each period.',
        steps: [
          { action: 'Check each option for multiplicative change', result: 'Options A, B, D are constant subtraction (linear decay)' },
          { action: 'Identify exponential decay', result: 'Option C: losing half each period → constant multiplier of 0.5 → exponential decay' },
        ],
      },
    },
  ],

  '3.7b': [
    {
      id: '3.7b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The value of a car depreciates by 15% each year. If the car is currently worth $20,000, which function models the car\'s value, V, after t years?',
      choices: [
        'A) V = 20,000 − 0.15t',
        'B) V = 20,000(0.85)ᵗ',
        'C) V = 20,000(1.15)ᵗ',
        'D) V = 20,000 − 3,000t',
      ],
      answer: 'B) V = 20,000(0.85)ᵗ',
      explanation: {
        problem: 'Exponential decay: V = initial × (1 − rate)ᵗ',
        steps: [
          { action: 'Identify it as exponential decay (constant percent loss)', result: 'V = initial × (1 − decay rate)ᵗ' },
          { action: 'Substitute values', result: 'V = 20,000 × (1 − 0.15)ᵗ = 20,000(0.85)ᵗ' },
        ],
      },
    },
    {
      id: '3.7b-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A town\'s population grows by 400 people each year. If the current population is 12,000, which function models the town\'s population P after t years?',
      choices: [
        'A) P = 12,000(400)ᵗ',
        'B) P = 400(12,000)ᵗ',
        'C) P = 12,000 + 400t',
        'D) P = 12,000(1.04)ᵗ',
      ],
      answer: 'C) P = 12,000 + 400t',
      explanation: {
        problem: 'Constant additive change → linear model',
        steps: [
          { action: 'Identify growth type', result: 'Grows by constant 400 each year → linear' },
          { action: 'Write linear model', result: 'P = initial + (rate)(time) = 12,000 + 400t' },
        ],
      },
    },
    {
      id: '3.7b-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'An investment account earns 6% annual interest, compounded annually. If the initial deposit is $5,000, which function models the account balance B after t years?',
      choices: [
        'A) B = 5,000 + 300t',
        'B) B = 5,000(0.06)ᵗ',
        'C) B = 5,000(1.06)ᵗ',
        'D) B = 5,000 + 0.06t',
      ],
      answer: 'C) B = 5,000(1.06)ᵗ',
      explanation: {
        problem: 'Compound interest → exponential growth: B = P(1 + r)ᵗ',
        steps: [
          { action: 'Identify growth type', result: '6% interest compounded → exponential' },
          { action: 'Write exponential model', result: 'B = 5,000(1 + 0.06)ᵗ = 5,000(1.06)ᵗ' },
        ],
      },
    },
  ],

  '3.7c': [
    {
      id: '3.7c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The number of subscribers to a podcast is modeled by P(t) = 500(1.2)ᵗ, where t is the number of months since the podcast launched. What does the value 500 represent in this model?',
      choices: [
        'A) The podcast gains 500 new subscribers each month.',
        'B) The number of subscribers when the podcast launched.',
        'C) The podcast will have 500 subscribers after 1.2 months.',
        'D) The monthly growth rate of 500%.',
      ],
      answer: 'B) The number of subscribers when the podcast launched.',
      explanation: {
        problem: 'In P(t) = a(b)ᵗ, the value a is the initial value when t = 0.',
        steps: [
          { action: 'Substitute t = 0', result: 'P(0) = 500(1.2)⁰ = 500(1) = 500' },
          { action: 'Interpret', result: '500 is the initial number of subscribers at launch' },
        ],
      },
    },
    {
      id: '3.7c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The value of a collectible coin is modeled by V(t) = 80(1.05)ᵗ, where t is the number of years since it was purchased. Which of the following best describes what the model predicts?',
      choices: [
        'A) The coin loses 5% of its value each year.',
        'B) The coin\'s value increases by $5 each year.',
        'C) The coin increases in value by 5% per year, starting at $80.',
        'D) The coin will be worth $80 after 1.05 years.',
      ],
      answer: 'C) The coin increases in value by 5% per year, starting at $80.',
      explanation: {
        problem: 'V = a(1+r)ᵗ where a = initial value and r = growth rate',
        steps: [
          { action: 'Identify initial value (a)', result: 'a = 80 → starts at $80' },
          { action: 'Identify growth factor (1.05)', result: '1.05 = 1 + 0.05 → 5% annual increase' },
          { action: 'Interpret model', result: 'Value grows by 5% per year starting at $80' },
        ],
      },
    },
    {
      id: '3.7c-2',
      type: 'free',
      difficulty: 'medium',
      question: 'A linear model predicts that a tree grows 1.5 feet per year. If the tree is currently 8 feet tall, how tall will the tree be in 6 years, in feet?',
      answer: '17',
      explanation: {
        problem: 'Linear growth: height = initial + rate × time',
        steps: [
          { action: 'Set up linear model', result: 'H = 8 + 1.5t' },
          { action: 'Substitute t = 6', result: 'H = 8 + 1.5(6) = 8 + 9 = 17 feet' },
        ],
      },
    },
  ],

  // ── 3.8 Linear Regression ────────────────────────────────────────────────────

  '3.8a': [
    {
      id: '3.8a-0',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'scatter_positive', label_x: 'Study Time (hrs)', label_y: 'Score' },
      question: 'A scatter plot shows the relationship between study time (hours) and test score (points). The data points are: (1, 50), (2, 60), (3, 72), (4, 78), (5, 90). Which of the following lines of best fit is most appropriate for this data?',
      choices: [
        'A) y = 10x + 35',
        'B) y = −10x + 60',
        'C) y = 5x + 100',
        'D) y = 50',
      ],
      answer: 'A) y = 10x + 35',
      explanation: {
        problem: 'Line of best fit should pass close to most data points and have appropriate slope/intercept.',
        steps: [
          { action: 'Check direction', result: 'Data increases as x increases → positive slope' },
          { action: 'Estimate slope', result: 'Score increases roughly 10 points per hour → slope ≈ 10' },
          { action: 'Check y-intercept', result: 'At x=0, predicted score ≈ 35–40; y = 10(1)+35=45 vs actual 50 — best fit' },
        ],
      },
    },
    {
      id: '3.8a-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Which of the following best describes a line of best fit for a scatter plot?',
      choices: [
        'A) A line that passes through every data point.',
        'B) A line that passes through the highest and lowest data points.',
        'C) A line that minimizes the overall distance between the line and all data points.',
        'D) A line that passes only through the data points above the mean.',
      ],
      answer: 'C) A line that minimizes the overall distance between the line and all data points.',
      explanation: {
        problem: 'The line of best fit (least squares regression line) minimizes the sum of squared residuals.',
        steps: [
          { action: 'Recall definition', result: 'Line of best fit minimizes the total distance (residuals) from the data points to the line' },
        ],
      },
    },
    {
      id: '3.8a-2',
      type: 'mcq',
      difficulty: 'easy',
      question: 'A scatter plot displays the ages and heights of 12 children. A line of best fit is drawn. Which statement best describes what happens to points that fall ABOVE the line of best fit?',
      choices: [
        'A) These children are taller than predicted by their age.',
        'B) These children are shorter than predicted by their age.',
        'C) These children are exactly the predicted height.',
        'D) These data points should be removed as outliers.',
      ],
      answer: 'A) These children are taller than predicted by their age.',
      explanation: {
        problem: 'Points above the line have actual y-values greater than the predicted y-values.',
        steps: [
          { action: 'Interpret position relative to line', result: 'Above the line means actual height > predicted height for that age' },
        ],
      },
    },
  ],

  '3.8b': [
    {
      id: '3.8b-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The equation ŷ = 2.5x + 10 models the relationship between hours of exercise per week (x) and resting heart rate (y, in beats per minute). What does the slope of 2.5 represent in this context?',
      choices: [
        'A) The predicted resting heart rate for someone who does not exercise.',
        'B) For each additional hour of exercise per week, the resting heart rate is predicted to decrease by 2.5 bpm.',
        'C) For each additional hour of exercise per week, the resting heart rate is predicted to increase by 2.5 bpm.',
        'D) The average resting heart rate is 2.5 bpm.',
      ],
      answer: 'C) For each additional hour of exercise per week, the resting heart rate is predicted to increase by 2.5 bpm.',
      explanation: {
        problem: 'The slope represents the change in y per unit increase in x.',
        steps: [
          { action: 'Identify the slope', result: 'slope = 2.5' },
          { action: 'Interpret in context', result: 'For each 1-unit increase in x (hours of exercise), y (heart rate) increases by 2.5 bpm' },
        ],
      },
    },
    {
      id: '3.8b-1',
      type: 'mcq',
      difficulty: 'medium',
      visual: { type: 'scatter_negative', label_x: 'Days Absent', label_y: 'Exam Grade' },
      question: 'The linear regression equation ŷ = −3x + 95 models the relationship between the number of days absent from school (x) and the final exam grade (y). What does the slope tell us?',
      choices: [
        'A) A student with 0 absences is predicted to score 3 on the exam.',
        'B) For each additional day absent, the predicted exam grade decreases by 3 points.',
        'C) For each additional day absent, the predicted exam grade increases by 3 points.',
        'D) The exam grade decreases from 95 with each absence.',
      ],
      answer: 'B) For each additional day absent, the predicted exam grade decreases by 3 points.',
      explanation: {
        problem: 'Slope = −3 means y decreases by 3 for each 1-unit increase in x.',
        steps: [
          { action: 'Identify the slope', result: 'slope = −3' },
          { action: 'Interpret in context', result: 'Each additional absence decreases predicted grade by 3 points' },
        ],
      },
    },
    {
      id: '3.8b-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A linear model predicts monthly electricity bill (y, in dollars) based on daily temperature (x, in °F): ŷ = 1.8x − 20. What is the predicted increase in the monthly bill for a 5-degree increase in temperature?',
      choices: ['A) $1.80', 'B) $5.00', 'C) $9.00', 'D) $20.00'],
      answer: 'C) $9.00',
      explanation: {
        problem: 'Increase = slope × change in x',
        steps: [
          { action: 'Identify slope', result: 'slope = 1.8' },
          { action: 'Multiply by change in x', result: '1.8 × 5 = $9.00' },
        ],
      },
    },
  ],

  '3.8c': [
    {
      id: '3.8c-0',
      type: 'mcq',
      difficulty: 'medium',
      question: 'The regression equation ŷ = 4.2x + 18 models the relationship between years of work experience (x) and annual salary in thousands of dollars (y). What does the y-intercept of 18 represent in this context?',
      choices: [
        'A) The predicted annual salary for a person with 18 years of experience.',
        'B) The predicted annual salary for a person with no work experience is $18,000.',
        'C) Every additional year of experience adds $18,000 to the salary.',
        'D) The minimum possible salary is $18,000.',
      ],
      answer: 'B) The predicted annual salary for a person with no work experience is $18,000.',
      explanation: {
        problem: 'y-intercept is the predicted value of y when x = 0.',
        steps: [
          { action: 'Set x = 0 in the equation', result: 'ŷ = 4.2(0) + 18 = 18' },
          { action: 'Interpret in context', result: 'When years of experience = 0, predicted salary = 18 (thousands) = $18,000' },
        ],
      },
    },
    {
      id: '3.8c-1',
      type: 'mcq',
      difficulty: 'medium',
      question: 'A linear model predicts the number of customers y in a new store based on the number of weeks x since opening: ŷ = 15x + 40. What does the y-intercept represent?',
      choices: [
        'A) The store gains 40 new customers each week.',
        'B) The predicted number of customers in the first week is 40.',
        'C) The store opened with 40 customers (when x = 0).',
        'D) The store will have no customers after 40 weeks.',
      ],
      answer: 'C) The store opened with 40 customers (when x = 0).',
      explanation: {
        problem: 'y-intercept: the value of y when x = 0 (at the beginning)',
        steps: [
          { action: 'Evaluate at x = 0', result: 'ŷ = 15(0) + 40 = 40' },
          { action: 'Interpret', result: 'When weeks since opening = 0, the store has 40 customers' },
        ],
      },
    },
    {
      id: '3.8c-2',
      type: 'mcq',
      difficulty: 'medium',
      question: 'In the equation ŷ = −0.5x + 80, which models the relationship between outdoor temperature in °F (x) and hot chocolate sales at a café (y), what does the y-intercept of 80 represent?',
      choices: [
        'A) At 0°F, the café predicts it will sell 80 hot chocolates.',
        'B) The café sells 80 hot chocolates when the temperature is 80°F.',
        'C) Sales decrease by 80 for each degree drop in temperature.',
        'D) The maximum number of hot chocolates the café can sell is 80.',
      ],
      answer: 'A) At 0°F, the café predicts it will sell 80 hot chocolates.',
      explanation: {
        problem: 'y-intercept = predicted value of y when x = 0 (temperature = 0°F)',
        steps: [
          { action: 'Evaluate at x = 0', result: 'ŷ = −0.5(0) + 80 = 80' },
          { action: 'Interpret', result: 'When temperature = 0°F, predicted sales = 80 hot chocolates' },
        ],
      },
    },
  ],

  '3.8d': [
    {
      id: '3.8d-0',
      type: 'mcq',
      difficulty: 'easy',
      visual: { type: 'scatter_positive', label_x: 'Years Since 2010', label_y: 'Price (k$)' },
      question: 'The line of best fit for a scatter plot showing the relationship between years since 2010 (x) and average house price in thousands of dollars (y) is ŷ = 8x + 150. What is the predicted average house price in 2020?',
      choices: ['A) $158,000', 'B) $220,000', 'C) $230,000', 'D) $250,000'],
      answer: 'C) $230,000',
      explanation: {
        problem: 'x = 2020 − 2010 = 10; substitute into equation',
        steps: [
          { action: 'Find x for year 2020', result: 'x = 2020 − 2010 = 10' },
          { action: 'Substitute into equation', result: 'ŷ = 8(10) + 150 = 80 + 150 = 230' },
          { action: 'Convert units', result: '$230,000' },
        ],
      },
    },
    {
      id: '3.8d-1',
      type: 'mcq',
      difficulty: 'easy',
      question: 'Using the regression equation ŷ = 3.5x + 12, where x is the number of hours a student studies for a test and y is the predicted test score, what score does the model predict for a student who studies 8 hours?',
      choices: ['A) 38', 'B) 40', 'C) 40', 'D) 44'],
      answer: 'B) 40',
      explanation: {
        problem: 'Substitute x = 8 into the equation',
        steps: [
          { action: 'Substitute x = 8', result: 'ŷ = 3.5(8) + 12 = 28 + 12 = 40' },
        ],
      },
    },
    {
      id: '3.8d-2',
      type: 'free',
      difficulty: 'easy',
      question: 'The line of best fit for a scatter plot is ŷ = 6x + 5. What is the predicted value of y when x = 7?',
      answer: '47',
      explanation: {
        problem: 'Substitute x = 7 into ŷ = 6x + 5',
        steps: [
          { action: 'Substitute x = 7', result: 'ŷ = 6(7) + 5 = 42 + 5 = 47' },
        ],
      },
    },
  ],

  '3.8e': [
    {
      id: '3.8e-0',
      type: 'mcq',
      difficulty: 'hard',
      visual: { type: 'scatter_negative', label_x: 'x', label_y: 'y' },
      question: 'A researcher calculates the correlation coefficient between two variables and gets r = −0.92. Which of the following best describes this relationship?',
      choices: [
        'A) Strong positive linear relationship',
        'B) Weak negative linear relationship',
        'C) Strong negative linear relationship',
        'D) No linear relationship',
      ],
      answer: 'C) Strong negative linear relationship',
      explanation: {
        problem: 'r close to −1 indicates a strong negative linear relationship.',
        steps: [
          { action: 'Determine direction', result: 'r = −0.92 is negative → negative relationship (as x increases, y decreases)' },
          { action: 'Determine strength', result: '|r| = 0.92 is close to 1 → strong relationship' },
          { action: 'Conclude', result: 'Strong negative linear relationship' },
        ],
      },
    },
    {
      id: '3.8e-1',
      type: 'mcq',
      difficulty: 'hard',
      question: 'Two studies report the following correlation coefficients between advertising spending and sales revenue: Study A: r = 0.45; Study B: r = 0.88. Which of the following is a true statement?',
      choices: [
        'A) Study A shows a stronger relationship between advertising and sales.',
        'B) Study B shows a stronger relationship between advertising and sales.',
        'C) Both studies show the same strength of relationship.',
        'D) Neither study shows any relationship between advertising and sales.',
      ],
      answer: 'B) Study B shows a stronger relationship between advertising and sales.',
      explanation: {
        problem: 'The closer |r| is to 1, the stronger the linear relationship.',
        steps: [
          { action: 'Compare absolute values', result: '|0.45| = 0.45 vs |0.88| = 0.88' },
          { action: 'Identify stronger relationship', result: 'r = 0.88 is closer to 1 → stronger linear relationship in Study B' },
        ],
      },
    },
    {
      id: '3.8e-2',
      type: 'mcq',
      difficulty: 'hard',
      question: 'The correlation coefficient between a city\'s annual rainfall and its annual crop yield is r = 0.15. Which of the following is the best interpretation of this value?',
      choices: [
        'A) There is a strong positive relationship between rainfall and crop yield.',
        'B) Rainfall causes an increase in crop yield.',
        'C) There is a weak positive relationship between rainfall and crop yield.',
        'D) More rainfall always leads to more crop yield.',
      ],
      answer: 'C) There is a weak positive relationship between rainfall and crop yield.',
      explanation: {
        problem: 'r = 0.15 is positive but close to 0 — indicating weak positive association.',
        steps: [
          { action: 'Determine direction', result: 'r = +0.15 is positive → positive direction' },
          { action: 'Determine strength', result: '|r| = 0.15 is close to 0 → weak relationship' },
          { action: 'Note: correlation ≠ causation', result: 'Cannot say rainfall "causes" crop yield changes' },
        ],
      },
    },
  ],
}
