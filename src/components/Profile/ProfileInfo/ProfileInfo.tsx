import React, {ChangeEvent} from 'react';
import style from './ProfileInfo.module.scss'
import {ProfileType} from '../../../redux/profileReducer';
import Spinner from "../../UI/Loader/Spinner/Spinner";
import ProfileStatus from "./ProfileStatus";

interface ProfileInfoProps {
    profile?: ProfileType
    status: string
    updateStatus: (status:string)=>  void
    loading: boolean
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profile ) {
        return <Spinner/>
    }
    if (props.loading ) {
        return <Spinner/>
    }
    const onMainPhoto = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const {fullName, photos, aboutMe, contacts, lookingForAJob, lookingForAJobDescription} = props.profile
    console.log(props.profile)
    return (
        <>
            {/*<div className={style.content_header_img}>*/}

            {/*</div>*/}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.user}>
                <div className={style.avatar_wrapper}>
                    <div className={style.avatar}>
                        <img src={photos.small} alt="avatar"/>
                    </div>
                    {props.isOwner && <input type={'file'} onChange={onMainPhoto}/>}
                </div>

                <div className={style.user_prof}>
                    <div className={style.name}>{fullName}</div>
                    <div className={style.status}>{aboutMe}</div>
                    <div className={style.desc}>
                        <div className={style.contact}>
                            <div className={style.contact_title}>facebook:</div>
                            <div className={style.contact_descr}>{contacts.facebook}</div>
                        </div>
                        <div className={style.contact}>
                            <div className={style.contact_title}>vk:</div>
                            <div className={style.contact_descr}>{contacts.vk}</div>
                        </div>
                        <div className={style.jobs}>
                            <div className={style.jobs_wrapper}>
                                <div className={style.jobs_title}>В поисках работы</div>
                                <div className={style.jobs_bull}>{lookingForAJob? 'ИЩУ' : "НЕТ"}</div>
                            </div>
                            <div className={style.jobs_desr}>{lookingForAJobDescription}</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default ProfileInfo