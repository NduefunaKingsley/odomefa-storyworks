import { Link } from 'react-router-dom'
import 'primeicons/primeicons.css';
import './App.css'


export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='contactus footer'>
        <h1 className='contact-head header'>Contact Us</h1>
        <Link to='https://Odomefastoryworks1@gmail.com' className='contact-link'><p className='footer-link'>Email: Odomefastoryworks1@gmail.com</p></Link>
        <p className='contact-number'>Tel n.o : 0558413911</p>
      </div>
      <div className='socials footer'>
        <h1 className='social-head header'>Socials</h1>
        <span className='links-container'>
        <Link to='https://www.facebook.com/Odomefastoryworks1?mibextid=ZbWKwL' className='socials-link'><i className="pi pi-facebook"></i><br /></Link>
        <Link to='https://www.instagram.com/odomefastoryworks?igsh=YzljYTk1ODg3Zg==' className='socials-link'><i className="pi pi-instagram"></i><br /></Link>
        <Link to='https://x.com/Odomefastory1?t=yGFFmbEXwYvn_3XrvxqwJw&s=08' className='socials-link'><i className="pi pi-twitter"></i><br /></Link>
        <Link to='https://tiktok.com/@odomefa.storywork' className='socials-link'><i className="pi pi-tiktok"></i></Link>
        </span>
      </div>
      <div className='rights footer'>
        <p className='rights-text'>Privacy Policies</p>
        <p className='rights-text'>Terms and Conditions</p>
      </div>
    </div>
  )
}