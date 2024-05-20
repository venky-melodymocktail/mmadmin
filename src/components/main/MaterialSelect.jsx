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

const MaterialSelect = (props) => {
  const [options, setOptions] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

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

    let selectedArr = [];

    if (_.isArray(props.value)) {
      for (var i = 0; i < props.value.length; i++) {
        selectedArr.push({
          value: props.value[i],
          label: props.value[i],
        });
      }

      setSelected(selectedArr);
    }

    // setItems(props.value || []);
    // alert(state.dataSource)
  }, [props.options, props.value]);

  const handleChange = (val) => {
    // alert(JSON.stringify(obj));
    setSelected(val);

    let arr = [];

    for (var i = 0; i < val.length; i++) {
      arr.push(val[i].value);
    }
    if (props.onChange) {
      props.onChange(arr);
    }
  };

  return (
    <Observer>
      {() => (
        <div style={{ ...props.style, padding: 0, height: "auto" }}>
          <Select
            isMulti
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
            value={selected}
            onChange={handleChange}
            options={options}
          />
        </div>
      )}
    </Observer>
  );
};
export default MaterialSelect;
