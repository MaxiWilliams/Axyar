function colorSection() {
    let sections = ['#our-solutions', '#our-main', '#our-products', '#contacto']
    let url = window.location.hash

    sections.map((section, index) => {
        const sectionImg = document.querySelector(`#p${++index}`);

        if (url === section) {
            sectionImg.style.border = 'solid 4px #2a27ba';
        }
        else { sectionImg.style.border = 'none'; }
    })
}
window.addEventListener('hashchange', colorSection);

