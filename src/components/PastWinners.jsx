import React from "react";

const PastWinners = () => {
  const winners = [
    {
      title: "The Box",
      image: "assets/images/smartbox3-225x300.png",
      description: "Leveraging Solace PubSub+ to Power a Smart Delivery System",
      blogLink: "https://solace.com/blog/uottahack3-smart-delivery-system/",
      team: [
        { image: "assets/images/zach-bys-150x150.jpg", name: "Zach" },
        { image: "assets/images/jay-wreh-150x150.jpg", name: "Jay" },
        { image: "assets/images/derek-yu-150x150.jpg", name: "Derek" },
      ],
    },
    {
      title: "AmbuPlus",
      image: "assets/images/ambuplus.png",
      description: "Leveraging Solace PubSub+ for Real-Time Ambulance Tracking",
      blogLink:
        "https://solace.com/blog/uottahack-challenge-real-time-ambulance-tracking/",
      team: [
        { image: "assets/images/debdut.jpg", name: "Debdut" },
        { image: "assets/images/pratyay.jpg", name: "Pratyay" },
        { image: "assets/images/saif.jpg", name: "Saif" },
        { image: "assets/images/sandipan.jpg", name: "Sandipan" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Past Winners</h2>
          <p className="text-slate-600 text-lg">
            Check out these amazing projects from previous hackathons that
            showcased innovative uses of Solace technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={winner.image}
                  alt={winner.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {winner.title}
                </h3>
                <p className="text-slate-600 mb-6">{winner.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {winner.team.map((member, i) => (
                      <img
                        key={i}
                        src={member.image}
                        alt={member.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        title={member.name}
                      />
                    ))}
                  </div>

                  <a
                    href={winner.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    Read their story
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWinners;
