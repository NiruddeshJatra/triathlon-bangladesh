#### **Tech Stack**

Astro 5, React 18, TypeScript, Tailwind CSS, Vercel

#### **Overview**

Triathlon Bangladesh is a dark-premium endurance sports web application built for athletes, event organizers, and race sponsors. It provides event detail hubs, registration tracking, interactive course guides, and community race listings for national endurance competitions.

**Key Features**

- **Dynamic Event Engine:** Dedicated theme skins and layouts for distinct endurance events (half-marathons, duathlons, and swim rescues).
- **Interactive Race Hub:** Displays course maps, age category grids, prize structures, entitlements, and flag-off schedules.
- **SSR-Safe Countdowns:** Live event countdown rings with synchronized server-side rendered timestamps to prevent UI flickering.
- **Centralized Data Layer:** Single source-of-truth content structure enabling quick data updates and localization.

#### **Technical Highlights**

- **Island Architecture:** Uses Astro static page generation for zero-JS default loading, selectively hydrating React components (`client:idle`, `client:visible`) for scroll route indicators and interactive carousels.
- **Performance & SEO Optimization:** Designed for high Lighthouse scores using self-hosted web fonts, semantic HTML5 landmarks, automated sitemap generation, and optimized asset pipelines.
- **Design Token System:** Built with scoped CSS custom properties to swap visual themes (e.g., event-specific gold and chartreuse identities) without styling conflicts.
