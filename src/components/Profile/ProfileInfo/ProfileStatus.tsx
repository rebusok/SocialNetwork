import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

interface ProfileStatusProps {
    status: string
    updateStatus: (status:string)=>  void
}

const ProfileStatus: React.FC<ProfileStatusProps> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.status)
    const [value, setValue] = useState<string>(title)
    const onTitleKeyHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter"){
            setEditMode(false)
        }
    }
    const onBlurHandler = () => {

        props.updateStatus(value)
        setEditMode(false)
        setTitle(value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            {
                editMode
                    ? <div>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => onChangeTitle(e)}
                        onKeyDown={(e) => onTitleKeyHandler(e)}
                        onBlur={onBlurHandler}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{title}</span>
                    </div>

            }


        </div>
    );
};

export default ProfileStatus;