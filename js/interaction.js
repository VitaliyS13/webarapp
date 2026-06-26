const InteractionManager = {
    init() {
        console.log("InteractionManager: Ініціалізація обробників подій користувача.");

        const box = document.getElementById('box-hiro');
        const sphere = document.getElementById('sphere-kanji');

        if(box) {
            box.addEventListener('click', () => {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                box.setAttribute('color', randomColor);
                console.log(`Interaction: Змінено колір Куба на ${randomColor}`);
            });
        }

        if(sphere) {
            sphere.addEventListener('click', () => {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                sphere.setAttribute('color', randomColor);
                console.log(`Interaction: Змінено колір Сфери на ${randomColor}`);
            });
        }
    }
};