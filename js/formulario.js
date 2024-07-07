document.addEventListener('DOMContentLoaded', function () {

    function showSweetAlert() {
        Swal.fire({
            title: 'Complete el formulario:',
            width: 550,
            background: 'black',
            customClass: {
                popup: 'custom-popup-class',
                title: 'custom-title-class',
                htmlContainer: 'custom-html-container-class',
            },
            html: `
          <form id="myForm">
            <label for="name" >NOMBRE:</label>
            <input id="swal-input1" class="swal2-input" required>
            <label for="name" >APELLIDO:</label>
            <input id="swal-input2" class="swal2-input" required>
            <label for="email" >E-MAIL:</label>
            <input id="swal-input3" class="swal2-input" required>
            <label for="direccion" >DIRECCION:</label>
            <input id="swal-input4" class="swal2-input" required>
            <label for="telefono" >TELEFONO:</label>
            <input id="swal-input5" class="swal2-input" required>
          </form>
        `,


            focusConfirm: false,
            showCloseButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
            preConfirm: () => {
                const form = document.getElementById('myForm');

                if (!form.checkValidity()) {
                    Swal.showValidationMessage('Por favor completa los campos requeridos.');
                    return false;
                }

                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input4').value,
                    document.getElementById('swal-input5').value,
                ];
            }
        }).then((result) => {

            Swal.fire({
                width: 450,
                position: "center",
                icon: "info",
                title: `Agregando 5 productos de la misma oferta o 5 diferentes ofertas, usted obtiene un 10% de descuento en su total a pagar!`,
                color: "red",
                background: "black",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
            });


            if (result.isConfirmed) {
                const formValues = result.value;
                sessionStorage.setItem('nombre', JSON.stringify(formValues));
                sessionStorage.setItem('sweetAlertShown', 'true');
            }

        });
    }

    !sessionStorage.getItem('sweetAlertShown') ? showSweetAlert() : (() => {
        const storedFormValues = sessionStorage.getItem('formValues');
        if (storedFormValues) {
            Swal.fire(JSON.parse(storedFormValues));
        }
    })();
});


