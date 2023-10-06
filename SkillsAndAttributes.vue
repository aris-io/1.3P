<template>
    <div>
      <h2>Skills and Attributes</h2>
      <table>
        <tr>
          <th>IT Knowledge/Skills:</th>
          <th>Checklist</th>
        </tr>
        <tr>
          <td>C++</td>
          <td>&#10003;</td>
        </tr>
        <tr>
          <td>C#</td>
          <td>&#10003;</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>&#10003;</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>&#10003;</td>
        </tr>
        <tr>
          <td>Basic Knowledge in Cyber Security</td>
          <td>&#10003;</td>
        </tr>
        
       
        <tr>
          <th>Attributes:</th>
          <th>Checklist</th>
        </tr>
        <tr>
          <td>Leadership</td>
          <td>&#10003;</td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>&#10003;</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default 
  {
    name: 'SkillsAndAttributes',
  };
  </script>
  
  <style scoped>

  table 
  {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td 
  {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th 
  {
    background-color: #f2f2f2;
  }
  
  th:first-child, td:first-child 
  {
    font-weight: bold;
  }
  </style>