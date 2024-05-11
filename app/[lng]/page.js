/*
 * @Author       : frank
 * @Date         : 2024-04-19 15:50:58
 * @LastEditTime : 2024-05-11 16:12:32
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
// app/[lng]/page.js
import { useTranslation } from "@/app/i18n/index.js"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">
        {t('initText')}
      </span>
    </div>
  )
}


