Seleniumを使用してChromeをコントロールする
================================================================================

SeleniumとChromeでHTMLをコントロールしてみる。使用環境はNode.js。


環境
--------------------------------------------------------------------------------

- Windows 10 1809
- Google Chrome 76.0.3809.100（Official Build） （64 ビット）
- Node.js v10.16.2
- Selenium 4.0.0-alpha.4
- ChromeDriver 76.0.3809.68


セットアップ
--------------------------------------------------------------------------------

- 作業用に適当にフォルダを準備
- `npm install selenium-webdriver`でselenium-webdriverをインストール
- [ChromeDriver](https://chromedriver.chromium.org/)をダウンロードして、パスが通っているところに置く/パスを通す
    - 案外悩ましい...
        - Home: `C:\Users\kkAyataka\.bin`
        - C: `C:\ChromeDriver`
        - npm: `C:\Users\kkAyataka\AppData\Roaming\npm`
- `npm install -g lite-server`で簡易のWebサーバーを用意する
    - この辺はお好み。


HTML
--------------------------------------------------------------------------------

操作対象のHTML。`#button`をクリックすると`#stage`のテキストが変わるというもの。
Seleniumで`#button`をクリックし、`#stage`の内容を読んでみる。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <script>
    function onLoad() {
      const btn = document.getElementById('button');
      const stage = document.getElementById('stage');

      // #buttonで#stageの内容を書き換える
      btn.addEventListener('click', (e) => {
        stage.innerHTML = 'Hello';
      });
    }
  </script>
  <body onload="onLoad()">
    <h1>Hello, World</h1>
    <button type="button" id="button">Button</button>
    <div id="stage" >Initial</div>
  </body>
</html>
```


main.js（Seleniumを用いたNode.jsアプリ）
--------------------------------------------------------------------------------

リファレンス等いろいろ参照して、以下で動いたよ、というサンプル。

```js
const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// lite-serverで動かしているURL（ポート）を指定
driver.get('http://localhost:3000/');

// DOMオブジェクト
const btn = driver.findElement(webdriver.By.css('#button'));
const stage = driver.findElement(webdriver.By.css('#stage'));

stage.getText() // #stageのテキストを取得
.then((r) => {
  console.log(r); // Initial

  return btn.click(); // #buttonのクリック
})
.then(() => stage.getText()) // もう一回Get
.then((r) => {
  console.log(r); // Hello
})
.then(() => {
  driver.quit();
});
```


実行
--------------------------------------------------------------------------------

とりあえず、lite-serverを動かして...

```
$ lite-server .
```

Node.jsを実行する。クリック前のテキストと、クリック後のテキストがコンソールに表示される。
動作的にはウェブブラウザ（Chrome）が立ち上がって、コードの通りに動作して閉じる。
一瞬で動いてしまうけど、一応目視でも確認できる。

```
$ node main.js

DevTools listening on ws://127.0.0.1:57609/devtools/browser/8137a479-55b0-4422-81cc-405fcec17c6b
Initial
Hello
```


参考
--------------------------------------------------------------------------------

- [Selenium](https://www.seleniumhq.org/)
- [selenium-webdriver](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
- [npm selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
- [ChromeDriver](https://chromedriver.chromium.org/)
