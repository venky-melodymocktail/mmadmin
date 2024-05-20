import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const MmAdminUserRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    activeVisible: "flex",
    disableVisible: "flex",
    addressVisible: "flex",
    name: "Uma Chawla",
    phone: "+9113132424342",
    email: "abc@gmail.com",
    status: "Disabled",
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_457_64"
        style={{
          width: 1204,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          itemSpacing: 82,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 15,
          position: "relative",
          borderWidth: 0,
          borderColor: "rgba(207,206,206,1)",
          borderBottomWidth: 1,
          borderStyle: "solid",
          marginTop: 0,
          marginBottom: 10,
        }}
      >
        <div
          id="t18_457_33"
          style={{
            width: 222,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            borderWidth: 0,
            marginLeft: 0,
            marginRight: 41,
          }}
        >
          <div
            id="t18_457_118"
            style={{
              width: 222,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              borderWidth: 0,
            }}
          >
            <span
              id="t18_457_34"
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
              {props.name}
            </span>
          </div>
        </div>

        <div
          id="t18_457_120"
          style={{
            width: 193,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            borderWidth: 0,
            marginLeft: 41,
            marginRight: 41,
          }}
        >
          <span
            id="t18_457_36"
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

        <div
          id="t18_459_121"
          style={{
            width: 233,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            borderWidth: 0,
            marginLeft: 41,
            marginRight: 41,
          }}
        >
          <span
            id="t18_457_38"
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
          id="t18_457_39"
          style={{
            width: 82,
            borderRadius: 100,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 5,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            borderWidth: 0,
            marginLeft: 41,
            marginRight: 41,
          }}
        >
          <div
            id="t18_457_40"
            style={{
              height: 10,
              width: 62,
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
              borderWidth: 1,
              borderColor: "rgba(12,174,57,1)",
              borderStyle: "solid",
              marginTop: 0,
              marginBottom: 2.5,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onActivate && props.onActivate(e);
            }}
          >
            <span
              id="t18_457_41"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(12,174,57,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "left",
              }}
            >
              Activate
            </span>
          </div>

          <div
            id="t18_457_42"
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
              borderWidth: 1,
              borderColor: "rgba(186,15,23,1)",
              borderStyle: "solid",
              marginTop: 2.5,
              marginBottom: 0,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onDisable && props.onDisable(e);
            }}
          >
            <span
              id="t18_457_43"
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
        </div>

        <div
          id="t18_457_44"
          style={{
            width: 63,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 5,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            borderWidth: 0,
            marginLeft: 41,
            marginRight: 0,
          }}
        >
          <div
            id="t18_457_63"
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              borderWidth: 0,
            }}
          >
            <span
              id="t18_457_45"
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
              {props.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default MmAdminUserRow;
