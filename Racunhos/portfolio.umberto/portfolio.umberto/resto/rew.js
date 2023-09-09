document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();//previne o envio padão do formulario
	
	//coleta as informções do formulario
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const interest = document.getElementById('interest').value;

	window.location.href = `mailto:hadryansantos588@gmail.com?subject=Contato do 
	site&body=Nome: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AInterest: ${interest}`;
	
})