import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs";

import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import state, {PostType} from "./redux/state";
import {v1} from "uuid";



const App = () => {
    const {dialogs, messages} = state.dialogPage;
    const {posts} = state.profilePage;
    const [postsJ, setTask] = useState(posts);
    const [messageDialog, setMessageDialog] = useState(messages);

    const addMessage = (mes: string) => {
        const newMes = {id: v1(), message: mes};
        setMessageDialog([...messageDialog, newMes])
    }
    const collBackAddTask = (value:string) => setTask(addPost(postsJ, value))
    const addPost = (posts:Array<PostType>, value:string) => {
        const newPost = {id: v1(), message: value, likeCount: 0};
        return [ ...posts, newPost];
    }
    
    return (

        <Router>

            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Switch>
                    <Route path='/'
                           render={() => <h2>Welcom to Soc</h2>}
                           exact />
                    <Route path='/profile' exact render={() => <ProfileComponent
                        posts={postsJ}
                        addPost={collBackAddTask}/>}/>
                    <Route path='/dialogs/:id?' exact  render ={() => <Dialogs
                    dialogs={dialogs}
                    messages={messageDialog}
                    addMessage={addMessage}/>}/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
