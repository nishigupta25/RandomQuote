const quoteContainer=document.getElementById('quote');
const btn=document.getElementById('btn');
const url=" http://api.quotable.io/random"
btn.addEventListener('click',getQuote);
function getQuote()
{
  fetch(url);
  .then(res=>res.json())
  .then(data=>{
      quoteContainer.textContent=data.content;
  })
}