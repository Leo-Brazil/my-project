    const menubtn = document.querySelector('.menu-btn');
    const closebtn = document.querySelector('.close-btn');
    const body = document.body;

    menubtn.addEventListener('click', () => {
        body.classList.add('menu-open');
    });

    closebtn.addEventListener('click', () => {
        body.classList.remove('menu-open')
    });
