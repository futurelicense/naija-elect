import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Users, TrendingUp, BarChart3 } from "lucide-react";

const QuickPoll = () => {
  const polls = [
    {
      question: "Which issue should be the top priority for the next president?",
      options: [
        { text: "Economy & Jobs", votes: 4250, percentage: 45 },
        { text: "Security", votes: 2840, percentage: 30 },
        { text: "Education", votes: 1420, percentage: 15 },
        { text: "Healthcare", votes: 948, percentage: 10 }
      ],
      totalVotes: 9458,
      timeLeft: "2 days left"
    }
  ];

  return (
    <section className="py-16 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
            <Badge variant="secondary" className="bg-primary text-white">
              Live Poll
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voice Your Opinion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participate in our daily polls and see how your views align with 
            fellow Nigerians on key election issues.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {polls.map((poll, index) => (
            <Card key={index} className="shadow-elevated border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{poll.question}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {poll.timeLeft}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {poll.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{option.text}</span>
                        <span className="text-muted-foreground">
                          {option.percentage}% ({option.votes.toLocaleString()})
                        </span>
                      </div>
                      <Progress value={option.percentage} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {poll.totalVotes.toLocaleString()} total votes
                    </div>
                    <Link to="/early-vote">
                      <Button variant="vote" size="sm">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Cast Your Vote
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Polls & Results
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickPoll;