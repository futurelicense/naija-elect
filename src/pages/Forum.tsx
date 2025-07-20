import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Send, 
  Users, 
  Hash,
  Settings,
  Crown,
  Shield,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  userType: 'admin' | 'moderator' | 'verified' | 'user';
}

interface Channel {
  id: string;
  name: string;
  description: string;
  userCount: number;
  isActive?: boolean;
}

const Forum = () => {
  const [activeChannel, setActiveChannel] = useState("general");
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("NigerianVoter2027");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const channels: Channel[] = [
    { id: "general", name: "General Discussion", description: "General election talk", userCount: 1247, isActive: true },
    { id: "candidates", name: "Candidate Debates", description: "Discuss presidential candidates", userCount: 892 },
    { id: "policies", name: "Policy Analysis", description: "Deep dive into manifestos", userCount: 534 },
    { id: "security", name: "Election Security", description: "Security and transparency", userCount: 423 },
    { id: "youth", name: "Youth Corner", description: "Young voters discussion", userCount: 678 },
    { id: "regions", name: "Regional Issues", description: "State and regional topics", userCount: 356 },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "ElectionExpert",
      message: "Welcome to the Nigeria Election 2027 forum! Let's keep discussions respectful and fact-based.",
      timestamp: new Date(Date.now() - 3600000),
      userType: "admin"
    },
    {
      id: "2", 
      user: "LagosResident",
      message: "Looking forward to seeing how the candidates address infrastructure in Lagos. The traffic situation needs urgent attention!",
      timestamp: new Date(Date.now() - 3000000),
      userType: "verified"
    },
    {
      id: "3",
      user: "YouthVoice",
      message: "As a first-time voter, I'm really interested in education policies. Any recommendations for where to find detailed candidate positions?",
      timestamp: new Date(Date.now() - 2400000),
      userType: "user"
    },
    {
      id: "4",
      user: "PoliticalAnalyst",
      message: "Check out the manifestos section on each candidate's official website. Also, upcoming debates will cover education extensively.",
      timestamp: new Date(Date.now() - 1800000),
      userType: "moderator"
    },
    {
      id: "5",
      user: "NorthernVoter",
      message: "Security remains my top concern. Would love to hear what specific strategies each candidate has for the northern states.",
      timestamp: new Date(Date.now() - 1200000),
      userType: "user"
    },
    {
      id: "6",
      user: "EconomyWatcher",
      message: "The economic policies being proposed are quite interesting. Dr. Kanu's industrial development plan caught my attention.",
      timestamp: new Date(Date.now() - 600000),
      userType: "verified"
    }
  ]);

  const sendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        user: username,
        message: messageInput,
        timestamp: new Date(),
        userType: "user"
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  const getUserIcon = (userType: string) => {
    switch (userType) {
      case "admin": return <Crown className="h-4 w-4 text-news-breaking" />;
      case "moderator": return <Shield className="h-4 w-4 text-primary" />;
      case "verified": return <Shield className="h-4 w-4 text-vote-yes" />;
      default: return null;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="bg-primary text-white">
              Live Discussion
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Election Forum
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the conversation with fellow Nigerians about the 2027 elections. 
            Discuss candidates, policies, and share your thoughts in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Channels Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {channels.map((channel) => (
                  <div
                    key={channel.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeChannel === channel.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-accent'
                    }`}
                    onClick={() => setActiveChannel(channel.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{channel.name}</span>
                      {channel.isActive && (
                        <div className="w-2 h-2 bg-vote-yes rounded-full animate-pulse" />
                      )}
                    </div>
                    <div className="text-xs opacity-80 mt-1">{channel.description}</div>
                    <div className="flex items-center gap-1 text-xs opacity-60 mt-1">
                      <Users className="h-3 w-3" />
                      {channel.userCount}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-5 w-5" />
                    {channels.find(c => c.id === activeChannel)?.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {channels.find(c => c.id === activeChannel)?.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    <Users className="h-3 w-3 mr-1" />
                    {channels.find(c => c.id === activeChannel)?.userCount} online
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                      {getUserIcon(message.userType) || (
                        <span className="text-xs font-bold">
                          {message.user[0].toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{message.user}</span>
                        {getUserIcon(message.userType)}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name.toLowerCase()}`}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} variant="hero">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Be respectful and factual. No hate speech or misinformation allowed.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Forum;