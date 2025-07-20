import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Eye, Clock, TrendingUp } from "lucide-react";

interface VideoCardProps {
  title: string;
  channel: string;
  duration: string;
  views: string;
  thumbnail?: string;
}

const VideoCard = ({ title, channel, duration, views, thumbnail }: VideoCardProps) => (
  <Card className="group cursor-pointer hover:shadow-card transition-all duration-300">
    <CardContent className="p-0">
      <div className="relative">
        <div className="aspect-video bg-gradient-accent rounded-t-lg overflow-hidden">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <Play className="h-8 w-8" />
            </div>
          )}
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur rounded-full p-3">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Duration */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <div className="text-sm text-muted-foreground">
            {channel}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Eye className="h-3 w-3 mr-1" />
            {views} views
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TrendingVideos = () => {
  const videos = [
    {
      title: "Presidential Debate Highlights: Key Moments from Last Night's Discussion",
      channel: "Nigeria Politics Today",
      duration: "15:42",
      views: "2.3M"
    },
    {
      title: "Election Security Measures: What to Expect in 2027",
      channel: "INEC Official",
      duration: "8:33",
      views: "890K"
    },
    {
      title: "Youth Voter Registration Drive: Making Your Voice Count",
      channel: "Vote Nigeria",
      duration: "12:15",
      views: "1.1M"
    },
    {
      title: "Economic Policies Breakdown: What Each Candidate Promises",
      channel: "Nigerian Economy Watch",
      duration: "22:07",
      views: "756K"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-news-trending" />
            <Badge variant="secondary" className="bg-news-trending text-white">
              Most Watched
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Election Videos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the most watched election content from debates, 
            interviews, and analysis from trusted sources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            <Play className="h-5 w-5 mr-2" />
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingVideos;