import React from "react";
import {
  Container,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputTable from "./InputTable";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "90vh",
    flexDirection: "column",
  },
  add: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
}));
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Devices = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root}>
      <h3 style={{ color: "#50A84C" }}>Devices</h3>
      <div>
        <AppBar
          position="static"
          elevation={0}
          style={{ height: 50, width: 500, background: "transparent" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Input Device" {...a11yProps(0)} />
            <Tab label="Output Device" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          disabled={true}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={classes.add}>
              <Button color="primary" variant="text" size="large">
                <Box
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textTransform: "none",
                  }}
                >
                  +Add Input Device
                </Box>
              </Button>
            </div>
            <div>
              <InputTable />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.add}>
              <Button color="primary" variant="text" size="large">
                <Box
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textTransform: "none",
                    padding: 0,
                  }}
                >
                  +Add Output Device
                </Box>
              </Button>
            </div>
            <div>
              <InputTable />
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  );
};

export default Devices;
