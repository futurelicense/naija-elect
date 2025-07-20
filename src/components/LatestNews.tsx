import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Clock } from "lucide-react";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  const newsArticles = [
    {
      title: "INEC Announces New Voter Registration Centers Across 36 States",
      excerpt: "The Independent National Electoral Commission has unveiled plans to establish additional voter registration centers in rural communities to ensure maximum participation in the 2027 elections.",
      category: "Elections",
      readTime: "5 min read",
      views: "45.2K",
      comments: 234,
      isBreaking: true
    },
    {
      title: "Presidential Aspirants Release Economic Manifestos",
      excerpt: "Leading presidential candidates have begun releasing detailed economic policies focusing on youth employment, infrastructure development, and digital transformation.",
      category: "Politics",
      readTime: "8 min read", 
      views: "32.1K",
      comments: 156,
      isTrending: true
    },
    {
      title: "Security Agencies Prepare for Election Season",
      excerpt: "Nigerian security forces announce comprehensive security plans to ensure peaceful and credible elections across all 774 local government areas.",
      category: "Security",
      readTime: "6 min read",
      views: "28.5K", 
      comments: 89
    },
    {
      title: "Youth Groups Launch Voter Education Campaign",
      excerpt: "Coalition of youth organizations begins nationwide campaign to educate first-time voters on electoral processes and civic responsibilities.",
      category: "Youth",
      readTime: "4 min read",
      views: "19.8K",
      comments: 67
    },
    {
      title: "Technology Integration in 2027 Elections: BVAS Updates",
      excerpt: "INEC announces enhanced Bimodal Voter Accreditation System features to improve voter verification and result transmission processes.",
      category: "Technology",
      readTime: "7 min read",
      views: "36.4K",
      comments: 198
    },
    {
      title: "International Observers Commit to Election Monitoring",
      excerpt: "International observer groups confirm participation in monitoring the 2027 elections to ensure transparency and credibility.",
      category: "International",
      readTime: "5 min read",
      views: "22.3K",
      comments: 78
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Newspaper className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="border-primary text-primary">
              <Clock className="h-4 w-4 mr-2" />
              Updated 15 minutes ago
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Election News
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with breaking news, political developments, and 
            comprehensive coverage of Nigeria's path to the 2027 elections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Newspaper className="h-5 w-5 mr-2" />
            Read All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;