<template>
  <form ref="formEl" class="form" @submit.prevent="handleSubmit" novalidate>
    <div class="form__group">
      <label for="contact-name" class="form__label">Nombre</label>
      <input
        id="contact-name"
        name="user_name"
        type="text"
        class="form__input"
        :class="{ error: touched.user_name && errors.user_name }"
        v-model="form.user_name"
        placeholder="Tu nombre"
        autocomplete="name"
        @blur="touched.user_name = true"
      />
      <span v-if="touched.user_name && errors.user_name" class="form__error">{{ errors.user_name }}</span>
    </div>

    <div class="form__group">
      <label for="contact-email" class="form__label">Email</label>
      <input
        id="contact-email"
        name="user_email"
        type="email"
        class="form__input"
        :class="{ error: touched.user_email && errors.user_email }"
        v-model="form.user_email"
        placeholder="tu@email.com"
        autocomplete="email"
        @blur="touched.user_email = true"
      />
      <span v-if="touched.user_email && errors.user_email" class="form__error">{{ errors.user_email }}</span>
    </div>

    <div class="form__group">
      <label for="contact-message" class="form__label">Mensaje</label>
      <textarea
        id="contact-message"
        name="message"
        class="form__textarea"
        :class="{ error: touched.message && errors.message }"
        v-model="form.message"
        placeholder="¿En qué puedo ayudarte?"
        @blur="touched.message = true"
      />
      <span v-if="touched.message && errors.message" class="form__error">{{ errors.message }}</span>
    </div>

    <button type="submit" class="form__submit" :disabled="sending">
      {{ sending ? 'Enviando…' : 'Enviar mensaje' }}
    </button>
  </form>
</template>

<script setup lang="ts">
const { form, errors, touched, sending, sendEmail } = useContactForm()
const formEl = ref<HTMLFormElement>()

async function handleSubmit() {
  if (!formEl.value) return
  const ok = await sendEmail(formEl.value)
  const Swal = (await import('sweetalert2')).default
  if (ok) {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Me pondré en contacto contigo pronto.',
      timer: 2000,
      showConfirmButton: false,
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error al enviar',
      text: 'Por favor inténtalo de nuevo o escríbeme directamente.',
      timer: 2500,
      showConfirmButton: false,
    })
  }
}
</script>
