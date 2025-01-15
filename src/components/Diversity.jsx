import React from "react";

const Diversity = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-emerald-50 relative">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-100 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Diversity, Equity and Inclusion at Solace
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600 text-lg">
                We mean what we say. We believe that diversity in all of its
                forms drives innovation and growth, both in business and in
                life. This is why we strive to create an enriching and safe
                workplace where you can be who you are.
              </p>
              <p className="text-emerald-600 text-xl font-medium">
                It is only because of you that we can be us.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mt-8 hover:bg-white/80 transition-colors shadow-lg">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-slate-800">
                  Voted 4.7 out of 5
                </div>
                <a
                  href="https://ca.indeed.com/cmp/Solace-Corporation/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img
                    className="h-10 w-auto"
                    src="/assets/images/indeed.png"
                    alt="Indeed Rating"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <img
                className="w-full rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
                src="/assets/images/people.png"
                alt="Solace People"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-50 to-transparent" />
    </section>
  );
};

export default Diversity;
