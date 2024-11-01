import React from 'react'

function News() {
  return (
    <>
      <div className='w-full pt-20' id='News'>

        <div className='sticky top-0 w-full py-2 text-xl font-bold text-green-700 md:text-2xl lg:text-3xl bg-white/90'>
          News
        </div>

        {/* First Article */}
        <a href='https://thekatynews.com/2024/09/29/research-made-accessible-high-schoolers-bridging-the-gap-in-research-mentorship/' target='_blank'>
          <img className='mt-10' src='/assets/Newspic.png' alt='Research Made Accessible Article' />
        </a>

        {/* Second Article */}
        <a href='https://issuu.com/indoamericannews/docs/ian_1018_2024_page_01-12/8?ff' target='_blank'>
          <img className='mt-10' src='/assets/News_2.png' alt='Indo American News Article' />
        </a>

      </div>
    </>
  )
}

export default News
