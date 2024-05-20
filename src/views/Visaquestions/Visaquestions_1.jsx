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

import AdminVquestionRow from "../../components/AdminVquestionRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Visaquestions_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_957_23");
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
        id="t18_957_23"
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
          id="t18_950_599"
          style={{
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_950_600"
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
              id="t18_2093_14"
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
                  id="t18_2093_15"
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
                id="t18_2093_16"
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
              id="t18_950_604"
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
                id="t18_950_633"
                style={{
                  height: "800px",
                  width: 1205,
                  backgroundColor: "rgba(248,246,246,1.00)",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 30,
                  paddingRight: 32,
                  paddingTop: 60,
                  paddingBottom: 60,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginRight: 0,
                }}
              >
                <div
                  id="t18_950_634"
                  style={{
                    width: 1204,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                  }}
                >
                  <div
                    id="t18_950_635"
                    style={{
                      height: 58,
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingBottom: 10,
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
                      id="t18_950_636"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 30,
                        fontWeight: 500,
                        color: "rgba(113,113,113,1)",
                        letterSpacing: 0,
                        lineHeight: "36.30681610107422px",
                        textAlign: "left",
                        marginLeft: 0,
                        marginRight: 75,
                      }}
                    >
                      Visa & Immigration
                    </span>

                    <div
                      id="t18_950_637"
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
                      <div
                        id="t18_950_638"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 39,
                        }}
                      >
                        <div
                          id="t18_950_639"
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 39,
                          }}
                        >
                          <span
                            id="t18_950_640"
                            onClick={() => {
                              dl.functions.viewsPlugin.showView("visafaq");

                              var currentPath =
                                dl.functions.common.getLastPath();
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
                              marginLeft: 0,
                              marginRight: 37.5,
                              cursor: "pointer",
                            }}
                          >
                            FAQ’s
                          </span>

                          <div
                            id="t18_950_641"
                            style={{
                              height: 24,
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
                              marginLeft: 37.5,
                              marginRight: 0,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.getVisaQuestion("7");
                            }}
                          >
                            <span
                              id="t18_950_642"
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
                              Questions
                            </span>
                          </div>
                        </div>

                        <span
                          id="t18_950_643"
                          onClick={() => {
                            dl.functions.viewsPlugin.showView("visabookings");
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
                            marginLeft: 39,
                            marginRight: 0,
                            cursor: "pointer",
                          }}
                        >
                          Bookings
                        </span>
                      </div>

                      <span
                        id="t18_950_644"
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
                          marginLeft: 39,
                          marginRight: 0,
                          cursor: "pointer",
                        }}
                      >
                        Experts
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      borderWidth: 1,
                      borderColor: "grey",
                      borderRadius: 5,
                    }}
                  >
                    <select
                      name="cars"
                      id="t18_492_157"
                      sx={{}}
                      style={{
                        height: 46,
                        width: 306,
                        backgroundColor: "rgba(248,246,246,1.00)",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        paddingLeft: 10,
                        paddingRight: 10,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 1,
                        marginTop: 0.5,
                        marginBottom: 0,
                        cursor: "pointer",
                        borderColor: "grey",
                        borderStyle: "solid",
                        borderRadius: 5,
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                      onChange={(val) => {
                        val = val.target.value;
                      }}
                    >
                      <option value="" disabled selected>
                        select Arrangement
                      </option>
                      <option key={"newToOld"} value={"newToOld"} selected={""}>
                        Newest First
                      </option>
                      <option key={"oldToNew"} value={"oldToNew"} selected={""}>
                        Oldest First
                      </option>
                    </select>
                  </div>

                  <div
                    id="t18_950_645"
                    style={{
                      width: 1162,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 20,
                      paddingRight: 20,
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
                      id="t18_950_646"
                      style={{
                        width: 343.0029296875,
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
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_647"
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
                      id="t18_950_646"
                      style={{
                        width: 100.0029296875,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        paddingLeft: 30,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        // marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_647"
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
                        Answered
                      </span>
                    </div>

                    <div
                      id="t18_950_648"
                      style={{
                        width: 136.00146484375,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_649"
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
                      id="t18_950_650"
                      style={{
                        width: 81.00146484375,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_651"
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
                      id="t18_950_652"
                      style={{
                        width: 82.0009765625,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_653"
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
                      id="t18_950_654"
                      style={{
                        width: 63.0009765625,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_950_655"
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
                      id="t18_950_656"
                      style={{
                        width: 63.0009765625,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 0,
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="t18_950_658"
                  style={{
                    // height: 807,
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
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_950_659"
                    style={{
                      // height: 535,
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
                      id="t18_950_660"
                      style={{
                        width: 1202,
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
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
                        {dl.changes.visaQusetionsList.map((item, index) => {
                          return (
                            <div>
                              <AdminVquestionRow
                                {...item}
                                {...dl.changes.visaQusetionsList}
                                onActivate={(val) => {
                                  var run = async () => {
                                    var body = {
                                      id: dl.changes.visaQusetionsList[index]
                                        ._id,
                                      status: "active",
                                    };
                                    var res =
                                      await dl.functions.updateVisaQuestion(
                                        body
                                      );
                                    // dl.functions.getVisaQuestion("7")
                                    dl.functions.getVisaQuestion(
                                      "8",
                                      dl.changes.paginationState.active
                                    );
                                    // alert(JSON.stringify(res))
                                    // alert(Jso)
                                  };
                                  run();
                                  // alert(index)
                                }}
                                onDisable={(val) => {
                                  var run = async () => {
                                    var body = {
                                      id: dl.changes.visaQusetionsList[index]
                                        ._id,
                                      status: "inactive",
                                    };
                                    var res =
                                      await dl.functions.updateVisaQuestion(
                                        body
                                      );
                                    // dl.functions.getVisaQuestion("7")
                                    dl.functions.getVisaQuestion(
                                      "8",
                                      dl.changes.paginationState.active
                                    );
                                    // alert(JSON.stringify(res))
                                    // alert(Jso)
                                  };
                                  run();
                                  // alert(index)
                                }}
                                onChangeMenu={(val) => {
                                  if (val == "View More") {
                                    var id =
                                      dl.changes.visaQusetionsList[index]._id;
                                    window.open(
                                      `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/comments?visaQuestionId=${id}`,
                                      "_blank"
                                    );
                                  }

                                  if (val == "View Report") {
                                    dl.functions.modalsPlugin.openModal(
                                      "reports"
                                    );
                                    var id =
                                      dl.changes.visaQusetionsList[index]._id;
                                    dl.changes.reportedObjectId = id;
                                    dl.functions.getReports(id, "6", "1");
                                  }

                                  if (val == "View Comments") {
                                    dl.changes.selectedComment =
                                      dl.changes.visaQusetionsList[index];
                                    dl.functions.viewsPlugin.showView(
                                      "questioncomments"
                                    );
                                    var currentPath =
                                      dl.functions.common.getLastPath();
                                    dl.functions.onLoadFunctions[currentPath]();
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
                    id="t18_950_737"
                    style={{
                      height: 42,
                      width: 1173,
                      backgroundColor: "rgba(255,255,255,1.00)",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 19,
                      paddingTop: 10,
                      paddingBottom: 10,
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
                        dl.functions.getVisaQuestion("8", page);
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
export default Visaquestions_1;
