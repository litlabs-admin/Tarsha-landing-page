"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { brand } from "@/lib/assets";
import { ArrowRight, Mic, Pause, Play, Search, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Voice {
  id: string;
  name: string;
  gender: "Female" | "Male";
  language: string;
  accent: string;
  personality: string;
  personalityTag: "Professional" | "Friendly" | "Calm" | "Confident" | "Warm" | "Energetic" | "Empathetic" | "Upbeat" | "Neutral";
  sampleText: string;
  waveHeights: number[];
}

const PERSONALITY_COLORS: Record<string, { bg: string; text: string }> = {
  Professional: { bg: "#dbeafe", text: "#1e40af" },
  Friendly:     { bg: "#d1fae5", text: "#065f46" },
  Calm:         { bg: "#ede9fe", text: "#4c1d95" },
  Confident:    { bg: "#fef3c7", text: "#92400e" },
  Warm:         { bg: "#fce7f3", text: "#9d174d" },
  Energetic:    { bg: "#fee2e2", text: "#991b1b" },
  Empathetic:   { bg: "#e0f2fe", text: "#075985" },
  Upbeat:       { bg: "#fef9c3", text: "#854d0e" },
  Neutral:      { bg: "#f3f4f6", text: "#374151" },
};

const voices: Voice[] = [
  {
    id: "aria",
    name: "Aria",
    gender: "Female",
    language: "English",
    accent: "American",
    personality: "Perfect for professional service businesses",
    personalityTag: "Professional",
    sampleText: "Thank you for calling. This is Aria with Tarsha AI, I'm here to help. How can I assist you today?",
    waveHeights: [3,5,8,12,7,14,9,16,11,8,14,6,10,13,7,5,9,12,8,4],
  },
  {
    id: "james",
    name: "James",
    gender: "Male",
    language: "English",
    accent: "American",
    personality: "Approachable and trustworthy",
    personalityTag: "Warm",
    sampleText: "Hey there! Thanks for calling. I'm James, your AI assistant. What can I help you with today?",
    waveHeights: [4,7,11,8,13,6,15,10,7,12,9,14,5,8,11,6,9,13,7,4],
  },
  {
    id: "sofia",
    name: "Sofia",
    gender: "Female",
    language: "Spanish / English",
    accent: "Latin American",
    personality: "Bilingual, English & Spanish seamlessly",
    personalityTag: "Friendly",
    sampleText: "Thank you for calling! This is Sofia. I speak both English and Spanish, how can I help you today?",
    waveHeights: [5,9,13,7,15,10,8,14,6,11,9,13,7,5,12,8,10,14,6,4],
  },
  {
    id: "marcus",
    name: "Marcus",
    gender: "Male",
    language: "English",
    accent: "American",
    personality: "Commanding, authoritative, and clear",
    personalityTag: "Confident",
    sampleText: "You've reached Tarsha AI. I'm Marcus, I can take a message or help answer your questions right now.",
    waveHeights: [6,10,14,9,12,7,15,11,8,13,6,10,14,8,5,11,9,13,7,5],
  },
  {
    id: "luna",
    name: "Luna",
    gender: "Female",
    language: "English",
    accent: "British",
    personality: "Soothing, measured, and precise",
    personalityTag: "Calm",
    sampleText: "Good afternoon. You've reached our answering service. This is Luna, how may I assist you?",
    waveHeights: [2,4,6,9,5,11,7,13,8,6,10,4,7,10,5,3,7,9,6,3],
  },
  {
    id: "diego",
    name: "Diego",
    gender: "Male",
    language: "Spanish / English",
    accent: "Mexican",
    personality: "High-energy bilingual, full Spanish fluency",
    personalityTag: "Energetic",
    sampleText: "Hello! Thanks for calling. I'm Diego and I'm fully bilingual, English or Spanish, whatever works best for you!",
    waveHeights: [5,9,14,10,16,8,13,11,7,15,9,12,6,10,14,8,11,13,7,5],
  },
  {
    id: "emma",
    name: "Emma",
    gender: "Female",
    language: "English",
    accent: "Australian",
    personality: "Caring, warm, and genuinely helpful",
    personalityTag: "Empathetic",
    sampleText: "Hi! Thanks so much for calling. I'm Emma, I want to make sure I get you exactly what you need today.",
    waveHeights: [3,6,9,7,12,8,14,10,7,11,5,9,13,7,4,8,11,9,6,3],
  },
  {
    id: "alex",
    name: "Alex",
    gender: "Female",
    language: "English",
    accent: "American",
    personality: "Clean, versatile, and universally liked",
    personalityTag: "Neutral",
    sampleText: "Thank you for calling. This is Alex, I can take a message or answer any questions you have right now.",
    waveHeights: [3,5,8,6,10,7,12,8,6,9,5,8,11,6,4,7,9,7,5,3],
  },
  {
    id: "valentina",
    name: "Valentina",
    gender: "Female",
    language: "Spanish",
    accent: "Colombian",
    personality: "Warm and personable, native Spanish speaker",
    personalityTag: "Warm",
    sampleText: "¡Hola! Gracias por llamar. Soy Valentina, estoy aquí para ayudarle. ¿En qué le puedo ayudar hoy?",
    waveHeights: [4,8,12,9,14,7,11,13,8,15,9,12,6,10,13,7,9,12,6,4],
  },
  {
    id: "noah",
    name: "Noah",
    gender: "Male",
    language: "English",
    accent: "Canadian",
    personality: "Polished, formal, and highly professional",
    personalityTag: "Professional",
    sampleText: "Good day. Thank you for calling. I'm Noah, I'm here to help assist you or take a detailed message.",
    waveHeights: [4,7,11,8,13,7,14,10,7,12,8,11,5,9,12,7,10,12,7,4],
  },
  {
    id: "jordan",
    name: "Jordan",
    gender: "Male",
    language: "English",
    accent: "American",
    personality: "High energy, great for fast-paced businesses",
    personalityTag: "Upbeat",
    sampleText: "Hey! Thanks for calling, I'm Jordan, your AI assistant. What can I do for you today? I'm ready to help!",
    waveHeights: [6,10,14,11,16,9,14,12,8,15,10,13,7,11,15,9,12,14,8,5],
  },
  {
    id: "claire",
    name: "Claire",
    gender: "Female",
    language: "English",
    accent: "American",
    personality: "Conversational, natural, and easy to talk to",
    personalityTag: "Friendly",
    sampleText: "Hi there! You've reached us. I'm Claire, I can take a message, answer questions, or help you get scheduled.",
    waveHeights: [4,7,10,8,13,7,11,9,6,12,7,10,14,8,5,9,11,8,6,3],
  },
];

const LANGUAGES = ["All", "English", "Spanish / English", "Spanish"];
const GENDERS = ["All", "Female", "Male"];
const PERSONALITIES = ["All", "Professional", "Friendly", "Calm", "Confident", "Warm", "Energetic", "Empathetic", "Upbeat", "Neutral"];

// ─── Waveform ─────────────────────────────────────────────────────────────────

function Waveform({ heights, playing }: { heights: number[]; playing: boolean }) {
  return (
    <div className="flex items-end justify-center gap-[3px]" style={{ height: 36 }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-accent"
          style={{ height: h * 2 }}
          animate={playing ? {
            height: [h * 2, h * 2 * (0.4 + Math.random() * 0.8), h * 2],
            opacity: [0.7, 1, 0.7],
          } : { height: h * 2, opacity: 0.5 }}
          transition={playing ? {
            duration: 0.4 + (i % 5) * 0.08,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03,
          } : { duration: 0.3 }}
        />
      ))}
    </div>
  );
}

