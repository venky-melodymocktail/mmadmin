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

import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";
import AdminBookingRow from "../../components/AdminBookingRow.jsx";

const Visabookings_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_957_28");
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
        id="t18_957_28"
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
          id="t18_950_1034"
          style={{
            backgroundColor: "rgba(248,246,246,1.00)",
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
            id="t18_950_1035"
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
              id="t18_2093_26"
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
                  id="t18_2093_27"
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
                id="t18_2093_28"
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
              id="t18_950_1039"
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
                id="t18_950_1068"
                style={{
                  height: "800px",
                  width: 1267,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: 60,
                  paddingBottom: 60,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginRight: 0,
                }}
              >
                <div
                  id="t18_950_1069"
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 2,
                  }}
                >
                  <div
                    id="t18_950_1070"
                    style={{
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingBottom: 12,
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
                      id="t18_950_1071"
                      style={{
                        width: 268,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 75,
                      }}
                    >
                      <span
                        id="t18_950_1072"
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
                        Visa & Immigration
                      </span>
                    </div>

                    <div
                      id="t18_950_1073"
                      style={{
                        height: 52,
                        width: 755,
                        borderRadius: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 2,
                        borderColor: "rgba(186,15,23,1)",
                        borderStyle: "solid",
                        marginLeft: 75,
                        marginRight: 0,
                      }}
                    >
                      <span
                        id="t18_950_1074"
                        onClick={() => {
                          dl.functions.viewsPlugin.showView("visafaq");
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                        style={{
                          fontFamily: "Inter",
                          fontSize: 20,
                          fontWeight: 500,
                          color: "rgba(197,18,29,1)",
                          letterSpacing: 0,
                          lineHeight: "24.204544067382812px",
                          textAlign: "center",
                          marginLeft: 0,
                          marginRight: 35.5,
                          cursor: "pointer",
                        }}
                      >
                        FAQ’s
                      </span>

                      <span
                        id="t18_950_1075"
                        onClick={() => {
                          dl.functions.viewsPlugin.showView("visaquestions");
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                        style={{
                          fontFamily: "Inter",
                          fontSize: 20,
                          fontWeight: 500,
                          color: "rgba(197,18,29,1)",
                          letterSpacing: 0,
                          lineHeight: "24.204544067382812px",
                          textAlign: "center",
                          marginLeft: 35.5,
                          marginRight: 35.5,
                          cursor: "pointer",
                        }}
                      >
                        Questions
                      </span>

                      <div
                        id="t18_950_1076"
                        style={{
                          width: 186,
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
                          marginLeft: 35.5,
                          marginRight: 35.5,
                        }}
                      >
                        <span
                          id="t18_950_1077"
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
                          Bookings
                        </span>
                      </div>

                      <span
                        id="t18_950_1078"
                        onClick={() => {
                          dl.functions.viewsPlugin.showView("visaexperts");
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                        style={{
                          fontFamily: "Inter",
                          fontSize: 20,
                          fontWeight: 500,
                          color: "rgba(186,15,23,1)",
                          letterSpacing: 0,
                          lineHeight: "24.204544067382812px",
                          textAlign: "center",
                          marginLeft: 35.5,
                          marginRight: 0,
                          cursor: "pointer",
                        }}
                      >
                        Experts
                      </span>
                    </div>
                  </div>

                  <div
                    id="t18_950_1079"
                    style={{
                      width: 1204,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 26,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_950_1080"
                      style={{
                        width: 1204,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                      }}
                    >
                      <div
                        id="t18_950_1081"
                        style={{
                          width: 250,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 20,
                        }}
                      >
                        <span
                          id="t18_950_1082"
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
                          User name
                        </span>
                      </div>

                      <div
                        id="t18_950_1083"
                        style={{
                          width: 248,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                      >
                        <span
                          id="t18_950_1084"
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
                          Email
                        </span>
                      </div>

                      <div
                        id="t18_950_1085"
                        style={{
                          width: 96,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                      >
                        <span
                          id="t18_950_1086"
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
                          Date
                        </span>
                      </div>

                      <div
                        id="t18_950_1087"
                        style={{
                          width: 93,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                      >
                        <span
                          id="t18_950_1088"
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
                          Session type
                        </span>
                      </div>

                      <div
                        id="t18_950_1089"
                        style={{
                          width: 250,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                      >
                        <span
                          id="t18_950_1090"
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
                          Expert name
                        </span>
                      </div>

                      <div
                        id="t18_1123_906"
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingLeft: 10,
                          paddingRight: 10,
                          position: "relative",
                          borderWidth: 0,
                          marginLeft: 20,
                          marginRight: 0,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_950_1091"
                  style={{
                    height: 610,
                    width: 1204,
                    backgroundColor: "rgba(255,255,255,1.00)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    borderColor: "rgba(207,206,206,1)",
                    borderTopWidth: 1,
                    borderStyle: "solid",
                    marginTop: 2,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_950_1092"
                    style={{
                      height: 535,
                      width: 1203,
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 5,
                    }}
                  >
                    <div
                      id="t18_950_1093"
                      style={{
                        height: 535,
                        width: 1203,
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
                        id="t18_1123_890"
                        style={{
                          width: 1204,
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
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                          }}
                        >
                          {dl.changes.bookingList.map((item, index) => {
                            return (
                              <div>
                                <AdminBookingRow
                                  {...item}
                                  {...dl.changes.bookingList}
                                  onChangeMenu={(val) => {
                                    if (val == "Booking Details") {
                                      dl.functions.setBookingDetail(
                                        index,
                                        "Visa & Immigration",
                                      );
                                    }

                                    if (val == "Reassign Expert") {
                                      dl.changes.bookingId =
                                        dl.changes.bookingList[index]._id;
                                      dl.functions.modalsPlugin.openModal(
                                        "reassignExpert",
                                      );
                                      dl.functions.getExpertList(
                                        "Visa %26 Immigration",
                                      );
                                    }
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_950_1160"
                    style={{
                      height: 45,
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
                    <MMPagination
                      total={dl.changes.paginationState.total}
                      active={dl.changes.paginationState.active}
                      onChange={(val) => {
                        dl.functions.getBooking(
                          "Visa %26 Immigration",
                          "5",
                          val,
                        );
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
  );
});
export default Visabookings_1;
