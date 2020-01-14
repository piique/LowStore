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
    List,
    Button,
    ButtonGroup,
} from "@material-ui/core";

const styles = () => ({
    root: {
        padding: "50px 100px",
        zIndex: 999,
        position: "absolute"
    },
    card: {
        display: "list-item",
        backgroundColor: '#f5f5f5',
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
        background: "#7159C1"
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
                            <ListItem button>
                                <ListItemText primary="Ingredientes" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary="Produtos" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Mostruario" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Estoque" />
                            </ListItem>
                    </Paper>
                    <Paper elevation={3} className={classes.lastPaper}>
                        Graficos
                    </Paper>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(App);