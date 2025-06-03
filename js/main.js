document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de login
    const loginForm = document.getElementById('login-form');
   
   //renovacion de login
    /* 
    // Si estamos en la página de login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            
            // Validación básica (en un sistema real, esto se haría en el servidor)
            if (username && password && role) {
                // Redireccionar según el rol seleccionado
                switch(role) {
                    case 'admin':
                        window.location.href = 'admin/dashboard.html';
                        break;
                    case 'docente':
                        window.location.href = 'docentes/dashboard.html';
                        break;
                    case 'estudiante':
                        window.location.href = 'estudiantes/dashboard.html';
                        break;
                    default:
                        alert('Por favor seleccione un perfil válido');
                }
            } else {
                alert('Por favor complete todos los campos');
            }
        });
    } 
    */
    //se hara nuevamente el login


    // Funcionalidad para los menús desplegables en la barra lateral
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
    
    // Funcionalidad para las pestañas (tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            tabBtns.forEach(b => b.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el id del contenido a mostrar
            const tabId = this.getAttribute('data-tab');
            
            // Ocultar todos los contenidos
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Mostrar el contenido seleccionado
            const selectedContent = document.getElementById(tabId);
            if (selectedContent) {
                selectedContent.classList.remove('hidden');
            }
        });
    });
});