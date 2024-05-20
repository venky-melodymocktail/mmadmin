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

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MMFilter = (props) => {
  var state = { ...props };

  const onChange = (index, optionIndex) => {
    // state.value[filter] = val
    let isMulti = state.dataSource[index].multi;
    if (!isMulti) {
      let options = state.dataSource[index]["options"];
      for (var i = 0; i < options.length; i++) {
        if (i != optionIndex) {
          options[i].selected = false;
        }
      }
    }
    state.dataSource[index]["options"][optionIndex].selected =
      !state.dataSource[index]["options"][optionIndex].selected;

    props.onChange && props.onChange(state.dataSource);
    // setfilter(val)
  };

  const clearAll = () => {
    var filters = state.dataSource;
    for (var i = 0; i < filters.length; i++) {
      // let options = filters[i].options;

      for (var j = 0; j < filters[i].options.length; j++) {
        filters[i].options[j].selected = false;
      }
    }
    // alert(JSON.stringify(filters))
    props.onChange && props.onChange(state.dataSource);
  };

  // state.style.width = 376
  const filterList = state.dataSource;

  return (
    <Observer>
      {() => (
        <div>
          <div
            style={{
              width: 350,
              border: "1px solid rgba(207,206,206,1)",
              display: "flex",
              justifyContent: "space-between",
              height: 102,
              alignItems: "center",
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <span
              style={{
                fontSize: 17,
                color: "rgba(88,89,91,1)",
                fontFamily: "Inter",
                fontWeight: "600",
              }}
            >
              Filters
            </span>
            <div
              onClick={() => {
                clearAll();
              }}
              style={{ cursor: "pointer" }}
            >
              <span
                style={{
                  fontSize: 17,
                  color: "rgba(186,15,23,1)",
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                CLEAR ALL
              </span>
            </div>
          </div>
          {filterList.map((item, index) => {
            return (
              <Accordion
                defaultExpanded={item.open}
                disableGutters
                sx={{
                  margin: 0,
                  width: 350,
                  paddingTop: "20px",
                  paddingBottom: "25px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  boxShadow: "none",
                  border: "1px solid rgba(207,206,206,1)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#b02a23", fontSize: 40, fontWeight: "700" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div
                    style={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: "600",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.filterName}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {item.options.map((option, optionIndex) => {
                    return (
                      <div
                        onClick={() => {
                          onChange(index, optionIndex);
                        }}
                        style={{
                          flexDirection: "column",
                          marginTop: 15,
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {option.selected ? (
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(186,15,23,1)",
                              }}
                            ></div>
                          ) : (
                            <div
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "7px",
                                borderWidth: "1px",
                                borderColor: "#8a8988",
                                borderStyle: "solid",
                              }}
                            ></div>
                          )}

                          <div
                            style={{
                              color: "#575653",
                              fontSize: "18px",
                              fontWeight: "500",
                              marginLeft: "10px",
                              fontFamily: "Inter",
                            }}
                          >
                            {option.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      )}
    </Observer>
  );
};
export default MMFilter;
