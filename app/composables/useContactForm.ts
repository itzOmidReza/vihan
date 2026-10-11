// app/composables/useContactForm.ts
import { ref, reactive } from 'vue'
import type { ContactFormData } from '~/types'

export interface ContactFormErrors {
  name?: string
  phone?: string
  subject?: string
  description?: string
}

export function useContactForm(initialValues?: Partial<ContactFormData>) {
  const form = reactive<ContactFormData>({
    name: initialValues?.name || '',
    phone: initialValues?.phone || '',
    subject: initialValues?.subject || '',
    description: initialValues?.description || '',
  })

  const errors = reactive<ContactFormErrors>({})
  const isSubmitting = ref(false)
  const isSubmitted = ref(false)
  const errorMessage = ref<string | null>(null)

  const validate = (): boolean => {
    // پاک کردن خطاهای قبلی
    errors.name = undefined
    errors.phone = undefined
    errors.subject = undefined
    errors.description = undefined
    errorMessage.value = null

    let isValid = true

    // اعتبارسنجی نام
    if (!form.name || form.name.trim().length < 2) {
      errors.name = 'لطفاً نام کامل خود را وارد کنید (حداقل ۲ کاراکتر).'
      isValid = false
    }

    // اعتبارسنجی شماره تماس (شماره موبایل یا تلفن معتبر حداقل ۸ رقم)
    const phoneTrimmed = form.phone.trim().replace(/\s+/g, '')
    const phoneRegex = /^(\+98|0)?9\d{9}$|^(\+98|0)\d{2,3}\d{7,8}$/
    if (!phoneTrimmed) {
      errors.phone = 'لطفاً شماره تماس خود را وارد کنید.'
      isValid = false
    } else if (phoneTrimmed.length < 8 || (!phoneRegex.test(phoneTrimmed) && phoneTrimmed.replace(/\D/g, '').length < 8)) {
      errors.phone = 'لطفاً یک شماره تماس یا موبایل معتبر وارد کنید.'
      isValid = false
    }

    // اعتبارسنجی توضیحات
    if (!form.description || form.description.trim().length < 5) {
      errors.description = 'لطفاً توضیحاتی پیرامون پروژه یا ایده خود بنویسید (حداقل ۵ کاراکتر).'
      isValid = false
    }

    return isValid
  }

  const handleSubmit = async (
    customSubmitFn?: (data: ContactFormData) => Promise<void> | void
  ): Promise<boolean> => {
    if (!validate()) {
      return false
    }

    isSubmitting.value = true
    errorMessage.value = null

    try {
      if (customSubmitFn) {
        await customSubmitFn({ ...form })
      } else {
        // شبیه‌سازی ارسال به سرور
        await new Promise((resolve) => setTimeout(resolve, 800))
      }
      isSubmitted.value = true
      return true
    } catch (err: any) {
      errorMessage.value = err?.message || 'خطایی در ثبت پیام رخ داد. لطفاً دوباره تلاش کنید.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    form.name = initialValues?.name || ''
    form.phone = initialValues?.phone || ''
    form.subject = initialValues?.subject || ''
    form.description = initialValues?.description || ''

    errors.name = undefined
    errors.phone = undefined
    errors.subject = undefined
    errors.description = undefined

    isSubmitting.value = false
    isSubmitted.value = false
    errorMessage.value = null
  }

  return {
    form,
    errors,
    isSubmitting,
    isSubmitted,
    errorMessage,
    validate,
    handleSubmit,
    resetForm,
  }
}

