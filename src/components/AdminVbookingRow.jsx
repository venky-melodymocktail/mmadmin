import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminVbookingRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {};
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_966_60"
        style={{
          width: 1203,
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
          borderColor: "rgba(207,206,206,1)",
          borderBottomWidth: 1,
          borderStyle: "solid",
          marginTop: 5,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_966_61"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 60,
            paddingLeft: 20,
            paddingRight: 0,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 0,
            marginRight: 35,
          }}
        >
          <div
            id="t18_966_62"
            style={{
              width: 163,
              flexDirection: "row",
              alignItems: "flex-start",
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
              marginLeft: 0,
              marginRight: 30,
            }}
          >
            <span
              id="t18_966_63"
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
              Praveen Singh
            </span>
          </div>

          <div
            id="t18_966_64"
            style={{
              width: 224,
              flexDirection: "row",
              alignItems: "flex-start",
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <span
              id="t18_966_65"
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
              praveensingh432gmail.com
            </span>
          </div>

          <div
            id="t18_966_66"
            style={{
              width: 76,
              flexDirection: "column",
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <div
              id="t18_966_67"
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
                id="t18_966_68"
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
                10.03.23
              </span>

              <span
                id="t18_966_69"
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
                6PM -7PM
              </span>
            </div>
          </div>

          <div
            id="t18_966_70"
            style={{
              width: 73,
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
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <span
              id="t18_966_71"
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
              Group
            </span>
          </div>

          <div
            id="t18_966_72"
            style={{
              width: 193,
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
              marginLeft: 30,
              marginRight: 0,
            }}
          >
            <span
              id="t18_966_73"
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
              Maitreya Bobde
            </span>
          </div>
        </div>

        {"https://s3-alpha-sig.figma.com/img/e3c1/c0d0/ae76a122a29de577a46527b2cb8c2d32?Expires=1684713600&Signature=Kw77OxQuvg1sdE1y~2Dk7QUdd3vXJikrk1hPbhEWwrH6RP9vzOeXHSJhBPXz7K8~FDphWKSmuoFHTBNCAw~I06-8zdmj8zepV0hjPnWNI2W2mG6kYUrI1P8NdRcRljAhC6cbOfyuiJmjupfd0X4U1sy-oaT0gJ0tgKdU7eWOLJAfayDWWwMv3cFJujr0aKzGg1v6JgEMYgS3Lp4rld3SJXsPlpYVMuo5Kp6ENtd28MQftQn8PPkzRpyF45hFarMATPwv~2xuM0A9zSx~eHKdFHOD7ytSlM1pxrHYQV2DWZle8~w3Z3qT66gaLXw0TtyyYsij1NjQgSFKZ5xnltWOgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" !=
        "" ? (
          <img
            id="t18_966_74"
            style={{
              height: 16,
              width: 4,
              display: "flex",
              borderWidth: 0,
              marginLeft: 35,
              marginRight: 0,
            }}
            src={
              "https://s3-alpha-sig.figma.com/img/e3c1/c0d0/ae76a122a29de577a46527b2cb8c2d32?Expires=1684713600&Signature=Kw77OxQuvg1sdE1y~2Dk7QUdd3vXJikrk1hPbhEWwrH6RP9vzOeXHSJhBPXz7K8~FDphWKSmuoFHTBNCAw~I06-8zdmj8zepV0hjPnWNI2W2mG6kYUrI1P8NdRcRljAhC6cbOfyuiJmjupfd0X4U1sy-oaT0gJ0tgKdU7eWOLJAfayDWWwMv3cFJujr0aKzGg1v6JgEMYgS3Lp4rld3SJXsPlpYVMuo5Kp6ENtd28MQftQn8PPkzRpyF45hFarMATPwv~2xuM0A9zSx~eHKdFHOD7ytSlM1pxrHYQV2DWZle8~w3Z3qT66gaLXw0TtyyYsij1NjQgSFKZ5xnltWOgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
          ></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
});
export default AdminVbookingRow;
