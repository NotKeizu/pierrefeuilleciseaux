const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const cisor = document.querySelector('.cisor')

const Pimg = document.querySelector('.Pimg')
const Cimg = document.querySelector('.Cimg')

const PscoreSpan = document.querySelector('.Pscore')
const CscoreSpan = document.querySelector('.Cscore')
let pScore = 0
let cScore = 0

const images_option = ['rock','paper','cisor']

const Pchoice = (i) =>{
    Pimg.src = 'assets/'+images_option[i]+'.png'
    Pimg.value = images_option[i]
    compareHands()
}
const Cchoice = (i) =>{
    Cimg.src = 'assets/'+images_option[i]+'.png'
    Cimg.value = images_option[i]
}

rock.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(0)
})
paper.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(1)
})
cisor.addEventListener('click', () =>{
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(2)
})

const compareHands = () =>{
    if(Pimg.value == 'rock'){
        if(Cimg.value == 'paper'){
            cScore += 1
        }
        else if(Cimg.value == 'cisor'){
            pScore += 1
        }
        else if(Cimg.value == 'rock'){

        }
    }
    else if(Pimg.value == 'cisor'){
        if(Cimg.value == 'rock'){
            cScore += 1
        }
        else if(Cimg.value == 'paper'){
            pScore += 1
        }
        else if(Cimg.value == 'cisor'){
            
        }
    }
    if(Pimg.value == 'paper'){
        if(Cimg.value == 'cisor'){
            cScore += 1
        }
        else if(Cimg.value == 'rock'){
            pScore += 1
        }
        else if(Cimg.value == 'paper'){
            
        }
    }
    PscoreSpan.textContent = pScore
    CscoreSpan.textContent = cScore
}