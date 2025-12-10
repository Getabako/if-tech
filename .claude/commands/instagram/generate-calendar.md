---
description: Instagram投稿カレンダーを生成する
argument-hint: [days]
---

$1日分のInstagram投稿カレンダーを生成してください。

手順：
1. WorkFlow_origin/output/business-info.jsonを確認
2. キャラクターCSVを読み込み
3. imagerule/if-tech.csvの画像設定を確認
4. generate-calendar.jsを使用してカレンダー生成

出力形式（calendar.csv）：
- day: 日数
- theme: コンテンツテーマ
- caption: 投稿キャプション
- hashtags: ハッシュタグ
- image_prompt: 画像生成プロンプト
- image_setting: imagerule参照

注意：
- Gemini APIを使用
- 日本語でコンテンツ作成
- if(Tech)のブランドボイスを維持
