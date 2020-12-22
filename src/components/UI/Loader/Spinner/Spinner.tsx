import React from "react";
import s from './Spinner.module.scss';

const Spinner = () => {

    let arrStyle = [];
    for (let i = 1; i < 21; i++) {
        arrStyle.push({"--i": i} as React.CSSProperties)
    }

    return (
        <React.Fragment>
            <section>
                <div className={s.loader}>
                    {
                        arrStyle.map((item, inx) => {
                            return <span style={item} key={inx}/>
                        })
                    }

                </div>
            </section>
        </React.Fragment>
    )
}

export default Spinner;