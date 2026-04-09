let progress = 0;
const bar = document.getElementById('progress-bar')
const btn = document.getElementById('increment-btn')

btn.addEventListener('click', () => {
    if(progress < 100){
        progress += 1;
        if(progress > 100) progress = 100
        bar.style.width = progress + '%'
    }
})