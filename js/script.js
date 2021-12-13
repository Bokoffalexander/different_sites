"use strict";

      const para = document.querySelector('#write');

      para.addEventListener('click', updateName);

      function updateName() {
        const name = prompt('Enter a new name');
        para.textContent = `Your new name: ${name}`;
      }