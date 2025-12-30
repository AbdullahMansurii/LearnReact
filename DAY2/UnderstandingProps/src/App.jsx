import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
      <Card user='Abdullah' img="https://images.unsplash.com/photo-1766882077556-48b74fad74b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Ali' img="https://media.istockphoto.com/id/1402100108/photo/guitar-story.webp?a=1&s=612x612&w=0&k=20&c=ZR0Jk-wHpgvRWKS5PMXs0apNTZT_CGNmLzcz2WeZ57I="/>
    </div>
  )
}

export default App
