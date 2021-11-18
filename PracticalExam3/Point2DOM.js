const button2 = document.querySelector('#button2')

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
            let tdtv =tdt.value
            let nomv = nom.value
            let sbphv = Number(sbph.value)
            let nhdtv = Number(ndht.value)
            let ddsv = Number(dds.value)
            let bnsv = Number(bns.value)

            let mssg = ""

            
             if(nomv == "" || sbphv == "" || nhdtv == "" || ddsv == "" || bnsv == ""){
                alert("Llena todos los espacios!!")
                }
            else{
                
                if (tdtv === 'FIJO'){
        
                let sln = nhdtv *sbphv + bnsv - ddsv

                mssg = "Nombre: " + nomv + " ----- " + "Salario Neto: " + sln 
            }else{
                let sln = nhdtv * sbphv
                mssg = "Nombre: " + nomv + " ----- " + "Salario Neto: " + sln 
            }
            }
           r2.textContent = mssg
        }else{
         alert("error")
     }

    })

}