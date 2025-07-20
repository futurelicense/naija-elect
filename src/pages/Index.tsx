import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import TrendingVideos from "@/components/TrendingVideos";
import QuickPoll from "@/components/QuickPoll";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LatestNews />
      <TrendingVideos />
      <QuickPoll />
      <Footer />
    </div>
  );
};

export default Index;
