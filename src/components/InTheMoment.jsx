import React from "react";

const InTheMoment = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            In The Moment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Catch a glimpse of the energy and innovation at our hackathons
          </p>
        </div>

        <div className="relative">
          {/* Desktop Image */}
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <img
                src="/assets/images/Collage-Desktop.png"
                alt="Hackathon Moments"
                className="w-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <img
                src="/assets/images/Collage-Mobile.png"
                alt="Hackathon Moments"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InTheMoment;
