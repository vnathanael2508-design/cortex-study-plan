import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Brain, 
  TrendingUp, 
  BookOpen, 
  Target,
  Clock,
  Award
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Documents Processed", value: "24", icon: <FileText className="h-5 w-5" /> },
    { label: "Assessments Created", value: "12", icon: <Brain className="h-5 w-5" /> },
    { label: "Study Hours", value: "48.5", icon: <Clock className="h-5 w-5" /> },
    { label: "Learning Score", value: "87%", icon: <Award className="h-5 w-5" /> },
  ];

  const recentActivity = [
    { title: "Advanced Calculus Notes", type: "Document", status: "Processed", time: "2 hours ago" },
    { title: "Physics Quiz Chapter 5", type: "Assessment", status: "Generated", time: "4 hours ago" },
    { title: "Biology Study Session", type: "Study", status: "Completed", time: "1 day ago" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Learning Dashboard</h2>
          <p className="text-muted-foreground">Track your progress and manage your study materials</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Document Upload */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Documents
              </CardTitle>
              <CardDescription>
                Process study materials with AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">
                  Drag & drop files or click to browse
                </p>
              </div>
              <Button className="w-full bg-gradient-primary">
                Process Documents
              </Button>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Learning Progress
              </CardTitle>
              <CardDescription>
                Your study progress this week
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Mathematics</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Physics</span>
                  <span>72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Biology</span>
                  <span>94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Study Recommendations */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                AI Recommendations
              </CardTitle>
              <CardDescription>
                Personalized study suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-gradient-success/10 rounded-lg border border-accent/20">
                  <p className="text-sm font-medium">Focus on Integration</p>
                  <p className="text-xs text-muted-foreground">Review calculus integration methods</p>
                </div>
                <div className="p-3 bg-gradient-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium">Practice Physics Problems</p>
                  <p className="text-xs text-muted-foreground">Work on momentum and energy</p>
                </div>
                <div className="p-3 bg-gradient-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-sm font-medium">Biology Quiz</p>
                  <p className="text-xs text-muted-foreground">Test cell structure knowledge</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View All Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 hover:shadow-card transition-all duration-300">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning sessions and documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                      {activity.type === 'Document' && <FileText className="h-4 w-4" />}
                      {activity.type === 'Assessment' && <Brain className="h-4 w-4" />}
                      {activity.type === 'Study' && <BookOpen className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.type} • {activity.status}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;