import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import headerStyles from "./components/Header/Header.module.css";
import Categories from "./pages/Categories";
import Category from "./components/Category/Category";
// import RecipeDetail from "./pages/RecipeDetail";
import AddEditRecipe from "./pages/AddEditRecipe";
// import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Header />
      <div className={headerStyles["header-spacer"]} />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:name" element={<Category />} />
            {/* <Route path="/recipes/:slug" element={<RecipeDetail />} /> */}
            <Route path="/add" element={<AddEditRecipe />} />
            {/* <Route path="/edit/:slug" element={<AddEditRecipe />} /> */}
            {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
