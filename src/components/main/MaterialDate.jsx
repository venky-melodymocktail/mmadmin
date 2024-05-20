import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { Observer, observer } from "mobx-react";
import React, {
  Component,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MaterialDate = (props) => {
  useEffect(() => {
    if (props.value) {
      setValue(new Date(props.value));
    }
  }, [props.value]);
  const [value, setValue] = useState(props.value ? new Date(props.value) : "");

  const onChangeValue = (val) => {
    setValue(val);

    props.onChange && props.onChange(val);
  };

  const CustomInput = forwardRef(({ value, onClick, style, ph }, ref) => (
    <button style={{ ...style }} onClick={onClick} ref={ref}>
      <span> {value}</span>
      {!value && <span style={{ fontSize: 15, color: "#444" }}> {ph}</span>}
    </button>
  ));

  return (
    <Observer>
      {() => (
        <div style={{ ...props.style, padding: 0, height: "auto" }}>
          <DatePicker
            selected={value}
            // {...defaultValue}
            minDate={props.minDate}
            maxDate={props.maxDate}
            showIcon={false}
            onChange={(newValue) => {
              onChangeValue(newValue);
            }}
            customInput={
              <CustomInput
                style={{
                  ...props.style,
                  position: "relative",
                  borderWidth: 0,

                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: 15,
                }}
                ph={props.placeholder}
              />
            }
          />
        </div>
      )}
    </Observer>
  );
};
export default MaterialDate;
