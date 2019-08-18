import React from 'react';
import classes from './Form.module.css'

const Form = (props) => {
 return (
  <div className="container">
    <div className="row justify-content-center mt-4 pt-lg-4 pt-md-4 text-left">
          <div className="col-sm-12 col-md-6 col-lg-5">
            <form action="" className={classes.Form}>
              <h6>Type of Enquiry</h6>
              <h5>Branding</h5>
              <hr />
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <textarea
                name="message"
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              />
              <div className={classes.Submit}>
                <button>
                  Send Enquiry<span>&rsaquo;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center text-left mb-5 pb-5">
          <div className="col-xs-12 col-md-6 col-lg-5">
            <p
              style={{ fontSize: "0.5em", color: "black", fontWeight: "bold" }}
            >
              GDRP Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente explicabo expedita debitis, at natus perferendis?
            </p>
          </div>
        </div>
  </div>
 )
}

export default Form
