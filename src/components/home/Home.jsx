import './Home.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

export default function Home() {
  return (
    <div>
         <div className='home-container'>
      <div className='home'>
      <div className='home-header'>
        <h1 className='home-head'>
          Discover <br />Captivating Stories with <br /> Us
        </h1>
      </div>
      <div className='home-body'>
        <p className='home-text'>
        At Odomefa Storyworks, we bring imagination to life through <br /> beautifully crafted books. Explore our diverse genres and find <br /> your next favorite read today.
        </p>
      </div>
      <br />
      <div className='home-login'>
        <input type='email' placeholder='Enter your Email' className='home-input' />
        <br />
        <button className='signup'>Sign Up</button>
      </div>
      <br />
        <span className='terms'>
        By signing up, you agree to our Terms and Conditions and Privacy Policy.
        </span>
      </div>
    </div>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    </div>
  )
}
