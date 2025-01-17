import React from "react";

const FeaturedArticles = () => {
  const articles = [
    {
      image: "/assets/images/article-image-1.jpeg",
      title: "Solace's First Ever Student Hackathon",
      description:
        "Solace's first-ever in-person student hackathon showcased innovative applications using PubSub+ software, celebrating creativity, technical skill, and teamwork.",
      link: "https://solace.com/blog/solace-student-hackathon-2023/",
    },
    {
      image: "/assets/images/article-image-2.jpg",
      title:
        "Leveraging Solace PubSub+ to Build a Price Comparison Application",
      description:
        'At uOttaHack4, a University of Waterloo student developed "Buy It," a price comparison app, as part of a Solace challenge. Utilizing Solace\'s PubSub+.',
      link: "https://solace.com/blog/uottahack-build-a-price-comparison-app/",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-12 px-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent pb-2">
              Creativity Unleashed
            </h2>
          </div>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Discover how students are pushing boundaries and creating innovative
            solutions with Solace technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl border border-slate-700/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-300 text-lg mb-6">
                  {article.description}
                </p>
                <div className="flex items-center text-emerald-400 font-medium">
                  <span className="text-lg">Read More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
