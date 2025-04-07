import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div>
      <div className="bg-orange-300 md:h-32 h-20 flex flex-col items-center justify-center">
        <motion.h1
          className="md:text-5xl font-bold text-center mt-13 md:mt-10 text-2xl"
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 1], // Fades in and out to simulate glitch
            x: [0, -10, 10, -5, 5, 0], // Jumps left and right
            skewX: [0, 5, -5, 0], // Skew to simulate a glitch
            transition: {
              opacity: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'loop',
                delay: 5, // Delay for 5 seconds before repeating
              },
              x: {
                duration: 0.1,
                repeat: Infinity,
                repeatType: 'loop',
                delay: 5, // Delay for 5 seconds before repeating
              },
              skewX: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: 'loop',
                delay: 5, // Delay for 5 seconds before repeating
              },
            },
          }}
        >
          Welcome to Rhemaction Studio!
        </motion.h1>
      </div>
    </div>
  );
};

export default Welcome;
