import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart/Cart';
import Error from '../pages/Error';

function Router(props) {
    return (
        <Routes>
            <Route path="/" element={ <Main product={props.product} loading={props.loading} /> } />
            <Route path="/detail/:id" element={ <Detail product={props.product} /> } />
            <Route path="/cart" element={ <Cart product={props.product} /> } />
            <Route path="*" element={ <Error></Error> } />
        </Routes>
    );
}

export default Router;