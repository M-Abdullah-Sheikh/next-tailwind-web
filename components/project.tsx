import React from 'react';
import Image from 'next/image';
export default function Project() {
    return (
        <div id='projects' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <h1 className='py-4 text-gray-700 font-bold text-2xl'>Our<span className='text-[#d20f2d]'> Instructor</span></h1>
                {/* <h2 className='py-4'>What i can do</h2> */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 uppercase'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/assest/zk.png" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Zia <br/>khan</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/assest/zh.png" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Zeeshan <br /> Hanif</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/dn.png" alt="/" width='90' height='90' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Daniyal Nagori</h3>
                            </div>
                        </div>
                    </div>
<br />
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/hk.png" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Hira <br/>Khan</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/ad.png" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Adil<br/> Altaf</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/as.png" alt="/" width='200' height='200' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Asif<br/> Shah</h3>
                            </div>
                        </div>
                    </div>

                    {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/assest/skills/github1.png" alt="/" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/assest/skills/shopify.png" alt="/" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SHOPIFY</h3>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
}
