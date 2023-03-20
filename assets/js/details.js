//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  datos:{},
  dataEvents:[],
  card:{},
  id:"",
message: '¡Hola, Mundo!'
}
}, 
created(){
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response=>response.json())
  .then(datos=> {this.datos=datos
    this.dataEvents=this.datos.events
  const queryString=location.search
  const params= new URLSearchParams(queryString)
  this.id=params.get("id")
  this.card=this.dataEvents.find(event=>event._id==this.id)
})
  .catch(error=>console.log(error.message))
 
},
methods:{

}
//inicializa la instancia de Vue
}).mount('#app')