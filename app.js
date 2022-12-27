new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        title: "",
        time:  "",
        horas: 0


      }
       
    },
    
    computed: {
        totalTime () {
        let totalH = 0
        for (let course in this.courses){
        totalH += parseFloat(this.courses[course].time);
        }
      
        if(totalH > 0){
        console.log(`Número de horas actuales acumuladas: ${totalH}`)
        } 
        this.horas = totalH
        return totalH
       }
    },

    watch: {
        horas (newVal, oldVal){
          console.log(`Watch (horas x cursos)--> Valor nuevo: ${newVal} - Valor antiguo: ${oldVal}`)
          
        }
      },

    
    methods: {
        addCourse () {
        if (!this.title || !this.time || this.time <=0) { 
            this.title = ''
            this.time = ''
            return alert('Curso u horas están vacio o las horas son igual a 0.');
        }
        curso = {title: this.title, time: this.time}
        this.courses.push(curso)
        this.title = ''
        this.time = ''
    }

    }
})  