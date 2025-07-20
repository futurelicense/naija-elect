import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Eye, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  views: string;
  comments: number;
  imageUrl?: string;
  isBreaking?: boolean;
  isTrending?: boolean;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  views, 
  comments,
  imageUrl,
  isBreaking = false,
  isTrending = false
}: NewsCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer bg-gradient-card border-0">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="h-48 bg-gradient-accent bg-cover bg-center" 
               style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}>
            {!imageUrl && (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <Eye className="h-12 w-12" />
              </div>
            )}
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isBreaking && (
              <Badge variant="destructive" className="bg-news-breaking animate-pulse">
                BREAKING
              </Badge>
            )}
            {isTrending && (
              <Badge variant="secondary" className="bg-news-trending text-white">
                TRENDING
              </Badge>
            )}
            <Badge variant="outline" className="bg-white/90 text-primary">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {views}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                {comments}
              </div>
            </div>
          </div>

          {/* Hot or Not buttons */}
          <div className="flex gap-2 pt-4 border-t">
            <Button variant="outline" size="sm" className="flex-1 hover:bg-vote-yes hover:text-white hover:border-vote-yes">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Hot
            </Button>
            <Button variant="outline" size="sm" className="flex-1 hover:bg-vote-no hover:text-white hover:border-vote-no">
              <ThumbsDown className="h-4 w-4 mr-2" />
              Not
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;