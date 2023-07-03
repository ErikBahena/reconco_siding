import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import zipcodes from "zipcodes";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledNavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="border-b-2 border-transparent px-2 pb-1 text-sm  uppercase text-gray-200 transition-all duration-300 hover:border-yellow-400 hover:text-white"
      scroll={false}
    >
      {children}
    </Link>
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

// array of estimator steps
const estimatorSteps = [
  EstimatorStep.InputZipCode,
  EstimatorStep.SquareFootage,
  EstimatorStep.Result,
];

export default function Home() {
  const [estimatorStep, setEstimatorStep] = useState<EstimatorStep>(
    EstimatorStep.InputZipCode
  );

  const [sidingType, setSidingType] = useState("");
  const [squareFootage, setSquareFootage] = useState(0);
  const [zipCode, setZipCode] = useState("");
  const [zipCodeStatus, setZipCodeStatus] = useState<
    "loading" | "valid" | "invalid" | ""
  >(""); // 'loading' | 'valid' | 'invalid

  const [price, setPrice] = useState(0);

  const handleSidingTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSidingType(event.target.value);
  };

  //   one liner
  const isZipCodeValid = (zipCode: string) =>
    /^[0-9]{0,5}$/.test(zipCode) && zipcodes.lookup(zipCode) !== undefined;

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // filter only for numbers upto 5 digits
    const value = event.target.value;
    const isValid = isZipCodeValid(value);

    if (isValid) {
      setZipCodeStatus("valid");
    } else {
      setZipCodeStatus("invalid");
    }

    if (value.length > 5) {
      return;
    }

    setZipCode(value);
  };

  const handleZipCodeSubmit = () => {
    const isValid = isZipCodeValid(zipCode);

    if (isValid) {
      setZipCodeStatus("valid");
      setEstimatorStep(EstimatorStep.SquareFootage);
    } else {
      setZipCodeStatus("invalid");
      return;
    }

    if (zipCode.length > 5) {
      setZipCodeStatus("invalid");
    }
  };

  const handleSquareFootageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSquareFootage(Number(event.target.value));
  };

  const handleSquareFootageSubmit = () => {
    setEstimatorStep(EstimatorStep.Result);
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
        <title>R&B Siding</title>
        {/* good seo description */}
        <meta
          name="description"
          content="For over 20 years, R&B Siding has been providing high-quality siding installation services to homeowners throughout Western Washington. We are a family-owned and operated business that takes pride in our workmanship and customer service."
        />
        <link rel="icon" href="/favicon.png" />

        {/* sets the theme color and background color for browsers */}
        <meta name="theme-color" content="#17171E" />
        <meta name="msapplication-navbutton-color" content="#17171E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#17171E" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-[#17171E]">
        <nav className="flex w-full max-w-5xl items-center justify-between rounded-md px-6 py-4 xl:px-0">
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

        {/* calc height as  */}
        <div className="relative flex h-[500px] w-full overflow-hidden md:h-[550px]">
          <Image
            src="/banner_7.png"
            alt="r&b siding"
            className="absolute inset-0 h-full w-full scale-150 object-cover transition-all duration-[15s] ease-out"
            ref={imageRef}
            priority
            fill
            quality={100}
          />

          {/* Shadow bg from dark to transparent, left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col items-start justify-center px-6 xl:px-0">
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

        <div className="container mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 md:flex-row xl:px-0">
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

        <DecorativeDivider />

        <div className="w-full bg-white" id="estimator">
          <div className="container mx-auto flex max-w-5xl flex-col px-6 py-20 xl:px-0">
            <h2 className="text-xl font-bold uppercase text-black md:text-2xl">
              Labor Estimator
            </h2>
            <p className="font-medium text-gray-600">
              Get a rough estimate of our labor costs for your siding project.
            </p>

            <div className="flex w-full flex-col justify-between py-3 md:flex-row md:gap-4">
              {[...estimatorSteps].map((step) => {
                if (step === 0)
                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-2 text-lg font-semibold hover:cursor-pointer
                    ${
                      estimatorStep === EstimatorStep.InputZipCode
                        ? "text-gray-700"
                        : "text-gray-400"
                    }`}
                      onClick={() =>
                        setEstimatorStep(EstimatorStep.InputZipCode)
                      }
                    >
                      1. Zip Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                  );
                if (step === 1)
                  return (
                    <div
                      key={step}
                      className={`flex gap-2 text-lg font-semibold hover:cursor-pointer
                    ${
                      estimatorStep === EstimatorStep.SquareFootage
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                    `}
                      onClick={() =>
                        setEstimatorStep(EstimatorStep.SquareFootage)
                      }
                    >
                      2. Square Footage
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                  );

                if (step === 2)
                  return (
                    <div
                      key={step}
                      className={`flex gap-2 text-lg font-semibold hover:cursor-pointer
                    ${
                      estimatorStep === EstimatorStep.Result
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                    `}
                      onClick={() => setEstimatorStep(EstimatorStep.Result)}
                    >
                      3. Claim Estimate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                  );
              })}
            </div>

            {/* Start with a zip code step (to calculate local tax rates */}
            <div className="rounded-md px-4 py-6 shadow-md md:mt-10">
              {estimatorStep === EstimatorStep.InputZipCode && (
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  {/* Show a map of the zip code area */}
                  <div className="order-1 flex-1 md:order-none">
                    <iframe
                      title="map"
                      src={`https://www.google.com/maps?q=${zipCode}&output=embed&z=9&fullscreencontrol=0`}
                      className="aspect-video w-full rounded-md"
                    ></iframe>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold uppercase text-gray-800">
                      Enter Your Zip Code
                    </h3>

                    <p className="text-sm font-medium text-gray-400">
                      Used to calculate local tax rates
                    </p>

                    <input
                      type="number"
                      className={`mt-2 rounded border-2 bg-gray-100 px-4
                      py-2 text-gray-800
                      ${
                        zipCodeStatus === "valid"
                          ? "border-green-500"
                          : "border-transparent"
                      }
                      ${
                        zipCodeStatus === "invalid"
                          ? "border-red-500"
                          : "border-transparent"
                      }
                      ${
                        zipCodeStatus === "valid"
                          ? "focus:border-green-500 focus:outline-none"
                          : ""
                      }
                      ${
                        zipCodeStatus === "invalid"
                          ? "focus:border-red-500 focus:outline-none"
                          : ""
                      }
                      `}
                      placeholder="Enter Zip Code"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                    />
                    <button
                      className="mt-3 rounded-sm bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-400 disabled:bg-yellow-300 disabled:text-gray-900 disabled:opacity-50 disabled:hover:bg-yellow-300 disabled:hover:text-gray-900
                "
                      onClick={handleZipCodeSubmit}
                      disabled={zipCodeStatus === "invalid"}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {estimatorStep === EstimatorStep.SquareFootage && (
                <>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="order-1 flex flex-1 md:order-none">
                      <Image
                        src="/estimator_1.png"
                        alt="estimator"
                        className="mx-auto aspect-square h-auto w-3/4 rounded-md object-cover"
                        width={700}
                        height={700}
                        draggable={false}
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h3 className="text-xl font-semibold uppercase text-gray-800">
                        Enter Square Footage
                      </h3>

                      <p className="text-sm font-medium text-gray-400">
                        Used to calculate the amount of materials needed
                      </p>

                      <div className="text-5xl font-bold text-gray-800">
                        {numberWithCommas(squareFootage)}

                        <span className="text-2xl font-medium text-gray-400">
                          {" "}
                          sqft
                        </span>
                      </div>

                      <input
                        type="range"
                        min={0}
                        max={10000}
                        step={100}
                        value={squareFootage}
                        onChange={handleSquareFootageChange}
                        className="mt-4 h-2 w-full appearance-none rounded-sm bg-gray-200 focus:outline-none"
                      />

                      <button
                        className="mt-3 w-full rounded-sm bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-400 disabled:bg-yellow-300 disabled:text-gray-900 disabled:opacity-50 disabled:hover:bg-yellow-300 disabled:hover:text-gray-900
                "
                        onClick={handleSquareFootageSubmit}
                        disabled={squareFootage === 0}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}

              {estimatorStep === EstimatorStep.Result && (
                <>
                  <h3 className="text-xl font-semibold uppercase text-gray-800">
                    Estimation Result
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>

        <DecorativeDivider gray />
        <div className="relative w-full bg-[#17171E]" id="gallery">
          <div className="container z-10 mx-auto flex max-w-5xl flex-col px-6 py-20 xl:px-0">
            <h2 className="z-20 text-xl font-bold uppercase text-white md:text-2xl">
              Our Work
            </h2>
            <p className="z-20 font-medium text-gray-400">
              See some of our recent projects.
            </p>

            {/* responsive grid of lazy images */}
            <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* iterate over an array from 1 to 8 but in random order */}
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className="relative aspect-square shadow-xl">
                  <Image
                    key={i}
                    src={`/gallery/gallery_${i + 1}.png`}
                    alt="gallery image"
                    className="aspect-square h-full w-full rounded-sm object-cover  transition-all duration-300 hover:scale-105 hover:cursor-zoom-in
                    lg:hover:opacity-90"
                    draggable={false}
                    // lazy load images
                    priority={false}
                    fill
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Create the footer for this website with the right styling to match the site */}
      <footer className="bg-[#1A1A22] py-10">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <img src="/nav_logo.png" alt="r&b siding" className="h-auto w-24" />
          <p className="max-w-md px-6 text-center text-gray-400">
            R&amp;B Siding is a reputable siding company serving Western
            Washington. We specialize in siding installation and replacement.
            Our team is dedicated to providing top-notch services to our
            customers.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white transition-all duration-300 hover:text-yellow-400"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white transition-all duration-300 hover:text-yellow-400"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} R&amp;B Siding. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

interface DecorativeDividerProps {
  gray?: boolean;
}

const DecorativeDivider = ({ gray }: DecorativeDividerProps) => {
  return (
    <div className="relative h-14 w-full bg-gradient-to-r from-[#FFC107] via-yellow-500 to-yellow-100">
      <div
        className="absolute right-0 top-0 h-full w-[40%]"
        style={{
          background: "linear-gradient(to bottom right, #fff307, #FFC107)",
          clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>
    </div>
  );
};

// function that takes in a number and returns the numbe with commas using new Intl.NumberFormat
function numberWithCommas(x: number) {
  return new Intl.NumberFormat().format(x);
}
