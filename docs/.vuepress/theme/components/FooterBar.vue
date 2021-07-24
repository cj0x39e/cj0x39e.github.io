<template>
  <footer class="footer">
    <p class="text">© {{ thisYear }} cj0x39e / I konw nothing</p>
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
