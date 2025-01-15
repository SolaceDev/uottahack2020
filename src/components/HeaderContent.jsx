import React from 'react';

const HeaderContent = () => {
  return (
    <section className="header-content">
      <div className="container mx-auto px-4">
        <div className="heading-container">
          <img id="team-photo" src="/assets/images/solace.jpg" alt="Solace Team" />
          <div className="heading-text">
            <div className="opacity-text">
              {/* Animated text SVGs */}
              <svg className="outline-fourth" width="100%">
                <text x="0" y="100" style={{ fill: 'none', stroke: 'rgba(255, 255, 255, 0.25)' }}>
                  uOttaHack 6
                </text>
              </svg>
              <svg className="outline-third" width="100%">
                <text x="0" y="100" style={{ fill: 'none', stroke: 'rgba(255, 255, 255, 0.5)' }}>
                  uOttaHack 6
                </text>
              </svg>
              <svg className="outline-second" width="100%" height="100px">
                <text x="0" y="100" style={{ fill: 'none', stroke: 'rgba(255, 255, 255, 0.75)' }}>
                  uOttaHack 6
                </text>
              </svg>
              <svg className="placeholder" width="100%">
                <text x="0" y="100" style={{ fill: 'none', stroke: '#00c895' }}>
                  uOttaHack 6
                </text>
              </svg>
              <svg className="outline-main animated fadeIn" width="100%">
                <text x="0" y="100" style={{ zIndex: 9999, fill: 'none', stroke: '#f37021' }}>
                  uOttaHack 6
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 green-background">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3">
              <h1>You "Otter" Work Here!</h1>
              <p>
                Solace is more than just a place to have fun and connect at work, it's a feeling.
                It's a place where you can bring your full self to work.
              </p>
              <p>
                If you want to do the best work of your career and feel supported every step of the way,
                we encourage you to join us!
              </p>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button>
                    <a href="https://solace.com/careers" target="_blank" rel="noopener noreferrer">Apply Today</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="text-center">
                <img src="assets/images/solly.png" alt="Solly the mascot" height="390" width="240" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;
