import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const MmBlogCategories = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = { category: "Fashion" };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1442_73"
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          itemSpacing: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 0,
          paddingBottom: 10,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          marginTop: 5,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_1442_66"
          style={{
            borderRadius: 6,
            backgroundColor: "rgba(248,246,246,1)",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            itemSpacing: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_1442_67"
            style={{
              height: 140,
              width: 140,
              borderRadius: 6,
              backgroundColor: "rgba(255,255,255,1)",
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
              marginTop: 0,
              marginBottom: 5,
            }}
          >
            <span
              id="t18_1442_68"
              style={{
                fontFamily: "Inter",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(0,0,0,1)",
                letterSpacing: 0,
                lineHeight: "18.15340805053711px",
                textAlign: "center",
              }}
            >
              {props.category}
            </span>
          </div>

          <div
            id="t18_1442_69"
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              itemSpacing: 5,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 5,
              marginBottom: 0,
              cursor: "pointer",
            }}
            onClick={(e) => {
              props.onDelete && props.onDelete(e);
            }}
          >
            {"https://s3-alpha-sig.figma.com/img/287e/64b8/9b313c72660eeb5f4cee7a83c6469c0a?Expires=1687737600&Signature=DiB5CWdod-vSYEnlVfhwPTyDEWBdxK~pMld6RhScgdhbx6MxYdXv9IdjTrZPnjZrG3DSSgjBsutLwh-TUga6C6XDUbPbEz9egB90CWhQWmwHw4jbSZZ2y8w6KaNYM9XUBLCDSegH73Z-175M3-~0PM3TGvjOvV4tyrrL27ObcZzAkgRwF46YbNbSs6WhsDllHd-yVzSHDFxtHi4ARG1KwIABw1dIk-NziGTbWQoUNMwLoX2PCVHESqKDhfM3ei4u9ZIamRdPHVWIafLJQxd3NjrekWy705Bb5McTqSFssOiDl47g7AU536XJjpFnLPcTiUl2hZvXa1Y5ugxQMShy1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" !=
            "" ? (
              <img
                id="t18_1442_70"
                style={{
                  height: 15,
                  width: 12,
                  display: "flex",
                  borderWidth: 0,
                  marginLeft: 0,
                  marginRight: 2.5,
                }}
                src={
                  "https://s3-alpha-sig.figma.com/img/287e/64b8/9b313c72660eeb5f4cee7a83c6469c0a?Expires=1687737600&Signature=DiB5CWdod-vSYEnlVfhwPTyDEWBdxK~pMld6RhScgdhbx6MxYdXv9IdjTrZPnjZrG3DSSgjBsutLwh-TUga6C6XDUbPbEz9egB90CWhQWmwHw4jbSZZ2y8w6KaNYM9XUBLCDSegH73Z-175M3-~0PM3TGvjOvV4tyrrL27ObcZzAkgRwF46YbNbSs6WhsDllHd-yVzSHDFxtHi4ARG1KwIABw1dIk-NziGTbWQoUNMwLoX2PCVHESqKDhfM3ei4u9ZIamRdPHVWIafLJQxd3NjrekWy705Bb5McTqSFssOiDl47g7AU536XJjpFnLPcTiUl2hZvXa1Y5ugxQMShy1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              ></img>
            ) : (
              <></>
            )}

            <span
              id="t18_1442_71"
              style={{
                fontFamily: "Inter",
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(186,15,23,1)",
                letterSpacing: 0,
                lineHeight: "15.732954025268555px",
                textAlign: "left",
                marginLeft: 2.5,
                marginRight: 0,
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default MmBlogCategories;
