const { chromium, firefox } = require('playwright')

const shops = [
  {
    name: 'GAME',
    url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    checkStock: async ({ page }) => {
      const stock = await (await page.innerText('.buy--type >> span')).toLowerCase()
      return !stock.includes('no disponible')
    }
  },
  {
    name: 'MediaMarkt',
    url: 'https://www.mediamarkt.es/es/product/_consola-sony-ps5-825-gb-4k-hdr-blanco-1487016.html',
    checkStock: async ({ page }) => {
      const stock = await (await page.$$('[data-product-online-status="CURRENTLY_NOT_AVAILABLE"]'))
      return stock.lenght === 0
    }
  },
  {
    name: 'Amazon',
    url: 'https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B08KKJ37F7?th=1',
    checkStock: async ({ page }) => {
      const stock = await (await page.$$('[name="submit.add-to-cart"]'))
      return !stock.lenght === 0
    }
  },
  {
    name: 'El Corte Ingles',
    url: 'https://www.elcorteingles.es/videojuegos/A37046604-consola-playstation-5/',
    checkStock: async ({ page }) => {
      const stock = await page.$$('#js_add_to_cart_desktop')
      console.log(stock)
    }
  },
  {
    name: 'PCcomponentes',
    url: 'https://www.pccomponentes.com/sony-playstation-5-digital-chassis-b-dualsense-midnight-black-mando-inalambrico-para-ps5',
    checkStock: async ({ page }) => {
      return false
    }
  }
]

;(async () => {
  for (const shop of shops) {
    const { name, url, checkStock } = shop
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const hasStock = await checkStock({ page })
    console.log({ name, hasStock })
    await page.screenshot({ path: `./screenshots/${name}.png` })
    await browser.close()
  }
})()

/* Hay varias webs que nos bloquean */
