import React from "react";
import { withStyles, Popover, FormGroup, Tooltip } from "@material-ui/core";
import { ViewColumn } from "@material-ui/icons";
import classNames from "classnames";

import { PViewColumns, SViewColumns } from "./types";
import { toolbarStyles } from "./styles";
import { Checkbox } from "../Checkbox";

class ViewColumns extends React.Component<PViewColumns, SViewColumns> {
  private __ref = React.createRef<SVGSVGElement>();

  constructor(props: PViewColumns) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render = () => {
    const { options, onChnage, classes } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <Tooltip title="選擇欄位" classes={{ popper: classes.tooltip }}>
          <ViewColumn
            ref={this.__ref}
            className={classNames(classes.icon, classes.iconClickable, classes.iconHighlight)}
            onClick={this.handleToggleMenu}
          />
        </Tooltip>
        <Popover
          open={open}
          anchorEl={this.__ref.current}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: -8, horizontal: "right" }}
          onClose={this.handleToggleMenu}
          classes={{ paper: classes.columnMenu }}
        >
          <FormGroup>
            {options.map((opt, index) => {
              return (
                <Checkbox
                  key={index}
                  value={opt.column.toString()}
                  color="secondary"
                  label={opt.label}
                  checked={opt.visible}
                  onChange={onChnage}
                />
              );
            })}
          </FormGroup>
        </Popover>
      </React.Fragment>
    );
  };
}

export default withStyles(toolbarStyles)(ViewColumns);
