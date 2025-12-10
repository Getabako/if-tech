---
name: workflow-automation
description: Use when configuring GitHub Actions, debugging workflows, or managing the Instagram content generation pipeline. Provides workflow templates and troubleshooting guides.
---

# Workflow Automation Skill

## Overview

This skill provides guidelines for managing GitHub Actions workflows and the Instagram content automation pipeline.

## When to Use

- Creating or modifying GitHub Actions workflows
- Debugging workflow failures
- Optimizing pipeline performance
- Adding new automation steps
- Managing workflow secrets

## Workflow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   GitHub Actions                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │ Manual       │    │ Scheduled    │                   │
│  │ Dispatch     │    │ (cron)       │                   │
│  └──────┬───────┘    └──────┬───────┘                   │
│         │                   │                            │
│         └─────────┬─────────┘                            │
│                   ↓                                      │
│  ┌────────────────────────────────────────────────┐     │
│  │           content-generation.yml                │     │
│  │                                                 │     │
│  │  1. Checkout Repository                        │     │
│  │  2. Setup Node.js                              │     │
│  │  3. Install Dependencies                       │     │
│  │  4. Install Japanese Fonts                     │     │
│  │  5. Run Pipeline Scripts                       │     │
│  │  6. Upload Artifacts                           │     │
│  │  7. Generate Summary                           │     │
│  └────────────────────────────────────────────────┘     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Workflow Templates

### Basic Content Generation
```yaml
name: Generate Instagram Content

on:
  workflow_dispatch:
    inputs:
      calendar_days:
        description: 'Number of days to generate'
        required: true
        default: '30'
        type: string

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies
        working-directory: ./WorkFlow_origin
        run: npm ci

      - name: Install Japanese Fonts
        run: |
          sudo apt-get update
          sudo apt-get install -y fonts-noto-cjk fonts-mplus

      - name: Generate Calendar
        working-directory: ./WorkFlow_origin
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: npm run generate-calendar -- --days ${{ inputs.calendar_days }}

      - name: Upload Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: instagram-content
          path: |
            WorkFlow_origin/output/calendar.csv
            WorkFlow_origin/output/一括投稿データ.csv
```

### With Image Generation
```yaml
      - name: Generate Images
        if: ${{ inputs.generate_images == 'true' }}
        working-directory: ./WorkFlow_origin
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: npm run generate-images

      - name: Compose Images
        if: ${{ inputs.generate_images == 'true' }}
        working-directory: ./WorkFlow_origin
        run: npm run compose-images
```

## Pipeline Scripts Reference

### analyze-homepage.js
**Input**: `index.html`
**Output**: `output/business-info.json`, `output/business-summary.txt`

```javascript
// Key functions
extractBusinessInfo(html)  // Extract company info
extractServices(html)      // Extract service details
extractInstructors(html)   // Extract instructor info
```

### generate-calendar.js
**Input**: Business info, character CSVs, imagerule.csv
**Output**: `output/calendar.csv`

```javascript
// Uses Gemini API
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Generate 30 days of content
async function generateCalendar(days, businessInfo, characters, imageRules)
```

### generate-images.js
**Input**: `calendar.csv`, imagerule.csv
**Output**: `output/images/`

```javascript
// Uses Gemini Imagen API
const model = "imagen-3.0-generate-002";

// Generate images based on calendar prompts
async function generateImage(prompt, settings)
```

### compose-images.js
**Input**: Generated images, calendar.csv
**Output**: `output/composed/`

```javascript
// Uses @napi-rs/canvas
const canvas = createCanvas(1080, 1440);

// Add text overlays
function addTextOverlay(imagePath, title, caption)
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| GEMINI_API_KEY | Google Gemini API key | Yes |
| GH_PAT | GitHub Personal Access Token | For claude_bot |

## Secrets Configuration

```bash
# Add secrets via GitHub CLI
gh secret set GEMINI_API_KEY --body "your-api-key"
```

## Troubleshooting Guide

### Workflow Doesn't Trigger
```yaml
# Check workflow syntax
# Ensure correct indentation
# Verify trigger conditions
```

### Font Issues
```bash
# Install fonts in workflow
sudo apt-get install -y fonts-noto-cjk fonts-mplus

# Verify installation
fc-list | grep -i noto
```

### API Rate Limits
```javascript
// Add delay between requests
await new Promise(resolve => setTimeout(resolve, 1000));

// Implement retry logic
async function withRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}
```

### Memory Issues
```yaml
# Increase Node memory
env:
  NODE_OPTIONS: '--max-old-space-size=4096'
```

### Timeout Issues
```yaml
jobs:
  generate:
    timeout-minutes: 30  # Increase timeout
```

## Performance Optimization

### Caching Dependencies
```yaml
- name: Cache Dependencies
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

### Parallel Execution
```yaml
jobs:
  analyze:
    runs-on: ubuntu-latest
    # ...

  generate-images:
    needs: analyze
    runs-on: ubuntu-latest
    strategy:
      matrix:
        batch: [1, 2, 3]  # Process in parallel batches
```

## Monitoring & Logging

### Job Summary
```yaml
- name: Generate Summary
  run: |
    echo "## Content Generation Summary" >> $GITHUB_STEP_SUMMARY
    echo "- Calendar Days: ${{ inputs.calendar_days }}" >> $GITHUB_STEP_SUMMARY
    echo "- Images Generated: $(ls output/images | wc -l)" >> $GITHUB_STEP_SUMMARY
```

### Debug Mode
```yaml
env:
  ACTIONS_STEP_DEBUG: true
  ACTIONS_RUNNER_DEBUG: true
```

## Best Practices

1. **Idempotency**: Workflows should produce same results
2. **Artifacts**: Always upload important outputs
3. **Timeouts**: Set appropriate timeout values
4. **Secrets**: Never hardcode sensitive data
5. **Caching**: Cache dependencies for speed
6. **Logging**: Add clear step names and summaries
