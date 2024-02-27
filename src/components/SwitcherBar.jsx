import styles from './SwitcherBar.module.css'
import clsx from "clsx";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function SwitcherBar({ pageId }) {
    return (
        <div style={{display: "flex"}}>
            <div className={clsx([styles.btn, pageId===0 && styles.active])}><Link to={"../reviews"}>Reviews</Link></div>
            <div className={clsx([styles.btn, pageId===1 && styles.active])}><Link to={"../cast"}>Cast</Link></div>
        </div>
    )
}
