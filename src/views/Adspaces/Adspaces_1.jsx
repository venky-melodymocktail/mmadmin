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

import AdminAdSpacesRow from "../../components/AdminAdSpacesRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Adspaces_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1383_503");
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
        id="t18_1383_503"
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
          id="t18_1383_504"
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
            id="t18_2093_59"
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
                id="t18_2093_60"
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
              id="t18_2093_61"
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
            id="t18_1383_594"
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
              id="t18_1383_623"
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
                id="t18_1383_624"
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
                  id="t18_1383_625"
                  style={{
                    height: 72,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 26,
                  }}
                >
                  <div
                    id="t18_1383_626"
                    style={{
                      height: 72,
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
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
                      id="t18_1383_627"
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
                        id="t18_1383_628"
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
                        Ads
                      </span>
                    </div>

                    <div
                      id="t18_1383_695"
                      style={{
                        height: 44,
                        width: 412,
                        borderRadius: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
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
                        marginLeft: 172.5,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1383_696"
                        style={{
                          height: 44,
                          width: 206,
                          borderRadius: 30,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          dl.functions.viewsPlugin.showView("ads");
                        }}
                      >
                        <span
                          id="t18_1383_697"
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
                          Ads
                        </span>
                      </div>

                      <div
                        id="t18_1383_698"
                        style={{
                          height: 44,
                          width: 206,
                          borderRadius: 30,
                          backgroundColor: "rgba(186,15,23,1.00)",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginRight: 0,
                        }}
                      >
                        <span
                          id="t18_1383_699"
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
                          Ad spaces
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1383_639"
                  style={{
                    width: 1184,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 20,
                    paddingBottom: 5,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 26,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1383_640"
                    style={{
                      width: 420,
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
                      id="t18_1383_641"
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
                      Name
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_1383_654"
                style={{
                  backgroundColor: "rgba(255,255,255,1.00)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "scroll",
                  borderWidth: 0,
                  borderColor: "rgba(207,206,206,1)",
                  borderTopWidth: 1,
                  borderStyle: "solid",
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_1383_655"
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
                    {dl.changes.adSpaces.map((item, index) => {
                      return (
                        <div>
                          <AdminAdSpacesRow
                            {...item}
                            {...dl.changes.adSpaces}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  id="t18_1383_680"
                  style={{
                    height: 45,
                    width: 1194,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "none",
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
                    id="t18_1383_681"
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                    }}
                  >
                    {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/999fb0f5e53680ae17b4debb30edd5ea6817a98b.png" !=
                    "" ? (
                      <img
                        id="t18_1383_682"
                        style={{
                          height: 14.25,
                          width: 8,
                          display: "flex",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 11.5,
                        }}
                        src={
                          "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/999fb0f5e53680ae17b4debb30edd5ea6817a98b.png"
                        }
                      ></img>
                    ) : (
                      <></>
                    )}

                    <div
                      id="t18_1383_683"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 11.5,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1383_684"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 11.5,
                        }}
                      >
                        <span
                          id="t18_1383_685"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(0,0,0,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 0,
                            marginRight: 9.5,
                          }}
                        >
                          1
                        </span>

                        <span
                          id="t18_1383_686"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          2
                        </span>

                        <span
                          id="t18_1383_687"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          3
                        </span>

                        <span
                          id="t18_1383_688"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          4
                        </span>

                        <span
                          id="t18_1383_689"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          5
                        </span>

                        <span
                          id="t18_1383_690"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          6
                        </span>

                        <span
                          id="t18_1383_691"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          7
                        </span>

                        <span
                          id="t18_1383_692"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 9.5,
                          }}
                        >
                          8
                        </span>

                        <span
                          id="t18_1383_693"
                          style={{
                            fontFamily: "Inter",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "rgba(167,167,167,1)",
                            letterSpacing: 0,
                            lineHeight: "19.363636016845703px",
                            textAlign: "left",
                            marginLeft: 9.5,
                            marginRight: 0,
                          }}
                        >
                          9
                        </span>
                      </div>

                      {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/022d7204014da756e10194a6be98db81da7d6570.png" !=
                      "" ? (
                        <img
                          id="t18_1383_694"
                          style={{
                            height: 14.25,
                            width: 8,
                            display: "flex",
                            borderWidth: 0,
                            marginLeft: 11.5,
                            marginRight: 0,
                          }}
                          src={
                            "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/022d7204014da756e10194a6be98db81da7d6570.png"
                          }
                        ></img>
                      ) : (
                        <></>
                      )}
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
export default Adspaces_1;
