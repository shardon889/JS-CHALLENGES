document.querySelectorAll('a').forEach(playSound)

function playSound(item,index, array){

    item.addEventListener('click', ()=>{ playAudio(`./audio/key-${index+1}.mp3`); })
    
}

function playAudio(path){
    let audio = new Audio(path);
    audio.loop = false;
    audio.play();
}


