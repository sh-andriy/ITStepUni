import React, {useEffect, useState} from "react";
import './style.css';
import Page from './page';
import mockData from './mock/data.json';
import { NavLink, useParams } from "react-router-dom";


function Pages (){
    const pages = mockData;
    const [theme, setTheme] = useState();
    const [date, setDate] = useState();
    console.log("theme: ", theme);
    console.log("Date:", date);

    const [selectedPage, setSelectedPage] = useState();
    console.log('selectedPage:', selectedPage);

    const { pageId } = useParams();
    useEffect(() => {
        setSelectedPage(
            pages.find(page => page.id == pageId)
        );
    }, [pageId]);

    return (
        <div className='Page-container'>
            <div className="container-theme-date">
                <div className="SelectedTheme"
                     style={{display: theme ? 'block' : 'none'}}
                >{theme}</div>
                <div className="SelectedDate"
                     style={{display: date ? 'block' : 'none'}}
                >{date}</div>
            </div>
            {pages
                .filter(page => {
                    if (theme) {
                        return page.theme === theme;
                    }
                    if (date) {
                        return page.date === date;
                    }
                    if (selectedPage) {
                        return page.id === selectedPage.id;
                    }

                    return true;
                })
                .map(page => {

                    return (

                        <Page
                            id={page.id}
                            isArticleVisible={selectedPage && page.id === selectedPage.id}
                            image={page.image}
                            title={page.title}
                            description={page.description}
                            date={page.date}
                            theme={page.theme}
                            fullPage={page.fullPage}
                            setSelectedTheme={setTheme}
                            setSelectedDate={setDate}
                            setSelectedPage={() => setSelectedPage(page)}
                        />
                    );
                })}
            <NavLink to='/'>
                <div className="all-posts-button"
                     onClick={() => {
                         setTheme();
                         setDate();
                     } }
                >All Posts →</div>
            </NavLink>
        </div>
    )
}


export default Pages;
