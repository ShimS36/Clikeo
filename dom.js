
const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    movie: null
  },
  methods:{
    checkForm: function (e) {
      if (this.choix && this.nom && this.mail && this.msg) {
        return true;
      }

      this.errors = [];

      if (!this.choix) {
        this.errors.push('Veuillez indiquer votre Civilité.');
      }
      if (!this.nom) {
        this.errors.push('Veuillez indiquer votre Nom.');
      }
      if (!this.mail) {
        this.errors.push('Veuillez indiquer un Email valide.');
      }
      if (!this.msg) {
        this.errors.push('Veuillez indiquer un Message.');
      }

      e.preventDefault();
    }
  }
})