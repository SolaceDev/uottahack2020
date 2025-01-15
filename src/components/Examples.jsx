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
      href: "https://tutorials.solace.dev/",
      title: "Solace Tutorials",
      description:
        "Want to use a language or client library not in the examples above? Check out the full suite of Solace Tutorials that includes all of our supported client library frameworks and more advanced examples of integrating with the PubSub+ Event Broker.",
    },
    {
      href: "https://github.com/thrillstone/solace-chrome-extension",
      icon: "assets/images/chrome.png",
      title: "Chrome extension using Paho MQTT",
      description:
        "Building a chrome extension and want to use Solace messaging? This repo gives you the blueprint to includ paho in your extension and start receiving messages.",
    },
  ];

  return (
    <section className="section-wrapper py-24 bg-slate-900">
      <div className="section-decoration">
        <div className="blur-decoration bg-emerald-500 top-0 right-0 opacity-5" />
        <div className="blur-decoration bg-blue-500 bottom-0 left-0 opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Start Building Today
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Jump start your project with our ready-to-use examples and tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <a
              key={index}
              href={example.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link group bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                {example.icon && (
                  <div className="w-12 h-12 rounded-lg bg-slate-700/50 p-2 group-hover:bg-emerald-900/50 transition-colors">
                    <img
                      className="w-full h-full object-contain"
                      src={example.icon}
                      alt=""
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {example.title}
                </h3>
              </div>
              <p className="text-slate-400">{example.description}</p>
              <div className="mt-4 flex items-center text-emerald-400 font-medium">
                <span className="text-sm">View Example</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
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
