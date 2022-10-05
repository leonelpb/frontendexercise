const  adviceId	= document.getElementById('advice-id');
const  adviceQuote = document.getElementById('advice-quote');
const  rollBtn = document.getElementById('roll-btn');

const fetchAdvice = function(){
	fetch('https://api.adviceslip.com/advice')
	.then(res => res.json())
	.then(slip => displayQuote(slip));
}

function displayQuote(slip){
	adviceId.textContent = `Advice #${slip.slip.id}`;
	adviceQuote.textContent = slip.slip.advice;
}

fetchAdvice();
rollBtn.addEventListener('click',fetchAdvice);