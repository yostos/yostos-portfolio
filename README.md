# ポートフォリオサイト with Next.js

個人でWeb技術とデザイン手法の検証を目的として片手間で作った練習用ポートフォリオです。

## 使用技術

本プロジェクトでは以下の技術を使用しています。

### フロントエンド
- [Next.js](https://nextjs.org) - Reactフレームワーク（サーバーサイドレンダリングとルーティング）
- [React](https://reactjs.org) - ユーザーインターフェース構築のためのJavaScriptライブラリ
- [TypeScript](https://www.typescriptlang.org) - 型付けされたプログラミング言語
- [Tailwind CSS](https://tailwindcss.com) - ユーティリティファーストのCSSフレームワーク
- [daisyUI](https://daisyui.com) - Tailwind CSS用コンポーネントライブラリ
- [Three.js](https://threejs.org) - WebGL用3Dグラフィックスライブラリ
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - Three.js用Reactレンダラー
- [React Three Drei](https://github.com/pmndrs/drei) - React Three Fiber用ヘルパー
- [Framer Motion](https://www.framer.com/motion/) - React用アニメーションライブラリ

### バックエンド
- [AWS SES](https://aws.amazon.com/ses/) - 問い合わせフォーム用メールサービス
- [AWS Amplify](https://aws.amazon.com/amplify/) - Webおよびモバイルアプリケーションのためのプラットフォーム

### UI/UX
- [FontAwesome](https://fontawesome.com) - アイコンライブラリ
- [M PLUS 1 Code](https://fonts.google.com/specimen/M+PLUS+1+Code) - コード表示用の現代的なフォント

## 機能

- **3Dインタラクティブ要素** - Three.jsとReact Three Fiberを用いたインタラクティブな3Dキューブ
- **レスポンシブデザイン** - 様々な画面サイズに適応するモバイルフレンドリーなインターフェース
- **ポートフォリオショーケース** - 作品サンプルとプロジェクトのギャラリー
- **問い合わせフォーム** - AWS SESを統合した直接コミュニケーション用フォーム
- **ダーク/ライトモード** - テーマ切り替え機能
- **音楽プレーヤー** - 音楽ショーケース用SoundCloud統合

## 始め方

まず、開発サーバーを実行します:

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと結果が表示されます。

`app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると、ページは自動更新されます。

## 環境変数

問い合わせフォーム機能を使用するには、以下のAWS環境変数を設定する必要があります:

```
AWS_ACCESS_KEY_ID=あなたのAWSアクセスキー
AWS_SECRET_ACCESS_KEY=あなたのAWSシークレットキー
SES_REGION=あなたのAWSリージョン (デフォルト: ap-northeast-1)
SES_FROM_EMAIL=送信者メールアドレス
SES_TO_EMAIL=受信者メールアドレス
```

## その他

このプロジェクトでは [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用して、最適なパフォーマンスのためにカスタムフォントを自動的に最適化して読み込んでいます。
