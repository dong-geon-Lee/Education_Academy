import React from "react";
import { Carousel } from "antd";

const Home = () => {
  return (
    <div className="">
      <Carousel
        autoplay={true}
        autoplaySpeed={7000}
        pauseOnHover={true}
        pauseOnDotsHover={true}
        className="text-[#000] text-[2rem] ant-carousel"
      >
        <div className="bg-[#fef188] h-[46rem] relative">
          <div className="text-[#000] bg-[#fff] absolute text-[3.6rem] top-[20%] left-[5%] font-bold p-[4rem] px-[8rem]">
            천천히 그리고 꾸준하게
            <p className="text-[1.8rem] w-[100%] mt-[2rem] font-medium">
              하루에 5~10분만 학습해보세요. 강의를 계속 듣고 잠재력을 <br />
              최대로 발휘해 보세요.
            </p>
          </div>
          <img
            src="/assets/read.png"
            alt="laptop"
            className="w-[50%] ml-auto h-full bg-cover bg-right block bg-no-repeat"
          />
        </div>
        <div className="bg-[#40beae] h-[46rem] relative">
          <div className="text-[#000] bg-[#fff] absolute text-[3.6rem] top-[20%] left-[5%] font-bold p-[4rem] px-[8rem]">
            <p>저희와 함께 교육해 보세요</p>
            <p className="text-[1.8rem] w-[100%] mt-[2rem] font-medium">
              강사로 등록해 여러 사람의 삶을 변화시켜 <br /> 보세요! 물론 자신도
              포함해서요.
            </p>
          </div>
          <img
            src="/assets/teach.png"
            alt="laptop"
            className="w-[50%] ml-auto h-full bg-cover bg-right block bg-no-repeat"
          />
        </div>
        <div className="bg-[#00bcde] h-[46rem] relative">
          <div className="text-[#000] bg-[#fff] absolute text-[3.6rem] top-[20%] left-[5%] font-bold p-[4rem] px-[8rem]">
            IT 자격증 준비하기
            <p className="text-[1.8rem] w-[100%] mt-[2rem] font-medium">
              IT의 미래를 탐구하세요. <br /> AWS 자격증, CompTIA A+ 자격증 등을
              <br />
              획득하기 위한 학습을 시작하세요.
            </p>
          </div>
          <img
            src="/assets/degree.png"
            alt="laptop"
            className="w-[50%] ml-auto h-full bg-cover bg-right block bg-no-repeat"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
