// app/types/index.ts

export interface LocalizedString {
  fa: string
  en: string
}

export type ProjectCategory = 'all' | 'ai' | 'web' | 'app' | 'mobile' | 'dashboard'

export interface ProjectCategoryOption {
  id: ProjectCategory
  label: LocalizedString
}

export interface Project {
  id: string
  title: LocalizedString
  description: LocalizedString
  category: ProjectCategory
  categoryLabel?: LocalizedString
  image: string
  tags: string[]
  link?: string
  icon?: string
  featured?: boolean
}

export interface ContactChannel {
  id: string
  type: 'email' | 'phone' | 'hours' | 'address' | 'other'
  title: LocalizedString
  value: string
  href?: string
  icon: string
  colorClass?: string
  isLtr?: boolean
}

export interface ContactOffice {
  title: LocalizedString
  address: LocalizedString
  postalCode?: string
  socials: {
    linkedin?: string
    instagram?: string
    twitter?: string
    github?: string
  }
}

export interface ContactFormData {
  name: string
  phone: string
  subject: string
  description: string
}

export interface ContactSubjectOption {
  id: string
  label: LocalizedString
}

export interface TeamMember {
  id: string
  name: LocalizedString
  role: LocalizedString
  bio: LocalizedString
  avatar: string
  resume?: string
  resumeUrl?: string
  skills?: string[]
  socials: {
    website?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export interface CoreValue {
  id?: string
  title: LocalizedString
  desc: LocalizedString
  icon: string
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

export interface WorkflowStep {
  step: string
  title: LocalizedString
  desc: LocalizedString
  icon: string
}

export interface Testimonial {
  id: string
  name: LocalizedString
  company: LocalizedString
  comment: LocalizedString
  avatar: string
  rating: number
}
