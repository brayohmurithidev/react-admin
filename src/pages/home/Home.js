import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="Sales Analytics" data={data} dataKey="name" grid />
    </div>
  );
};

export default Home;
