import React from "react";
import s from  './FormContrrols.module.css'
export const TextAreaFom = ({input, ...props}:any) => {
    return (
        <ControllForm {...props}><textarea {...input} {...props}/></ControllForm>
    )
}


const ControllForm = (props:any) => {
    const {meta,children } = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl  + " " + (hasError ? s.error : '')}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = (props:any) => {
    const {input, ...restProps} = props
    return (
        <ControllForm {...props}><input {...input} {...restProps}/></ControllForm>
    )
}


