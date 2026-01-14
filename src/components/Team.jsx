import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ghaith Dalla-Ali",
      role: "Director, Agentic AI",
      image: "/assets/images/GhaithDallaAli.jpeg",
      social: {
        //linkedin: "https://www.linkedin.com/in/ghaith-dalla-ali/",
      },
    },
    {
      name: "James Ellwood",
      role: "Director, Engineering Platform",
      image: "/assets/images/JamesEllwood.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/james-ellwood-18634972/",
      },
    },
        {
      name: "Stephanie Kaila",
      role: "Employee Engagement Manager",
      image: "/assets/images/StephanieKaila.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/stephanie-kaila-b16275109/",
      },
    },
    {
      name: "Julina Throop",
      role: "Senior Corporate Recruiter",
      image: "/assets/images/JulinaThroop.jpg",
      social: {
      // linkedin: "https://www.linkedin.com/in/julinathroop/", 
      },
    },
    {
      name: "Gabor Szokoli",
      role: "Senior Software Developer",
      image: "/assets/images/GaborSzokoli.jpg",
      social: {
        //linkedin: "https://ca.linkedin.com/in/gabor-szokoli-25a16011",
      },
    },
    {
      name: "Mohamed Radwan",
      role: "Senior Software Developer",
      image: "/assets/images/MohamedRadwan.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/mradwan9/",
      },
    },
    {
      name: "Samuel Gamelin",
      role: "Senior Software Developer",
      image: "/assets/images/SamuelGamelin.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/-sg/",
      },
    },
    {
      name: "Michelle Thomas",
      role: "Principal Technical Writer",
      image: "/assets/images/MichelleThomas.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/michelle-thomas-644b9023//",
      },
    },
    {
      name: "Keith Huang",
      role: "Software Developer",
      image: "/assets/images/KeithHuang.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/yixiang-huang-684903178/",
      },
    },
    {
      name: "Abdullah Ramadan",
      role: "Quality Assurance Engineer - Co-op Student",
      image: "/assets/images/AbdullahRamadan.jpg",
      social: {
        //linkedin: "https://www.linkedin.com/in/abdullahrama/",
      },
    },

    {
      name: "Maryam Lim-Baig",
      role: "Junior Developer Advocate - Co-op Student",
      image: "/assets/images/maryam_lim-baig.jpg",
      social: {
        //linkedin: "http://linkedin.com/in/maryam-l-65a1701b7",
      },
    },
    {
      name: "Reuben D'Souza",
      role: "Software Developer - Co-op Student",
      image: "/assets/images/reuben_dsouza.jpg",
      social: {
        //linkedin: "https://ca.linkedin.com/in/reubenjds",
      },
    },
  ];

  return (
    <section
      id="team"
      className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,1)_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
              Your Hackathon Mentors
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent pb-2 mt-6">
            Meet Our Team
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We're a passionate group of developers and advocates ready to help
            you build amazing event-driven applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm p-6 hover:bg-slate-800 transition-all duration-500 transform hover:-translate-y-1 border border-slate-700/50"
            >
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-400 min-h-[2.5rem]">
                    {member.role}
                  </p>
                </div>
                {member.social?.linkedin && (
                  <div className="flex gap-4">
                    <a
                      href={member.social.linkedin}
                      className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors duration-300 group/link text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="group-hover/link:underline">
                        Connect
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
