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

// import MaterialSelectState from './materialSelect.state';
// import { borderColor, color } from '@mui/system';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ButtonBase } from "@mui/material";

const MaterialMenu = (props) => {
  useEffect(() => {}, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick();
    }

    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeAction = (item) => {
    // setItem(e.target.value)
    // state.value = e.target.value
    if (props.onChange) {
      props.onChange(item);
    }

    setAnchorEl(null);
  };

  return (
    <Observer>
      {() => (
        <div style={{ position: "relative", borderWidth: 0 }}>
          <ButtonBase
            sx={{ borderWidth: 0 }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {props.children}
            {/* <span>Click</span> */}
          </ButtonBase>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {Array.isArray(props.options) &&
              props?.options.map((item, index) => {
                return (
                  <MenuItem
                    onClick={() => {
                      onChangeAction(item);
                    }}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            {/* <MenuItem onClick={(handleClose)=>}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
        </div>
      )}
    </Observer>
  );
};
export default MaterialMenu;
