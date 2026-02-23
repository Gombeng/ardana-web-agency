"use client"

import * as React from "react"
import { 
  Users, 
  MessageSquare,
  Zap,
  ChevronRight,
  User,
  Bot,
  Search
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const chats = [
  { 
    id: 1, 
    name: "Zaskia Travel", 
    lastMsg: "Berapa harga paket travelnya bro?", 
    time: "2h ago", 
    unread: true, 
    status: "Active",
    avatar: "https://i.pravatar.cc/100?u=zaskia"
  },
  { 
    id: 2, 
    name: "Hansen Construction", 
    lastMsg: "Oke, saya kirim datanya besok.", 
    time: "5h ago", 
    unread: false, 
    status: "Lead",
    avatar: "https://i.pravatar.cc/100?u=hansen"
  },
  { 
    id: 3, 
    name: "Chief Barbershop", 
    lastMsg: "Website yang Moregan keren juga ya.", 
    time: "1d ago", 
    unread: false, 
    status: "Lead",
    avatar: "https://i.pravatar.cc/100?u=chief"
  },
  { 
    id: 4, 
    name: "Driz Detailing", 
    lastMsg: "Mau tanya dong mas...", 
    time: "Yesterday", 
    unread: false, 
    status: "Archived",
    avatar: "https://i.pravatar.cc/100?u=driz"
  },
]

export default function ConversationsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Sidebar (Desktop) */}
       <aside className="hidden md:flex flex-col w-64 bg-[#111] border-r border-white/5">
        <div className="p-6 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Zap size={18} fill="white" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Ardana</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 py-4">
          {[
            { icon: MessageSquare, label: "All Chats", active: true },
            { icon: Users, label: "Leads" },
            { icon: Bot, label: "Bot Logs" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? "bg-blue-600/10 text-blue-500 border border-blue-600/20" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Chat List */}
      <main className="flex-1 flex flex-col h-full bg-[#0A0A0A]">
        <header className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-black tracking-tight uppercase">Conversations</h1>
          <div className="relative w-full md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
             <Input placeholder="Search messages..." className="pl-10 bg-white/5 border-white/5 rounded-xl h-11" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chats.map((chat) => (
            <Card key={chat.id} className="bg-[#111] border-white/5 rounded-3xl overflow-hidden hover:border-blue-600/30 transition-all group cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-5">
                   <Avatar className="h-14 w-14 border-2 border-white/5 ring-2 ring-blue-600/20 ring-offset-4 ring-offset-[#111]">
                      <AvatarImage src={chat.avatar} />
                      <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                   </Avatar>
                   <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-bold text-white leading-none">{chat.name}</h3>
                        <Badge className="bg-white/5 text-slate-400 border-white/10 text-[9px] font-black tracking-widest uppercase">{chat.status}</Badge>
                      </div>
                      <p className="text-sm text-slate-400 font-medium truncate max-w-[200px] md:max-w-md italic">
                        "{chat.lastMsg}"
                      </p>
                   </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                   <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{chat.time}</span>
                   {chat.unread ? (
                     <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_#2563EB]" />
                   ) : (
                     <ChevronRight size={16} className="text-slate-700" />
                   )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Bottom Bar Placeholder */}
        <div className="md:hidden h-20 border-t border-white/5 p-4 flex items-center justify-around bg-[#111]/80 backdrop-blur-xl">
           <Link href="/dashboard" className="text-slate-500 uppercase font-black text-[9px] tracking-widest">Dashboard</Link>
           <Link href="/conversations" className="text-blue-500 uppercase font-black text-[9px] tracking-widest underline decoration-2 underline-offset-8">Chats</Link>
           <Link href="/projects" className="text-slate-500 uppercase font-black text-[9px] tracking-widest">Works</Link>
        </div>
      </main>
    </div>
  )
}
