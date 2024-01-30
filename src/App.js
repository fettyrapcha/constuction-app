import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NewProject from "./pages/NewProject";
import NewProduct from "./pages/NewProduct";
import TransactionPage from "./pages/TransactionPage";
import ProductPage from "./pages/ProductPage";
import HistoryPage from "./pages/HistoryPage";
import ExpensePage from "./pages/ExpensePage";


function App() {


  return (
    <Routes>
      <Route path="/" element={<NewProject />} />
      <Route path="/product-forms" element={<NewProduct />} />
      <Route path="/transaction" element={<TransactionPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/expense" element={<ExpensePage />} />
    </Routes>
  );
}
export default App;
