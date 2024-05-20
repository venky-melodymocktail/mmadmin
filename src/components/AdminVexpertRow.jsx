import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminVexpertRow = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {};
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_966_75"
        style={{
          width: 1164,
          backgroundColor: "rgba(255,255,255,1)",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 66,
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
          id="t18_966_76"
          style={{
            width: 160,
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
            marginLeft: 0,
            marginRight: 33,
          }}
        >
          <span
            id="t18_966_77"
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
          id="t18_966_78"
          style={{
            width: 216,
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
            marginLeft: 33,
            marginRight: 33,
          }}
        >
          <span
            id="t18_966_79"
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
          id="t18_966_80"
          style={{
            width: 123,
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
            marginLeft: 33,
            marginRight: 33,
          }}
        >
          <span
            id="t18_966_81"
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
            +01 5567777890
          </span>
        </div>

        <div
          id="t18_966_82"
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
            marginLeft: 33,
            marginRight: 33,
          }}
        >
          <div
            id="t18_966_83"
            style={{
              height: 10,
              width: 62,
              borderRadius: 30,
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
              borderWidth: 1,
              borderColor: "rgba(186,15,23,1)",
              borderStyle: "solid",
              marginTop: 0,
            }}
          >
            <span
              id="t18_966_84"
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
            id="t18_966_85"
            style={{
              height: 10,
              width: 60,
              borderRadius: 30,
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
              borderWidth: 1,
              borderColor: "rgba(12,174,57,1)",
              borderStyle: "solid",
              marginBottom: 0,
            }}
          >
            <span
              id="t18_966_86"
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
          id="t18_966_87"
          style={{
            width: 63,
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
            marginLeft: 33,
            marginRight: 33,
          }}
        >
          <span
            id="t18_966_88"
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
            Disabled
          </span>
        </div>

        <div
          id="t18_966_89"
          style={{
            height: 10,
            width: 71,
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
            overflow: "visible",
            borderWidth: 1,
            borderColor: "rgba(186,15,23,1)",
            borderStyle: "solid",
            marginLeft: 33,
            marginRight: 0,
          }}
        >
          <span
            id="t18_966_90"
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
            Edit
          </span>
        </div>
      </div>
    </div>
  );
});
export default AdminVexpertRow;
