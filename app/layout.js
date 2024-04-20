/*
 * @Author       : frank
 * @Date         : 2024-04-19 15:50:58
 * @LastEditTime : 2024-04-19 16:35:43
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import './style.css'
import Sidebar from '@/components/Sidebar'

export default async function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}

