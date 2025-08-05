"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts"
import { motion } from "framer-motion"
import { ChartDataPoint } from "@/lib/mock-data"

interface AnalyticsChartsProps {
  lineData: ChartDataPoint[]
  barData: ChartDataPoint[]
  pieData: ChartDataPoint[]
}

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'
]

export function AnalyticsCharts({ lineData, barData, pieData }: AnalyticsChartsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:col-span-2"
      >
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Revenue & Users Trend</CardTitle>
            <CardDescription>
              Monthly performance over the last 12 months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(var(--card-rgb), 0.8)', // Slightly darker semi-transparent background
                    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
                    border: '1px solid rgba(var(--border-rgb), 0.3)', // Subtle border
                    borderRadius: '8px',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' // Slightly more pronounced shadow
                  }}
                  labelStyle={{ 
                    color: '#E0E0E0', // Light grey for label text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                  itemStyle={{ 
                    color: '#E0E0E0', // Light grey for item text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8884d8" // Modern purple for contrast
                  strokeWidth={3}
                  dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
                  name="Revenue ($)"
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#82ca9d" // Modern green for contrast
                  strokeWidth={3}
                  dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2 }}
                  name="Users"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Demographics</CardTitle>
            <CardDescription>
              Distribution of users by age group
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(var(--card-rgb), 0.8)', // Slightly darker semi-transparent background
                    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
                    border: '1px solid rgba(var(--border-rgb), 0.3)', // Subtle border
                    borderRadius: '8px',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' // Slightly more pronounced shadow
                  }}
                  labelStyle={{ 
                    color: '#E0E0E0', // Light grey for label text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                  itemStyle={{ 
                    color: '#E0E0E0', // Light grey for item text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="lg:col-span-3"
      >
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>
              Revenue by advertising platform
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(var(--card-rgb), 0.8)', // Slightly darker semi-transparent background
                    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
                    border: '1px solid rgba(var(--border-rgb), 0.3)', // Subtle border
                    borderRadius: '8px',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' // Slightly more pronounced shadow
                  }}
                  labelStyle={{ 
                    color: '#E0E0E0', // Light grey for label text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                  itemStyle={{ 
                    color: '#E0E0E0', // Light grey for item text
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' // Subtle text stroke/shadow
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#4169e1" // Royal Blue for bar chart
                  radius={[4, 4, 0, 0]}
                  name="Revenue ($)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
