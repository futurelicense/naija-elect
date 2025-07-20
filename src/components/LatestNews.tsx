import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Newspaper, 
  Clock, 
  Flame, 
  TrendingUp, 
  Globe2, 
  Users, 
  Eye, 
  MessageSquare,
  Share2,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Zap,
  Calendar,
  Bell
} from "lucide-react";

const LatestNews = () => {
  const breakingNews = {
    title: "🚨 EXCLUSIVE: Major Coalition Forms Ahead of 2027 Elections",
    subtitle: "Three opposition parties announce historic merger in dramatic turn of events",
    timestamp: "3 minutes ago",
    viewers: "47,832"
  };

  const featuredStories = [
    {
      title: "INEC Announces Revolutionary Digital Voting System for 2027",
      excerpt: "Exclusive investigation reveals comprehensive plans for blockchain-based voting technology that could transform Nigerian elections forever.",
      category: "BREAKING",
      readTime: "12 min read",
      views: "156.2K",
      comments: 1247,
      reactions: { hot: 2341, not: 234 },
      isBreaking: true,
      priority: "featured",
      imageUrl: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Presidential Race Heats Up: New Frontrunner Emerges", 
      excerpt: "Latest polling data shows dramatic shift in voter preferences as unknown candidate surges in popularity across all six geopolitical zones.",
      category: "POLITICS",
      readTime: "8 min read",
      views: "89.4K", 
      comments: 892,
      reactions: { hot: 1523, not: 187 },
      isTrending: true,
      priority: "featured",
      imageUrl: "/placeholder.svg?height=300&width=400"
    }
  ];

  const regularNews = [
    {
      title: "Security Agencies Deploy Advanced Technology for Election Protection",
      excerpt: "Nigerian military and police unveil comprehensive security architecture featuring AI-powered surveillance and rapid response teams.",
      category: "SECURITY",
      readTime: "6 min read",
      views: "42.8K",
      comments: 234,
      reactions: { hot: 876, not: 45 },
      imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Youth Movement Gains Momentum: 'Not Too Young to Lead' Campaign",
      excerpt: "Massive youth registration drive sees unprecedented numbers as young Nigerians demand greater political representation.",
      category: "YOUTH",
      readTime: "5 min read",
      views: "67.1K",
      comments: 567,
      reactions: { hot: 1234, not: 89 },
      imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "International Community Pledges Election Support",
      excerpt: "EU, AU, and Commonwealth observers confirm largest-ever mission to monitor Nigeria's democratic process.",
      category: "INTERNATIONAL",
      readTime: "4 min read",
      views: "29.3K",
      comments: 156,
      reactions: { hot: 456, not: 23 },
      imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Economic Manifestos: Comparing Party Policies on Inflation",
      excerpt: "Deep dive analysis of how each major party plans to tackle Nigeria's economic challenges and rising cost of living.",
      category: "ECONOMY",
      readTime: "10 min read",
      views: "94.7K",
      comments: 1023,
      reactions: { hot: 1876, not: 234 },
      imageUrl: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Breaking News Banner - Daily Mail Style */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-4 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="destructive" className="bg-yellow-500 text-black animate-pulse">
                <Flame className="h-3 w-3 mr-1" />
                LIVE
              </Badge>
              <div>
                <h3 className="text-xl font-bold">{breakingNews.title}</h3>
                <p className="text-sm opacity-90">{breakingNews.subtitle}</p>
              </div>
            </div>
            <div className="text-right text-sm">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {breakingNews.viewers} watching
              </div>
              <div className="opacity-75">{breakingNews.timestamp}</div>
            </div>
          </div>
        </div>

        {/* NYT-Style Header */}
        <div className="border-b-4 border-foreground mb-12 pb-8">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              The Nigeria Election - News Division
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Breaking News & Analysis
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Live Updates
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date().toLocaleDateString()}
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Globe2 className="h-4 w-4" />
                Nigeria Coverage
              </div>
            </div>
          </div>
        </div>

        {/* Featured Stories - Large Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredStories.map((story, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-64 bg-gradient-accent bg-cover bg-center" 
                     style={{ backgroundImage: `url(${story.imageUrl})` }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                </div>
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {story.isBreaking && (
                    <Badge variant="destructive" className="bg-red-600 animate-pulse">
                      <Flame className="h-3 w-3 mr-1" />
                      BREAKING
                    </Badge>
                  )}
                  {story.isTrending && (
                    <Badge variant="secondary" className="bg-blue-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      TRENDING
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-white/90 text-black font-bold">
                    {story.category}
                  </Badge>
                </div>

                {/* Bottom overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {story.title}
                  </h2>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {story.excerpt}
                </p>
                
                {/* Stats Row */}
                <div className="flex items-center justify-between text-sm border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {story.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {story.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {story.comments}
                    </div>
                  </div>
                  
                  {/* Hot/Not Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1 hover:bg-green-500 hover:text-white">
                      <ThumbsUp className="h-3 w-3" />
                      {story.reactions.hot}
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 hover:bg-red-500 hover:text-white">
                      <ThumbsDown className="h-3 w-3" />
                      {story.reactions.not}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-8">
          <Separator className="flex-1" />
          <div className="flex items-center gap-2 px-4">
            <Newspaper className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">More Headlines</span>
          </div>
          <Separator className="flex-1" />
        </div>

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regularNews.map((article, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="h-32 bg-gradient-accent bg-cover bg-center rounded-t-lg" 
                     style={{ backgroundImage: `url(${article.imageUrl})` }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-t-lg" />
                </div>
                
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-white/90 text-black text-xs font-bold">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {article.comments}
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="h-6 px-2 text-xs hover:bg-green-500 hover:text-white">
                      <ThumbsUp className="h-2 w-2 mr-1" />
                      {article.reactions.hot}
                    </Button>
                    <Button variant="outline" size="sm" className="h-6 px-2 text-xs hover:bg-red-500 hover:text-white">
                      <ThumbsDown className="h-2 w-2 mr-1" />
                      {article.reactions.not}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats & CTA */}
        <div className="text-center space-y-6">
          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2.4M+</div>
              <div className="text-xs text-muted-foreground">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">45K+</div>
              <div className="text-xs text-muted-foreground">Daily Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-xs text-muted-foreground">Live Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Breaking</div>
              <div className="text-xs text-muted-foreground">News Alerts</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              <Newspaper className="h-5 w-5" />
              Read All Stories
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Bell className="h-5 w-5" />
              Subscribe to Alerts
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            Stay ahead with Nigeria's most trusted election news source. 
            Join millions of readers getting real-time updates and expert analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;