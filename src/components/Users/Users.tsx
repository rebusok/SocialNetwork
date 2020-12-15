import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import style from './Users.module.scss'
import avatar from '../../assets/image/react-javascript-library-redux-user-interface-tesseract.jpg'

type usersPagesType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType>
}


const Users = (props: usersPagesType) => {
    // const getUsers = () => {
    //     if (props.users.length === 0) {
    //
    //         axios.default.get('https://social-network.samuraijs.com/api/1.0/users').then((res: any) => {
    //             props.setUsers(res.data.items)
    //         })
    //     }
    // }


    return (

        <React.Fragment>
            {
                props.users.map((user: UsersType) => {
                    return (
                        <div className={style.Users} key={user.id}>
                            <div className={style.Users_item}>
                                <div className={style.img_wrapper}>
                                    <div className={style.img}><img
                                        src={user.photos.small !== null ? user.photos.small : avatar} alt="ava"/></div>
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
                                        <div className={style.name}>{user.name}</div>
                                        <div className={style.status}>{user.status}</div>
                                    </div>
                                    <div className={style.city_wrapper}>
                                        <div className={style.country}>{}</div>
                                        <div className={style.city}>{}</div>
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