// ─── Voice card ───────────────────────────────────────────────────────────────

function VoiceCard({
  voice,
  index,
  playingId,
  onPlay,
}: {
  voice: Voice;
  index: number;
  playingId: string | null;
  onPlay: (id: string | null) => void;
}) {
  const playing = playingId === voice.id;
  const audioSrc = `/assets/voices/${voice.id}.mp3`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const colors = PERSONALITY_COLORS[voice.personalityTag] ?? { bg: "#f3f4f6", text: "#374151" };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
      setProgress(0);
      setCurrentTime("0:00");
    }
  }, [playing]);

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
    setCurrentTime(formatTime(audio.currentTime));
  }, []);

  const handleEnded = useCallback(() => {
    onPlay(null);
    setProgress(0);
    setCurrentTime("0:00");
  }, [onPlay]);

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="none"
      />

      {/* Background glow */}
      <motion.div
        animate={{ opacity: playing ? 0.12 : 0 }}
        className="pointer-events-none absolute inset-0 bg-accent"
        style={{ filter: "blur(40px)" }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-[18px] font-bold text-ink">{voice.name}</h3>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {voice.personalityTag}
              </span>
            </div>
            <p className="mt-0.5 text-[12px] text-ink-muted">{voice.accent} · {voice.language}</p>
          </div>
          <motion.button
            onClick={() => onPlay(playing ? null : voice.id)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all ${
              playing
                ? "bg-accent text-ink shadow-[0_0_20px_rgba(255,208,0,0.4)]"
                : "border border-border bg-surface-muted text-ink hover:bg-accent hover:text-ink hover:border-accent/60"
            }`}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
          </motion.button>
        </div>

        {/* Waveform */}
        <div className="mt-5 flex items-center justify-center rounded-xl border border-border bg-surface-muted/60 py-3">
          <Waveform heights={voice.waveHeights} playing={playing} />
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div
            className="relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-border"
            onClick={handleScrub}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[10px] tabular-nums text-ink-faint">{currentTime}</span>
            <span className="text-[10px] text-ink-faint">{playing ? "Playing demo…" : "Sample audio"}</span>
          </div>
        </div>

        {/* Sample text */}
        <div className="mt-3 rounded-xl border border-border bg-bg px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-faint">Sample greeting</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted italic">
            &ldquo;{voice.sampleText}&rdquo;
          </p>
        </div>

        {/* Personality */}
        <p className="mt-3 text-[12px] text-ink-faint">{voice.personality}</p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onPlay(playing ? null : voice.id)}
          className="mt-4 w-full rounded-xl border border-border bg-surface-muted/60 py-2.5 text-[13px] font-medium text-ink transition-all hover:border-accent/40 hover:bg-accent/10"
        >
          {playing ? "Pause preview" : `Preview ${voice.name}`}
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VoiceLibraryPage() {
  const [activeLanguage, setActiveLanguage] = useState("All");
  const [activeGender, setActiveGender] = useState("All");
  const [activePersonality, setActivePersonality] = useState("All");
  const [search, setSearch] = useState("");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });

  const filtered = voices.filter((v) => {
    if (activeLanguage !== "All" && v.language !== activeLanguage) return false;
    if (activeGender !== "All" && v.gender !== activeGender) return false;
    if (activePersonality !== "All" && v.personalityTag !== activePersonality) return false;
    if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.personality.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-[800px] px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
              Voice Library
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="section-heading font-display font-bold tracking-tighter2 text-ink"
            >
              Find the perfect{" "}
              <span ref={headlineRef} className={`accent-underline${headlineInView ? " is-revealed" : ""}`}>
                voice
              </span>{" "}
              for your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-ink-muted"
            >
              {voices.length} professional AI voices, American, British, Australian, and bilingual Spanish. Every voice is trained for business calls, not chatbots.
            </motion.p>

            {/* Stats pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: "🌎", label: "English & Spanish" },
                { icon: "🎙️", label: "Human-quality audio" },
                { icon: "⚡", label: "Switch voice anytime" },
                { icon: "✦", label: "Free with any plan" },
              ].map((pill) => (
                <span key={pill.label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12px] font-medium text-ink-muted shadow-soft">
                  <span>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-surface shadow-soft">
          <div className="mx-auto max-w-[1240px] px-6 py-4 md:px-10">
            {/* Row 1: search + language + gender */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Search */}
              <div className="relative w-full max-w-[240px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
                <input
                  type="text"
                  placeholder="Search voices..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-bg py-2 pl-9 pr-4 text-[13px] text-ink placeholder:text-ink-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="h-5 w-px bg-border hidden sm:block" />

              {/* Language filter */}
              <div className="flex flex-wrap gap-1">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLanguage(l)}
                    className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-all ${
                      activeLanguage === l
                        ? "bg-ink text-white"
                        : "border border-border bg-surface text-ink-muted hover:text-ink"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div className="h-5 w-px bg-border hidden sm:block" />

              {/* Gender filter */}
              <div className="flex gap-1">
                {GENDERS.map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveGender(g)}
                    className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-all ${
                      activeGender === g
                        ? "bg-ink text-white"
                        : "border border-border bg-surface text-ink-muted hover:text-ink"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 2: personality chips */}
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 pb-1">
              {PERSONALITIES.map((p) => {
                const colors = PERSONALITY_COLORS[p];
                return (
                  <button
                    key={p}
                    onClick={() => setActivePersonality(p)}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium transition-all ${
                      activePersonality === p
                        ? "ring-2 ring-ink/30"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    style={
                      p !== "All"
                        ? { backgroundColor: colors?.bg, color: colors?.text, border: `1px solid ${colors?.bg}` }
                        : { backgroundColor: activePersonality === "All" ? "#18130a" : "#f3f4f6", color: activePersonality === "All" ? "white" : "#374151", border: "1px solid #e5e7eb" }
                    }
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Voice grid */}
        <section className="mx-auto max-w-[1240px] px-6 py-12 md:px-10">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[13px] text-ink-muted">
              Showing <span className="font-semibold text-ink">{filtered.length}</span> of {voices.length} voices
            </p>
            <span className="flex items-center gap-1.5 text-[12px] text-ink-faint">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Click play to preview
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeLanguage}-${activeGender}-${activePersonality}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filtered.map((voice, i) => (
                  <VoiceCard key={voice.id} voice={voice} index={i} playingId={playingId} onPlay={setPlayingId} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <Mic className="mx-auto mb-4 h-10 w-10 text-ink-faint" />
                <p className="text-[15px] text-ink-muted">No voices match your filters.</p>
                <button
                  onClick={() => { setActiveLanguage("All"); setActiveGender("All"); setActivePersonality("All"); setSearch(""); }}
                  className="mt-4 text-[13px] font-semibold text-ink underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Feature highlight */}
        <section className="border-t border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="grid gap-8 md:grid-cols-3"
            >
              {[
                {
                  icon: "🎙️",
                  title: "Switch anytime",
                  body: "Change your AI voice instantly from your dashboard. Your callers will notice the quality, not the switch.",
                },
                {
                  icon: "🌎",
                  title: "True bilingual",
                  body: "Our Spanish voices are native speakers, not translated. Callers immediately feel at home.",
                },
                {
                  icon: "✦",
                  title: "Always improving",
                  body: "We release new voices quarterly, trained on real business call data for natural, professional conversations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                  className="flex flex-col items-start gap-3"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-[22px] shadow-soft">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-[17px] font-bold text-ink">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-muted">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink py-20">
          <div className="mx-auto max-w-[960px] px-6 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="font-display text-[2rem] font-bold tracking-tighter2 text-white md:text-[2.5rem]">
                Give your business a voice it&apos;s{" "}
                <span className="text-accent">proud of</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/60">
                Every Tarsha plan includes full access to the voice library. Try any voice free for 14 days.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={brand.bookDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
