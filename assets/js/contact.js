//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  dataForm:{},
  dataJson:undefined
}
}, 
created(){
 
 
},
methods:{
    onSubmit:function (){
      this.dataJson=JSON.stringify(this.dataForm)
            alert("Gracias por su consulta. Responderemos a la brebedad: "+ this.dataJson)
            this.dataForm={}
        }
}
//inicializa la instancia de Vue
}).mount('#app')