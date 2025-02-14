Install React

npm create vite@latest my-vue-app -- --template react

Install Redux

npm install @reduxjs/toolkit react-redux


Create "redux" folder (Its a good way)
    import { configureStore } from "@reduxjs/toolkit";

    export const store = configureStore({
    reducer: {}
    })

Connect with redux - main.jsx (Wrap App with Redux provider)

    import { Provider } from 'react-redux'
    import { store } from './redux/store.js'

    <Provider store={store}>
      <App />
    </Provider>

We can add Redux devtools as Crome Extension
    Check inspect Redux - INIT (init will show if redux connect successfully)