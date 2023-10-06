<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/about">About Me</router-link></li>
          <li><router-link to="/skills">Skills and Attributes</router-link></li>
          <li><router-link to="/previous-work">Previous Work</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>

    <div class="enjoyment-checkbox">
      <p>Did you enjoy my website about me?</p>
      <label for="yes">Yes</label>
      <input type="checkbox" id="yes" value="yes" v-model="enjoymentResponse" @change="handleCheckboxChange">
      <label for="no">No</label>
      <input type="checkbox" id="no" value="no" v-model="enjoymentResponse" @change="handleCheckboxChange">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      enjoymentResponse: []
    };
  },
  methods: 
  {
    handleCheckboxChange() 
    {
      console.log('Selected values:', this.enjoymentResponse);
    }
  }
};
</script>

<style>
.enjoyment-checkbox 
{
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
