import plus from '../assets/icon-plus.svg';
import minus from '../assets/icon-minus.svg';
import { useState } from 'react';

const Question = ({ question, isLast }) => {
    const [isShowingFaq, setIsShowingFaq] = useState(false);

    const toggleShow = () => {
        setIsShowingFaq(!isShowingFaq);
    };

    return (
        <article
            onClick={toggleShow}
            className={`pr-2 ${!isLast ? 'border-b border-white' : ''}`}
            style={{ paddingBottom: '10px', paddingTop: '10px' }}
        >
            <div className='grid grid-cols-12'>
                <h3 className='col-span-11 font-workSans font-bold py-5 pr-5 text-base cursor-pointer hover:text-Grayish-purple'>
                    {question.question}
                </h3>
                <button
                    className='col-span-1 place-self-center'
                    style={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {isShowingFaq ? (
                        <img
                            src={plus}
                            alt="minus-icon"
                            style={{
                                width: '20px',
                                height: '20px'
                            }}
                        />
                    ) : (
                        <img
                            src={minus}
                            alt="plus-icon"
                            style={{
                                width: '20px',
                                height: '20px'
                            }}
                        />
                    )}
                </button>
            </div>
            {isShowingFaq && <p className='font-workSans font-normal text-sm text-left lg:text-lg'>{question.answer}</p>}
        </article>
    );
};

export default Question;
