# Micro-Interactions & Animation Guide

This document outlines all the delightful micro-interactions and animations implemented in the 30-60-90 Strategic Plan application.

## Design Philosophy

**Professional + Delightful**: All animations are designed to be:
- Subtle and professional (executive audience)
- Performance-optimized (no janky animations)
- Accessible (respects `prefers-reduced-motion`)
- Fast (<0.5s for interactions, longer for ambient effects)
- Purposeful (enhances understanding, not just decoration)

---

## Animation System

### Core Utilities

**Location**: `/lib/hooks/` and `/lib/animation-variants.ts`

#### useReducedMotion Hook
```typescript
// Automatically disables animations for users who prefer reduced motion
const prefersReducedMotion = useReducedMotion();
```

#### useCountUp Hook
```typescript
// Animates numbers counting up (for metrics)
const count = useCountUp(7500000, 2000); // Count to 7.5M over 2s
```

#### Animation Variants
Pre-configured Framer Motion variants for consistency:
- `fadeInUp` - Fade in with upward movement
- `slideInLeft` - Slide from left
- `scaleIn` - Scale up entrance
- `staggerContainer` - Stagger child animations

---

## Component Animations

### 1. Hero Section
**File**: `/components/sections/Hero.tsx`

#### Ambient Effects
- **Animated Background Grid**: Subtle moving grid pattern (20s loop)
- **Floating Glow Orbs**: Two pulsing amber orbs with different timing (8s & 10s)
- **Gradient Text Shimmer**: Title text with flowing gradient (8s loop)

#### Interactive Elements
- **Primary CTA Button**:
  - Scale up on hover (1.05x)
  - Scale down on click (0.98x)
  - Shine effect sweeps across on hover (700ms)
  - Download icon bounces gently (1.5s loop)
  - Amber glow shadow intensifies on hover

- **Contact Pills**:
  - Stagger animation on page load (0.1s delay between each)
  - Lift and scale on hover (1.05x, -2px)
  - Icon rotates 12° on hover
  - Subtle amber glow on hover

### 2. Navigation
**File**: `/components/sections/Navigation.tsx`

#### Desktop Navigation
- **Active Section Indicator**: Smooth animated underline that follows active section
- **Floating Background**: Background highlight morphs to active button
- **Smooth Scroll**: Springs into position when clicking nav items
- **Stagger Entrance**: Nav items fade in sequentially on load

#### Mobile Navigation
- **Menu Icon Transition**: Smooth rotation between hamburger and X (200ms)
- **Menu Slide**: Accordion-style height animation with fade
- **List Stagger**: Menu items slide in from left with 50ms stagger
- **Active Indicator**: Vertical bar slides to active item with spring physics

### 3. Timeline Section
**File**: `/components/sections/Timeline.tsx`

#### Visual Storytelling
- **Animated Progress Line**:
  - Background line fades in (1.2s)
  - Active line fills from left to right (1.5s)
  - Gradient from slate to amber showing progression

- **Phase Cards**:
  - Slide in from left with stagger (150ms between cards)
  - Lift on hover (-8px with shadow)
  - Phase indicators animate from left (400ms)

- **Checklist Items**:
  - Fade and slide in with cascade (50ms stagger)
  - Checkmark icon spins 360° and scales on hover
  - Text darkens on hover for emphasis

- **Bottom Accent**: Decorative line expands from center (800ms)

### 4. Framework Showcase
**File**: `/components/sections/FrameworkShowcase.tsx`

#### Expandable Cards
- **Phase Badge**:
  - Pulses when expanded
  - Shine effect sweeps across (1s, repeats every 2s)
  - Shadow glow intensifies

- **Chevron Icon**: Rotates 90° smoothly when expanding (200ms)

- **Expansion Animation**:
  - Height animates to auto (300ms ease-in-out)
  - Content fades in simultaneously
  - Step items slide in from left with 50ms stagger

- **Step Badges**:
  - Scale in with backOut easing (bouncy entrance)
  - Framework tags pop in sequentially (30ms stagger)
  - Hover causes slight scale and highlight

### 5. Executive Overview
**File**: `/components/sections/ExecutiveOverview.tsx`

#### Content Reveal
- **Card Entrance**: Fade up from below (500ms delay)
- **Metric Highlights**: Key numbers ($7.5M, 15+) scale in separately
- **Shine Effect**: Subtle gradient sweeps across card on hover (1s)
- **Lift Interaction**: Card lifts -4px on hover

### 6. ICP/Methodology Section
**File**: `/components/sections/ICP.tsx`

#### Card Animations
- **Stagger Grid**: Cards fade up with 100ms stagger
- **Accent Lines**: Decorative amber lines draw from left (400ms)
- **Section Badges**: Slide slightly right on hover (4px)
- **Hover Lift**: Cards lift -6px with enhanced shadow

