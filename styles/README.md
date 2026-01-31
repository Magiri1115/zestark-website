# CSS Structure Documentation

## Directory Structure

```
styles/
├── globals.css             # メインエントリーポイント (全てのCSSをインポート)
├── base/
│   ├── reset.css           # Tailwind + リセットCSS
│   ├── variables.css       # CSS変数定義
│   ├── typography.css      # タイポグラフィ設定
│   └── layout-base.css     # 基本レイアウト・レガシークラス
├── layout/
│   ├── page-wrapper.css    # page.tsx用スタイル
│   ├── header.css          # ヘッダーコンポーネント
│   ├── footer.css          # フッターコンポーネント
│   └── navbar.css          # ナビゲーションコンポーネント
├── components/
│   ├── starry-background.css # 星空背景エフェクト
│   ├── buttons.css         # ボタンコンポーネント (action-button, home-button)
│   ├── cards.css           # カードコンポーネント (blog-card, services-card)
│   └── icons.css           # アイコンコンポーネント (interactive-icon, sns-icon)
├── sections/
│   ├── home.css            # ホームセクション
│   ├── services.css        # サービスセクション
│   ├── about.css           # アバウトセクション
│   ├── blog.css            # ブログセクション
│   └── contact.css         # コンタクトセクション
└── utilities/
    └── emergency-notice.css # 緊急告知
```

## Import Methods

### Method 1: Single Import (推奨)
layout.tsxで1つのファイルのみインポート:

```typescript
import "./globals.css";
```

### Method 2: Individual Imports (詳細制御が必要な場合)
layout.tsxで個別にインポート:

```typescript
// 1. Base (基礎)
import "../styles/base/reset.css";
import "../styles/base/variables.css";
import "../styles/base/typography.css";
import "../styles/base/layout-base.css";

// 2. Layout (レイアウト構造)
import "../styles/layout/page-wrapper.css";
import "../styles/layout/header.css";
import "../styles/layout/navbar.css";
import "../styles/layout/footer.css";

// 3. Components (再利用可能部品)
import "../styles/components/starry-background.css";
import "../styles/components/buttons.css";
import "../styles/components/cards.css";
import "../styles/components/icons.css";

// 4. Sections (セクション固有)
import "../styles/sections/home.css";
import "../styles/sections/services.css";
import "../styles/sections/about.css";
import "../styles/sections/blog.css";
import "../styles/sections/contact.css";

// 5. Utilities (特殊用途)
import "../styles/utilities/emergency-notice.css";
```

## Responsibility Separation

### base/
- **reset.css**: Tailwind CSS、フォントサイズリセット、基本スタイル
- **variables.css**: CSS変数（カラー、テーマ）
- **typography.css**: タイポグラフィ設定
- **layout-base.css**: 基本レイアウトルール、レガシークラス

### layout/
- **page-wrapper.css**: page.tsx固有のラッパースタイル、レスポンシブコンテナ
- **header.css**: ヘッダーコンポーネント
- **footer.css**: フッターコンポーネント
- **navbar.css**: ナビゲーションコンポーネント

### components/
- **starry-background.css**: 星空背景エフェクト、アニメーション
- **buttons.css**: 全ボタンスタイル統合
- **cards.css**: blog-card + services-card
- **icons.css**: interactive-icon + sns-icon

### sections/
- **home.css**: ホームセクション固有
- **services.css**: サービスセクション固有
- **about.css**: アバウトセクション固有
- **blog.css**: ブログセクション固有
- **contact.css**: コンタクトセクション固有

### utilities/
- **emergency-notice.css**: 緊急告知UI

## Migration Notes

### globals.css の分離

| 旧globals.css の内容 | 新ファイル |
|---------|---------|
| @tailwind directives + html/body reset | base/reset.css |
| :root variables (--background等) | base/variables.css |
| .page-wrapper, .main-container, .sections-wrapper | layout/page-wrapper.css |
| .header-border, .logo-item | layout/page-wrapper.css |
| body::after, .starry-sky, .star, .shooting-star | components/starry-background.css |

### 旧ファイルから新構造への完全対応表

| 旧ファイル | 新ファイル |
|---------|---------|
| globals.css (Tailwind + reset) | base/reset.css |
| globals.css (variables) | base/variables.css |
| globals.css (page wrapper) | layout/page-wrapper.css |
| globals.css (starry background) | components/starry-background.css |
| variables.css | base/variables.css |
| sections.css (h1) | base/typography.css |
| sections.css (main, .body-contents等) | base/layout-base.css |
| header.css | layout/header.css |
| footer.css | layout/footer.css |
| navbar.css | layout/navbar.css |
| sections.css (.home-button等) + variables.css (.action-button) | components/buttons.css |
| blog-card.css + services-card.css | components/cards.css |
| interactive-icon.css + sns-icon.css | components/icons.css |
| sections.css (HOME部分) | sections/home.css |
| sections.css (SERVICES部分) + services-card.css (responsive) | sections/services.css |
| sections.css (ABOUT部分) | sections/about.css |
| sections.css (BLOG部分) + blog-card.css (grid) | sections/blog.css |
| sections.css (CONTACT部分) | sections/contact.css |
| emergency-notice.css | utilities/emergency-notice.css |

## Layout.tsx Integration

### 現在の実装（想定）
```typescript
import "./globals.css";
import "../styles/sections.css";
import "../styles/variables.css";
// ... 他の個別CSS
```

### 新しい実装（推奨）
```typescript
import "./globals.css";  // これだけでOK！
```

globals.cssが全ての分離されたCSSファイルを正しい順序でインポートします。

## Benefits

1. **明確な責務分離**: ファイルの役割が一目瞭然
2. **保守性向上**: 修正箇所を素早く特定可能
3. **スケーラビリティ**: 新規追加時の配置場所が明確
4. **TSX構造との整合性**: components/ディレクトリと対応
5. **シンプルなインポート**: globals.css 1つで全て読み込み可能
6. **柔軟性**: 必要に応じて個別インポートも可能