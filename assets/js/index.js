//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  dataEvents:[],
  checked:[],
  checkBox:[],
  eventFiltrado:[],
  textSearch:"",
message: '¡Hola, Mundo!'
}
}, 
created(){
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response=>response.json())
  .then(datos=> {this.dataEvents=datos
  console.log(this.dataEvents)
this.checkBox=[... new Set(this.dataEvents.events.map(event=>event.category))]})

  .catch(error=>console.log(error.message))
  console.log(this.message)
},
methods:{

},
computed:{
  filtrarPorCheck:function filtroCheck(){
   let eventCheck=this.checked.length==0?this.dataEvents.events:
    this.dataEvents.events.filter(evento=>
      this.checked.includes(evento.category))
     this.eventFiltrado= this.textSearch==""?eventCheck: eventCheck.filter(event=>event.name.toLowerCase().search(this.textSearch.toLowerCase().trim())!=-1)
     return this.eventFiltrado
  }
}
//inicializa la instancia de Vue
}).mount('#app')