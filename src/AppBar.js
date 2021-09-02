import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import novologo from "./images/novocure.png";
import Box from "@material-ui/core/Box";
import bkgdHeader from "./images/bkgd-header.png";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    //backgroundImage: `url(${bkgdHeader})`,
    // position: "absolute"

    //background:linear-gradient(rgba(250,0,0,0.5),transparent),
    // background: 'linear-gradient(rgba(250,0,0,0.5),transparent)',
    //background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7))',
    //background: 'linear-gradient(to right, rgba(#0EB2E9, 0.2), rgba(#2365B0, 0.7))',
    background: 'linear-gradient(to right, #0EB2E9 , #2365B0)',
  //backgroundColor:"#2365B0" /*this your primary color*/
  },
  title: {
    flexGrow: 1,
    // display:"flex",
    maxWidth: "150px",
    // display: "block",
    // position: "relative",
    // left: "-5px",
  },
}));

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} >
        {/* <Toolbar> */}

        {/* <img src={novologo} className={classes.title} />
          
            
            <Typography variant="h6" noWrap>
              Vishnu P
            </Typography> */}

        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1}>
            <img src={novologo} className={classes.title} />
          </Box>
          <Box p={1}>
            <Typography variant="h6" noWrap>
              Vishnu P
            </Typography>
          </Box>
        </Box>

        {/* </Toolbar> */}
      </AppBar>
    </>
  );
};

export default MyAppBar;
