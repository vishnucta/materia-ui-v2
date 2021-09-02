import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import bkgdHeader from "./images/bkgd-header.png";
import bkgdBanner from "./images/bkgd-banner.png";
import novologo from "./images/novocure.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MyAppBar from "./AppBar";
import SideNav from "./SideNav";
import NonLandingHead from "./NonLandingHeader";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#D4E9F9",
    color: "#1C4A7C",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: `url(${bkgdHeader})`,
    // position: "absolute"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#345DAC",
    color: "white",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    // width:"100%",
    flexGrow: 1,
    //padding: theme.spacing(3),
    //backgroundImage: `url(${bkgdBanner})`
    // position:"sticky"
  },
  title: {
    flexGrow: 1,
    // display:"flex",
    maxWidth: "150px",
    // display: "block",
    // position: "relative",
    // left: "-5px",
  },

  titleLogo: {
    maxWidth: "150px",
  },

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

export default function AttachmentPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar></MyAppBar>
      <SideNav></SideNav>
      <main className={classes.content}>
        <Toolbar />

        {/* <Grid container spacing={0} className={classes.ObjectContainer} style={{width:'calc(100% - '+drawerWidth+')'}}> */}
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <NonLandingHead></NonLandingHead>
          </Grid>
          <Grid item xs={12}>
            <div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">
                        Fat&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Carbs&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Protein&nbsp;(g)
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
