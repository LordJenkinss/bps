import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles'
import Grid from 'material-ui/Grid'
import NotFound from './route/NotFound'
import PrivateRoute from './route/PrivateRoute'
import PublicRoute from './route/PublicRoute'
import RootRedir from './route/RootRedir'
import Login from './Login/Login'
import Info from './Info/Info'
import Settings from './Settings/Settings'
import Grades from './Grades/Grades'
import Nav from './Nav/Nav'

export default withStyles({
    root: {
        transformStyle: 'preserve-3d',
        height: '100vh',
        width: '100vw',
    },
    contentRoot: {
        position: 'absolute',
        top: 5,
        left: 5,
        height: 'calc(100% - 66px)',
        width: 'calc(100% - 10px)',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    contentScroll: {
        position: 'relative',
        top: '50%',
        transform: 'translate(0, -50%)',
        maxHeight: '100%',
    },
    content: {
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)',
    },
})(({ classes }) => (
    <Router>
        <div className={classes.root}>
            <div className={classes.contentRoot}>
                <Grid container className={classes.contentScroll}>
                    <Grid item xs={12} sm={10} md={8} lg={6} className={classes.content}>
                        <Switch>
                            <Route path="/" exact component={RootRedir} />
                            <PublicRoute path="/login" component={Login} />
                            <PrivateRoute path="/info" component={Info} />
                            <PrivateRoute path="/settings" component={Settings} />
                            <PrivateRoute path="/grades" component={Grades} />
                            <Route path="/" component={NotFound} />
                        </Switch>
                    </Grid>
                </Grid>
            </div>
            <Route path="/" component={Nav} />
        </div>
    </Router>
))
