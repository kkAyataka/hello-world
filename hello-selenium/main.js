const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// サーバーで動かしているURLを指定する
driver.get('http://localhost:3000/');

// DOMオブジェクト
const btn = driver.findElement(webdriver.By.css('#button'));
const stage = driver.findElement(webdriver.By.css('#stage'));

stage.getText()
.then((r) => {
  console.log(r); // Initial

  return btn.click(); // #buttonのクリック
})
.then(() => stage.getText())
.then((r) => {
  console.log(r); // Hello
})
.then(() => {
  driver.quit();
});
