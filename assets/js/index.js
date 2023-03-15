//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  dataEvents:[],
  checks:[],
  textSearch:"",
message: '¡Hola, Mundo!'
}
}, 
created(){
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response=>response.json())
  .then(datos=> {this.dataEvents=datos
  console.log(this.dataEvents)})
  .catch(error=>console.log(error.message))
  console.log(this.message)
},
methods:{

}
//inicializa la instancia de Vue
}).mount('#app')