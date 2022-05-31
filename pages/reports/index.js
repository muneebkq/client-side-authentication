import React from 'react'
import Sidenavfilter from '../../components/sidenav/SidenavFilter';
import { useRouter } from 'next/router';

export default function Reports() {
  const router = useRouter()
  return (
    <>
      <div className='flex'>
        <div className='bg-zinc-100 w-56'>
          <Sidenavfilter activeRoute={router.pathname} />
        </div>
        <div>
            Reports
        </div>
      </div>
    </>
  )
}
