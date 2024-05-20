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

import MmAdminBlogRow from "../../components/MmAdminBlogRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";

const Blogs_1 = observer(() => {
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_493_287");
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
        backgroundColor: "rgba(248,246,246,1.00)",
      }}
    >
      <div
        id="t18_493_287"
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
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div
          id="t18_493_288"
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
            id="t18_2093_2"
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
                id="t18_2093_3"
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
              id="t18_2093_4"
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
            id="t18_493_292"
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
              id="t18_493_314"
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
                id="t18_493_316"
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
                  id="t18_493_317"
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
                  id="t18_1118_9"
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
                    id="t18_1118_10"
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
                      id="t18_1118_11"
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
                        id="t18_1118_17"
                        style={{
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
                          marginLeft: 0,
                          marginRight: 10,
                        }}
                      >
                        <span
                          id="t18_1118_12"
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
                          Blogs
                        </span>
                      </div>

                      <div
                        id="t18_1118_13"
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
                          id="t18_1118_14"
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
                      id="t18_1118_18"
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
                        id="t18_1118_15"
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
                id="t18_493_318"
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
                  marginTop: 10,
                  marginBottom: 10,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  dl.changes.blog = {
                    blogType: "select one",
                    title: "",
                    description: {
                      draft: {
                        string: " ",
                      },
                      html: "",
                    },
                    image: {},
                    travelType: "select one",
                    destination: "select one",
                    status: "",
                  };
                  dl.functions.viewsPlugin.showView("addNewBlog");
                  // dl.functions.modalsPlugin.openModal("addNewBlog");
                }}
              >
                <span
                  id="t18_493_319"
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

              <div
                id="t18_980_2"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
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
                  id="t18_980_3"
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
                    id="t18_493_320"
                    style={{
                      width: 1184,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 1.5,
                    }}
                  >
                    <div
                      id="t18_493_321"
                      style={{
                        width: 221,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 35,
                      }}
                    >
                      <span
                        id="t18_493_322"
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
                      id="t18_493_323"
                      style={{
                        width: 136,
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
                        id="t18_493_324"
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
                      id="t18_493_325"
                      style={{
                        width: 85,
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
                        id="t18_493_326"
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
                      id="t18_493_327"
                      style={{
                        width: 82,
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
                        id="t18_493_328"
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
                      id="t18_493_329"
                      style={{
                        width: 63,
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
                        id="t18_493_330"
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
                      id="t18_493_331"
                      style={{
                        width: 20,
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
                        id="t18_493_332"
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
                        Pin
                      </span>
                    </div>

                    <div
                      id="t18_493_333"
                      style={{
                        width: 57,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginLeft: 35,
                        marginRight: 0,
                      }}
                    >
                      <div
                        id="t18_493_334"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                        }}
                      >
                        <span
                          id="t18_493_335"
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
                          Is pinned
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="t18_493_336"
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
                      marginTop: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    <div
                      id="t18_721_52"
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
                        {dl.changes.bloglist.map((item, index) => {
                          return (
                            <div>
                              <MmAdminBlogRow
                                {...item}
                                {...dl.changes.bloglist}
                                onActivate={(val) => {
                                  var run = async () => {
                                    var info = dl.changes.bloglist[index];
                                    // alert(JSON.stringify(info))
                                    var body = {
                                      id: info._id,
                                      status: "active",
                                    };
                                    var res =
                                      await dl.functions.updateBlogs(body);
                                    if (res.status == 200) {
                                      dl.functions.getBlogs(
                                        "5",
                                        dl.changes.paginationState.active,
                                      );
                                      // var currentPath = dl.functions.common.getLastPath()
                                      // dl.functions.onLoadFunctions[currentPath]()
                                    }
                                  };

                                  run();
                                }}
                                onDisable={(val) => {
                                  var run = async () => {
                                    var info = dl.changes.bloglist[index];
                                    // alert(JSON.stringify(info))
                                    var body = {
                                      id: info._id,
                                      status: "inactive",
                                    };
                                    var res =
                                      await dl.functions.updateBlogs(body);
                                    if (res.status == 200) {
                                      dl.functions.getBlogs(
                                        "5",
                                        dl.changes.paginationState.active,
                                      );
                                      // var currentPath = dl.functions.common.getLastPath()
                                      // dl.functions.onLoadFunctions[currentPath]()
                                    }
                                  };

                                  run();
                                }}
                                onPin={(val) => {
                                  var run = async () => {
                                    var info = dl.changes.bloglist[index];
                                    // alert(JSON.stringify(info))
                                    var body = {
                                      id: info._id,
                                      pinned: true,
                                    };
                                    var res =
                                      await dl.functions.updateBlogs(body);
                                    if (res.status == 200) {
                                      dl.functions.getBlogs(
                                        "5",
                                        dl.changes.paginationState.active,
                                      );

                                      // var currentPath = dl.functions.common.getLastPath()
                                      // dl.functions.onLoadFunctions[currentPath]()
                                    }
                                  };

                                  run();
                                }}
                                onUnpin={(val) => {
                                  var run = async () => {
                                    var info = dl.changes.bloglist[index];
                                    // alert(JSON.stringify(info))
                                    var body = {
                                      id: info._id,
                                      pinned: false,
                                    };
                                    var res =
                                      await dl.functions.updateBlogs(body);
                                    if (res.status == 200) {
                                      dl.functions.getBlogs(
                                        "5",
                                        dl.changes.paginationState.active,
                                      );
                                      // var currentPath = dl.functions.common.getLastPath()
                                      // dl.functions.onLoadFunctions[currentPath]()
                                    }
                                  };

                                  run();
                                }}
                                onChangeMenu={(val) => {
                                  if (val == "View More") {
                                    var id = dl.changes.bloglist[index]._id;
                                    // alert(id)
                                    window.open(
                                      `https://mm-dev-64390b599811daae82a555cf.app.neutrodev.com/blogdetails?blogId=${id}`,
                                    );
                                  } else if (val == "Edit") {
                                    let run = async () => {
                                      var id = dl.changes.bloglist[index]._id;
                                      await dl.functions.getBlogDetail(id);

                                      // dl.functions.modalsPlugin.openModal(
                                      //   "addNewBlog",
                                      // );
                                      dl.functions.viewsPlugin.showView("addNewBlog");
                                    };
                                    run();
                                  } else if (val == "View Comments") {
                                    // var id = dl.changes.bloglist[index]._id
                                    dl.changes.selectedComment =
                                      dl.changes.bloglist[index];
                                    dl.functions.viewsPlugin.showView(
                                      "blogcomments",
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

                    <div
                      id="t18_493_353"
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
                      <MMPagination
                        total={dl.changes.paginationState.total}
                        active={dl.changes.paginationState.active}
                        onChange={(val) => {
                          dl.changes.paginationState.active = val;
                          var page = String(val);
                          dl.functions.getBlogs("5", page);
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
  );
});
export default Blogs_1;
