import { Home, Code, Brain, GitBranch, Shield, TestTube, Rocket } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Code Generation",
    to: "/code-generation",
    icon: <Code className="h-4 w-4" />,
    page: <div>Code Generation Page (Coming Soon)</div>,
  },
  {
    title: "AI Learning",
    to: "/ai-learning",
    icon: <Brain className="h-4 w-4" />,
    page: <div>AI Learning Page (Coming Soon)</div>,
  },
  {
    title: "Architecture",
    to: "/architecture",
    icon: <GitBranch className="h-4 w-4" />,
    page: <div>Architecture Page (Coming Soon)</div>,
  },
  {
    title: "Security",
    to: "/security",
    icon: <Shield className="h-4 w-4" />,
    page: <div>Security Page (Coming Soon)</div>,
  },
  {
    title: "Testing",
    to: "/testing",
    icon: <TestTube className="h-4 w-4" />,
    page: <div>Testing Page (Coming Soon)</div>,
  },
  {
    title: "Deployment",
    to: "/deployment",
    icon: <Rocket className="h-4 w-4" />,
    page: <div>Deployment Page (Coming Soon)</div>,
  },
];
