# Layout Components

Modern navigation and layout components for the HG Interview Prep site.

## Components

### MainNav
The main navigation component with desktop and mobile support.

**Features:**
- Fixed position with backdrop blur on scroll
- Active route detection
- Smooth animations with Framer Motion
- Rose color accents for active states
- Mobile menu integration

**Usage:**
```tsx
// Already included in app/layout.tsx
import { MainNav } from "@/components/layout/MainNav";
```

### MobileNav
Sheet-based mobile navigation with organized sections.

**Features:**
- Uses shadcn Sheet component
- Organized navigation groups (Core, Preparation, Reference)
- Active state indicators
- Closes automatically on navigation

**Usage:**
```tsx
// Used internally by MainNav - no direct import needed
```

### PageHeader
Reusable page header component with badge, title, and description.

**Features:**
- Optional badge with rose accent
- Animated entry with Framer Motion
- Gradient text effects
- Responsive typography

**Props:**
- `badge?: string` - Optional badge text
- `title: string` - Required page title
- `description?: string` - Optional page description

**Usage:**
```tsx
import { PageHeader } from "@/components/layout/PageHeader";

export default function MyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        badge="Getting Started"
        title="30/60/90 Day Plan"
        description="Strategic framework for enterprise account executive success in the first 90 days."
      />
      {/* Page content */}
    </div>
  );
}
```

## Navigation Structure

The navigation includes the following routes:

**Core:**
- Dashboard (/)
- 30/60/90 Plan (/plan)

**Preparation:**
- Pitches (/pitch)
- Stories (/stories)
- Q&A (/qa)
- Frameworks (/frameworks)

**Reference:**
- Interview (/interview)
- Competitive (/competitive)
- Cheat Sheet (/cheat-sheet)

## Customization

### Colors
The navigation uses rose color accents from the Tailwind theme:
- `rose-600` - Active text and brand
- `rose-500` - Active indicators and accents
- `rose-500/10` - Background highlights

### Animations
All animations use Framer Motion with:
- Spring physics for smooth transitions
- Staggered children for list animations
- Layout animations for position changes
- Reduced motion support (via existing hook)

## Notes

- The MainNav is included globally in `app/layout.tsx`
- All components are client-side ("use client") due to Framer Motion
- Mobile breakpoint is `md` (768px)
- Navigation items can be customized in `MainNav.tsx`
