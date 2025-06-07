"use strict";
///////////////////
let dat="Start";
///////////////////
async function fetchLastPrice() {  
      const response = await fetch('https://petstore.swagger.io/v2/user/boko');  
      const data = await response.json();  
	dat = data;
	console.log(data);
///////////////////
              

      const para = document.querySelector('#write');

      para.addEventListener('click', updateName);

      function updateName() {
        fetchLastPrice();
        const name = prompt('Enter a new name');


            
        para.textContent = `Your new name: ${name} and ${dat.email}`;
      }
