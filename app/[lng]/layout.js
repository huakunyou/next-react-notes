/*
 * @Author       : frank
 * @Date         : 2024-04-19 15:50:58
 * @LastEditTime : 2024-05-11 16:29:59
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import './style.css'
import Sidebar from '@/components/Sidebar'
import { locales } from '@/config.js'
import { Footer } from '@/components/Footer'

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  )
}

