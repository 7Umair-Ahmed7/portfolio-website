import React from 'react'

const HomePage = () => {
  return (
    <>
       <main className='bg-[#202F7E] h-[72vh] flex justify-around items-center '>
        <section className='flex flex-col gap-6'>
          <h1 className='text-4xl text-[#2FA7FE] font-semibold'> FRONT-END <br /><span className='text-white'>DEVELOPER</span></h1>
          <div className="box w-[400px] h-[250px] p-5 box-border bg-[#2C3CCD] text-white">
            <h1 className='font-bold text-lg'>About</h1>
           Myself Umair Ahmed. Front-End Developer skillful in frontend framework React JS. Good in JavaScript, CSS and HTML. Also have proficiency in Tailwind CSS(CSS framework).<br/>
            Enthusiastic for learning,have good communication, likes to work with experts and experienced in the field.
          </div>
        </section>
        <section>
          <div className="box w-[400px] h-[400px] p-5 box-border bg-[#2C3CCD] text-white">
            <h2 className='text-3xl text-white'>TECHNOLOGIES:</h2>
            <ol className='text-3xl list-decimal p-8 flex flex-col gap-4'>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>CSS</li>
              <li>HTML</li>
            </ol>
          </div>
        </section>
      </main>
  </>
  )
}

export default HomePage
