import React from 'react';

const Faq = () => {
    return (
        <div className='w-5/6 mx-auto my-8'>
            <h2 className='text-3xl font-bold text-center'>Frequently Asked Questions !!!</h2>
            <hr className='my-3' />

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 text-center'>
                <div className='md:w-6/12'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What types of Bangladeshi cuisine do you specialize in?
                        </div>
                        <div className="collapse-content">
                            <p> We specialize in traditional Bangladeshi dishes, including rice-based dishes, meat and vegetable curries, lentil soups, and more.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Do you offer catering services for events?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, We offer catering services for events, including weddings, corporate events, and private parties. I can create customized menus to fit your specific needs and preferences.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Do you offer cooking classes?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, We offer cooking classes for individuals or small groups who want to learn how to cook traditional Bangladeshi dishes. The classes can be customized to fit your skill level and interests.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can you accommodate dietary restrictions or preferences?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, We can accommodate various dietary restrictions and preferences, including vegetarian, vegan, gluten-free, and more. Please let me know your specific needs, and I will do my best to accommodate them.</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-6/12'>
                    <img className='w-96 mx-auto' src="https://i.ibb.co/k5vCRts/FAQs-amico.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;