const puppeteer = require('puppeteer');

let browser, page;


test('Add two numbers ', () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

//runs after each command
afterEach(async () => {
  await browser.close();

});

test('The header has the correct text', async () => {

  const text = await page.$eval('a.brand-logo', el => el.innerHTML)

  expect(text).toEqual('Blogster');

});

test('clicking login starts Oauth flow ', async () => {
  await page.click('.right a ');
  const url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});
