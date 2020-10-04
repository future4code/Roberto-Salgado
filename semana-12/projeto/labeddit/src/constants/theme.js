import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'
import { bgColor,contrastColor, neutralColor, primaryColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: contrastColor
    },
    text: {
      primary: neutralColor
    },
    background: {
      default: bgColor
    }
  }
})

export default theme