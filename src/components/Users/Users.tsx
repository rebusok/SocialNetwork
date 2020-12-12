import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import style from './Users.module.scss'
import {v1} from "uuid";

type usersPagesType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType>
}


const Users = (props: usersPagesType) => {
    const users = [{id: v1(), usersPhotoUrl:'https://cdn.sm-news.ru/wp-content/uploads/2020/01/26/file38203555_6b12a257.jpg', followed:false, fullName: 'Yuriy', status: "learn React", location:{city: 'Moscow', country:'Russia'}},
        {id: v1(), usersPhotoUrl:'https://cdn.sm-news.ru/wp-content/uploads/2020/01/26/file38203555_6b12a257.jpg', followed:true, fullName: 'Dmitriy', status: "learn React", location:{city: 'Minsk', country:'Belarus'}},
        {id: v1(), usersPhotoUrl:'https://cdn.sm-news.ru/wp-content/uploads/2020/01/26/file38203555_6b12a257.jpg', followed:true, fullName: 'Sergey', status: "learn React", location:{city: 'Kiev', country:'Ukraine'}},
        {id: v1(), usersPhotoUrl:'https://cdn.sm-news.ru/wp-content/uploads/2020/01/26/file38203555_6b12a257.jpg', followed:false, fullName: 'Masha', status: "learn React", location:{city: 'Vitebsk', country:'Belarus'}}]
    if (props.users.length === 0){
        props.setUsers(users)
    }


    return (

        <React.Fragment>
            {
                props.users.map((user: UsersType) => {
                    return (
                        <div className={style.Users} key={user.id}>
                            <div className={style.Users_item}>
                                <div className={style.img_wrapper}>
                                    <div className={style.img}><img src={user.usersPhotoUrl} alt="ava"/></div>
                                    <div className={style.follow}>
                                        {
                                            user.followed
                                                ? <button onClick={() => {
                                                    props.unFollow(user.id)
                                                }}>Unfollow</button>
                                                : <button onClick={() => {
                                                    props.follow(user.id)
                                                }}>Follow</button>
                                        }
                                    </div>
                                </div>
                                <div className={style.mes_wrapper}>
                                    <div className={style.name_wrapper}>
                                        <div className={style.name}>{user.fullName}</div>
                                        <div className={style.status}>{user.status}</div>
                                    </div>
                                    <div className={style.city_wrapper}>
                                        <div className={style.country}>{user.location.country}</div>
                                        <div className={style.city}>{user.location.city}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </React.Fragment>
    );
};

export default Users;