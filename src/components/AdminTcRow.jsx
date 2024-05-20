import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminTcRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    name: "john doe",
    cOn: "on 2 july 2023",
    mOn: "2.07.2023",
    from: "Jamaica, NY",
    to: "Jamaica, NY",
    status: "active",
    promotionColor: "rgba(158, 1, 0, 0.72)",
    promotionStatus: "True",
    disableVisible: "flex",
    activeteisible: "flex",
    menuItems: ["Edit Promotion", "View More"],
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1559_147"
        style={{
          width: 1194,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 20,
          paddingLeft: 10,
          paddingRight: 0,
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
          id="t18_1559_148"
          style={{
            width: 210,
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
            marginLeft: 0,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_149"
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
            {props.name}
          </span>

          <span
            id="t18_1559_150"
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
            {props.cOn}
          </span>
        </div>

        <div
          id="t18_1559_151"
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_152"
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
            {props.mOn}
          </span>
        </div>

        <div
          id="t18_1559_153"
          style={{
            width: 220,
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_154"
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
          id="t18_1559_155"
          style={{
            width: 220,
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_156"
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
          id="t18_1559_157"
          style={{
            width: 82,
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <div
            id="t18_1559_158"
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
              props.onClickDisable && props.onClickDisable(e);
            }}
          >
            <span
              id="t18_1559_159"
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
            id="t18_1559_160"
            style={{
              height: 10,
              width: 60,
              borderRadius: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: props.activeteisible,
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
              props.onClickActivate && props.onClickActivate(e);
            }}
          >
            <span
              id="t18_1559_161"
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
          id="t18_1559_162"
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_163"
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
          id="t18_1559_164"
          style={{
            width: 82,
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
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <span
            id="t18_1559_165"
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
            {props.promotionStatus}
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
              id="t18_1559_166"
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                itemSpacing: 10,
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                borderWidth: 0,
                marginLeft: 10,
                marginRight: 0,
                cursor: "pointer",
                height: "18px",
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
export default AdminTcRow;
