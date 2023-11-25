const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });
    const hiddenElements = document.querySelectorAll('.hidden'); hiddenElements.forEach((el) => observer.observe(el));
    document.body.addEventListener("pointermove", (e)=>{
        const { currentTarget: el, clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX',  x-l-w/2);
        el.style.setProperty('--posY',  y-t-h/2);
      })