import { ReactNode } from 'react'

import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

type layoutProps = {
  children: ReactNode,
}

const Layout = ({ children }: layoutProps) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout