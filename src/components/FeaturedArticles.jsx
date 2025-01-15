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
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Creativity Unleashed
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover how students are pushing boundaries and creating innovative
            solutions with Solace technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-300 mb-4">{article.description}</p>
                <div className="flex items-center text-emerald-400">
                  <span className="mr-2">Read More</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
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
