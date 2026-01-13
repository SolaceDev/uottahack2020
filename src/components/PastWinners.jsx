import React from "react";

const PastWinners = () => {
  const winners = [
    {
      title: "uOttaType (2025)",
      image: "assets/images/uottatype.png",
      description: "Leveraging Solace Event Broker for Real-Time Collaborative Document Editing",
      blogLink: "https://solace.com/blog/winning-uottahack-7/",
      team: [
        { image: "assets/images/matthew_polak.jpg", name: "Matthew" },
        { image: "assets/images/raef_sarofiem.png", name: "Raef" },
        { image: "assets/images/robert_zuchniak.png", name: "Robert" },
        { image: "assets/images/vasil_topalovic.png", name: "Vasil" },
      ],
    },
    {
      title: "AmbuPlus (2021)",
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
    {
      title: "The Box (2020)",
      image: "assets/images/smartbox3-225x300.png",
      description: "Leveraging Solace PubSub+ to Power a Smart Delivery System",
      blogLink: "https://solace.com/blog/uottahack3-smart-delivery-system/",
      team: [
        { image: "assets/images/zach-bys-150x150.jpg", name: "Zach" },
        { image: "assets/images/jay-wreh-150x150.jpg", name: "Jay" },
        { image: "assets/images/derek-yu-150x150.jpg", name: "Derek" },
      ],
    },
  ];

  return (
    <section
      id="winners"
      className="py-32 bg-gradient-to-b from-slate-100 to-emerald-50 relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-12 px-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-2">
              Past Winners
            </h2>
          </div>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Check out these amazing projects from previous hackathons that
            showcased innovative uses of Solace technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 w-full max-w-md xl:max-w-none"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl mb-8">
                <img
                  src={winner.image}
                  alt={winner.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {winner.title}
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                {winner.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {winner.team.map((member, i) => (
                    <img
                      key={i}
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                      title={member.name}
                    />
                  ))}
                </div>

                <a
                  href={winner.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors text-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWinners;
