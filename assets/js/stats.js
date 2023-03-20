//crea una instancia de Vue
const { createApp } = Vue
createApp({
//define el estado de la aplicación
data() {
return {
  datos:{},
  dataEvents:[],
  categoriaUpcoming:[],
  categoriaPast:[],
  upcoming:[],
  past:[],
  tableUpcoming:[],
  tablePast:[]
  
}
}, 
created(){
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response=>response.json())
  .then(datos=> {
    this.datos=datos
    this.dataEvents=this.datos.events
    console.log(this.dataEvents)
    this.upcoming=datos.events.filter(event=>new Date(event.date)> new Date(this.datos.currentDate))
    console.log(this.upcoming)
    this.past=datos.events.filter(event=>new Date(event.date)< new Date(this.datos.currentDate))
  console.log(this.past)
    this.categoriaUpcoming=[... new Set(this.upcoming.map(event=>event.category))]
    console.log(this.categoriaUpcoming)
  this.categoriaPast=[... new Set(this.past.map(event=>event.category))]
  console.log(this.categoriaPast)

})
  .catch(error=>console.log(error.message))

},
method:{
   
 
    percentAttendance: function (arrayCard){
       
       let sumaCapacidad=arrayCard.
       return (sumaCapacidad*100/arrayByCategory.length).toFixed(2)
     }

     
     
},
computed:{
    
     calculo:function(){
    this.categoriaUpcoming.forEach(category=>{
        let objet={}
        objet.category=category
        let eventsByCategory=this.upcoming.filter(event=>event.category==category)
        objet.revenue=eventsByCategory.reduce((total,event)=>{event.assistance==undefined?total+=(event.estimate*event.price):total+=(event.assistance*event.price)
          return total},0)
                
        objet.porcentaje= (eventsByCategory.reduce((total,event)=>{event.assistance==undefined?total+=(event.estimate/event.capacity):total+=(event.assistance/event.capacity)
        return total},0)*100/eventsByCategory.length).toFixed(2)
       
        this.tableUpcoming.push(objet)
        
      })

      this.categoriaPast.forEach(category=>{
        let objet={}
        objet.category=category
        let eventsByCategory=this.past.filter(event=>event.category==category)
        objet.revenue=eventsByCategory.reduce((total,event)=>{event.assistance==undefined?total+=(event.estimate*event.price):total+=(event.assistance*event.price)
          return total},0)
                
        objet.porcentaje= (eventsByCategory.reduce((total,event)=>{event.assistance==undefined?total+=(event.estimate/event.capacity):total+=(event.assistance/event.capacity)
        return total},0)*100/eventsByCategory.length).toFixed(2)
       
        this.tablePast.push(objet)
        
      })

     }
    
}
//inicializa la instancia de Vue
}).mount('#app')