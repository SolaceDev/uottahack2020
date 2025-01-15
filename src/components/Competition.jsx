import React from "react";

const Competition = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Steps Card */}
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              How to Join
            </h3>
            <div className="space-y-6 text-slate-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Create Solace Account</h4>
                  <p>
                    Sign up for a free Solace Cloud account using your school
                    email
                  </p>
                  <a
                    href="https://console.solace.cloud/login/sign-up"
                    className="text-emerald-600 hover:text-emerald-700 underline mt-2 inline-block"
                  >
                    Create Account →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Register Your Team</h4>
                  <p>
                    Submit your team details and Solace account email through
                    our registration form
                  </p>
                  <a
                    href="[MICROSOFT_FORM_URL]"
                    className="text-emerald-600 hover:text-emerald-700 underline mt-2 inline-block"
                  >
                    Register Team →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Start Building</h4>
                  <p>
                    Check out our resources and examples to kickstart your
                    project
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Card */}
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Challenge Requirements
            </h3>
            <div className="space-y-6 text-slate-600">
              <div className="space-y-4">
                <p className="font-semibold">Your solution must include:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Multiple applications communicating with each other</li>
                  <li>Integration with Solace PubSub+ Event Broker</li>
                  <li>Solution to a real-world problem</li>
                  <li>Effective use of Event-Driven Architecture</li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
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
