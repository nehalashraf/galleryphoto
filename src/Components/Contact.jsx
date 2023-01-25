/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Contact() {
  return <>
      <div className="col-lg-12 mt-5">
    <h1 className='text-center text-white'>Contact</h1>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-8">
      <form action="#">
<div class="row form-group mt-3">
<div class="col-md-6 mb-3 mb-md-0">
<label className="text-white" for="fname">First Name</label>
<input type="text" id="fname" className="form-control"/>
</div>
<div className="col-md-6 ">
<label className="text-white" for="lname">Last Name</label>
<input type="text" id="lname" class="form-control"/>
</div>
</div>
<div className="row form-group mt-3">
<div className="col-md-12">
<label className="text-white" for="email">Email</label>
<input type="email" id="email" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label class="text-white" for="subject">Subject</label>
<input type="subject" id="subject" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label class="text-white" for="message">Message</label>
<textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12 btn">
<input className='btn' type="submit" value="Send Message" class="btn btn-primary py-2 px-4 text-white"/>
</div>
</div>
</form>
      </div>
      <div className="col-lg-3 mt-5 ms-5 div2">
        <h4 className='text-white mt-5 '>Adress</h4>
        <p className='add mt-3'>203 Fake St. Mountain View, San Francisco, California, USA</p>
        <h4 className='text-white mt-3'>Phone</h4>
        <a href="#">+1 232 3235 324</a>
        <h6 className='text-white mt-3'>Email Address</h6>
        <a href="#">abcd22@gmail.com</a>
      </div>
    </div>
  </div>
  </>
}
