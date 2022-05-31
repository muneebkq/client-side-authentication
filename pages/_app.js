import '../styles/globals.css'
import Layout from '../layouts/layout'
import RouteGuard from '../auth/routeGuard'
import { useRouter } from 'next/router'
import AuthenticationProvider from '../context/checkAuth'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthenticationProvider>
      {router.pathname  === "/login" ? <Component {...pageProps} /> :
        <RouteGuard>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </RouteGuard>
      }
    </AuthenticationProvider>
  )
}

export default MyApp
