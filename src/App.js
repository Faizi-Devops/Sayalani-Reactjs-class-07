import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Routing from "./Routing/Routing";


function App() {
  return (
    <div>
      <Routing />

      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>




    </div>
  );
}

export default App;
