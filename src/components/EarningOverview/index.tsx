import React from "react";
import StatisticCard from "../StaticCard";
import { stat } from "../../data";

const EarningOverview = () => {
  return (
    <section className="container">
      <h1>Earning Overview</h1>
      <div className="stat">
        {stat.map((data, index) => (
          <StatisticCard
            title={data.title}
            value={data.value}
            amount={data.amount}
          />
        ))}
      </div>
    </section>
  );
};

export default EarningOverview;
