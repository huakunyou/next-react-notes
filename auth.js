/*
 * @Author       : frank
 * @Date         : 2024-05-23 13:49:54
 * @LastEditTime : 2024-05-23 13:50:02
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [GitHub] })
