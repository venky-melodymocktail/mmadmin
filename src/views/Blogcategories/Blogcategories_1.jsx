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

import MmBlogCategories from "../../components/MmBlogCategories.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Blogcategories_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_1341_530");
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
        id="t18_1341_530"
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
          id="t18_1119_298"
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
            id="t18_1119_299"
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
              id="t18_2093_8"
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
                  id="t18_2093_9"
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
                id="t18_2093_10"
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
              id="t18_1119_303"
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
                id="t18_1119_332"
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
                  id="t18_1119_333"
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
                    id="t18_1119_334"
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
                      id="t18_1119_335"
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
                      id="t18_1119_336"
                      style={{
                        height: 52,
                        width: 624,
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
                        marginLeft: 250,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_1119_337"
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
                          id="t18_1119_338"
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "flex",
                            position: "relative",
                            overflow: "visible",
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 12.5,
                          }}
                        >
                          <div
                            id="t18_1119_339"
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
                              id="t18_1119_340"
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
                            id="t18_1119_341"
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
                              marginLeft: 10,
                              marginRight: 0,
                              cursor: "pointer",
                            }}
                            onClick={(e) => {
                              dl.functions.viewsPlugin.showView("blogimages");
                              dl.functions.onLoadFunctions.blogimages();
                            }}
                          >
                            <span
                              id="t18_1119_342"
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
                              Images
                            </span>
                          </div>
                        </div>

                        <div
                          id="t18_1119_343"
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
                            marginLeft: 12.5,
                            marginRight: 0,
                          }}
                        >
                          <span
                            id="t18_1119_344"
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
                            Categories
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_1119_345"
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
                      id="t18_1119_346"
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
                        dl.changes.newBlogCategory = "";
                        dl.functions.modalsPlugin.openModal("addNewCategory");
                      }}
                    >
                      <span
                        id="t18_1119_347"
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
                  id="t18_1119_348"
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
                    id="t18_1119_349"
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
                      id="t18_1119_350"
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
                        id="t18_1119_351"
                        style={{
                          height: 515,
                          width: 1194,
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingLeft: 10,
                          paddingTop: 20,
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginTop: 0,
                          marginBottom: 5,
                        }}
                      >
                        <div
                          id="t18_1119_352"
                          style={{
                            height: 515,
                            width: 1176,
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
                            {dl.changes.blogCategory.map((item, index) => {
                              return (
                                <div>
                                  <MmBlogCategories
                                    {...item}
                                    {...dl.changes.blogCategory}
                                    onDelete={(val) => {
                                      var id =
                                        dl.changes.blogCategory[index]._id;

                                      var body = {
                                        id: id,
                                        status: "inactive",
                                      };

                                      dl.functions.updateBlogCategory(body);
                                    }}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div
                        id="t18_1119_409"
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
                          id="t18_1119_410"
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
                              id="t18_1119_411"
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
                            id="t18_1119_412"
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
                              id="t18_1119_413"
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
                                id="t18_1119_414"
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
                                id="t18_1119_415"
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
                                id="t18_1119_416"
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
                                id="t18_1119_417"
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
                                id="t18_1119_418"
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
                                id="t18_1119_419"
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
                                id="t18_1119_420"
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
                                id="t18_1119_421"
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
                                id="t18_1119_422"
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
                                id="t18_1119_423"
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
export default Blogcategories_1;
