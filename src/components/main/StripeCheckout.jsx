import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { Modal } from "@mui/material";
import dl from "../../datalayer/state";
import { observer } from "mobx-react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51JdqpNSIGPXjmNrKEQftBSdV5JPzXMJhAeY7FhFM9NcUzfswxWlc1quFRojrPRlDKuciSwMkK0iUfxjL15zUkoEp00G5XtBI3W",
);

const StripeCheckout = observer(() => {
  const [clientSecret, setClientSecret] = useState(
    // "pi_3NhnmuSIGPXjmNrK0pxOKI1C_secret_SPUtA7PYvNrQwgCr5jqsQwFor"
    dl.stripe.stripeClientSecret,
  );
  const [showModal, setShowModal] = useState(dl.stripe.showStripe);

  useEffect(() => {
    setShowModal(dl.stripe.showStripe);
  }, [dl.stripe.showStripe]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // fetch("http://localhost:4242/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret));

    setClientSecret(dl.stripe.stripeClientSecret);
  }, [dl.stripe.stripeClientSecret]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Modal
      open={showModal}
      disableAutoFocus={true}
      onClose={() => {
        dl.stripe.showStripe = false;
        showModal(false);
      }}
    >
      <div
        style={{
          position: "absolute",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          //   width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            // width: "30%",
            minWidth: 200,
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 20,
          }}
        >
          {/* <p>here</p> */}
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <StripeCheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </Modal>
  );
});

export default StripeCheckout;
