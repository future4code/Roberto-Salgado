import { createMuiTheme } from '@material-ui/core'
import { contrastColor, neutralColor, primaryColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: contrastColor
    },
    text: {
      primary: neutralColor
    }
  }
})

export default theme