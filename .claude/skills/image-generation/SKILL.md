---
name: image-generation
description: Use when creating AI image prompts, managing image rules, or composing images with text overlays. Provides prompt engineering techniques and style guidelines for Gemini API.
---

# Image Generation Skill

## Overview

This skill provides guidelines for AI image generation using Gemini API and image composition for if(Tech) Instagram posts.

## When to Use

- Writing image generation prompts
- Creating new image rule templates
- Configuring text overlay settings
- Troubleshooting image quality issues
- Optimizing prompt effectiveness

## Gemini API Configuration

### Model
```javascript
const model = "imagen-3.0-generate-002";
```

### Parameters
```javascript
{
  numberOfImages: 1,
  aspectRatio: "3:4",
  safetyFilterLevel: "block_only_high",
  personGeneration: "allow_adult"
}
```

## Prompt Engineering

### Basic Structure
```
[Art Style] [Subject] in [Setting], [Lighting], [Mood], [Technical Details]
```

### Style Keywords

| Category | Keywords |
|----------|----------|
| Anime | anime style, japanese illustration, manga art |
| Photo | professional photograph, high resolution, realistic |
| 3D | 3D render, Minecraft style, voxel art |
| Illustration | digital illustration, vector art, flat design |

### Subject Keywords

| Category | Keywords |
|----------|----------|
| People | children, students, teacher, instructor |
| Activity | programming, coding, learning, creating |
| Objects | computer, laptop, blocks, code |

### Setting Keywords

| Category | Keywords |
|----------|----------|
| Indoor | classroom, office, studio, home |
| Outdoor | nature, village, park, forest |
| Virtual | Minecraft world, digital space, cyberspace |

### Lighting Keywords

| Type | Keywords |
|------|----------|
| Natural | warm sunlight, golden hour, soft daylight |
| Artificial | studio lighting, neon glow, screen light |
| Mood | cozy atmosphere, dramatic shadows, bright and cheerful |

## imagerule.csv Format

```csv
setting_name,location_environment,characters_people,time_lighting,atmosphere_style,additional_details
```

### Field Details

| Field | Description | Example |
|-------|-------------|---------|
| setting_name | Template identifier | minecraft_classroom |
| location_environment | Physical setting | Minecraft-themed classroom with colorful blocks |
| characters_people | Who appears | Japanese elementary school children |
| time_lighting | Time and light | Afternoon, warm natural light from windows |
| atmosphere_style | Overall mood | Playful, educational, inviting |
| additional_details | Extra instructions | Include computer screens with code |

## Image Composition

### Canvas Setup (compose-images.js)
```javascript
const canvas = createCanvas(1080, 1440); // 3:4 aspect ratio
const ctx = canvas.getContext('2d');
```

### Text Styling
```javascript
// Title
ctx.font = 'bold 48px "Noto Sans CJK JP"';
ctx.fillStyle = '#FFFFFF';
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;
ctx.strokeText(title, x, y);
ctx.fillText(title, x, y);

// Subtitle
ctx.font = '32px "Noto Sans CJK JP"';
```

### Text Positioning
```javascript
// Center alignment
ctx.textAlign = 'center';
const centerX = canvas.width / 2;

// Top title (10% from top)
const titleY = canvas.height * 0.1;

// Bottom CTA (10% from bottom)
const ctaY = canvas.height * 0.9;
```

### Shadow Effect
```javascript
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
```

## Quality Guidelines

### Do
- Use specific, descriptive prompts
- Include cultural context (Japanese)
- Specify age-appropriate content
- Request consistent lighting

### Don't
- Use vague or generic terms
- Include inappropriate content
- Forget aspect ratio requirements
- Ignore brand consistency

## Example Prompts

### Minecraft Classroom
```
Anime-style illustration of Japanese elementary school children building in a colorful Minecraft-themed classroom, warm afternoon sunlight streaming through large windows, computers showing code on screens, educational posters on walls, cheerful and engaging atmosphere, high detail, vibrant colors
```

### Programming Scene
```
Professional photograph style of a modern programming classroom, diverse group of young students focused on laptops, soft diffused lighting, clean minimalist interior, code visible on screens, collaborative learning environment, warm and inviting mood
```

### Nature Learning
```
Watercolor illustration style of children exploring nature in a rural Japanese village setting, traditional buildings in background, lush green surroundings, golden sunset lighting, peaceful educational atmosphere, Higashinaruse village inspired
```

## Troubleshooting

### Low Quality Images
- Add "high quality", "detailed", "sharp focus"
- Specify resolution requirements

### Inconsistent Style
- Use more specific style keywords
- Reference existing successful prompts

### Inappropriate Content
- Increase safety filter level
- Add explicit age-appropriate keywords

### Text Readability Issues
- Increase stroke width
- Adjust contrast ratios
- Check font availability
