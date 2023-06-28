import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledNavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="border-b-2 border-transparent px-2 pb-1 text-sm  uppercase text-gray-200 transition-all duration-300 hover:border-yellow-400 hover:text-white"
    >
      {children}
    </a>
  );
};

const descriptionCards = [
  {
    title: "Expert Installation",
    description:
      "Our skilled team of siding installers has the expertise to handle projects of any size and complexity. With meticulous attention to detail, we guarantee a flawless installation that exceeds your expectations.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer competitive pricing on all of our siding services. We also provide flexible financing options to make your siding project more affordable than ever.",
  },
  {
    title: "Free Consultations",
    description:
      "We offer free consultations to help you determine the best siding solution for your home. Our team will work with you to find the perfect siding material, color, and style to suit your needs.",
  },
];

enum EstimatorStep {
  InputZipCode,
  SquareFootage,
  Result,
}

export default function Home() {
  const [estimatorStep, setEstimatorStep] = useState<EstimatorStep>(
    EstimatorStep.InputZipCode
  );
  const [sidingType, setSidingType] = useState("");
  const [squareFootage, setSquareFootage] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeStatus, setZipCodeStatus] = useState<
    "loading" | "valid" | "invalid"
  >("valid"); // 'loading' | 'valid' | 'invalid

  const [price, setPrice] = useState(0);

  const handleSidingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSidingType(event.target.value);
  };

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const handleZipCodeSubmit = () => {
    // Perform zip code validation
    // If zip code is valid, set estimatorStep to EstimatorStep.SquareFootage
  };

  const handleSquareFootageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSquareFootage(Number(event.target.value));
  };

  const calculatePrice = () => {
    // Perform price calculation based on sidingType and squareFootage
    // Set the calculated price using setPrice
  };

  const handleEmailClick = () => {
    // Handle email click event
  };

  const handleEstimateClick = () => {
    // Handle in-person estimate click event
  };

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (!imageElement) return;

    imageElement.style.transform = "scale(1)";
  }, []);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />

        {/* sets the theme color and background color for browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-[#17171E]">
        <nav className="flex w-full max-w-5xl items-center justify-between rounded-md px-4 py-4 xl:px-0">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src="/nav_logo.png" alt="r&b siding" className="h-auto w-24" />
          </div>

          <ul className="hidden items-center justify-center gap-8 font-medium sm:flex">
            <li>
              <StyledNavLink href="#about">About</StyledNavLink>
            </li>
            <li>
              <StyledNavLink href="#estimator">Estimator</StyledNavLink>
            </li>
            <li>
              <StyledNavLink href="#contact">Contact</StyledNavLink>
            </li>
          </ul>

          {/* Hambuger Menu */}
          <div className="flex sm:hidden">
            <button className="mobile-menu-button outline-none">
              <svg
                className=" h-8 w-8 text-white"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu hidden"></div>
        </nav>

        {/* banner image */}

        <div className="relative flex aspect-auto h-[500px] w-full overflow-hidden">
          <img
            src="/banner_7.png"
            alt="r&b siding"
            className="absolute inset-0 h-full w-full scale-150 object-cover transition-all duration-[15s] ease-out"
            ref={imageRef}
          />

          {/* Shadow bg from dark to transparent, left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col items-start justify-center px-4 xl:px-0">
            {/* gradient from gold2 to gold */}
            <h1 className="bg-gradient-to-r from-yellow-500 to-lightGold bg-clip-text text-2xl font-bold uppercase text-transparent sm:text-3xl">
              Turn Your Home Into a Work of Art
            </h1>
            <p className="mt-3 max-w-xl text-base font-medium uppercase text-white sm:text-lg">
              Whether replacing old siding or installing new siding for the
              first time, we have the knowledge that comes with siding thousands
              of homes throughout Western Washington.
            </p>

            <button
              className="mt-4 rounded-sm bg-yellow-300 px-8 py-3 text-lg font-bold text-black
            transition-all duration-300 hover:bg-yellow-400"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>

        <div className="container mx-auto flex max-w-5xl flex-col gap-10 px-4 py-20 md:flex-row xl:px-0">
          {descriptionCards.map((card, i) => (
            <div key={i} className="flex max-w-md flex-col gap-1">
              <h2 className="text-xl font-semibold uppercase text-yellow-400">
                {card.title}
              </h2>
              <p className="mt-1 font-medium text-gray-100">
                {card.description}
              </p>

              <div className="mt-3 h-2 w-[55%] bg-yellow-300"></div>
            </div>
          ))}
        </div>

        {/* small height decorative element with half lightGold and other half lightGold, slash from top to bottom left in the middle  */}
        <div className="relative h-14 w-full bg-gradient-to-r from-[#FFC107] via-yellow-500 to-yellow-100">
          <div
            className="absolute right-0 top-0 h-full w-[40%]"
            style={{
              background: "linear-gradient(to bottom right, #fff307, #FFC107)",
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        {/* white bg container */}
        <div className="w-full bg-white">
          <div className="container mx-auto flex max-w-5xl flex-col px-4 py-20 xl:px-0">
            <h2 className="text-3xl font-bold uppercase text-black">
              Labor Estimator
            </h2>
            <p className="font-medium text-black">
              Get a rough estimate of our labor costs for your siding project.
            </p>

            {/* Start with a zip code step (to calculate local tax rates */}
            <div className="mt-10">
              {estimatorStep === EstimatorStep.InputZipCode && (
                <>
                  <h3 className="text-xl font-semibold uppercase text-black">
                    Enter Your Zip Code
                  </h3>

                  <div className="mt-3 flex items-center gap-4">
                    <input
                      type="text"
                      className="rounded-md bg-gray-100 px-4 py-2 text-gray-800"
                      placeholder="Enter Zip Code"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                    />
                    <button
                      className="rounded-md bg-yellow-300 px-4 py-2 font-bold text-gray-900
                transition-all duration-300 hover:bg-yellow-400"
                      onClick={handleZipCodeSubmit}
                    >
                      Submit
                    </button>
                  </div>

                  {/* Show error message if zip code is invalid */}
                  {zipCodeStatus === "invalid" && (
                    <p className="font-medium text-red-500">Invalid Zip Code</p>
                  )}

                  {/* Show loading spinner if loading */}
                  {zipCodeStatus === "loading" && (
                    <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-yellow-300"></div>
                  )}

                  {/* Show success message if zip code is valid */}
                  {zipCodeStatus === "valid" && (
                    <p className="font-medium text-green-500">
                      Zip code successfully submitted!
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* apply a circular bg gradiant white */}
        {/* <div className="container gap-10 py-20">
          {estimatorStep === EstimatorStep.SelectType && (
            <div>
              s
              <h2 className="mb-4 text-3xl font-bold text-white">
                Select Siding Type
              </h2>
              <select
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-800"
                value={sidingType}
                onChange={handleSidingTypeChange}
              >
                <option value="">-- Select --</option>
                <option value="New Installation">New Installation</option>
                <option value="Repair Siding">Repair Siding</option>
                <option value="Replace Siding">Replace Siding</option>
              </select>
              <button
                className="mt-4 rounded-md bg-gold px-4 py-2 text-gray-900"
                disabled={!sidingType}
                onClick={() => setEstimatorStep(EstimatorStep.SquareFootage)}
              >
                Next
              </button>
            </div>
          )}

          {estimatorStep === EstimatorStep.SquareFootage && (
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Enter Square Footage
              </h2>
              <input
                type="number"
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-800"
                value={squareFootage}
                onChange={handleSquareFootageChange}
              />
              <button
                className="mt-4 rounded-md bg-gold px-4 py-2 text-gray-900"
                disabled={!squareFootage}
                onClick={calculatePrice}
              >
                Calculate
              </button>
            </div>
          )}

          {estimatorStep === EstimatorStep.Result && (
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Estimation Result
              </h2>
              <p className="text-white">Price: ${price}</p>
              <div className="mt-4 flex gap-4">
                <button
                  className="rounded-md bg-gold px-4 py-2 text-gray-900"
                  onClick={handleEmailClick}
                >
                  Email With Details
                </button>
                <button
                  className="rounded-md bg-gold px-4 py-2 text-gray-900"
                  onClick={handleEstimateClick}
                >
                  In Person Estimate
                </button>
              </div>
            </div>
          )}
        </div> */}
      </main>
    </>
  );
}

// R&B Siding is a family-owned and operated siding company serving
// the greater Seattle area. We specialize in siding installation,
// repair, and replacement for residential and commercial properties.
// With over 20 years of experience, we have the expertise to handle
// any siding project, big or small. Our team is committed to
// providing the highest quality workmanship and customer service. We
// pride ourselves on our attention to detail and our ability to
// exceed our customers’ expectations. We offer free consultations to
// help you determine the best siding solution for your home. Our
// team will work with you to find the perfect siding material,
// color, and style to suit your needs. We also offer competitive
// pricing and flexible financing options to make your siding project
// more affordable than ever. Contact us today to schedule your free
// consultation!
