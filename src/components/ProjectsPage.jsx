import React from 'react'

const ProjectsPage = () => {
  return (
   <>
   <main className='bg-[#202F7E] h-[72vh] flex justify-around items-center '>
    <ol className='list-decimal text-xl font-semibold'>
        <li><a href="https://github.com/7Umair-Ahmed7/firebase-contact-app" target='_'>Firebase Contact app: <br /><span>This is Contact app in which I have used React JS, Tailwind CSS and Firebase to store Contacts. it provides you to add, remove, edit and save contacts.</span></a></li>
        <li><a href="https://github.com/7Umair-Ahmed7/e-commerce" target='_'>E-commerce site: <br /><span>This is e-commerce site in this site you can add products to cart and also remove them.</span></a></li>
        <li><a href="https://github.com/7Umair-Ahmed7/notepad-REACT-JS" target='_'>Notepad: <br />
        <span>This provides you to write todos and notes at one place.</span></a></li>
        <li><a href="https://github.com/7Umair-Ahmed7/quiz-app-JS" target='_'>Quiz-App: <br />
        <span>This app facilitates you to gain knowledge.</span></a></li>
        <li><a href="https://github.com/7Umair-Ahmed7/todo-app-JS"  target='_'>Todo App; <br /><span>
            This todo app is built using Vanilla JavaScript only.</span></a></li>
    </ol>
   </main>

   </>
    
  )
}

export default ProjectsPage
