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
import AdminTcRow from "../../components/AdminTcRow.jsx";

const Offeredtravelcompanion_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1449_329");
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
        id="t18_1449_329"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          paddingBottom: 5,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <div
          id="t18_1449_330"
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
            id="t18_1449_331"
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
              id="t18_2093_65"
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
                  id="t18_2093_66"
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
                id="t18_2093_67"
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
              id="t18_1449_335"
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
                id="t18_1449_364"
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
                  id="t18_1449_365"
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
                    id="t18_1449_366"
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
                      id="t18_1449_367"
                      style={{
                        width: 269,
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
                        marginRight: 260,
                      }}
                    >
                      <span
                        id="t18_1449_368"
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
                        Travel companion
                      </span>
                    </div>

                    <div
                      id="t18_1449_369"
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
                        marginLeft: 260,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1449_370"
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
                            "wantedtravelcompanion",
                          );
                          var currentPath = dl.functions.common.getLastPath();
                          dl.functions.onLoadFunctions[currentPath]();
                        }}
                      >
                        <span
                          id="t18_1449_371"
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
                        id="t18_1449_372"
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
                          id="t18_1449_373"
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
                    id="t18_1449_269"
                    style={{
                      height: 52,
                      width: 1194,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 26,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_1449_270"
                      style={{
                        width: 190,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        paddingLeft: 10,
                        paddingRight: 10,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_271"
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
                      id="t18_1449_272"
                      style={{
                        width: 88,
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
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_273"
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
                      id="t18_1449_274"
                      style={{
                        width: 220,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_275"
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
                      id="t18_1449_276"
                      style={{
                        width: 220,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_277"
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
                      id="t18_1449_280"
                      style={{
                        width: 82,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_281"
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
                      id="t18_1449_282"
                      style={{
                        width: 83,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_283"
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
                      id="t18_1449_284"
                      style={{
                        width: 82,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span
                        id="t18_1449_285"
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

                    <div
                      id="t18_1558_46"
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
                        borderWidth: 0,
                        marginLeft: 10,
                        marginRight: 0,
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  id="t18_1558_2"
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
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1558_3"
                    style={{
                      height: 535,
                      width: 1204,
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
                      {dl.changes.willBeATcList.map((item, index) => {
                        return (
                          <div>
                            <AdminTcRow
                              {...item}
                              {...dl.changes.willBeATcList}
                              onClickDisable={(val) => {
                                var tcId = dl.changes.willBeATcList[index]._id;
                                var body = {
                                  id: tcId,
                                  status: "inactive",
                                };
                                dl.functions.updateWillBeATc(body);
                              }}
                              onClickActivate={(val) => {
                                var tcId = dl.changes.willBeATcList[index]._id;
                                var body = {
                                  id: tcId,
                                  status: "active",
                                };
                                dl.functions.updateWillBeATc(body);
                              }}
                              onChangeMenu={(val) => {
                                if (val == "Edit Promotion") {
                                  dl.changes.selectedPromotion =
                                    dl.changes.willBeATcList[index];
                                  // dl.changes.tcPromotionType = "offered"
                                  dl.changes.promotionTitle =
                                    "From " +
                                    dl.changes.willBeATcList[index].from +
                                    "To " +
                                    dl.changes.willBeATcList[index].to;
                                  if (
                                    dl.changes.willBeATcList[index].promotion
                                      .status == true
                                  ) {
                                    dl.changes.promotiondata.status =
                                      dl.changes.willBeATcList[
                                        index
                                      ].promotion.status;
                                    dl.changes.promotiondata.promotionFrom = dl
                                      .changes.willBeATcList[index].promotion
                                      .promotionFrom
                                      ? dl.changes.willBeATcList[index]
                                          .promotion.promotionFrom
                                      : "";
                                    dl.changes.promotiondata.promotionTo = dl
                                      .changes.willBeATcList[index].promotion
                                      .promotionTo
                                      ? dl.changes.willBeATcList[index]
                                          .promotion.promotionTo
                                      : "";
                                  } else {
                                    dl.changes.promotiondata.status =
                                      dl.changes.willBeATcList[
                                        index
                                      ].promotion.status;
                                  }
                                  // dl.changes.selectedTc = dl.changes.willBeATcList[index]
                                  dl.functions.modalsPlugin.openModal(
                                    "editPromotions",
                                  );
                                }
                                if (val == "View More") {
                                  // if(index){
                                  //     alert(index)
                                  // }

                                  var tcId =
                                    dl.changes.willBeATcList[index]._id;
                                  window.open(
                                    `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/offeredtcdetails?tcId=${tcId}`,
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
                    id="t18_1558_7"
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
                        var page = val;
                        dl.functions.getWillBeATc("8", page);
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
export default Offeredtravelcompanion_1;
