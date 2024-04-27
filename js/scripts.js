const myObserver = new IntersectionObserver( (sections) => {
    sections.forEach((section) => {
        if (section.isIntersecting){
            section.target.classList.add('show')
            if (section.target.classList.contains('video')) {
                section.target.play(); // Iniciar a reprodução do vídeo
            }
        } else{
            section.target.classList.remove('show')
            if (section.target.classList.contains('video')) {
                section.target.pause(); // Pausar a reprodução do vídeo se não estiver visível
            }
        }
    })
})



const elements = document.querySelectorAll('.hidden')
const elementshidden = document.querySelectorAll('.elementhidden')
const video = document.querySelector('.video');

elements.forEach( (element) => myObserver.observe(element) )
elementshidden.forEach((hidden) => myObserver.observe(hidden))
logo.forEach( (imagem) => myObserver.observe(imagem) )
myObserver.observe(video); // Observar o vídeo