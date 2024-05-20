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

import Select from "react-select";

const MaterialAutoComplete = (props) => {
  const [options, setOptions] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [prevSelected, setPrevSelected] = React.useState(null);

  useEffect(() => {
    let arr = [];

    if (_.isArray(props.options)) {
      for (var i = 0; i < props.options.length; i++) {
        arr.push({
          value: props.options[i],
          label: props.options[i],
        });
      }

      setOptions(arr);
    }

    if (props.value == "") {
      setSelected(null);
    } else {
      setSelected({ label: props.value, value: props.value });
    }
  }, [props.options, props.value]);

  const handleChange = (val) => {
    setSelected(val);

    if (props.onSelect) {
      props.onSelect(val.value);
    }
  };

  return (
    <Observer>
      {() => (
        <div style={{ ...props.style, padding: 0, height: "auto" }}>
          <Select
            // isMulti
            isSearchable
            placeholder={props.placeholder || "Select your options"}
            styles={{
              container: (baseStyles, state) => ({
                ...baseStyles,
                minHeight: props.style.height,
                width: props.style.width,
              }),

              control: (baseStyles, state) => ({
                ...baseStyles,

                minHeight: props.style.height,

                borderWidth: 0,
              }),

              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "#444",
                fontSize: 13,
              }),
            }}
            defaultInputValue={selected}
            value={selected}
            onChange={handleChange}
            options={options}
            onInputChange={(val) => {
              if (props.onChange) {
                props.onChange(val);
              }
            }}
            onFocus={() => {
              // alert("fo");
              setPrevSelected(selected);
              setSelected(null);
            }}
            onMenuClose={() => {
              if (selected == null) {
                // alert("j");
                if (prevSelected != null) {
                  setSelected(prevSelected);
                }
              }
            }}
          />
        </div>
      )}
    </Observer>
  );
};
export default MaterialAutoComplete;
