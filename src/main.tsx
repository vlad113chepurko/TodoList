import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//! DATA
const DATA = [
  { name: 'Eat', completed: false, id: 'list-1', htmlFor: 'list-1' },
  { name: 'Sleep', completed: false, id: 'list-2', htmlFor: 'list-2' },
  { name: 'Write', completed: false, id: 'list-3', htmlFor: 'list-3' },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App tasks={DATA}/>
  </StrictMode>,
)
