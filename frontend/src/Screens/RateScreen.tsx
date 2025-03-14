import { Check } from 'lucide-react';
import { rate } from '../assets/rate';
import { rate2 } from '../assets/rate2';
import { rate3 } from '../assets/rate3';
import { Link } from 'react-router-dom';
import { MessageCircleMore } from 'lucide-react';

import { useCurrency } from "../context/PriceContext";
const RateScreen = () => {
  const currency = useCurrency(); 
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-2 items-center justify-center">
        <div className="hover:bg-gray-900 ease-in-out transition-all w-full h-full rounded-2xl p-4">
          <h1 className="text-2xl font-bold">YouTube Films</h1>
          <hr className="mt-3" />
          <div className="flex flex-col items-start mt-6">
            {rate.map((item) => (
              <div
                className="flex flex-row justify-between items-center space-x-5 mb-4"
                key={item.id}
              >
                <Check className="w-6 h-6 text-green-500" />
                <h1 className="text-xl md:text-2xl">{item.name}</h1>
                <h1 className="text-xl md:text-2xl font-extrabold text-orange-300">
                  {currency}
                  {item.price}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center mt-4">
            <h1 className="text-2xl">{currency}650,000</h1>{' '}
            <Link to="https://wa.me/+2347053504996">
              <h1 className="flex bg-orange-300 py-2 px-4 rounded-full hover:bg-orange-500 ease-in-out">
                <span className="mr-2">
                  <MessageCircleMore className="w-6 h-6 text-green-500" />
                </span>
                START NOW
              </h1>
            </Link>
          </div>
        </div>

        <div className="hover:bg-gray-900 ease-in-out transition-all w-full h-full rounded-2xl p-4">
          <h1 className="text-2xl font-bold">Netfilx Films</h1>
          <hr className="mt-3" />
          <div className="flex flex-col items-start mt-6">
            {rate2.map((item) => (
              <div
                className="flex flex-row justify-between items-center space-x-5 mb-4"
                key={item.id}
              >
                <Check className="w-6 h-6 text-green-500" />
                <h1 className="text-xl md:text-2xl">{item.name}</h1>
                <h1 className="text-xl md:text-2xl font-extrabold text-orange-300">
                {currency}{item.price}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center mt-4">
            <h1 className="text-xl md:text-2xl">{currency}1,900,000</h1>{' '}
            <Link to="https://wa.me/+2347053504996">
              <h1 className="flex bg-orange-300 py-2 px-4 rounded-full hover:bg-orange-500 ease-in-out">
                <span className="mr-2">
                  <MessageCircleMore className="w-6 h-6 text-green-500" />
                </span>
                START NOW
              </h1>
            </Link>
          </div>
        </div>

        <div className="hover:bg-gray-900 ease-in-out transition-all w-full h-full rounded-2xl p-4">
          <h1 className="text-2xl font-bold">Cinema Films</h1>
          <hr className="mt-3" />
          <div className="flex flex-col items-start mt-6">
            {rate3.map((item) => (
              <div
                className="flex flex-row justify-between items-center space-x-5 mb-4"
                key={item.id}
              >
                <Check className="w-6 h-6 text-green-500" />
                <h1 className="text-xl md:text-2xl">{item.name}</h1>
                <h1 className="text-xl md:text-2xl font-extrabold text-orange-300">
                {currency}{item.price}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center mt-4">
            <h1 className="text-xl md:text-2xl">{currency}2,400,000</h1>{' '}
            <Link to="https://wa.me/+2347053504996">
              <h1 className="flex bg-orange-300 py-2 px-4 rounded-full hover:bg-orange-500 ease-in-out">
                <span className="mr-2">
                  <MessageCircleMore className="w-6 h-6 text-green-500" />
                </span>
                START NOW
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateScreen;
