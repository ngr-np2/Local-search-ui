import React from 'react'
import ListComp from '../components/Lists/ListComp'
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom';
const BusinessProfile = () => {
  return (
    <>
      <ListComp />
      <div className='text-gray-900 my-4 mt-8 mx-4'>
        <div>
          <p className='font-f-bold-cyber text-xl py-2'>Additional Information</p>
          <div className='flex gap-3'>
            <div className="flex-1 mx-4">
              <p className='font-font-4 py-3'>Opening hours</p>
              <div className='w-full h-[2px] bg-stone-200' />

            </div>
            <div className='flex-1 mx-4'>
              <p className='font-font-4 px-1 py-3'>Social Media</p>
              <div className='w-full h-[2px] bg-stone-200' />
              <div className="flex flex-wrap gap-3 justify-start px-1 pt-3 pb-5 shadow-sm cursor-pointer">
                <a href={`https://facebook.com/`} target="_blank" rel="noopener noreferrer">
                  <Facebook fontSize='large' className='rounded-full text-[#4267B2] hover:text-[#3e72db]' />
                </a>
                <a href={`https://instagram.com/`} target="_blank" rel="noopener noreferrer">
                  <Instagram fontSize='large' className='text-[#da1b1b] ' />
                </a>
                <a href={`https://twitter.com/`} target="_blank" rel="noopener noreferrer">
                  <Twitter fontSize='large' className='text-[#1DA1F2] ' />
                </a>
                <EmailIcon fontSize='large' className='text-green-600 ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessProfile