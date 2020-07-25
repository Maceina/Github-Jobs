const puppeteer = require('puppeteer');

(async () => {

let movieUrl = 'https://autoplius.lt/skelbimai/mercedes-benz-s63-amg-5-5-l-kupe-coupe-2015-benzinas-11946673.html';

let browser = await puppeteer.launch();
let page = await browser.newPage();

await page.goto(movieUrl, {waitUntil: 'networkidle2' });

let data = await page.evaluate(() => {

    let title = document.querySelector('div[class="col-8 page-title"] > h1').innerText;
    let price = document.querySelector('div[class="price"]').innerText;
    

    return{
        title,
        price
    }

});

console.log(data);
await browser.close();

})();