//import
import React from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import Toolbar from '@material-ui/core/Toolbar';
// Função ajudando 
function createData(time, name, item_ID, amount) {
    return { time, name, item_ID, amount };
}

function preventDefault(event) {
    event.preventDefault();
}


// MockData só para servir de exemplo
const MockData = [
    createData(0, '15-Jan-2021', 'Patricia Mullins', '98', '3'),
    createData(1, '12-Jan-2021', 'Barbara Harris', '32', '2'),
    createData(2, '08-Out-2020', 'Alan Peterson', '52', '5'),
    createData(3, '02-Set-2019', 'Harold Powell', '18', '1'),
    createData(4, '20-Dez-2018', 'Gerald Jenkins', '58', '9'),
    createData(0, '15-Jan-2021', 'Patricia Mullins', '98', '3'),
    createData(1, '12-Jan-2021', 'Barbara Harris', '32', '2'),
    createData(2, '08-Out-2020', 'Alan Peterson', '52', '5'),
    createData(3, '02-Set-2019', 'Harold Powell', '18', '1'),
    createData(4, '20-Dez-2018', 'Gerald Jenkins', '58', '9'),
    createData(0, '15-Jan-2021', 'Patricia Mullins', '98', '3'),
    createData(1, '12-Jan-2021', 'Barbara Harris', '32', '2'),
    createData(2, '08-Out-2020', 'Alan Peterson', '52', '5'),
    createData(3, '02-Set-2019', 'Harold Powell', '18', '1'),
    createData(4, '20-Dez-2018', 'Gerald Jenkins', '58', '9'),
    createData(0, '15-Jan-2021', 'Patricia Mullins', '98', '3'),
    createData(1, '12-Jan-2021', 'Barbara Harris', '32', '2'),
    createData(2, '08-Out-2020', 'Alan Peterson', '52', '5'),
    createData(3, '02-Set-2019', 'Harold Powell', '18', '1'),
    createData(4, '20-Dez-2018', 'Gerald Jenkins', '58', '9'),
];

const Dashboard = () => {

    return (
        <header className="App-header">
            <React.Fragment>
                {/* Título */}
                <Box m={2}>
                    <Typography component="h3" variant="h4" align="center" gutterBottom> Dashboard </Typography>
                    <Box>
                    </Box>
                </Box>
                {/* Box centralizando o conteúdo */}
                <Box m={1} width="70%">
                    {/* Parecido com box, mas para ter um bg branco */}
                    <Paper>
                        {/* Título */}
                        <form>
                            <Paper elevation={0}>
                                <Toolbar variant="regular">
                                <TextField id="standard-basic" label="Pesquisar" margin="dense" fullWidth="true" />
                                <Grid justify="space-between" container></Grid>
                                <Box textAlign="right">
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button variant="contained" {...bindTrigger(popupState)}>
                                                    <MenuIcon/>
                                                </Button>
                                                <Menu {...bindMenu(popupState)}>
                                                    <MenuItem onClick={popupState.close}>Adicionar novos itens<AddIcon /></MenuItem>
                                                    <MenuItem onClick={popupState.close}>Mudar conta<AccountCircle /></MenuItem>
                                                    <MenuItem onClick={popupState.close}>Sair<ExitToAppIcon /></MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </Box>
                            </Toolbar>
                            </Paper>
                        </form>
                        {/* Tabelas */}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>ID do produto</TableCell>
                                    <TableCell>Quantidade</TableCell>
                                </TableRow>
                            </TableHead>

                            {/* Uso da MockData */}
                            <TableBody>
                                {MockData.map((MockData) => (
                                    <TableRow key={MockData.id}>
                                        <TableCell>{MockData.time}</TableCell>
                                        <TableCell>{MockData.name}</TableCell>
                                        <TableCell>{MockData.item_ID}</TableCell>
                                        <TableCell>{MockData.amount}</TableCell>
                                        <TableCell align="right">{MockData.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div>
                        </div>
                    </Paper>
                </Box>
            </React.Fragment>
        </header>
    );
}

export default Dashboard;