import Modal from 'react-modal';
import { useState } from 'react';
import { HeaderComponent } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      
      <GlobalStyle />
    </ThemeProvider>
  );
};
