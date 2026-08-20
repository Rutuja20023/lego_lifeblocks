# LEGO LifeBlocks™ — Build Your Day. One Block at a Time.

> **Front-End Development Internship Assignment Submission**  
> **Brand Reimagination:** LEGO reimagined as a premium physical desk productivity & daily focus operating system.  
> **Author:** Rutuja Pakhare  
> **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Web Audio API, Canvas-Confetti, Lucide Icons.

---

## 🌟 Concept Overview

### The Twist
Instead of selling children's plastic construction toys, **LEGO Life** is reimagined as an executive physical productivity hardware brand: **LEGO LifeBlocks™**.

Modern knowledge workers and developers suffer from *Screen Fatigue* and *The Invisible Tab Dilemma*: to-do lists get buried under 40 browser tabs, notifications constantly interrupt deep flow, and infinite digital task lists create lingering guilt.

**LEGO LifeBlocks™** brings productivity back into the physical world. Users select weighted, bead-blasted modular blocks (🟨 Focus, 🟦 Deep Work, 🟩 Health & Reset, 🟥 Buffer & Break, 🟪 North Star Goal) and snap them onto a magnetic anodized aluminum desk baseplate.

---

## 🚀 Key Features & Highlights

- **Interactive "Build Your Desk Setup" Simulator**:
  - Live interactive desk workbench where users can snap blocks onto a virtual baseplate.
  - Real-time **Focus Equilibrium Rating**, **Deep Flow Hours**, and dynamic neuro-ergonomic advice (e.g. burnout detection if breaks are omitted).
  - 1-click preset loaders for Engineers, Founders, and Students.
  - 1-click "Order This Exact Custom Setup".
- **Tactile Sound Synthesis (Web Audio API)**:
  - Custom procedural audio engine synthesizing realistic plastic LEGO stud "snaps" and "clicks" on user interaction (with a 1-click mute toggle).
- **Interactive Cart & Pre-Order Flow**:
  - Slide-over cart drawer with quantity increments, custom block summaries, and promo code support (Try code `FIRSTBUILD15` for 15% off).
  - Complete checkout modal with shipping validation, payment selector, tracking ID generator, and celebratory confetti burst.
- **Dynamic Currency Switcher**:
  - Seamless toggle between India (₹ INR) and Global ($ USD).
- **Deep Cognitive Science & Comparison Matrix**:
  - Behavioral neuroscience breakdown showing how physical tactile anchors reduce context-switching penalties by 68%.
  - Side-by-side comparison matrix vs Notion/Todoist, Paper Planners, and Sticky Notes.
- **100% Responsive Design**:
  - Tested and optimized across Mobile (375px, 390px, 430px), Tablet (768px, 1024px), and Desktop (1440px+).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (React 18 / App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom tactile 3D box shadows, stud patterns, and LEGO brand palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API (zero external audio file dependencies)
- **Effects**: Canvas Confetti

### Project Structure
```
lego-lifeblocks/
├── app/
│   ├── globals.css          # Tactile stud styling, custom shadows & fonts
│   ├── layout.tsx           # SEO metadata, CartProvider wrapper
│   └── page.tsx             # 14 structured landing page sections
├── components/
│   ├── Navbar.tsx           # Announcement bar, sound & currency toggles, cart badge
│   ├── Hero.tsx             # High-impact typography & interactive hero stack
│   ├── TheProblem.tsx       # Screen distraction vs physical presence
│   ├── ProductShowcase.tsx  # Interactive 6-block hardware explorer & specs
│   ├── InteractiveBuilder.tsx # Live Desk Workbench & Focus Score engine
│   ├── HowItWorks.tsx       # 4-step daily ritual (Pick -> Build -> Do -> Reset)
│   ├── DeskSetupGallery.tsx # Real workspace lookbook
│   ├── ScienceBehindIt.tsx  # Neuroscience & cognitive ergonomics
│   ├── ComparisonTable.tsx  # Comparison vs digital apps & paper
│   ├── PricingKits.tsx      # Starter, Creator Pro, and Executive Studio kits
│   ├── Testimonials.tsx     # Authentic verified reviews & metrics
│   ├── FaqSection.tsx       # Interactive search & accordion FAQ
│   ├── FinalCta.tsx         # Conversion closing CTA
│   ├── CartDrawer.tsx       # Slide-over cart drawer with promo codes
│   ├── CheckoutModal.tsx    # Mock checkout with confetti celebration
│   ├── Footer.tsx           # Brand story, newsletter & assignment disclaimer
│   └── LegoBlockSvg.tsx     # Reusable tactile 3D isometric LEGO block
├── lib/
│   ├── audio.ts             # Web Audio API synthetic snap sound generator
│   ├── CartContext.tsx      # Reactive cart, currency, and checkout state
│   ├── data.ts              # Block specs, pricing kits, testimonials, FAQs
│   └── types.ts             # TypeScript definitions
└── public/
```

---

## 💻 Local Development Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lego-lifeblocks.git
   cd lego-lifeblocks
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Deployment to Vercel

1. Push this repository to your GitHub account (make sure it's public).
2. Visit [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your `lego-lifeblocks` repository.
4. Deploy with standard Next.js default settings.
5. Your live link will be ready in under 1 minute!

---

## 📄 Evaluation Checklist

- [x] **Next.js & App Router**: Built using modern Next.js + TypeScript
- [x] **Single Landing Page**: All sections seamlessly integrated with smooth scrolling
- [x] **Unique Brand Reimagination**: LEGO transformed from children's toys into an executive physical productivity system
- [x] **High Visual Design & Conversion Focus**: Bold typography, tactile 3D micro-interactions, live focus rating simulator, social proof, promo codes, and interactive pre-orders
- [x] **Fully Responsive**: Flawless layout on mobile, tablet, and desktop
- [x] **Clean Project Structure**: Modular React components, typed data, zero errors

---

*Disclaimer: LEGO LifeBlocks™ is a conceptual student design project created for front-end internship evaluation.*
