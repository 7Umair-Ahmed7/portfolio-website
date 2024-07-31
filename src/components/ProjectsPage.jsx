import React from 'react'

const ProjectsPage = () => {
  return (
    <>
      <main className='bg-[#202F7E] h-[72vh] flex flex-col justify-around items-center '>
        <h2 className='text-3xl text-white'>Projects</h2>
        <ol className='list-decima flex flex-col gap-4 font-semibold'>
          <li className='border border-black p-1'><a href="https://github.com/7Umair-Ahmed7/firebase-contact-app" target='_'><span className='text-xl'>Firebase Contact app:</span> <br /><span className='text-md font-normal'>This is Contact app in which I have used React JS, Tailwind CSS and Firebase to store Contacts. it provides you to add, remove, edit and save contacts.</span></a></li>
          <li className='border border-black p-1'><a href="https://github.com/7Umair-Ahmed7/e-commerce" target='_'><span className='text-xl'>E-commerce site: </span><br /><span className='text-md font-normal'>This is e-commerce site in this site you can add products to cart and also remove them.</span></a></li>
          <li className='border border-black p-1'><a href="https://github.com/7Umair-Ahmed7/notepad-REACT-JS" target='_'><span className='text-xl'>Notepad:</span> <br />
            <span className='text-md font-normal'>I have built this app using React JS. This provides you to write todos and notes at one place.</span></a></li>
          <li className='border border-black p-1'><a href="https://github.com/7Umair-Ahmed7/quiz-app-JS" target='_'><span className='text-xl'>Quiz-App:</span> <br />
            <span className='text-md font-normal'>It is built using JavaScript. This app facilitates you to gain knowledge.</span></a></li>
          <li className='border border-black p-1'><a href="https://github.com/7Umair-Ahmed7/todo-app-JS" target='_'><span className='text-xl'>Todo App; </span><br /><span className='text-md font-normal'>
            This todo app is built using Vanilla JavaScript only. Simple todo app where you can edit, save and delete todos.</span></a></li>
        </ol>
      </main>

    </>

  )
}

export default ProjectsPage
