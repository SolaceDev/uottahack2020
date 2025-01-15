import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ghaith Dalla-Ali",
      role: "Director, Engineering",
      image: "/assets/images/GhaithDallaAli.jpeg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Stephanie Kaila",
      role: "Employee Engagement Lead",
      image: "/assets/images/StephanieKaila.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Dishant Langayan",
      role: "VP, Professional Services",
      image: "/assets/images/DishantLangayan.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Andrea Ross",
      role: "Manager, Engineering",
      image: "/assets/images/AndreaRoss.png",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Michael Cardy",
      role: "Senior Architect",
      image: "/assets/images/MichaelCardy.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Gabor Szokoli",
      role: "Senior Software Developer",
      image: "/assets/images/GaborSzokoli.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Mohamed Radwan",
      role: "Software Developer",
      image: "/assets/images/MohamedRadwan.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Samuel Gamelin",
      role: "Software Developer",
      image: "/assets/images/SamuelGamelin.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Keith Huang",
      role: "Software Developer",
      image: "/assets/images/KeithHuang.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Jack Clarke",
      role: "Software Developer",
      image: "/assets/images/JackClarke.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Alireza Parvizimosaed",
      role: "Senior Software Designer - AI Integration",
      image: "/assets/images/AlirezaParvizimosaed.png",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Cyrus Mobini",
      role: "Software Engineer - AI Integration",
      image: "/assets/images/CyrusMobini.png",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Prakrut Upadhyay",
      role: "Technical Customer Support Engineer",
      image: "/assets/images/PrakrutUpadhyay.png",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
    {
      name: "Rabih Daoud",
      role: "Business Operations Analyst",
      image: "/assets/images/RabihDaoud.jpg",
      social: {
        github: "https://github.com/s",
        linkedin: "https://linkedin.com/in/s",
      },
    },
  ];

  return (
    <section className="section-wrapper py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="section-decoration">
        <div className="blur-decoration bg-emerald-500 top-0 right-0 animate-glow" />
        <div className="blur-decoration bg-blue-500 bottom-0 left-0 animate-glow delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We're a passionate group of developers and advocates ready to help
            you build amazing event-driven applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm p-4 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400">{member.role}</p>
                </div>
                <div className="flex gap-4">
                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      className="text-slate-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-slate-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
