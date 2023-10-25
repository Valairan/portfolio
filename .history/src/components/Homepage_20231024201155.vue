<!-- App.vue -->
<template>
  <div>
    <h1>You were looking for my portfolio. But </h1>
    <counter></counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  components: {
    'counter': Counter,
  },
};
</script>
