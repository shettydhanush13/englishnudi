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
        <>
            <Suspense fallback={() => {}}>
                <ErrorBoundary>
                    <section style={{ width: '100vw', overflow: 'hidden' }}>
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
                    </section>
                </ErrorBoundary>
            </Suspense>
        </>
    );
}

export default Home;