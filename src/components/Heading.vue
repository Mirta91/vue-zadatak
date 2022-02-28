<template>
    <div class="text-center m-auto p-6">
        <img alt="Vue logo" src="../assets/logo.png" class="max-h-12 text-center m-auto" />
        <h1 class="font-sans text-4xl"> {{ title }} </h1>
    </div>
</template>

<script>
export default {
    
  name: "Heading",
  components: {
  },
  props: {
    title: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
     // readMore: false,
    };
  },
  methods: {

  },
};
</script>