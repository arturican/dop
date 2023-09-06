import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {S} from './../_stylesSC'
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'/page/0'}>PageOne</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>PageTwo</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>PageThree</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/page/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};







