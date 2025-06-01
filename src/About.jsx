import React from 'react'
import image from './assets/about.png'

const About = () => {
  return (
    <div className='flex justify-between items-center w-400 m-auto'>
      <div>
        <h1 className='text-4xl mb-10'>About Us</h1>
        <p className='w-250'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur laborum error necessitatibus pariatur officiis obcaecati, est dolores quasi ipsam, numquam doloribus, veniam nihil nesciunt voluptate dolorum voluptatibus assumenda voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsa nulla suscipit, dolore labore sequi tempora repudiandae numquam laborum recusandae nesciunt repellat esse atque. Consequatur quis eligendi veniam animi ipsa?</p>
      </div>
      <div>
        <img src={image} className='rounded-2xl mt-40'></img>
      </div>
    </div>
  )
}

export default About
