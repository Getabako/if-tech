---
description: 新しいキャラクターを追加する
argument-hint: [character-name]
---

「$1」という新しいキャラクターを追加してください。

手順：
1. character/$1/ ディレクトリを作成
2. 参照画像があれば配置
3. generate-character-csv.js を実行してCSV生成
4. 生成されたCSVを確認・編集

CSVフォーマット：
name,appearance,hair,eyes,face,body,clothing,personality,additional

注意：
- 日本語で記述
- 既存キャラクターとの一貫性を維持
- if(Tech)のブランドイメージに合致させる
