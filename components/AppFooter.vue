<template>
  <footer class="footer">
    <span>Alberto Glez. · {{ year }}</span>
    <div class="footer__links">
      <a href="https://www.linkedin.com/in/albegosu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/albegosu" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://albegosu.github.io/albegosu/" target="_blank" rel="noopener noreferrer">Notes</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
