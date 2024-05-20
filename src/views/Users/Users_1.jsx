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

import MmAdminUserRow from "../../components/MmAdminUserRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Users_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_243_3488");
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
        backgroundColor: "#fff",
      }}
    >
      <div
        id="t18_243_3488"
        style={{
          width: 1440,
          flexDirection: "column",
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
          id="t18_243_3487"
          style={{
            height: 78,
            width: 1402,
            backgroundColor: "rgba(255,255,255,1.00)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 38,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 0,
          }}
        >
          {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/ee9af55177e369e4d0347768ed81b56a525e3f31.png" !=
          "" ? (
            <img
              id="t18_243_3485"
              style={{
                height: 40,
                width: 84,
                display: "flex",
                borderWidth: 0,
                marginLeft: 0,
                marginRight: 22.5,
              }}
              src={
                "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
              }
            ></img>
          ) : (
            <></>
          )}

          <span
            id="t18_243_3486"
            style={{
              fontFamily: "Inter",
              fontSize: 20,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "24.204544067382812px",
              textAlign: "left",
              marginLeft: 22.5,
              marginRight: 0,
            }}
          >
            Admin dashboard
          </span>
        </div>

        <div
          id="t18_493_286"
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginBottom: 0,
          }}
        >
          <AdminServiceSelector {...dl.changes.serviceSelector} />

          <div
            id="t18_493_239"
            style={{
              height: "800px",
              width: 1245,
              backgroundColor: "rgba(248,246,246,1.00)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 60,
              paddingBottom: 60,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginRight: 0,
            }}
          >
            <div
              id="t18_493_240"
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
              }}
            >
              <div
                id="t18_493_241"
                style={{
                  height: 36,
                  width: 1201,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingBottom: 22,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  borderColor: "rgba(207,206,206,1)",
                  borderBottomWidth: 1,
                  borderStyle: "solid",
                  marginTop: 0,
                  marginBottom: 26,
                }}
              >
                <span
                  id="t18_493_242"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 30,
                    fontWeight: 500,
                    color: "rgba(113,113,113,1)",
                    letterSpacing: 0,
                    lineHeight: "36.30681610107422px",
                    textAlign: "left",
                  }}
                >
                  Users
                </span>
              </div>

              <div
                id="t18_493_243"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 26,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_493_244"
                  style={{
                    height: 32,
                    width: 1204,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    borderColor: "rgba(207,206,206,1)",
                    borderBottomWidth: 1,
                    borderStyle: "solid",
                    marginTop: 0,
                  }}
                >
                  <div
                    id="t18_493_245"
                    style={{
                      width: 222,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_246"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgba(167,167,167,1)",
                        letterSpacing: 0,
                        lineHeight: "15.732954025268555px",
                        textAlign: "left",
                      }}
                    >
                      Name
                    </span>
                  </div>

                  <div
                    id="t18_493_247"
                    style={{
                      width: 193,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_248"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgba(167,167,167,1)",
                        letterSpacing: 0,
                        lineHeight: "15.732954025268555px",
                        textAlign: "left",
                      }}
                    >
                      Phone
                    </span>
                  </div>

                  <div
                    id="t18_493_249"
                    style={{
                      width: 233,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_250"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgba(167,167,167,1)",
                        letterSpacing: 0,
                        lineHeight: "15.732954025268555px",
                        textAlign: "center",
                      }}
                    >
                      Email
                    </span>
                  </div>

                  <div
                    id="t18_493_251"
                    style={{
                      width: 82,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_252"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgba(167,167,167,1)",
                        letterSpacing: 0,
                        lineHeight: "15.732954025268555px",
                        textAlign: "left",
                      }}
                    >
                      Action
                    </span>
                  </div>

                  <div
                    id="t18_493_253"
                    style={{
                      width: 63,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 0,
                    }}
                  >
                    <span
                      id="t18_493_254"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "rgba(167,167,167,1)",
                        letterSpacing: 0,
                        lineHeight: "15.732954025268555px",
                        textAlign: "left",
                      }}
                    >
                      Status
                    </span>
                  </div>
                </div>

                <div
                  id="t18_493_255"
                  style={{
                    height: 607,
                    width: 1204,
                    backgroundColor: "rgba(255,255,255,1.00)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_493_256"
                    style={{
                      height: 520,
                      width: 1204,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 13.5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {dl.changes.data.map((item, index) => {
                        return (
                          <div>
                            <MmAdminUserRow
                              {...item}
                              {...dl.changes.data}
                              onActivate={(val) => {
                                // alert(JSON.stringify(dl.changes.data[index]))

                                const run = async () => {
                                  var userInfo = dl.changes.data[index];
                                  var updates = {
                                    uid: userInfo._id,
                                    status: "active",
                                  };
                                  var res =
                                    await dl.functions.updateUser(updates);
                                  if (res == 200) {
                                    dl.functions.getUsers(
                                      "9",
                                      dl.changes.paginationState.active,
                                    );
                                    // var currentPath = dl.functions.common.getLastPath()
                                    // dl.functions.onLoadFunctions[currentPath]()
                                  }
                                  // alert(res)
                                };

                                run();
                              }}
                              onDisable={(val) => {
                                // alert(JSON.stringify(dl.changes.data[index]))

                                const run = async () => {
                                  var userInfo = dl.changes.data[index];
                                  var updates = {
                                    uid: userInfo._id,
                                    status: "inactive",
                                  };
                                  var res =
                                    await dl.functions.updateUser(updates);
                                  if (res == 200) {
                                    dl.functions.getUsers(
                                      "9",
                                      dl.changes.paginationState.active,
                                    );

                                    // var currentPath = dl.functions.common.getLastPath()
                                    // dl.functions.onLoadFunctions[currentPath]()
                                  }
                                  // alert(res)
                                };

                                run();
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <MMPagination
                    total={dl.changes.paginationState.total}
                    active={dl.changes.paginationState.active}
                    onChange={(val) => {
                      dl.changes.paginationState.active = val;
                      var page = String(val);
                      dl.functions.getUsers("9", page);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Users_1;
