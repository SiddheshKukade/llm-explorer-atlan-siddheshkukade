import logo from './logo.svg';
import './App.css';
import HomeView from './components/HomeView/HomeView';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AppView from './components/AppView/AppView';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppView />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
