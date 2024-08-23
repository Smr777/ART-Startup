import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div id="Training" className="container md:pb-10">
    <div className="text-center mx-auto">
  <Heading
    className="md:max-w-md lg:max-w-2xl mx-auto"
    title="Uplift Your Business to New Heights: Premium Training Solutions"
  />
  <Heading
    className="md:max-w-md lg:max-w-2xl mx-auto"
    tag="Discover a world of bespoke training solutions meticulously crafted to perfectly align with the distinct requirements of our valued clients"
  />
</div>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] ">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full ">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8 ">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div id="Training1" className="mb-10 -my-10 -mx-15 mt-1 ">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p id="Training2" className="body-2 text-n-1">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#Contact">Contact Us</Button>
      </div>
    </div>

    <div style={{ height: '1px', backgroundColor: 'white', marginLeft: '40px', marginRight: '40px', orderRadius: '50%', marginTop:'50px'}}></div>
  </Section>
);

export default Roadmap;
