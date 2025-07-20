import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Vote, 
  Clock, 
  Users, 
  CheckCircle,
  AlertCircle,
  Calendar,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Flame,
  Eye,
  MessageCircle,
  Share2,
  Heart,
  Bell,
  Zap,
  Globe,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EarlyVote = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [liveCount, setLiveCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [reactions, setReactions] = useState({
    likes: 12847,
    shares: 4205,
    comments: 2934,
    eyes: 47642
  });

  // Major Nigerian Political Parties for 2027
  const parties = [
    {
      id: "pdp",
      name: "People's Democratic Party",
      shortName: "PDP",
      symbol: "🔴",
      votes: 1247563,
      percentage: 34.7,
      trend: "+2.8%",
      trendDirection: "up",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      slogan: "Power to the People",
      founded: "1999",
      strongholds: "South-South, South-East",
      keyPolicies: ["Economic Reform", "Healthcare", "Education"]
    },
    {
      id: "apc", 
      name: "All Progressives Congress",
      shortName: "APC",
      symbol: "🔵",
      votes: 1156234,
      percentage: 32.1,
      trend: "-1.5%",
      trendDirection: "down",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      slogan: "Change & Progress",
      founded: "2013",
      strongholds: "North-West, South-West",
      keyPolicies: ["Infrastructure", "Security", "Anti-Corruption"]
    },
    {
      id: "lp",
      name: "Labour Party",
      shortName: "LP", 
      symbol: "🟢",
      votes: 698456,
      percentage: 19.4,
      trend: "+8.7%",
      trendDirection: "up",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      slogan: "From Consumption to Production",
      founded: "2002",
      strongholds: "South-East, Youth Demographics",
      keyPolicies: ["Youth Empowerment", "Technology", "Small Business"]
    },
    {
      id: "adc",
      name: "African Democratic Congress", 
      shortName: "ADC",
      symbol: "🟡",
      votes: 498847,
      percentage: 13.8,
      trend: "+3.2%",
      trendDirection: "up",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      slogan: "Build A New Nigeria",
      founded: "2006",
      strongholds: "Middle Belt, FCT",
      keyPolicies: ["Good Governance", "Unity", "Development"]
    }
  ];

  const totalVotes = parties.reduce((sum, party) => sum + party.votes, 0);

  // Live updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 15) + 5);
      setLastUpdate(new Date());
      setReactions(prev => ({
        likes: prev.likes + Math.floor(Math.random() * 8),
        shares: prev.shares + Math.floor(Math.random() * 3),
        comments: prev.comments + Math.floor(Math.random() * 5),
        eyes: prev.eyes + Math.floor(Math.random() * 20)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (partyId: string) => {
    setSelectedParty(partyId);
    setHasVoted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Newspaper-Style Breaking News Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 text-sm">
            <Badge variant="destructive" className="bg-yellow-500 text-black animate-pulse">
              <Flame className="h-3 w-3 mr-1" />
              BREAKING
            </Badge>
            <span className="font-bold">LIVE ELECTION POLL:</span>
            <span>PDP leads with {parties[0].percentage}% | {(totalVotes + liveCount).toLocaleString()} votes counted</span>
            <Badge variant="outline" className="ml-auto bg-white/10 border-white/20">
              <Eye className="h-3 w-3 mr-1" />
              {reactions.eyes.toLocaleString()} watching live
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* NYT-Style Header */}
        <div className="border-b-2 border-foreground mb-8 pb-6">
          <div className="text-center mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              The Nigeria Election - Special Report
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Nigeria 2027:<br />Early Vote Count
            </h1>
            <div className="text-lg text-muted-foreground mb-4">
              Live polling results show tight race as {(totalVotes + liveCount).toLocaleString()} Nigerians cast early votes
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>Updated {lastUpdate.toLocaleTimeString()}</span>
              <Separator orientation="vertical" className="h-3" />
              <span>4 Political Parties</span>
              <Separator orientation="vertical" className="h-3" />
              <span>{Math.round((totalVotes + liveCount) / 1000)}K+ Voters</span>
            </div>
          </div>
        </div>

        {hasVoted ? (
          /* Post-Vote Results View */
          <div className="max-w-6xl mx-auto">
            {/* Success Message */}
            <Card className="border-green-200 bg-green-50 mb-8">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Vote Successfully Cast!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You're now part of the {reactions.eyes.toLocaleString()} Nigerians watching this historic early poll
                </p>
                
                {/* Social Engagement */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    React ({reactions.likes.toLocaleString()})
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Share2 className="h-5 w-5 text-blue-500" />
                    Share ({reactions.shares.toLocaleString()})
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    Discuss ({reactions.comments.toLocaleString()})
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Live Results Grid */}
            <div className="grid gap-6 mb-8">
              <h2 className="text-3xl font-bold text-center mb-6">Live Results</h2>
              {parties.map((party, index) => (
                <Card key={party.id} className={`${party.bgColor} ${party.borderColor} border-2`}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{party.symbol}</span>
                        <div>
                          <h3 className="text-xl font-bold">{party.shortName}</h3>
                          <p className="text-sm text-muted-foreground">{party.name}</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl font-bold">{party.percentage}%</div>
                        <div className={`flex items-center justify-center gap-1 ${party.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {party.trendDirection === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                          {party.trend}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Progress value={party.percentage} className="h-4" />
                        <p className="text-sm font-medium">{party.votes.toLocaleString()} votes</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Strongholds:</p>
                        <p className="text-xs">{party.strongholds}</p>
                        <p className="text-xs italic mt-2">"{party.slogan}"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Voting Interface */
          <div className="max-w-6xl mx-auto">
            {/* Daily Mail Style Alert */}
            <Card className="border-red-200 bg-red-50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-2">🚨 MASSIVE TURNOUT EXPECTED</h3>
                    <p className="text-muted-foreground">
                      Political analysts predict record-breaking participation as Nigeria's major parties battle for early poll dominance. 
                      <strong> Your vote counts in this historic moment!</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Party Voting Cards - NYT Style */}
            <div className="space-y-8 mb-8">
              <h2 className="text-3xl font-bold text-center mb-8">Cast Your Vote</h2>
              
              {parties.map((party, index) => (
                <Card 
                  key={party.id}
                  className={`${party.bgColor} ${party.borderColor} border-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                  onClick={() => handleVote(party.id)}
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      {/* Party Info */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="text-6xl">{party.symbol}</span>
                          <div>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                              {party.shortName}
                            </h3>
                            <p className="text-lg font-medium">{party.name}</p>
                            <p className="text-sm text-muted-foreground">Founded {party.founded}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Key Policies:</p>
                          <div className="flex flex-wrap gap-2">
                            {party.keyPolicies.map((policy, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {policy}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Current Stats */}
                      <div className="text-center space-y-4">
                        <div>
                          <div className="text-5xl font-bold mb-2">{party.percentage}%</div>
                          <div className={`flex items-center justify-center gap-1 text-lg ${party.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {party.trendDirection === 'up' ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                            {party.trend}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Progress value={party.percentage} className="h-3" />
                          <p className="text-sm font-medium">{party.votes.toLocaleString()} votes</p>
                          <p className="text-xs text-muted-foreground">Strongholds: {party.strongholds}</p>
                        </div>
                      </div>
                      
                      {/* Vote Button */}
                      <div className="text-center space-y-4">
                        <Button 
                          variant="vote" 
                          size="lg" 
                          className="w-full text-lg py-6 group-hover:scale-105 transition-transform"
                        >
                          <Vote className="h-6 w-6 mr-3" />
                          VOTE {party.shortName}
                        </Button>
                        
                        <div className="text-center">
                          <p className="text-sm italic text-muted-foreground">"{party.slogan}"</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Live Statistics Dashboard */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary animate-pulse mb-2">
                  {(totalVotes + liveCount).toLocaleString()}
                </div>
                <div className="text-sm font-medium text-muted-foreground">Total Votes</div>
                <div className="text-xs text-green-600 mt-1">+{liveCount} this session</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {reactions.eyes.toLocaleString()}
                </div>
                <div className="text-sm font-medium text-muted-foreground">Live Viewers</div>
                <div className="text-xs text-blue-600 mt-1">Real-time</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">147</div>
                <div className="text-sm font-medium text-muted-foreground">Days to Election</div>
                <div className="text-xs text-orange-600 mt-1">Feb 25, 2027</div>
              </Card>
              
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">94.2%</div>
                <div className="text-sm font-medium text-muted-foreground">Engagement</div>
                <div className="text-xs text-purple-600 mt-1">Above average</div>
              </Card>
            </div>

            {/* Bottom Disclaimer */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-8 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>{reactions.likes.toLocaleString()} reactions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Share2 className="h-4 w-4 text-blue-500" />
                    <span>{reactions.shares.toLocaleString()} shares</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span>{reactions.comments.toLocaleString()} comments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-purple-500" />
                    <span>Global attention</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-center text-xs text-muted-foreground">
                  ⚠️ <strong>DISCLAIMER:</strong> This is an unofficial early voting exercise for opinion polling purposes only. 
                  The official 2027 Nigerian Presidential Election will be conducted by the Independent National Electoral Commission (INEC).
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