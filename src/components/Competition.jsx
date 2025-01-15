import React from "react";

const Competition = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-12 px-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2">
              Compete for $1000 in Prizes!
            </h2>
          </div>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Solace is hosting a challenge for this year's uOttaHack!{" "}
            <span className="font-semibold block mt-2">
              To qualify for the grand prize, your hack must be comprised of
              more than one application that communicate through a Solace Event
              Broker.
            </span>
          </p>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mt-4">
            Your hack will be assessed on how innovative it is towards solving a
            real world problem, as well as how appropriately you've leveraged
            Event-Driven Architecture (EDA) to solve it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Prize Card */}
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="text-right mb-8">
              <h3 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                $1000
              </h3>
              <p className="text-slate-600 text-2xl">
                worth of <strong>Amazon Gift Cards</strong>
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                className="w-full transform group-hover:scale-105 transition-transform duration-500"
                src="/assets/images/amazon.png"
                alt="Amazon Gift Cards"
              />
            </div>
          </div>

          {/* Registration Card */}
          <div className="space-y-6 p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              How to Register
            </h3>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Use <strong>your school's email</strong> to{" "}
                <a
                  href="https://docs.solace.com/Cloud/ggs_login.htm"
                  className="text-emerald-600 hover:text-emerald-700 underline transition-colors"
                >
                  sign up for a free Solace Cloud account
                </a>
                , then{" "}
                <a
                  href="https://docs.solace.com/Cloud/ggs_create_first_service.htm"
                  className="text-emerald-600 hover:text-emerald-700 underline transition-colors"
                >
                  create your first Solace PubSub+ Event Broker
                </a>
                .
              </p>
              <p>
                Once that's done, either come see someone from the Solace team
                at our booth, or reach out to us on Discord.
              </p>
              <p className="font-semibold">
                We'll need your team name and the email you used to signup to
                Solace Cloud to get you registered!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
