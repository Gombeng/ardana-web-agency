"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Users, 
  Target, 
  TrendingUp, 
  Search, 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare,
  Zap,
  MoreVertical,
  Bell
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const stats = [
  { title: "Total Leads", value: "226", change: "+100 today", icon: Users, color: "text-blue-500" },
  { title: "Active Outreach", value: "35", change: "Running...", icon: Target, color: "text-purple-500" },
  { title: "Avg. Response", value: "14%", change: "+2% from last week", icon: TrendingUp, color: "text-emerald-500" },
  { title: "Bot Conversations", value: "12", change: "Live", icon: MessageSquare, color: "text-orange-500" },
]

const recentLeads = [
  { name: "Driz Auto Detailing", category: "Auto Detailing", area: "Jakarta Barat", status: "Contacted", time: "2h ago" },
  { name: "Perfect Wedding Organizer", category: "Wedding Organizer", area: "Jakarta Pusat", status: "New", time: "3h ago" },
  { name: "Champion Futsal", category: "Sports Court", area: "Jakarta Barat", status: "New", time: "4h ago" },
  { name: "Merial Health", category: "Klinik", area: "Jakarta Selatan", status: "Contacted", time: "5h ago" },
  { name: "Gloss Patrol Sunter", category: "Auto Detailing", area: "Sunter", status: "New", time: "Just now" },
]

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true, href: "/dashboard" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: MessageSquare, label: "Conversations", href: "/conversations" },
]

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#111] border-r border-white/5">
        <div className="p-6 flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Zap size={18} fill="white" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Ardana</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? "bg-blue-600/10 text-blue-500 border border-blue-600/20 shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)]" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-bold text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-6 rounded-2xl relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <p className="text-white font-black text-sm uppercase tracking-widest mb-1">Standard 2026</p>
              <p className="text-blue-100 text-xs opacity-80">You are using the Pro version</p>
            </div>
            <Zap className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform" size={80} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 pb-24 lg:pb-10">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-8 px-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Zap size={18} fill="white" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Ardana</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-slate-400"><Bell size={20} /></Button>
            <Avatar className="h-8 w-8 border border-white/10"><AvatarImage src="https://i.pravatar.cc/150?u=rizal" /><AvatarFallback>RA</AvatarFallback></Avatar>
          </div>
        </div>

        {/* Header Desktop */}
        <header className="hidden lg:flex flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white mb-2 uppercase">Agency Control</h1>
            <p className="text-slate-500 font-medium italic">Welcome back, Rizal. Data synced from Notion.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <Input placeholder="Search..." className="pl-10 bg-white/5 border-white/5 rounded-xl h-12" />
            </div>
            <Avatar className="h-12 w-12 border-2 border-white/10 ring-2 ring-blue-600 ring-offset-4 ring-offset-[#0A0A0A]">
              <AvatarImage src="https://i.pravatar.cc/150?u=rizal" /><AvatarFallback>RA</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto pb-4 lg:pb-0 mb-10 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
          {stats.map((s, i) => (
            <Card key={i} className="min-w-[280px] lg:min-w-0 bg-[#111] border-white/5 rounded-3xl group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl bg-white/5 ${s.color} group-hover:scale-110 transition-transform`}>
                    <s.icon size={20} />
                  </div>
                  <MoreVertical size={18} className="text-slate-700" />
                </div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{s.title}</p>
                <h3 className="text-3xl font-black text-white my-1">{s.value}</h3>
                <p className="text-[10px] font-bold text-emerald-500">{s.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-[#111] border-white/5 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="px-8 py-8 flex flex-row items-center justify-between border-b border-white/5">
              <CardTitle className="text-xl font-black uppercase tracking-tight text-white">Notion Sync (Leads)</CardTitle>
              <Button variant="ghost" className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.2em]">View in Notion</Button>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5 hover:bg-transparent">
                    <TableHead className="text-slate-500 font-black uppercase text-[9px] tracking-widest pl-8">Business</TableHead>
                    <TableHead className="text-slate-500 font-black uppercase text-[9px] tracking-widest">Status</TableHead>
                    <TableHead className="text-right text-slate-500 font-black uppercase text-[9px] tracking-widest pr-8">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentLeads.map((lead) => (
                    <TableRow key={lead.name} className="border-white/5 hover:bg-white/[0.02] transition-all">
                      <TableCell className="pl-8 py-6">
                         <p className="font-black text-white text-sm uppercase tracking-tight">{lead.name}</p>
                         <p className="text-slate-500 text-[10px] mt-1 font-bold tracking-widest uppercase">{lead.category} • {lead.area}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={lead.status === "Contacted" ? "bg-emerald-600/10 text-emerald-500 border-emerald-500/20 font-black text-[9px]" : "bg-blue-600/10 text-blue-500 border-blue-500/20 font-black text-[9px]"}>
                          {lead.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right pr-8 text-slate-500 font-black text-[10px]">{lead.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-blue-600 rounded-[2.5rem] p-8 border-none text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <Target size={32} className="mb-6" />
                <CardTitle className="text-2xl font-black mb-4 uppercase tracking-tighter italic">Outreach Live</CardTitle>
                <p className="text-blue-100 text-sm font-bold mb-8 leading-relaxed opacity-80 uppercase tracking-wide">
                  Batching 10 leads/hr <br/> Starts 07:00 AM
                </p>
                <div className="flex justify-between items-end mb-2 font-black italic text-xs uppercase">
                   <span>Progress</span>
                   <span>35%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden border border-white/10">
                   <div className="h-full bg-white w-1/3 shadow-[0_0_15px_white]" />
                </div>
              </div>
              <Zap className="absolute -right-8 -bottom-8 text-white/10 group-hover:scale-110 transition-transform" size={180} />
            </Card>

            <Card className="bg-[#111] border-white/5 rounded-[2.5rem] p-8">
              <CardTitle className="text-[11px] font-black mb-8 text-slate-500 uppercase tracking-[0.3em]">Niche Mastery</CardTitle>
              <div className="space-y-8">
                {[
                  { label: "Travel", progress: 100, color: "bg-blue-500" },
                  { label: "Auto Detailing", progress: 60, color: "bg-purple-500" },
                  { label: "Wedding Organizer", progress: 45, color: "bg-pink-500" },
                ].map((n) => (
                  <div key={n.label} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest italic text-white">
                      <span>{n.label}</span>
                      <span>{n.progress}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${n.color}`} style={{ width: `${n.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/5 px-8 py-5 flex items-center justify-between z-50 rounded-t-[2.5rem]">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`flex flex-col items-center space-y-2 ${item.active ? "text-blue-500" : "text-slate-500"}`}>
            <item.icon size={22} className={item.active ? "drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" : ""} />
            <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
