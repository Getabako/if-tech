---
description: ワークフローの状態を確認する
---

現在のワークフロー状態を確認してください。

確認項目：
1. 最新の出力ファイル
   - output/calendar.csv の更新日時
   - output/business-info.json の存在
   - output/images/ 内のファイル数

2. キャラクターデータ
   - character/ 内のフォルダ数
   - 各キャラクターのCSV状態

3. 画像ルール
   - imagerule/if-tech.csv の設定数

4. GitHub Actions
   - 最近のワークフロー実行履歴（gh workflow list）

5. 依存関係
   - package.jsonのバージョン確認
   - node_modules の状態

結果をサマリー形式で報告してください。
