import React from 'react';
import './styles.scss'
import Button from './../forms/Buttons';

const SignIn = () => {
  return (
    <div className="signin">
        <div className="wrapper">
            <h1>Login</h1>
            
            <div className="formWrapper">
              <form>
                <div className="social">
                  <div className="row">
                    <Button>
                      Sign in with Google
                    </Button>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
