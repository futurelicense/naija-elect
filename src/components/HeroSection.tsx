import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Vote, TrendingUp, Users, Clock } from "lucide-react";

const HeroSection = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({ yes: 8734, no: 4113 });
  
  const totalVotes = votes.yes + votes.no;
  const yesPercentage = Math.round((votes.yes / totalVotes) * 100);
  const noPercentage = Math.round((votes.no / totalVotes) * 100);

  const handleVote = (choice: 'yes' | 'no') => {
    if (!hasVoted) {
      setVotes(prev => ({
        ...prev,
        [choice]: prev[choice] + 1
      }));
      setHasVoted(true);
    }
  };

  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                Live Coverage of 2027 Elections
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Voice in Nigeria's
                <span className="block text-primary-light">Democratic Future</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Stay informed, participate in early voting, and join the conversation 
                shaping Nigeria's 2027 elections. Real-time news, trending content, 
                and community discussions all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/early-vote">
                <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  <Vote className="h-5 w-5 mr-2" />
                  Start Early Voting
                </Button>
              </Link>
              <a href="#latest-news">
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  Explore Latest News
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">2.4M+</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm text-white/80">News Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{totalVotes.toLocaleString()}+</div>
                <div className="text-sm text-white/80">Poll Votes</div>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Quick Poll</h3>
                <div className="space-y-4">
                  <div className="text-lg">
                    Do you believe Nigeria is ready for the 2027 elections?
                  </div>
                  {!hasVoted ? (
                    <div className="flex gap-3">
                      <Button 
                        variant="vote-yes" 
                        className="flex-1 hover:scale-105 transition-transform"
                        onClick={() => handleVote('yes')}
                      >
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Yes ({yesPercentage}%)
                      </Button>
                      <Button 
                        variant="vote-no" 
                        className="flex-1 hover:scale-105 transition-transform"
                        onClick={() => handleVote('no')}
                      >
                        No ({noPercentage}%)
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-center text-lg font-semibold">Thank you for voting!</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Yes: {yesPercentage}%</span>
                          <span>No: {noPercentage}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-vote-yes h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${yesPercentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-center text-sm text-white/80 mt-4">
                    <Users className="h-4 w-4 mr-2" />
                    {totalVotes.toLocaleString()} votes cast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;