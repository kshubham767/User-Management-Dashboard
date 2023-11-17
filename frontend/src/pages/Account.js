import React, { useState } from 'react'

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState();


  async function handleSignUp(e) {
    e.preventDefault();
    console.log(name, email, phone, password)
    fetch("http://localhost:5001/user/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password, phone
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        alert("Account Created Successfully");
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        console.log('Response data:', data);
      })
      .catch(error => {
        if (error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500) {
          setError(error.response.data.message);
        }
      });
  }

  return (
    <form onSubmit={handleSignUp}>
      <div className="container">
        <h1>Create Account</h1>
        <p>Please fill in this form to create an account.</p>

        <label htmlFor="username"><b>Username</b></label>
        <input type="text" id="username" name="username" placeholder="Enter Username"
          autoComplete="new-password"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          required
        />

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" id="email" placeholder="Enter Email" name="email"
          autoComplete="new-password"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          required
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" id="psw" placeholder="Enter Password" name="psw"
          autoComplete="new-password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          required
        />

        <label htmlFor="phone"><b>Phone Number</b></label>
        <input type="phone" id="phone" name="phone" placeholder="9123456787"
          autoComplete="new-password"
          value={phone}
          onChange={(e) => { setPhone(e.target.value) }}
          required
        />

        <div className="clearfix">
          <button type="submit" className="btn">Submit</button>
        </div>
      </div> 
      {error && <div>{error}</div>}
    </form>
  )
}

export default Account