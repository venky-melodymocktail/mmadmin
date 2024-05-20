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

import AdminOffRideRow from "../../components/AdminOffRideRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Offeredrides_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1130_457");
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
        id="t18_1130_457"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          paddingBottom: 10,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_1130_5"
          style={{
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_1130_6"
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
              id="t18_2093_41"
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
                  id="t18_2093_42"
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
                id="t18_2093_43"
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
              id="t18_1130_10"
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
                id="t18_1130_30"
                style={{
                  height: 872,
                  width: 1236,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 31,
                  paddingTop: 60,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginRight: 0,
                }}
              >
                <div
                  id="t18_1130_31"
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                  }}
                >
                  <div
                    id="t18_1130_32"
                    style={{
                      height: 72,
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
                      marginBottom: 26,
                    }}
                  >
                    <div
                      id="t18_1130_33"
                      style={{
                        width: 188,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        display: "flex",
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 300,
                      }}
                    >
                      <span
                        id="t18_1130_34"
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
                        Ride sharing
                      </span>
                    </div>

                    <div
                      id="t18_1130_184"
                      style={{
                        height: 44,
                        borderRadius: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 4,
                        paddingBottom: 4,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 2,
                        borderColor: "rgba(186,15,23,1)",
                        borderStyle: "solid",
                        marginLeft: 300,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1130_185"
                        style={{
                          width: 171,
                          borderRadius: 30,
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
                          marginLeft: 0,
                          marginRight: 10,
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          dl.functions.viewsPlugin.showView("wantedrides");
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                      >
                        <span
                          id="t18_1130_186"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 20,
                            fontWeight: 500,
                            color: "rgba(186,15,23,1)",
                            letterSpacing: 0,
                            lineHeight: "24.204544067382812px",
                            textAlign: "center",
                          }}
                        >
                          Wanted
                        </span>
                      </div>

                      <div
                        id="t18_1130_187"
                        style={{
                          width: 171,
                          borderRadius: 30,
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
                          marginLeft: 10,
                          marginRight: 0,
                        }}
                      >
                        <span
                          id="t18_1130_188"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 20,
                            fontWeight: 500,
                            color: "rgba(255,255,255,1)",
                            letterSpacing: 0,
                            lineHeight: "24.204544067382812px",
                            textAlign: "center",
                          }}
                        >
                          Offered
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_1130_38"
                    style={{
                      height: 46,
                      width: 1194,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      borderColor: "rgba(207,206,206,1)",
                      borderBottomWidth: 1,
                      borderStyle: "solid",
                      marginTop: 26,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_1130_39"
                      style={{
                        width: 124,
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
                        marginLeft: 0,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_40"
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
                        Title
                      </span>
                    </div>

                    <div
                      id="t18_1130_41"
                      style={{
                        width: 83,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_42"
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
                        Posted by
                      </span>
                    </div>

                    <div
                      id="t18_1130_43"
                      style={{
                        width: 104,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_44"
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
                        Last modified on
                      </span>
                    </div>

                    <div
                      id="t18_1130_45"
                      style={{
                        width: 90,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_46"
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
                        From
                      </span>
                    </div>

                    <div
                      id="t18_1130_47"
                      style={{
                        width: 87,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_48"
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
                        To
                      </span>
                    </div>

                    <div
                      id="t18_1130_49"
                      style={{
                        width: 62,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_50"
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
                        Action
                      </span>
                    </div>

                    <div
                      id="t18_1130_51"
                      style={{
                        width: 63,
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
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <span
                        id="t18_1130_52"
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
                        Status
                      </span>
                    </div>

                    <div
                      id="t18_1130_53"
                      style={{
                        width: 75,
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
                        marginLeft: 18,
                        marginRight: 0,
                      }}
                    >
                      <span
                        id="t18_1130_54"
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
                        Is promoted
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1130_55"
                  style={{
                    width: 1204,
                    backgroundColor: "rgba(255,255,255,1.00)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1131_473"
                    style={{
                      height: 535,
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
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {dl.changes.offeredRideList.map((item, index) => {
                        return (
                          <div>
                            <AdminOffRideRow
                              {...item}
                              {...dl.changes.offeredRideList}
                              onActivate={(val) => {
                                const run = async () => {
                                  var body = {
                                    id: dl.changes.offeredRideList[index],
                                    status: "active",
                                  };
                                  var res =
                                    await dl.functions.updateRideSharing(body);
                                  if (res == 200) {
                                    dl.functions.getOfferedRides(
                                      "6",
                                      dl.changes.paginationState.active,
                                    );
                                  }
                                };

                                run();
                              }}
                              onDisable={(val) => {
                                const run = async () => {
                                  var body = {
                                    id: dl.changes.offeredRideList[index],
                                    status: "inactive",
                                  };
                                  var res =
                                    await dl.functions.updateRideSharing(body);
                                  if (res == 200) {
                                    dl.functions.getOfferedRides(
                                      "6",
                                      dl.changes.paginationState.active,
                                    );
                                  }
                                };

                                run();
                              }}
                              onChangeMenu={(val) => {
                                if (val == "View More") {
                                  var rideId =
                                    dl.changes.offeredRideList[index]._id;
                                  window.open(
                                    `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/offeredride?rideId=${rideId}`,
                                    "_blank",
                                  );
                                }

                                if (val == "Edit Promotion") {
                                  dl.changes.selectedPromotion =
                                    dl.changes.offeredRideList[index];
                                  dl.changes.promotionTitle =
                                    dl.changes.offeredRideList[index].title;
                                  dl.changes.promotiondata =
                                    dl.changes.offeredRideList[index].promotion;
                                  dl.functions.modalsPlugin.openModal(
                                    "editPromotions",
                                  );
                                }
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    id="t18_1130_83"
                    style={{
                      height: 85,
                      width: 1194,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      borderTopWidth: 1,
                      marginTop: 5,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_1145_563"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        display: "flex",
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                      }}
                    >
                      <MMPagination
                        total={dl.changes.paginationState.total}
                        active={dl.changes.paginationState.active}
                        onChange={(val) => {
                          dl.changes.paginationState.active = val;
                          var page = String(val);
                          dl.functions.getOfferedRides("6", page);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Offeredrides_1;
