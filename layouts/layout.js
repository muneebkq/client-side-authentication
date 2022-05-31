import Sidenav from "../components/sidenav/Sidenav";
import React from 'react'

export default function Layout( {children}) {
  return (
    <>
      <div className="flex">
        <Sidenav />
        <main  className='w-full'>{children}</main>
      </div>
    </>
  )
}