---

## CSS Animations

### Custom Keyframes
**File**: `/app/globals.css`

```css
/* Shimmer - For gradient text effects */
.animate-shimmer

/* Pulse Glow - For attention-drawing elements */
.animate-pulse-glow

/* Float - For gentle vertical motion */
.animate-float

/* Gradient Shift - For animated backgrounds */
.animate-gradient

/* Fade In Up - Standard entrance */
.animate-fade-in-up

/* Scale In - Pop entrance */
.animate-scale-in

/* Slide In Left - Directional entrance */
.animate-slide-in-left
```

### Utility Classes

```css
/* Smooth cubic-bezier timing */
.transition-smooth

/* Bouncy easing for playful interactions */
.transition-bounce

/* Hover lift effect */
.hover-lift

/* Hover glow effect */
.hover-glow
```

### Custom Scrollbar

- Gradient amber scrollbar thumb
- Hover intensifies color and adds shadow
- Smooth transitions on all states

---

## Performance Optimizations

### 1. Reduced Motion Support
All animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

### 2. GPU Acceleration
Transform and opacity properties used for 60fps animations:
- `transform: translateX/Y/Z`
- `opacity`
- `scale`

### 3. Lazy Animation Triggers
Using Framer Motion's `useInView`:
```typescript
const isInView = useInView(ref, { once: true, amount: 0.2 });
```
Animations only trigger when elements enter viewport.

### 4. Conditional Animations
```typescript
whileHover={!prefersReducedMotion ? { y: -8 } : {}}
```
Heavy animations disabled for users who prefer reduced motion.

---

## Animation Timing Standards

### Micro-interactions (< 300ms)
- Button hover/press
- Icon transitions
- Color changes
- Small movements

### UI Transitions (300-500ms)
- Card entrances
- Menu open/close
- Content reveals
- Modal appearances

### Ambient Effects (> 1s)
- Background animations
- Shimmer effects
- Floating elements
- Gradient shifts

---

## Best Practices Implemented

1. **Purposeful Motion**: Every animation serves UX (guides attention, provides feedback, shows relationships)

2. **Consistency**: Similar elements use similar animations

3. **Hierarchy**: Important elements animate first, secondary elements stagger after

4. **Restraint**: Not everything animates at once

5. **Performance**: Transform and opacity only, GPU-accelerated

6. **Accessibility**: Full reduced-motion support

7. **Professional Polish**: Subtle, not distracting

---

## Testing Checklist

- [ ] Test with `prefers-reduced-motion: reduce` enabled
- [ ] Verify 60fps on lower-end devices
- [ ] Check mobile touch interactions (tap states)
- [ ] Test with slow network (animations shouldn't block)
- [ ] Verify no layout shift during animations
- [ ] Check keyboard navigation still works
- [ ] Test screen reader compatibility

---

## Future Enhancements

Potential additions (if feedback requests more delight):

1. **Confetti on CTA Click**: Celebrate resume download
2. **Progress Indicators**: Show scroll depth
3. **Parallax Scrolling**: Subtle depth on hero background
4. **Hover Previews**: Expand cards on hover instead of click
5. **Loading States**: If content loads dynamically
6. **Success Toast**: "Copied to clipboard" for email
7. **Easter Egg**: Konami code or triple-click surprise

---

## File Structure

```
/lib
  /hooks
    useReducedMotion.ts    # Detects motion preferences
    useCountUp.ts          # Number counter animation
  animation-variants.ts    # Reusable Framer Motion variants

/components/sections
  Hero.tsx                 # Shimmer text, glow orbs, CTA animations
  Navigation.tsx           # Active indicators, smooth scroll
  ExecutiveOverview.tsx    # Card reveals, metric highlights
  Timeline.tsx             # Progress lines, card stagger
  FrameworkShowcase.tsx    # Expandable cards with shine
  ICP.tsx                  # Grid stagger, hover lifts

/app
  globals.css              # Custom keyframes & utilities
```

---

## Implementation Notes

**Framer Motion Version**: 11.18.2
**React Version**: 19.0.0
**Target Audience**: Executive hiring managers (professional, not playful)
**Browser Support**: Modern browsers with CSS Grid & Flexbox
**Mobile**: Touch-optimized with reduced animation complexity

---

## Delight Moments

These animations create memorable moments:

1. **First Impression**: Shimmer title + floating orbs in hero
2. **Progress Story**: Animated timeline showing 30-60-90 journey
3. **Interactive Discovery**: Expanding framework cards
4. **Smooth Navigation**: Fluid scroll + active indicators
5. **Professional Polish**: Consistent hover states throughout
6. **Attention to Detail**: Custom scrollbar, stagger animations

Every interaction feels intentional, smooth, and refined - exactly what hiring managers notice.
