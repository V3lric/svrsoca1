let pageid = document.body.id;

if (pageid == "one")
{
    let intro = document.querySelector('.intro');
    let header = document.querySelector('.intro-header');
    let span = document.querySelectorAll('.intro-logo');
    let image = document.querySelector('.intro-image');
    let header1 = document.querySelector('.header1');
    let fin = 0;
    window.addEventListener('DOMContentLoaded',()=>{
        setTimeout(() => {
            span.forEach((span,index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (index + 1) * 400);
            });
                          
            setTimeout(() => {
                image.classList.add('active');
            }, 1400);  

            setTimeout(()=>{
                intro.style.top = '-100vh';
            },3000)

            image.classList.remove('active');
            fin = 1;

            if (fin == 1)
            {
                setTimeout(()=>{
                    header1.classList.add('active');
                },3000)
            }
        })
    })
}

if (pageid == "three")
{
    var boi = document.querySelector('.boi');
    document.getElementById("punch").addEventListener("click",walk);
    
    function walk(){
        boi.classList.toggle('walk');
    };
}
