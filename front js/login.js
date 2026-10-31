console.log('Arquivo login.js funcionando');

function mostrarSenha(){
    const campo = document.getElementById('senha'); 
    campo.type = campo.type === 'password' ? 'text' : 'password'; 
    this.setAttribute('aria-label', campo.type === 'password' ? 'Mostrar senha' : 'Ocultar senha');
};

