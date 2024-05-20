import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { Observer, observer } from "mobx-react";
import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

const MaterialSwitch = (props) => {
  const [checked, setChecked] = React.useState(true);

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: props.backgroundColor || "green",
      "&:hover": {
        backgroundColor: props.backgroundColor || "green",
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: props.backgroundColor || "green",
    },
  }));

  useEffect(() => {
    // checked =
    setChecked(props.value);
  }, []);

  const onChange = (val) => {
    setChecked(val.target.checked);
    if (props.onChange) {
      props.onChange(val.target.checked);
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <Observer>
      {() => (
        <div style={{ position: "relative" }}>
          <CustomSwitch
            checked={checked}
            onChange={(val) => {
              onChange(val);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      )}
    </Observer>
  );
};
export default MaterialSwitch;
