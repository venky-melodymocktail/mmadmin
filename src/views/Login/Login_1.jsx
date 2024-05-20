import React, { useEffect, useState } from "react";
import dl from "../../datalayer/state";
import { observer } from "mobx-react";
import Lottie from "react-lottie";

import MaterialSwitch from "../../components/main/MaterialSwitch.jsx";
import MaterialSelect from "../../components/main/MaterialSelect.jsx";
import ReactDraft from "../../components/main/ReactDraft.jsx";
import MaterialMenu from "../../components/main/MaterialMenu.jsx";
import MMPagination from "../../components/main/MMPagination.jsx";
import MMFilter from "../../components/main/MMFilter.jsx";
import MaterialDate from "../../components/main/MaterialDate.jsx";
import MaterialAutoComplete from "../../components/main/MaterialAutoComplete.jsx";
import MaterialRating from "../../components/main/MaterialRating.jsx";

const Login_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_243_2797");
      if (element) {
        element.style.transform = "scale(" + scale + ")";
        element.style.transformOrigin = "center top";
      }
      if (scale < 1) {
        element.style.marginBottom = -(1 - scale) * element.offsetHeight + "px";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial scale calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100%",
        backgroundColor: "rgba(255,255,255,1.00)",
      }}
    >
      <div
        id="t18_243_2797"
        style={{
          height: 872,
          width: 1440,
          backgroundColor: "rgba(255,255,255,1.00)",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_243_2799"
          style={{
            height: 852,
            width: 655,
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 0,
            marginRight: 5,
          }}
        >
          {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/ee9af55177e369e4d0347768ed81b56a525e3f31.png" !=
          "" ? (
            <img
              id="t18_243_2798"
              style={{
                height: 150,
                width: 314,
                display: "flex",
                borderWidth: 0,
              }}
              src={
                "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
              }
            ></img>
          ) : (
            <></>
          )}
        </div>

        <div
          id="t18_243_2836"
          style={{
            height: 852,
            width: 735,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginLeft: 5,
            marginRight: 0,
          }}
        >
          <div
            id="t18_243_2835"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <div
              id="t18_243_2834"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 15,
              }}
            >
              <div
                id="t18_460_15"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 15,
                }}
              >
                <div
                  id="t18_243_2821"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 5,
                  }}
                >
                  <div
                    id="t18_243_2820"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 15,
                    }}
                  >
                    <span
                      id="t18_243_2818"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 25,
                        fontWeight: 700,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "30.25568199157715px",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 3.5,
                      }}
                    >
                      Login
                    </span>

                    <div
                      id="t18_243_2819"
                      style={{
                        borderRadius: 3,
                        backgroundColor: "rgba(255,255,255,1.00)",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        borderWidth: 1,
                        borderColor: "rgba(112,112,112,1)",
                        borderStyle: "solid",
                        marginTop: 3.5,
                        marginBottom: 0,
                      }}
                    ></div>
                  </div>

                  <div
                    id="t18_243_2800"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 15,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_243_2801"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 25,
                        fontWeight: 600,
                        color: "rgba(113,113,113,1)",
                        letterSpacing: 0,
                        lineHeight: "30.25568199157715px",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      Welcome to Melody Mocktail
                    </span>

                    <span
                      id="t18_243_2802"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 18,
                        fontWeight: 500,
                        color: "rgba(140,146,152,1)",
                        letterSpacing: 0,
                        lineHeight: "21.784090042114258px",
                        textAlign: "left",
                        marginTop: 5,
                        marginBottom: 0,
                      }}
                    >
                      Please enter your details
                    </span>
                  </div>
                </div>

                <div
                  id="t18_460_13"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 0,
                  }}
                >
                  <span
                    id="t18_460_14"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "rgba(186,15,23,1)",
                      letterSpacing: 0,
                      lineHeight: "20.573863983154297px",
                      textAlign: "left",
                    }}
                  >
                    {dl.changes.errormessage}
                  </span>
                </div>
              </div>

              <div
                id="t18_243_2833"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 15,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_243_2827"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 12.5,
                  }}
                >
                  <span
                    id="t18_243_2826"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(0,0,0,1)",
                      letterSpacing: 0,
                      lineHeight: "18.15340805053711px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 2.5,
                    }}
                  >
                    Username
                  </span>

                  <input
                    id="t18_243_2804"
                    placeholder="Enter Email"
                    style={{
                      height: 58,
                      width: 444,
                      borderRadius: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 15,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 1,
                      borderColor: "rgba(207,206,206,1)",
                      borderStyle: "solid",
                      marginTop: 2.5,
                      marginBottom: 0,
                      cursor: "pointer",
                      itemSpacing: 13,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.userDetails.email = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_243_2828"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 12.5,
                    marginBottom: 0,
                  }}
                >
                  <span
                    id="t18_243_2829"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(0,0,0,1)",
                      letterSpacing: 0,
                      lineHeight: "18.15340805053711px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 2.5,
                    }}
                  >
                    Password
                  </span>

                  <input
                    id="t18_243_2830"
                    placeholder="Enter Password"
                    style={{
                      height: 58,
                      width: 444,
                      borderRadius: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 15,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 1,
                      borderColor: "rgba(207,206,206,1)",
                      borderStyle: "solid",
                      marginTop: 2.5,
                      marginBottom: 0,
                      cursor: "pointer",
                      itemSpacing: 13,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.userDetails.password = val;
                    }}
                    type="password"
                  ></input>
                </div>
              </div>
            </div>

            <div
              id="t18_243_2816"
              className={"mm-service1"}
              style={{
                height: 27,
                width: 142,
                backgroundColor: "rgba(186,15,23,1.00)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 15,
                marginBottom: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                const run = async () => {
                  var admindetail = {
                    email: dl.changes.userDetails.email,
                    password: dl.changes.userDetails.password,
                  };

                  if (dl.changes.userDetails.email.length < 8) {
                    dl.changes.errormessage = "invalid email";
                    return;
                  } else if (dl.changes.userDetails.password.length == "") {
                    dl.changes.errormessage = "enter password";
                    return;
                  } else {
                    var res = await dl.functions.verifyadmin(admindetail);
                    if (res.status == 200) {
                      dl.functions.common.setCookie(
                        "adminToken",
                        res.result.token,
                        60,
                      );
                      dl.functions.viewsPlugin.showView("users");
                    } else {
                      dl.changes.errormessage = "invalid email or password";
                    }
                  }
                };

                run();
              }}
            >
              <span
                id="t18_243_2817"
                style={{
                  fontFamily: "Inter",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "rgba(255,255,255,1)",
                  letterSpacing: 0,
                  lineHeight: "21.784090042114258px",
                  textAlign: "left",
                }}
              >
                Continue
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Login_1;
