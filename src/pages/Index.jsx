import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Brain, GitBranch, Shield, TestTube, Rocket } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Intelligent Development Automation Platform (IDAP)</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Key Features</TabsTrigger>
          <TabsTrigger value="demo">Demo</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to IDAP</CardTitle>
              <CardDescription>Revolutionizing software development with AI-driven automation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>IDAP is a cutting-edge platform that leverages artificial intelligence to streamline and enhance every aspect of the software development lifecycle. From code generation to testing, deployment, and maintenance, IDAP provides intelligent tools to boost productivity and code quality.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setActiveTab("features")}>Explore Features</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Autonomous Code Generation"
              description="AI-powered code generation based on high-level requirements and specifications."
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="Continuous Learning"
              description="Self-improving AI that learns from codebases, user interactions, and industry trends."
            />
            <FeatureCard
              icon={<GitBranch className="h-6 w-6" />}
              title="Intelligent Architecture"
              description="Self-evolving system architecture that adapts to changing requirements and scales automatically."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="AI-Driven Security"
              description="Proactive threat detection, autonomous patching, and enforcement of zero-trust principles."
            />
            <FeatureCard
              icon={<TestTube className="h-6 w-6" />}
              title="Autonomous Testing"
              description="AI-generated test cases, continuous validation, and intelligent fuzzing for robust quality assurance."
            />
            <FeatureCard
              icon={<Rocket className="h-6 w-6" />}
              title="Smart Deployment"
              description="Intelligent CI/CD pipelines with predictive analytics for optimal deployment strategies."
            />
          </div>
        </TabsContent>
        <TabsContent value="demo">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Experience IDAP in action</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our interactive demo is coming soon! Stay tuned to explore IDAP's powerful features hands-on.</p>
            </CardContent>
            <CardFooter>
              <Button disabled>Launch Demo (Coming Soon)</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
