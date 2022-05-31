import { useRouter } from 'next/router'
import { useState, useEffect ,useContext} from 'react'
import {AuthenticationContext} from '../context/checkAuth'

export default function RouteGuard({ children }) {
  const {auth,setAuthentication}= useContext(AuthenticationContext)
  const router = useRouter()
  useEffect(() => {
    if (!auth) {
      router.redirect('/login')
    }
  }, [auth])

  if(!auth){
    return(
      <div></div>
    )
  }
  return (
    <div>{children}</div>
  )
}

