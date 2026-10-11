// tests/unit/composables/useContactForm.spec.ts
import { describe, it, expect } from 'vitest'
import { useContactForm } from '~/composables/useContactForm'

describe('useContactForm Composable', () => {
  it('initializes with default empty state', () => {
    const { form, errors, isSubmitting, isSubmitted, errorMessage } = useContactForm()

    expect(form.name).toBe('')
    expect(form.phone).toBe('')
    expect(form.subject).toBe('')
    expect(form.description).toBe('')
    expect(isSubmitting.value).toBe(false)
    expect(isSubmitted.value).toBe(false)
    expect(errorMessage.value).toBeNull()
    expect(errors.name).toBeUndefined()
  })

  it('validates required fields and reports constraint errors', () => {
    const { form, errors, validate } = useContactForm()

    const isValid = validate()
    expect(isValid).toBe(false)
    expect(errors.name).toBeDefined()
    expect(errors.phone).toBeDefined()
    expect(errors.description).toBeDefined()

    // پر کردن نام با طول کوتاه
    form.name = 'ا'
    validate()
    expect(errors.name).toContain('حداقل ۲ کاراکتر')

    // نام معتبر
    form.name = 'علی محمدی'
    validate()
    expect(errors.name).toBeUndefined()
  })

  it('validates phone number constraints correctly', () => {
    const { form, errors, validate } = useContactForm()

    form.name = 'علی محمدی'
    form.description = 'درخواست مشاوره جهت پیاده‌سازی سیستم هوش مصنوعی'

    // شماره تماس نامعتبر
    form.phone = '123'
    expect(validate()).toBe(false)
    expect(errors.phone).toBeDefined()

    // شماره موبایل معتبر ایران
    form.phone = '09123456789'
    expect(validate()).toBe(true)
    expect(errors.phone).toBeUndefined()
  })

  it('manages submission lifecycle asynchronously', async () => {
    const { form, isSubmitting, isSubmitted, handleSubmit } = useContactForm({
      name: 'سارا رضایی',
      phone: '09181234567',
      subject: 'پروژه وب',
      description: 'نیاز به طراحی سامانه فروشگاهی مدرن',
    })

    let submissionCalled = false
    const mockSubmit = async () => {
      submissionCalled = true
      expect(isSubmitting.value).toBe(true)
    }

    const result = await handleSubmit(mockSubmit)

    expect(result).toBe(true)
    expect(submissionCalled).toBe(true)
    expect(isSubmitting.value).toBe(false)
    expect(isSubmitted.value).toBe(true)
  })

  it('captures errors gracefully if submission fails', async () => {
    const { handleSubmit, errorMessage, isSubmitted, isSubmitting } = useContactForm({
      name: 'مهدی احمدی',
      phone: '09121112233',
      description: 'توضیحات پروژه تستی برای خطا',
    })

    const failingSubmit = async () => {
      throw new Error('خطای شبکه در اتصال به سرور')
    }

    const result = await handleSubmit(failingSubmit)

    expect(result).toBe(false)
    expect(isSubmitting.value).toBe(false)
    expect(isSubmitted.value).toBe(false)
    expect(errorMessage.value).toBe('خطای شبکه در اتصال به سرور')
  })

  it('resets form state cleanly', () => {
    const { form, errors, isSubmitted, resetForm, validate } = useContactForm()

    // ایجاد خطا و تغییر وضعیت
    form.name = 'تست'
    validate()
    isSubmitted.value = true

    resetForm()

    expect(form.name).toBe('')
    expect(form.phone).toBe('')
    expect(form.description).toBe('')
    expect(errors.name).toBeUndefined()
    expect(isSubmitted.value).toBe(false)
  })
})

