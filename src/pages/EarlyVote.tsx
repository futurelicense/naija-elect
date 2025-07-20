import { useState } from "react";
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
  BarChart3
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EarlyVote = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const candidates = [
    {
      id: "candidate-1",
      name: "Dr. Amina Kanu",
      party: "Progressive Alliance Party (PAP)",
      votes: 45200,
      percentage: 32,
      image: "/placeholder.svg"
    },
    {
      id: "candidate-2", 
      name: "Chief Emeka Okafor",
      party: "National Democratic Movement (NDM)",
      votes: 38400,
      percentage: 27,
      image: "/placeholder.svg"
    },
    {
      id: "candidate-3",
      name: "Alhaji Musa Ibrahim",
      party: "People's Unity Party (PUP)",
      votes: 32100,
      percentage: 23,
      image: "/placeholder.svg"
    },
    {
      id: "candidate-4",
      name: "Mrs. Grace Adebayo",
      party: "New Generation Party (NGP)",
      votes: 25300,
      percentage: 18,
      image: "/placeholder.svg"
    }
  ];

  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  const handleVote = (candidateId: string) => {
    setSelectedCandidate(candidateId);
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
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/20 bg-gradient-card">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Thank You for Voting!</h2>
                <p className="text-muted-foreground mb-6">
                  Your vote has been recorded. Results will be updated in real-time as more citizens participate.
                </p>
                <Button variant="hero" size="lg" onClick={() => window.location.href = '/'}>
                  Return to Homepage
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Voting Section */
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Card className="border-news-breaking/20 bg-news-breaking/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-news-breaking mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-news-breaking mb-2">Important Notice</h3>
                      <p className="text-sm text-muted-foreground">
                        This is an unofficial early voting exercise for opinion polling purposes only. 
                        The official election will be conducted by INEC on the scheduled date.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6">
              {candidates.map((candidate) => (
                <Card 
                  key={candidate.id}
                  className="hover:shadow-elevated transition-all duration-300 cursor-pointer"
                  onClick={() => handleVote(candidate.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                          <Vote className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{candidate.name}</h3>
                          <p className="text-muted-foreground">{candidate.party}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>{candidate.votes.toLocaleString()} votes</span>
                            <span>{candidate.percentage}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right min-w-32">
                        <Button variant="vote" size="lg">
                          <Vote className="h-5 w-5 mr-2" />
                          Vote
                        </Button>
                        <div className="mt-3">
                          <Progress value={candidate.percentage} className="h-2 w-32" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{totalVotes.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total Votes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">147</div>
                      <div className="text-sm text-muted-foreground">Days to Election</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">87.3%</div>
                      <div className="text-sm text-muted-foreground">Participation Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default EarlyVote;