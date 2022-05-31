/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react'
import { AuthenticationContext } from '../../context/checkAuth'
export default function index() {
  const router = useRouter()
  const { auth, setAuthentication } = useContext(AuthenticationContext)
  const login_credentials = { email: 'qa@cryptlex.com', password: '1passwordqa' }
  useEffect(() => {
    if (auth) {
      router.push('/home/products')
    }
  })
  function login(e) {
    e.preventDefault()
    fetch("https://api.cryptlex.com/v3/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_credentials),
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("token", response.accessToken);
        router.push("/home/products")
      })
  }
  if (!auth) {
    return <div></div>
  }
  return (
    <div>
      <form action="" onSubmit={login}>
        <div>
          <label htmlFor='email'>Email </label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type="password" name="" id="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
