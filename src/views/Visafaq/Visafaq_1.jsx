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

import AdminVfaqRow from "../../components/AdminVfaqRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Visafaq_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_957_25");
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
        id="t18_957_25"
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
          id="t18_950_823"
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
            id="t18_950_824"
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
              id="t18_2093_23"
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
                  id="t18_2093_24"
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
                id="t18_2093_25"
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
              id="t18_950_828"
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
                id="t18_950_857"
                style={{
                  height: "800px",
                  width: 1205,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 31,
                  paddingRight: 31,
                  paddingTop: 60,
                  paddingBottom: 60,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginRight: 0,
                }}
              >
                <div
                  id="t18_980_7"
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
                    id="t18_980_5"
                    style={{
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
                      id="t18_950_858"
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
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        id="t18_950_859"
                        style={{
                          height: 52,
                          width: 1204,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingBottom: 14,
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          borderColor: "rgba(207,206,206,1)",
                          borderBottomWidth: 1,
                          borderStyle: "solid",
                        }}
                      >
                        <div
                          id="t18_950_860"
                          style={{
                            height: 32,
                            width: 268,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 75,
                          }}
                        >
                          <span
                            id="t18_950_861"
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
                          id="t18_950_862"
                          style={{
                            height: 42,
                            width: 732,
                            borderRadius: 30,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "flex",
                            paddingLeft: 5,
                            paddingRight: 18,
                            paddingTop: 5,
                            paddingBottom: 5,
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 2,
                            borderColor: "rgba(186,15,23,1)",
                            borderStyle: "solid",
                            marginLeft: 75,
                            marginRight: 0,
                          }}
                        >
                          <div
                            id="t18_950_863"
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
                              marginLeft: 0,
                              marginRight: 32.5,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.getVisafaq("10");
                            }}
                          >
                            <span
                              id="t18_950_864"
                              style={{
                                fontFamily: "Inter",
                                fontSize: 20,
                                fontWeight: 500,
                                color: "rgba(248,246,246,1)",
                                letterSpacing: 0,
                                lineHeight: "24.204544067382812px",
                                textAlign: "center",
                              }}
                            >
                              FAQ’s
                            </span>
                          </div>

                          <div
                            id="t18_950_865"
                            style={{
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 10,
                              paddingBottom: 10,
                              position: "relative",
                              overflow: "visible",
                              borderWidth: 0,
                              marginLeft: 32.5,
                              marginRight: 32.5,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView(
                                "visaquestions",
                              );

                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_950_866"
                              style={{
                                fontFamily: "Inter",
                                fontSize: 20,
                                fontWeight: 500,
                                color: "rgba(197,18,29,1)",
                                letterSpacing: 0,
                                lineHeight: "24.204544067382812px",
                                textAlign: "center",
                              }}
                            >
                              Questions
                            </span>
                          </div>

                          <div
                            id="t18_950_867"
                            style={{
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 10,
                              paddingBottom: 10,
                              position: "relative",
                              overflow: "visible",
                              borderWidth: 0,
                              marginLeft: 32.5,
                              marginRight: 32.5,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("visabookings");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_950_868"
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
                            id="t18_950_869"
                            style={{
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 10,
                              paddingBottom: 10,
                              position: "relative",
                              overflow: "visible",
                              borderWidth: 0,
                              marginLeft: 32.5,
                              marginRight: 0,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("visaexperts");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_950_870"
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
                    </div>

                    <div
                      id="t18_950_871"
                      style={{
                        height: 50,
                        width: 1136,
                        flexDirection: "column",
                        alignItems: "flex-end",
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
                        id="t18_950_872"
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
                          dl.functions.modalsPlugin.openModal("addNewQuestion");
                        }}
                      >
                        <span
                          id="t18_950_873"
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
                  </div>

                  <div
                    id="t18_980_6"
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
                      id="t18_950_874"
                      style={{
                        height: 26,
                        width: 1184,
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
                        marginTop: 0,
                        marginBottom: 1,
                      }}
                    >
                      <div
                        id="t18_950_875"
                        style={{
                          width: 1132,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          paddingRight: 10,
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                        }}
                      >
                        <div
                          id="t18_950_876"
                          style={{
                            width: 313,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 40.5,
                          }}
                        >
                          <span
                            id="t18_950_877"
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
                            Question
                          </span>
                        </div>

                        <div
                          id="t18_950_878"
                          style={{
                            width: 136,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 40.5,
                            marginRight: 40.5,
                          }}
                        >
                          <span
                            id="t18_950_879"
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
                            Category
                          </span>
                        </div>

                        <div
                          id="t18_950_880"
                          style={{
                            width: 85,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 40.5,
                            marginRight: 40.5,
                          }}
                        >
                          <span
                            id="t18_950_881"
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
                          id="t18_950_882"
                          style={{
                            width: 82,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 40.5,
                            marginRight: 40.5,
                          }}
                        >
                          <span
                            id="t18_950_883"
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
                          id="t18_950_884"
                          style={{
                            width: 63,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 40.5,
                            marginRight: 40.5,
                          }}
                        >
                          <span
                            id="t18_950_885"
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
                          id="t18_950_886"
                          style={{
                            width: 91,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 40.5,
                            marginRight: 0,
                          }}
                        >
                          <span
                            id="t18_950_887"
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
                            Edit
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      id="t18_950_888"
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
                        marginTop: 1,
                        marginBottom: 0,
                      }}
                    >
                      <div
                        id="t18_950_889"
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
                          {dl.changes.visafaqList.map((item, index) => {
                            return (
                              <div>
                                <AdminVfaqRow
                                  {...item}
                                  {...dl.changes.visafaqList}
                                  onActivate={(val) => {
                                    var run = async () => {
                                      var body = {
                                        id: dl.changes.visafaqList[index]._id,
                                        status: "active",
                                      };
                                      var res =
                                        await dl.functions.updateVisafaq(body);
                                      // alert(JSON.stringify(body))
                                      // alert(Jso)
                                    };
                                    run();
                                  }}
                                  onDisable={(val) => {
                                    var run = async () => {
                                      var body = {
                                        id: dl.changes.visafaqList[index]._id,
                                        status: "inactive",
                                      };
                                      var res =
                                        await dl.functions.updateVisafaq(body);
                                      // alert(JSON.stringify(body))
                                      // alert(Jso)
                                    };
                                    run();
                                  }}
                                  onEdit={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                      "editFaq",
                                    );
                                    dl.functions.getfaqDetail(
                                      dl.changes.visafaqList[index]._id,
                                    );
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div
                        id="t18_950_958"
                        style={{
                          height: 45,
                          width: 1182,
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
                          borderTopWidth: 1,
                          marginTop: 5,
                          marginBottom: 0,
                        }}
                      >
                        <MMPagination
                          total={dl.changes.paginationState.total}
                          active={dl.changes.paginationState.active}
                          onChange={(val) => {
                            dl.changes.paginationState.active = val;
                            var page = String(val);
                            dl.functions.getVisafaq("8", page);
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
    </div>
  );
});
export default Visafaq_1;
