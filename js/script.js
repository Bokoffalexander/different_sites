"use strict";    
      let para = document.querySelector('#write');
      para.addEventListener('click', updateName);
///////////////////
      function updateName() {
        let name = prompt('Enter a new name');    
        para.textContent = `Your new name: ${name}`;
      }
///////////////////
