//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  dataForm:{}
}
}, 
created(){
 
 
},
methods:{
    onSubmit:function (){
            console.log(JSON.stringify(this.dataForm))
        }
}
//inicializa la instancia de Vue
}).mount('#app')