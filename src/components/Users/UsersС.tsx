import React, {Component} from "react";
import {UsersType} from "../../redux/usersReducer";
import style from "./Users.module.scss";
import avatar from "../../assets/image/react-javascript-library-redux-user-interface-tesseract.jpg";
import * as axios from "axios";

interface usersPagesType  {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalCount: (totalCount:number) => void
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage:number) => void
}

export default class UsersC extends Component<usersPagesType, any> {

    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: any) => {
            this.props.setUsers(res.data.items)
            // this.props.setTotalCount(res.data.totalCount)
            console.log(res.data)
        })
    }
    onPageChanged = (pageNum:number) => {
        this.props.setCurrentPage(pageNum)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then((response:any) => {
                this.props.setUsers(response.data.items)
            })
        console.log(pageNum)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <React.Fragment>

                <div>
                    {
                        pages.map((p:number, inx) => {
                            return <span key={p + inx + Math.random()}
                                className={this.props.currentPage  === p ? style.selectPage : ''}
                            onClick={() => {this.onPageChanged(p)}}>{p}</span>
                        })
                    }

                </div>
                {
                    this.props.users.map((user: UsersType) => {
                        return (
                            <div className={style.Users} key={user.id}>
                                <div className={style.Users_item}>
                                    <div className={style.img_wrapper}>
                                        <div className={style.img}><img
                                            src={user.photos.small !== null ? user.photos.small : avatar} alt="ava"/>
                                        </div>
                                        <div className={style.follow}>
                                            {
                                                user.followed
                                                    ? <button onClick={() => {
                                                        this.props.unFollow(user.id)
                                                    }}>Unfollow</button>
                                                    : <button onClick={() => {
                                                        this.props.follow(user.id)
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
        )
    }
}

