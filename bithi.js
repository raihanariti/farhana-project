
const animationContainer = document.getElementById('butterfly-animation');
const animationData = {
    path: 'wired-outline-1148-bee-hover-pinch.json', // Path to your Lottie animation file
    renderer: 'svg',
    loop: true,
    autoplay: true,
    container: animationContainer,
};

lottie.loadAnimation(animationData);

setTimeout(() => {
    document.querySelector('.category-cards').classList.add('show');
}, 4000);
