import React, { useState } from "react";

const IranSlide = [
  {
    para1: "US–Israel military operation against Iran: Are markets on edge?",
    para2:
      "Oil prices have surged, and more volatility could be in store for markets as the conflict continues to unfold.",
    imageUrl:
      "https://www.jpmorgan.com/content/dam/jpmorgan/images/xlob/homepage/iran-markets.jpg",
  },
  {
    para1: "2026 outlooks and forecasts",
    para2:
      "Dive into in-depth outlooks and forecasts from our analysts and strategists.",
    imageUrl:
      "https://www.jpmorgan.com/content/dam/jpmorgan/images/xlob/homepage/outlook-hub-800x800.jpg",
  },
  {
    para1: "1Q 2026 Guide to the Markets",
    para2:
      "This quarter’s guide explores the outlook for the economy and policy.",
    imageUrl:
      "https://www.jpmorgan.com/content/dam/jpmorgan/images/xlob/homepage/gtm-800x800.jpg",
  },
];

const Home = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl w-full grid md:grid-cols-2 relative">
          {/* Text Section */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {IranSlide[slide].para1}
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {IranSlide[slide].para2}
            </p>

            <button className="bg-[#0a2240] text-white px-6 py-2 rounded-md w-fit hover:bg-blue-900 transition">
              READ MORE
            </button>
          </div>

          {/* Image Section */}
          <div>
            <img
              src={IranSlide[slide].imageUrl}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Slider Navigation */}
          <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t">
            <div className="flex divide-x divide-gray-300 text-sm">
              <button
                onClick={() => setSlide(0)}
                className={`flex-1 p-4 text-left hover:bg-gray-100 ${
                  slide === 0 ? "font-semibold text-[#0a2240]" : ""
                }`}
              >
                US–Israel military operation against Iran: Are markets on edge?
              </button>

              <button
                onClick={() => setSlide(1)}
                className={`flex-1 p-4 text-left hover:bg-gray-100 ${
                  slide === 1 ? "font-semibold text-[#0a2240]" : ""
                }`}
              >
                2026 outlooks and forecasts
              </button>

              <button
                onClick={() => setSlide(2)}
                className={`flex-1 p-4 text-left hover:bg-gray-100 ${
                  slide === 2 ? "font-semibold text-[#0a2240]" : ""
                }`}
              >
                1Q 2026 Guide to Markets
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl w-full grid md:grid-cols-2">

    {/* Text Section */}
    <div className="p-10 flex flex-col justify-center">
      
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug max-w-xl">
        Our team, clients, communities and shareholders are at the center of everything we do
      </h1>

      <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-lg">
        Through our tailored solutions spanning investment and commercial banking, 
        payments processing and asset management, we're relentlessly focused on serving 
        our clients globally and driving sustainable impact for our communities.
      </p>

      <button className="bg-[#0a2240] text-white px-6 py-3 rounded-md w-fit hover:bg-blue-900 transition">
        Learn More About Us
      </button>

    </div>

    {/* Image Section */}
    <div className="h-[300px] md:h-auto">
      <img
        src="https://www.jpmorgan.com/content/dam/jpmorgan/images/xlob/homepage/GettyImages-912614070-1140x810px.jpg"
        alt="team"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>
    </div>
  );
};

export default Home;
