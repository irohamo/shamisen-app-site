# shamisen-app-site

津軽三味線アプリ **ShamiScore** の公式サイト（[shamisen.app](https://shamisen.app)）のソースコードです。

App Store Connect 申請用の Support URL / Privacy Policy URL / Terms URL として利用することを想定した、シンプルな静的サイトです。

## 構成

- [Astro](https://astro.build/) + TypeScript で構築
- 依存はほぼ Astro のみ
- 静的ファイルとして `dist/` に出力
- Cloudflare Pages でのホスティングを想定

### ページ

| パス        | 内容                       |
| ----------- | -------------------------- |
| `/`         | ShamiScore の紹介          |
| `/support`  | サポート（App Store 用）   |
| `/terms`    | 利用規約                   |
| `/privacy`  | プライバシーポリシー       |

## 開発

```bash
npm install   # 依存をインストール
npm run dev   # ローカル開発サーバを起動 (http://localhost:4321)
npm run build # 本番ビルド → dist/
npm run preview # ビルド結果をローカルで確認
```

Node.js は v18 以上を推奨します。

## ディレクトリ構成

```
src/
  components/   # Header / Footer
  layouts/      # BaseLayout
  pages/        # index / support / terms / privacy
  styles/       # global.css
public/
  appicon.png   # ファビコン・OG 画像兼用
  robots.txt
```

## Cloudflare Pages へのデプロイ

Cloudflare Pages のプロジェクト設定例:

| 項目                    | 値                |
| ----------------------- | ----------------- |
| Framework preset        | Astro             |
| Build command           | `npm run build`   |
| Build output directory  | `dist`            |
| Node.js version         | 18 以上           |

カスタムドメインの例:

- `shamisen.app`
- [`www.shamisen.app`](https://www.shamisen.app)

`www` 側は apex ドメインへリダイレクトする運用を想定しています。

## 注意事項

このリポジトリに含まれる利用規約・プライバシーポリシーは、個人開発のアプリ向けに用意したテンプレートであり、**法的助言ではありません**。
事業内容や提供機能によって、適切な内容は変わります。実際の運用にあたっては、必要に応じて法務の専門家にご確認ください。

## ライセンス

このリポジトリのコードについては個別にライセンスを明記していません。
ShamiScore のロゴ・アイコン・名称等に関する権利は当方に帰属します。
