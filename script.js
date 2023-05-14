const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controlls');
const sectbtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition () {
    for(let i=0; i<sectbtn.length; i++) {
        sectbtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            // remove selected from the above button
            sectbtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
PageTransition();