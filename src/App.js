import './App.css';
import Header from './components/Header';
import  {Balance}  from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddNewTransaction/>
      </div>
      </GlobalProvider>
    </div>
  );
}
export default App;
