// app/composables/useLocalized.ts
import type { LocalizedString } from '~/types'

export const useLocalized = () => {
  const { locale } = useI18n()

  const l = (item?: LocalizedString): string => {
    if (!item) return ''
    return locale.value === 'en' ? item.en : item.fa
  }

  return { l, currentLocale: locale }
}
