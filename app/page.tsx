import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Offer from '@/components/Offer';
import Signup from '@/components/Signup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Offer />
      <Signup />
      <Footer />
    </main>
  );
}
