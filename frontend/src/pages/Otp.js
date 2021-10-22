import React, { useRef } from "react";
import "./styles/Otp.css";
export default function Otp() {
  const otpRef = useRef();

  function handleSubmit() {}

  return (
    <>
      <div className="form-container">Hi</div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your OTP :
          <input type="number" name="otp" ref={otpRef} bg="red" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
