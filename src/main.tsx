import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { Manager } from '@/content/manager'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Manager />
  </StrictMode>,
)
