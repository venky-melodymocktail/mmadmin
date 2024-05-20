import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminWanRideRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    title: "New York to Atlanta",
    postedBy: "some user",
    postedOn: "date",
    from: "New York",
    to: "Atlanta",
    status: "active",
    activeVisible: "flex",
    disableVisible: "flex",
    promotionState: "True",
    promotionColor: "rgba(2, 138, 0, 0.72)",
    menuItems: ["Edit", "View More"],
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1132_475"
        style={{
          width: 1194,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          paddingLeft: 10,
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
          id="t18_1132_476"
          style={{
            width: 124,
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
            marginLeft: 0,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_477"
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
            {props.title}
          </span>
        </div>

        <div
          id="t18_1132_478"
          style={{
            width: 103,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_479"
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
            {props.postedBy}
          </span>

          <span
            id="t18_1132_480"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(182,181,181,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            {props.postedOn}
          </span>
        </div>

        <div
          id="t18_1132_481"
          style={{
            width: 104,
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
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_482"
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
            {props.postedOn}
          </span>
        </div>

        <div
          id="t18_1132_483"
          style={{
            width: 90,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_484"
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
            {props.from}
          </span>
        </div>

        <div
          id="t18_1132_485"
          style={{
            width: 87,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_486"
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
            {props.to}
          </span>
        </div>

        <div
          id="t18_1132_487"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <div
            id="t18_1132_488"
            style={{
              height: 10,
              width: 62,
              borderRadius: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: props.disableVisible,
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
              id="t18_1132_489"
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
            id="t18_1132_490"
            style={{
              height: 10,
              width: 60,
              borderRadius: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: props.activeVisible,
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
              id="t18_1132_491"
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
          id="t18_1132_492"
          style={{
            width: 63,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_493"
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

        <div
          id="t18_1132_494"
          style={{
            width: 75,
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
            marginLeft: 18,
            marginRight: 18,
          }}
        >
          <span
            id="t18_1132_495"
            style={{
              fontFamily: "Inter",
              fontSize: 15,
              fontWeight: 500,
              color: props.promotionColor,
              letterSpacing: 0,
              lineHeight: "18.15340805053711px",
              textAlign: "left",
            }}
          >
            {props.promotionState}
          </span>
        </div>

        <MaterialMenu
          options={props.menuItems}
          onChange={(val) => {
            props.onChangeMenu && props.onChangeMenu(val);
          }}
        >
          {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/AdminMenu.png" !=
          "" ? (
            <img
              id="t18_1132_496"
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                borderWidth: 0,
                marginLeft: 18,
                marginRight: 0,
                cursor: "pointer",
                height: "16px",
              }}
              onChange={() => {
                props.onChangeMenu && props.onChangeMenu();
              }}
              src={
                "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/AdminMenu.png"
              }
            ></img>
          ) : (
            <></>
          )}
        </MaterialMenu>
      </div>
    </div>
  );
});
export default AdminWanRideRow;
