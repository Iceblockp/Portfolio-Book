import React, { useEffect, useState } from "react";

import { playPage, playPageFlip } from "../components/function/audio";
import { ContactMe, Education, FirstCoverPage, LastCover, LatestProject, MoreProject, MySkills, ProfilePage, ProjectFour, ProjectOne, ProjectThree, WorkExperience } from "../components/pages";

const HomePage = () => {
  const [restart, setRestart] = useState(true);
  const [page, setPage] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    start: true,
    end: true,
  });

  const restartHandle = () => {
    setRestart(!restart);
    playPageFlip()
  }


  const firstTurn = () => {
    setPage(pre => ({
      first: false,
      second: false,
      third: false,
      fourth: false,
      start: false,
      end: false
    }))
    playPageFlip()
  };

  const contactMe = () => {
    setPage({
      first: true,
      second: true,
      third: true,
      fourth: true,
      start: true,
      end: false,
    })
    playPageFlip()
  }

  useEffect(() => {
    setTimeout(() => {
      firstTurn();
    }, 1000);
  }, [restart])


  const pageChange = () => {
    setPage((pre) => ({ ...pre, first: !pre.first }));
    if (page.start) {
      setTimeout(() => {
        playPage();
      }, 300);
    } else {
      setTimeout(() => {
        playPage();
      }, 900);
    }
  };
  const SecondPageChange = () => {
    setPage((pre) => ({ ...pre, second: !pre.second }));
    if (page.second) {
      setTimeout(() => {
        playPage();
      }, 300);
    } else {
      setTimeout(() => {
        playPage();
      }, 500);
    }
  };
  const thirdPageChange = () => {
    setPage((pre) => ({ ...pre, third: !pre.third }));
    if (page.start) {
      setTimeout(() => {
        playPage();
      }, 300);
    } else {
      setTimeout(() => {
        playPage();
      }, 800);
    }
  };
  const fourthPageChange = () => {
    setPage((pre) => ({ ...pre, fourth: !pre.fourth }));
    if (page.start) {
      setTimeout(() => {
        playPage();
      }, 300);
    } else {
      setTimeout(() => {
        playPage();
      }, 1000);
    }
  };
  const startPageChange = () => {
    setPage((pre) => ({ ...pre, start: !pre.start }));
    if (page.start) {
      setTimeout(() => {
        playPage();
      }, 600);
    } else {
      setTimeout(() => {
        playPage();
      }, 300);
    }
  };
  const endPageChange = () => {
    setPage((pre) => ({ ...pre, end: !page.end }));
    if (page.start) {
      setTimeout(() => {
        playPage();
      }, 300);
    } else {
      setTimeout(() => {
        playPage();
      }, 1300);
    }
  };

  return (
    <div className=" w-full h-screen bg-[#040111]">
      <div className=" w-full h-full flex justify-center items-center">
        <div className=" relative threeD w-[600px] h-[400px] threeD scale-[0.6] sm:scale-100 lg:scale-125  translate-x-[20%] sm:translate-x-0  rounded-[10px] ">
          <div
            className={`  ${page.start ? "turn z-0 delay-[100ms] " : " z-60 delay-[600ms]"}   threeD bg-[#3f61b6] duration-500  absolute top-0 right-0 h-full w-[50%]  rounded-e-[10px]  `}
          >
            <div
              className=" front bg-[#3f61b6] rounded-e-[5px]  w-[320px] sm:-right-[10px]  h-full p-[15px] absolute "
            >
              <FirstCoverPage startPageChange={startPageChange} okay={page.start} />
            </div>

            <div

              className=" back absolute bg-[#ffffff] shade p-[15px] mt-[20px] w-[280px] h-[360px] "
            >
              <ProfilePage contactMe={contactMe} restartHandle={restartHandle} startPageChange={startPageChange} />
            </div>
          </div>

          {/* first and second page  */}
          <div
            className={`  ${page.first ? "turn z-0 delay-[200ms] " : " z-50 delay-[500ms] "
              }   threeD  duration-500 absolute top-0 right-0 h-full w-[50%]  rounded-e-[10px]  `}
          >
            <div

              className=" front bg-white shade2 w-[280px] h-[360px] mt-[20px] p-[15px] absolute "
            >
              <WorkExperience pageChange={pageChange} />
            </div>
            <div

              className=" back absolute bg-white shade p-[15px] mt-[20px] w-[280px] h-[360px] "
            >
              <Education pageChange={pageChange} />
            </div>
          </div>

          <div
            className={`${page.second ? "turn z-10 delay-[300ms] " : " z-40 delay-[400ms] "
              }  threeD  duration-500 absolute top-0 right-0 h-full w-[50%]  rounded-e-[10px]  `}
          >
            <div

              className=" front bg-white shade2 w-[280px] h-[360px] mt-[20px] p-[15px] absolute "
            >
              <MySkills SecondPageChange={SecondPageChange} />

            </div>
            <div

              className=" back absolute bg-white shade p-[15px] mt-[20px] w-[280px] h-[360px] "
            >
              <ProjectOne SecondPageChange={SecondPageChange} />
            </div>
          </div>

          <div
            className={`${page.third ? "turn z-20 delay-[400ms] " : " z-30 delay-[300ms] "
              }  threeD  duration-500 absolute top-0 right-0 h-full w-[50%]  rounded-e-[10px]  `}
          >
            <div

              className=" front bg-white shade2 w-[280px] h-[360px] mt-[20px] p-[15px] absolute "
            >
              <LatestProject thirdPageChange={thirdPageChange} />
            </div>
            <div

              className=" back absolute bg-white shade p-[15px] mt-[20px] w-[280px] h-[360px] "
            >
              <ProjectThree thirdPageChange={thirdPageChange} />
            </div>
          </div>

          <div
            className={`${page.fourth ? "turn z-30 delay-[500ms] " : " z-20 delay-[200ms] "
              }  threeD  duration-500 absolute top-0 right-0  h-full w-[50%]  rounded-e-[10px]  `}
          >
            <div

              className=" front bg-white shade2 w-[280px] h-[360px] mt-[20px] p-[15px] absolute "
            >
              <ProjectFour fourthPageChange={fourthPageChange} />
            </div>
            <div

              className=" back absolute bg-white shade p-[15px] mt-[20px] w-[280px] h-[360px] "
            >
              <ContactMe fourthPageChange={fourthPageChange} />


            </div>
          </div>

          <div
            className={`${page.end ? "turn z-40 delay-[600ms] " : " z-10 delay-[100ms] "
              } threeD   duration-500 absolute top-0  right-0 h-full w-[50%]  rounded-e-[10px] bg-[#3f61b6]  `}
          >
            <div onClick={endPageChange}
              className=" front bg-white shade2 w-[280px] h-[360px] mt-[20px] p-[15px] absolute "
            >
            </div>
            <div
              onClick={endPageChange}
              className=" back absolute bg-[#3f61b6] rounded-s-[5px]  p-[15px]   w-[320px] sm:-right-[10px] h-full "
            >
              <LastCover firstTurn={firstTurn} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
