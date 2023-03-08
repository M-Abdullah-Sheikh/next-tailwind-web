import React from 'react';
import Image from 'next/image';
export default function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#d20f2d]'>Program Of Studies</p>
                <h1 className='py-4 text-gray-700 font-bold text-2xl'>Courses<span className='text-[#d20f2d]'> Panaverse </span>Offer</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/assest/courses/web.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">WEB 3.0</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/mv.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">METAVERSE</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/bc.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">BLOCKCHAIN</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/ai.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">ARTIFICIAL INTELLIGENCE</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/cc.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">CLOUD-NATIVE COMPUTING</a></h3>
                                
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/ac.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">AMBIENT COMPUTING & IOT</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/bb.jpg" alt="/" width='100' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">GENOMICS & BIOINFORMATICS</a></h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src="/assest/courses/np.jpg" alt="/" width='85' height='100' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3><a href="#">NETWORK PROGRAMMABILITY & AUTOMATION</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
