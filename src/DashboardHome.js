import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';

import Footer from 'components/Footer';

import useToken from "./hooks/useToken";

function DashBoardHome() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Redirect to='/login'  />
    }

    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default DashBoardHome;
