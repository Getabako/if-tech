---
description: コンテンツ生成パイプラインを実行する
argument-hint: [mode]
---

コンテンツ生成パイプラインを$1モードで実行してください。

モード：
- setup: analyze-homepage + generate-imagerule + generate-character-csv
- calendar: setup + generate-calendar
- full: calendar + generate-images + compose-images

実行手順：
1. WorkFlow_originディレクトリに移動
2. 依存関係を確認（npm install）
3. 指定されたモードのスクリプトを順次実行
4. 出力ファイルを確認
5. 結果を報告

環境変数：
- GEMINI_API_KEY が必要

出力ファイル：
- output/business-info.json
- output/calendar.csv
- output/一括投稿データ.csv
- output/images/ (fullモードのみ)
- output/composed/ (fullモードのみ)
