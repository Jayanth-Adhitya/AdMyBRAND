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
import { 
  MetricCardSkeleton, 
  AnalyticsChartSkeleton, 
  CampaignsTableSkeleton 
} from "@/components/loading-skeletons"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [metrics, setMetrics] = useState(mockMetrics)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Simulate a 1.5 second loading time

    return () => clearTimeout(timer)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => generateRandomMetricCard(metric))
      )
      setLastUpdated(new Date())
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [isLoading])

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
                Welcome back! Here's what's happening with your campaigns today.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => <MetricCardSkeleton key={i} />)}
          </div>
        ) : (
          <MetricCards metrics={metrics} />
        )}
        
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnalyticsChartSkeleton />
            <AnalyticsChartSkeleton />
            <AnalyticsChartSkeleton />
          </div>
        ) : (
          <AnalyticsCharts 
            lineData={mockLineChartData}
            barData={mockBarChartData}
            pieData={mockPieChartData}
          />
        )}
        
        {isLoading ? (
          <CampaignsTableSkeleton />
        ) : (
          <CampaignsTable data={mockTableData} />
        )}
        
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
