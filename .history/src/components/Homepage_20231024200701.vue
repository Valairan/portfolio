<!-- App.vue -->
<template>
  <div>
    <h1>Simple Counter Example</h1>
    <counter></counter>
  </div>
</template>

<script>
import Counter from '.ter.vue';

export default {
  components: {
    'counter': Counter,
  },
};
</script>
