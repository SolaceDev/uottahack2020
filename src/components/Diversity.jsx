import React from 'react';

const Diversity = () => {
  return (
    <section id="diversity" className="green-background">
      <div className="examples-top-slant"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12">
            <h1>Diversity, Equity and Inclusion at Solace</h1>
            <p>
              We mean what we say. We believe that diversity in all of its
              forms drives innovation and growth, both in business and in
              life. This is why we strive to create an enriching and safe
              workplace where you can be who you are.
            </p>
            <p>It is only because of you that we can be us.</p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 text-center">
                <div>
                  <strong>Voted 4.7 out of 5</strong>
                </div>
                <a href="https://ca.indeed.com/cmp/Solace-Corporation/reviews" target="_blank" rel="noopener noreferrer">
                  <img height="40" src="/assets/images/indeed.png" alt="Indeed" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="flex items-center h-full">
              <img id="people" src="/assets/images/people.png" alt="Solace People" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-slant"></div>
    </section>
  );
};

export default Diversity;
