import { Map, Phone, Mail } from 'lucide-react';

const ContactScreen = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="grid mt-20 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <Map className="w-6 h-6 md:w-10 md:h-10 text-gray-500" />
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-orange-300">
              Address
            </h2>
            <p className="text-gray-600">24 Akoni Street, Ijaiye, Lagos</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 md:w-10 md:h-10 text-green-500" />
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-orange-300">
              Hotline
            </h2>
            <p className="text-gray-600">+234 705 350 4996</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 md:w-10 md:h-10 text-blue-500" />
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-orange-300">
              Email
            </h2>
            <p className="text-gray-600">davidodunayo10@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-20 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-orange-300">GET</span> IN TOUCH
        </h1>
        <form className="flex flex-col gap-6 mt-6">
          <label className="flex flex-col">
            <span className="text-gray-700">Full Name</span>
            <input
              className="w-full border-b border-orange-300 outline-none py-2 px-2"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700">Email</span>
            <input
              className="w-full border-b border-orange-300 outline-none py-2 px-2"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700">Message</span>
            <textarea
              className="w-full border-b border-orange-300 outline-none py-2 px-2"
              name="message"
              placeholder="Enter your message"
              rows={4}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-orange-300 py-3 text-white font-semibold rounded-md hover:bg-orange-400 transition duration-200"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
