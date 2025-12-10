---
name: homepage-design
description: Use when designing, styling, or enhancing the if(Tech) homepage. Provides guidelines for UI components, animations, responsive design, and the gaming/educational theme.
---

# Homepage Design Skill

## Overview

This skill provides design guidelines and patterns for the if(Tech) programming school homepage.

## When to Use

- Adding new sections to the homepage
- Modifying existing UI components
- Creating animations or interactive elements
- Adjusting styling or color schemes
- Improving responsive design

## Design System

### Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Deep Blue | #1a1a2e |
| Secondary | Gold | #ffd700 |
| Accent | Cyan | #00d4ff |
| Background | Dark Gradient | #0f0f1a to #1a1a2e |
| Text | White | #ffffff |
| Card BG | Semi-transparent | rgba(255,255,255,0.1) |

### Typography

- **Headings**: Bold, impactful fonts
- **Body**: Clean, readable sans-serif
- **Japanese**: Proper font-family for CJK characters

### Component Patterns

#### Trading Card Style
```css
.card {
  background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,212,255,0.2));
  border: 2px solid rgba(255,215,0,0.5);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
}
```

#### XP Bar Animation
```css
.xp-bar {
  background: linear-gradient(90deg, #ffd700, #00d4ff);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

#### Particle Background
- Use Canvas or CSS for particle effects
- Keep performance in mind (limit particle count)

### Responsive Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile | max-width: 768px |
| Tablet | max-width: 1024px |
| Desktop | min-width: 1025px |

## Interactive Elements

### XP/Level System
- Hover interactions award XP
- Level up notifications appear
- Progress bar updates visually

### Card Flip Animation
```css
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
```

### Accordion FAQ
- Smooth height transitions
- Icon rotation on expand
- Only one item open at a time

## Accessibility Guidelines

1. Ensure sufficient color contrast (4.5:1 minimum)
2. Add ARIA labels to interactive elements
3. Support keyboard navigation
4. Provide alt text for images
5. Test with screen readers

## Performance Tips

1. Optimize images (WebP format, lazy loading)
2. Minimize CSS/JS (inline critical styles)
3. Reduce animation complexity on mobile
4. Use requestAnimationFrame for smooth animations

## Content Guidelines (Japanese)

- Use polite form (です/ます調)
- Maintain warm, encouraging tone
- Emphasize creativity and adventure
- Focus on "fun learning" message
