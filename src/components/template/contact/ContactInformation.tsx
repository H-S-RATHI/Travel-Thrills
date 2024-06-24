"use client";

import React, { useEffect, useState } from 'react';
import ContactUsForm from './ContactUsForm';
import Message from './Message';

function ContactInformation() {
  const [messageFromStorage, setMessageFromStorage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMessageFromStorage(localStorage.getItem("message"));
    }
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className="w-11/12 flex flex-col lg:flex-row flex-wrap">
        <div className='w-full lg:w-6/12 flex flex-col my-4'>
          <ContactUsForm />
        </div>
        <div className='w-full lg:w-6/12 flex items-center justify-start flex-col my-4'>
          <div className='w-11/12 flex justify-center items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27779.205025022195!2d78.18345283360713!3d29.504679512739944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390be69c535cd341%3A0xeb5073888ed1534!2sKiratpur%2C%20Uttar%20Pradesh%20246731!5e0!3m2!1sen!2sin!4v1719251013096!5m2!1sen!2sin" width="450" height="350" style={{border:"0", borderRadius:"10px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {messageFromStorage && <Message />}
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
