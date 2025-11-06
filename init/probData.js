const sampleProblems = [
  {
    "problemNumber": 1,
    "title": "Linear Equation",
    "statement": "Consider a simple linear equation where a variable x represents an unknown quantity. The equation is 2x + 3 = 11, meaning two times the unknown number plus three equals eleven. Your task is to determine the value of x that satisfies this equation. To do this, you should first isolate x by subtracting 3 from both sides, which gives 2x = 8. Then divide both sides by 2 to find the value of x. This problem helps reinforce basic algebraic manipulation skills and the principle of maintaining equality on both sides of an equation. Be sure to check your solution by substituting it back into the original equation to verify that both sides are equal.",
    "difficulty": "Easy",
    "topic": "Algebra",
    "solution": "x = 4"
  },
  {
    "problemNumber": 2,
    "title": "Triangle Area",
    "statement": "You are asked to calculate the area of a triangle, which is one of the basic shapes in geometry. This triangle has a base measuring 8 centimeters and a height measuring 5 centimeters. To find the area, you must recall the formula for the area of a triangle, which is one-half of the base multiplied by the height. Start by multiplying the base by the height, giving 8 times 5 equals 40. Then take half of that result, which is 20. The final answer should be expressed in square centimeters. This exercise reinforces understanding of geometric formulas, unit measurement, and the application of multiplication and division in a real-world context.",
    "difficulty": "Easy",
    "topic": "Geometry",
    "solution": "Area = 20 cm²"
  },
  {
    "problemNumber": 3,
    "title": "Derivative",
    "statement": "In this calculus problem, you are asked to find the derivative of the polynomial function f(x) = x³ + 2x² + 5x + 7. Differentiation is a key concept that measures the rate at which a function changes. To solve this, you must apply the power rule for derivatives, which states that the derivative of x^n is n*x^(n-1). Compute the derivative term by term: the derivative of x³ is 3x², the derivative of 2x² is 4x, the derivative of 5x is 5, and the derivative of the constant 7 is 0. Combine these to write f'(x) = 3x² + 4x + 5. This problem reinforces basic derivative rules and algebraic manipulation.",
    "difficulty": "Medium",
    "topic": "Calculus",
    "solution": "f'(x) = 3x² + 4x + 5"
  },
  {
    "problemNumber": 4,
    "title": "Combinations",
    "statement": "This problem involves combinatorics, where you are asked to determine the number of ways to choose a subset of items from a larger set. Specifically, you must find how many ways three students can be chosen from a group of ten. To solve this, you use the combination formula, denoted nCr = n! / (r! * (n-r)!). Here n is the total number of items (10 students), and r is the number of items chosen (3 students). Compute 10! / (3! * 7!) to find the result, which equals 120. This problem illustrates the principles of combinations, factorials, and counting techniques used in probability and combinatorics.",
    "difficulty": "Medium",
    "topic": "Combinatorics",
    "solution": "10C3 = 120 ways"
  },
  {
    "problemNumber": 5,
    "title": "Prime Numbers",
    "statement": "In this number theory problem, you are asked to find all prime numbers less than 20. A prime number is a positive integer greater than 1 that has no divisors other than 1 and itself. Begin by listing numbers from 2 to 19 and examine each number to see if it has any divisors besides 1 and itself. Numbers such as 2, 3, 5, 7, 11, 13, 17, and 19 satisfy this condition. Numbers like 4, 6, 8, 9, 10, 12, 14, 15, 16, and 18 are not prime because they can be divided evenly by other numbers. Understanding primes is crucial in fields like cryptography and mathematics.",
    "difficulty": "Easy",
    "topic": "Number Theory",
    "solution": "2, 3, 5, 7, 11, 13, 17, 19"
  },
  {
    "problemNumber": 6,
    "title": "Probability of a Die",
    "statement": "You are asked to calculate the probability of rolling an even number on a standard six-sided die. A fair die has six faces numbered 1 through 6, and each face has an equal chance of appearing when rolled. The even numbers on the die are 2, 4, and 6. Probability is defined as the number of favorable outcomes divided by the total number of outcomes. In this case, there are three favorable outcomes and six possible outcomes in total. Therefore, the probability is 3/6, which simplifies to 1/2. This problem helps reinforce the concepts of probability, counting outcomes, and fractions in real-world situations involving chance.",
    "difficulty": "Easy",
    "topic": "Probability",
    "solution": "3/6 = 1/2"
  },
  {
    "problemNumber": 7,
    "title": "Pythagoras",
    "statement": "In this geometry problem, you are asked to find the hypotenuse of a right-angled triangle where the lengths of the other two sides are 6 cm and 8 cm. According to the Pythagorean theorem, in a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. Therefore, compute 6² + 8², which equals 36 + 64 = 100. Then, take the square root of 100 to determine the hypotenuse. The answer is 10 cm. This problem reinforces understanding of triangle properties, the Pythagorean theorem, and basic arithmetic.",
    "difficulty": "Easy",
    "topic": "Geometry",
    "solution": "c = 10 cm"
  },
  {
    "problemNumber": 8,
    "title": "Integration",
    "statement": "You are asked to perform an integration of the polynomial function 3x² + 4x + 5. Integration is the reverse process of differentiation and is used to find the area under a curve. To integrate each term, apply the power rule of integration, which states that the integral of x^n dx is x^(n+1)/(n+1) plus a constant of integration, C. Integrate 3x² to get x³, integrate 4x to get 2x², and integrate 5 to get 5x. Combine these to write the final result as x³ + 2x² + 5x + C. This problem reinforces the basic rules of integration and the concept of antiderivatives.",
    "difficulty": "Medium",
    "topic": "Calculus",
    "solution": "x³ + 2x² + 5x + C"
  },
  {
    "problemNumber": 9,
    "title": "Sum of Angles",
    "statement": "In this geometry problem, you are asked to find the sum of interior angles of a hexagon. A hexagon is a polygon with six sides, and the sum of interior angles of any polygon can be calculated using the formula (n-2)*180°, where n is the number of sides. For a hexagon, n = 6, so the sum of interior angles is (6-2)*180° = 4*180° = 720°. Understanding this property is important for studying shapes, angles, and polygon characteristics. This problem emphasizes the use of formulas in geometry to find properties of polygons and reinforces understanding of angle relationships.",
    "difficulty": "Easy",
    "topic": "Geometry",
    "solution": "720°"
  },
  {
    "problemNumber": 10,
    "title": "Logarithm",
    "statement": "This algebra problem asks you to simplify the logarithm expression log₂(8). Recall that a logarithm log_b(a) answers the question: 'To what power should the base b be raised to get a?' Here, the base is 2 and the number is 8. Since 2³ = 8, the logarithm evaluates to 3. This problem reinforces understanding of logarithms as inverse operations of exponentiation and the relationships between powers and logarithms. Simplifying logarithms correctly is a fundamental skill used in algebra, computer science, and scientific calculations involving exponential growth or decay.",
    "difficulty": "Easy",
    "topic": "Algebra",
    "solution": "3"
  },
  {
    "problemNumber": 11,
    "title": "Permutations",
    "statement": "In this combinatorics problem, you are asked to calculate how many different ways five distinct books can be arranged on a shelf. This requires understanding permutations, where order matters. The total number of arrangements is given by factorial notation, n!, where n is the number of items. In this case, 5! = 5*4*3*2*1 = 120 ways. This problem reinforces understanding of factorials, counting principles, and permutation rules. Carefully consider that each different ordering counts as unique. This type of problem is frequently encountered in probability, scheduling, and arrangement tasks.",
    "difficulty": "Medium",
    "topic": "Combinatorics",
    "solution": "5! = 120"
  },
  {
    "problemNumber": 12,
    "title": "Divisibility",
    "statement": "You are asked to determine whether the number 273 is divisible by 3. According to divisibility rules, a number is divisible by 3 if the sum of its digits is divisible by 3. Add the digits: 2 + 7 + 3 = 12. Since 12 is divisible by 3, the original number 273 is also divisible by 3. This problem reinforces understanding of number theory, divisibility rules, and simple arithmetic calculations. Verifying divisibility through the sum of digits is a quick and reliable method for checking divisibility by 3 in integers.",
    "difficulty": "Easy",
    "topic": "Number Theory",
    "solution": "Yes, 2+7+3 = 12, which is divisible by 3."
  },
  {
    "problemNumber": 13,
    "title": "Circle Circumference",
    "statement": "In this geometry problem, you are asked to find the circumference of a circle with radius 7 cm. The circumference of a circle represents the total distance around it and is calculated using the formula C = 2πr, where r is the radius. Substitute the radius: C = 2*π*7 = 14π. Using the approximation π ≈ 3.14, the circumference is approximately 43.96 cm. This problem reinforces understanding of the properties of circles, the use of formulas, and approximations in calculations. Express your answer with appropriate units, which is essential for clarity in measurement problems.",
    "difficulty": "Easy",
    "topic": "Geometry",
    "solution": "C = 2πr = 44 cm (approx)"
  },
  {
    "problemNumber": 14,
    "title": "Expected Value",
    "statement": "In this probability problem, you are asked to calculate the expected value of a fair six-sided die. The expected value represents the average outcome if an experiment is repeated many times. For a fair die, the outcomes are 1, 2, 3, 4, 5, and 6. To compute the expected value, sum all outcomes and divide by the total number of outcomes: (1+2+3+4+5+6)/6 = 21/6 = 3.5. This problem illustrates the concept of expected value, which is widely used in probability, statistics, and decision-making, giving a sense of the long-term average result of random events.",
    "difficulty": "Medium",
    "topic": "Probability",
    "solution": "3.5"
  },
  {
    "problemNumber": 15,
    "title": "Quadratic Roots",
    "statement": "You are asked to find the roots of the quadratic equation x² - 5x + 6 = 0. Quadratic equations are polynomials of degree 2, and their roots are values of x that satisfy the equation. Factor the quadratic: x² - 5x + 6 = (x - 2)(x - 3). Set each factor equal to zero to find the roots: x - 2 = 0 gives x = 2, and x - 3 = 0 gives x = 3. This problem reinforces understanding of factoring, quadratic equations, and solving for unknowns. Checking the roots by substituting them into the original equation ensures accuracy of your solution.",
    "difficulty": "Easy",
    "topic": "Algebra",
    "solution": "x = 2 or x = 3"
  },
  {
    "problemNumber": 16,
    "title": "Factorial",
    "statement": "You are asked to calculate 6!, which represents the factorial of 6. A factorial is the product of all positive integers up to a given number n. For 6!, compute 6*5*4*3*2*1 = 720. Factorials are commonly used in combinatorics, probability, and algebra for counting arrangements and permutations. This problem reinforces the concept of factorials and basic multiplication skills. Understanding factorials is important because they form the foundation for calculating combinations, permutations, and other counting methods in mathematics.",
    "difficulty": "Easy",
    "topic": "Combinatorics",
    "solution": "720"
  },
  {
    "problemNumber": 17,
    "title": "Sum Formula",
    "statement": "In this algebra problem, you are asked to find the sum of the first 10 natural numbers. Natural numbers are positive integers starting from 1. To find the sum, you can use the formula n(n+1)/2, where n is the last number in the series. Substitute n = 10: 10(10+1)/2 = 10*11/2 = 55. This problem helps reinforce understanding of arithmetic series, summation formulas, and simple algebraic manipulation. Knowing this formula allows quick calculation of sums of consecutive numbers without adding each number individually.",
    "difficulty": "Easy",
    "topic": "Algebra",
    "solution": "55"
  },
  {
    "problemNumber": 18,
    "title": "Prime Check",
    "statement": "You are asked to determine whether the number 37 is a prime number. Prime numbers are integers greater than 1 that are divisible only by 1 and themselves. To check whether 37 is prime, examine whether it has any divisors other than 1 and 37. Dividing 37 by numbers from 2 to 6 does not result in whole numbers. Therefore, 37 has no divisors other than 1 and itself and is prime. This problem reinforces the concept of prime numbers, divisibility, and careful checking of factors. Prime numbers play a fundamental role in number theory, cryptography, and mathematics.",
    "difficulty": "Easy",
    "topic": "Number Theory",
    "solution": "Yes, only divisible by 1 and 37."
  },
  {
    "problemNumber": 19,
    "title": "Binomial Expansion",
    "statement": "You are asked to expand the binomial expression (x + 2)³ using the binomial theorem. The binomial theorem allows us to expand powers of a sum, and for (a + b)³, the expansion is a³ + 3a²b + 3ab² + b³. Apply this with a = x and b = 2: x³ + 3(x²*2) + 3(x*4) + 8 = x³ + 6x² + 12x + 8. This problem reinforces understanding of binomial expansions, algebraic manipulation, and the use of formulas for powers of sums. Binomial expansions are widely used in algebra, probability, and combinatorics.",
    "difficulty": "Medium",
    "topic": "Algebra",
    "solution": "x³ + 6x² + 12x + 8"
  },
  {
    "problemNumber": 20,
    "title": "Simple Interest",
    "statement": "You are asked to calculate the simple interest (SI) on a principal amount of 1000 units of currency, with an annual interest rate of 5% over 2 years. Simple interest is calculated using the formula SI = P*R*T/100, where P is the principal, R is the rate, and T is the time. Substitute the given values: SI = 1000*5*2/100 = 100. This problem reinforces understanding of financial mathematics, percentage calculations, and the formula for simple interest. Simple interest is a foundational concept used in banking, loans, and basic finance problems.",
    "difficulty": "Easy",
    "topic": "Algebra",
    "solution": "SI = 100"
  }
]



module.exports = { data: sampleProblems };
