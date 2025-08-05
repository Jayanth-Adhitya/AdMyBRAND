"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function MetricCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-8 w-[100px]" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-[60px]" />
                <Skeleton className="h-3 w-[80px]" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function ChartsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-[400px]">
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </CardHeader>
          <CardContent className="h-[300px]">
            <Skeleton className="h-full w-full" />
          </CardContent>
        </Card>
      </div>
      
      <Card className="h-[400px]">
        <CardHeader>
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent className="h-[300px]">
          <Skeleton className="h-full w-full rounded-full" />
        </CardContent>
      </Card>

      <div className="lg:col-span-3">
        <Card className="h-[400px]">
          <CardHeader>
            <Skeleton className="h-6 w-[180px]" />
            <Skeleton className="h-4 w-[250px]" />
          </CardHeader>
          <CardContent className="h-[300px]">
            <Skeleton className="h-full w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function TableSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-4" />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="grid grid-cols-8 gap-4">
              {Array.from({ length: 8 }).map((_, j) => (
                <Skeleton key={j} className="h-6" />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8" />
            <div>
              <Skeleton className="h-6 w-[120px]" />
              <Skeleton className="h-3 w-[60px] mt-1" />
            </div>
            <Skeleton className="h-6 w-[100px]" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </header>
      
      <main className="container py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2">
          <div>
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-4 w-[400px] mt-2" />
          </div>
          <Skeleton className="h-4 w-[150px]" />
        </div>

        <MetricCardsSkeleton />
        <ChartsSkeleton />
        <TableSkeleton />
      </main>
    </div>
  )
}
