import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import useRecordPlayer from '../RecordPlayer/RecordPlayer.hook'
import styles from './ControlPad.styles'

const useStyles = makeStyles(styles)

function ControlPad() {
  const classes = useStyles()
  const { spinRecord, stopRecord } = useRecordPlayer()
  const { direction, speed } = useSelector(({recordPlayer})=>{
    console.log(recordPlayer)
    return recordPlayer
  })

  // const {} = useControlPad()
  /**
    component houses triggers to handle the display and controls of the record player
  */
  return (
    <div>
      <Button onClick={()=>spinRecord('CLOCKWISE',1)} className={classes.button}>Start</Button>
      <Button onClick={()=>stopRecord()} className={classes.button}>Stop</Button>
      <Button onClick={()=>spinRecord('COUNTERCLOCKWISE',0.45)} className={classes.button}>45</Button>
      <Button onClick={()=>spinRecord('COUNTERCLOCKWISE',0.35)} className={classes.button}>35</Button>
    </div>
  )
}

export default ControlPad
