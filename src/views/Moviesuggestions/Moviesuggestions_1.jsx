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

import MmAdminMSRow from "../../components/MmAdminMSRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Moviesuggestions_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_494_376");
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
        id="t18_494_376"
        style={{
          width: 1440,
          backgroundColor: "rgba(255,255,255,1.00)",
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
          id="t18_494_377"
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
            id="t18_2093_11"
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
                id="t18_2093_12"
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
              id="t18_2093_13"
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
            id="t18_494_381"
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
              id="t18_494_404"
              style={{
                height: "800px",
                width: 1164,
                backgroundColor: "rgba(248,246,246,1.00)",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 44,
                paddingRight: 59,
                paddingTop: 60,
                paddingBottom: 60,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginRight: 0,
              }}
            >
              <div
                id="t18_494_407"
                style={{
                  height: 74,
                  width: 1204,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
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
                  id="t18_494_408"
                  style={{
                    height: 72,
                    width: 1204,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                  }}
                >
                  <span
                    id="t18_494_409"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 30,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "36.30681610107422px",
                      textAlign: "left",
                      marginLeft: 0,
                      marginRight: 380,
                    }}
                  >
                    Movie suggestions
                  </span>

                  <div
                    id="t18_494_410"
                    style={{
                      height: 6,
                      width: 82,
                      borderRadius: 100,
                      backgroundColor: "rgba(186,15,23,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 22,
                      paddingBottom: 22,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 380,
                      marginRight: 0,
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      dl.functions.modalsPlugin.openModal(
                        "addNewMovieSuggestion",
                      );
                      dl.changes.updateMovieSuggestions = false;
                      dl.changes.msData = {
                        title: "",
                        gener: "",
                        rating: 0,
                        availableOn: [],
                        language: "",
                        category: "",
                        description: "",
                        country: "",
                        trailerURL: "",
                        status: "active",
                        activeVisible: "flex",
                        disableVisible: "none",
                      };
                    }}
                  >
                    <span
                      id="t18_494_411"
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
                id="t18_980_4"
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
                  id="t18_494_412"
                  style={{
                    height: 32,
                    width: 1183,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 10,
                    paddingRight: 10,
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
                    id="t18_494_413"
                    style={{
                      width: 164,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_414"
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
                    id="t18_494_415"
                    style={{
                      width: 72,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_416"
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
                    id="t18_494_417"
                    style={{
                      width: 71,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_418"
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
                      Genre
                    </span>
                  </div>

                  <div
                    id="t18_494_419"
                    style={{
                      width: 72,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_420"
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
                      Language
                    </span>
                  </div>

                  <div
                    id="t18_494_421"
                    style={{
                      width: 80,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_422"
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
                    id="t18_494_423"
                    style={{
                      width: 83,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <span
                      id="t18_494_424"
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
                    id="t18_494_425"
                    style={{
                      width: 85,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 40,
                      marginRight: 0,
                    }}
                  >
                    <span
                      id="t18_494_426"
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

                <div
                  id="t18_494_427"
                  style={{
                    height: 607,
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
                    id="t18_721_51"
                    style={{
                      height: 535,
                      width: 1205,
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
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {dl.changes.msDataArr.map((item, index) => {
                        return (
                          <div>
                            <MmAdminMSRow
                              {...item}
                              {...dl.changes.msDataArr}
                              onActivate={(val) => {
                                const run = async () => {
                                  var info = dl.changes.msDataArr[index];
                                  var updates = {
                                    id: info._id,
                                    status: "active",
                                  };
                                  // alert(JSON.stringify(updates))
                                  var res =
                                    await dl.functions.updateMovieSuggestion(
                                      updates,
                                    );
                                };

                                run();
                              }}
                              onDisable={(val) => {
                                const run = async () => {
                                  var info = dl.changes.msDataArr[index];
                                  var updates = {
                                    id: info._id,
                                    status: "inactive",
                                  };
                                  var res =
                                    await dl.functions.updateMovieSuggestion(
                                      updates,
                                    );
                                };

                                run();
                              }}
                              onEdit={(val) => {
                                dl.changes.updateMovieSuggestions = true;
                                const selectedMS = dl.changes.msDataArr[index];
                                var msData = { ...selectedMS };

                                dl.changes.msData = msData;
                                if (dl.changes.msData.status == "active") {
                                  dl.changes.msData["status"] = true;
                                  //    dl.changes.msDataArr[index].status = "active"
                                } else {
                                  dl.changes.msData["status"] = false;
                                  // dl.changes.msDataArr[index].status = "inactive"
                                }
                                // alert(JSON.stringify(dl.changes.msDataArr[index]))

                                dl.functions.modalsPlugin.openModal(
                                  "addNewMovieSuggestion",
                                );
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    id="t18_721_53"
                    style={{
                      height: 62,
                      width: 1205,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
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
                        dl.functions.getMovieSuggestion("10", page);
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
export default Moviesuggestions_1;
