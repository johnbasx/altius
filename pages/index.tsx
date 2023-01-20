import Image from 'next/image';
import { Inter } from '@next/font/google';
import AboutSection from '@components/AboutSection';
import HeroSection from '@components/HeroSection';
import NavigationSection from '@components/NavigationSection';
import TrainersSection from '@components/TrainersSection';
import ContactUsSection from '@components/ContactUsSection';
import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import { Navbar } from '@components/Navbar';
import VideoBackground from '@components/VideoBackground';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      {/* <!-- Hero --> */}
      <HeroSection />

      {/* <!-- About Section --> */}
      <AboutSection />
      {/* <Gallery /> */}

      {/* <!-- Trainers Section --> */}
      <TrainersSection />

      {/* <!-- Contact Header Section --> */}
      <ContactUsSection />

      {/* <!-- Contact Form --> */}
    </div>
  );
}
