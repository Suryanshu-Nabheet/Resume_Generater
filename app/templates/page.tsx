import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ArrowRight } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-navy-800 bg-navy-900">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">ResumeAI</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/builder" className="text-sm font-medium text-gray-300 hover:text-white">
              Builder
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-10 bg-navy-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Resume Templates
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Choose from our professional templates to make your resume stand out from the crowd.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="h-8 w-3/4 bg-navy-700 rounded mb-4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Modern Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Clean and professional design with a sidebar for skills and contact information.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="h-8 w-full bg-navy-700 rounded mb-4 text-center"></div>
                  <div className="flex justify-center mb-6">
                    <div className="h-3 w-2/3 bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/4 bg-navy-700 rounded mb-2 mx-auto"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded mx-auto"></div>
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/4 bg-navy-700 rounded mb-2 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded mx-auto"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Classic Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Traditional layout with clear sections and emphasis on professional experience.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0">
                  <div className="h-24 bg-primary/30"></div>
                  <div className="p-6 relative">
                    <div className="h-8 w-2/3 bg-navy-700 rounded -mt-4 mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                      <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="h-16 bg-navy-700 rounded"></div>
                      <div className="h-16 bg-navy-700 rounded"></div>
                      <div className="h-16 bg-navy-700 rounded"></div>
                    </div>
                    <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                      <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                      <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Creative Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Bold design for creative professionals who want to make a visual impression.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="flex gap-4">
                    <div className="w-1/3">
                      <div className="h-20 w-20 bg-navy-700 rounded-full mb-4 mx-auto"></div>
                      <div className="h-4 w-full bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-full bg-navy-700 rounded mb-6"></div>

                      <div className="h-5 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="space-y-1 mb-4">
                        <div className="h-2 w-full bg-navy-700 rounded"></div>
                        <div className="h-2 w-3/4 bg-navy-700 rounded"></div>
                      </div>

                      <div className="h-5 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 w-full bg-navy-700 rounded"></div>
                        <div className="h-2 w-full bg-navy-700 rounded"></div>
                        <div className="h-2 w-3/4 bg-navy-700 rounded"></div>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="h-6 w-1/2 bg-navy-700 rounded mb-3"></div>
                      <div className="space-y-2 mb-6">
                        <div className="h-3 w-full bg-navy-700 rounded"></div>
                        <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                        <div className="h-3 w-full bg-navy-700 rounded"></div>
                      </div>

                      <div className="h-6 w-1/2 bg-navy-700 rounded mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-navy-700 rounded"></div>
                        <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                        <div className="h-3 w-4/5 bg-navy-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Professional Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Two-column design with a focus on skills and professional achievements.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="mb-8">
                    <div className="h-8 w-3/4 bg-navy-700 rounded mb-2"></div>
                    <div className="h-3 w-1/2 bg-navy-700 rounded"></div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                  </div>
                  <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Minimalist Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Clean, simple design with plenty of whitespace for a modern look.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="h-10 w-full bg-navy-700 rounded-full flex items-center justify-center mb-4">
                    <div className="h-6 w-1/2 bg-navy-600 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="h-4 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 w-3/4 bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-full bg-navy-700 rounded"></div>
                    </div>
                  </div>
                  <div className="h-6 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Technical Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Template designed for technical roles with focus on skills and technical expertise.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="text-center mb-4">
                    <div className="h-6 w-1/2 bg-navy-700 rounded mx-auto mb-2"></div>
                    <div className="h-3 w-1/3 bg-navy-700 rounded mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-[1fr_3px_1fr] h-[calc(100%-60px)]">
                    <div className="pr-4">
                      <div className="h-4 w-full bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-5/6 bg-navy-700 rounded mb-1"></div>
                      <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                    </div>
                    <div className="bg-navy-700 justify-self-center"></div>
                    <div className="pl-4">
                      <div className="h-4 w-full bg-navy-700 rounded mb-2"></div>
                      <div className="h-3 w-5/6 bg-navy-700 rounded mb-1"></div>
                      <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Timeline Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Visual timeline format highlighting career progression and achievements.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-navy-900 border-navy-800 overflow-hidden">
              <div className="aspect-[3/4] bg-navy-800 relative">
                <div className="absolute inset-0 p-6">
                  <div className="h-6 w-1/2 bg-navy-700 rounded mb-2"></div>
                  <div className="h-3 w-full bg-navy-700 rounded mb-6"></div>

                  <div className="h-5 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-1 mb-4">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                    <div className="h-3 w-4/6 bg-navy-700 rounded"></div>
                  </div>

                  <div className="h-5 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-1 mb-4">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                  </div>

                  <div className="h-5 w-1/3 bg-navy-700 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-navy-700 rounded"></div>
                    <div className="h-3 w-5/6 bg-navy-700 rounded"></div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">ATS-Optimized Template</CardTitle>
                <CardDescription className="text-gray-300">
                  Simple format designed to pass applicant tracking systems with ease.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Use This Template <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to build your professional resume?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Choose a template and start creating your standout resume in minutes. Our AI-powered tools will help you
              create a professional resume that gets noticed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
            >
              <Link href="/builder">
                Start Building Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-navy-950 border-t border-navy-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <p className="text-sm">© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="text-xs hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs hover:text-white">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
