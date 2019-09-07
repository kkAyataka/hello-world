CodeceptJSを動かしてみる
================================================================================

作成時の環境
--------------------------------------------------------------------------------

- Windows 10 1809
- Google Chrome 76.0.3809.100（Official Build） （64 ビット）
- Node.js v10.16.2
- Java OpenJDK 11 64-bit (11+28)
- ChromeDriver（単独で動かした場合）
    - Node.jsのselenium-standaloneを使用する場合は不要だけど、単独で動かす場合に必要
    - ChromeDriver 76.0.3809.68
    - Selenium Standalone Server 3.141.59


セットアップ
--------------------------------------------------------------------------------

- `npm install -g lite-server`で簡易のWebサーバーを用意する
- `npm install`でパッケージをインストール
- `npx selenium-standalone install`でChromeDriver等必要なWebDriverをダウンロード


実行
--------------------------------------------------------------------------------

とりあえず、`lite-server`を動かして...

```
$ lite-server .
```

`selenium-standalone`も動かす。

```
$ npx selenium-standalone start
```

で、テスト実行。日本語に設定していると日本語で出力される。

```
$ npx codeceptjs run --steps
CodeceptJS v2.3.0
Using test root "D:\Projects\hello-world\hello-codeceptjs"

Index test --
  test stage text
    私は ページを移動する "http://localhost:3000"
    私は テキストがあるか確認する "Initial"
    私は クリックする "button"
    私は テキストがあるか確認する "Hello"
  √ OK in 466ms
```


参考
--------------------------------------------------------------------------------

- [CodeceptJS](https://codecept.io/)
- [Selenium](https://www.seleniumhq.org/)
- [ChromeDriver](https://chromedriver.chromium.org/)
- [AdoptOpenJDK](https://adoptopenjdk.net/)
