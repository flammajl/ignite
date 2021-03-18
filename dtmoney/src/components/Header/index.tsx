import logoImg from '../../assets/logo.svg';
import { Header } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function HeaderComponent({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <Header.Container>
      <Header.Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Header.Content>
    </Header.Container>
  )
}