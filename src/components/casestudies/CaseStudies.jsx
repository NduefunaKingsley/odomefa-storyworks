import Casebooks from './Casebooks'
import './CaseStudies.css'


export default function CaseStudies() {
  return (
    <div className='case-container'>
        <div className='case-box'>
            <div className='case-box1 case'>
                <h1 className='case-head'>
                Showcasing Our Success
                </h1>
                <p className='case-text'>
                Explore our diverse projects that demonstrate our expertise in book publishing, from enchanting children’s tales to gripping non-fiction adventures.
                </p>
            </div>
            <div className='case-box2 case'>
                <p className='case-text'>Our Projects</p>
            <h1 className='case-head'>
            Showcasing Success Stories
            </h1>
            <p className='case-text'>Explore our detailed case studies that highlight the challenges we faced and the innovative solutions we provided.</p>
            </div>
        </div>
        <hr className='line'/>
        <Casebooks />
    </div>
  )
}
