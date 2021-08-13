document.addEventListener('DOMContentLoaded', () => {
    // Smoke Effect
    const text = document.querySelectorAll('.screen__text');
    const screens = document.querySelectorAll('.screen');
    const redBtn = document.querySelector('.screen__tablet_red');
    const blueBtn = document.querySelector('.screen__tablet_blue');

    function smokeEffect(textArr, screens){
        if(textArr.length === 0) return;

        const text = textArr[0];
        screens[0].classList.add('_active');
        text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

        text.querySelectorAll('span').forEach((word, i) => {
            setTimeout(() => {
                word.classList.add('_active');
                if(text.querySelectorAll('span').length === i+1){
                    setTimeout(() => {
                        smokeEffect([...textArr].slice(1), [...screens].slice(1));
                        if(text.classList.contains('screen__text_buttons')){
                            text.remove();
                            redBtn.classList.add('_active');
                            blueBtn.classList.add('_active');
                        }
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

    // text.forEach((text, i) => {
    //     setTimeout(() => {
    //         smokeEffect(text);
    //         screens[i].classList.add('_active');
    //     }, 3000 * i);
    // });
    smokeEffect(text, screens);

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