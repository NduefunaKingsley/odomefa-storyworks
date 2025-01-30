import Clients from "./Clients";
import "./Testimonials.css";
import TestimonialsGrid from "./TestimonialsGrid";
import FadeInSection from '../../FadeInSection'  // Import fade-in component

export default function Testimonials() {
  return (
    <FadeInSection>
      <div className="testimonials">
        <FadeInSection>
          <div className="testimonials-header">
            <h1 className="testimonials-head">What Our Clients Say</h1>
            <p className="testimonials-text">
              Discover how we’ve helped authors achieve their dreams.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <TestimonialsGrid />
        </FadeInSection>

        <FadeInSection>
          <Clients />
        </FadeInSection>
      </div>
    </FadeInSection>
  );
}

