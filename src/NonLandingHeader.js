import React from "react";
import Box from "@material-ui/core/Box";
import bkgdBanner from "./images/bkgd-banner.png";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  ObjectContainer: {
    backgroundImage: `url(${bkgdBanner})`,
    backgroundRepeat: "no-repeat",

    position: "sticky",

    width: "100%",
    height: "500px",
    backgroundSize: "contain",

    // height: "100vh",
    // backgroundPosition: "center",
    //   backgroundSize: "cover"
  },
  ObjectContainerTexts: {
    position: "absolute",
    //backgroundColor: "red",
    left: "520px",
  },
}));

const NonLandingHead = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ObjectContainer}>
        <div className={classes.ObjectContainerTexts}>
          {/* <img src="./images/bkgd-banner-home.png"></img> */}
          <h2 style={{ marginTop: "0px" }}>Service Arrangement Request</h2>
          {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque id quam sapiente unde voluptatum alias vero
                  debitis, magnam quis quod.
                </p> */}
          <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Request ID:</Box>
              <Box>Request Status:</Box>
            </Box>
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Test</Box>
              <Box>Test</Box>
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Created By:</Box>
              <Box>Created On:</Box>
            </Box>
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Test</Box>
              <Box>Test</Box>
            </Box>
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Approved By:</Box>
              <Box>Approved On:</Box>
            </Box>
            <Box
              flexDirection="column"
              p={1}
              m={1}
              // bgcolor="background.paper"
            >
              <Box>Test</Box>
              <Box>Test</Box>
            </Box>
          </Box>
        </div>
        {/* <div className={classes.ObjectContainer}></div> */}
      </div>
    </>
  );
};

export default NonLandingHead;
