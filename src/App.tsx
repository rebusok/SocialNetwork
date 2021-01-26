import React, {ComponentType} from 'react';
import Navbar from "./components/Navbar/Navbar";
import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DialogContainer from "./components/Dialogs/DialogsContainer";
import ProfileComponentContainer from "./components/Profile/ProfileComponentContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {withRouter} from "react-router";
import {InitializeApp} from "./redux/appReducer";
import Spinner from "./components/UI/Loader/Spinner/Spinner";


class App extends React.Component<PropsHeaderFromRedux, any> {
    componentDidMount() {
        this.props.InitializeApp && this.props.InitializeApp()

    }

    render() {
        if(!this.props.initialized) {
            return <Spinner/>
        }
        return (
            <Router>
                <div className={s.app_wrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={s.content}>
                        <Switch>

                            <Route path='/profile/:userId?' render={() => <ProfileComponentContainer
                            />}/>
                            <Route path='/dialogs/:id?' exact render={() =>
                                <DialogContainer/>
                            }/>
                            <Route path='/users' exact render={() =>
                                <UsersContainer/>
                            }/>
                            <Route path='/login' exact render={() =>
                                <Login/>
                            }/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
const mapStateToProps = (state:AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export type PropsHeaderFromRedux = ConnectedProps<typeof connector>
const connector =connect(mapStateToProps, {
    InitializeApp
})

export default compose<ComponentType>(
    connector,
    withRouter
)(App)

