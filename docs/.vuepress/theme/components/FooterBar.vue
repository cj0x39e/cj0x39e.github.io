<template>
  <footer class="footer">
    <p class="text">© {{ thisYear }} cj0x39e</p>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
