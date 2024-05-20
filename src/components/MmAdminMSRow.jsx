import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const MmAdminMSRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    title: "Sample title",
    category: "Movies",
    genre: "Action",
    language: "hindi",
    status: "active",
    activeVisible: "flex",
    disableVisible: "flex",
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_494_428"
        style={{
          width: 1188,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 80,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          position: "relative",
          borderWidth: 0,
          borderColor: "rgba(207,206,206,1)",
          borderBottomWidth: 1,
          borderStyle: "solid",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_494_429"
          style={{
            width: 144,
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
            borderWidth: 0,
            marginLeft: 0,
            marginRight: 40,
          }}
        >
          <span
            id="t18_494_430"
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
          id="t18_494_431"
          style={{
            width: 52,
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
            borderWidth: 0,
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <span
            id="t18_494_432"
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
          id="t18_494_433"
          style={{
            width: 51,
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
            borderWidth: 0,
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <span
            id="t18_494_434"
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
            {props.genre}
          </span>
        </div>

        <div
          id="t18_494_435"
          style={{
            width: 52,
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
            borderWidth: 0,
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <span
            id="t18_494_436"
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
            {props.language}
          </span>
        </div>

        <div
          id="t18_494_460"
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
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <div
            id="t18_494_458"
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
              marginTop: 0,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onDisable && props.onDisable(e);
            }}
          >
            <span
              id="t18_494_459"
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
            id="t18_494_437"
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
              id="t18_494_438"
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
          id="t18_494_439"
          style={{
            width: 63,
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
            borderWidth: 0,
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <span
            id="t18_494_440"
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
          id="t18_494_441"
          style={{
            height: 10,
            width: 65,
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
            borderWidth: 1,
            borderColor: "rgba(186,15,23,1)",
            borderStyle: "solid",
            marginLeft: 40,
            marginRight: 0,
            cursor: "pointer",
          }}
          onClick={(e) => {
            props.onEdit && props.onEdit(e);
          }}
        >
          <span
            id="t18_494_442"
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
            Edit
          </span>
        </div>
      </div>
    </div>
  );
});
export default MmAdminMSRow;
