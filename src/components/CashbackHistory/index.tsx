import React from "react";
import Table from "../Table";
import { headerItems, tableItems } from "../../data";

const CashbackHistory = () => {
  return (
    <section>
      <p className="cashback-p">Cashback History</p>
      <Table tableData={tableItems} headings={headerItems} />
    </section>
  );
};

export default CashbackHistory;
