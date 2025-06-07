"use strict";
///////////////////
let d = "Start";
///////////////////
async function fetchLastPrice() {  
      const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhH2xvl5qD-cGmTvMPjLYYnoBOdpaMuAIaonsmjJpvEfm4PvlalovHnjeIakDQxm8ekBkXW98STIBkApdnFkl9mNK81HKV4qp3UNiiSwkFWdV4AUJhw7fT144xSL6o1HIByfGT8xeaElM30eAgAHeLvqXTADLX6XwucGKfwDQgMb_cqfSrK7Ob38DKcBe3Yl9OiE5gAYd4EyZAOVb-aBz8o9hhr0RKSeg7qddUNmA763VaVeu0yHYQ1tsPsLrBt0N-g62DpDPCuUjQjNXl6uurFjn_UdWrctCvhWHuO&lib=MZcsNb0Mnrg0JRLj0QmDrFb4Kw0A39Po-');  
      const data = await response.json();  
      d = data;
      console.log(data);
}
/////////////////// 
fetchLastPrice();
///////////////////     
      const para = document.querySelector('#write');
      para.addEventListener('click', updateName);
///////////////////
      function updateName() {
        const name = prompt('Enter a new name');    
        para.textContent = `Your new name: ${name} and ${d.data[1].Name}`;
      }
///////////////////
