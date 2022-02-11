var i = 0;
var txt = 'I design software with and for people. My background is in Software and Electrical Engineering. I am currently at Erodev Technologies Ltd, which focuses on development, testing, automation and procurement in technology advancement.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

window.addEventListener('load', function typeWriter() {
    if (i < txt.length) {
        document.getElementById("bio").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
    console.log('clicked');
    document.body.classList.toggle('dark');
});