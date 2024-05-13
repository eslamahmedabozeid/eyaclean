import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div>
      <ul className='nav_bar'>
        <li>تواصل معنا</li>
        <li>سياسة الخصوصية</li>
        <li>سياسة الاسترجاع</li>
      </ul>
      <div className='logo'>
        <Image src="/logo.png" width={500} height={500} alt="Picture of the author"/>
      </div>
    </div>
  )
}

export default Navbar
