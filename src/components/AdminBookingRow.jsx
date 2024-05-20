import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminBookingRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    name: "john Doe",
    email: "john@gmail.com",
    type: "single",
    slot: "7pm-8pm",
    date: "6th july 2023",
    expertName: "michel smith",
    menuItems: ["Booking Details", "Reassign Expert"],
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1446_246"
        style={{
          width: 1204,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          itemSpacing: 40,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 15,
          paddingBottom: 15,
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
          id="t18_1446_247"
          style={{
            width: 250,
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
            marginRight: 20,
          }}
        >
          <span
            id="t18_1446_248"
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
          id="t18_1446_249"
          style={{
            width: 248,
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
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <span
            id="t18_1446_250"
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
          id="t18_1446_251"
          style={{
            width: 76,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <div
            id="t18_1446_252"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <span
              id="t18_1446_253"
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
              {props.date}
            </span>

            <span
              id="t18_1446_254"
              style={{
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(167,167,167,1)",
                letterSpacing: 0,
                lineHeight: "16.94318199157715px",
                textAlign: "center",
                marginBottom: 0,
              }}
            >
              {props.slot}
            </span>
          </div>
        </div>

        <div
          id="t18_1446_255"
          style={{
            width: 61,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <span
            id="t18_1446_256"
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
            {props.type}
          </span>
        </div>

        <div
          id="t18_1446_257"
          style={{
            width: 250,
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
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <span
            id="t18_1446_258"
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
            {props.expertName}
          </span>
        </div>

        <div
          id="t18_1446_259"
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 0,
            paddingBottom: 0,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 20,
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
                id="t18_1446_260"
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
export default AdminBookingRow;
