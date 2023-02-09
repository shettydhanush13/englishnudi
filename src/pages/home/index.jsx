import React, { lazy, Suspense } from 'react';
import ErrorBoundary from "../../errorBoundary"
import "./styles.scss"
import Loader from "../../components/loader"
import {
    Contact,
    FAQ,
    How,
    Intro,
    Levels,
    Testimonials,
    What,
    Why
} from '../../components/layouts';

const Header =  lazy(() => import("../../components/header"))

const Home = () => {

    return (
        <>
            <Suspense fallback={() => <Loader/>}>
                <ErrorBoundary>
                    <Header/>
                    <Intro/>
                    <Why/>
                    <What/>
                    <Levels/>
                    <How/>
                    <Testimonials/>
                    <FAQ/>
                    <Contact/>
                </ErrorBoundary>
            </Suspense>
        </>
    );
}

export default Home;