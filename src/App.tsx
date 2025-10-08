import {
  BookOpen,
  CheckCircle,
  ExternalLink,
  // Instagram
} from "lucide-react";
import { SiInstagram as Instagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Logo from "./components/logo";

export default function LandingPage() {
  const productLink = "https://organizedtiger.gumroad.com/";
  const instagramLink = "https://instagram.com/organizedtiger";
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Master Your Notes, Master Your Studies
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            A practical, hands-on guide to building your own personalized
            digital note-taking system. Perfect for first-year students ready to
            level up their academic game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={productLink} target="_blank" rel="noopener noreferrer">
                Get the Guide
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            {/* Replace this div with your actual video embed */}
            <div className="text-center space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">Your video goes here</p>
              <p className="text-sm text-muted-foreground">
                (Embed YouTube, Vimeo, or upload directly)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Zettelkasten-Inspired System
                  </h3>
                  <p className="text-muted-foreground">
                    Learn a proven method for connecting ideas and building
                    knowledge over time
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Complete Obsidian Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Step-by-step instructions for folders, tags, plugins, and
                    syncing across devices
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Visual Examples & Diagrams
                  </h3>
                  <p className="text-muted-foreground">
                    Real examples and visuals to help you understand and
                    implement the system
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Fully Customizable</h3>
                  <p className="text-muted-foreground">
                    Adapt the system to your unique learning style and course
                    requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-muted rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Transform Your Notes?</h2>
          <p className="text-muted-foreground text-lg">
            Join fellow students who've already upgraded their note-taking game.
            Get instant access to the complete guide.
          </p>
          <Button size="lg" asChild>
            <a href={productLink} target="_blank" rel="noopener noreferrer">
              Get the Guide Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Optional one-on-one setup support available after purchase
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Made by students, for students
            </p>
            <div className="flex items-center gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
