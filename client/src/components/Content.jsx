import React from "react";
import Plant from "../images/plant_leaves.png";
import Earth from "../images/earth_heart.png";
import TeamTrees from "../images/teamtrees.png";
import NFTBadges from "../images/nft_badges.png";

function Content() {
  return (
    <div>
      {/* About */}
      <section className="text-gray-600 body-font mt-6" id="about">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <img className="mr-0 md:mr-8" src={Plant} alt="Plant" />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                className="text-gray-600 sm:text-3xl text-2xl title-font font-light mb-1"
                style={{ fontFamily: "sans-serif, serifs" }}
              >
                cryptoroots.xyz
              </h2>
              <p
                className="leading-relaxed text-green-800 text-base font-large text-6xl"
                style={{ fontFamily: "sans-serif, serifs" }}
              >
                Plant <span className="text-green-500">trees</span> with digital{" "}
                <span className="text-green-500">art</span>.
              </p>
            </div>
          </div>
          <h1
            className="sm:text-3xl text-2xl font-light title-font mb-4 text-gray-600 text-center"
            style={{ fontFamily: "sans-serif, serifs" }}
          >
            Charities we support
          </h1>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow text-left mt-6 sm:mt-0">
              <div className="p-4 md:w-1/1">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-24 md:h-36 object-cover object-center text-center"
                    src={TeamTrees}
                    alt="teamtrees"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      #TeamTrees
                    </h1>
                    <p className="leading-relaxed mb-3">
                      YouTubers MrBeast and Mark Rober started #teamtrees in
                      2019 and work with the Arbor Day Foundation to ensure
                      their ambitious tree-planting vision can be met. Every
                      dollar donated gets one tree planted.<b> 20 million+</b>{" "}
                      trees has already been planted in the world and{" "}
                      <b>19 million+</b> trees are in the ground!.
                      <b>
                        {" "}
                        100% of the cryptoroot's funds will be donated to
                        #teamtrees.
                      </b>
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="https://teamtrees.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="ml-0 md:ml-14" src={Earth} alt="Earth" />
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <img
              className="mr-0 md:mr-8"
              src={NFTBadges}
              alt="NFT Badges"
              width={400}
            />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <p
                className="leading-relaxed text-green-800 text-base font-large text-6xl"
                style={{ fontFamily: "sans-serif, serifs" }}
              >
                Climate change <span className="text-green-500">NFTs</span>.
              </p>
              <h2
                className="text-gray-600 sm:text-3xl text-2xl title-font font-light mb-1"
                style={{ fontFamily: "sans-serif, serifs" }}
              >
                Our NFT badges are AI-generated tree art honoring the work of the best artists of all time, including Leonardo da Vinci, Vincent van Gogh, and Pablo Picasso.
              </h2>
            </div>
          </div>
          <h1
            className="sm:text-3xl text-2xl font-light title-font mb-10 text-gray-600 text-center"
            style={{ fontFamily: "sans-serif, serifs" }}
          >
            Benefits
          </h1>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Offset carbon emission
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Show your environmental impact
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Environmental conference tickets
                  </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">
                    Gift plants!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
