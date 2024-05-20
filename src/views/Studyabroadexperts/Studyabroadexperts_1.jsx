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

import AdminExpertRow from "../../components/AdminExpertRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Studyabroadexperts_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1130_455");
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
        id="t18_1130_455"
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
          id="t18_1130_311"
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
            id="t18_2093_35"
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
                id="t18_2093_36"
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
              id="t18_2093_37"
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
            id="t18_1130_315"
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
              id="t18_1130_344"
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
                id="t18_2013_2"
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
                  id="t18_1130_345"
                  style={{
                    width: 1204,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1130_346"
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
                    }}
                  >
                    <span
                      id="t18_1130_347"
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
                      id="t18_1130_348"
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
                        id="t18_1130_349"
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
                          dl.functions.viewsPlugin.showView(
                            "studyabroadbookings",
                          );
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                      >
                        <span
                          id="t18_1130_350"
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
                          Bookings
                        </span>
                      </div>

                      <div
                        id="t18_1130_351"
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
                          id="t18_1130_352"
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
                          Experts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1917_577"
                  style={{
                    height: 50,
                    width: 1181,
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1917_578"
                    style={{
                      height: 30,
                      width: 119,
                      borderRadius: 100,
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
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      dl.functions.modalsPlugin.openModal("addNewExpert");
                      dl.changes.expertField = {
                        name: "",
                        email: "",
                        phone: "",
                        status: false,
                        monday: [],
                        tuesday: [],
                        wednesday: [],
                        thrusday: [],
                        friday: [],
                        saturday: [],
                        sunday: [],
                      };

                      dl.changes.addExpertMode = "new";
                    }}
                  >
                    <span
                      id="t18_1917_579"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 17,
                        fontWeight: 500,
                        color: "rgba(255,255,255,1)",
                        letterSpacing: 0,
                        lineHeight: "20.573863983154297px",
                        textAlign: "left",
                      }}
                    >
                      Add New
                    </span>
                  </div>
                </div>

                <div
                  id="t18_1130_471"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1130_458"
                    style={{
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 5,
                    }}
                  >
                    <div
                      id="t18_1130_459"
                      style={{
                        width: 279,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 25,
                      }}
                    >
                      <span
                        id="t18_1130_460"
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
                        Name
                      </span>
                    </div>

                    <div
                      id="t18_1130_461"
                      style={{
                        width: 248,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 25,
                        marginRight: 25,
                      }}
                    >
                      <span
                        id="t18_1130_462"
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
                      id="t18_1130_463"
                      style={{
                        width: 143,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 25,
                        marginRight: 25,
                      }}
                    >
                      <span
                        id="t18_1130_464"
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
                        Phone
                      </span>
                    </div>

                    <div
                      id="t18_1130_465"
                      style={{
                        width: 82,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 25,
                        marginRight: 25,
                      }}
                    >
                      <span
                        id="t18_1130_466"
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
                      id="t18_1130_467"
                      style={{
                        width: 83,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 25,
                        marginRight: 25,
                      }}
                    >
                      <span
                        id="t18_1130_468"
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
                      id="t18_1130_469"
                      style={{
                        width: 91,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 25,
                        marginRight: 0,
                      }}
                    >
                      <span
                        id="t18_1130_470"
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
                        Edit
                      </span>
                    </div>
                  </div>

                  <div
                    id="t18_1130_365"
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
                      id="t18_1130_366"
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
                        {dl.changes.expertList.map((item, index) => {
                          return (
                            <div>
                              <AdminExpertRow
                                {...item}
                                {...dl.changes.expertList}
                                onActivate={(val) => {
                                  var id = dl.changes.expertList[index]._id;
                                  var body = {
                                    id: id,
                                    status: "active",
                                  };
                                  dl.functions.updateEXpertStatus(
                                    body,
                                    "Study abroad",
                                  );
                                }}
                                onDisable={(val) => {
                                  var id = dl.changes.expertList[index]._id;
                                  var body = {
                                    id: id,
                                    status: "inactive",
                                  };
                                  dl.functions.updateEXpertStatus(
                                    body,
                                    "Study abroad",
                                  );
                                }}
                                onEdit={(val) => {
                                  dl.functions.editExpert(index);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      id="t18_1130_383"
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
                          dl.changes.paginationState.active = Number(val);
                          dl.functions.getExperts("Study abroad", "6", val);
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
export default Studyabroadexperts_1;
