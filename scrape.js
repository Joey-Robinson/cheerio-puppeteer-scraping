const puppeteer = require('puppeteer')

const call = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // await page.goto('https://shipoffools.fandom.com/wiki/Devil_Fruit_Encyclopedia');
  await page.goto('https://claystage.com/one-piece/characters/devil-fruits');

  const something = await page.evaluate(() =>
    Array.from(document.querySelectorAll("tbody tr")).map(info => info.textContent)
  )
  // const something = await page.evaluate(() =>
  // Array.from(document.querySelectorAll("table tbody tr")).map(info => info.textContent)
  // )

  console.log(something)
  await browser.close()
}

call()
