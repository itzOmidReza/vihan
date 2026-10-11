// tests/unit/components/ProjectsGrid.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsGrid from '~/components/projects/ProjectsGrid.vue'

const mockProjects = [
  {
    id: 'p1',
    title: { fa: 'پروژه ۱', en: 'Project 1' },
    description: { fa: 'توضیحات ۱', en: 'Desc 1' },
    category: 'ai',
    categoryLabel: { fa: 'هوش مصنوعی', en: 'AI' },
    image: 'https://example.com/1.jpg',
    tags: ['AI'],
  },
  {
    id: 'p2',
    title: { fa: 'پروژه ۲', en: 'Project 2' },
    description: { fa: 'توضیحات ۲', en: 'Desc 2' },
    category: 'web',
    categoryLabel: { fa: 'وب', en: 'Web' },
    image: 'https://example.com/2.jpg',
    tags: ['Web'],
  },
]

describe('ProjectsGrid Component', () => {
  it('renders project cards when projects array is provided', () => {
    const wrapper = mount(ProjectsGrid, {
      props: {
        projects: mockProjects,
      },
    })

    expect(wrapper.text()).toContain('پروژه ۱')
    expect(wrapper.text()).toContain('پروژه ۲')
  })

  it('renders empty state when projects array is empty', () => {
    const wrapper = mount(ProjectsGrid, {
      props: {
        projects: [],
      },
    })

    expect(wrapper.text()).toContain('هیچ پروژه‌ای یافت نشد')
    const resetBtn = wrapper.find('button')
    expect(resetBtn.exists()).toBe(true)
    expect(resetBtn.text()).toContain('بازنشانی فیلترها')
  })

  it('emits reset when empty state button is clicked', async () => {
    const wrapper = mount(ProjectsGrid, {
      props: {
        projects: [],
      },
    })

    const resetBtn = wrapper.find('button')
    await resetBtn.trigger('click')

    expect(wrapper.emitted('reset')).toBeTruthy()
  })

  it('renders skeleton loading placeholders when loading prop is true', () => {
    const wrapper = mount(ProjectsGrid, {
      props: {
        loading: true,
        projects: mockProjects,
      },
    })

    const skeletons = wrapper.findAll('.animate-pulse')
    expect(skeletons.length).toBe(6)
    expect(wrapper.text()).not.toContain('پروژه ۱')
  })
})

