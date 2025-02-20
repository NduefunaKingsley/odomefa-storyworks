import "./Service.css";
import ImageCard from "./ImageCard";
import BottomSection from "./BottomSection";
import FadeInSection from "../../FadeInSection";// Import fade-in component

export default function Service() {
  return (
    <FadeInSection>
      <div className="service-container">
        <div className="head-container">
          <FadeInSection>
            <div className="head1 head">
              <h1 className="head1-text">
                Explore Our Comprehensive Publishing Services
              </h1>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="head2 head">
              <p className="head2-text">
                At Odomefa Storyworks, we offer a wide range of services tailored
                to meet the needs of authors and publishers. From meticulous
                manuscript editing to creative book design and layout, our team
                ensures that every project is handled with precision and care.
                Discover how we can bring your literary vision to life with our
                expert publishing solutions.
              </p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <ImageCard />
        </FadeInSection>

        <FadeInSection>
          <BottomSection />
        </FadeInSection>
      </div>
    </FadeInSection>
  );
}

