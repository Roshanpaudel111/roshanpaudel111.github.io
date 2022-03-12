const successMsg = document.getElementById('success-message');
const failureMsg = document.getElementById('failure-message');
const submitBtn = document.getElementById('formSubmitBtn');
const body = document.querySelector('#main');
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          failureMsg.classList.remove('hidden-display');
        } else {
          form.classList.add('was-validated');
          failureMsg.classList.add('hidden-display');
          successMsg.classList.remove('hidden-display');
        }
      },
      false
    );
  });
})();

body.addEventListener('click', () => {
  failureMsg.classList.add('hidden-display');
});
