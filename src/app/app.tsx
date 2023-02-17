import Router from "router/router";
import "styles/global.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AppProvider from "context/appContext";
import ErrorBoundary from "error-boundary/errorBoundary";

const App = () => {
    return (
        <ErrorBoundary>
            <AppProvider>
                <ToastContainer/>
                <Router/>
            </AppProvider>
        </ErrorBoundary>
    )
}

export default App;