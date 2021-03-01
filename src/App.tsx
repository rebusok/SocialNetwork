import React, {ComponentType} from 'react';

import {Link, Route, Switch} from 'react-router-dom';

import ProfileComponentContainer from "./components/Profile/ProfileComponentContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {withRouter} from "react-router";
import {InitializeApp} from "./redux/appReducer";
import Spinner from "./components/UI/Loader/Spinner/Spinner";
import './App.css';
import 'antd/dist/antd.css'

import {Layout, Menu} from 'antd';
import {CommentOutlined, MenuFoldOutlined, MenuUnfoldOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';

const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

const {Header, Sider, Content} = Layout;

class App extends React.Component<PropsHeaderFromRedux, any> {
    componentDidMount() {
        this.props.InitializeApp && this.props.InitializeApp()

    }

    state = {
        collapsed: false,
    };

    toggle = () => {

        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        if (!this.props.initialized) {
            return <Spinner/>
        }


        return (
            <Layout>
                <Sider trigger={<MenuFoldOutlined onClick={() => this.toggle()}/>} collapsible
                       collapsed={this.state.collapsed}>
                    <div className="img_wrapper">
                        <Link to='/profile'><img alt='aca' className={'img_header'}
                                                 src='https://dcassetcdn.com/design_img/718794/445771/445771_4394919_718794_image.png'/>Social
                            net</Link>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to='/profile'>Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CommentOutlined/>}>
                            <Link to='/dialogs/'>Dialog</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined/>}>
                            <Link to='/users'>Users</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header_app" style={{background: '#f0f2f5'}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })

                        }
                        <HeaderContainer/>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: "80vh",
                        }}
                    >
                        <Switch>
                            <Route path='/profile/:userId?' render={() => <ProfileComponentContainer
                            />}/>
                            <Route path='/dialogs/:id?' exact render={() => {

                                return (
                                    <React.Suspense fallback={<Spinner/>}>
                                        < DialogContainer/>
                                    </React.Suspense>
                                )
                            }}/>
                            <Route path='/users' exact render={() => {
                                return (
                                    <React.Suspense fallback={<Spinner/>}>
                                        <UsersContainer/>
                                    </React.Suspense>
                                )
                            }}/>
                            <Route path='/login' exact render={() =>
                                <Login/>
                            }/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );

        // return (
        //     <Router>
        //         <div className={s.app_wrapper}>
        //             <HeaderContainer/>
        //             <Navbar/>
        //             <div className={s.content}>
        //                 <Switch>
        //
        //                     <Route path='/profile/:userId?' render={() => <ProfileComponentContainer
        //                     />}/>
        //                     <Route path='/dialogs/:id?' exact render={() =>
        //                         <DialogContainer/>
        //                     }/>
        //                     <Route path='/users' exact render={() =>
        //                         <UsersContainer/>
        //                     }/>
        //                     <Route path='/login' exact render={() =>
        //                         <Login/>
        //                     }/>
        //                 </Switch>
        //             </div>
        //         </div>
        //     </Router>
        // );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export type PropsHeaderFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {
    InitializeApp
})

export default compose<ComponentType>(
    connector,
    withRouter
)(App)

