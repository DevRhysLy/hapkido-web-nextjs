import React from "react"
import styles from "./MainInstructorsAvatar.module.css"

export default function MainInstructorsAvatar({ instructors }) {
    return (
        <div className={styles.wholeContainer}>
            <div className={styles.rowContainer}>
                <img className={styles.roundImg} src={instructors.fields.avatar.fields.file.url} />
                <div className={styles.columnContainer}>
                    <div className={styles.name}>{instructors.fields.name}</div>
                    <div className={styles.bio}>{instructors.fields.bio}</div>
                    <div className={styles.rank}>{instructors.fields.rank}</div>
                </div>
            </div>

        </div>
    )
}