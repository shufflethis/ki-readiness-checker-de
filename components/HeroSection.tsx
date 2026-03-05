"use client";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/site.config";
import GeoArticle from "./GeoArticle";

interface HeroSectionProps {
    onStartCheck: () => void;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

export default function HeroSection({ onStartCheck }: HeroSectionProps) {
    const levels = siteConfig.scoring.maturityLevels;
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <div>
            {/* HERO */}
            <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-dusty-green/30 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-brand-light-mauve/20 blur-3xl" />
                <div className="noise-overlay" />

                <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
                    {/* Badge */}
                    <motion.div
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-dusty-green/30 px-4 py-1.5 text-sm font-medium text-brand-black">
                            ✨ Kostenlos · 5 Minuten · Sofort-Ergebnis
                        </span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        className="mt-6 font-headline text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-6xl"
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        custom={1}
                        variants={fadeUp}
                    >
                        KI-Readiness Check
                        <br />
                        <span className="text-brand-iris">für {siteConfig.nicheLabel}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl"
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        custom={2}
                        variants={fadeUp}
                    >
                        {siteConfig.tagline}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        custom={3}
                        variants={fadeUp}
                    >
                        <button
                            onClick={onStartCheck}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                        >
                            {siteConfig.cta.primary}
                            <span className="text-xl">→</span>
                        </button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.p
                        className="mt-4 text-sm text-gray-500"
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        custom={4}
                        variants={fadeUp}
                    >
                        ⭐ Bereits 500+ Unternehmen analysiert
                    </motion.p>
                </div>
            </section>

            {/* MATURITY LEVEL PREVIEW */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Die 5 KI-Reifegradstufen
                </motion.h2>
                <div className="grid gap-3 sm:grid-cols-5">
                    {levels.map((level, i) => (
                        <motion.div
                            key={level.level}
                            className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <span className="text-3xl">{level.emoji}</span>
                            <p className="mt-2 text-sm font-semibold text-brand-black">
                                {level.label}
                            </p>
                            <p className="mt-1 text-xs text-gray-400">Level {level.level}</p>
                            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-greige/40">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${level.level * 20}%`,
                                        background: `linear-gradient(90deg, #bbd8a7, #a387c1)`,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <motion.h2
                    className="mb-8 text-center font-headline text-2xl font-bold text-brand-black sm:text-3xl"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Warum ein KI-Readiness Check?
                </motion.h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {[
                        {
                            icon: "📊",
                            title: "KI-Reifegrad erfahren",
                            text: "Erhalten Sie eine objektive Einschätzung, wo Ihr Unternehmen beim Einsatz von Künstlicher Intelligenz steht — wissenschaftlich fundiert und branchenspezifisch.",
                        },
                        {
                            icon: "🔍",
                            title: "Potenziale identifizieren",
                            text: "Finden Sie heraus, in welchen Unternehmensbereichen KI den größten Hebel bietet und wo Sie sofort starten können.",
                        },
                        {
                            icon: "💰",
                            title: "Einsparpotenzial berechnen",
                            text: "Unsere Analyse schätzt das konkrete Einsparpotenzial durch Automatisierung — in Stunden und Euro.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="text-3xl">{item.icon}</span>
                            <h3 className="mt-3 font-headline text-lg font-semibold text-brand-black">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* GEO ARTICLE & FAQ */}
            <GeoArticle onStartCheck={onStartCheck} />
        </div>
    );
}
