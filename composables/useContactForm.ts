export interface ContactFormData {
  user_name: string
  user_email: string
  message: string
}

export interface FormErrors {
  user_name?: string
  user_email?: string
  message?: string
}

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export function useContactForm() {
  const form = reactive<ContactFormData>({
    user_name: '',
    user_email: '',
    message: '',
  })

  const errors = reactive<FormErrors>({})
  const touched = reactive({ user_name: false, user_email: false, message: false })
  const sending = ref(false)

  function validate(): boolean {
    errors.user_name = undefined
    errors.user_email = undefined
    errors.message = undefined

    if (!form.user_name || form.user_name.length < 2) {
      errors.user_name = 'El nombre debe tener al menos 2 caracteres.'
    }
    if (!form.user_email || !EMAIL_REGEX.test(form.user_email)) {
      errors.user_email = 'Introduce un email válido.'
    }
    if (!form.message || form.message.length < 5) {
      errors.message = 'El mensaje debe tener al menos 5 caracteres.'
    }

    return !errors.user_name && !errors.user_email && !errors.message
  }

  async function sendEmail(formEl: HTMLFormElement): Promise<boolean> {
    touched.user_name = true
    touched.user_email = true
    touched.message = true

    if (!validate()) return false

    sending.value = true
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.default.sendForm(
        'service_mail',
        'contact_template',
        formEl,
        'KF7lsiSCb4zIDvGmU',
      )
      form.user_name = ''
      form.user_email = ''
      form.message = ''
      touched.user_name = false
      touched.user_email = false
      touched.message = false
      return true
    } catch {
      return false
    } finally {
      sending.value = false
    }
  }

  return { form, errors, touched, sending, validate, sendEmail }
}
