import {useState} from 'react';
import {motion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';


const Accordion = ({items}) =>
  {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) =>
    {
    setOpenIndex(openIndex === index ? null : index);
    };

  return (
      <div className="bg-gray-900 lg:py-20 md:py-14 sm:py-7 text-gray-900">
        <h1 className={"text-white text-4xl text-center mb-4"}>FAQ</h1>
        <hr className={"border-white w-20 mx-auto mb-8"}/>
        <div className="space-y-2 w-full max-w-3xl mx-auto ">
          {items.map((item, index) => (
              <div key={index} className="border rounded-2xl overflow-hidden">
                <button
                    className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                    onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  <motion.div
                      animate={{rotate: openIndex === index ? 180 : 0}}
                      transition={{duration: 0.2}}
                  >
                    <ChevronDown className="w-5 h-5"/>
                  </motion.div>
                </button>
                <motion.div
                    initial={{
                      height : 0,
                      opacity: 0,
                    }}
                    animate={{
                      height : openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    exit={{
                      height : 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease    : 'easeInOut',
                    }}
                    className="overflow-hidden"
                >
                  <div
                      className="p-4 bg-white border-t text-gray-700">{item.content}</div>
                </motion.div>
              </div>
          ))}
        </div>
      </div>
  );
  };

export default Accordion;