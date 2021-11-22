const app = new Vue({

  el:'#app',

  data:{
    emails:[],
    isLoading:true,
    loadingText:'',
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
          console.log(error);
        })
      }
    }
  },



  mounted(){
   
  }
    
});