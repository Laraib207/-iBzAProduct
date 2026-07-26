import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandStory from '../components/BrandStory';
import TechnologySection from '../components/TechnologySection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <FeaturedProducts />
      <BrandStory />
      <TechnologySection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
