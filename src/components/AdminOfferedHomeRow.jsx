import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminOfferedHomeRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    title: "just for testing",
    postedBy: "shivam",
    cOn: "2 feburary 2023",
    lastModified: "3 feburary 2023",
    availableFrom: "4 feburary 2023",
    status: "active",
    activeVisible: "flex",
    disableVisible: "flex",
    promotionStatusTrueVisible: "flex",
    promotionStatusFalseVisible: "none",
    menuItems: ["Edit", "View More"],
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1330_357"
        style={{
          width: 1184,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 35,
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
          marginBottom: 5,
        }}
      >
        <div
          id="t18_1330_358"
          style={{
            width: 238,
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
            marginRight: 17.5,
          }}
        >
          <span
            id="t18_1330_359"
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
            {props.title}
          </span>
        </div>

        <div
          id="t18_1330_360"
          style={{
            width: 181,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 2,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <span
            id="t18_1330_361"
            style={{
              fontFamily: "Inter",
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "18.15340805053711px",
              textAlign: "center",
              marginTop: 0,
              marginBottom: 1,
            }}
          >
            {props.postedBy}
          </span>

          <span
            id="t18_1330_362"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(182,181,181,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 1,
              marginBottom: 0,
            }}
          >
            {props.cOn}
          </span>
        </div>

        <div
          id="t18_1330_363"
          style={{
            width: 108,
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
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <span
            id="t18_1330_364"
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
            {props.lastModified}
          </span>
        </div>

        <div
          id="t18_1330_365"
          style={{
            width: 108,
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
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <span
            id="t18_1330_366"
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
            {props.availableFrom}
          </span>
        </div>

        <div
          id="t18_1330_367"
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
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <div
            id="t18_1330_368"
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
              id="t18_1330_369"
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
            id="t18_1330_370"
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
              id="t18_1330_371"
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
          id="t18_1330_372"
          style={{
            width: 83,
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
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <span
            id="t18_1330_373"
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
          id="t18_1330_374"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 17.5,
            marginRight: 17.5,
          }}
        >
          <div
            id="t18_1330_375"
            style={{
              width: 95,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: props.promotionStatusTrueVisible,
              itemSpacing: 10,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
            }}
          >
            <span
              id="t18_1330_376"
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
              True
            </span>
          </div>

          <div
            id="t18_1330_377"
            style={{
              width: 95,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: props.promotionStatusFalseVisible,
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
              id="t18_1330_378"
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
              False
            </span>
          </div>
        </div>

        <div
          id="t18_1330_379"
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
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 17.5,
            marginRight: 0,
          }}
        >
          <MaterialMenu
            options={props.menuItems}
            onChange={(val) => {
              props.onChangeMenu && props.onChangeMenu(val);
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/menu.png" !=
            "" ? (
              <img
                id="t18_1330_380"
                style={{
                  height: 16,
                  width: 4,
                  display: "flex",
                  borderWidth: 0,
                  cursor: "pointer",
                }}
                onChange={() => {
                  props.onChangeMenu && props.onChangeMenu();
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/menu.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </MaterialMenu>
        </div>
      </div>
    </div>
  );
});
export default AdminOfferedHomeRow;
