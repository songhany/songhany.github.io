import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          @ &nbsp;<Link href="https://github.com/songhany" className='underline underline-offset-2' target={"_blank"}>songhany</Link>
        </div>

        {/* <Link href="/">Link2</Link> */}
      </Layout>
    </footer>
  )
}

export default Footer