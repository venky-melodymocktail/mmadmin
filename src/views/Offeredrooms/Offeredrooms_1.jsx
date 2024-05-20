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
import AdminOfferedRoomRow from "../../components/AdminOfferedRoomRow.jsx";

const Offeredrooms_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1330_383");
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
        id="t18_1330_383"
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
          id="t18_1329_121"
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
            id="t18_1329_122"
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
              id="t18_2093_50"
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
                  id="t18_2093_51"
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
                id="t18_2093_52"
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
              id="t18_1329_126"
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
                id="t18_1329_155"
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
                  id="t18_1329_156"
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
                    id="t18_1329_157"
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
                      id="t18_1329_158"
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
                        id="t18_1329_159"
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
                          id="t18_1329_160"
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
                        id="t18_1329_161"
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
                          id="t18_1329_162"
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
                            id="t18_1329_163"
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
                              marginLeft: 0,
                            }}
                          >
                            <span
                              id="t18_1329_164"
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
                              Rooms offered
                            </span>
                          </div>

                          <div
                            id="t18_1329_165"
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
                              dl.functions.viewsPlugin.showView("wantedrooms");
                              var currentPath =
                                dl.functions.common.getLastPath();
                              dl.functions.onLoadFunctions[currentPath]();
                            }}
                          >
                            <span
                              id="t18_1329_166"
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
                              Rooms wanted
                            </span>
                          </div>

                          <div
                            id="t18_1329_167"
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
                              id="t18_1329_168"
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
                            id="t18_1329_169"
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
                              id="t18_1329_170"
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
                    id="t18_1329_171"
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
                      id="t18_1329_172"
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
                        id="t18_1329_173"
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
                      id="t18_1329_174"
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
                        id="t18_1329_175"
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
                      id="t18_1329_176"
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
                        id="t18_1329_177"
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
                      id="t18_1329_178"
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
                        id="t18_1329_179"
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
                        Available from
                      </span>
                    </div>

                    <div
                      id="t18_1329_180"
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
                        id="t18_1329_181"
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
                      id="t18_1329_182"
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
                        id="t18_1329_183"
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
                      id="t18_1329_184"
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
                        id="t18_1329_185"
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
                  id="t18_1329_186"
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
                    id="t18_1329_187"
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
                      {dl.changes.offeredRoomList.map((item, index) => {
                        return (
                          <div>
                            <AdminOfferedRoomRow
                              {...item}
                              {...dl.changes.offeredRoomList}
                              onActivate={(val) => {
                                var id = dl.changes.offeredRoomList[index]._id;
                                var body = {
                                  id: id,
                                  status: "active",
                                };

                                dl.functions.updateOfferedRoom(body);
                              }}
                              onDisable={(val) => {
                                var id = dl.changes.offeredRoomList[index]._id;
                                var body = {
                                  id: id,
                                  status: "inactive",
                                };

                                dl.functions.updateOfferedRoom(body);
                              }}
                              onChangeMenu={(val) => {
                                if (val == "Edit Promotion") {
                                  dl.changes.selectedPromotion =
                                    dl.changes.offeredRoomList[index];
                                  dl.changes.promotionTitle =
                                    dl.changes.offeredRoomList[index].title;
                                  dl.changes.promotiondata =
                                    dl.changes.offeredRoomList[index].promotion;
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
                                  var id =
                                    dl.changes.offeredRoomList[index]._id;
                                  window.open(
                                    `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/offeredroomdetails?roomId=${id}`,
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
                    id="t18_1329_212"
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
                        dl.functions.getOfferedRooms("6", val);
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
export default Offeredrooms_1;
