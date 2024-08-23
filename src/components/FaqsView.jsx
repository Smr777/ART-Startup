import { questionFaq } from './questionFaq.js';
import Question from './Question.jsx';

const FaqsView = () => {
  return (
    <section className='min-h-screen relative bg-Light-blue' id='FAQ'>
      <div className='faq-container bg-White rounded-md shadow-2xl mx-5 p-5 relative -mt-32  tablet:max-w-[600px] tablet:mx-auto'>
        <div className='flex flex-col items-center my-5'>
          <h2
            className='font-workSans font-bold text-3xl lg:text-5xl md:text-center'
            style={{ marginTop: '120px' }}
          >
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <div style={{ marginTop: '50px', marginLeft: '30px', marginRight: '30px' }}>
          {questionFaq.map((question, index) => (
            <Question
              question={question}
              key={index}
              isLast={index === questionFaq.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsView;
