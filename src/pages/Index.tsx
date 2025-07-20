import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import TrendingVideos from "@/components/TrendingVideos";
import QuickPoll from "@/components/QuickPoll";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Globe2, 
  TrendingUp, 
  Flame, 
  Users,
  Eye,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  MapPin,
  Zap,
  Bell,
  Share2
} from "lucide-react";

const Index = () => {
  const topStories = [
    {
      id: 1,
      title: "BREAKING: Presidential Candidates Release Final Campaign Strategies",
      excerpt: "With 147 days to the election, major parties unveil comprehensive roadmaps targeting key swing states and demographics.",
      category: "POLITICS",
      isBreaking: true,
      timestamp: "15 minutes ago",
      views: "89.4K",
      comments: 234,
      reactions: { hot: 1456, not: 89 },
      location: "Abuja"
    },
    {
      id: 2, 
      title: "EXCLUSIVE: Secret Meetings Between Opposition Parties Exposed",
      excerpt: "Leaked documents reveal ongoing coalition talks that could reshape the 2027 electoral landscape.",
      category: "EXCLUSIVE",
      isExclusive: true,
      timestamp: "32 minutes ago", 
      views: "156.7K",
      comments: 892,
      reactions: { hot: 2341, not: 187 },
      location: "Lagos"
    },
    {
      id: 3,
      title: "INEC Chairman Addresses Concerns Over Election Security",
      excerpt: "Comprehensive briefing outlines enhanced security measures and technology upgrades for 2027 polls.",
      category: "SECURITY",
      timestamp: "1 hour ago",
      views: "67.2K", 
      comments: 345,
      reactions: { hot: 987, not: 123 },
      location: "Abuja"
    }
  ];

  const sidebarNews = [
    {
      title: "Youth Voter Registration Hits Record High",
      category: "YOUTH",
      timestamp: "2 hours ago",
      views: "34.5K"
    },
    {
      title: "Economic Debate: Parties Clash Over Inflation Solutions", 
      category: "ECONOMY",
      timestamp: "3 hours ago",
      views: "45.8K"
    },
    {
      title: "International Observers Arrive for Election Monitoring",
      category: "INTERNATIONAL", 
      timestamp: "4 hours ago",
      views: "28.1K"
    },
    {
      title: "Technology Firms Partner with INEC for Digital Solutions",
      category: "TECHNOLOGY",
      timestamp: "5 hours ago", 
      views: "19.7K"
    }
  ];

  const liveUpdates = [
    { time: "14:32", update: "PDP holds rally in Kano, draws massive crowd" },
    { time: "14:15", update: "APC candidate addresses Lagos business forum" },
    { time: "13:58", update: "Labour Party announces new youth initiative" },
    { time: "13:45", update: "INEC officials meet with security agencies" },
    { time: "13:30", update: "Civil society groups demand transparency measures" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breaking News Ticker */}
      <div className="bg-red-900 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Badge variant="destructive" className="bg-yellow-500 text-black animate-pulse shrink-0">
              <Flame className="h-3 w-3 mr-1" />
              BREAKING
            </Badge>
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-sm">
                🚨 MAJOR DEVELOPMENT: Coalition talks intensify as opposition parties seek unified front • 
                INEC announces additional voter registration centers • 
                Security agencies deploy new technology for election monitoring • 
                International observers confirm largest mission to Nigeria •
              </span>
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
      
      {/* Main News Layout */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {/* News Header */}
          <div className="border-b-2 border-foreground mb-8 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Latest Headlines</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1">
                    <Globe2 className="h-4 w-4" />
                    Live from Nigeria
                  </div>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Top Stories */}
              <div className="space-y-6">
                {topStories.map((story, index) => (
                  <Card key={story.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {/* Story Image */}
                        <div className="w-32 h-24 bg-gradient-accent rounded-lg shrink-0 flex items-center justify-center">
                          <Eye className="h-8 w-8 text-muted-foreground" />
                        </div>
                        
                        {/* Story Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            {story.isBreaking && (
                              <Badge variant="destructive" className="animate-pulse">
                                <Flame className="h-3 w-3 mr-1" />
                                BREAKING
                              </Badge>
                            )}
                            {story.isExclusive && (
                              <Badge variant="secondary" className="bg-purple-600">
                                <Zap className="h-3 w-3 mr-1" />
                                EXCLUSIVE
                              </Badge>
                            )}
                            <Badge variant="outline" className="font-bold">
                              {story.category}
                            </Badge>
                          </div>
                          
                          <h2 className={`font-bold leading-tight group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                            {story.title}
                          </h2>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {story.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {story.timestamp}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {story.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {story.views}
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                {story.comments}
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="gap-1 hover:bg-green-500 hover:text-white">
                                <ThumbsUp className="h-3 w-3" />
                                {story.reactions.hot}
                              </Button>
                              <Button variant="outline" size="sm" className="gap-1 hover:bg-red-500 hover:text-white">
                                <ThumbsDown className="h-3 w-3" />
                                {story.reactions.not}
                              </Button>
                              <Button variant="outline" size="sm" className="gap-1">
                                <Share2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Enhanced Latest News Component */}
              <LatestNews />
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Live Updates */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <h3 className="font-bold">Live Updates</h3>
                  </div>
                  <div className="space-y-3">
                    {liveUpdates.map((update, index) => (
                      <div key={index} className="text-sm border-l-2 border-primary/20 pl-3">
                        <div className="text-xs text-muted-foreground mb-1">{update.time}</div>
                        <div>{update.update}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* More Headlines */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">More Headlines</h3>
                  <div className="space-y-4">
                    {sidebarNews.map((item, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                        </div>
                        <h4 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          {item.views}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h3 className="font-bold">Trending Topics</h3>
                  </div>
                  <div className="space-y-2">
                    {["#Nigeria2027", "#ElectionSecurity", "#YouthVote", "#DigitalVoting", "#CoalitionTalks"].map((tag, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2 cursor-pointer hover:bg-primary hover:text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Election Countdown</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">147</div>
                      <div className="text-sm text-muted-foreground">Days to Election</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold">84.2M</div>
                        <div className="text-xs text-muted-foreground">Registered Voters</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">176K</div>
                        <div className="text-xs text-muted-foreground">Polling Units</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <TrendingVideos />
      <QuickPoll />
      <Footer />
    </div>
  );
};

export default Index;
