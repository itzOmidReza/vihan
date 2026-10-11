// app/composables/useLocalized.ts
import { ref } from 'vue'
import type { LocalizedString } from '~/types'

export const useLocalized = () => {
  let locale = ref('fa')

  try {
    // @ts-ignore - useI18n is auto-imported by @nuxtjs/i18n in Nuxt environment
    if (typeof useI18n === 'function') {
      // @ts-ignore
      const i18n = useI18n()
      if (i18n?.locale) {
        locale = i18n.locale
      }
    }
  } catch {
    // Fallback when executed outside Nuxt context (e.g. unit tests)
    locale = ref('fa')
  }

  const l = (item?: LocalizedString): string => {
    if (!item) return ''
    return locale.value === 'en' ? item.en : item.fa
  }

  return { l, currentLocale: locale }
}
