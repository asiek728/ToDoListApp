import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider, TodoFilterProvider } from './contexts';


ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoProvider>
        <TodoFilterProvider>
            <App />
        </TodoFilterProvider>
    </TodoProvider>
)
