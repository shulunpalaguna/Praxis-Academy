Vue.component('navbar', {
    template:`    
    <div class="topnav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
    </div>`
    ,
    data: function(){
        return {
        pesan : 'Hello, komponen!'
        }
    }
})

Vue.component('footer-komponen',{
    template:`
    <div class="footer">
    <p>Footer</p>
    </div>`
})

Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">Anda mengklik saya {{ count }} kali.</button>'
  })

var app = new Vue({
    el: '#app',
    data: {
      pesan: 'Hello Vue!'
    }
  })
