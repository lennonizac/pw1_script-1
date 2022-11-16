function fazNumeroAleatorio(){
    
    let  aleatorios = new Array();
    for (let i = 0;i < 6; i++){
       let aleatorio = Math.floor(Math.random() * 60)

       for  (let i=0 ;i < aleatorios.length; i++){
        while(aleatorio == aleatorios[i]) {
            aleatorio = Math.floor(Math.random() * 60)
            i=0;
        }
        }

        if (aleatorio >= 1 && aleatorio <= 24 && i <=2){
            aleatorios.push(aleatorio);
        }
        else if (aleatorio >= 25 && aleatorio <= 60 && i >= 3){
            aleatorios.push(aleatorio);
        }
        else{
            i--
        }
    }
    return aleatorios.sort()
}

console.log(fazNumeroAleatorio())