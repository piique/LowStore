import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    Paper, 
    Avatar,
    ListItemAvatar,
    ListItem,
    Icon,
    ListItemText,
    Divider,
    Button,
    ButtonGroup,
} from "@material-ui/core";
import Ingredientes from './ingredientes';

const styles = () => ({
    root: {
        padding: "50px 100px",
        zIndex: 999,
        position: "absolute"
    },
    card: {
        display: "list-item",
        backgroundColor: '#e4e8f2',
        height: "calc(100vh - 100px)"
    },
    rightBorder: {
        borderRight: "solid #d0D0D0 1px"
    },
    content: {
        marginTop: 0
    },
    background: {
        position: "absolute",
        height: 200,
        width: "100%",
        top: 0,
        background: "#455791"
    },
    paper: {
        padding: 20,
        display: 'flex',
        position: 'relative',
        margin: '50px',
        height: '10%',
    },
    lastPaper: {
        padding: 20,
        display: 'flex',
        position: 'relative',
        margin: '50px',
        height: '55%',
    },
    purple: {
        backgroudColor: '#7159C1'
    },
    listItem: {
        textAlign: 'center'
    }
});

const App = ({ classes }) => (
    <div>
        <div className={classes.background} />
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <Paper elevation={3} className={classes.paper}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    P
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pedro Vilaça" secondary="Jan 14, 2020" />
                        </ListItem>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button>
                                <Icon>
                                    power_settings_new
                                </Icon>
                            </Button>
                        </ButtonGroup>                        
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                            <ListItem button className={classes.listItem}>
                                <ListItemText primary="Ingredientes" />
                            </ListItem>
                            <Divider />
                            <ListItem button className={classes.listItem}>
                                <ListItemText primary="Produtos" />
                            </ListItem>
                            <ListItem button className={classes.listItem}>
                                <ListItemText primary="Mostruario" />
                            </ListItem>
                            <Divider light />
                            <ListItem button className={classes.listItem}>
                                <ListItemText primary="Estoque" />
                            </ListItem>
                    </Paper>
                    <Paper elevation={3} className={classes.lastPaper}>
                        <Ingredientes/>
                    </Paper>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(App);