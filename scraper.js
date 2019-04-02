const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const writeStream = fs.createWriteStream('this.csv')

// writeStream.write(`Fruit, User, Power`)

request('https://claystage.com/one-piece/characters/devil-fruits', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html)

    const table = $('td').text()
    // console.log(table.text())
    $('tr').each((i, el) => {
      const data = $(el).text()

      // Write Row To CSV
      writeStream.write(`${data} \n`);
    });
    // writeStream.write(`${table}`)
  }
})