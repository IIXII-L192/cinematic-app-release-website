import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Specs } from "./components/Specs";
import { DownloadCTA } from "./components/DownloadCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Specs />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
