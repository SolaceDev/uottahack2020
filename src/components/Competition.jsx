import React from 'react';

const Competition = () => {
  return (
    <section id="competition" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Compete for $1000 in Prizes!
          </h2>
          <p className="text-slate-700 text-lg">
            Solace is hosting a challenge for this year's uOttaHack!
            <strong>
              to qualify for the grand prize, your hack must be comprised
              of more than one application that communicate through a
              Solace Event Broker.
            </strong>
            Your hack will be assessed on how innovative it is towards
            solving a real world problem, as well as how appropriately
            you've leveraged Event-Driven Architecture (EDA) to solve it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-right mb-4">
              <h3 className="text-6xl font-bold text-emerald-600">$1000</h3>
              <p className="text-slate-600">worth of <strong>Amazon Gift Cards</strong></p>
            </div>
            <img className="w-full" src="/assets/images/amazon.png" alt="Amazon Gift Cards" />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">How to Register</h3>
            <p>
              Use <strong>your school's email</strong> to
              <a href="https://docs.solace.com/Cloud/ggs_login.htm"> sign up for a free Solace Cloud account</a>, then
              <a href="https://docs.solace.com/Cloud/ggs_create_first_service.htm"> create your first Solace PubSub+ Event Broker</a>.
              Once that's done, either come see someone from the Solace team at our booth, or reach out to us on Discord.
              <strong> We'll need your team name and the email you used to signup to Solace Cloud to get you registered!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
