import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Página para login

const LoginPage = () => {
    // Main
    return (
        <div className="App">
            <header className="App-header">
                {/* "Logo" */}
                <Typography component="h1" variant="h2" align="center" color="Secondary" gutterBottom>
                    Login <AccountCircle fontSize="large"/>
        </Typography>
                {/* Form para organizar os inputs de login e senha*/}
                <form>
                    {/* Input de login */}
                    <TextField
                        id="Login"
                        label="Login"
                        variant="filled"
                        color="secondary"
                        margin="normal"
                        fullWidth
                        required
                    />
                    {/* Input de senha */}
                    <TextField
                        id="Senha"
                        label="Senha"
                        variant="filled"
                        color="secondary"
                        margin="normal"
                        fullWidth
                        required
                    />
                </form>
                {/* Botão para entrar, botado dentro de uma Box para aumentar a margem e deixar mais organizado*/}
                <Box m={2}>
                    <Button variant="contained" color="secondary" href="/Dashboard" onClick={() => {alert("Redirecionando para o Dashboard")}}>Entrar</Button>
                </Box>
            </header>
        </div>
    );
}

export default LoginPage;
