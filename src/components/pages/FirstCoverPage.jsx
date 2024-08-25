import React, { useEffect, useRef } from "react";
import { mxKeyframe, optionKey, xKeyframe, yKeyframe } from "../keyFrame";

const FirstCoverPage = ({ startPageChange, okay }) => {
  const openRef = useRef();
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();
  const sevenRef = useRef();
  const eightRef = useRef();
  const nineRef = useRef();

  const keyEffect = new KeyframeEffect(
    openRef.current,
    [{ transform: "translateX(0%)" }, { transform: "translateX(250%)" }],
    { duration: 1000, fill: "both", easing: "ease-in-out" }
  );

  const openAnimation = new Animation(keyEffect);

  const animationStart = () => {
    openAnimation.play();
  };



  const oneKeyEffect = new KeyframeEffect(oneRef.current, xKeyframe, optionKey);

  const twoKeyEffect = new KeyframeEffect(twoRef.current, xKeyframe, optionKey);

  const threeKeyEffect = new KeyframeEffect(
    threeRef.current,
    xKeyframe,
    optionKey
  );

  const fourKeyEffect = new KeyframeEffect(
    fourRef.current,
    yKeyframe,
    optionKey
  );

  const fiveKeyEffect = new KeyframeEffect(
    fiveRef.current,
    yKeyframe,
    optionKey
  );
  const sixKeyEffect = new KeyframeEffect(sixRef.current, yKeyframe, optionKey);
  const sevenKeyEffect = new KeyframeEffect(
    sevenRef.current,
    mxKeyframe,
    optionKey
  );
  const eightKeyEffect = new KeyframeEffect(
    eightRef.current,
    mxKeyframe,
    optionKey
  );
  const nineKeyEffect = new KeyframeEffect(
    nineRef.current,
    mxKeyframe,
    optionKey
  );

  const oneAnimation = new Animation(oneKeyEffect);
  const twoAnimation = new Animation(twoKeyEffect);
  const threeAnimation = new Animation(threeKeyEffect);
  const fourAnimation = new Animation(fourKeyEffect);
  const fiveAnimation = new Animation(fiveKeyEffect);
  const sixAnimation = new Animation(sixKeyEffect);
  const sevenAnimation = new Animation(sevenKeyEffect);
  const eightAnimation = new Animation(eightKeyEffect);
  const nineAnimation = new Animation(nineKeyEffect);

  openAnimation.addEventListener("finish", () => {
    startPageChange();
    setTimeout(() => {
      openAnimation.cancel();
      oneAnimation.cancel();
      twoAnimation.cancel();
      threeAnimation.cancel();
      fourAnimation.cancel();
      fiveAnimation.cancel();
      sixAnimation.cancel();
      sevenAnimation.cancel();
      eightAnimation.cancel();
      nineAnimation.cancel();
    }, 300);
  });

  useEffect(() => {
    if (!okay) {
      setTimeout(() => {
        fiveAnimation.play();
      }, 1000);
      setTimeout(() => {
        threeAnimation.play();
      }, 1200);
      setTimeout(() => {
        sevenAnimation.play();
      }, 1600);
    }
  }, [okay]);

  threeAnimation.addEventListener("finish", () => {
    twoAnimation.play();
  });
  twoAnimation.addEventListener("finish", () => {
    oneAnimation.play();
  });
  fiveAnimation.addEventListener("finish", () => {
    fourAnimation.play();
  });
  fourAnimation.addEventListener("finish", () => {
    sixAnimation.play();
  });
  sevenAnimation.addEventListener("finish", () => {
    eightAnimation.play();
  });
  eightAnimation.addEventListener("finish", () => {
    nineAnimation.play();
  });

  return (
    <div className=" w-full h-full relative px-5 flex justify-between items-center ">
      <div className=" bg-gradient-to-r from-sky-200 to-sky-[#3f61b6] rounded-lg absolute bottom-10 w-full left-0 h-12 flex items-center  ">
        <div
          ref={openRef}
          onClick={animationStart}
          className=" relative left-2 flex shadowB "
        >
          <button className=" border font-bold font-heading  border-[#3f61b6] bg-[#3f61b6] px-2 py-1 h-8 ">
            Open
          </button>
          <div className=" border-[16px] h-8 w-8 border-transparent border-s-[#3f61b6] "></div>
        </div>
      </div>

      <div className=" mx-auto mb-10 ">
        <span
          ref={oneRef}
          className=" opacity-0 hover:-translate-y-[20px] duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#a8ffde] textShadow "
        >
          {" "}
          P
        </span>
        <span
          ref={twoRef}
          className=" opacity-0 hover:-translate-y-[20px] duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#c8eded] textShadow "
        >
          {" "}
          o
        </span>
        <span
          ref={threeRef}
          className=" opacity-0 hover:-translate-y-[20px] duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#fbffa8] textShadow "
        >
          {" "}
          r
        </span>
        <span
          ref={fourRef}
          className=" opacity-0 hover:-translate-y-[20px]  duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#a8f9ff] textShadow "
        >
          {" "}
          t
        </span>
        <span
          ref={fiveRef}
          className=" opacity-0 hover:-translate-y-[20px]   duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#a8ffa9] textShadow "
        >
          {" "}
          f
        </span>
        <span
          ref={sixRef}
          className=" opacity-0 hover:-translate-y-[20px]   duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#c8eded] textShadow "
        >
          {" "}
          o
        </span>
        <span
          ref={sevenRef}
          className=" opacity-0 hover:-translate-y-[20px]  duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[rgb(227,230,255)] textShadow "
        >
          {" "}
          l
        </span>
        <span
          ref={eightRef}
          className=" opacity-0 hover:-translate-y-[20px]  duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#ec6dff] textShadow "
        >
          {" "}
          i
        </span>
        <span
          ref={nineRef}
          className=" opacity-0 hover:-translate-y-[20px]  duration-200 hover:shadowH font-heading inline-block font-[900] text-6xl text-[#c8eded] textShadow "
        >
          {" "}
          o
        </span>
      </div>
    </div>
  );
};

export default FirstCoverPage;
