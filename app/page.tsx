import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              <span className="block text-blue-600 dark:text-blue-400">Automated Assignment</span>
              <span className="block">Grading System</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto sm:mx-0 text-xl text-gray-500 dark:text-gray-300">
              Revolutionizing education with AI-powered grading that saves time, ensures consistency, and provides detailed feedback.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a
                href="#features"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                Explore Features
              </a>
              <a
                href="#demo"
                className="rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
              >
                See Demo
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 h-full">
          <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-100 dark:bg-blue-900/20 rounded-l-full opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/grading-illustration.svg"
                alt="AI Grading Illustration"
                width={400}
                height={400}
                className="opacity-80"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Problem Statement</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              The Inefficiencies of Manual Grading
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Traditional grading methods are holding back educational progress.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Time Consuming</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Educators spend countless hours grading assignments, taking away valuable time that could be used for teaching and mentoring.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Inconsistency</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Human grading varies based on fatigue, mood, and personal bias, leading to inconsistent evaluation across students.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Limited Feedback</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Due to time constraints, educators often provide minimal feedback, hindering students' ability to learn from their mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Our Solution</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              AI-Powered Grading Revolution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Our system transforms the grading experience for both educators and students.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="h-64 bg-blue-100 dark:bg-blue-900/30 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/automation-illustration.svg"
                      alt="Automation Illustration"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Automated Grading</h3>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Our AI system processes assignments in seconds, not hours. It analyzes code, essays, and mathematical solutions with precision and accuracy.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Lightning Fast:</span> Grade hundreds of assignments in minutes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Consistent Evaluation:</span> Every assignment is graded with the same criteria
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Scalable:</span> Works for classes of any size
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Intelligent Feedback</h3>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Our system doesn't just grade—it teaches. Students receive detailed, constructive feedback that helps them understand their mistakes and improve.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Personalized:</span> Tailored feedback for each student's work
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Actionable:</span> Clear guidance on how to improve
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Comprehensive:</span> Covers content, structure, and presentation
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="h-64 bg-blue-100 dark:bg-blue-900/30 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/feedback-illustration.svg"
                      alt="Feedback Illustration"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="h-64 bg-blue-100 dark:bg-blue-900/30 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/analytics-illustration.svg"
                      alt="Analytics Illustration"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Insightful Analytics</h3>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Our system provides valuable insights into student performance, helping educators identify trends and areas for improvement.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Performance Tracking:</span> Monitor progress over time
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Common Mistakes:</span> Identify patterns in student errors
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">Curriculum Insights:</span> Data to improve teaching methods
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">See It In Action</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Experience the Future of Grading
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Watch how our system transforms the grading process from start to finish.
            </p>
          </div>

          <div className="mt-12 relative mx-auto max-w-4xl h-96 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-600 dark:text-blue-400 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
                <p className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Demo Video</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Click to watch our system in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Grading Process?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of educators who are saving time and improving student outcomes with our AI-powered grading system.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#learn-more"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Automated Assignment Grading System</h2>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-base text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
