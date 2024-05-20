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

import AdminBookingRow from "../../components/AdminBookingRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Studyabroadbookings_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1130_454");
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
        id="t18_1130_454"
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
          id="t18_1130_195"
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
            id="t18_2093_32"
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
                id="t18_2093_33"
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
              id="t18_2093_34"
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
            id="t18_1120_653"
            style={{
              backgroundColor: "rgba(248,246,246,1.00)",
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
              id="t18_1120_682"
              style={{
                height: 868,
                width: 1236,
                backgroundColor: "rgba(248,246,246,1.00)",
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
                id="t18_1120_683"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
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
                  id="t18_1120_684"
                  style={{
                    height: 84,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    borderColor: "rgba(207,206,206,1)",
                    borderBottomWidth: 1,
                    borderStyle: "solid",
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  <span
                    id="t18_1120_685"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 30,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "36.30681610107422px",
                      textAlign: "left",
                      marginLeft: 0,
                      marginRight: 281,
                    }}
                  >
                    Study abroad
                  </span>

                  <div
                    id="t18_1120_686"
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
                      marginLeft: 281,
                      marginRight: 0,
                    }}
                  >
                    <div
                      id="t18_1120_882"
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
                        marginLeft: 0,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1120_687"
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

                    <div
                      id="t18_1120_688"
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
                        marginLeft: 10,
                        marginRight: 0,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        dl.functions.viewsPlugin.showView("studyabroadexperts");
                        var currentPath = dl.functions.common.getLastPath();
                        dl.functions.onLoadFunctions[currentPath]();
                      }}
                    >
                      <span
                        id="t18_1120_689"
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
                        Experts
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1120_690"
                  style={{
                    width: 1204,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1120_691"
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
                      id="t18_1120_692"
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
                    id="t18_1120_693"
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
                      id="t18_1120_694"
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
                    id="t18_1120_695"
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
                      id="t18_1120_696"
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
                    id="t18_1120_697"
                    style={{
                      width: 81,
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
                      id="t18_1120_698"
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
                    id="t18_1120_699"
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
                      id="t18_1120_700"
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
                      Expert name
                    </span>
                  </div>

                  <div
                    id="t18_1123_888"
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

              <div
                id="t18_1120_701"
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
                  borderColor: "rgba(207,206,206,1)",
                  borderTopWidth: 1,
                  borderStyle: "solid",
                  marginTop: 5,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_1120_702"
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
                    id="t18_1120_703"
                    style={{
                      width: 1204,
                      flexDirection: "column",
                      alignItems: "flex-end",
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
                                    "Study abroad",
                                  );
                                }

                                if (val == "Reassign Expert") {
                                  dl.changes.bookingId =
                                    dl.changes.bookingList[index]._id;
                                  dl.functions.modalsPlugin.openModal(
                                    "reassignExpert",
                                  );
                                  dl.functions.getExpertList("Study abroad");
                                }
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1120_785"
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
                      dl.functions.getBooking("Study abroad", "5", val);
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
export default Studyabroadbookings_1;
