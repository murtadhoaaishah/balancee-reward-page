import React, { Dispatch, SetStateAction } from "react";

const PromoBox = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="modal-div">
      <h2 className="modal-title ">
        Use promo code to generate code for discount
      </h2>
      <span className="modal-close" onClick={() => setOpenModal(false)}>
        X
      </span>
      <p className="modal-text text-center">A34RT5</p>

      <button className="withdraw-btn">copy code</button>
    </div>
  );
};

export default PromoBox;
