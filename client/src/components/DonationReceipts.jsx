import React from "react";

function DonationReceipts() {
  return (
    <div>
      <p className="text-gray-700 text-center mt-14 -mb-6">
        On this page you will find proof of donations in the form of receipts.{" "}
        <a className="text-green-500 hover:text-green-600" href="#footer">
          Subscribe
        </a>{" "}
        to receive donation updates.
      </p>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Rcpt 1
                </span>
                <span className="mt-1 text-gray-500 text-sm">25 Aug 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  #teamtrees
                </h2>
                <p className="leading-relaxed">
                  Donated amount: $xxxx
                  <br />
                  Trees donated: xxxx trees
                  <br />
                  Txn hash: 0xx..
                  <br />
                </p>
                <a
                  className="text-green-500 hover:text-green-600 inline-flex items-center mt-4"
                  href="https://ipfs.infura.io/ipfs/bafybeifm2iw4dn4pgrpdrcuhgyso2hlmwxz4hutd5c4acg2dzaeafj5zqy/Example_donation_receipt.pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donation receipt link
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
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Rcpt 0
                </span>
                <span className="mt-1 text-gray-500 text-sm">25 Jul 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  #teamtrees
                </h2>
                <p className="leading-relaxed">
                  Donated amount: $xxxx
                  <br />
                  Trees donated: xxxx trees
                  <br />
                  Txn hash: 0xx..
                  <br />
                </p>
                <a
                  className="text-green-500 hover:text-green-600 inline-flex items-center mt-4"
                  href="https://ipfs.infura.io/ipfs/bafybeifm2iw4dn4pgrpdrcuhgyso2hlmwxz4hutd5c4acg2dzaeafj5zqy/Example_donation_receipt.pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donation receipt link
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
      </section>
    </div>
  );
}

export default DonationReceipts;
