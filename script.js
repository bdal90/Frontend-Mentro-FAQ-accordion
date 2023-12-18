const faqItemEl = document.querySelectorAll('.faq-item');

faqItemEl.forEach((event) => {
    event.addEventListener('click', () => {
        faqItemEl.forEach((item) => {
            if(item.classList.contains('active') || item!==event) {
                item.classList.remove('active')
            } else {item.classList.add('active')}
        })
    })
})