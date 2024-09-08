import { useState } from "react";
import "./Earnings.scss";
import WithdrawBox from "../../components/WithdrawBox";
import PromoBox from "../../components/PromoBox";
import CashbackHistory from "../../components/CashbackHistory";
import EarningOverview from "../../components/EarningOverview";

const RewardSystem = () => {
  const earnings = [
    { number: 5, title: "bookings rewards", amount: "23" },
    { number: 5, title: "cash back transactions", amount: "23" },
    { number: 5, title: "promo code reward", amount: "23" },
    { number: 5, title: "rewards", amount: "23" },
  ];

  const [openModal, setOpenModal] = useState(false);

  const [cashoutMethod, setCashoutMethod] = useState("");

  return (
    <main className="earning-main">
      <EarningOverview />
      <div className="button-wrapper">
        Cashout Mehod:
        <select
          value={cashoutMethod}
          onChange={(e) => setCashoutMethod(e.target.value)}
          id=""
          className="select-cashout"
        >
          <option value="">choose cashout method</option>
          <option value="withdraw">withdraw</option>
          <option value="promo">get promo code for discount</option>
        </select>
        <button className="withdraw-btn" onClick={() => setOpenModal(true)}>
          Submit
        </button>
      </div>
      {openModal && (
        <section className="modal-wrapper">
          {cashoutMethod == "withdraw" ? (
            <WithdrawBox setOpenModal={setOpenModal} />
          ) : (
            <PromoBox setOpenModal={setOpenModal} />
          )}
        </section>
      )}

      <CashbackHistory />
    </main>
  );
};

export default RewardSystem;
