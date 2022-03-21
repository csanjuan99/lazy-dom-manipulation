import imgRegister from './lazy.js'

const app = document.getElementById('app');

const fetchData = async () => {
    const response = await fetch('https://randomfox.ca/floof/');
    return await response.json();
};

const createImg = (url) => {
    const div = document.createElement('div')
    div.className = "px-5"
    const img = document.createElement('img');
    img.width = '320';
    img.className = "mx-auto rounded-md shadow-md";
    img.dataset.src = url;
    div.appendChild(img);
    return div;
}

const addImage = document.getElementById('addImage');
addImage.addEventListener('click', () => {
    fetchData().then(data => {
        const img = createImg(data.image);
        img.className = "p-3";
        img.style.borderRadius = "15px";
        app.appendChild(img);
        imgRegister(img);
    });
});


