import React, { lazy, Suspense } from 'react';
import ErrorBoundary from "../../errorBoundary"
import "./styles.scss"
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
const Footer =  lazy(() => import("../../components/layouts/footer"))

const Home = () => {

    return (
        <section style={{ width: '100vw', overflow: 'hidden' }}>
            <Suspense fallback={() => {}}>
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
                        <Footer/>
                </ErrorBoundary>
            </Suspense>
        </section>
    );
}

export default Home;