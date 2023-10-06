<template>
    <div>
      <h2>About Me</h2>
      <p>I am a current Bachelor of Information Technology Student at Deakin University. I am an avid music enjoyer and movie watcher, but am also a sports person who enjoys both volleyball and tennis. I can also solve a rubiks cube which is an odd fact about me. I aspire to work in the game creation field after I complete my university degree too. Due to the fact that I love playing games the most!
      </p>
      <div class="image-container">
        <img src="@/assets/images/image1.jpg" alt="Image 1">
        <img src="@/assets/images/image2.jpg" alt="Image 2">
        <img src="@/assets/images/image3.jpg" alt="Image 3">
        <img src="@/assets/images/image4.jpg" alt="Image 4">
        <img src="@/assets/images/image5.jpg" alt="Image 5">
      </div>
    </div>
  </template>
  
  <script>
  export default 
  {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>

  .image-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .image-container img {
    width: 18%;
    height: auto;
  }
  </style>
  