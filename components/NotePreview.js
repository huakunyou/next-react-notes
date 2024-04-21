/*
 * @Author       : frank
 * @Date         : 2024-04-21 17:18:14
 * @LastEditTime : 2024-04-21 17:18:20
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3'
])
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ['alt', 'src']
  }
)

export default function NotePreview({ children }) {
  return (
    <div className="note-preview">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || ''), {
            allowedTags,
            allowedAttributes
          })
        }}
      />
    </div>
  )
}

