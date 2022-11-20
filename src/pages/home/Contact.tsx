import React from 'react';

const Contact = () => {
    const name = [
        {
            title: "Full name",
            placeholder:"Felix Chan..."
        },
        {
            title: "Email",
            placeholder:"Your email..."
        },
        {
            title: "Message",
            placeholder:"Enter message..."
        },
    ]
    return (
        <section className="bg-[rgba(16,16,16,1)]">
            <div className="container">
                <div className="contacts flex items-center content-center flex-col py-40 text-left">
                    <h1 className="font-bold text-4xl tracking-wide text-white py-14 text-center">Contact us</h1>
                    {
                        name.map(el => (
                            <div>
                                <h5 className="font-light text-sm pb-1.5 tracking-wide">{el.title}</h5>
                                <input type="text" placeholder={el.title}
                                       className="focus:shadow-lg focus:shadow-gray-700 w-96 py-1.5 bg-transparent border-b-2 placeholder-gray-500 mb-7 outline-0 pl-1.5"/>
                            </div>
                        ))
                    }

                    <button className="w-56 h-14 bg-black font-normal text-lg text-white my-10 rounded-md hover:scale-110 hover:bg-transparent transition duration-500 ease-in-out" style={{
                        boxShadow: "-12.8629px -10.5242px 24.5564px rgba(72, 72, 72, 0.25), 7.01613px 8.18548px 24.5564px #000000"
                    }}>Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;