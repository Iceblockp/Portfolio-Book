import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import ProjectPage from './page/ProjectPage'

const App = () => {
  return (
    <>
      <HomePage />
      <ProjectPage />
    </>
  )
}

export default App