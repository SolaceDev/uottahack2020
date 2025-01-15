import React from "react";

const Diversity = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2">
                Diversity, Equity and Inclusion at Solace
              </h2>
              <div className="space-y-6">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  We mean what we say. We believe that diversity in all of its
                  forms drives innovation and growth, both in business and in
                  life. This is why we strive to create an enriching and safe
                  workplace where you can be who you are.
                </p>
                <p className="text-emerald-600 text-2xl font-semibold">
                  It is only because of you that we can be us.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Voted 4.7 out of 5
                </div>
                <a
                  href="https://ca.indeed.com/cmp/Solace-Corporation/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img
                    className="h-12 w-auto"
                    src="/assets/images/indeed.png"
                    alt="Indeed Rating"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative">
              <img
                className="w-full rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500"
                src="/assets/images/people.png"
                alt="Solace People"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diversity;
