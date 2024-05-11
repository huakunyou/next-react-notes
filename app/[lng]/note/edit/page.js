/*
 * @Author       : frank
 * @Date         : 2024-04-21 17:30:03
 * @LastEditTime : 2024-04-21 17:30:07
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import NoteEditor from '@/components/NoteEditor'

export default async function EditPage() {
  return <NoteEditor note={null} initialTitle="Untitled" initialBody="" />
}
