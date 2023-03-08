import React from 'react';
import Image from 'next/image';
export default function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#d20f2d]'>About</p>
                    <h2 className='py-4 font-bold text-4xl'>Dr. Arif Alvi</h2>
                    <p className='py-2 text-gray-600'>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
                        Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
                        President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>Learn More</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src="/assest/aa.png" alt="/" width='250' height='403' />
                </div>

                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src="/assest/zk.png" alt="/" width='250' height='403' />
                </div>
                <div className='col-span-2'>
                    <h2 className='py-4 font-bold text-4xl'>Zia Khan</h2>
                    <p className='py-2 text-gray-600'>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.

                        Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.

                        Worked with a combination of Agile, Lean Startup, and Design Thinking concepts and methodologies. Excellent communicator, mentor, instructor, and coach.

                        Received Microsoft's Most Valuable Professional (MVP) awards for eight consecutive years in client and cloud technologies.</p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>Learn More</p>
                </div>

            </div>
        </div>
    );
}


{/* <p className='py-2 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repellendus nulla veniam accusamus corporis, rerum maxime esse recusandae totam, nemo aliquam natus sit, cumque deserunt blanditiis commodi doloremque placeat. Incidunt.</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vitae illum repellendus, omnis a aperiam officiis molestiae dolores in incidunt dignissimos voluptas rerum sunt et commodi repellat maxime saepe eaque?</p> */}