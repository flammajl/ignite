import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransactions: (transactionInput: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
  );

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function createTransactions(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        createTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}