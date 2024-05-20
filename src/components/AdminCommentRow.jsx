import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminCommentRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    comment: "Sample comment",
    name: "shivam kumar",
    cOn: "5th july 2023",
    cOnTime: "18:00",
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
        id="t18_965_43"
        style={{
          width: 1164,
          backgroundColor: "rgba(248,246,246,1)",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          itemSpacing: 10,
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
          marginBottom: 5,
        }}
      >
        <div
          id="t18_965_44"
          style={{
            width: 1204,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 76,
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
            id="t18_965_45"
            style={{
              width: 402,
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
              overflow: "visible",
              borderWidth: 0,
              marginLeft: 0,
              marginRight: 38,
            }}
          >
            <span
              id="t18_965_46"
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
              {props.comment}
            </span>
          </div>

          <div
            id="t18_965_47"
            style={{
              width: 167,
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
              borderWidth: 0,
              marginLeft: 38,
              marginRight: 38,
            }}
          >
            <span
              id="t18_965_48"
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
            id="t18_965_49"
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
              marginLeft: 38,
              marginRight: 38,
            }}
          >
            <span
              id="t18_965_50"
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
              id="t18_965_51"
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
                id="t18_965_52"
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
            id="t18_965_53"
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
              marginLeft: 38,
              marginRight: 38,
            }}
          >
            <div
              id="t18_965_54"
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
                id="t18_965_55"
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
              id="t18_965_56"
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
                id="t18_965_57"
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
            id="t18_965_58"
            style={{
              width: 43,
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
              borderWidth: 0,
              marginLeft: 38,
              marginRight: 0,
            }}
          >
            <span
              id="t18_965_59"
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
        </div>
      </div>
    </div>
  );
});
export default AdminCommentRow;
