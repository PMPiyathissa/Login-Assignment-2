function registerUser(event){
    event.preventDefault()
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password_confirmation = document.getElementById("conf-pass").value;
    const email  = document.getElementById("email").value;

    const result = awaitfetch('/register',{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         username,
         password,
         password_confirmation,
         phone
       })
    }).then((res) => res.json())

    if (result.status === 'ok') {
       alert('success');
       
       window.location.assign = ("login2.html"); 
      alert (result.error)
    }
  }