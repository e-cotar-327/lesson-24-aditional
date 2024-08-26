// Sarcina 1: Conversia temperaturii din Fahrenheit în Celsius
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9
  return celsius;
}

const tempInCelsius = fahrenheitToCelsius(98.6)
console.log(`98.6 grade Fahrenheit sunt ${tempInCelsius} grade Celsius.`)

// Sarcina 2: Calcularea ariei unui cerc

function calculateCircleArea(radius) {
  const PI = 3.14159
  const area = PI * (radius * radius)
  return area
}

const radiusValue = 5
const circleArea = calculateCircleArea(radiusValue)
console.log(`Aria cercului cu raza de ${radiusValue} unități este ${circleArea}`)

// Sarcina 3: Verificarea parității unui număr
function isEven(number) {
  return number % 2 === 0
}

const checkEven = isEven(10)
const checkOdd = isEven(7)

console.log(`Numărul 10 este par? Răspuns: ${checkEven}`)
console.log(`Numărul 7 este par? Răspuns: ${checkOdd}`)





// Sarcina 4: Calcularea și afișarea ariei și perimetrului unui dreptunghi
function rectangleProperties(length, width) {
  function calculateArea() {
    return length * width
  }

  function calculatePerimeter() {
    return 2 * (length + width)
  }

  console.log(`Aria este ${calculateArea()}`)
  console.log(`Perimetrul este ${calculatePerimeter()}`)
}

rectangleProperties(5, 10)

// Sarcina 5: Conversia unor minute în ore și minute

function convertMinutes(totalMinutes) {
  function extractHours() {
    return (totalMinutes - (totalMinutes % 60)) / 60
  }
  
  function extractMinutes() {
    return totalMinutes % 60
  }

  const hours = extractHours()
  const minutes = extractMinutes()
  
  console.log(`Ore: ${hours}, Minute: ${minutes}`)
}

// Testarea funcției
convertMinutes(130)  // Afișează "Ore: 2, Minute: 10"
convertMinutes(75)   // Afișează "Ore: 1, Minute: 15"

// Sarcina 6: Calculul și afișarea masei corporale (BMI)

function calculateBMI(height, weight) {
  return weight / (height * height)
}

function evaluateBMI(bmi) {
  if (bmi < 18.5) return 'subponderal'
  if (bmi >= 18.5 && bmi < 24.9) return 'normal'
  if (bmi >= 25 && bmi < 29.9) return 'supraponderal'
  return 'obez'
}

function printBMIEvaluation(name, height, weight) {
  const bmi = calculateBMI(height, weight)
  const evaluation = evaluateBMI(bmi)
  console.log(`${name}, BMI-ul tău este ${bmi.toFixed(2)} și ești considerat ${evaluation}.`)
}

printBMIEvaluation('Marius', 1.8, 70)


// Sarcina 7: Calculator de rata de schimb valutar

// Funcția pentru a obține rata de schimb
function getExchangeRate(fromCurrency) {
  if (fromCurrency === 'USD') {
	return 17.55
  } else if (fromCurrency === 'EUR') {
	return 19.32
  } else if (fromCurrency === 'RON') {
	return 3.88
  } else if (fromCurrency === 'GBP') {
	return 22.56
  } else {
	return 0  // Dacă moneda nu este suportată
  }
}

// Funcția pentru a calcula suma convertită
function calculateAmount(initialAmount, rate) {
  return initialAmount * rate
}

// Funcția principală pentru conversia valutei
function convertCurrency(amount, fromCurrency) {
  const rate = getExchangeRate(fromCurrency)
  if (rate === 0) {
	console.log("Moneda nu este suportată.")
	return
  }
 
  const convertedAmount = calculateAmount(amount, rate)
  console.log(`${amount} ${fromCurrency} este echivalent cu ${convertedAmount.toFixed(2)} MDL`)
}

// Testare
convertCurrency(100, 'USD')
convertCurrency(100, 'EUR')
convertCurrency(100, 'RON')
convertCurrency(100, 'GBP')
convertCurrency(100, 'ABC')  // Acesta va afișa "Moneda nu este suportată."
