/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './Genre.css'

export default function Genrebooks() {
  return (
    <div className="genre-books">
       <div className='genre-card'>
           <img src='	https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_xWUtYrzR.webp' className='books-img' />
        <div className='genre-text-box'>
            <div className='text1 genre'>
                <h1 className='box-head'>Children's Literature</h1>
                <p className='box-text'>         
                    # Engaging Stories 
                    # Vibrant Illustrations
                    # Imaginative Adventures
                </p>
                <Link to='#' className='genre-link'>View Project </Link>
            </div>
        <div className='text2 genre'>
        Our children’s literature section features enchanting stories that captivate young readers. Each book is designed to spark imagination and creativity, making reading a delightful experience for children.
        </div>
        </div>
       </div>
       <div className='genre-card'>
           <img src='	https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_uNNKbpFN.webp' className='books-img' />
        <div className='genre-text-box'>
            <div className='text1 genre'>
                <h1 className='box-head'>Non-Fiction</h1>
                <p className='box-text'>
                    
                    #Real-Life Adventures
                    #Inspiring Stories
                    #Stunning Photography
                </p>
            </div>
        <div className='text2 genre'>
        In our non-fiction category, we present gripping accounts of real-life explorations and adventures. These books are filled with stunning visuals and compelling narratives that inform and inspire readers.
        </div>
        </div>
       </div>
    </div>
  )
}
