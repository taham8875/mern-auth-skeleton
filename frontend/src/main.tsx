import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.ts";
import { Provider } from "react-redux";
import App from "./App.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />} >
        <Route path="/profile" element={<h1>Private</h1>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
