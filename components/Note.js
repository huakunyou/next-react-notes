/*
 * @Author       : frank
 * @Date         : 2024-04-21 17:17:59
 * @LastEditTime : 2024-04-21 17:18:03
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import dayjs from 'dayjs';
import NotePreview from '@/components/NotePreview'
import EditButton from '@/components/EditButton'
export default function Note({ noteId, note }) {
  const { title, content, updateTime } = note

  return (
    <div className="note">
      <div className="note-header">
        <h1 className="note-title">{title}</h1>
        <div className="note-menu" role="menubar">
          <small className="note-updated-at" role="status">
            Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
          </small>
          <EditButton noteId={noteId}>Edit</EditButton>
        </div>
      </div>
      <NotePreview>{content}</NotePreview>
    </div>
  )
}
