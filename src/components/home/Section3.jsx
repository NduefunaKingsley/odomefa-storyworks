/* eslint-disable react/no-unescaped-entities */
import './Home.css'

export default function Section3() {
  return (
    <div>
        <div className='s3-container'>
            <div className='s3-head-container'>
                <div className='s3-header s3'>
                    <h1 className='s3-head'>
                    Explore Our Diverse Book Genres
                    </h1>
                </div>
                <div className='s3-textbox s3'>
                    <p className='s3-text'>
                    At Odomefa Storyworks, we offer a wide range of book genres to captivate every reader. From thrilling fiction and insightful non-fiction to enchanting children’s literature, our collection is designed to inspire and entertain. Discover the stories that resonate with you and explore the creativity of our talented authors.
                    </p>
                </div>
            </div>
            <div className='s3-imagecard'>
                <div className='s3-card'>
                    <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_5nsxmU58.webp' className='s3-img' />
                    <h1 className='card-header card1'>
                    Fiction: A World of Imagination
                    </h1>
                    <p className='card-text card1'>
                    Dive into our fiction collection, where imagination knows no bounds. From epic adventures to heartwarming tales, our stories are crafted to transport you to new worlds.
                    </p>
                    <button className='card-button card1'>Learn More</button>
                </div>
                <div className='s3-card'>
                <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_DS0Dwqjs.webp' className='s3-img' />
                    <h1 className='card-header card1'>
                    Non-Fiction: Real Stories, Real Impact
                    </h1>
                    <p className='card-text card1'>
                    Our non-fiction books offer a window into the real world, with stories that educate and inspire. Explore accounts of bravery, innovation, and human spirit.
                    </p>
                    <button className='card-button card1'>Learn More</button>
                </div>
                <div className='s3-card'>
                <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_v4NZaQpJ.webp' className='s3-img' />
                    <h1 className='card-header card1'>
                    Children's Literature: Magical Adventures
                    </h1>
                    <p className='card-text card1'>
                    Our children's books are filled with magic and wonder, designed to spark curiosity and imagination in young readers. Join us on these delightful journeys.
                    </p>
                    <button className='card-button card1'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
