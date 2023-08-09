import React, { useContext, useState } from 'react';
import { userAuth } from './UserProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

  let { googlePopUp } = useContext(userAuth)

  let [err, setErr] = useState(null)

  let submit = (event) => {

   

    event.preventDefault()

    let email = event.target.email.value;
    let password = event.target.password.value;

    console.log(email, password);

    // login(email, password)
    //   .then(res => {
    //     let user = res.user;
    //     console.log(user);

    //   }

    //   )

  }

  let google = () => {
    setErr(null)
    googlePopUp()
        .then(newUser => {
           
            console.log(newUser.user.displayName);
            let gUser = { name: newUser.user.displayName, email: newUser.user.email, photo: newUser.user.photoURL, role: 'student' }
            console.log(gUser);
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(gUser)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        })
        .catch(err=>{
            setErr(err)
        })
}



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold p-5">Login now!</h1>

          <form onSubmit={submit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div> */}
             <button className='btn' onClick={google}><FaGoogle></FaGoogle> Sign In With Google</button>
          </form>
         
        </div>
      </div>

    </div>
  );
};

export default Login;