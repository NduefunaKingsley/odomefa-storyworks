import { Link } from 'react-router-dom'
import './Service.css'

export default function ImageCard() {
  return (
    <div className='img-card'>
    <div className='card1 card'>
        <img src='	https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_DI2G7fKQ.webp' className='card-img'/>
        <h2 className='card-head'>
        Expert Manuscript Editing
        </h2>
        <p className='card-text'>
        Our skilled editors meticulously review manuscripts to enhance clarity, coherence, and overall quality, ensuring your work is polished and publication-ready.
        </p>
        <Link to='#'><button className='card-btn'>Learn More</button></Link>
    </div>
    <div className='card2 card'>
    <img src='	https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_U9GhVJYf.webp' className='card-img' />
        <h2 className='card-head'>
        Creative Book Design
        </h2>
        <p className='card-text'>
        Our design team crafts visually stunning book covers and layouts that capture the essence of your story, making your book stand out on the shelves.
        </p>
        <Link to='#'><button className='card-btn'>Learn More</button></Link>
    </div>
    <div className='card3 card'>
    <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_FVgizwHi.webp' className='card-img' />
        <h2 className='card-head'>
        Efficient Print Production
        </h2>
        <p className='card-text'>
        We manage the entire print production process, ensuring high-quality results and timely delivery, so your book reaches readers without delay.
        </p>
        <Link to='#'><button className='card-btn'>Learn More</button></Link>
    </div>
</div>
  )
}
