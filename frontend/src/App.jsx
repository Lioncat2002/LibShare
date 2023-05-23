import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//layouts
import RootLayout from "./Layouts/RootLayout";


//pages
import LandingPage from "./pages/LandingPage";
import SearchLayout from "./Layouts/SearchLayout";
import Results from "./pages/Results";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route element = {<SearchLayout/>} >
        <Route path="/search" element = {<Results/>} />

        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
