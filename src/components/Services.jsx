import Section from "./Section";
// import Heading from "./Heading";
import { BottomLine} from "./design/Hero";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Button from "./Button";


const Services = () => {
  return (
    <Section id="how-to-use">
      <div id="Coaching" className="container">
        {/* <Heading
          title="Unlock Your Potential: Discover the Power of Life and Leadership Coaching"
          text="Coaching, as defined by the International Coach Federation (ICF), is more than just a process—it's a transformative journey. By partnering with clients in a thought-provoking and creative dialogue, coaching inspires individuals to tap into their personal and professional reservoirs, unleashing untapped sources of imagination, productivity, and leadership. Think of coaching as a versatile tool, a means to various ends. Through coaching, individuals can conquer challenges, discover latent potentials, and gain fresh perspectives that fuel resourcefulness. This collaborative process empowers clients to drive towards their personal and professional development goals, accelerating growth and productivity."
          
        /> */}

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto h-[600px]">
              <h4 className="h4 mb-4">Coaching Services</h4>
              <p className="body-2 mb-[1rem] text-n-1">
              Our diverse coaching specializations are expertly tailored to meet the unique needs of our clients.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <Button href="#Calendly" >Schedule Free Discovery Session</Button>
            </div>
            
          </div>


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-7 text-n-1">Discover the Power of Life and Leadership Coaching</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                According to the International Coach Federation (ICF) coaching is a dynamic partnership that ignites creativity and empowers individuals to unlock their personal and professional excellence. Through this journey, new realms of imagination, productivity, and leadership emerge, unveiling pathways to success previously unseen.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">

                <p className="body-2 mb-[2rem] text-n-1">
                Coaching serves as a catalyst for growth—a versatile tool with boundless possibilities. It empowers individuals to conquer obstacles, tap into hidden reservoirs of potential, and gain fresh perspectives that fuel resourcefulness. By aligning personal and professional aspirations, coaching propels individuals toward their optimal performance, fostering accelerated growth and heightened productivity.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={48} height={36} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
      <BottomLine/>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
