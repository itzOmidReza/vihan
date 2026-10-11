<!-- app/components/contact/ContactForm.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Send, CheckCircle2, AlertCircle } from '@lucide/vue'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Button } from '~/components/ui/button'
import { contactSubjectOptions } from '~/data/contact'
import { useContactForm } from '~/composables/useContactForm'
import { useLocalized } from '~/composables/useLocalized'
import { cn } from '~/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'submitted', data: { name: string; phone: string; subject: string; description: string }): void
}>()

const { l } = useLocalized()

const {
  form,
  errors,
  isSubmitting,
  isSubmitted,
  errorMessage,
  handleSubmit,
  resetForm,
} = useContactForm()

const onSubmit = async () => {
  const success = await handleSubmit()
  if (success) {
    emit('submitted', { ...form })
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'h-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-card border border-border shadow-2xl relative transition-all',
        props.class
      )
    "
  >
    <!-- پیام تأیید ارسال موفق -->
    <div
      v-if="isSubmitted"
      class="p-10 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-4 my-8 transition-all"
    >
      <div
        class="w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center"
      >
        <CheckCircle2 class="w-8 h-8" />
      </div>
      <h3 class="text-xl sm:text-2xl font-black text-foreground">
        پیام شما با موفقیت دریافت شد
      </h3>
      <p class="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
        از ارتباط شما سپاسگزاریم. درخواست شما ثبت شده و همکاران فنی ما به زودی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        class="rounded-full text-xs font-bold mt-4 px-6 cursor-pointer"
        @click="resetForm"
      >
        ارسال پیام دیگر
      </Button>
    </div>

    <!-- فرم دریافت اطلاعات -->
    <form v-else class="space-y-6 md:space-y-8" @submit.prevent="onSubmit">
      <!-- بنر خطای کلی در صورت بروز خطا در ارسال -->
      <div
        v-if="errorMessage"
        class="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-3 text-right"
      >
        <AlertCircle class="w-5 h-5 shrink-0" />
        <span>{{ errorMessage }}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- نام کامل -->
        <div class="space-y-2 text-right">
          <label class="text-sm font-black pr-2 text-foreground/80">نام کامل</label>
          <Input
            v-model="form.name"
            placeholder="نام شما"
            :class="
              cn(
                'h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-right',
                errors.name ? 'border-destructive focus:border-destructive' : ''
              )
            "
          />
          <p v-if="errors.name" class="text-xs text-destructive pr-2 font-medium">
            {{ errors.name }}
          </p>
        </div>

        <!-- شماره موبایل -->
        <div class="space-y-2 text-right">
          <label class="text-sm font-black pr-2 text-foreground/80">شماره موبایل</label>
          <Input
            v-model="form.phone"
            dir="ltr"
            placeholder="۰۹۱۲..."
            :class="
              cn(
                'h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-left',
                errors.phone ? 'border-destructive focus:border-destructive' : ''
              )
            "
          />
          <p v-if="errors.phone" class="text-xs text-destructive pr-2 font-medium">
            {{ errors.phone }}
          </p>
        </div>
      </div>

      <!-- موضوع پروژه / حوزه همکاری -->
      <div class="space-y-2 text-right">
        <label class="text-sm font-black pr-2 text-foreground/80">موضوع پروژه یا حوزه همکاری</label>
        <div class="flex flex-wrap gap-2 pt-1 mb-2">
          <button
            v-for="sub in contactSubjectOptions"
            :key="sub.id"
            type="button"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer',
              form.subject === l(sub.label)
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground',
            ]"
            @click="form.subject = l(sub.label)"
          >
            {{ l(sub.label) }}
          </button>
        </div>
        <Input
          v-model="form.subject"
          placeholder="در چه حوزه‌ای نیاز به همکاری دارید؟"
          class="h-14 rounded-2xl bg-background/50 border-border/60 focus:border-primary text-base px-5 text-right"
        />
      </div>

      <!-- توضیحات تکمیلی -->
      <div class="space-y-2 text-right">
        <label class="text-sm font-black pr-2 text-foreground/80">توضیحات تکمیلی</label>
        <Textarea
          v-model="form.description"
          rows="5"
          placeholder="خلاصه‌ای از ایده، اهداف یا چالش فنی خود را بنویسید..."
          :class="
            cn(
              'rounded-2xl bg-background/50 border-border/60 focus:border-primary p-5 text-base resize-none text-right',
              errors.description ? 'border-destructive focus:border-destructive' : ''
            )
          "
        />
        <p v-if="errors.description" class="text-xs text-destructive pr-2 font-medium">
          {{ errors.description }}
        </p>
      </div>

      <!-- دکمه ارسال پیام -->
      <Button
        type="submit"
        :disabled="isSubmitting"
        class="w-full h-16 rounded-2xl text-lg font-black gap-3 shadow-xl shadow-primary/25 hover:scale-[1.01] transition-all cursor-pointer"
      >
        <span>{{ isSubmitting ? 'در حال ثبت...' : 'شروع گفتگو با مشاوران' }}</span>
        <Send class="w-5 h-5 rtl:rotate-180" />
      </Button>
    </form>
  </div>
</template>

