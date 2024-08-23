import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const subNavTimeout = useRef(null);

  useEffect(() => {
    // Close navigation and enable scroll when component unmounts (cleanup)
    return () => {
      enablePageScroll();
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (url) => {
    // Handle click on navigation items
    enablePageScroll();
    setOpenNavigation(false);
    if (url.startsWith("#")) {
      // Smooth scroll to section
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavHover = (itemId) => {
    setActiveNavItem(itemId);
    clearTimeout(subNavTimeout.current);
  };

  const handleSubNavHover = () => {
    enablePageScroll();
    setOpenNavigation(true);
  };

  const handleNavLeave = () => {
    subNavTimeout.current = setTimeout(() => {
      setActiveNavItem(null);
    }, 200);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={120} height={60} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleNavHover(item.id)}
                onMouseLeave={handleNavLeave}
              >
                <a
                  href={item.url}
                  onClick={() => handleClick(item.url)}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
                {activeNavItem === item.id && item.subItems && (
                  <div
                    className="absolute left-0 mt-1 bg-n-8 py-2 px-4 rounded-lg shadow-lg hidden lg:block"
                    onMouseEnter={handleSubNavHover}
                    onMouseLeave={() => setActiveNavItem(null)}
                  >
                    {item.subItems.map((subItem, index) => (
                      <React.Fragment key={subItem.id}>
                        {index > 0 && <hr className="border-t border-white my-2" />}
                        <a
                          href={subItem.url}
                          onClick={() => handleClick(subItem.url)}
                          className="block text-n-1 hover:text-color-1"
                        >
                          {subItem.title}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="block lg:hidden" onClick={() => handleClick("#Calendly")}>
              Schedule Discovery!
            </Button>
          </div>
          <HamburgerMenu />
        </nav>

        <Button className="hidden lg:flex" href="#Calendly">
          Schedule Discovery!
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;