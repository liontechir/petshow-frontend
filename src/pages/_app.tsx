import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ContextProvider, { useGlobalState } from 'context'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  // const [authorized, setAuthorized] = useState<boolean>(false)
  // const {user} = useGlobalState()
  // const router = useRouter()

  
  // useEffect(() => {
  //   const hideContent = () => setAuthorized(false)
  //   const authCheck = (url: string) => {
  //     setAuthorized(false)
  //     const publicPaths = ['/']
  //     const path = url.split('?')[0]
  //     if(!user && !publicPaths.includes(path)) {
  //       setAuthorized(false)
  //       router.push('/')
  //     } else {
  //       setAuthorized(true)
  //     }
  //   }
  //   authCheck(router.asPath)

  //   router.events.on('routeChangeStart', hideContent)
  //   router.events.on('routeChangeComplete', authCheck)
    
  //   return () => {
  //     router.events.off('routeChangeStart', hideContent)
  //     router.events.off('routeChangeComplete', authCheck)
  //   }
  // }, [router, user])


  return (
    <ContextProvider>
      <Component {...pageProps} />
      {/* {authorized && <Component {...pageProps} />} */}
    </ContextProvider>
  )
}

export default MyApp
