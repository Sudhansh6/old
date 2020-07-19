const navSlide = () =>
{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.links');
	const navLinks = document.querySelectorAll('.links li');
	
	burger.addEventListener('click',()=> {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		navLinks.forEach((link,index)=> {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.1}s`;
			}
		});
	});
	
};

document.addEventListener('DOMContentLoaded',()=>{
	navSlide();
	const content = document.querySelector('.content');
	if(content.style.animation)
	{
		content.style.animation = '';
	}
	else
	{
		content.style.animation = `appear 0.5s`;
	}
});
