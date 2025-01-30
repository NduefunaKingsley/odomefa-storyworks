import { useState } from "react"; // Import useState for handling state
import "./Home.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import FadeInSection from "../../FadeInSection";

export default function Home() {
  const [email, setEmail] = useState(""); // State to store input value
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(""); // State to store error message

  // Function to handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on input change
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if email contains an @ symbol
    if (!email.includes("@")) {
      setError("Email must contain an @ symbol.");
    } 
    // Check if email ends with .com
    else if (!email.includes(".com")) {
      setError("Email must end with .com.");
    } 
    // Check if email contains any uppercase letters
    else if (/[A-Z]/.test(email)) {
      setError("Email should not contain uppercase letters.");
    } 
    // Check if email field is empty
    else if (email.trim() === "") {
      setError("Please input a valid email address!");
    } else {
      setLoading(true); // Show loader

      // Simulate a signup process
      setTimeout(() => {
        alert(`Welcome Dear User`);
        setEmail(""); // Clear input field
        setLoading(false); // Hide loader after 2 seconds
      }, 2000);
    }
  };

  return (
    <div>
      <FadeInSection>
        <div className="home-container">
          <div className="home">
            <div className="home-header">
              <h1 className="home-head">
                Discover <br />
                Captivating Stories with <br /> Us
              </h1>
            </div>
            <div className="home-body">
              <p className="home-text">
                At Odomefa Storyworks, we bring imagination to life through
                beautifully crafted books. Explore our diverse genres and find
                your next favorite read today.
              </p>
            </div>
            <br />
            <div className="home-login">
              <input
                type="email"
                placeholder="Enter your Email"
                className="home-input"
                value={email}
                onChange={handleChange} // Handle input change
              />
              <br />
              <button
                className="signup"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className="loader"></span> // Loader animation
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            {error && <p className="error-message">{error}</p>} {/* Show error message */}
            <br />
            <span className="terms">
              By signing up, you agree to our Terms and Conditions and Privacy
              Policy.
            </span>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <Section2 />
      </FadeInSection>
      <FadeInSection>
        <Section3 />
      </FadeInSection>
      <FadeInSection>
        <Section4 />
      </FadeInSection>
      <FadeInSection>
        <Section5 />
      </FadeInSection>
    </div>
  );
}
