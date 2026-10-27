import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
      <ScrollToTop />
      <Header />
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}