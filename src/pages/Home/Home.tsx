import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { Slider } from "antd";

interface Field {
  [key: number]: { id: string };
}

interface Record {
  items: string[];
  images: string[];
}

interface LectureData {
  fields: Field;
  records: Record;
}

interface UrlProps {
  urls: { full: string };
}

const Home = () => {
  const [lectureData, setLectureData] = useState<LectureData>({
    fields: {},
    records: { items: [], images: [] },
  });

  const [page, setPage] = useState(12);
  const [perpage, setPerpage] = useState(12);
  const [price, setPrice] = useState(0);
  const { fields, records } = lectureData;

  console.log(lectureData);
  console.log(Math.max(...records.items.map((x: any) => +x.수강료)));

  const onChange = (value: number | [number, number]) => {
    console.log("onChange: ", value);
  };

  const newDatas: any = records.images.map((x, i) => {
    const combileData = {
      imageUrl: x,
      itemData: records.items.slice(0, 12)[i],
    };
    return combileData;
  });

  console.log(newDatas);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data/mock_data.json");
      const imagesResponse = await axios.get(
        `https://api.unsplash.com/search/photos/?page=${page}&per_page=${perpage}&order_by=latest&query=book&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      const images = imagesResponse.data.results.map(
        (x: UrlProps) => x.urls.full
      );

      const datas: LectureData = {
        fields: response.data.fields,
        records: { items: response.data.records, images },
      };

      setLectureData(datas);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Carousel
        autoplay={false}
        autoplaySpeed={5000}
        pauseOnHover={true}
        className="text-[#000] text-[2rem] ant-carousel flex justify-center items-center w-[80%] mx-auto"
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

      <div className="w-[80%] mx-auto my-[4rem]">
        <div className="my-[6rem]">
          <h1 className="text-[3rem] my-[2rem]">광범위한 강의 모음</h1>
          <p className="text-[2rem]">
            <strong>
              {new Intl.NumberFormat().format(records.items.length)}
            </strong>
            개 이상의 온라인 동영상 강의 중에서 선택하세요. 매월 새롭게 강의가
            추가됩니다.
          </p>
        </div>

        <div className="">
          <div className="text-[3rem]">
            <Slider
              defaultValue={[0, 1000000]}
              onChange={onChange}
              min={0}
              max={2000000}
              step={1000}
              range
            />
          </div>
          <div className="grid grid-cols-3 gap-[3.6rem]">
            {newDatas.map((x: any, index: string) => (
              <div
                key={index}
                className="text-[2rem] font-medium border w-full h-full hover:shadow-lg cursor-pointer"
              >
                <img
                  loading="lazy"
                  src={x.imageUrl}
                  alt="img"
                  className="w-full h-[20rem] block object-cover"
                />
                <div className="flex flex-col p-[10%] text-center">
                  <div className="text-[#1f1f1f] truncate">
                    {x.itemData.강좌명}
                  </div>

                  <div className="font-bold">
                    {x.itemData.수강료 === "0"
                      ? "무료"
                      : "₩" + x.itemData.수강료 + "원"}
                  </div>
                  <div className="text-[#6a6f73]">{x.itemData.교육장소}</div>
                </div>

                {/* <div>{x.itemData.강좌내용}</div> */}
                {/* <div>{x.itemData.강의정원수}</div>
                <div>{x.itemData.교육대상구분}</div>
                <div>{x.itemData.교육방법구분}</div>
                <div>{x.itemData.교육시작시각}</div>
                <div>{x.itemData.교육시작일자}</div>
                <div>{x.itemData.교육장도로명주소}</div>
                <div>{x.itemData.교육장소}</div>
                <div>{x.itemData.교육종료일자}</div>
                <div>{x.itemData.수강료}원</div>
                <div>{x.itemData.운영기관명}</div>
                <div>{x.itemData.운영기관전화번호}</div>
                <div>{x.itemData.운영요일}</div>
                <div>{x.itemData.접수방법구분}</div>
                <div>{x.itemData.접수시작일자}</div>
                <div>{x.itemData.접수종료일자}</div>
                <div>{x.itemData.제공기관명}</div>
                <div>{x.itemData.제공기관코드}</div>
                <div>{x.itemData.직업능력개발훈련비지원강좌여부}</div>
                <div>{x.itemData.평생학습계좌제평가인정여부}</div>
                <div>{x.itemData.홈페이지주소}</div> */}
              </div>
            ))}
          </div>
          <div className="text-[3.6rem] py-[5rem]">페이지 영역</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
