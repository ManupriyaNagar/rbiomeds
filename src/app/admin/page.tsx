"use client";
import React from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    ArrowRight,
    PlusCircle,
    TrendingUp,
    MessageSquare,
    Globe
} from "lucide-react";

const AdminDashboard = () => {
    const stats = [
        { label: "Total Articles", value: "12", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    
    ];

    const quickActions = [
        {
            title: "Article Manager",
            description: "Manage and create new blog posts",
            href: "/admin/articles",
            icon: FileText,
            color: "bg-[#ef662e]"
        },
      
    ];

    return (
        <div className="min-h-screen bg-white pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">
                            Dashboard
                        </h1>
                        <p className="text-gray-500 font-medium">Welcome back, Admin. Here's what's happening today.</p>
                    </div>
                    <Link
                        href="/admin/articles"
                        className="inline-flex items-center gap-2 bg-[#ef662e] text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-lg shadow-[#ef662e]/20"
                    >
                        <PlusCircle className="w-4 h-4" />
                        New Article
                    </Link>
                </div>


                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Quick Actions */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {quickActions.map((action, i) => (
                                <Link
                                    key={i}
                                    href={action.href}
                                    className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${action.color} opacity-[0.03] rounded-bl-full transition-all group-hover:scale-110`} />
                                    <div className={`${action.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                                        <action.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-2">{action.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium mb-6">{action.description}</p>
                                    <div className="flex items-center gap-2 text-[#ef662e] font-black uppercase text-[10px] tracking-widest">
                                        Launch Module <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
