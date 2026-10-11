// tests/unit/components/ContactChannels.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactChannels from '~/components/contact/ContactChannels.vue'

describe('ContactChannels Component', () => {
  it('renders default contact channels and office information', () => {
    const wrapper = mount(ContactChannels)

    expect(wrapper.text()).toContain('ایمیل ما')
    expect(wrapper.text()).toContain('info@vihandata.ir')
    expect(wrapper.text()).toContain('شماره تماس')
    expect(wrapper.text()).toContain('۰۸۳-۳۸۲۵۰۰۰۰')
    expect(wrapper.text()).toContain('ساعات کاری')
    expect(wrapper.text()).toContain('دفتر مرکزی')
    expect(wrapper.text()).toContain('پارک علم و فناوری زاگرس')
  })

  it('renders social link anchors with accessibility labels', () => {
    const wrapper = mount(ContactChannels)

    const linkedin = wrapper.find('a[aria-label="LinkedIn"]')
    expect(linkedin.exists()).toBe(true)
    expect(linkedin.attributes('target')).toBe('_blank')

    const github = wrapper.find('a[aria-label="GitHub"]')
    expect(github.exists()).toBe(true)
  })

  it('allows overriding channels with custom props', () => {
    const customChannels = [
      {
        id: 'support',
        type: 'email',
        title: { fa: 'پشتیبانی فنی', en: 'Technical Support' },
        value: 'support@vihan.tech',
        href: 'mailto:support@vihan.tech',
        icon: 'Mail',
      },
    ]

    const wrapper = mount(ContactChannels, {
      props: {
        channels: customChannels,
      },
    })

    expect(wrapper.text()).toContain('پشتیبانی فنی')
    expect(wrapper.text()).toContain('support@vihan.tech')
  })
})

