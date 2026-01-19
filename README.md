# 事業サイト要件定義書
## 見る前に
このリポジトリはzestark公式Webサイトです。
本サイトは「設計思想そのもの」を公開する目的で構築されています。
詳細な設計思想・構造解説はGithub Wikiを参照してください。
## プロジェクト概要
本プロジェクトは、企業用Webサイトです。
## 目的
1. 事業内容の明確な説明
2. 企業イメージ・ブランド価値の向上
3. 問い合わせ・SNS導線の確保
4. ブログによる活動発信
## ターゲットユーザー
1. ゲーム開発・IT分野に興味のある個人
2. プログラミング学習者
3. 業務委託・開発依頼を検討している企業・個人

## ディレクトリ構成(2026/01/18現在)
```
$ tree -I "node_module*"
.
|-- README.md
|-- README_responsive.md
|-- README_shousai.md
|-- app
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- background
|   |   `-- starry-background.tsx
|   |-- emergency
|   |   |-- emergency-notice.tsx
|   |   `-- useDevice.ts
|   |-- interaction
|   |   `-- swipe-container.tsx
|   |-- layout
|   |   |-- footer.tsx
|   |   |-- header.tsx
|   |   `-- navbar.tsx
|   |-- sections
|   |   |-- about-section.tsx
|   |   |-- blog-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- home-section.tsx
|   |   `-- services-section.tsx
|   `-- ui
|       |-- blog-card.tsx
|       |-- services-card.tsx
|       |-- sns-icon-link.tsx
|       `-- sns-icon-list.tsx
|-- eslint.config.mjs
|-- next-env.d.ts
|-- next.config.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- public
|   |-- icons
|   |   |-- approach.svg
|   |   |-- code.svg
|   |   |-- community.svg
|   |   |-- discord.svg
|   |   |-- github.svg
|   |   |-- growth.svg
|   |   |-- streaming.svg
|   |   |-- technique.svg
|   |   `-- twitter.svg
|   |-- images
|   |   `-- zestark-feature.png
|   |-- zestark-logo.svg
|   `-- zestark-star.svg
|-- scripts
|   `-- data
|       |-- blog.ts
|       |-- pages.ts
|       `-- sns-links.ts
|-- styles
|   |-- blog-card.css
|   |-- emergency-notice.css
|   |-- footer.css
|   |-- header.css
|   |-- interactive-icon.css
|   |-- navbar.css
|   |-- sections.css
|   |-- services-card.css
|   |-- sns-icon.css
|   `-- variables.css
`-- tsconfig.json
```

## 構成のポイント
| パス              | 役割                                       |
| --------------- | ---------------------------------------- |
| app/            | Next.js App Router のルート                  |
| app/layout.tsx  | 全体レイアウト定義（Header / Navbar / Footer / 背景） |
| app/page.tsx    | メインページ<br>各 Section コンポーネントを順に配置         |
| app/globals.css | Tailwind / リセット / 全体共通スタイル               |
| ファイル       | 役割                        |
| ---------- | ------------------------- |
| header.tsx | サイト上部の構造・タイトル表示           |
| navbar.tsx | ナビゲーションバー<br>セクション移動・UI制御 |
| footer.tsx | フッター（コピーライト等）             |
| ファイル                 | 役割           |
| -------------------- | ------------ |
| home-section.tsx     | トップ・全体概要     |
| services-section.tsx | 事業内容紹介       |
| about-section.tsx    | 理念・チーム紹介     |
| blog-section.tsx     | 外部ブログ導線・活動紹介 |
| contact-section.tsx  | 問い合わせ・SNSリンク |
| ファイル                 | 役割           |
| -------------------- | ------------ |
| home-section.tsx     | トップ・全体概要     |
| services-section.tsx | 事業内容紹介       |
| about-section.tsx    | 理念・チーム紹介     |
| blog-section.tsx     | 外部ブログ導線・活動紹介 |
| contact-section.tsx  | 問い合わせ・SNSリンク |
| ファイル              | 役割        |
| ----------------- | --------- |
| services-card.tsx | サービス紹介カード |
| blog-card.tsx     | ブログカードUI  |
| sns-icon-link.tsx | 単一SNSリンク  |
| sns-icon-list.tsx | SNSリンク集合  |
| ファイル                  | 役割         |
| --------------------- | ---------- |
| starry-background.tsx | サイト全体の背景演出 |
| ファイル                | 役割                  |
| ------------------- | ------------------- |
| swipe-container.tsx | スワイプ操作などのインタラクション制御 |
| ファイル                 | 役割                |
| -------------------- | ----------------- |
| emergency-notice.tsx | 緊急告知表示用UI         |
| useDevice.ts         | 端末判定・レスポンシブ補助ロジック |
| ファイル         | 役割           |
| ------------ | ------------ |
| blog.ts      | ブログ表示用データ定義  |
| pages.ts     | セクション定義・メタ情報 |
| sns-links.ts | SNSリンク定義     |
| ファイル                                 | 役割          |
| ------------------------------------ | ----------- |
| variables.css                        | CSS変数・テーマ定義 |
| sections.css                         | セクション共通スタイル |
| navbar.css / header.css / footer.css | レイアウト系CSS   |
| services-card.css / blog-card.css    | UI単位CSS     |
| emergency-notice.css                 | 緊急UI専用      |
| パス               | 役割      |
| ---------------- | ------- |
| public/icons/    | SVGアイコン |
| public/images/   | 画像素材    |
| zestark-logo.svg | ロゴ      |
| zestark-star.svg | 装飾用     |


