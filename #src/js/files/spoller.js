let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
	function initSpollers(spoller){
		if (spoller.classList.contains('_spoller-992') && window.innerWidth < 992) {
			spoller.classList.add('_init');
		}else if (spoller.classList.contains('_spoller-768') && window.innerWidth < 768) {
			spoller.classList.add('_init');
		}else{
			spoller.classList.remove('_init');
		}
	}

	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];

		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);
		});

		initSpollers(spoller);

		window.addEventListener('resize',() =>  initSpollers(spoller));
	}
}