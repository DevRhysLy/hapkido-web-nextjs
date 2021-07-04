import React from "react";
import ReactPlayer from 'react-player'
import styles from "./ResponsivePlayer.module.css"

const ResponsivePlayer = ({url}) => {
      return (
        <div className={styles['player-wrapper']}>
          <ReactPlayer
            className={styles['react-player']}
            url={url}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
  }

  export default ResponsivePlayer;