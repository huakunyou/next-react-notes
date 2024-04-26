/*
 * @Author       : frank
 * @Date         : 2024-04-26 21:36:16
 * @LastEditTime : 2024-04-26 21:36:21
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import { useFormStatus } from 'react-dom'

export default function EditButton({ formAction }) {
  const { pending } = useFormStatus()
  return (
    <button
      className="note-editor-done"
      type="submit"
      formAction={formAction}
      disabled={pending}
      role="menuitem"
    >
      <img
        src="/checkmark.svg"
        width="14px"
        height="10px"
        alt=""
        role="presentation"
      />
      {pending ? 'Saving' : 'Done'}
    </button>
  );
}
