import { useState } from "react";
import { PaystackButton } from "react-paystack";

const CheckOut = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY as string;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [phone, setPhone] = useState<string>("");

  const customError = () => {
    return (
      <div>
        <p>Error!</p>
        <p>Occured...</p>
      </div>
    );
  };

  const paystackProps = {
    email,
    amount,
    publicKey: publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks");
    },
    onClose: () => {
      alert('');
    },
  };
  return (
    <div>
      {/* name */}
      {/* email */}
      {/* phone */}
      <PaystackButton {...paystackProps} />
    </div>
  );
};

export default CheckOut;
