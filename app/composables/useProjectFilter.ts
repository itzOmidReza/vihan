// app/composables/useProjectFilter.ts
import { ref, computed, toValue, type MaybeRef } from 'vue'
import type { Project, ProjectCategoryOption } from '~/types'
import { projectCategories } from '~/data/projects'

export interface UseProjectFilterOptions {
  initialCategory?: string
  initialQuery?: string
  categories?: ProjectCategoryOption[]
}

export function useProjectFilter(
  projectsSource: MaybeRef<Project[]>,
  options: UseProjectFilterOptions = {}
) {
  const activeCategory = ref<string>(options.initialCategory || 'all')
  const searchQuery = ref<string>(options.initialQuery || '')
  const categoriesList = options.categories || projectCategories

  const filteredProjects = computed<Project[]>(() => {
    const list = toValue(projectsSource) ?? []
    const category = activeCategory.value
    const query = searchQuery.value.trim().toLowerCase()

    return list.filter((project) => {
      // 1. فیلتر دسته‌بندی
      const matchesCategory =
        category === 'all' ||
        project?.category === category ||
        (category === 'app' && project?.category === 'mobile')

      if (!matchesCategory) return false

      // 2. فیلتر جستجو (در عنوان، توضیحات و تگ‌ها در هر دو زبان)
      if (!query) return true

      const titleFa = project?.title?.fa?.toLowerCase() || ''
      const titleEn = project?.title?.en?.toLowerCase() || ''
      const descFa = project?.description?.fa?.toLowerCase() || ''
      const descEn = project?.description?.en?.toLowerCase() || ''
      const tags = (project?.tags ?? []).map((t) => t.toLowerCase())

      return (
        titleFa.includes(query) ||
        titleEn.includes(query) ||
        descFa.includes(query) ||
        descEn.includes(query) ||
        tags.some((tag) => tag.includes(query))
      )
    })
  })

  const hasActiveFilters = computed<boolean>(() => {
    return activeCategory.value !== 'all' || searchQuery.value.trim().length > 0
  })

  const totalCount = computed<number>(() => {
    return (toValue(projectsSource) ?? []).length
  })

  const filteredCount = computed<number>(() => {
    return filteredProjects.value.length
  })

  const setCategory = (category: string) => {
    activeCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const resetFilters = () => {
    activeCategory.value = 'all'
    searchQuery.value = ''
  }

  return {
    activeCategory,
    searchQuery,
    categories: categoriesList,
    filteredProjects,
    hasActiveFilters,
    totalCount,
    filteredCount,
    setCategory,
    setSearchQuery,
    resetFilters,
  }
}

