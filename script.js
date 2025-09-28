// Validações simples + exibição no console

const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('login-email');
const senhaInput = document.getElementById('login-senha');
const errEmail = document.getElementById('err-email');
const errSenha = document.getElementById('err-senha');

// Regex simples para e-mail em formato válido (suficiente para o exercício)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail(value) {
  if (!value) return 'Informe o e-mail.';
  if (!emailRegex.test(value)) return 'E-mail inválido (ex: exemplo@dominio.com).';
  return '';
}

function validarSenha(value) {
  if (!value) return 'Informe a senha.';
  if (value.length < 6) return 'A senha deve ter ao menos 6 caracteres.';
  return '';
}

// Validação ao digitar (opcional, deixa a UX melhor)
emailInput.addEventListener('input', () => {
  errEmail.textContent = validarEmail(emailInput.value);
});

senhaInput.addEventListener('input', () => {
  errSenha.textContent = validarSenha(senhaInput.value);
});

// Submit do Login
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailErro = validarEmail(emailInput.value.trim());
  const senhaErro = validarSenha(senhaInput.value);

  errEmail.textContent = emailErro;
  errSenha.textContent = senhaErro;

  // Se tiver qualquer erro, não continua
  if (emailErro || senhaErro) return;

  // ✅ Exige-se apenas exibir no console
  console.clear();
  console.log('=== LOGIN ENVIADO ===');
  console.log('Email:', emailInput.value.trim());
  console.log('Senha:', senhaInput.value);

  // (Opcional) mostrar um feedback visual
  formLogin.querySelector('.btn').textContent = 'Logado!';
  setTimeout(() => (formLogin.querySelector('.btn').textContent = 'Logar'), 1200);

  // (Não redirecionar e nem autenticar de verdade — requisito do trabalho)
});
