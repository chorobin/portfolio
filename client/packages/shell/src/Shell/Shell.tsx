import * as React from 'react';
import { BrowserRouter, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Loading } from '../Loading/Loading';

const Home = React.lazy(() => import('home/Home'));
const About = React.lazy(() => import('about/About'));

const AnimatedShell: React.FunctionComponent = () => {
    const location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={2000}>
                <React.Suspense fallback={<Loading />}>
                    <Switch location={location}>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                </React.Suspense>
            </CSSTransition>
        </TransitionGroup>
    );
};

export const Shell: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <AnimatedShell />
        </BrowserRouter>
    );
};

export { Shell as default };
