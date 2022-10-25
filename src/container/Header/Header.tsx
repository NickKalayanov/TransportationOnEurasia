import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import point from 'images/point.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Container>
                    <Toolbar>
                        <IconButton className='iconButton'>
                            <Logo />
                        </IconButton>
                        <Typography
                            className="typography"
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={point} />
                            Наши офисы
                        </Typography>
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
