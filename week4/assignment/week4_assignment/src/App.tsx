import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;