import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import bkgdHeader from "./images/bkgd-header.png";
import bkgdBanner from "./images/bkgd-banner.png";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MyAppBar from "./AppBar";
import SideNav from "./SideNav";
import NonLandingHead from "./NonLandingHeader";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EmployeeForm from "./EmployeeForm";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
        <EmployeeForm></EmployeeForm>
        </>
      );
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

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
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function RequestPage() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </Paper>
              )}
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
