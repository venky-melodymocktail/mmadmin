import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const MmAdminBlogRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    blogType: "Travel & Adventure",
    title: "just for testing",
    pinned: "false",
    status: "active",
    mOn: "3rd june 2023",
    activeVisible: "flex",
    disableVisible: "flex",
    pinVisible: "flex",
    unpinVisible: "flex",
    menuItems: ["Edit", "View More"],
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_493_337"
        style={{
          height: 59,
          width: 1184,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 70,
          paddingLeft: 20,
          paddingRight: 0,
          paddingTop: 20,
          paddingBottom: 20,
          position: "relative",
          borderWidth: 0,
          borderColor: "rgba(207,206,206,1)",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderStyle: "solid",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_493_338"
          style={{
            width: 221,
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
            borderWidth: 0,
            marginLeft: 0,
            marginRight: 35,
          }}
        >
          <span
            id="t18_493_339"
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
          id="t18_493_340"
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <span
            id="t18_493_341"
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
            {props.blogType}
          </span>
        </div>

        <div
          id="t18_493_342"
          style={{
            width: 85,
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <span
            id="t18_493_343"
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
          id="t18_493_375"
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <div
            id="t18_493_344"
            style={{
              height: 10,
              width: 62,
              borderRadius: 100,
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
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onActivate && props.onActivate(e);
            }}
          >
            <span
              id="t18_493_345"
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
            id="t18_493_373"
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
              marginBottom: 0,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onDisable && props.onDisable(e);
            }}
          >
            <span
              id="t18_493_374"
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
          id="t18_493_346"
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <span
            id="t18_493_347"
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
          id="t18_497_634"
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <div
            id="t18_493_348"
            style={{
              width: 20,
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
              borderWidth: 0,
              marginTop: 0,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/pin.png" !=
            "" ? (
              <img
                id="t18_493_349"
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 0,
                  display: props.pinVisible,
                  borderWidth: 0,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  props.onUnpin && props.onUnpin(e);
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/pin.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/unpin.png" !=
          "" ? (
            <img
              id="t18_497_633"
              style={{
                height: 20,
                width: 20,
                borderRadius: 0,
                display: props.unpinVisible,
                borderWidth: 0,
                marginBottom: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                props.onPin && props.onPin(e);
              }}
              src={
                "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/unpin.png"
              }
            ></img>
          ) : (
            <></>
          )}
        </div>

        <div
          id="t18_493_350"
          style={{
            width: 57,
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
            borderWidth: 0,
            marginLeft: 35,
            marginRight: 35,
          }}
        >
          <span
            id="t18_493_351"
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
            {props.pinned}
          </span>
        </div>

        <MaterialMenu
          options={props.menuItems}
          onChange={(val) => {
            props.onChangeMenu && props.onChangeMenu(val);
          }}
        >
          {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/menu.png" !=
          "" ? (
            <img
              id="t18_493_352"
              style={{
                height: 16,
                width: 4,
                borderRadius: 0,
                display: "flex",
                borderWidth: 0,
                marginLeft: 35,
                marginRight: 0,
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
  );
});
export default MmAdminBlogRow;
