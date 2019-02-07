
import React from 'react';
import {hot} from 'react-hot-loader';

import {GridRow, GridCol} from '../../common/Grid/Grid';
import './Home.scss';

const items = [
    {
        title: 'React',
        logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        buttonAction: {
            label:'Get Started',
            action: 'https://reactjs.org/docs/getting-started.html'
        }
    },
    {
        title: 'Redux',
        logo: 'https://redux.js.org/img/redux.svg',
        buttonAction: {
            label:'Get Started',
            action: 'https://redux.js.org/introduction/getting-started'
        }
    },
    {
        title: 'Sass',
        logo: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        buttonAction: {
            label:'Get Started',
            action: 'https://sass-lang.com/guide'
        }
    },
]

const Home = () => {

    return (
        <div className="homepage">
            <GridRow styles={['header__bg-color']}>
                <GridCol>
                    <h1>Home</h1>
                    <p>Hi this is the home page</p>
                </GridCol>
            </GridRow>
            <div className="container">
                <GridRow>
                    {
                        items.map(item => (
                            <GridCol styles={['content__bg-color']}>
                                <div className="content-block">
                                    <img className="img-responsive fixed-height" src={item.logo} />
                                    <h1 className="heading">{item.title}</h1>
                                </div>
                                <div className="button-block">
                                    <a className="button button-primary"
                                    href={item.buttonAction.action}
                                    target="_blank">{item.buttonAction.label}</a>
                                </div>
                            </GridCol>
                        ))
                    }
                </GridRow>
            </div>
        </div>
    );
}

export default hot(module)(Home);