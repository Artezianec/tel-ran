import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import "../css_modules/contact.module.css";
import { base_url, period_month } from "../utils/constants";
import emailjs from '@emailjs/browser';


const Contact = props => {

  const form = useRef();
  const [planets, setPlanets] = useState(['wait...']);

  async function fillPlanets(url) {
    const response = await fetch(url);
    const json = await response.json();
    const planets = json.map(item => item.name);
    setPlanets(planets);
    const info = {
      payload: planets,
      time: Date.now()
    }
    localStorage.setItem('planets', JSON.stringify(info));
  }

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem('planets'));
    if (planets && ((Date.now() - planets.time) < period_month)) {
      setPlanets(planets.payload);
    } else {
      fillPlanets(`${base_url}/v1/planets`);
    }

  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_svdcs4o', 'template_ldekvfr', form.current, 'ZfPoVV3ogATstVFw9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>First Name
          <input type="text" name="firstname" placeholder="Your name.." />
        </label>
        <label>Email
          <input type="text" name="reply" placeholder="Your email.." />
        </label>
        <label>Planet
          <select name="planet">{
            planets.map((item, index) => <option value={item} key={index}>{item}</option>)
          }
          </select>
        </label>
        <label>Subject
          <textarea name="subject" placeholder="Write something.." />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )

}

export default Contact