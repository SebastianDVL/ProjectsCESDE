const button1 = document.querySelector("#button1")

if(button1){
    
    button1.addEventListener('click', function(event){

        const blp = document.querySelector('#blp')
        const np = document.querySelector('#np')
        const rt = document.querySelector('#rt')
        
        const r = document.querySelector('#r')

      if(blp && np && rt && r){
            let pbv = blp.value
            let nptv = Number(np.value) 
            let rtv = rt.value
            var msg = ""
            if(pbv == "" || nptv == ""){
                alert("LLena todos los espacios!!!")
            }else{
                if(rtv === "a" || rtv === 'A'){ 
                    let dr = nptv * 1200
                    msg = "El bus con placa " + pbv + " recolecto un total de " + dr
                    clean() 
                    
                }else{
                  let dr = nptv * 1000
                    msg = "El bus con placa " + pbv + " recolecto un total de " + dr
                    clean()}
               
            }
            r.textContent = msg
      
        } 

    })
}

function clean(){
    blp.value = ""
    np.value = ""
    rt.value = ""
}