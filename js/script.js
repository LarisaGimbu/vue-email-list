const app = new Vue({

  el:'#app',

  data:{

  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) =>{
        const data = response.data;
        console.log(data.response);
      })
  }
});