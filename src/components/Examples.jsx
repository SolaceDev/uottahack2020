import React from "react";

const Examples = () => {
  const examples = [
    {
      href: "https://github.com/thrillstone/solace-react-paho-example",
      icon: "assets/images/react.svg",
      title: "React with Paho MQTT",
      description:
        "A React application using Paho MQTT that connects to Solace Cloud and publishes a message, receives the message through a subscription and displays it on the screen.",
    },
    {
      href: "https://github.com/gregmeldrum/solace-express-mqtt-example",
      icon: "assets/images/node.svg",
      title: "Node.js and Express with Paho MQTT",
      description:
        "An Expresss server in Node.js that connects to Solace PubSub+ cloud via MQTT. Use REST APIs to subscribe and publish messages.",
    },
    {
      href: "https://github.com/ghaithdallaali/solace-kotlin-android-paho-example",
      icon: "assets/images/android.svg",
      title: "Android app in Kotlin with Paho MQTT",
      description:
        "A Kotlin-based android application using Paho MQTT that connects toSolace Cloud and publishes a message, receives the message through a subscription and displays it on the screen.",
    },
    {
      href: "https://github.com/j-setiawan/solace-python-mqtt-example",
      icon: "assets/images/python.svg",
      title: "A Python application using Paho MQTT",
      description: "A Python application using the PAHO MQTT API.",
    },
    {
      href: "https://github.com/thrillstone/solace-chrome-extension",
      icon: "assets/images/chrome.png",
      title: "Chrome extension using Paho MQTT",
      description:
        "Building a chrome extension and want to use Solace messaging? This repo gives you the blueprint to includ paho in your extension and start receiving messages.",
    },
    {
      href: "https://tutorials.solace.dev/",
      title: "Solace Tutorials",
      description:
        "Want to use a language or client library not in the examples above? Check out the full suite of Solace Tutorials that includes all of our supported client library frameworks and more advanced examples of integrating with the PubSub+ Event Broker.",
    },
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 inline-block">
            Ready-to-Use Examples
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-normal [text-wrap:balance] bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent pb-2">
            Start Building Now
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            Jump-start your project with our curated examples. Each example
            includes full source code and step-by-step instructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Start Guide - Updated */}
          <div className="lg:col-span-3 mb-12">
            <a
              href="https://www.solace.dev/"
              className="group relative block bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-700/50 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
                    Recommended Path
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-200 mb-4">
                  Quick Start Guide
                </h3>
                <p className="text-slate-400 text-lg mb-6">
                  Complete beginner? Start here! This guide will teach you the
                  basics of event-driven architecture and get your first
                  application running.
                </p>
                <div className="flex items-center text-emerald-400 font-medium">
                  <span>Start Learning</span>
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
                </div>
              </div>
            </a>
          </div>

          {/* Existing example cards */}
          {examples.map((example, index) => (
            <a
              key={index}
              href={example.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-700/50 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                {example.icon && (
                  <div className="w-14 h-14 rounded-xl bg-slate-700/50 p-3 group-hover:bg-emerald-900/50 transition-colors duration-500">
                    <img
                      className="w-full h-full object-contain"
                      src={example.icon}
                      alt=""
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                  {example.title}
                </h3>
              </div>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                {example.description}
              </p>
              <div className="flex items-center text-emerald-400 font-medium">
                <span className="text-sm">View Example</span>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
