<template>
    <div>
      <label>
        Did you enjoy my website about me?
        <input type="checkbox" v-model="enjoyed" @change="updateEnjoyment">
      </label>
    </div>
  </template>
  
  <script>
  export default 
  {
    data() 
    {
      return {
        enjoyed: false,
      };
    },
    methods: 
    {
      updateEnjoyment() 
      {
        
        this.$emit('enjoyment-change', this.enjoyed);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  