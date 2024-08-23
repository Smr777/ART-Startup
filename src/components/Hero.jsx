import { useRef, useEffect, useState } from "react";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import { curve, heroBackground, robot } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [isBackgroundVisible, setBackgroundVisibility] = useState(true);

  useEffect(() => {
    // Function to check viewport dimensions and update state
    const handleResize = () => {
      const isSmallerViewport =
        window.innerWidth <= 1040 || window.innerHeight <= 550;
      setBackgroundVisibility(!isSmallerViewport);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6" style={{ color: 'white', textShadow: '1px 0.5px 5px #402AFE' }}>
            Anything Pragmatic is Possible; {` `}
            <span className="inline-block relative">
              Actualize !{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-5xl mx-auto mb-6 text-n-2 lg:mb-8" 
          style={{
              color: 'white',
              textShadow: '2px 4px 8px rgba(0, 0, 0, 0.7), 0 0 10px rgba(0, 0, 0, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Semi-transparent white background
              backdropFilter: 'blur(5px)',
              borderRadius: '15px'
            }}>
            Elevate your life and leadership with accelerated mindset, curated coaching & training that unlocks untapped potential and propels you towards growth, success, purpose, achievement & fulfillment.</p>
          <Button white sectionId="Calendly">
            Get started!
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="COACHING"
                />


                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned speed={73}>
                  <ul className="absolute -left-[7.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={35} height={30} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned speed={73}>
                  <Notification
                    className=" absolute -right-[5rem] bottom-[11rem] w-[20rem] xl:flex"
                    title="Life's Transformed"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          {/* Conditionally render heroBackground based on viewport */}
          {isBackgroundVisible && (
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          )}

          <ScrollParallax isAbsolutelyPositioned speed={73}><BackgroundCircles /></ScrollParallax>
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;