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
import AdminAdsRow from "../../components/AdminAdsRow.jsx";

const Ads_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1382_367");
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
        id="t18_1382_367"
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
          id="t18_1382_2"
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
            id="t18_2093_56"
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
                id="t18_2093_57"
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
              id="t18_2093_58"
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
            id="t18_1382_182"
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
              id="t18_1382_211"
              style={{
                height: 808,
                width: 1236,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 31,
                paddingTop: 60,
                paddingBottom: 60,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginRight: 0,
              }}
            >
              <div
                id="t18_1382_212"
                style={{
                  height: 205,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  display: "flex",
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
                  id="t18_1382_213"
                  style={{
                    width: 1204,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    display: "flex",
                    paddingBottom: 12,
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
                    id="t18_1382_214"
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
                    Ads
                  </span>

                  <div
                    id="t18_1382_215"
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
                      marginLeft: 75,
                      marginRight: 0,
                    }}
                  >
                    <div
                      id="t18_1382_271"
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
                        marginLeft: 0,
                      }}
                    >
                      <span
                        id="t18_1382_217"
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
                        Ads
                      </span>
                    </div>

                    <div
                      id="t18_1382_270"
                      style={{
                        height: 44,
                        width: 206,
                        borderRadius: 30,
                        backgroundColor: "rgba(248,246,246,1.00)",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginRight: 0,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        dl.functions.viewsPlugin.showView("adspaces");
                      }}
                    >
                      <span
                        id="t18_1382_218"
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
                        Ad spaces
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="t18_1382_221"
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
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1382_222"
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
                      dl.changes.newAd = {
                        name: "",
                        adSpaceId: "",
                        urls: {
                          lg: "url(https://placehold.co/150x100)",
                          md: "url(https://placehold.co/150x100)",
                          sm: "url(https://placehold.co/150x100)",
                          xs: "url(https://placehold.co/150x100)",
                        },
                        showImages: {
                          lg: "none",
                          md: "none",
                          sm: "none",
                          xs: "none",
                        },
                        files: {
                          lg: null,
                          md: null,
                          sm: null,
                          xs: null,
                        },
                        imageSize: {
                          lg: "100*100",
                          md: "100*100",
                          sm: "100*100",
                          xs: "100*100",
                        },
                        showUploadImages: "none",
                        adSpaceOptions: dl.changes.newAd.adSpaceOptions,
                      };
                      dl.changes.newAdMode = "add";

                      dl.functions.modalsPlugin.openModal("addNewAd");
                    }}
                  >
                    <span
                      id="t18_1382_223"
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
                  id="t18_1382_224"
                  style={{
                    height: 36,
                    width: 1164,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    display: "flex",
                    paddingLeft: 20,
                    paddingRight: 20,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1382_225"
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
                      id="t18_1382_226"
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
                      Ad name
                    </span>
                  </div>

                  <div
                    id="t18_1382_227"
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
                      id="t18_1382_228"
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
                      Ad space
                    </span>
                  </div>

                  <div
                    id="t18_1382_231"
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
                      id="t18_1382_232"
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
                    id="t18_1382_233"
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
                      id="t18_1382_234"
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
                    id="t18_1382_235"
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
                      id="t18_1382_236"
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
              </div>

              <div
                id="t18_1382_237"
                style={{
                  height: 610,
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
                  id="t18_1382_238"
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
                    {dl.changes.ads.map((item, index) => {
                      return (
                        <div>
                          <AdminAdsRow
                            {...item}
                            {...dl.changes.ads}
                            onEdit={(val) => {
                              let ad = dl.changes.ads[index];

                              let selectedAdspaceId =
                                dl.changes.ads[index].adspace;
                              var lgSize = "";
                              var mdSize = "";
                              var smSize = "";
                              var xsSize = "";
                              for (
                                var i = 0;
                                i < dl.changes.adSpaces.length;
                                i++
                              ) {
                                if (
                                  dl.changes.adSpaces[i]._id ==
                                  selectedAdspaceId
                                ) {
                                  dl.changes.selectedAddSpaceEdit =
                                    dl.changes.adSpaces[i].name;
                                  lgSize = `(${String(dl.changes.adSpaces[i].sizes.lg.width)} * ${String(dl.changes.adSpaces[i].sizes.lg.height)})`;
                                  mdSize = `(${String(dl.changes.adSpaces[i].sizes.md.width)} * ${String(dl.changes.adSpaces[i].sizes.md.height)})`;
                                  smSize = `(${String(dl.changes.adSpaces[i].sizes.sm.width)} * ${String(dl.changes.adSpaces[i].sizes.sm.height)})`;
                                  xsSize = `(${String(dl.changes.adSpaces[i].sizes.xs.width)} * ${String(dl.changes.adSpaces[i].sizes.xs.height)})`;
                                }
                              }

                              let urls = {};
                              for (var key in ad.urls) {
                                urls[key] = `url(${ad.urls[key]})`;
                              }
                              dl.changes.newAd = {
                                name: ad.name,
                                adSpaceId: ad.adSpaceId,
                                expiresOn: ad.expiresOn,
                                urls: urls,
                                redirectUrl: ad.redirectUrl,
                                showImages: {
                                  lg: "flex",
                                  md: "flex",
                                  sm: "flex",
                                  xs: "flex",
                                },
                                files: {
                                  lg: null,
                                  md: null,
                                  sm: null,
                                  xs: null,
                                },
                                imageSize: {
                                  lg: lgSize,
                                  md: mdSize,
                                  sm: smSize,
                                  xs: xsSize,
                                },
                                showUploadImages: "flex",
                                adSpaceOptions: dl.changes.newAd.adSpaceOptions,
                              };
                              // alert(ad.name)
                              // alert(JSON.stringify(ad.urls))
                              dl.changes.newAdMode = "edit";
                              dl.changes.selectedAdId =
                                dl.changes.ads[index]._id;

                              dl.functions.modalsPlugin.openModal("addNewAd");
                            }}
                            onClickActive={(val) => {
                              // alert(JSON.stringify(dl.changes.ads[index]))

                              dl.functions.activateAd(
                                dl.changes.ads[index]._id
                              );
                            }}
                            onClickDisabled={(val) => {}}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  id="t18_1382_255"
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
                    total={dl.changes.adsPagination.total}
                    active={dl.changes.adsPagination.active}
                    onChange={(val) => {
                      dl.functions.getAds("8", val);
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
export default Ads_1;
