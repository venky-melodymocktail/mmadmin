import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminReportRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    resonOfReporting: "Reason Of Reporting the",
    name: "shivam kumar",
    cOn: "5th july 2023",
    cOnTime: "18:00",
    email: "shivam@gmail.com",
    phone: "+918825311436",
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1957_32"
        style={{
          width: 1164,
          backgroundColor: "rgba(248,246,246,1.00)",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          paddingLeft: 20,
          paddingRight: 20,
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
          id="t18_1957_33"
          style={{
            width: 1204,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_1957_34"
            style={{
              width: 402,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 0,
              marginRight: 20,
            }}
          >
            <span
              id="t18_1957_35"
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
              {props.resonOfReporting}
            </span>
          </div>

          <div
            id="t18_1957_36"
            style={{
              width: 167,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <span
              id="t18_1957_37"
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
              {props.name}
            </span>
          </div>

          <div
            id="t18_1957_38"
            style={{
              height: 36,
              width: 85,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <span
              id="t18_1957_39"
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
              id="t18_1957_40"
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginBottom: 0,
              }}
            >
              <span
                id="t18_1957_41"
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
            id="t18_1957_42"
            style={{
              width: 200,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <span
              id="t18_1957_43"
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
              {props.email}
            </span>
          </div>

          <div
            id="t18_1957_44"
            style={{
              width: 90,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 20,
              marginRight: 0,
            }}
          >
            <span
              id="t18_1957_45"
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
              {props.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default AdminReportRow;
