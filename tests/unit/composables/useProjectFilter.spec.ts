// tests/unit/composables/useProjectFilter.spec.ts
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { useProjectFilter } from '~/composables/useProjectFilter'
import type { Project } from '~/types'

const mockProjects: Project[] = [
  {
    id: 'ai-analyzer',
    title: { fa: 'تحلیلگر هوشمند مالی', en: 'Intelligent Financial Analyzer' },
    description: { fa: 'سامانه پیش‌بینی بازار سرمایه با هوش مصنوعی', en: 'Market forecasting with deep learning' },
    category: 'ai',
    categoryLabel: { fa: 'هوش مصنوعی', en: 'AI' },
    image: 'https://example.com/ai.jpg',
    tags: ['TensorFlow', 'Python', 'FastAPI'],
  },
  {
    id: 'web-portal',
    title: { fa: 'پورتال املاک مدرن', en: 'Modern Real Estate Portal' },
    description: { fa: 'جستجوی املاک و تور مجازی', en: 'Real estate portal with virtual tours' },
    category: 'web',
    categoryLabel: { fa: 'وب', en: 'Web' },
    image: 'https://example.com/web.jpg',
    tags: ['Nuxt 4', 'Vue 3', 'Tailwind CSS'],
  },
  {
    id: 'mobile-superapp',
    title: { fa: 'سوپر اپلیکیشن شهری', en: 'Urban Services SuperApp' },
    description: { fa: 'اپلیکیشن یکپارچه خدمات شهروندی', en: 'Unified citizen mobile application' },
    category: 'app',
    categoryLabel: { fa: 'اپلیکیشن', en: 'App' },
    image: 'https://example.com/app.jpg',
    tags: ['Capacitor', 'Vue 3', 'Node.js'],
  },
]

describe('useProjectFilter Composable', () => {
  it('initializes with default values and returns all projects', () => {
    const { activeCategory, searchQuery, filteredProjects, hasActiveFilters } =
      useProjectFilter(mockProjects)

    expect(activeCategory.value).toBe('all')
    expect(searchQuery.value).toBe('')
    expect(filteredProjects.value.length).toBe(3)
    expect(hasActiveFilters.value).toBe(false)
  })

  it('filters projects by category', () => {
    const { activeCategory, filteredProjects, setCategory } =
      useProjectFilter(mockProjects)

    setCategory('ai')
    expect(activeCategory.value).toBe('ai')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('ai-analyzer')

    setCategory('web')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('web-portal')
  })

  it('filters projects by search keyword in Persian and English titles', () => {
    const { searchQuery, filteredProjects, setSearchQuery } =
      useProjectFilter(mockProjects)

    // جستجو بر اساس عنوان فارسی
    setSearchQuery('تحلیلگر')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('ai-analyzer')

    // جستجو بر اساس عنوان انگلیسی (case-insensitive)
    setSearchQuery('real estate')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('web-portal')
  })

  it('filters projects by tags', () => {
    const { filteredProjects, setSearchQuery } =
      useProjectFilter(mockProjects)

    setSearchQuery('tensorflow')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('ai-analyzer')

    setSearchQuery('Vue 3')
    expect(filteredProjects.value.length).toBe(2)
  })

  it('handles combined category and search filter', () => {
    const { filteredProjects, setCategory, setSearchQuery } =
      useProjectFilter(mockProjects)

    setCategory('web')
    setSearchQuery('Nuxt')
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].id).toBe('web-portal')

    // جستجویی که در دسته‌بندی فعلی وجود ندارد
    setSearchQuery('TensorFlow')
    expect(filteredProjects.value.length).toBe(0)
  })

  it('safely handles empty queries and whitespace', () => {
    const { filteredProjects, setSearchQuery } =
      useProjectFilter(mockProjects)

    setSearchQuery('   ')
    expect(filteredProjects.value.length).toBe(3)
  })

  it('resets filters correctly', () => {
    const {
      activeCategory,
      searchQuery,
      filteredProjects,
      setCategory,
      setSearchQuery,
      resetFilters,
      hasActiveFilters,
    } = useProjectFilter(mockProjects)

    setCategory('ai')
    setSearchQuery('Python')
    expect(hasActiveFilters.value).toBe(true)
    expect(filteredProjects.value.length).toBe(1)

    resetFilters()
    expect(activeCategory.value).toBe('all')
    expect(searchQuery.value).toBe('')
    expect(hasActiveFilters.value).toBe(false)
    expect(filteredProjects.value.length).toBe(3)
  })

  it('reactively responds to changes in source Ref', () => {
    const source = ref<Project[]>([...mockProjects])
    const { filteredProjects } = useProjectFilter(source)

    expect(filteredProjects.value.length).toBe(3)

    source.value = [mockProjects[0]]
    expect(filteredProjects.value.length).toBe(1)
  })
})

