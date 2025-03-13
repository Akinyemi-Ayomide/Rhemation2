import { Map, Phone, Mail } from 'lucide-react';
const ContactScreen = () => {
  return (
    <div>
      <div className="grid mt-20 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="mr-4">
            <Map className="w-8 h-8 text-gray-500" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-orange-300">Address</h1>
            <p>24 akoni street ijaiye lagos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="mr-4">
            <Phone className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-orange-300">Hotline</h1>
            <p>+234 705 350 4996</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="mr-4">
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-orange-300">Email</h1>
            <p>Support@gmail.com</p>
          </div>
        </div>
      </div>
      {/*form*/}
      <div>
        <div className="gap-4 flex flex-col mt-20">
          <h1 className="text-3xl font-bold">
            <span className="text-orange-300">GET</span> IN TOUCH
          </h1>
          <input
            className="w-full border-b border-b-orange-300 outline-none py-2 px-2"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full border-b border-b-orange-300 outline-none py-2 px-2"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="w-full border-b border-b-orange-300 outline-none py-2 px-2"
            name=""
            placeholder="Message"
            id=""
          ></textarea>
          <button className='w-full bg-orange-300 py-4 hover:bg-orange-400 ease-in-out transition'>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
