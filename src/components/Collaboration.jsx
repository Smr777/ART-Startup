import { check, loading } from "../assets";
import { collabApps, collabContent,   } from "../constants";

import Section from "./Section";
import { BottomLine} from "./design/Hero";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Generating from "./Generating";

const Collaboration = () => {
  return (
    <Section crosses>
      <div id="Collaboration" className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 text-center md:text-left text-n-1"> {/* Added text-center for center alignment on small screens */}
            Empowering you with Vision & Purpose
          </h2>


          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id} >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5 text-n-1">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-white" style={{ position: 'relative',zIndex:"10"}} >{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
        </div>
        

        <div className="lg:ml-auto xl:w-[36em] mt-80">

          <div className="relative left-1/2 flex w-[33.7rem] aspect-square border border-white rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-white rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full relative">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={loading}
                    width={48}
                    height={48}
                    alt="brainwave"
                    />          
                </div>
              </div>
            </div><BottomLine/>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-white rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
              


            <LeftCurve />
            <RightCurve />
          </div>
          <div className="text-center mt-40">
         <p className="text-white text-sm " style={{ fontSize: '18px', textDecoration: 'bold', marginBottom:'70px' }}>At the core of my philosophy lies the belief that anything pragmatic is possible! Let's embark on a journey of transformation and actualize dreams & aspirations into reality.</p>
          </div>
        </div>
      </div>
      
      {/* <div className="white-line" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 85px)', height: '1px', backgroundColor: 'white', display: 'none' }}></div> */}
      
    </Section>
  );
};


export default Collaboration;

