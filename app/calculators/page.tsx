'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { Info, RefreshCw } from "lucide-react";

// Types for calculation results
interface BmiResult {
    bmi: number;
    status: string;
    color: string;
}

interface BmrResult {
    bmr: number;
    activityLevels: { [key: string]: number };
}

const CalculatorContent = () => {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('bmi');

    // Form States
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');

    // Result States
    const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);
    const [bmrResult, setBmrResult] = useState<BmrResult | null>(null);
    const [bodyFatResult, setBodyFatResult] = useState<number | null>(null);

    const tabs = [
        { id: 'bmi', label: 'BMI Calculator' },
        { id: 'bmr', label: 'BMR Calculator' },
        { id: 'bodyfat', label: 'Body Fat Calculator' },
    ];

    useEffect(() => {
        const type = searchParams.get('type');
        if (type && ['bmi', 'bmr', 'bodyfat'].includes(type)) {
            setActiveTab(type);
        }
    }, [searchParams]);

    const calculateBMI = () => {
        if (!height || !weight) return;
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        const bmi = parseFloat((w / (h * h)).toFixed(1));

        let status = '';
        let color = '';
        if (bmi < 18.5) { status = 'Underweight'; color = 'text-blue-500'; }
        else if (bmi < 25) { status = 'Normal'; color = 'text-green-500'; }
        else if (bmi < 30) { status = 'Overweight'; color = 'text-orange-500'; }
        else { status = 'Obese'; color = 'text-red-500'; }

        setBmiResult({ bmi, status, color });
    };

    const calculateBMR = () => {
        if (!height || !weight || !age) return;
        const h = parseFloat(height);
        const w = parseFloat(weight);
        const a = parseFloat(age);

        let bmr = 0;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
        } else {
            bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
        }

        const activities = {
            "Sedentary (little or no exercise)": Math.round(bmr * 1.2),
            "Lightly active (exercise 1-3 days/week)": Math.round(bmr * 1.375),
            "Moderately active (exercise 3-5 days/week)": Math.round(bmr * 1.55),
            "Very active (exercise 6-7 days/week)": Math.round(bmr * 1.725),
            "Extra active (hard exercise & physical job)": Math.round(bmr * 1.9)
        };

        setBmrResult({ bmr: Math.round(bmr), activityLevels: activities });
    };

    const calculateBodyFat = () => {
        if (!waist || !neck || !height) return;
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const h = parseFloat(height);

        let fat = 0;
        if (gender === 'male') {
            fat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
        } else {
            if (!hip) return;
            const hi = parseFloat(hip);
            fat = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
        }
        setBodyFatResult(parseFloat(fat.toFixed(1)));
    };

    const reset = () => {
        setHeight(''); setWeight(''); setAge(''); setNeck(''); setWaist(''); setHip('');
        setBmiResult(null); setBmrResult(null); setBodyFatResult(null);
    };

    return (
        <section className="py-20 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                {/* Heading Section - Matches ExploreProduct */}
                <div className="text-center mb-12 mt-10 2xl:mt-20">
                    <h2 className="text-[3.5rem] font-bold text-gray-500 hover:text-[#ef662a] leading-tight mb-4 transition-colors">
                        Empower Your Health With <br /> Our Professional Tools
                    </h2>
                    <p className="max-w-7xl mx-auto text-gray-500 text-lg leading-relaxed">
                        At Rbiomeds, we believe that understanding your metrics is the first step toward lasting wellness.
                        Our calculators are designed with precision and clinical accuracy to provide you with insights into
                        your body's composition, metabolism, and health status.
                    </p>
                </div>

                {/* Tab Navigation - Matches ExploreProduct */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-gray-100 rounded-full p-1 border border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => { setActiveTab(tab.id); reset(); }}
                                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white text-[#ef662a] shadow-md border border-[#ef662a]/10'
                                    : 'text-gray-600 hover:bg-white/50 hover:text-[#ef662a]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-[3.5rem] p-8 md:p-12 border border-gray-100 shadow-sm transition-all duration-500">

                        {/* Form Title & Reset */}
                        <div className="mb-10 flex justify-between items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-[#ef662a] uppercase leading-tight">
                                    {tabs.find(t => t.id === activeTab)?.label}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">Please enter your accurate measurements below.</p>
                            </div>
                            <button onClick={reset} className="p-3 text-gray-400 hover:text-[#ef662a] transition-all rounded-full bg-white shadow-sm">
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Gender</label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setGender('male')}
                                        className={`flex-1 py-4 rounded-full font-bold transition-all border-2 ${gender === 'male' ? 'bg-[#ef662a] text-white border-[#ef662a] shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-[#ef662a]/30'}`}
                                    >Male</button>
                                    <button
                                        onClick={() => setGender('female')}
                                        className={`flex-1 py-4 rounded-full font-bold transition-all border-2 ${gender === 'female' ? 'bg-[#ef662a] text-white border-[#ef662a] shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-[#ef662a]/30'}`}
                                    >Female</button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Age</label>
                                <input
                                    type="number"
                                    placeholder="Years"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Height (cm)</label>
                                <input
                                    type="number"
                                    placeholder="175"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Weight (kg)</label>
                                <input
                                    type="number"
                                    placeholder="70"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            {activeTab === 'bodyfat' && (
                                <>
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Neck (cm)</label>
                                        <input
                                            type="number"
                                            value={neck}
                                            onChange={(e) => setNeck(e.target.value)}
                                            className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Waist (cm)</label>
                                        <input
                                            type="number"
                                            value={waist}
                                            onChange={(e) => setWaist(e.target.value)}
                                            className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                        />
                                    </div>
                                    {gender === 'female' && (
                                        <div className="space-y-4">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Hip (cm)</label>
                                            <input
                                                type="number"
                                                value={hip}
                                                onChange={(e) => setHip(e.target.value)}
                                                className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ef662a] transition-all font-bold outline-none shadow-sm"
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <button
                            onClick={activeTab === 'bmi' ? calculateBMI : activeTab === 'bmr' ? calculateBMR : calculateBodyFat}
                            className="w-full py-5 bg-[#ef662a] text-white font-bold uppercase text-lg rounded-full shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Calculate Your Results
                        </button>

                        {/* Result Section */}
                        <div className="mt-12">
                            {bmiResult && activeTab === 'bmi' && (
                                <div className="bg-white border-2 border-blue-50 rounded-[2.5rem] p-10 shadow-sm animate-in fade-in slide-in-from-bottom-5">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div>
                                            <p className="text-[#ef662a] text-xs font-bold uppercase tracking-widest mb-1">Calculation Successful</p>
                                            <h4 className="text-6xl font-black text-[#1e293b] tracking-tighter">
                                                {bmiResult.bmi} <span className="text-xl font-medium text-gray-400">BMI</span>
                                            </h4>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <p className={`text-2xl font-bold uppercase ${bmiResult.color}`}>
                                                {bmiResult.status}
                                            </p>
                                            <p className="text-gray-400 text-sm">Target Healthy Range: 18.5 - 24.9</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {bmrResult && activeTab === 'bmr' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                                    <div className="bg-white border-2 border-[#ef662a]/10 rounded-[2.5rem] p-8 text-center shadow-sm">
                                        <p className="text-[#ef662a] text-xs font-bold uppercase tracking-widest mb-1">Basal Metabolic Rate</p>
                                        <h4 className="text-5xl font-black text-[#1e293b] tracking-tighter">
                                            {bmrResult.bmr} <span className="text-xl font-medium text-gray-400">kcal/day</span>
                                        </h4>
                                    </div>
                                    <div className="bg-gray-50/50 rounded-[2.5rem] p-6 border border-gray-100">
                                        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-6">Activity Level Breakdown</p>
                                        <div className="space-y-3">
                                            {Object.entries(bmrResult.activityLevels).map(([level, val]) => (
                                                <div key={level} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                                                    <span className="text-sm font-bold text-gray-700">{level}</span>
                                                    <span className="font-black text-[#ef662a]">{val} kcal</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {bodyFatResult !== null && activeTab === 'bodyfat' && (
                                <div className="bg-white border-2 border-green-50 rounded-[2.5rem] p-10 text-center shadow-sm animate-in fade-in slide-in-from-bottom-5">
                                    <p className="text-[#ef662a] text-xs font-bold uppercase tracking-widest mb-1">Analysis Result</p>
                                    <h4 className="text-7xl font-black text-[#1e293b] tracking-tighter">
                                        {bodyFatResult}%
                                    </h4>
                                    <p className="mt-4 text-green-600 font-bold uppercase text-xs tracking-widest">Calculated Healthy Composition</p>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

const CalculatorPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Calculators...</div>}>
            <CalculatorContent />
        </Suspense>
    );
};

export default CalculatorPage;
