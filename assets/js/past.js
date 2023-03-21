//crea una instancia de Vue
const { createApp } = Vue
createApp({
  //define el estado de la aplicación
  data() {
    return {
      datos: {},
      dataEvents: [],
      checked: [],
      checkBox: [],
      eventPast: [],
      eventFiltrado: [],
      textSearch: ""
    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(datos => {
        this.datos = datos
        this.dataEvents = this.datos.events
        console.log(this.dataEvents)
        this.eventPast = this.dataEvents.filter(event => new Date(event.date) < new Date(this.datos.currentDate))
        this.checkBox = [... new Set(this.eventPast.map(event => event.category))]
      })
      .catch(error => console.log(error.message))
  },
  computed: {
    filtrarPorCheck: function filtroCheck() {
      let eventCheck = this.checked.length == 0 ? this.eventPast :
        this.eventPast.filter(evento =>
          this.checked.includes(evento.category))
      this.eventFiltrado = this.textSearch == "" ? eventCheck : eventCheck.filter(event => event.name.toLowerCase().search(this.textSearch.toLowerCase().trim()) != -1)

    }
  }
  //inicializa la instancia de Vue
}).mount('#app')