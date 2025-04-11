import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Star, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ResumeAI</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              href="/builder"
              className="text-sm font-medium hover:text-primary"
            >
              Builder
            </Link>
            <Link
              href="/templates"
              className="text-sm font-medium hover:text-primary"
            >
              Templates
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Button asChild>
              <Link href="/builder">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-navy-950 to-navy-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <section className="relative z-10">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Build professional resumes in minutes
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Create a standout resume, get instant feedback, and export as
                  a professional PDF with our AI-powered resume builder.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                  >
                    <Link href="/builder">
                      Create Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                  >
                    <Link href="/templates">Browse Templates</Link>
                  </Button>
                </div>
              </div>
              </section>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -left-4 -top-4 h-72 w-72 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
                  <div className="relative bg-navy-800 rounded-lg border border-navy-700 shadow-xl overflow-hidden">
                    <div className="p-6">
                      <div className="h-6 w-24 bg-navy-700 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-navy-700 rounded"></div>
                        <div className="h-4 w-5/6 bg-navy-700 rounded"></div>
                        <div className="h-4 w-4/6 bg-navy-700 rounded"></div>
                      </div>
                      <div className="mt-6 h-6 w-32 bg-navy-700 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-navy-700 rounded"></div>
                        <div className="h-4 w-5/6 bg-navy-700 rounded"></div>
                      </div>
                      <div className="mt-6 h-6 w-32 bg-navy-700 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-navy-700 rounded"></div>
                        <div className="h-4 w-4/5 bg-navy-700 rounded"></div>
                        <div className="h-4 w-3/4 bg-navy-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-navy-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Our resume builder makes it easy to create, review, and
                  download professional resumes.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-b from-navy-900 to-navy-950 rounded-lg border border-navy-800/80 shadow-lg hover:shadow-[0_0_15px_rgba(0,128,255,0.2)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_10px_rgba(0,128,255,0.3)]">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Create Your Resume
                </h3>
                <p className="text-center text-gray-300">
                  Fill in your details using our intuitive form builder with
                  real-time previews.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-b from-navy-900 to-navy-950 rounded-lg border border-navy-800/80 shadow-lg hover:shadow-[0_0_15px_rgba(0,128,255,0.2)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_10px_rgba(0,128,255,0.3)]">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Get Instant Feedback
                </h3>
                <p className="text-center text-gray-300">
                  Receive scoring and suggestions to improve your resume's
                  impact and effectiveness.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-b from-navy-900 to-navy-950 rounded-lg border border-navy-800/80 shadow-lg hover:shadow-[0_0_15px_rgba(0,128,255,0.2)] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_10px_rgba(0,128,255,0.3)]">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Download as PDF
                </h3>
                <p className="text-center text-gray-300">
                  Export your polished resume as a professional PDF ready to
                  impress employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-navy-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Choose from professional templates
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                  Select from a variety of templates designed to highlight your
                  skills and experience in the best possible way.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/templates">Browse Templates</Link>
                </Button>
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="bg-navy-700 rounded-lg shadow-lg overflow-hidden border border-navy-600/50">
                  <div className="p-4">
                    <div className="h-6 w-24 bg-navy-600 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-5/6 bg-navy-600 rounded"></div>
                    </div>
                    <div className="mt-4 h-6 w-20 bg-navy-600 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-4/5 bg-navy-600 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-700 rounded-lg shadow-lg overflow-hidden border border-navy-600/50">
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <div className="h-6 w-32 bg-navy-600 rounded"></div>
                      <div className="h-6 w-16 bg-navy-600 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-5/6 bg-navy-600 rounded"></div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-4/5 bg-navy-600 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-700 rounded-lg shadow-lg overflow-hidden border border-navy-600/50">
                  <div className="p-4">
                    <div className="h-6 w-full bg-navy-600 rounded mb-4"></div>
                    <div className="flex">
                      <div className="w-1/3 pr-2">
                        <div className="h-3 w-full bg-navy-600 rounded mb-2"></div>
                        <div className="h-3 w-full bg-navy-600 rounded mb-2"></div>
                        <div className="h-3 w-full bg-navy-600 rounded"></div>
                      </div>
                      <div className="w-2/3">
                        <div className="h-3 w-full bg-navy-600 rounded mb-2"></div>
                        <div className="h-3 w-full bg-navy-600 rounded mb-2"></div>
                        <div className="h-3 w-4/5 bg-navy-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-700 rounded-lg shadow-lg overflow-hidden border border-navy-600/50">
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <div className="h-6 w-3/4 bg-navy-600 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-5/6 bg-navy-600 rounded"></div>
                      <div className="h-3 w-full bg-navy-600 rounded"></div>
                      <div className="h-3 w-3/4 bg-navy-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-navy-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Ready to create a winning resume?
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                  Start building your professional resume today and take the
                  next step in your career journey.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  <Link href="/builder">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-b from-navy-900 to-navy-950 rounded-lg border border-navy-800/80 p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_10px_rgba(0,128,255,0.3)]">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Resume Score
                    </h3>
                    <p className="text-gray-300">
                      Improve your chances of getting hired
                    </p>
                  </div>
                </div>
                <div className="relative h-4 bg-navy-700 rounded-full mb-2">
                  <div className="absolute inset-0 w-4/5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between text-sm mb-6">
                  <span className="text-gray-300">Current Score</span>
                  <span className="text-white font-medium">80/100</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-navy-700/80 rounded-lg border border-navy-600/50">
                    <p className="text-sm text-gray-300">
                      Add more specific achievements to stand out from other
                      candidates.
                    </p>
                  </div>
                  <div className="p-3 bg-navy-700/80 rounded-lg border border-navy-600/50">
                    <p className="text-sm text-gray-300">
                      Include relevant keywords from the job description to pass
                      ATS systems.
                    </p>
                  </div>
                  <div className="p-3 bg-navy-700/80 rounded-lg border border-navy-600/50">
                    <p className="text-sm text-gray-300">
                      Quantify your experience with metrics and numbers where
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:py-8 bg-navy-950 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">ResumeAI</span>
              </Link>
              <p className="text-sm">
                Build professional resumes that help you land your dream job.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/builder" className="hover:text-white">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-white">
                    Resume Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-navy-800 pt-6 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} ResumeAI. All rights reserved.
            </p>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
