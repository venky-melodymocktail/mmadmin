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
import AdminWantedRoomRow from "../../components/AdminWantedRoomRow.jsx";

const Wantedrooms_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1330_384");
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
        id="t18_1330_384"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          paddingBottom: 5,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_1329_227"
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
            id="t18_1329_228"
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
              id="t18_2093_53"
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
                  id="t18_2093_54"
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
                id="t18_2093_55"
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
              id="t18_1329_232"
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
                id="t18_1329_261"
                style={{
                  height: 868,
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
                  id="t18_1329_262"
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
                    id="t18_1329_263"
                    style={{
                      height: 72,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 26,
                    }}
                  >
                    <div
                      id="t18_1329_264"
                      style={{
                        height: 72,
                        width: 1204,
                        flexDirection: "row",
                        alignItems: "flex-start",
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
                      <div
                        id="t18_1329_265"
                        style={{
                          width: 117,
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
                          marginRight: 172.5,
                        }}
                      >
                        <span
                          id="t18_1329_266"
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
                          Rentals
                        </span>
                      </div>

                      <div
                        id="t18_1329_267"
                        style={{
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 172.5,
                          marginRight: 0,
                        }}
                      >
                        <div
                          id="t18_1329_268"
                          style={{
                            height: 44,
                            width: 732,
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
                          }}
                        >
                          <div
                            id="t18_1329_269"
                            style={{
                              width: 163,
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
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("offeredrooms");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_1329_270"
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
                              Rooms offered
                            </span>
                          </div>

                          <div
                            id="t18_1329_271"
                            style={{
                              width: 163,
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
                            }}
                          >
                            <span
                              id="t18_1329_272"
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
                              Rooms wanted
                            </span>
                          </div>

                          <div
                            id="t18_1329_273"
                            style={{
                              width: 163,
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
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("offeredhomes");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_1329_274"
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
                              Homes offered
                            </span>
                          </div>

                          <div
                            id="t18_1329_275"
                            style={{
                              width: 163,
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
                              marginRight: 0,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("wantedhomes");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_1329_276"
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
                              Homes wanted
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_1329_277"
                    style={{
                      width: 1194,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 10,
                      paddingBottom: 5,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 26,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_1329_278"
                      style={{
                        width: 238,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_279"
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
                        Title
                      </span>
                    </div>

                    <div
                      id="t18_1329_280"
                      style={{
                        width: 181,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_281"
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
                        Posted by
                      </span>
                    </div>

                    <div
                      id="t18_1329_282"
                      style={{
                        width: 108,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_283"
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
                      id="t18_1329_284"
                      style={{
                        width: 109,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_285"
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
                        Needed from
                      </span>
                    </div>

                    <div
                      id="t18_1329_286"
                      style={{
                        width: 82,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_287"
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
                      id="t18_1329_288"
                      style={{
                        width: 83,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 17.5,
                      }}
                    >
                      <span
                        id="t18_1329_289"
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
                      id="t18_1329_290"
                      style={{
                        width: 95,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 17.5,
                        marginRight: 0,
                      }}
                    >
                      <span
                        id="t18_1329_291"
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
                        Is promoted
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1329_292"
                  style={{
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
                    id="t18_1329_293"
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
                      {dl.changes.needARoomList.map((item, index) => {
                        return (
                          <div>
                            <AdminWantedRoomRow
                              {...item}
                              {...dl.changes.needARoomList}
                              onActivate={(val) => {
                                var id = dl.changes.needARoomList[index]._id;
                                var body = {
                                  id: id,
                                  status: "active",
                                };

                                dl.functions.updateNeedARoom(body);
                              }}
                              onDisable={(val) => {
                                var id = dl.changes.needARoomList[index]._id;
                                var body = {
                                  id: id,
                                  status: "inactive",
                                };

                                dl.functions.updateNeedARoom(body);
                              }}
                              onChangeMenu={(val) => {
                                if (val == "Edit Promotion") {
                                  dl.changes.selectedPromotion =
                                    dl.changes.needARoomList[index];
                                  dl.changes.promotionTitle =
                                    dl.changes.needARoomList[index].title;
                                  dl.changes.promotiondata =
                                    dl.changes.needARoomList[index].promotion;
                                  if (
                                    dl.changes.promotiondata.status == "true"
                                  ) {
                                    dl.changes.promotiondata.status = true;
                                  } else {
                                    dl.changes.promotiondata.status = false;
                                  }
                                  dl.functions.modalsPlugin.openModal(
                                    "editPromotions",
                                  );
                                }

                                if (val == "View More") {
                                  var id = dl.changes.needARoomList[index]._id;
                                  window.open(
                                    `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/wantedroomdetails?roomId=${id}`,
                                    "_blank",
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
                    id="t18_1329_318"
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
                        dl.changes.paginationState.active = val;
                        dl.functions.getNeedARooms("6", val);
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
export default Wantedrooms_1;
