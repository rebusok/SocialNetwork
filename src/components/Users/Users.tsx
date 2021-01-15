import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import style from './Users.module.scss'
import avatar from '../../assets/image/react-javascript-library-redux-user-interface-tesseract.jpg'

import {NavLink} from 'react-router-dom';
import {PropsUserFromRedux} from "./UsersContainer";


export interface usersPagesType extends PropsUserFromRedux {
    onPageChanged?: (pageNum: number) => void
}


const Users = (props: usersPagesType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (

        <React.Fragment>
            <div className={style.list_users}>
                {
                    pages.map((p: number, inx) => {
                        return <span key={p + inx + Math.random()}
                                     className={props.currentPage === p ? style.selectPage : ''}
                                     onClick={() => {
                                         props.onPageChanged && props.onPageChanged(p)
                                     }}>{p}</span>
                    })
                }

            </div>
            {
                props.users.map((user: UsersType) => {
                    return (
                        <div className={style.Users} key={user.id}>
                            <div className={style.Users_item}>
                                <div className={style.img_wrapper}>
                                    <div className={style.img}>
                                        <NavLink to={'/profile/' + user.id}>
                                            <img
                                                src={user.photos.small !== null ? user.photos.small : avatar}
                                                alt="ava"/>
                                        </NavLink>
                                    </div>
                                    <div className={style.follow}>
                                        {
                                            user.followed
                                                ? <button
                                                    disabled={props.followIsProgress.some(id => id === user.id)}
                                                    onClick={() => props.unFollowThunk(user.id)}
                                                >Unfollow</button>
                                                : <button
                                                    disabled={props.followIsProgress.some(id => id === user.id)}
                                                    onClick={() => props.followThunk(user.id)}
                                                >Follow</button>
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