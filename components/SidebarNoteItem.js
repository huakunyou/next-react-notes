/*
 * @Author       : frank
 * @Date         : 2024-04-21 09:01:42
 * @LastEditTime : 2024-04-21 09:01:49
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader';

export default function SidebarNoteItem({ noteId, note }) {

  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }>
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}

