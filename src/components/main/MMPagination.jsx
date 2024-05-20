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

const MMPagination = (props) => {
  const [active, setactive] = useState(props.active);

  const maxLimit = props.maxLimit ? props.maxLimit : 10;
  useEffect(() => {
    setactive(props.active);
  }, [props.active]);

  /*
    CASES:

    I -> total < maxLimit -> show all of them 
    II -> total > maxLimit; active in last maxLimit -> show last maxLimit 
    III -> total >  maxLimit; active not in last maxLimit -> show from active till active+maxLimit


    */
  const getArray = (total, active) => {
    let arr = [];

    if (total <= maxLimit) {
      for (let i = 0; i < total; i++) {
        arr.push({
          value: i + 1,
          active: i + 1 == active,
        });
      }
    } else {
      var firstStartPoint = active - 1;

      if (firstStartPoint + maxLimit > total) {
        firstStartPoint = total - maxLimit;
      }

      for (let i = firstStartPoint; i < firstStartPoint + maxLimit; i++) {
        arr.push({
          value: i + 1,
          active: i + 1 == active,
        });
      }
    }

    return arr;
  };

  const updateActive = (val) => {
    if (val < 1) {
      return;
    }
    if (val > props.total) {
      return;
    }
    props.onChange(val);
    setactive(val);
    // props.active = val
  };

  return (
    <Observer>
      {() => (
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                updateActive(active - 1);
              }}
            >
              <span
                style={{
                  marginRight: 10,
                  color: "rgba(186,15,23,1)",
                  fontWeight: "bold",
                }}
              >
                〈
              </span>
            </div>
            {getArray(props.total, active).map((item, index) => {
              return (
                <div
                  style={{
                    minWidth: "15px",
                    marginLeft: 10,
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    fontWeight: "500",
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    updateActive(item.value);
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                      color: item.active ? "black" : "rgba(167,167,167,1)",
                      fontSize: 16,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              );
            })}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                updateActive(active + 1);
              }}
            >
              <span
                style={{
                  marginLeft: 20,
                  color: "rgba(186,15,23,1)",
                  fontWeight: "bold",
                }}
              >
                〉
              </span>
            </div>
          </div>
        </div>
      )}
    </Observer>
  );
};
export default MMPagination;
