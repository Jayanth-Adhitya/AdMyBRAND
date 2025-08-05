"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { TableRow as TableRowType } from "@/lib/mock-data"

interface CampaignsTableProps {
  data: TableRowType[]
}

type SortKey = keyof TableRowType
type SortOrder = 'asc' | 'desc'

export function CampaignsTable({ data }: CampaignsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortKey, setSortKey] = useState<SortKey>('revenue')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter(row => {
      const matchesSearch = 
        row.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.platform.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || row.status === statusFilter
      
      return matchesSearch && matchesStatus
    })

    filtered.sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
      }
      
      const aStr = String(aVal).toLowerCase()
      const bStr = String(bVal).toLowerCase()
      
      if (sortOrder === 'asc') {
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0
      } else {
        return aStr > bStr ? -1 : aStr < bStr ? 1 : 0
      }
    })

    return filtered
  }, [data, searchTerm, sortKey, sortOrder, statusFilter])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAndSortedData, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('desc')
    }
  }

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return null
    return sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default'
      case 'paused': return 'secondary'
      case 'completed': return 'outline'
      default: return 'secondary'
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
          <CardDescription>
            Detailed performance metrics for all marketing campaigns
          </CardDescription>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns or platforms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Status: {statusFilter === 'all' ? 'All' : statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter('all')}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('active')}>
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('paused')}>
                  Paused
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('completed')}>
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('campaign')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Campaign</span>
                      <SortIcon column="campaign" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('platform')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Platform</span>
                      <SortIcon column="platform" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('impressions')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Impressions</span>
                      <SortIcon column="impressions" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('clicks')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Clicks</span>
                      <SortIcon column="clicks" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('conversions')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Conversions</span>
                      <SortIcon column="conversions" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('revenue')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Revenue</span>
                      <SortIcon column="revenue" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="text-right cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('ctr')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>CTR</span>
                      <SortIcon column="ctr" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {row.campaign}
                    </TableCell>
                    <TableCell>{row.platform}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.impressions)}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.clicks)}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.conversions)}</TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(row.revenue)}
                    </TableCell>
                    <TableCell className="text-right">{row.ctr.toFixed(1)}%</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(row.status)}>
                        {row.status}
                      </Badge>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between space-x-2 py-4">
              <div className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} campaigns
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page => {
                      return Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages
                    })
                    .map((page, index, array) => {
                      const showEllipsis = index > 0 && array[index - 1] !== page - 1
                      return (
                        <div key={page} className="flex items-center">
                          {showEllipsis && <span className="px-2 text-muted-foreground">...</span>}
                          <Button
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-8 h-8 p-0"
                          >
                            {page}
                          </Button>
                        </div>
                      )
                    })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
