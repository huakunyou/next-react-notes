/*
 * @Author       : frank
 * @Date         : 2024-04-19 16:36:45
 * @LastEditTime : 2024-04-27 11:30:49
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import React, { Suspense } from 'react'
import Link from 'next/link'
// 导入组件
import SidebarSearchField from '@/components/SidebarSearchField';
import SidebarNoteList from '@/components/SidebarNoteList';
import EditButton from '@/components/EditButton';
import NoteListSkeleton from '@/components/NoteListSkeleton';

export default async function Sidebar() {
  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  )
}


