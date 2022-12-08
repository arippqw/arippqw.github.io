const title = document.getElementById('title')
        
const instagram = document.getElementById('instagram');
const tiktok = document.getElementById('tiktok');

const igimg = document.getElementById('igimg');
const ttimg = document.getElementById('ttimg');

const igtext = document.getElementById('igtext');
const tttext = document.getElementById('tttext');

const link = ['https://instagram.com/aripp.qw', 'https://www.tiktok.com/@arippqw?_t=8XhmMPD2zOU&_r=1'];

instagram.addEventListener('click', () => {
    igimg.classList.add('hidden');
    tiktok.classList.add('hidden');
    title.classList.add('hidden')
    setTimeout(() => {
        igtext.classList.remove('h-10');
        igtext.classList.remove('w-28');
        instagram.classList.remove('scale-75')
        igtext.classList.remove('rounded-xl');
        instagram.classList.add('h-screen');
        instagram.classList.add('w-full');
        igtext.classList.add('h-screen');
        igtext.classList.add('w-full');
            setTimeout(() => {                
                igtext.innerHTML = "Instagram: aripp.qw"
                setTimeout(() => {
                    igtext.innerHTML = "Let's gooo";
                    setTimeout(() => {
                          location.href = link[0];
                        setTimeout(() => {
                            location.reload();
                        }, 6000)
                    }, 300); 
                }, 1200);
            }, 700)
    }, 500)
});

tiktok.addEventListener('click', () => {
    ttimg.classList.add('hidden');
    instagram.classList.add('hidden');
    title.classList.add('hidden')
    setTimeout(() => {
        tttext.classList.remove('h-10');
        tttext.classList.remove('w-28');
        tiktok.classList.remove('scale-75')
        tttext.classList.remove('rounded-xl');
        tiktok.classList.add('h-screen');
        tiktok.classList.add('w-full');
        tttext.classList.add('h-screen');
        tttext.classList.add('w-full');
        setTimeout(() => {
            tttext.innerHTML = "Tiktok: Aripp.qw"
            setTimeout(() => {
                tttext.innerHTML = "Let's gooo";
                setTimeout(() => {
                      location.href = link[1];
                    setTimeout(() => {
                        location.reload();
                    }, 6000)
                }, 300); 
            }, 1200);
        }, 700)
    }, 500)
});