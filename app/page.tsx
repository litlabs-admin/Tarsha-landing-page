import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { ProblemVsSolution } from "@/components/sections/ProblemVsSolution";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProblemVsSolution />
        <LiveDemo />
        <FAQ />
        <About />
      </main>
      <Footer />
    </>
  );
}
