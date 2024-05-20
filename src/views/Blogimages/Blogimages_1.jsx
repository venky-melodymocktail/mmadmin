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
import MmBlogImages from "../../components/MmBlogImages.jsx";

const Blogimages_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1341_529");
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
        id="t18_1341_529"
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
          id="t18_1119_19"
          style={{
            width: 1440,
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
            id="t18_1119_20"
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
              id="t18_2093_5"
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
                  id="t18_2093_6"
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
                id="t18_2093_7"
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
              id="t18_1119_24"
              style={{
                backgroundColor: "rgba(255,255,255,1.00)",
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
                id="t18_1119_53"
                style={{
                  height: "800px",
                  backgroundColor: "rgba(248,246,246,1.00)",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 60,
                  paddingBottom: 60,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginRight: 0,
                }}
              >
                <div
                  id="t18_1119_183"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 15,
                  }}
                >
                  <div
                    id="t18_1119_54"
                    style={{
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingBottom: 15,
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
                      id="t18_1119_55"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 30,
                        fontWeight: 500,
                        color: "rgba(113,113,113,1)",
                        letterSpacing: 0,
                        lineHeight: "36.30681610107422px",
                        textAlign: "left",
                        marginLeft: 0,
                        marginRight: 250,
                      }}
                    >
                      Blogs
                    </span>

                    <div
                      id="t18_1119_56"
                      style={{
                        height: 52,
                        width: 616,
                        borderRadius: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        paddingLeft: 4,
                        paddingRight: 4,
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 2,
                        borderColor: "rgba(186,15,23,1)",
                        borderStyle: "solid",
                        marginLeft: 250,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1119_57"
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
                        <div
                          id="t18_1119_58"
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 11,
                          }}
                        >
                          <div
                            id="t18_1119_59"
                            style={{
                              width: 170,
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
                              dl.functions.viewsPlugin.showView("blogs");
                            }}
                          >
                            <span
                              id="t18_1119_60"
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
                              Blogs
                            </span>
                          </div>

                          <div
                            id="t18_1119_61"
                            style={{
                              height: 24,
                              width: 170,
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
                              id="t18_1119_62"
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
                              Images
                            </span>
                          </div>
                        </div>

                        <div
                          id="t18_1119_63"
                          style={{
                            height: 24,
                            width: 170,
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
                            marginLeft: 11,
                            marginRight: 0,
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            dl.functions.viewsPlugin.showView("blogcategories");
                            var currentPath = dl.functions.common.getLastPath();
                            dl.functions.onLoadFunctions[currentPath]();
                          }}
                        >
                          <span
                            id="t18_1119_64"
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
                            Categories
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_1119_176"
                    style={{
                      width: 1204,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 10,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_1119_65"
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
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        dl.functions.modalsPlugin.openModal("addNewImage");
                      }}
                    >
                      <span
                        id="t18_1119_66"
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
                  id="t18_1119_67"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 15,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1119_68"
                    style={{
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
                      id="t18_1119_85"
                      style={{
                        height: 607,
                        width: 1204,
                        backgroundColor: "rgba(255,255,255,1.00)",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        borderColor: "rgba(207,206,206,1)",
                        borderTopWidth: 1,
                        borderStyle: "solid",
                      }}
                    >
                      <div
                        id="t18_1119_86"
                        style={{
                          height: 515,
                          width: 1204,
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingTop: 20,
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginTop: 0,
                          marginBottom: 5,
                        }}
                      >
                        <div
                          id="t18_1119_137"
                          style={{
                            height: 515,
                            width: 1204,
                            flexDirection: "row",
                            alignItems: "flex-start",
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
                            {dl.changes.blogImages.map((item, index) => {
                              return (
                                <div>
                                  <MmBlogImages
                                    {...item}
                                    {...dl.changes.blogImages}
                                    onClickCopy={(val) => {
                                      let blogImages = dl.changes.blogImages;
                                      let blogImage = blogImages[index];
                                      // let url = dl.functions.extractUrlFromUrlString(blogImage.url)
                                      // alert(url)
                                      var urlstr = blogImage.url;
                                      var url = urlstr.slice(4, -1);
                                      dl.functions.common.copyToClipboard(url);
                                      window.toast("Link Copied");
                                      // alert('copied!')
                                      // dl.functions.common.copyToClipboard(link)
                                    }}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div
                        id="t18_1119_108"
                        style={{
                          height: 42,
                          width: 1185,
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
                          marginTop: 5,
                          marginBottom: 0,
                        }}
                      >
                        <div
                          id="t18_1119_109"
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "none",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                          }}
                        >
                          {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/999fb0f5e53680ae17b4debb30edd5ea6817a98b.png" !=
                          "" ? (
                            <img
                              id="t18_1119_110"
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
                            id="t18_1119_111"
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
                              id="t18_1119_112"
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
                                id="t18_1119_113"
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
                                id="t18_1119_114"
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
                                id="t18_1119_115"
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
                                id="t18_1119_116"
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
                                id="t18_1119_117"
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
                                id="t18_1119_118"
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
                                id="t18_1119_119"
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
                                id="t18_1119_120"
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
                                id="t18_1119_121"
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
                                id="t18_1119_122"
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
        </div>
      </div>
    </div>
  );
});
export default Blogimages_1;
