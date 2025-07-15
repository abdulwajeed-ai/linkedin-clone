import React from 'react'

const NavbarInitial = () => {
  return (
    <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border items-center'>
      <div className='text-blue-600 font-bold text-3xl'>Linkedin</div>
      <div className='flex gap-4'>
        <div>Top content</div>
        <div>People</div>
        <div>Learning</div>
        <div>Jobs</div>
        <div>Games</div>
      </div>
      <div className='border px-3 py-1 rounded-full hover:font-bold '>Signup</div>
    </nav>
  )
}

export default NavbarInitial