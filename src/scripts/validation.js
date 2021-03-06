import Vue from 'vue';
import SimpleVueValidator from "simple-vue-validator";
const Validator = SimpleVueValidator.Validator;
new Vue( {
  el: "#form",
  mixins: [SimpleVueValidator.mixin],
  validators: {
    "user.data": function(value) {
      return Validator.custom(function() {
        if (value.length < 3) {
          return "Не менее 3 символов";
        }
      });
    },
    "user.email": function(value) {
      return Validator.custom(function() {
        if (value.length < 3) {
          return "Не менее 3 символов";
        }
      });
    },
    "user.message": function(value) {
      return Validator.custom(function() {
        if (value.length < 3) {
          return "Не менее 3 символов";
        }
      });
    }
  },
  data() {
    return {
      user: {
        data: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submit() {
      this.$validate()
        .then(function(success) {
          if (success) {
            alert("Успешно!");
          } else {
            alert("Ошибка!");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
