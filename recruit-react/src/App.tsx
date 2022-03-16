import { useState } from "react";
import CardForm from "./components/CardForm/CardForm";
import Header from "./components/Header/Header";
import MenuPage from "./components/MenuPage/MenuPage";

function App() {
  const [showCardForm, setShowCardForm] = useState(true);
  return (
    <div>
      <Header pageHandler={setShowCardForm} />
      {showCardForm ? <CardForm /> : <MenuPage />}
    </div>
  );
}

export default App;
