// tests/unit/components/ProjectCard.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '~/components/projects/ProjectCard.vue'

const mockProject = {
  id: 'test-project',
  title: { fa: 'پروژه نمونه هوش مصنوعی', en: 'Sample AI Project' },
  description: { fa: 'توضیحات تست سیستم هوشمند', en: 'Test description for AI platform' },
  category: 'ai',
  categoryLabel: { fa: 'هوش مصنوعی', en: 'AI & ML' },
  image: 'https://images.unsplash.com/sample.jpg',
  tags: ['Python', 'Nuxt 4', 'PyTorch'],
  icon: 'Cpu',
}

describe('ProjectCard Component', () => {
  it('renders project title, description, and image properly', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    })

    expect(wrapper.text()).toContain('پروژه نمونه هوش مصنوعی')
    expect(wrapper.text()).toContain('توضیحات تست سیستم هوشمند')

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://images.unsplash.com/sample.jpg')
    expect(img.attributes('alt')).toBe('پروژه نمونه هوش مصنوعی')
  })

  it('renders category badge and technology tags', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    })

    expect(wrapper.text()).toContain('هوش مصنوعی')
    expect(wrapper.text()).toContain('#Python')
    expect(wrapper.text()).toContain('#Nuxt 4')
    expect(wrapper.text()).toContain('#PyTorch')
  })

  it('emits select event when view button is clicked and link is not an external URL', async () => {
    const wrapper = mount(ProjectCard, {
      props: {
        project: mockProject,
      },
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    await button.trigger('click')

    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select')![0][0]).toEqual(mockProject)
  })

  it('renders an external anchor link when link property is provided', () => {
    const wrapperWithLink = mount(ProjectCard, {
      props: {
        project: {
          ...mockProject,
          link: 'https://example.com/live',
        },
      },
    })

    const anchor = wrapperWithLink.find('a')
    expect(anchor.exists()).toBe(true)
    expect(anchor.attributes('href')).toBe('https://example.com/live')
    expect(anchor.attributes('target')).toBe('_blank')
  })

  it('safely handles missing optional attributes without throwing exceptions', () => {
    const minimalProject = {
      id: 'minimal',
      title: { fa: 'پروژه مینیمال', en: 'Minimal' },
      description: { fa: 'توضیحات مینیمال', en: 'Desc' },
      category: 'web',
      image: '',
      tags: [],
    }

    const wrapper = mount(ProjectCard, {
      props: {
        project: minimalProject,
      },
    })

    expect(wrapper.text()).toContain('پروژه مینیمال')
    expect(wrapper.find('img').exists()).toBe(true)
  })
})

