import Quiz from "./components/Quiz";
import { Provider } from "react-redux";
import store from "./store/store.js";
import bgImg from "./assets/bg_img.avif";

function App() {
  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex-1 flex items-center justify-center backdrop-blur-md">
        <Provider store={store}>
          <Quiz />
        </Provider>
      </div>

      <footer className="bg-white text-gray-800 text-center py-3 shadow-md">
        <p className="text-base sm:text-lg">
          Created by <span className="font-bold">Dennis Peprah</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
