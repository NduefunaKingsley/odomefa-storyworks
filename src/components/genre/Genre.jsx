import './Genre.css'
import Genrebooks from './Genrebooks'

export default function Genre() {
  return (
    <div className='genre-container'>
        <div className='genre-box'>
            <div className='genre-box1 genre'>
                <h1 className='genre-head'>
                Explore Our Book Genres
                </h1>
                <p className='genre-text'>
                Discover a world of fiction, non-fiction, and children’s literature that showcases our creative excellence and storytelling prowess.
                </p>
            </div>
            <div className='genre-box2 genre'>
                <p className='genre-text'>Explore Genres</p>
            <h1 className='genre-head'>
            Diverse Literary Works
            </h1>
            <p className='genre-text'>Discover our extensive collection of books across various genres, including fiction, non-fiction, and children’s literature.</p>
            </div>
        </div>
        <Genrebooks />
    </div>
  )
}
