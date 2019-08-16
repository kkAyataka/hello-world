Seleniumを使用してChromeをコントロール
================================================================================

SeleniumとChromeでHTMLをコントロールしてみる。使用環境はNode.js。


作成時の環境
--------------------------------------------------------------------------------

- Windows 10 1809
- Google Chrome 76.0.3809.100（Official Build） （64 ビット）
- Node.js v10.16.2
- Selenium 4.0.0-alpha.4
- ChromeDriver 76.0.3809.68

ChromeとChromeDriverはバージョンを合わせたほうがよさそう。


セットアップ
--------------------------------------------------------------------------------

- [ChromeDriver](https://chromedriver.chromium.org/)をダウンロードして、パスが通っているところに置く/パスを通す
- `npm install -g lite-server`簡易のWebサーバーを用意する
    - この辺はお好み。
- `npm install`
    - Selenium単体では`npm install selenium-webdriver`


実行
--------------------------------------------------------------------------------

とりあえず`lite-server`を動かす。

```
$ lite-server .
```

そのあとに実行する。クリック前のテキストと、クリック後のテキストがコンソールに表示される。
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
