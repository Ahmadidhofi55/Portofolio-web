import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail,  MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's talk about your project or job opportunity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 data-aos="zoom-in" className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p data-aos="zoom-in" className="text-gray-400 mb-8">
              Feel free to reach out if you have any questions, project ideas, or would like to discuss your website needs. I’d be happy to he
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-[#1c2331] p-3 rounded-lg">
                  <Mail data-aos="zoom-in" className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 data-aos="zoom-in" className="text-lg font-semibold text-white">Email</h4>
                  <p data-aos="zoom-in" className="text-gray-400">ornotdev@gmail.com</p>
                </div>
              </div>


              <div className="flex items-start">
                <div className="mr-4 bg-[#1c2331] p-3 rounded-lg">
                  <MapPin data-aos="zoom-in" className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 data-aos="zoom-in" className="text-lg font-semibold text-white">Location</h4>
                  <p data-aos="zoom-in" className="text-gray-400">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-[#1c2331] p-3 rounded-lg">
                  <Clock data-aos="zoom-in" className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 data-aos="zoom-in" className="text-lg font-semibold text-white">Availability</h4>
                  <p data-aos="zoom-in" className="text-gray-400">Monday - Sunday, from 8 AM to 5 PM</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;