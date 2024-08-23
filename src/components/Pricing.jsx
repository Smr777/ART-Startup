import Section from "./Section";
import { brainwaveSymbol} from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={brainwaveSymbol}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
        </div>

        <div className="text-center mx-auto">
  <Heading
    className="md:max-w-md lg:max-w-2xl mx-auto"
    tag="Explore our diverse packages and detailed offerings tailored for our clients. Discover the perfect fit for your needs today!"
    title="Schedule a discovery session !"
  />
</div>
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>


      </div>
      <div style={{ height: '1px', backgroundColor: 'white', marginLeft: '40px', marginRight: '40px', orderRadius: '50%', marginTop:'50px'}}></div>
    </Section>
  );
};

export default Pricing;
