'use client';

import ContactDetails from '@/components/ContactDetails';
import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';
import PageIntro from '@/components/PageIntro';
import {useState} from 'react';


const ContactPage = () =>
  {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) =>
    {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data     = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/send-email', {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body   : JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
    };

  return (
      <>
        <PageIntro eyebrow="Contact us" title="Let’s work together">
          <p>We can not wait to hear from you.</p>
        </PageIntro>
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactDetails/>
            <ContactForm handleFormSubmit={handleSubmit} status={status}/>
          </div>
        </Container>
      </>
  );
  };

export default ContactPage;
