import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center '>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>jr1307@naver.com</p>
      <ContactForm />
    </div>
  );
}
