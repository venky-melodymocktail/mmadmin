import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminVquestionRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    question: "Sample title",
    category: "Movies",
    cOn: "Action",
    cOnTime: "14:12",
    status: "active",
    activeVisible: "flex",
    disableVisible: "flex",
    menuItems: ["Edit", "View More"],
    answered: true,
    answer: "",
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_963_3"
        style={{
          width: 1162,
          backgroundColor:
            props.answer.length > 1 ? "rgba(255,255,255,1)" : "#fae3e3",
          flexDirection: "row",
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
          id="t18_963_4"
          style={{
            width: 1138,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 70,
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
            id="t18_963_5"
            style={{
              width: 363,
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
              marginRight: 35,
            }}
          >
            <span
              id="t18_963_6"
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
            onClick={() => {
              dl.changes.visaQuestionAnswerModalvals = props;
              dl.functions.modalsPlugin.openModal("VisaQuestionAnswerModal");
            }}
            style={{
              width: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: props.answered
                ? "rgb(13, 130, 17)"
                : "rgb(186, 15, 23)",
              height: 30,
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {props.answered ? "Yes" : "No"}
            </div>
          </div>

          <div
            id="t18_963_7"
            style={{
              height: 18,
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <span
              id="t18_963_8"
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
            id="t18_963_9"
            style={{
              height: 36,
              width: 81,
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <span
              id="t18_963_10"
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
              id="t18_963_11"
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
                id="t18_963_12"
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
            id="t18_963_13"
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <div
              id="t18_963_14"
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
                id="t18_963_15"
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
              id="t18_963_16"
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
                id="t18_963_17"
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
            id="t18_963_18"
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
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <span
              id="t18_963_19"
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
            id="t18_963_20"
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
              marginLeft: 35,
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
                  id="t18_963_21"
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
    </div>
  );
});
export default AdminVquestionRow;
