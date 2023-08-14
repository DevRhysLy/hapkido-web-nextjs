import React from "react";
import styles from "./MainInstructorsAvatar.module.css";
import Link from "next/link";

export default function MainInstructorsAvatar({ instructors }) {
  return (
    <Link
      href={`/about/our-master-and-instructors/${instructors.fields.slug}`}
      legacyBehavior>
      <div className={styles.wholeContainer}>
        <div className={styles.rowContainer}>
          <img
            className={styles.roundImg}
            src={instructors.fields.avatar.fields.file.url}
          />
          <div className={styles.columnContainer}>
            <div className={styles.name}>{instructors.fields.name}</div>
            <div className={styles.bio}>{instructors.fields.bio}</div>
            <div className={styles.rank}>{instructors.fields.rank}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
