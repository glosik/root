const anc = document.getElementById('showScroll');
const ancTwo = document.getElementById('anch2');
const footer = document.getElementById('footer');

console.log('topVisible', footer.scrollHeight);

window.addEventListener('scroll', function () {
    let wpyo = window.pageYOffset;
    let coords = footer.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;


    // top elem edge is visible?
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    if(topVisible){
       console.log('topVisible', coords.y , footer.scrollTop);
       }



    anc.innerHTML = wpyo + 'px';
    ancTwo.innerHTML = wpyo + 'px';
});

console.log('bon jovi');
