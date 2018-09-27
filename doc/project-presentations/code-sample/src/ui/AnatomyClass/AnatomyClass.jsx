import React from 'react'
import { withStyles } from '@material-ui/core/styles'

class Anatomy extends React.Component {

  render() {

    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        ...
      </div>
    )
  }

}

const styles = theme => ({
  wrapper: {
    backgroundColor: 'blue'
  }
})

export default withStyles(styles)(Anatomy)




