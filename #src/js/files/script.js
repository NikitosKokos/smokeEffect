document.addEventListener('DOMContentLoaded', () => {
    // Smoke Effect
    const text = document.querySelectorAll('.screen__text');
    const screens = document.querySelectorAll('.screen');

    function smokeEffect(text){
        text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

        text.querySelectorAll('span').forEach((word, i) => {
            setTimeout(() => {
                word.classList.add('_active');
                if(text.querySelectorAll('span').length === i+1 && text.classList.contains('screen__text_github')){
                    setTimeout(() => {
                    text.innerHTML = '<a href="https://github.com/NikitosKokos">Subscribe to my GitHub</a>';
                    text.querySelector('a').innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');
                    }, 2000);
                }
            }, 100 * i + 500);
        })
    }

    function hoverSmoke(hoverText) {
        text.forEach((el, i) => {
            screens[i].classList.remove('_active');
        });

        hoverText.querySelector('.screen__descr').innerHTML = hoverText.textContent.replace(/\S/g, '<span>$&</span>');

        hoverText.querySelector('.screen__descr').addEventListener('mouseover', (e) => {
            if(e.target.tagName != 'SPAN') return;
            e.target.classList.add('_active');
        });
    }

    text.forEach((text, i) => {
        setTimeout(() => {
            smokeEffect(text);
            screens[i].classList.add('_active');
        }, 3000 * i);
    });

    const redBtn = document.querySelector('.screen__tablet_red');
    const blueBtn = document.querySelector('.screen__tablet_blue');

    redBtn.addEventListener('click', () => {
        const textRed = document.querySelector('.screen_red');

        textRed.classList.add('_active');
        hoverSmoke(textRed);
    });

    blueBtn.addEventListener('click', () => {
        const textBlue = document.querySelector('.screen_blue');
        
        textBlue.classList.add('_active');
        hoverSmoke(textBlue);
    });
  

}); // end