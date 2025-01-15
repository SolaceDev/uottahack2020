import React from "react";

const Competition = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Compete for $1000 in Prizes!
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Solace is hosting a challenge for this year's uOttaHack!
            <strong>
              to qualify for the grand prize, your hack must be comprised of
              more than one application that communicate through a Solace Event
              Broker.
            </strong>
            Your hack will be assessed on how innovative it is towards solving a
            real world problem, as well as how appropriately you've leveraged
            Event-Driven Architecture (EDA) to solve it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="text-right mb-6">
              <h3 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                $1000
              </h3>
              <p className="text-slate-600 text-xl">
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

          <div className="space-y-6 p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              How to Register
            </h3>
            <div className="space-y-4 text-slate-600 text-lg">
              Use <strong>your school's email</strong> to
              <a href="https://docs.solace.com/Cloud/ggs_login.htm">
                {" "}
                sign up for a free Solace Cloud account
              </a>
              , then
              <a href="https://docs.solace.com/Cloud/ggs_create_first_service.htm">
                {" "}
                create your first Solace PubSub+ Event Broker
              </a>
              . Once that's done, either come see someone from the Solace team
              at our booth, or reach out to us on Discord.
              <strong>
                {" "}
                We'll need your team name and the email you used to signup to
                Solace Cloud to get you registered!
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
