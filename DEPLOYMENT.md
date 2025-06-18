# 🚀 GitHub Pagesへのデプロイ手順

このファイルでは、if(Tech)サイトをGitHub Pagesで公開するための手順を説明します。

## 📋 事前準備

1. **GitHubアカウント**: [GitHub](https://github.com)でアカウントを作成
2. **リポジトリ作成**: `if-tech`という名前でリポジトリを作成（既に作成済み）
3. **ローカル環境**: Git、テキストエディタ等の準備

## 🔄 GitHub Pagesの設定手順

### ステップ1: ファイルをGitHubにプッシュ

```bash
# リポジトリをクローン（初回のみ）
git clone https://github.com/Getabako/if-tech.git
cd if-tech

# ファイルを追加
git add .
git commit -m "feat: if(Tech)ランディングページを追加"
git push origin main
```

### ステップ2: GitHub Pagesを有効化

1. GitHubのリポジトリページ（https://github.com/Getabako/if-tech）にアクセス
2. 「Settings」タブをクリック
3. 左サイドバーで「Pages」をクリック
4. 「Source」セクションで「Deploy from a branch」を選択
5. ブランチを「main」、フォルダを「/ (root)」に設定
6. 「Save」をクリック

### ステップ3: 公開URL確認

- 設定後、数分でサイトが公開されます
- 公開URL: `https://getabako.github.io/if-tech/`

## 📁 ファイル構成

```
if-tech/
├── index.html          # メインのランディングページ
├── README.md           # プロジェクト説明
├── .gitignore          # Git無視ファイル設定
└── DEPLOYMENT.md       # このファイル
```

## 🔧 カスタマイズ方法

### コンテンツの編集
- `index.html`を編集してテキストや画像を変更
- CSSスタイルもHTMLファイル内の`<style>`タグ内で調整可能

### 画像の追加
1. `images/`フォルダを作成
2. 画像ファイルを配置
3. HTMLの`src`属性を相対パスに変更

例：
```html
<!-- Before -->
<img src="https://via.placeholder.com/400x300/4CAF50/ffffff?text=画像" alt="説明">

<!-- After -->
<img src="images/your-image.jpg" alt="説明">
```

### スタイルの変更
```css
/* カラーテーマの変更 */
:root {
    --green: #4CAF50;      /* メインカラー */
    --emerald: #00C853;    /* アクセントカラー */
    --yellow: #FFEB3B;     /* ボタンカラー */
}
```

## 🔄 更新手順

コンテンツを更新する場合：

```bash
# ファイルを編集後
git add .
git commit -m "update: コンテンツを更新"
git push origin main
```

更新後、1〜5分程度でGitHub Pagesに反映されます。

## 🛠️ トラブルシューティング

### よくある問題と解決法

1. **サイトが表示されない**
   - GitHub Pagesの設定を確認
   - ブランチが正しく設定されているか確認
   - `index.html`がルートディレクトリにあるか確認

2. **スタイルが適用されない**
   - HTMLファイル内のCSSが正しく記述されているか確認
   - ブラウザのキャッシュをクリア

3. **画像が表示されない**
   - 画像パスが正しいか確認
   - 画像ファイルがGitにコミットされているか確認

## 📊 アクセス解析

Google Analyticsを追加する場合：

```html
<!-- HTMLの<head>タグ内に追加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔗 参考リンク

- [GitHub Pages公式ドキュメント](https://docs.github.com/ja/pages)
- [HTMLリファレンス](https://developer.mozilla.org/ja/docs/Web/HTML)
- [CSS リファレンス](https://developer.mozilla.org/ja/docs/Web/CSS)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**✨ サイトの公開おめでとうございます！** 