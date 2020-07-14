import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { CreditCardOutlined } from "@ant-design/icons";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51H1kspJUwMQsQNDO0abg4woH2KlFQnGTDvSEVEsBPqzZMPmtqBoo4Pmgg4FHNgWWzmnZuJeA6kC35PaAWWiU97x4004BfW4Sdo`;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Phantoscope Home"
      billingAddress
      shopping
      Address
      image="https://cdn3.iconfinder.com/data/icons/one-piece-colored/48/Cartoons__Anime_One_Piece_Artboard_6-512.png"
      panelLabel="Give Money"
      currency="USD"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
