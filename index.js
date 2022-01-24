const { chromium } = require('playwright')

const shops = [
  {
    name: 'GAME',
    url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    checkStock: async ({ page }) => {

    }
  },
  {
    name: 'GAME',
    url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    checkStock: async ({ page }) => {

    }
  }

]
;(async () => {
  for (const shop of shops) {
    console.log(shop.name)
  }
  /* const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://www.game.es/consola-playstation-5-playstation-5-183224')
  await page.screenshot({ path: 'ps5.png' })
  const prueba = await (await page.innerText('.buy--type >> span')).toLowerCase()
  if (prueba.includes('no disponible')) {
    console.log('No tenemos PS5')
  } else {
    console.log('Tenemos PS5')
  }
  console.log(prueba)
  await browser.close() */
})()
