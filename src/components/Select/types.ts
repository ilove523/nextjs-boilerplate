import { WithStyles, Omit } from "@material-ui/core";
import { SelectProps } from "@material-ui/core/Select";
import { FormControlProps } from "@material-ui/core/FormControl";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

import { selectStyles } from "./styles";
import { PThemeProvider } from "../ThemeProvider";

export type ChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>;

export type SelectOptionValue = string | number | Array<string>;

export type SelectOptionLabel = string;

export interface SelectOption {
  value: SelectOptionValue;
  label: SelectOptionLabel;
}

export interface PSelectBase extends Omit<SelectProps, "color" | "classes">, WithStyles<typeof selectStyles> {
  options: Array<SelectOption>;
  search: boolean;
  all?: boolean;
  allLabel?: SelectOptionLabel;
  allValue?: SelectOptionValue;
}

export interface PSelectSearch extends WithStyles<typeof selectStyles> {
  searchValue: string;
  onSearchChange: ChangeEventHandler;
  onSearchClear: () => void;
}

export interface PSelectSingle extends PSelectBase, PSelectSearch {}

export interface PSelectMulti extends PSelectBase, PSelectSearch {}

export interface PSelect extends PSelectBase, PThemeProvider {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  fullWidth: boolean;
  required?: boolean;
  error?: boolean;
  FormControlProps?: FormControlProps;
  InputLabelProps?: InputLabelProps;
  FormHelperTextProps?: FormHelperTextProps;
}

export interface SSelect {
  searchValue: string;
}
