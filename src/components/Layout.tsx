import { ReactNode } from 'react'

import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

type layoutProps = {
  children: ReactNode,
}

const Layout = ({ children }: layoutProps) => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout