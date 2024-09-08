import React from "react";

const StatisticCard = ({
  title,
  value,
  amount,
}: {
  title: string;
  value: number;
  amount: number;
}) => {
  return (
    <div className="total-earning-wrapper">
      <div className="total-title-number-div">
        <span className="total-earning-title">{title}</span>
        <span className="total-earning-number">{value}</span>
      </div>
      <span className="total-earning-amount">${amount}</span>
    </div>
  );
};

export default StatisticCard;
