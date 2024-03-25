/*import React, { useEffect, useState } from "react";
import videoSources from "../Data/Videos"
import "tailwindcss/tailwind.css";
import { Carousel } from "@material-tailwind/react";
import Header from "../Components/Header";
const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) =>
        prevVideo === 0 ? 1 : prevVideo === 1 ? 2 : 0
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const videoKey = `video-${currentVideo}`;

  return (
    <div>
      <Header />
      <Carousel
        transition={{ duration: 1 }}
        className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden"
      >
        {videoSources.map((item, index) => (
          <div className="h-screen w-full flex items-center justify-center">
            <video
              key={videoKey}
              autoPlay
              loop
              muted
              className="object-cover h-full w-full transform transition-transform"
              style={{ transform: `translateY(0%)` }}
            >
              <source
                src={videoSources[(currentVideo + index) % 3]}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
*/
import sections from "../Data/Videos";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import Header from "../Components/Header";
import "../Assets/style.css";

const gsapInit = () => {
  gsap.registerPlugin(Observer);

  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  const gotoSection = (index, direction) => {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 2.2, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
          /* setCurrentVideo((prevVideo) =>
            prevVideo === 0 ? 1 : prevVideo === 1 ? 2 : 0
          );*/
        },
      });
    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

    currentIndex = index;
  };

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
};

export const Home = () => {
  /* const [currentVideo, setCurrentVideo] = useState(0);
  const videoKey = `video-${currentVideo}`;*/

  useEffect(
    () => gsapInit()

    /*    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) =>
        prevVideo === 0 ? 1 : prevVideo === 1 ? 2 : 0
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []*/
  );

  return (
    <div>
      <Header />
      {sections.map((section, key) => (
        <section>
          <div className="outer">
            <div className="inner">
              <video
                autoPlay
                loop
                muted
                className="object-cover h-full w-full transform transition-transform"
              >
                <source src={section} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
