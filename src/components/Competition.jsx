import React from "react";

const Competition = () => {
  return (
    <section
      id="challenge"
      className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-4 inline-block">
            $1000 in Amazon Gift Cards
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2">
            Join the Challenge
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            Build innovative event-driven solutions and compete for amazing
            prizes
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 lg:gap-6 items-start">
          {/* Left Column - Steps */}
          <div className="md:col-span-7 lg:col-span-8 h-full">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg divide-y divide-slate-200 h-full 
                          transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6">
                <h3 className="text-3xl font-bold text-slate-800">
                  How to Join
                </h3>
                <p className="mt-2 text-slate-600">
                  Follow these steps to participate in the challenge
                </p>
              </div>

              {/* Steps */}
              <div className="p-6 space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-6 group">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center 
                                text-emerald-600 font-bold text-lg transition-all duration-300 
                                group-hover:bg-emerald-200 group-hover:scale-110"
                  >
                    1
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-xl mb-2">
                      Create Solace Account
                    </h4>
                    <p className="text-slate-600 mb-3">
                      Sign up for a free Solace Cloud account using your school
                      email
                    </p>
                    <a
                      href="https://console.solace.cloud/login/new-account"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                    >
                      Create Account
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-6 group">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center 
                                text-emerald-600 font-bold text-lg transition-all duration-300 
                                group-hover:bg-emerald-200 group-hover:scale-110"
                  >
                    2
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-xl mb-2">
                      Register Your Team
                    </h4>
                    <p className="text-slate-600 mb-3">
                      Submit your team details through our registration form
                    </p>
                    <a
                      href="https://forms.office.com/r/hyHREY7ZVh?embed=true"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                    >
                      Register Team
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-6 group">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center 
                                text-emerald-600 font-bold text-lg transition-all duration-300 
                                group-hover:bg-emerald-200 group-hover:scale-110"
                  >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">
                      Start Building
                    </h4>
                    <p className="text-slate-600">
                      Check out our resources and examples to kickstart your
                      project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Workshop Card */}
          <div className="md:col-span-5 lg:col-span-4 h-full">
            <div
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl shadow-lg border border-emerald-100 
                          overflow-hidden h-full flex flex-col transform transition-all duration-300 
                          hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-32 bg-gradient-to-r from-emerald-600 to-blue-600 flex-shrink-0">
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute -bottom-12 inset-x-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                    <img
                      src="/assets/images/DishantLangayan.jpg"
                      alt="Dishant Langayan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 pt-16 pb-6 flex-grow flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-800">
                    Workshop Session
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    with Dishant Langayan
                  </p>
                </div>

                <div className="space-y-3 flex-grow">
                  <div
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg transition-all duration-300
                              hover:bg-white/80 hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-slate-700 font-medium">
                      Saturday at 12:30 PM
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg transition-all duration-300
                              hover:bg-white/80 hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-slate-700 font-medium">Room CRX C-140</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    What you'll learn:
                  </h4>
                  <ul className="space-y-2">
                    <li
                      className="flex items-center gap-2 text-slate-600 transition-all duration-300
                               hover:text-slate-800 hover:translate-x-1"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Event-Driven Architecture basics
                    </li>
                    <li
                      className="flex items-center gap-2 text-slate-600 transition-all duration-300
                               hover:text-slate-800 hover:translate-x-1"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Solace PubSub+ fundamentals
                    </li>
                    <li
                      className="flex items-center gap-2 text-slate-600 transition-all duration-300
                               hover:text-slate-800 hover:translate-x-1"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Hands-on coding examples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Card - Full Width */}
          <div
            className="md:col-span-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6
                        transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Challenge Requirements
            </h3>
            <div className="space-y-4 text-slate-600">
              <div className="space-y-4">
                <p className="font-semibold">Your solution must include:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="transition-all duration-300 hover:text-slate-800 hover:translate-x-1">
                    Multiple applications communicating with each other
                  </li>
                  <li className="transition-all duration-300 hover:text-slate-800 hover:translate-x-1">
                    Integration with Solace PubSub+ Event Broker
                  </li>
                  <li className="transition-all duration-300 hover:text-slate-800 hover:translate-x-1">
                    Solution to a real-world problem
                  </li>
                  <li className="transition-all duration-300 hover:text-slate-800 hover:translate-x-1">
                    Effective use of Event-Driven Architecture
                  </li>
                </ul>
              </div>

              <div
                className="bg-emerald-50 p-4 rounded-lg transition-all duration-300 
                            hover:bg-emerald-100 hover:shadow-md"
              >
                <h4 className="font-semibold text-emerald-800 mb-2">
                  Need Help?
                </h4>
                <p className="text-emerald-700">
                  Visit our booth or reach out on Discord for assistance!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
