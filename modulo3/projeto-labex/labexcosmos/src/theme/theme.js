import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: '#122b43',
            lighter: '#1D456B',
            darker: '#121243',
            contrastText: '#fff'
        },
        neutral: {
            main: '#b9bcbf',
            lighter: '#fff',
            darker: '#9EA3A7',
            contrastText: '#222',
            },
    },
})

export default theme