## ページ構成
|ページ名|パス|概要|
|---|---|---|
|ホーム|/sections/home-ection.tsx|トップページ|
|サービス|/sections/services-section.tsx|事業の内容|
|会社紹介|/sections/about-section.tsx|チーム・理念紹介|
|お問い合わせ|/sections/contact-section.tsx|SNSリンク|
|ブログ|/sections/blog-section.tsx|活動報告・コラム|

## 対応デバイス
1. PC
2. タブレット
3. スマートフォン
## 運営情報
事業名：Zestark
主な事業：
システム・アーキテクチャ設計
技術教育・設計レビューサービス
コンテンツ配信

## 事業コンセプト
現実の課題を構造として捉え、
それをシステムへと正確に落とし込む設計力を軸に、
技術支援・教育・コンテンツ発信を通じて、
未来のクリエイターとともに新しい価値を創造します。

## SERVICES
1. システム設計・アーキテクチャ設計
要件や課題を整理し、保守性・拡張性を考慮したシステム構造へと落とし込みます。
技術選定から設計方針の策定まで、一貫した設計支援を行います。
2. 技術教育・設計レビュー
実装に留まらず、
「なぜその設計にするのか」を重視した技術教育と設計レビューを行います。
初学者から実務者まで、設計思考の定着を支援します。
3. コンテンツ発信
システム設計や技術選定の考え方を中心に、
AIなどの最新技術について、noteやDiscordを通じて発信します。
思考プロセスを共有し、学び合える場を提供します。

## 対応デバイス
1. PC
2. タブレット
3. スマートフォン
## 運営情報
事業名：Zestark
主な事業：
インディーゲーム開発
プログラミング教育
コンテンツ配信

## デプロイ（Vercel）
Vercelにログインし、GitHubリポジトリをインポート。
自動で Next.js プロジェクトとして認識。
npm run build が実行され、自動でデプロイ完了。

デプロイ後、URL例：
https://zestark.com

## セットアップ手順
### node.jsのインストール
node -v
でパスの確認
### 依存関係のインストール
npm install
### 開発サーバーの起動
npm run dev

ブラウザで次を開く：
http://localhost:3000

## サイト修正方法
### local
.env.localファイルを開く
true：表示を停止・操作不能
flase：表示を再開・操作可能
⇒変更後は必ず再起動！
```
npm run dev
```
### Vercel(本番環境)
1. Vercel Dashboard にログイン
2. 対象プロジェクトを選択
3. Settings → Environment Variables を開く
4. 以下の環境変数を設定・変更する
|Name|Value|Enviroment|
|---|---|---|
|NEXT_PUBLIC_MAINTENANCE_PC|true/false|Production|
|NEXT_PUBLIC_MAINTENANCE_TABLET|true/false|Production|
|NEXT_PUBLIC_MAINTENANCE_MOBILE|true/false|Production|
5. Save
6. Redeploy

## README
- README.md：概要・セットアップ
- README_shousai.md：設計思想・仕様詳細
