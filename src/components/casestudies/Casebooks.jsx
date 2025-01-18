/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './CaseStudies.css'

export default function Casebooks() {
  return (
    <div>
        <div className='case1'>
            <img src='	https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_C7WL9Rox.webp' className='case-img' />
            <div className='case-textbox'>
                <h1 className='casebook-head'>The Enchanted Forest</h1>
                <p className='casebook-text'>This enchanting children’s book invites readers into a magical world filled with whimsical creatures, published for Greenwood Publishing.</p>
                <p className='casebook-text'>
                Client: Greenwood Publishing
                Date: May 2023
                Genre: Children's Literature
                </p>
                <Link to='#' className='case-link'>Read More</Link>
            </div>
        </div>
        <hr className='line'/>
        <div className='case1'>
            <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_5XnPDuFH.webp' className='case-img' />
            <div className='case-textbox'>
                <h1 className='casebook-head'>Journey to the Unknown</h1>
                <p className='casebook-text'>A gripping non-fiction narrative that takes readers on an adventure through uncharted territories, published for Adventure Press.</p>
                <p className='casebook-text'>
                Client: Adventure Press
                Date: November 2022
                Genre: Non-Fiction
                </p>
                <Link to='#' className='case-link'>Read More</Link>
            </div>
        </div>
        <hr className='line'/>
        <div className='case1'>
            <img src='https://10web-site.ai/185/wp-content/uploads/sites/197/2025/01/tenweb_media_4aSoLLU4.webp' className='case-img' />
            <div className='case-textbox'>
                <h1 className='casebook-head'>Whispers of the Heart</h1>
                <p className='casebook-text'>TThis poignant fiction novel delves into the complexities of love and relationships, published for Literary Dreams.</p>
                <p className='casebook-text'>
                Client: Literary Dreams
                Date: August 2021
                Genre: Fiction
                </p>
                <Link to='#' className='case-link'>Read More</Link>
            </div>
        </div>
    </div>
  )
}
