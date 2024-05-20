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
// import SelectState from './select.state';

import Rating from "@mui/material/Rating";

const MaterialRating = (props) => {
  useEffect(() => {}, []);

  // const [value, setValue] = React.useState(props.dataSource.rating);

  const onChangeValue = (val) => {
    // props.dataSource.rating = val
    // setValue(val)
    props.onChange && props.onChange(val);
  };

  return (
    <Observer>
      {() => (
        <div
        // style={{ ...props.style, position: 'relative', borderWidth:0}}
        >
          <Rating
            sx={{
              fontSize: props.dataSource?.size ? props.dataSource.size : 14,
              color: props.dataSource?.color ? props.dataSource.color : "green",
            }}
            name="simple-controlled"
            max={props.dataSource?.max || 5}
            value={props.dataSource?.rating || 4}
            readOnly={props.dataSource?.readOnly || false}
            onChange={(event, newValue) => {
              onChangeValue(newValue);
            }}
          />
        </div>
      )}
    </Observer>
  );
};
export default MaterialRating;
