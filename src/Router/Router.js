import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Error from '../pages/Error';

function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Main></Main> } />
            <Route path="/detail/:id" element={ <Detail></Detail> } />
            <Route path="*" element={ <Error></Error> } />
        </Routes>
    );
}

export default Router;