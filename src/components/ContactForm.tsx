import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs
      .send(
        'service_8ncbi5b', 
        'template_8rafrwk', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'VTDHjDcsTtk-9LrII' 
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: '#6366f1', // Tailwind purple-500
        });
      });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="flex flex-col items-center text-center p-8 bg-[#1c2331] rounded-lg border border-green-500/50 shadow-lg">
          <CheckCircle className="text-green-500 mb-4" size={48} />
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label data-aos="zoom-in" htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input data-aos="zoom-in"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 bg-[#1c2331] border ${
                errors.name ? 'border-red-500' : 'border-[#2a3446]'
              } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="Your Name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label data-aos="zoom-in" htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input data-aos="zoom-in"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-[#1c2331] border ${
                errors.email ? 'border-red-500' : 'border-[#2a3446]'
              } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label data-aos="zoom-in" htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea data-aos="zoom-in"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 bg-[#1c2331] border ${
                errors.message ? 'border-red-500' : 'border-[#2a3446]'
              } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="What would you like to discuss?"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button data-aos="zoom-in"
            type="submit"
            variant="primary"
            size="lg"
            icon={<Send size={18} />}
            fullWidth
            disabled={isSubmitting}
            className="mt-4"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
