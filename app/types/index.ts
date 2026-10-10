// app/types/index.ts
export interface LocalizedString {
  fa: string
  en: string
}

export interface TeamMember {
  id: string
  name: LocalizedString
  role: LocalizedString
  bio: LocalizedString
  avatar: string
  resume?: string
  socials: {
    website?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export type ProjectCategory = 'all' | 'ai' | 'web' | 'mobile' | 'dashboard'

export interface Project {
  id: string
  title: LocalizedString
  description: LocalizedString
  category: ProjectCategory
  image: string
  tags: string[]
  link?: string
}

export interface ServiceItem {
  id: string
  serviceNumber: string
  title: LocalizedString
  description: LocalizedString
  icon: string
  color: string
  features: LocalizedString[]
}

export interface ProcessStep {
  step: string
  title: LocalizedString
  description: LocalizedString
}

export interface Testimonial {
  id: string
  name: LocalizedString
  company: LocalizedString
  comment: LocalizedString
  avatar: string
  rating: number
}
