"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  TrendingDown,
  ArrowUpIcon,
  ArrowDownIcon
} from "lucide-react"
import { motion } from "framer-motion"
import { MetricCard } from "@/lib/mock-data"

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
}

interface MetricCardsProps {
  metrics: MetricCard[]
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap]
        const isPositive = metric.trend === 'up'
        
        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className="h-4 w-4 text-muted-foreground">
                  {Icon && <Icon className="h-4 w-4" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <motion.div 
                    className="text-2xl font-bold"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={isPositive ? "default" : "destructive"}
                      className="flex items-center space-x-1"
                    >
                      {isPositive ? (
                        <ArrowUpIcon className="h-3 w-3" />
                      ) : (
                        <ArrowDownIcon className="h-3 w-3" />
                      )}
                      <span>{Math.abs(metric.change || 0)}%</span>
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      from last month
                    </p>
                  </div>
                </div>
              </CardContent>
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${
                  isPositive ? 'bg-green-500' : 'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ 
                  delay: index * 0.1 + 0.4, 
                  duration: 0.8,
                  ease: "easeOut"
                }}
              />
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
