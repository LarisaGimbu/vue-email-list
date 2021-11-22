const app = new Vue({

  el:'#app',

  data:{
    emails:[],
    isLoading:true,
    loadingText:'',
    httpError: false,
  },

  methods:{
    getEmails(){
      this.emails= [];
      this.isLoading= true;
      this.loadingText = 'Sto caricando...'

      for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{
          const data = response.data;
          
          this.emails.push(data.response);

          if(this.emails.length === 10){
            this.isLoading = false;
          }
  
        })
        .catch((error) =>{
          this.isLoading = false;
          this.httpError = true;
        })
      }
    }
  },



  mounted(){
   
  }
    
});