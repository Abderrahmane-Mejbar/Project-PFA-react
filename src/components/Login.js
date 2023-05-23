import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
    const navigate = useNavigate();
    const [error, setError] = React.useState(false);
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
      const response = await axios.post("http://localhost:8080/users/login", {
        email: data.get("email"),
        password: data.get("password"),
      });
      if (response.data.error === undefined) {
        localStorage.setItem("userdata", response.data);
        navigate("/dashboard");
      } else {
        setError(true);
      }
    };
  return (
    <div className="authentication-bg min-vh-100">
    <div className="bg-overlay"></div>
    <div className="container">
      <div className="d-flex flex-column min-vh-100 px-3 pt-4">
        <div className="row justify-content-center my-auto">
          <div className="col-md-8 col-lg-6 col-xl-5">
            

            <div className="card">
              <div className="card-body p-4">
                <div className="text-center mt-2">
                  <h5 className="text-primary">Application Localisation des restaurants</h5>
                  <h5 className="text-muted">Sign in</h5>
                </div>
                <div className="p-2 mt-4">
                  <form action="index.html">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="mb-3">
                      
                      <label className="form-label" htmlFor="userpassword">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="userpassword"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="auth-remember-check"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="auth-remember-check"
                      >
                        Se souvenir de mot de passe
                      </label>
                    </div>

                    <div className="mt-3 text-end">
                      <button
                        className="btn btn-primary w-sm waves-effect waves-light"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>

                 

                    <div className="mt-4 text-center">
                      <p className="mb-0">
                      Vous n'avez pas de compte ?{' '}
                        <a
                          href="auth-register.html"
                          className="fw-medium text-primary"
                        >
                          S'inscrire maintenant
                        </a>{' '}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
