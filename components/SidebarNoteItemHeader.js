/*
 * @Author       : frank
 * @Date         : 2024-04-21 13:43:32
 * @LastEditTime : 2024-04-21 13:43:37
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import dayjs from 'dayjs';

export default function SidebarNoteItemHeader({ title, updateTime }) {
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
    </header>
  );
}
