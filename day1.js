const fs = require('fs')
const massArray = fs.readFileSync('input/input1.txt').toString().split('\n')

let totalFuel = 0

// Part 1
massArray.forEach(mass => {
  if (mass !== undefined) {
    totalFuel += Math.floor(parseInt(mass) / 3) - 2
  }
})

console.log(totalFuel)

// Part 2

totalFuel = 0
function calculateFuelPerModule (mass) {
  let totalModuleMassFuel = 0
  let remainingMass = mass

  while (remainingMass > 0) {
    remainingMass = Math.floor(parseInt(remainingMass) / 3) - 2
    if (remainingMass > 0) {
      totalModuleMassFuel += remainingMass
    }
  }
  return totalModuleMassFuel
}

// Part 2

massArray.forEach(mass => {
  if (mass !== undefined) {
    totalFuel += calculateFuelPerModule(parseInt(mass))
    console.log(`Total fuel to date ${totalFuel}`)
  }
})

console.log(`FINAL FUEL ${totalFuel}`)
