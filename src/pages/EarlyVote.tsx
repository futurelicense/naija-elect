import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Vote, 
  Clock, 
  Users, 
  CheckCircle,
  AlertCircle,
  Calendar,
  BarChart3,
  TrendingUp,
  Flame,
  Eye,
  MessageCircle,
  Share2,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EarlyVote = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [liveCount, setLiveCount] = useState(0);
  const [reactions, setReactions] = useState({
    likes: 2847,
    shares: 1205,
    comments: 934,
    eyes: 15642
  });

  // Major Nigerian Political Parties for 2027
  const parties = [
    {
      id: "pdp",
      name: "Atiku Abubakar",
      party: "People's Democratic Party",
      shortName: "PDP",
      votes: 847563,
      percentage: 38.2,
      trend: "+2.1%",
      color: "bg-red-600",
      slogan: "Unity, Progress, Development",
      logo: "🔴"
    },
    {
      id: "apc", 
      name: "Bola Ahmed Tinubu",
      party: "All Progressives Congress",
      shortName: "APC",
      votes: 756234,
      percentage: 34.1,
      trend: "-1.3%",
      color: "bg-blue-600",
      slogan: "Change, Progress, Unity",
      logo: "🔵"
    },
    {
      id: "adc",
      name: "Kingsley Moghalu",
      party: "African Democratic Congress", 
      shortName: "ADC",
      votes: 298456,
      percentage: 13.4,
      trend: "+5.7%",
      color: "bg-green-600",
      slogan: "Build A New Nigeria",
      logo: "🟢"
    },
    {
      id: "lp",
      name: "Peter Obi",
      party: "Labour Party",
      shortName: "LP", 
      votes: 315847,
      percentage: 14.3,
      trend: "+3.2%",
      color: "bg-red-500",
      slogan: "From Consumption to Production",
      logo: "🔶"
    }
  ];

  // Live count simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setReactions(prev => ({
        likes: prev.likes + Math.floor(Math.random() * 5),
        shares: prev.shares + Math.floor(Math.random() * 2),
        comments: prev.comments + Math.floor(Math.random() * 3),
        eyes: prev.eyes + Math.floor(Math.random() * 10)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const totalVotes = parties.reduce((sum, party) => sum + party.votes, 0);

  const handleVote = (partyId: string) => {
    setSelectedCandidate(partyId);
    setHasVoted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Vote className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="bg-primary text-white">
              Early Voting Open
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            2027 Presidential Early Vote
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in our early voting exercise to express your preference for Nigeria's next president. 
            Your vote helps gauge public opinion ahead of the official election.
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Voting closes: March 15, 2027</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{totalVotes.toLocaleString()} votes cast</span>
            </div>
          </div>
        </div>

        {hasVoted ? (
          /* Thank You Section */
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-card mb-8">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Your Vote Has Been Cast!</h2>
                <p className="text-muted-foreground mb-6">
                  Join {reactions.eyes.toLocaleString()} others watching live results. Share your reaction below!
                </p>
                
                {/* Live Reactions */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    {reactions.likes.toLocaleString()}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4 text-blue-500" />
                    {reactions.shares.toLocaleString()}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    {reactions.comments.toLocaleString()}
                  </Button>
                </div>
                
                <Button variant="hero" size="lg" onClick={() => setHasVoted(false)}>
                  View Live Results
                </Button>
              </CardContent>
            </Card>
            
            {/* Live Results Display */}
            <div className="space-y-4">
              {parties.map((party, index) => (
                <Card key={party.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center">
                      <div className={`w-2 h-full ${party.color}`}></div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{party.logo}</span>
                            <div>
                              <h3 className="font-bold text-lg">{party.name}</h3>
                              <p className="text-sm text-muted-foreground">{party.party}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{party.percentage}%</div>
                            <div className={`text-sm flex items-center gap-1 ${party.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              <TrendingUp className="h-3 w-3" />
                              {party.trend}
                            </div>
                          </div>
                        </div>
                        <Progress value={party.percentage} className="h-3 mb-2" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{party.votes.toLocaleString()} votes</span>
                          <span>"{party.slogan}"</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Enhanced Voting Section */
          <div className="max-w-6xl mx-auto">
            {/* Breaking News Style Header */}
            <div className="mb-8">
              <Card className="border-news-breaking/20 bg-gradient-to-r from-news-breaking/10 to-news-breaking/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="destructive" className="animate-pulse">
                      <Flame className="h-3 w-3 mr-1" />
                      LIVE
                    </Badge>
                    <span className="text-sm font-medium">
                      {(totalVotes + liveCount).toLocaleString()} Nigerians have voted
                    </span>
                    <Badge variant="outline" className="ml-auto">
                      <Eye className="h-3 w-3 mr-1" />
                      {reactions.eyes.toLocaleString()} watching
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-news-breaking mb-2">
                    🚨 EXCLUSIVE: Live Early Vote Count - Who Will Lead Nigeria in 2027?
                  </h2>
                  <p className="text-muted-foreground">
                    Real-time polling shows tight race between major parties. Cast your vote and see instant results!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Live Vote Interface */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {parties.map((party) => (
                <Card 
                  key={party.id}
                  className="group hover:shadow-elevated transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
                  onClick={() => handleVote(party.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{party.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {party.name}
                          </h3>
                          <p className="text-sm font-medium text-primary">{party.shortName}</p>
                          <p className="text-xs text-muted-foreground">{party.party}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{party.percentage}%</div>
                        <div className={`text-sm flex items-center gap-1 ${party.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          <TrendingUp className="h-3 w-3" />
                          {party.trend}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Progress value={party.percentage} className="h-4" />
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{party.votes.toLocaleString()} votes</span>
                        <span className="text-muted-foreground italic">"{party.slogan}"</span>
                      </div>
                      
                      <Button 
                        variant="vote" 
                        size="lg" 
                        className="w-full group-hover:scale-105 transition-transform"
                      >
                        <Vote className="h-5 w-5 mr-2" />
                        Vote for {party.shortName}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Live Stats Dashboard */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary animate-pulse">
                    {(totalVotes + liveCount).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Votes Cast</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {reactions.eyes.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Live Viewers</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">147</div>
                  <div className="text-sm text-muted-foreground">Days to Election</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600">92.7%</div>
                  <div className="text-sm text-muted-foreground">Engagement Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Social Proof */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>{reactions.likes.toLocaleString()} reactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-blue-500" />
                    <span>{reactions.shares.toLocaleString()} shares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span>{reactions.comments.toLocaleString()} comments</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  ⚠️ This is an unofficial early voting exercise for opinion polling purposes only. 
                  Official election will be conducted by INEC.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default EarlyVote;