const app = new Vue({
  el: '#app',
  data: {
    title: "Mon super titre",
    message: 'Hello Vue !',
    isVisible: true,
    todos: [ // on boucle un tableau avec des objets //
      {text: "Le JS pour les nuls !"}, //objet avec la valeur associée
      {text: "C'est plus facile avec VueJs"},
      {text: "Good Luck everyone !"},
    ]
  },
  methods: {
    reverseMessage: function (){
      this.message = this.message. // Hello World !
      split(' '). // coupe au niveau des espaces ['Hello', 'World', '!']
      reverse(). // inverse les éléments dans le tableau ['!', 'World', 'Hello']
      join(' ') // ! world hello
    }
  }
})
