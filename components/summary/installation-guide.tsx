"use client";

import { useState } from 'react';
import { Cpu, Wallpaper as Gpu, MemoryStick as Memory, ChevronRight, Terminal, Download, Bot, ListOrdered } from 'lucide-react';
import { Card } from '../ui/card';
import { Tabs, TabsList } from '../ui/tabs';
import { TabsTrigger } from '@radix-ui/react-tabs';
import { motion } from "framer-motion";

interface HardwareCard {
    title: string;
    icon: React.ReactNode;
    description: string;
    scripts: {
        name: string;
        content: string;
    }[];
}

type CustomTabsTriggerProps = {
    value: string;
    isActive: boolean | undefined;
    children: React.ReactNode;
};


function CustomTabsTrigger({ value, isActive, children }: CustomTabsTriggerProps) {
    return (
        <TabsTrigger
            value={value}
            className="relative flex items-center gap-2 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary data-[state=active]:bg-muted data-[state=active]:text-primary"
        >
            {children}
            {isActive && (
                <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full z-1"
                    initial={false}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                </motion.div>
            )}
        </TabsTrigger>
    );
}

function InstallationGuide() {
    const [selectedHardware, setSelectedHardware] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("tab-1");

    const hardwareCards: Record<string, HardwareCard> = {
        cpu: {
            title: 'CPU Installation',
            icon: <Cpu className="w-8 h-8" />,
            description: 'Learn how to safely install or upgrade your processor',
            scripts: [
                {
                    name: 'cpu_performance.sh',
                    content: '#!/bin/bash\n\n# CPU Performance Optimization Script\necho "Optimizing CPU settings..."'
                },
                {
                    name: 'cpu_monitor.sh',
                    content: '#!/bin/bash\n\n# CPU Monitoring Script\necho "Starting CPU monitoring..."'
                }
            ]
        },
        gpu: {
            title: 'GPU Setup',
            icon: <Gpu className="w-8 h-8" />,
            description: 'Guide for graphics card installation and driver setup',
            scripts: [
                {
                    name: 'gpu_overclock.sh',
                    content: '#!/bin/bash\n\n# GPU Overclocking Script\necho "Configuring GPU settings..."'
                },
                {
                    name: 'gpu_benchmark.sh',
                    content: '#!/bin/bash\n\n# GPU Benchmark Script\necho "Running GPU benchmarks..."'
                }
            ]
        },
        ram: {
            title: 'RAM Configuration',
            icon: <Memory className="w-8 h-8" />,
            description: 'Steps to install and optimize your memory modules',
            scripts: [
                {
                    name: 'ram_optimize.sh',
                    content: '#!/bin/bash\n\n# RAM Optimization Script\necho "Optimizing RAM configuration..."'
                },
                {
                    name: 'ram_test.sh',
                    content: '#!/bin/bash\n\n# RAM Testing Script\necho "Testing RAM stability..."'
                }
            ]
        }
    };

    const downloadScript = (name: string, content: string) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Hardware Installation Guide
                </h1>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {Object.entries(hardwareCards).map(([key, card]) => (
                        <Card
                            key={key}
                            className={`
                relative overflow-hidden rounded-xl p-6 cursor-pointer
                transition-all duration-300 ease-in-out bg-background
                ${selectedHardware === key
                                    ? 'bg-secondary shadow-lg scale-105'
                                    : 'hover:shadow-lg hover:scale-102'
                                }
              `}
                            onClick={() => setSelectedHardware(key)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-gray-500 dark:text-gray-300">
                                    {card.icon}
                                </div>
                                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${selectedHardware === key && 'rotate-90 '
                                    }`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-sm">
                                {card.description}
                            </p>
                        </Card>
                    ))}
                </div>

                {selectedHardware && (
                    <Card className="p-8 relative mt-20">
                        <Tabs>
                        <div className='absolute -top-7 left-0 right-0 flex justify-center'>
                        <TabsList className="gap-3 bg-white dark:bg-black border border-border px-2 py-6 rounded-full shadow-lg mb-3">
                            <CustomTabsTrigger value="tab-1" isActive={activeTab === "tab-1"}>
                                <Bot className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                                Automatically
                            </CustomTabsTrigger>
                            <CustomTabsTrigger value="tab-2" isActive={activeTab === "tab-2"}>
                                <ListOrdered className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                                Manual
                            </CustomTabsTrigger>
                        </TabsList>
                        </div>
                        </Tabs>
                        <h2 className="text-2xl font-bold mb-2">{hardwareCards[selectedHardware].title}</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Installation Steps</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Preparation</h4>
                                        <p className="text-gray-600">Ensure your workspace is clean and static-free. Gather all necessary tools.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Power Down</h4>
                                        <p className="text-gray-600">Completely shut down your system and disconnect all power sources.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Installation</h4>
                                        <p className="text-gray-600">Follow the manufacturer's guidelines for proper installation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Configuration Scripts</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {hardwareCards[selectedHardware].scripts.map((script) => (
                                    <div
                                        key={script.name}
                                        className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Terminal className="w-5 h-5 text-blue-500" />
                                            <span className="font-medium">{script.name}</span>
                                        </div>
                                        <button
                                            onClick={() => downloadScript(script.name, script.content)}
                                            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                                        >
                                            <Download className="w-5 h-5" />
                                            <span>Download</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}

export { InstallationGuide };