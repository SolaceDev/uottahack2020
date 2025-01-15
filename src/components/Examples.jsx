import React from 'react';

const Examples = () => {
  const examples = [
    {
      href: "https://github.com/thrillstone/solace-react-paho-example",
      icon: "assets/images/react.svg",
      title: "React with Paho MQTT",
      description: "A React application using Paho MQTT that connects to Solace Cloud and publishes a message, receives the message through a subscription and displays it on the screen."
    },
    {
      href: "https://github.com/gregmeldrum/solace-express-mqtt-example",
      icon: "assets/images/node.svg",
      title: "Node.js and Express with Paho MQTT",
      description: "An Expresss server in Node.js that connects to Solace PubSub+ cloud via MQTT. Use REST APIs to subscribe and publish messages."
    },
    {
      href: "https://github.com/ghaithdallaali/solace-kotlin-android-paho-example",
      icon: "assets/images/android.svg",
      title: "Android app in Kotlin with Paho MQTT",
      description: (
        <>
          A Kotlin-based android application using Paho MQTT that connects to Solace Cloud and publishes a message, 
          receives the message through a subscription and displays it on the screen. Check out
          <a href="https://solace.com/blog/event-driven-kotlin-android-app-mqtt-solace-pubsub/" alt="Event Driven Application in Kotlin">
            {" "}the blog post
          </a>
          {" "}for an even more in-depth explanation!
        </>
      )
    },
    {
      href: "https://github.com/j-setiawan/solace-python-mqtt-example",
      icon: "assets/images/python.svg",
      title: "A Python application using Paho MQTT",
      description: "A Python application using the PAHO MQTT API."
    },
    {
      href: "https://tutorials.solace.dev/",
      title: "Solace Tutorials",
      description: "Want to use a language or client library not in the examples above? Check out the full suite of Solace Tutorials that includes all of our supported client library frameworks and more advanced examples of integrating with the PubSub+ Event Broker."
    },
    {
      href: "https://github.com/thrillstone/solace-chrome-extension",
      icon: "assets/images/chrome.png",
      title: "Chrome extension using Paho MQTT",
      description: "Building a chrome extension and want to use Solace messaging? This repo gives you the blueprint to includ paho in your extension and start receiving messages."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get Started with Our Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <a
              key={index}
              href={example.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                {example.icon && (
                  <img className="w-12 h-12" src={example.icon} alt="" />
                )}
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {example.title}
                </h3>
              </div>
              <p className="text-slate-300">
                {example.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
