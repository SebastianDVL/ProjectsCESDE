const button2 = document.querySelector('#button2')
tdt.addEventListener("change", (event)=>{



if(tdt.value === "2"){
    sbph.value = 6000
    dds.value = 0
    bns.value = 0

    sbph.disabled = true
    dds.disabled = true
    bns.disabled = true
    

}else{
    sbph.value = ""
    dds.value = ""
    bns.value = ""
    sbph.disabled = false
    dds.disabled = false
    bns.disabled = false
}

})
if(button2){
    button2.addEventListener('click', (event)=>{

        const tdt = document.querySelector('#tdt')
        const nom = document.querySelector('#nom')
        const sbph = document.querySelector('#sbph')
        const ndht = document.querySelector('#ndht')
        const dds = document.querySelector('#dds')
        const bns = document.querySelector('#bns')
        const r2 = document.querySelector('#r2')
        
       

        if(tdt && nom && sbph && ndht && dds && bns && r2){
            let tdtv = tdt.value
            let nomv = nom.value
            let sbphv = Number(sbph.value)
            let ndhtv = Number(ndht.value)
            let ddsv = Number(dds.value)
            let bnsv = Number(bns.value)

            let mssg = ""
         
            if (tdtv ===  "1"){

                if(nomv == "" || ndhtv == "" || sbphv == "" || ddsv == "" || bnsv == ""){
                    alert("Llena todos los espacios!!")
                }else{ 
                   
                    let sln = ndhtv *sbphv + bnsv - ddsv
                    mssg = "Nombre: " + nomv + " ----- " + "Salario Neto: " + sln 
                }
            }else{
                
                if(nomv == "" || ndhtv == ""){
                    alert("Llena todos los espacios!!")  
                }
                else{
                let sln = ndhtv * sbphv
                mssg = "Nombre: " + nomv + " ----- " + "Salario Neto: " + sln} 
            }
             r2.textContent = mssg
             clean()
       
        }else{
         alert("error")
        }

    })

}

function clean(){
    nom.value = ""
    sbph.value = ""
    ndht.value = ""
    dds.value = ""
    bns.value = ""
}
