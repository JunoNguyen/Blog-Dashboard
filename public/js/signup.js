const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();
  console.log(username);
  console.log(password);
  if (username && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up');
    }
  };
}

document
  .querySelector('#signup-form')
  .addEventListener('click', signupFormHandler);
