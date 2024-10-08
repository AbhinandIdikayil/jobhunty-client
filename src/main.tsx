import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.ts'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { PersistGate } from 'redux-persist/integration/react'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SocketProvider } from './context/SocketConext.tsx'
import { ChatSocketProvider } from './context/ChatSocketContext.tsx'
const clientId = process.env.CLIENT_ID as string

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId={clientId}>
          <NextUIProvider>
            <SocketProvider>
              <ChatSocketProvider>
                <ToastContainer />
                <App />
              </ChatSocketProvider>
            </SocketProvider>
          </NextUIProvider>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
