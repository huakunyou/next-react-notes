/*
 * @Author       : frank
 * @Date         : 2024-04-21 13:49:57
 * @LastEditTime : 2024-04-21 13:50:02
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
export default function NoteListSkeleton() {
  return (
    <div>
      <ul className="notes-list skeleton-container">
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
      </ul>
    </div>
  );
}
