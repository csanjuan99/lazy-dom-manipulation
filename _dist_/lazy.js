const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImg = (entry) => {
    entry.target.classList.add('visible')
    console.log('visible')
    const img = entry.target.querySelector('img')
    img.src = img.dataset.src
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";
    imageWrapper.appendChild(img);
    entry.target.appendChild(imageWrapper);
    observer.unobserve(entry.target)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .filter(loadImg)
});

const imgRegister = (img) => {
    observer.observe(img)
}

export default imgRegister;