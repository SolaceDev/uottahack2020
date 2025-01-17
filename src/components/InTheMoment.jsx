import React from "react";

const InTheMoment = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-12 px-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2">
              In The Moment
            </h2>
          </div>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Catch a glimpse of the energy and innovation at our hackathons
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Image */}
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/assets/images/Collage-2-Desktop.png"
                alt="Hackathon Moments"
                className="w-full transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <img
                src="/assets/images/Collage-2-Mobile.png"
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
