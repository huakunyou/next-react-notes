/*
 * @Author       : frank
 * @Date         : 2024-04-26 21:20:24
 * @LastEditTime : 2024-04-26 21:32:07
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import NoteEditor from '@/components/NoteEditor'
import { getNote } from '@/lib/redis';

export default async function EditPage({ params }) {
  const noteId = params.id;
  const note = await getNote(noteId)

  // 让效果更明显
  // const sleep = ms => new Promise(r => setTimeout(r, ms));
  // await sleep(1000);

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <NoteEditor noteId={noteId} initialTitle={note.title} initialBody={note.content} />
}

