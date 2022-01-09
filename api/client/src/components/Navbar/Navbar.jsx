
    import React, {useState,useLayoutEffect} from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import AppBar from '@material-ui/core/AppBar';
    import Toolbar from '@material-ui/core/Toolbar';
    import Typography from '@material-ui/core/Typography';
    import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
    import Badge from '@material-ui/core/Badge';
    import { Link } from 'react-router-dom';
    import {useGlobalContext} from '../context/context';
   

    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        position: 'fixed',
        width: '100%'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
    
    const  Navbar = () => {
      const {cart} = useGlobalContext();
      const classes = useStyles();
  
      return (
        <div className={classes.root} >
          <AppBar position="static"  color = "white">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Link className="link" to="/">
               <b> Perez Books </b>
               </Link>
              </Typography>
              <Badge badgeContent={cart.length} color="secondary">
              <Link className="link" to="/cart">
              <ShoppingCartIcon />
              </Link>
              </Badge>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
    
 

export default Navbar
