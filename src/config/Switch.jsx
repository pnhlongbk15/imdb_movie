import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Component
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail/Detail';
import CastDisplay from '../pages/CastDisplay';
import DetailPerson from '../pages/Detail/DetailPerson';

const RoutesToPage = [
    {
        path: '/:category/search/:keyword',
        component: <Catalog/>,
        exact: false,
    },
    {
        path: '/:category/detail/:id',
        component: <Detail/>,
        exact: false,
    },
    {
        path: '/:category/:specify',
        component: <Catalog/>,
        exact: false,
    },
    {
        path: '/:category/popular',
        component: <CastDisplay />,
        exact: true,
    },
    {
        path: '/person/detail/:id_person',
        component: <DetailPerson/>,
        exact: false,
    },
    {
        path: '/:category',
        component: <Catalog/>,
        exact: false,
    },
    {
        path: '/',
        component: <Home/>,
        exact: true,
    },

]

const Switch = () => {
  return (
    <Routes>
        {
            RoutesToPage.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path} 
                    element={route.component} 
                    exact={route.exact} />
            ))
        }
    </Routes>
  )
}

export default Switch;
