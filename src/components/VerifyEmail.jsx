import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const VerifyEmailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const verificationToken = searchParams.get("token");
  const email = searchParams.get("email");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [showLoginLink, setShowLoginLink] = useState(false);

  useEffect(() => {
    if (verificationToken && email) {
      const verifyEmail = async () => {
        try {
          const response = await axios.post(
            "https://rawcult-be.onrender.com/auth/verify-email",
            { verificationToken, email }
          );
          setVerificationStatus("Email verified!!!");
          setShowLoginLink(true); // Show the login link upon success
        } catch (error) {
          console.error("Email verification error:", error);
          setVerificationStatus("Email verification failed");
        }
      };

      verifyEmail();
    }
  }, [verificationToken, email]);

  return (
    <div>
      <h1>Email Verification Status</h1>
      <p>{verificationStatus}</p>

      {showLoginLink && (
        <p>
          You can now&nbsp;
          <Link to="/">proceed to login</Link>.
        </p>
      )}
    </div>
  );
};

export default VerifyEmailPage;
