import React from "react";
import './style.css';
import MenuItem from "./MenuItem";


function NavBar () {

    const menu = [

        { text: 'homepage' },
        {
            text: '▾ pages',
            items: [
                { text: 'Full Width Content' },
                { text: 'Content + Left Sidebar' },
                { text: 'Content + Right Sidebar' },
                { text: 'Content + Both Sidebars' },
                { text: 'Contact' },
                { text: '404' },
                { text: 'Testimonials' },
                { text: 'About Us' },
                { text: 'Team Member' },
                { text: 'FAQ' }
            ]
        },

        {
            text: '▾ elements',
            items: [
                { text: 'Buttons' },
                { text: 'Alert Messages' },
                { text: 'Font Icons' },
                { text: 'Call To Action' },
                { text: 'Columns' },
                { text: 'Columns - No Gutter' },
                { text: 'Lists' },
                { text: 'Accordions' },
                { text: 'Tabs' },
                { text: 'Toggles' },
                { text: 'Pricing Tables' }
            ]
        },

        {
            text: '▾ portfolio layouts',
            items: [
                { text: 'Full Width Portfolio' },
                { text: '2 Column Grid' },
                { text: '2 Col. Grid + Right Sidebar' },
                { text: '2 Col. Grid + Left Sidebar' },
                { text: '2 Col. Grid + Both Sidebars' },
                { text: '3 Column Grid' },
                { text: '3 Col. Grid + Right Sidebar' },
                { text: '3 Col. Grid + Left Sidebar' },
                { text: '3 Col. Grid + Both Sidebars' },
                { text: '4 Column Grid' }
            ]
        },

        {
            text: '▾ gallery layouts',
            items: [
                { text: 'Full Width Gallery' },
                { text: '2 Column Grid' },
                { text: '2 Col. Grid + Right Sidebar' },
                { text: '2 Col. Grid + Left Sidebar' },
                { text: '2 Col. Grid + Both Sidebars' },
                { text: '3 Column Grid' },
                { text: '3 Col. Grid + Right Sidebar' },
                { text: '3 Col. Grid + Left Sidebar' },
                { text: '3 Col. Grid + Both Sidebars' },
                { text: '4 Column Grid' },
                { text: '5 Column Grid' }
            ]
        },

        { text: 'link text' },
        { text: 'a very long link text' }

    ];


    return (
        <header>
            <div className="navbar-container">
                {
                    menu.map(elem => <MenuItem elem={elem} />)
                }
            </div>
        </header>

    );

}


export default NavBar;
