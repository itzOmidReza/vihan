// tests/unit/components/ProjectsFilterBar.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsFilterBar from '~/components/projects/ProjectsFilterBar.vue'

const mockCategories = [
  { id: 'all', label: { fa: 'همه', en: 'All' } },
  { id: 'ai', label: { fa: 'هوش مصنوعی', en: 'AI' } },
  { id: 'web', label: { fa: 'وب', en: 'Web' } },
]

describe('ProjectsFilterBar Component', () => {
  it('renders all categories with localized labels', () => {
    const wrapper = mount(ProjectsFilterBar, {
      props: {
        activeCategory: 'all',
        searchQuery: '',
        categories: mockCategories,
      },
    })

    const buttons = wrapper.findAll('button[type="button"]')
    expect(buttons.length).toBe(3)
    expect(buttons[0].text()).toBe('همه')
    expect(buttons[1].text()).toBe('هوش مصنوعی')
    expect(buttons[2].text()).toBe('وب')
  })

  it('highlights active category button', () => {
    const wrapper = mount(ProjectsFilterBar, {
      props: {
        activeCategory: 'ai',
        categories: mockCategories,
      },
    })

    const buttons = wrapper.findAll('button[type="button"]')
    expect(buttons[1].classes()).toContain('bg-primary')
    expect(buttons[0].classes()).not.toContain('bg-primary')
  })

  it('emits update:activeCategory when a category button is clicked', async () => {
    const wrapper = mount(ProjectsFilterBar, {
      props: {
        activeCategory: 'all',
        categories: mockCategories,
      },
    })

    const buttons = wrapper.findAll('button[type="button"]')
    await buttons[2].trigger('click')

    expect(wrapper.emitted('update:activeCategory')).toBeTruthy()
    expect(wrapper.emitted('update:activeCategory')![0]).toEqual(['web'])
  })

  it('binds search input and emits update:searchQuery on input', async () => {
    const wrapper = mount(ProjectsFilterBar, {
      props: {
        searchQuery: 'Nuxt',
        categories: mockCategories,
      },
    })

    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).value).toBe('Nuxt')

    await input.setValue('Vue 3')
    expect(wrapper.emitted('update:searchQuery')).toBeTruthy()
    expect(wrapper.emitted('update:searchQuery')![0]).toEqual(['Vue 3'])
  })

  it('renders reset button when a filter or query is active and emits reset on click', async () => {
    const wrapperWithQuery = mount(ProjectsFilterBar, {
      props: {
        activeCategory: 'all',
        searchQuery: 'AI',
        categories: mockCategories,
      },
    })

    const resetBtn = wrapperWithQuery.find('button[title="بازنشانی فیلترها"]')
    expect(resetBtn.exists()).toBe(true)

    await resetBtn.trigger('click')
    expect(wrapperWithQuery.emitted('reset')).toBeTruthy()
  })

  it('does not render reset button when in default initial state', () => {
    const wrapperDefault = mount(ProjectsFilterBar, {
      props: {
        activeCategory: 'all',
        searchQuery: '',
        categories: mockCategories,
      },
    })

    const resetBtn = wrapperDefault.find('button[title="بازنشانی فیلترها"]')
    expect(resetBtn.exists()).toBe(false)
  })
})

