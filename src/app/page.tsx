"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricCards } from "@/components/metric-cards"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { CampaignsTable } from "@/components/campaigns-table"
import { 
  mockMetrics, 
  mockLineChartData, 
  mockBarChartData, 
  mockPieChartData,
  mockTableData,
  generateRandomMetricCard
} from "@/lib/mock-data"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [metrics, setMetrics] = useState(mockMetrics)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => generateRandomMetricCard(metric))
      )
      setLastUpdated(new Date())
    }, 3000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Analytics Overview</h2>
              <p className="text-muted-foreground">
                Welcome back! Here&apos;s what&apos;s happening with your campaigns today.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </motion.div>

        <MetricCards metrics={metrics} />
        
        <AnalyticsCharts 
          lineData={mockLineChartData}
          barData={mockBarChartData}
          pieData={mockPieChartData}
        />
        
        <CampaignsTable data={mockTableData} />
        
        <motion.footer
          className="text-center text-sm text-muted-foreground py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p>© 2025 ADmyBRAND Insights. Built by Jayanth Adhitya.</p>
        </motion.footer>
      </main>
    </div>
  )
}
