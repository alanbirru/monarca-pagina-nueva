import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t61rmxr', 'template_o1wrodq', form.current, {
        publicKey: 'KuMe0wd8qZNcW9AkV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      {success ? (
        <span className=' text-white font-bold text-lg flex justify-center items-center bg-secondary text-center md:w-[600px] mx-auto shadow-md rounded-md p-3 w-[90%] '>
          Tus datos fueron registrados correctamente. En breve uno de nuestros
          asesores te atenderá.
        </span>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-7 bg-white shadow-md  justify-center items-center font-bold text-lg lg:w-[50%] w-[80%] md:w-[70%] p-6 rounded-sm mx-auto text-[#717171] min-w-[230px]'
        >
          <input
            placeholder='Nombre'
            type='text'
            name='user_name'
            required
            className=' bg-slate-100 placeholder:text-slate-400 p-4 w-[100%] rounded-md focus:shadow-xl outline-none transition-all duration-500'
          />

          <input
            placeholder='E-mail'
            type='email'
            name='user_email'
            required
            className=' bg-slate-100 placeholder:text-slate-400 p-4  w-[100%] rounded-md focus:shadow-xl outline-none transition-all duration-500'
          />

          <input
            placeholder='Teléfono'
            name='user_phone'
            required
            className=' bg-slate-100 placeholder:text-slate-400 p-4  w-[100%] rounded-md focus:shadow-xl outline-none transition-all duration-500'
          />

          <textarea
            placeholder='Mensaje'
            name='message'
            className=' bg-slate-100 placeholder:text-slate-400 p-4  w-[100%] rounded-md focus:shadow-xl outline-none transition-all duration-500 h-56 resize-none'
          />

          <input
            type='submit'
            value='Enviar'
            className=' bg-primary w-[40%] hover:bg-[#f37f59] transition-all text-white p-4 rounded-md shadow-md min-w-[150px] max-w-[400px] cursor-pointer'
          />
        </form>
      )}
    </>
  );
};
