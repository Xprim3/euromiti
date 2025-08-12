# EUROMITI Petrol Company - Project Architecture

## 🏗️ **PROJECT STRUCTURE**

```
src/
├── components/           # Reusable components
│   ├── ui/             # Base UI component library
│   │   ├── BaseButton.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseInput.vue
│   │   └── index.ts
│   ├── layout/         # Layout components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Navigation.vue
│   │   └── Sidebar.vue
│   ├── business/       # Business-specific components
│   │   ├── fuel/       # Fuel-related components
│   │   ├── minimarket/ # Minimarket components
│   │   ├── restaurant/ # Restaurant components
│   │   └── carwash/    # Car wash components
│   └── common/         # Common utility components
├── views/              # Page components
│   ├── Home.vue
│   ├── About.vue
│   ├── Services.vue
│   ├── Contact.vue
│   └── business/       # Business-specific pages
├── stores/             # Pinia state management
│   ├── auth.ts         # Authentication store
│   ├── app.ts          # App-wide state
│   ├── fuel.ts         # Fuel services store
│   └── business.ts     # Business data store
├── services/           # API and external services
│   ├── api/            # API clients
│   ├── auth/           # Authentication services
│   └── external/       # External service integrations
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation
│   ├── formatting.ts   # Data formatting
│   └── helpers.ts      # Helper functions
├── styles/             # Global styles
│   ├── brand.css       # Brand system
│   ├── components.css  # Component styles
│   └── utilities.css   # Utility classes
├── types/              # TypeScript type definitions
│   ├── business.ts     # Business domain types
│   ├── api.ts          # API response types
│   └── common.ts       # Common types
├── i18n/               # Internationalization
│   ├── locales/        # Language files
│   └── index.ts        # I18n configuration
└── router/             # Vue Router configuration
    └── index.ts        # Route definitions
```

## 🎨 **DESIGN SYSTEM ARCHITECTURE**

### **1. Brand Foundation**
- **Colors**: Primary (Blue), Secondary (Green), Accent (Red), Warning (Orange)
- **Typography**: Inter (Primary), Poppins (Secondary), JetBrains Mono (Code)
- **Spacing**: 8px grid system (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- **Shadows**: 5-level shadow system (sm, md, lg, xl, 2xl)

### **2. Component Architecture**
- **Base Components**: Button, Card, Input, Modal, etc.
- **Layout Components**: Header, Footer, Navigation, Sidebar
- **Business Components**: Fuel display, Service cards, Location maps
- **Pattern Components**: Hero sections, Feature grids, Testimonials

### **3. State Management Strategy**
- **Auth Store**: User authentication, roles, permissions
- **App Store**: Theme, language, notifications, UI state
- **Business Store**: Fuel prices, service availability, locations
- **User Store**: User preferences, favorites, history

## 🚀 **DEVELOPMENT PHASES**

### **Phase 1: Foundation (Week 1-2)**
- ✅ Global brand style system
- ✅ Component library foundation
- ✅ Project architecture setup
- ✅ Base UI components

### **Phase 2: Layout & Navigation (Week 3-4)**
- Header with company branding
- Main navigation system
- Footer with business information
- Mobile responsive design

### **Phase 3: Core Pages (Week 5-6)**
- Homepage with company overview
- About us page
- Services overview page
- Contact information page

### **Phase 4: Business Services (Week 7-8)**
- Fuel services page
- Minimarket page
- Restaurant page
- Car wash page

### **Phase 5: Functionality (Week 9-10)**
- Contact forms
- Location finder
- Service booking
- Price displays

### **Phase 6: Enhancement (Week 11-12)**
- Performance optimization
- SEO implementation
- Testing & bug fixes
- Deployment preparation

## 🔧 **TECHNICAL DECISIONS**

### **Component Design Principles**
1. **Composition over Inheritance**: Use slots and props for flexibility
2. **Single Responsibility**: Each component has one clear purpose
3. **Reusability**: Components should work in multiple contexts
4. **Accessibility**: Built-in ARIA support and keyboard navigation
5. **Performance**: Lazy loading and code splitting where appropriate

### **State Management Patterns**
1. **Centralized State**: App-wide state in dedicated stores
2. **Local State**: Component-specific state stays in components
3. **Computed Properties**: Use getters for derived state
4. **Actions**: Async operations and side effects in store actions

### **Styling Strategy**
1. **CSS Variables**: Brand colors and design tokens
2. **Utility Classes**: Tailwind CSS for rapid development
3. **Component Styles**: Scoped styles for component-specific design
4. **Responsive Design**: Mobile-first approach with breakpoint system

## 📱 **RESPONSIVE DESIGN STRATEGY**

### **Breakpoints**
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### **Mobile-First Approach**
1. Design for mobile devices first
2. Enhance for larger screens progressively
3. Touch-friendly interactions
4. Optimized performance for mobile networks

## 🌐 **INTERNATIONALIZATION STRATEGY**

### **Supported Languages**
- **Albanian (sq)**: Primary language, default
- **English (en)**: International business
- **Serbian (sr)**: Regional market

### **Localization Features**
- Currency formatting (EUR, USD, RSD)
- Date/time formatting
- RTL support (if needed)
- Cultural adaptations

## 🚀 **NEXT STEPS**

1. **Complete Base Components**: Add Modal, Dropdown, Tabs
2. **Layout Components**: Create Header, Footer, Navigation
3. **Business Components**: Start with fuel service components
4. **Page Structure**: Plan and create main page layouts

## 📚 **RESOURCES**

- **Design System**: `src/styles/brand.css`
- **Component Library**: `src/components/ui/`
- **State Management**: `src/stores/`
- **Internationalization**: `src/i18n/`
