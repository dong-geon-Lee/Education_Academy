import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const [mockData, setMockData] = useState([]);

  console.log(mockData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("/data/전국평생학습강좌표준데이터.json");
      setMockData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%]">
      <Navbar />
    </div>
  );
};

export default App;
