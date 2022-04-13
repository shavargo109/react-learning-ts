import React, { useState } from 'react';
import { Menu } from "../components/MenuComponent";
import { DISHES, TData } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import GetRenderDish from './DishDetailCompnent';
import Contact from './ContactComponent';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { PROMOTIONS } from '../shared/promotion';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leders';
import About from './AboutComponent';



export function Main() {
    const [dishes] = useState(
        DISHES
    );
    const [comments] = useState(
        COMMENTS
    );
    const [leaders] = useState(
        LEADERS
    );
    const [promotions] = useState(
        PROMOTIONS,
    );

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" element={<Home dish={dishes.filter((dishes) => dishes.featured)[0]}
                    leader={leaders.filter((leaders) => leaders.featured)[0]}
                    promotion={promotions.filter((promotions) => promotions.featured)[0]}
                />} />
                <Route path="/menu" element={<Menu dishes={dishes} comments={comments} />} />
                <Route path="/menu/:dishId" element={<GetRenderDish />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About leader={leaders} />} />
                {/* replace redirect in v5 */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            <Footer />
        </div >
    );
}

