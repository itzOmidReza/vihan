// tests/unit/components/ContactForm.spec.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '~/components/contact/ContactForm.vue'

describe('ContactForm Component', () => {
  it('renders all form inputs and subject options', () => {
    const wrapper = mount(ContactForm)

    expect(wrapper.find('input[placeholder="نام شما"]').exists()).toBe(true)
    expect(wrapper.find('input[placeholder="۰۹۱۲..."]').exists()).toBe(true)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)

    // بررسی وجود دکمه‌های موضوع پروژه
    expect(wrapper.text()).toContain('هوش مصنوعی و یادگیری ماشین')
    expect(wrapper.text()).toContain('توسعه وب‌سایت و پلتفرم آنلاین')
  })

  it('selects subject when a quick subject pill is clicked', async () => {
    const wrapper = mount(ContactForm)

    const subjectPills = wrapper.findAll('.flex-wrap button[type="button"]')
    expect(subjectPills.length).toBeGreaterThan(0)

    await subjectPills[0].trigger('click')
    const subjectInput = wrapper.find('input[placeholder="در چه حوزه‌ای نیاز به همکاری دارید؟"]')
    expect((subjectInput.element as HTMLInputElement).value).toBe('هوش مصنوعی و یادگیری ماشین')
  })

  it('displays validation errors on empty submission', async () => {
    const wrapper = mount(ContactForm)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('لطفاً نام کامل خود را وارد کنید')
    expect(wrapper.text()).toContain('لطفاً شماره تماس خود را وارد کنید')
    expect(wrapper.text()).toContain('لطفاً توضیحاتی پیرامون پروژه')
  })

  it('submits successfully with valid data and renders success state', async () => {
    vi.useFakeTimers()

    const wrapper = mount(ContactForm)

    const nameInput = wrapper.find('input[placeholder="نام شما"]')
    const phoneInput = wrapper.find('input[placeholder="۰۹۱۲..."]')
    const descTextarea = wrapper.find('textarea')

    await nameInput.setValue('امیرحسین رضایی')
    await phoneInput.setValue('09129876543')
    await descTextarea.setValue('طراحی یک سیستم هوش مصنوعی جهت بهینه‌سازی زنجیره تأمین')

    const submitPromise = wrapper.find('form').trigger('submit.prevent')
    await vi.runAllTimersAsync()
    await submitPromise

    expect(wrapper.text()).toContain('پیام شما با موفقیت دریافت شد')
    expect(wrapper.text()).toContain('از ارتباط شما سپاسگزاریم')
    expect(wrapper.emitted('submitted')).toBeTruthy()

    vi.useRealTimers()
  })
})

