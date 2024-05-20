import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminVfaqRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    question: "Sample Question for testing the array",
    category: "Movies",
    cOn: "Action",
    cOnTime: "14:12",
    status: "active",
    activeVisible: "none",
    disableVisible: "flex",
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_964_22"
        style={{
          width: 1184,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          itemSpacing: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          borderColor: "rgba(207,206,206,1)",
          borderBottomWidth: 1,
          borderStyle: "solid",
          marginTop: 5,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_964_23"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 81,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_964_24"
            style={{
              width: 313,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 0,
              marginRight: 40.5,
            }}
          >
            <span
              id="t18_964_25"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(113,113,113,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "left",
              }}
            >
              {props.question}
            </span>
          </div>

          <div
            id="t18_964_26"
            style={{
              width: 136,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 40.5,
              marginRight: 40.5,
            }}
          >
            <span
              id="t18_964_27"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(113,113,113,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "center",
              }}
            >
              {props.category}
            </span>
          </div>

          <div
            id="t18_964_39"
            style={{
              height: 36,
              width: 85,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 40.5,
              marginRight: 40.5,
            }}
          >
            <span
              id="t18_964_40"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(113,113,113,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "center",
                marginTop: 0,
              }}
            >
              {props.cOn}
            </span>

            <div
              id="t18_964_41"
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                itemSpacing: 10,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginBottom: 0,
              }}
            >
              <span
                id="t18_964_42"
                style={{
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(167,167,167,1)",
                  letterSpacing: 0,
                  lineHeight: "16.94318199157715px",
                  textAlign: "center",
                }}
              >
                {props.cOnTime}
              </span>
            </div>
          </div>

          <div
            id="t18_964_30"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 40.5,
              marginRight: 40.5,
            }}
          >
            <div
              id="t18_964_31"
              style={{
                height: 10,
                width: 62,
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: props.disableVisible,
                itemSpacing: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 1,
                borderColor: "rgba(186,15,23,1)",
                borderStyle: "solid",
                marginTop: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                props.onDisable && props.onDisable(e);
              }}
            >
              <span
                id="t18_964_32"
                style={{
                  fontFamily: "Inter",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "rgba(186,15,23,1)",
                  letterSpacing: 0,
                  lineHeight: "18.15340805053711px",
                  textAlign: "left",
                }}
              >
                Disable
              </span>
            </div>

            <div
              id="t18_964_33"
              style={{
                height: 10,
                width: 60,
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: props.activeVisible,
                itemSpacing: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 1,
                borderColor: "rgba(12,174,57,1)",
                borderStyle: "solid",
                marginBottom: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                props.onActivate && props.onActivate(e);
              }}
            >
              <span
                id="t18_964_34"
                style={{
                  fontFamily: "Inter",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "rgba(12,174,57,1)",
                  letterSpacing: 0,
                  lineHeight: "18.15340805053711px",
                  textAlign: "center",
                }}
              >
                Activate
              </span>
            </div>
          </div>

          <div
            id="t18_964_35"
            style={{
              width: 63,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 40.5,
              marginRight: 40.5,
            }}
          >
            <span
              id="t18_964_36"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(113,113,113,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "center",
              }}
            >
              {props.status}
            </span>
          </div>

          <div
            id="t18_964_37"
            style={{
              height: 10,
              width: 71,
              borderRadius: 100,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              position: "relative",
              overflow: "visible",
              borderWidth: 1,
              borderColor: "rgba(186,15,23,1)",
              borderStyle: "solid",
              marginLeft: 40.5,
              marginRight: 0,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onEdit && props.onEdit(e);
            }}
          >
            <span
              id="t18_964_38"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(186,15,23,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "center",
              }}
            >
              Edit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default AdminVfaqRow;
