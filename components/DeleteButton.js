/*
 * @Author       : frank
 * @Date         : 2024-04-26 21:36:29
 * @LastEditTime : 2024-04-26 21:36:34
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { useFormStatus } from 'react-dom'

export default function DeleteButton({ isDraft, formAction }) {
  const { pending } = useFormStatus()
  return !isDraft && (
    <button
      className="note-editor-delete"
      disabled={pending}
      formAction={formAction}
      role="menuitem"
    >
      <img
        src="/cross.svg"
        width="10px"
        height="10px"
        alt=""
        role="presentation"
      />
      Delete
    </button>
  )
}
