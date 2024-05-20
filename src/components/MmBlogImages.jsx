import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const MmBlogImages = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = { name: "Sample", url: "url(https://placehold.co/600x400)" };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_1442_72"
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
          marginBottom: 5,
        }}
      >
        <div
          id="t18_1442_58"
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
          }}
        >
          {props.url?.slice(4, -1).trim() != "" ? (
            <img
              id="t18_1442_59"
              style={{
                height: 150,
                width: 150,
                display: "flex",
                borderWidth: 0,
                marginTop: 0,
              }}
              src={props.url?.slice(4, -1).trim()}
            ></img>
          ) : (
            <></>
          )}

          <div
            id="t18_1442_60"
            style={{
              width: 150,
              backgroundColor: "rgba(248,246,246,1)",
              flexDirection: "row",
              alignItems: "flex-start",
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
            }}
          >
            <span
              id="t18_1442_61"
              style={{
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 500,
                color: "rgba(0,0,0,1)",
                letterSpacing: 0,
                lineHeight: "14.522727012634277px",
                textAlign: "center",
              }}
            >
              {props.name}
            </span>
          </div>

          <div
            id="t18_1442_62"
            style={{
              height: 32,
              width: 140,
              backgroundColor: "rgba(248,246,246,1)",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              itemSpacing: 105,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 0,
              paddingBottom: 0,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginBottom: 0,
            }}
          >
            {"https://s3-alpha-sig.figma.com/img/287e/64b8/9b313c72660eeb5f4cee7a83c6469c0a?Expires=1687737600&Signature=DiB5CWdod-vSYEnlVfhwPTyDEWBdxK~pMld6RhScgdhbx6MxYdXv9IdjTrZPnjZrG3DSSgjBsutLwh-TUga6C6XDUbPbEz9egB90CWhQWmwHw4jbSZZ2y8w6KaNYM9XUBLCDSegH73Z-175M3-~0PM3TGvjOvV4tyrrL27ObcZzAkgRwF46YbNbSs6WhsDllHd-yVzSHDFxtHi4ARG1KwIABw1dIk-NziGTbWQoUNMwLoX2PCVHESqKDhfM3ei4u9ZIamRdPHVWIafLJQxd3NjrekWy705Bb5McTqSFssOiDl47g7AU536XJjpFnLPcTiUl2hZvXa1Y5ugxQMShy1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" !=
            "" ? (
              <img
                id="t18_1442_63"
                style={{
                  height: 17,
                  width: 14,
                  display: "flex",
                  borderWidth: 0,
                  marginLeft: 0,
                  marginRight: 52.5,
                }}
                src={
                  "https://s3-alpha-sig.figma.com/img/287e/64b8/9b313c72660eeb5f4cee7a83c6469c0a?Expires=1687737600&Signature=DiB5CWdod-vSYEnlVfhwPTyDEWBdxK~pMld6RhScgdhbx6MxYdXv9IdjTrZPnjZrG3DSSgjBsutLwh-TUga6C6XDUbPbEz9egB90CWhQWmwHw4jbSZZ2y8w6KaNYM9XUBLCDSegH73Z-175M3-~0PM3TGvjOvV4tyrrL27ObcZzAkgRwF46YbNbSs6WhsDllHd-yVzSHDFxtHi4ARG1KwIABw1dIk-NziGTbWQoUNMwLoX2PCVHESqKDhfM3ei4u9ZIamRdPHVWIafLJQxd3NjrekWy705Bb5McTqSFssOiDl47g7AU536XJjpFnLPcTiUl2hZvXa1Y5ugxQMShy1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              ></img>
            ) : (
              <></>
            )}

            <div
              id="t18_1442_64"
              style={{
                height: "22px",
                width: "22px",
                borderRadius: 30,
                backgroundColor: "rgba(186,15,23,1)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                itemSpacing: 10,
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginLeft: 52.5,
                marginRight: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                props.onClickCopy && props.onClickCopy(e);
              }}
            >
              {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/AdminCopyLink.png" !=
              "" ? (
                <img
                  id="t18_1442_65"
                  style={{
                    height: 14,
                    width: 14,
                    display: "flex",
                    borderWidth: 0,
                  }}
                  src={
                    "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/AdminCopyLink.png"
                  }
                ></img>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default MmBlogImages;
