export interface MetricCard {
  id: string;
  title: string;
  value: string;
  change?: number;
  trend?: 'up' | 'down';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  revenue?: number;
  users?: number;
  conversions?: number;
  date?: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  platform: string;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  ctr: number;
  cpc: number;
  status: 'active' | 'paused' | 'completed';
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatDollarValue = (value: number) => `$${Math.round(value).toLocaleString()}`;
const formatNumber = (value: number) => Math.round(value).toLocaleString();
const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

export const generateRandomMetricCard = (prevMetric: MetricCard): MetricCard => {
  const updatedMetric = { ...prevMetric };

  let prevNumericValue: number;
  let newValue: number;
  let changePercentage: number;

  switch (prevMetric.title) {
    case 'Total Revenue':
      prevNumericValue = parseFloat(prevMetric.value.replace(/[^0-9.-]+/g,""));
      const revenueChange = (Math.random() * 0.1 - 0.05); // -5% to +5%
      newValue = prevNumericValue * (1 + revenueChange);
      changePercentage = (newValue - prevNumericValue) / prevNumericValue * 100;
      updatedMetric.value = formatDollarValue(newValue);
      break;
    case 'Active Users':
      prevNumericValue = parseInt(prevMetric.value.replace(/[^0-9.-]+/g,""));
      const usersChange = (Math.random() * 0.1 - 0.05); // -5% to +5%
      newValue = prevNumericValue * (1 + usersChange);
      changePercentage = (newValue - prevNumericValue) / prevNumericValue * 100;
      updatedMetric.value = formatNumber(newValue);
      break;
    case 'Conversions':
      prevNumericValue = parseInt(prevMetric.value.replace(/[^0-9.-]+/g,""));
      const conversionsChange = (Math.random() * 0.1 - 0.05); // -5% to +5%
      newValue = prevNumericValue * (1 + conversionsChange);
      changePercentage = (newValue - prevNumericValue) / prevNumericValue * 100;
      updatedMetric.value = formatNumber(newValue);
      break;
    case 'Growth Rate':
      prevNumericValue = parseFloat(prevMetric.value.replace(/[^0-9.-]+/g,""));
      const growthRateChange = (Math.random() * 0.02 - 0.01); // -1% to +1%
      newValue = prevNumericValue * (1 + growthRateChange);
      changePercentage = (newValue - prevNumericValue) / prevNumericValue * 100;
      updatedMetric.value = formatPercentage(newValue);
      break;
    default:
      prevNumericValue = 0;
      newValue = 0;
      changePercentage = 0;
      break;
  }

  updatedMetric.change = parseFloat(changePercentage.toFixed(1));
  updatedMetric.trend = updatedMetric.change >= 0 ? 'up' : 'down';

  return updatedMetric;
};

export const mockMetrics: MetricCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: formatDollarValue(getRandomNumber(50000, 200000)),
    icon: 'DollarSign'
  },
  {
    id: '2',
    title: 'Active Users',
    value: formatNumber(getRandomNumber(5000, 15000)),
    icon: 'Users'
  },
  {
    id: '3',
    title: 'Conversions',
    value: formatNumber(getRandomNumber(500, 2000)),
    icon: 'Target'
  },
  {
    id: '4',
    title: 'Growth Rate',
    value: formatPercentage(getRandomNumber(5, 30)),
    icon: 'TrendingUp'
  }
];

export const mockLineChartData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 31000, users: 2400, conversions: 240 },
  { name: 'Feb', revenue: 35000, users: 1398, conversions: 210 },
  { name: 'Mar', revenue: 42000, users: 3800, conversions: 290 },
  { name: 'Apr', revenue: 38000, users: 3908, conversions: 300 },
  { name: 'May', revenue: 45000, users: 4800, conversions: 320 },
  { name: 'Jun', revenue: 52000, users: 3800, conversions: 380 },
  { name: 'Jul', revenue: 48000, users: 4300, conversions: 350 },
  { name: 'Aug', revenue: 55000, users: 5200, conversions: 410 },
  { name: 'Sep', revenue: 61000, users: 5800, conversions: 480 },
  { name: 'Oct', revenue: 58000, users: 6200, conversions: 520 },
  { name: 'Nov', revenue: 67000, users: 7100, conversions: 580 },
  { name: 'Dec', revenue: 72000, users: 8400, conversions: 620 }
];

export const mockBarChartData: ChartDataPoint[] = [
  { name: 'Facebook', value: 35000 },
  { name: 'Google', value: 42000 },
  { name: 'Instagram', value: 28000 },
  { name: 'LinkedIn', value: 19000 },
  { name: 'Twitter', value: 15000 },
  { name: 'YouTube', value: 25000 }
];

export const mockPieChartData: ChartDataPoint[] = [
  { name: 'Organic Search', value: 4200 },
  { name: 'Paid Search', value: 3800 },
  { name: 'Social Media', value: 2400 },
  { name: 'Email', value: 1800 },
  { name: 'Direct', value: 3200 },
  { name: 'Referral', value: 1600 }
];

export const mockTableData: TableRow[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    platform: 'Google Ads',
    impressions: 125000,
    clicks: 3750,
    conversions: 187,
    revenue: 14960,
    ctr: 3.0,
    cpc: 3.99,
    status: 'active'
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q4',
    platform: 'Facebook',
    impressions: 98000,
    clicks: 2940,
    conversions: 147,
    revenue: 11760,
    ctr: 3.0,
    cpc: 2.85,
    status: 'active'
  },
  {
    id: '3',
    campaign: 'Holiday Collection',
    platform: 'Instagram',
    impressions: 87500,
    clicks: 2625,
    conversions: 131,
    revenue: 10480,
    ctr: 3.0,
    cpc: 3.20,
    status: 'paused'
  },
  {
    id: '4',
    campaign: 'New Product Launch',
    platform: 'LinkedIn',
    impressions: 45000,
    clicks: 1350,
    conversions: 68,
    revenue: 5440,
    ctr: 3.0,
    cpc: 4.75,
    status: 'active'
  },
  {
    id: '5',
    campaign: 'Retargeting Campaign',
    platform: 'Google Ads',
    impressions: 67000,
    clicks: 2010,
    conversions: 101,
    revenue: 8080,
    ctr: 3.0,
    cpc: 2.55,
    status: 'completed'
  },
  {
    id: '6',
    campaign: 'Video Marketing Push',
    platform: 'YouTube',
    impressions: 156000,
    clicks: 4680,
    conversions: 234,
    revenue: 18720,
    ctr: 3.0,
    cpc: 2.99,
    status: 'active'
  },
  {
    id: '7',
    campaign: 'Local Business Ads',
    platform: 'Facebook',
    impressions: 34000,
    clicks: 1020,
    conversions: 51,
    revenue: 4080,
    ctr: 3.0,
    cpc: 3.45,
    status: 'active'
  },
  {
    id: '8',
    campaign: 'Email Newsletter Promo',
    platform: 'Email',
    impressions: 25000,
    clicks: 750,
    conversions: 38,
    revenue: 3040,
    ctr: 3.0,
    cpc: 1.20,
    status: 'completed'
  }
];

// Generate more realistic time-series data for real-time updates
export const generateRealtimeData = (): ChartDataPoint[] => {
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return {
      name: `${hour}:00`,
      value: Math.floor(Math.random() * 1000) + 500,
      users: Math.floor(Math.random() * 200) + 50
    };
  });
  return hours;
};
