import React from "react";
import { withStyles, createStyles, Theme, WithStyles, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
import Link from "next/link";

import { Input, Select, Button, Checkbox, DynamicSelect, PDynamicSelect } from "../src/components";

const styles = (theme: Theme) =>
  createStyles({
    formContainer: {
      padding: theme.spacing.unit * 2,
      height: "100%"
    },
    formControl: {
      marginBottom: theme.spacing.unit * 2
    },
    divider: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    },
    title: {
      marginBottom: theme.spacing.unit * 1.5,
      color: "grey"
    },
    adornment: {
      marginRight: theme.spacing.unit * 1.5
    }
  });

const data = [
  { gender: "Male", age: "10-20", name: "Frank" },
  { gender: "Male", age: "10-20", name: "Bryant" },
  { gender: "Female", age: "10-20", name: "Susan" },
  { gender: "Male", age: "20-30", name: "Billy" },
  { gender: "Female", age: "10-20", name: "Lilly" },
  { gender: "Female", age: "20-30", name: "Carol" },
  { gender: "Male", age: "20-30", name: "Tom" },
  { gender: "Male", age: "30-40", name: "Willy" },
  { gender: "Female", age: "20-30", name: "Wendy" },
  { gender: "Female", age: "30-40", name: "Alice" },
  { gender: "Male", age: "10-20", name: "Marshall" }
]

type ChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>;

interface PContent extends WithStyles<typeof styles> {}

interface SContent {
  [key: string]: any;
  account: string;
  password: string;
  gender: string;
  cities: Array<string>;
  dGender: string;
  dAge: string;
  dName: string;
}

class Content extends React.Component<PContent, SContent> {
  constructor(props: PContent) {
    super(props);
    this.state = {
      account: "",
      password: "",
      gender: "Male",
      cities: ["Taipei", "Tainan", "Kaoshiung"],
      dGender: "",
      dAge: "",
      dName: ""
    };
  }

  handleChange: ChangeEventHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDynamicChange: PDynamicSelect["onChangeByFilter"] = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render = () => {
    const { classes } = this.props;
    const { account, password, gender, cities, dGender, dAge, dName } = this.state;
    return (
      <Grid container direction="column">
        <Grid container spacing={16} style={{ marginBottom: 16 }}>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Normal form
              </Typography>
              <Divider className={classes.divider} />
              <Input
                fullWidth
                required
                color="secondary"
                name="account"
                value={account}
                label="Account"
                startAdornment={<Person className={classes.adornment} />}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
              <Input
                fullWidth
                required
                color="secondary"
                type="password"
                name="password"
                value={password}
                label="Password"
                startAdornment={<Lock className={classes.adornment} />}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
              <Grid container alignItems="center" justify="space-between">
                <Checkbox color="secondary" label="Remember me" />
                <Link href="#">
                  <a>Forget password?</a>
                </Link>
              </Grid>
              <br />
              <Button color="primary" variant="contained" className={classes.formControl}>
                Sign in
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Selection form
              </Typography>
              <Divider className={classes.divider} />
              <Select
                all
                name="gender"
                fullWidth
                options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]}
                color="secondary"
                label="Choose your gender"
                value={gender}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
              <Select
                all
                fullWidth
                multiple
                name="cities"
                options={[
                  { value: "Taipei", label: "Taipei" },
                  { value: "Taoyuan", label: "Taoyuan" },
                  { value: "Hsinchu", label: "Hsinchu" },
                  { value: "Taichung", label: "Taichung" },
                  { value: "Tainan", label: "Tainan" },
                  { value: "Chiayi", label: "Chiayi" },
                  { value: "Kaoshiung", label: "Kaoshiung" }
                ]}
                color="secondary"
                label="Choose travel cities"
                value={cities}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Paper className={classes.formContainer}>
              <Typography variant="h5" className={classes.title}>
                Dynamic selection
              </Typography>
              <Divider className={classes.divider} />
              <DynamicSelect
                fullWidth
                name="dGender"
                value={dGender}
                data={data}
                valueColumn="gender"
                color="secondary"
                label="Choose gender"
                onChangeByFilter={this.handleDynamicChange}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
              <DynamicSelect
                fullWidth
                name="dAge"
                value={dAge}
                data={data}
                valueColumn="age"
                color="secondary"
                label="Choose age"
                filters={{ gender: dGender }}
                onChangeByFilter={this.handleDynamicChange}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
              <DynamicSelect
                fullWidth
                all={false}
                name="dName"
                value={dName}
                data={data}
                valueColumn="name"
                color="secondary"
                label="Choose name"
                filters={{ gender: dGender, age: dAge }}
                onChangeByFilter={this.handleDynamicChange}
                onChange={this.handleChange}
                FormControlProps={{
                  className: classes.formControl
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
