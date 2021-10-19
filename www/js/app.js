// This is a JavaScript file
// App module
let app = {
  init: function(){
    initSounds();

     const vue = new Vue({
       el: '#app',
       data: {
         lang: null,
         message: 'Hello world!',
         allSoundsLoaded
       },
       methods: {
        //  sayHello: function() {
        //    alert('hello!');
        //  }
       },
       beforeMount(){
          const langStr = window.navigator.language;
          //On détecte la langue de l'appareil
          if(langStr.substr(0, 2) == 'fr'){
              this.lang = 'fr';
          }
          else{
              this.lang = 'en';
          }
       },
     });
  }
}

document.addEventListener("deviceready", app.init, false);