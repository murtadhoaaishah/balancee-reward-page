import React, { Dispatch, SetStateAction, useState } from "react";

const WithdrawBox = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [amount, setAmount] = useState(0);
  const [withdrawalMethod, setWithdrawalMethod] = useState("bank");

  const availableCashBalance = 25.35;
  const handleWithdrawal = () => {
    // if (amount < availableCashBalance) {
    //   availableCashBalance - amount;
    // }
    setOpenModal(false);
  };

  return (
    <div className="modal-div">
      <h2 className="modal-title ">Withdraw cashback</h2>
      <span className="modal-close" onClick={() => setOpenModal(false)}>
        X
      </span>
      <p className="modal-text">
        Available cash balance:
        {}
      </p>
      <input
        className="modal-text"
        type="number"
        placeholder="Withdrawal Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <label className="modal-text">Withdrawal Method: </label>
      <select
        className="modal-text"
        value={withdrawalMethod}
        onChange={(e) => setWithdrawalMethod(e.target.value)}
      >
        <option value="bank">Bank</option>
        <option value="paypal">Paypal</option>
      </select>
      <button className="withdraw-btn" onClick={handleWithdrawal}>
        withdraw
      </button>
    </div>
  );
};

export default WithdrawBox;
