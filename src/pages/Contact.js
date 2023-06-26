import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from '../components/SectionTitle';

import contactimg from "../images/contact .webp";


export default function Contact() {
  return (
    <main className='contact'>
      <Header />
      
      <div className='head'>
         <h2 className='head-title'>Contact Us</h2>
         <p className='pt-2'>Your questions and doubts builds our confidence and corrects our mistakes Never hesitate to contact us for all your queries We encourage each and every word and query you ask us and answer them with all our patience.</p>
      </div>

      <div className='container mb-5'>
        <SectionTitle title="Contact Us" />
        <div className='row d-flex align-items-strech'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='contact-card'>
               <div className='contact-icon'>
                 <i className='bi bi-building'></i>
               </div>
               <h5>Main Office</h5>
              <p align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p>
              <div className='blue-slider'></div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='contact-card'>
               <div className='contact-icon'>
                 <i className='bi bi-phone'></i>
               </div>
               <h5>Phone Number</h5>
              <p align="center">+91 8330930503, <br />Yasvanth Hanumantu, <br />Developer of E-Crush site.</p>
              <div className='blue-slider'></div>
            </div>
          </div>

        <div className='col-12 col-md-6 col-lg-4'>
              <div className='contact-card'>
                <div className='contact-icon'>
                  <i className='bi bi-inbox'></i>
                </div>
                <h5>Mail</h5>
                <p align="center">yasvanthhanumantu1@gmail.com<br />n210368@rguktn.ac.in</p>
                <div className='blue-slider'></div>
              </div>
        </div>
       </div>
      </div>

      <div className='contact-form'>
        <div className='con-img d-none d-md-block'>
          <img src={contactimg} className='img-fluid'/>
        </div>
        <div className='cform'>
            <form>
              <h3>Send Us a Message</h3>
              <div className='input-field'>
                <input type='text' id="name"/>
                <label for="name">Enter your name</label> 
              </div>
              <div className='input-field'>
                <input type='email' id="mail"/>
                <label for="mail">Enter your Email</label> 
              </div>
              <div className='input-field'>
                <textarea id="msg" rows="5"/>
                <label for="msg">Enter your message</label> 
              </div>
              <input type='submit' value="Send Message" />
            </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
