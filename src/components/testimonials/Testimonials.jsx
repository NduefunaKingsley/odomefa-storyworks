import Clients from './Clients'
import './Testimonials.css'
import TestimonialsGrid from './TestimonialsGrid'

export default function Testimonials() {
  return (
    <div className='testimonials'>
        <div className='testimonials-header'>
            <h1 className='testimonials-head'>What Our Clients Say</h1>
            <p className='testimonials-text'>Discover how we’ve helped authors achieve their dreams.</p>
        </div>
        <TestimonialsGrid />
        <Clients />
    </div>
  )
}
