import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Anatomy = ({ classes }) => {

  return (
    <div className={classes.wrapper}>
      ...
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: 'blue'
  }
})

export default withStyles(styles)(Anatomy)




