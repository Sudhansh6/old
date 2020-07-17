const navSlide = () =>
{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.links');
	const navLinks = document.querySelectorAll('.links a');
	
	burger.addEventListener('click',()=> {

		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		navLinks.forEach((link,index)=> {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.2}s`;
			}
		});
	});
	
};

document.addEventListener('DOMContentLoaded',()=>{
	navSlide();
});
