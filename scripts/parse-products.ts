// Script to parse and display product titles from JSON
import fs from 'fs'

const data = JSON.parse(fs.readFileSync('./data/products-import.json', 'utf8'))

console.log(`Total products: ${data.length}`)
console.log('\nProducts:')
data.forEach((p: any, i: number) => {
  console.log(`${i + 1}. ${p.title} (${p.handle})`)
})
