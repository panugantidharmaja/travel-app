import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DestinationDetail from './DestinationDetail/DestinationDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' element={<App/>}></Route>
        <Route path="/destinationDetail/:id" element={<DestinationDetail />} />  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
