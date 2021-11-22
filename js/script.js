const app = new Vue({

  el:'#app',

  data:{
    emails:[],
  },

  methods:{
    getEmails(){
      for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{
          const data = response.data;
          
          this.emails.push(data.response);
  
        })
        .catch((error) =>{
          console.log(error);
        })
      }
    }
  },

  mounted(){
    this.getEmails();
   
  }
    
});