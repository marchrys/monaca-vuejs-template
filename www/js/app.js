// This is a JavaScript file
// App module
let app = {
  init: function(){
    initSounds();

    const langStr = window.navigator.language;

    //On détecte la langue de l'appareil
    if(langStr.substr(0, 2) == 'fr'){
        app.lang = 'fr';
    }
    else{
        app.lang = 'en';
    }

     const vue = new Vue({
       el: '#app',
       data: {
         message: 'Hello world!',
         allSoundsLoaded
       },
       methods: {
        //  sayHello: function() {
        //    alert('hello!');
        //  }
       },
       beforeMount(){
          // this.sayHello()
       },
     });
  }
}

document.addEventListener("deviceready", app.init, false);