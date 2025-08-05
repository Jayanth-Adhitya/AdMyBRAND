# ADmyBRAND Insights - Analytics Dashboard

A stunning, modern analytics dashboard built for digital marketing agencies. Features real-time data visualization, responsive design, and smooth animations.

## 📸 Dashboard Preview


<img width="1919" height="932" alt="Image" src="https://github.com/user-attachments/assets/7ce06603-341d-4b40-82f8-05f9942d95b0" />

## ✨ Features

### 📊 Core Analytics
- **Overview Metrics**: Revenue, Active Users, Conversions, Growth Rate
- **Interactive Charts**: Line charts, bar charts, and pie/donut charts using Recharts
- **Campaign Data Table**: Advanced table with sorting, filtering, and pagination
- **Real-time Updates**: Simulated live data updates every 30 seconds

### 🎨 Design & UX
- **Modern UI**: Built with shadcn/ui components for consistent design
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion micro-interactions and transitions
- **Loading States**: Beautiful skeleton loaders for better UX

### ⚡ Technical Stack
- **Framework**: Next.js 14+ with App Router and TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion for smooth interactions
- **Theme**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with theme provider
│   ├── loading.tsx          # Loading page with skeletons
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── analytics-charts.tsx # Interactive chart components
│   ├── campaigns-table.tsx  # Advanced data table
│   ├── dashboard-header.tsx # Header with theme toggle
│   ├── loading-skeletons.tsx# Loading state components
│   ├── metric-cards.tsx     # Animated metric cards
│   └── theme-provider.tsx   # Theme context provider
└── lib/
    ├── mock-data.ts         # Sample analytics data
    └── utils.ts             # Utility functions
```

## 🎯 Key Components

### MetricCards
Displays key performance indicators with:
- Animated counters and trend indicators
- Smooth hover effects and scaling
- Color-coded performance trends
- Real-time data updates

### AnalyticsCharts
Three chart types for data visualization:
- **Line Chart**: Revenue and user trends over time
- **Bar Chart**: Platform performance comparison
- **Pie Chart**: Traffic source distribution

### CampaignsTable
Advanced data table featuring:
- Real-time search and filtering
- Column sorting (ascending/descending)
- Pagination with page navigation
- Status badges and formatted values

### DashboardHeader
Navigation header with:
- Brand logo and title
- Theme switcher (light/dark/system)
- Notification indicators
- Responsive design

## 🔧 Customization

### Adding New Metrics
```typescript
// lib/mock-data.ts
export const customMetrics: MetricCard[] = [
  {
    id: 'custom-1',
    title: 'Custom Metric',
    value: '$42,000',
    change: 15.2,
    trend: 'up',
    icon: 'CustomIcon'
  }
]
```

### Creating New Charts
```typescript
// components/custom-chart.tsx
import { ResponsiveContainer, LineChart, Line } from 'recharts'

export function CustomChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}
```

### Theme Customization
Modify `src/app/globals.css` to customize colors:

```css
::root {
  --primary: oklch(0.205 0 0);      /* Primary brand color */
  --secondary: oklch(0.97 0 0);     /* Secondary color */
  --background: oklch(1 0 0);       /* Background color */
  --card: oklch(1 0 0);             /* Card background */
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layout)
- **Desktop**: > 1024px (full multi-column layout)

## 🎨 Design System

### Colors
- **Primary**: Modern neutral with high contrast
- **Secondary**: Subtle gray tones for supporting elements
- **Accent**: Chart colors optimized for accessibility
- **Status**: Green (success), Red (error), Yellow (warning)

### Typography
- **Font**: Inter (system font fallback)
- **Hierarchy**: Clear heading and body text scales
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- **Base unit**: 4px (0.25rem)
- **Component spacing**: 16px, 24px, 32px
- **Layout spacing**: 48px, 64px, 96px

## 🚀 Performance

### Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized web font loading
- **Bundle Analysis**: Lightweight dependencies

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Recharts](https://recharts.org/) for the charting library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

---

Built with ❤️ for AdMyBRAND
