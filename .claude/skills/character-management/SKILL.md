---
name: character-management
description: Use when managing character profiles, creating character CSVs, or ensuring consistency in character representation across content. Provides character templates and guidelines.
---

# Character Management Skill

## Overview

This skill provides guidelines for managing character profiles and ensuring consistent representation in if(Tech) content.

## When to Use

- Adding new character profiles
- Updating existing character information
- Analyzing images for character extraction
- Ensuring character consistency
- Creating character-specific content

## Character CSV Schema

### Required Fields

```csv
name,appearance,hair,eyes,face,body,clothing,personality,additional
```

### Field Specifications

| Field | Max Length | Required | Description |
|-------|------------|----------|-------------|
| name | 50 | Yes | Character's full name |
| appearance | 100 | Yes | Age, gender, overall look |
| hair | 50 | Yes | Style, length, color |
| eyes | 50 | Yes | Color, shape, expression |
| face | 100 | Yes | Features, typical expression |
| body | 50 | Yes | Build, height |
| clothing | 100 | Yes | Typical attire |
| personality | 100 | Yes | Key traits |
| additional | 200 | No | Role, extra details |

## Current Character Profiles

### 塾長山﨑琢己 (Director)
```csv
山﨑琢己,20代後半男性,黒髪短髪,黒い瞳,優しい笑顔 落ち着いた表情,中肉中背,紺色ポロシャツ カジュアル,穏やかで教育熱心 リーダーシップ,プログラミング塾長
```

### CTO井上陽斗
```csv
井上陽斗,20代男性,黒髪ミディアム,鋭い目つき,知的な表情,やや細身,シンプルなTシャツ テック系,技術志向 論理的,CTO 技術責任者
```

### 塾頭高崎翔太
```csv
高崎翔太,20代男性,黒髪,明るい目,親しみやすい笑顔,普通体型,カジュアルシャツ,フレンドリー 熱心,塾頭 指導統括
```

### 講師本田樹
```csv
本田樹,20代男性,黒髪短髪,優しい目,穏やかな表情,普通体型,シンプルな服装,丁寧 忍耐強い,プログラミング講師
```

### 講師鈴木駿介
```csv
鈴木駿介,20代男性,黒髪,真剣な目,集中した表情,普通体型,カジュアル,真面目 技術好き,プログラミング講師
```

## Image Analysis Prompt

When using Gemini to analyze character images:

```
この画像の人物の特徴を以下のCSV形式で出力してください：

name,appearance,hair,eyes,face,body,clothing,personality,additional

以下の点に注意してください：
1. 日本語で記述
2. 客観的な特徴のみ
3. 各フィールドは簡潔に
4. 服装は一般的な傾向で
5. 性格は見た目から推測できる範囲で
```

## Directory Structure

```
character/
├── [キャラクター名]/
│   ├── image1.jpg       # 参照画像
│   ├── image2.jpg       # 追加画像
│   └── [キャラクター名].csv  # 生成されたCSV
```

## Consistency Guidelines

### Visual Consistency
- Same character should have consistent features across prompts
- Use CSV data as reference for image generation
- Verify generated images match profile

### Personality Consistency
- Maintain character voice in captions
- Align actions with personality traits
- Keep professional/casual balance appropriate

## Adding New Characters

### Step 1: Collect Images
Place reference images in `character/[新キャラクター名]/`

### Step 2: Run Analysis
```bash
npm run generate-character-csv
```

### Step 3: Review & Edit
Check generated CSV and make adjustments:
- Correct any inaccuracies
- Add personality nuances
- Include role information

### Step 4: Test Integration
Generate test content to verify consistency

## Non-Human Assets

### ロゴ (Logo)
```csv
if-techロゴ,シンプルなロゴデザイン,N/A,N/A,if(Tech)テキスト,正方形,ブランドカラー,モダン テック,ブランドアイデンティティ
```

### 教室 (Classroom)
```csv
教室,明るい学習空間,N/A,N/A,N/A,広い部屋,机と椅子 PC,温かみのある 教育的,if(Tech)教室
```

### 東成瀬村 (Village)
```csv
東成瀬村,秋田県の自然豊かな村,N/A,N/A,N/A,山間部,自然風景,穏やか 伝統的,地域連携拠点
```

## Troubleshooting

### Inconsistent Outputs
- Review source images for clarity
- Update CSV with more specific details
- Use multiple reference images

### Missing Characters
- Create new directory with images
- Run generation script
- Manually review output

### CSV Format Errors
- Check for proper comma escaping
- Verify UTF-8 encoding
- Remove unexpected line breaks
