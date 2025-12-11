"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: "AWS", level: 90, color: "bg-orange-500" },
            { name: "Oracle OCI", level: 75, color: "bg-red-500" },
            { name: "Terraform", level: 85, color: "bg-purple-500" },
            { name: "Linux", level: 92, color: "bg-yellow-500" },
        ]
    },
    {
        title: "DevOps & Automation",
        skills: [
            { name: "Docker/K8s", level: 88, color: "bg-blue-500" },
            { name: "Jenkins", level: 85, color: "bg-gray-400" },
            { name: "CI/CD", level: 90, color: "bg-green-500" },
            { name: "Ansible", level: 80, color: "bg-red-400" },
        ]
    },
    {
        title: "Coding & Databases",
        skills: [
            { name: "Python", level: 90, color: "bg-blue-400" },
            { name: "Bash/Shell", level: 85, color: "bg-gray-500" },
            { name: "SQL (Postgres)", level: 80, color: "bg-blue-600" },
            { name: "Git", level: 95, color: "bg-orange-600" },
        ]
    },
    {
        title: "Security",
        skills: [
            { name: "IAM/Okta", level: 85, color: "bg-indigo-500" },
            { name: "Network Security", level: 80, color: "bg-red-600" },
            { name: "Compliance (HIPAA)", level: 75, color: "bg-emerald-500" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-cyber-black/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-cyber text-3xl md:text-4xl font-bold text-white mb-4">
                        SKILL <span className="text-neon-purple">TREE</span>
                    </h2>
                    <p className="text-gray-400 font-mono">Current Build & Stats</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-6 rounded-xl border border-white/5"
                        >
                            <h3 className="font-cyber text-xl text-white mb-6 border-b border-white/10 pb-2">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-2 font-mono">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-neon-blue">Lvl {skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                className={`h-full ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
