import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProfileSections } from "@/components/system/ProfileSections";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProfileSections />
      </main>
      <Footer />
    </>
  );
}
