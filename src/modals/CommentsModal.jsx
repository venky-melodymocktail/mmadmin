import React, { useEffect } from "react";
import dl from "../datalayer/state";
import Modal from "@mui/material/Modal";
import { observer } from "mobx-react";
import OtpInput from "react-otp-input";
import Lottie from "react-lottie";
import ReCAPTCHA from "react-google-recaptcha";

import { useState } from "react";
import MaterialSwitch from "../components/main/MaterialSwitch.jsx";
import MaterialSelect from "../components/main/MaterialSelect.jsx";
import ReactDraft from "../components/main/ReactDraft.jsx";
import MaterialMenu from "../components/main/MaterialMenu.jsx";
import MMPagination from "../components/main/MMPagination.jsx";
import MMFilter from "../components/main/MMFilter.jsx";
import MaterialDate from "../components/main/MaterialDate.jsx";
import MaterialAutoComplete from "../components/main/MaterialAutoComplete.jsx";
import MaterialRating from "../components/main/MaterialRating.jsx";

import AdminCommentRow from "../components/AdminCommentRow.jsx";

const CommentsModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(dl.modalsStatus["CommentsModal"]);
  useEffect(() => {
    if (!dl.modalsStatus["CommentsModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["CommentsModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["CommentsModal"] = false;
      setAnim("");
      setShowModal(false);
    }, 0);
  };

  return (
    <Modal
      className={anim}
      open={showModal}
      disableAutoFocus={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => {
        closeModal();
      }}
    >
      <div
        className="popupModal"
        style={{
          position: "absolute",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_957_24"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingBottom: 5,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_950_752"
            style={{
              width: 1204,
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
              id="t18_950_753"
              style={{
                height: 50,
                width: 1164,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "rgba(248,246,246,1.00)",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
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
                id="t18_950_754"
                style={{
                  width: 1204,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                }}
              >
                <div
                  id="t18_950_755"
                  style={{
                    width: 402,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 30,
                  }}
                >
                  <span
                    id="t18_950_756"
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
                    Comment
                  </span>
                </div>

                <div
                  id="t18_950_757"
                  style={{
                    width: 187,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 30,
                    marginRight: 30,
                  }}
                >
                  <span
                    id="t18_950_758"
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
                    Name of user
                  </span>
                </div>

                <div
                  id="t18_950_759"
                  style={{
                    width: 85,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 30,
                    marginRight: 30,
                  }}
                >
                  <span
                    id="t18_950_760"
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
                    Date
                  </span>
                </div>

                <div
                  id="t18_950_761"
                  style={{
                    width: 82,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 30,
                    marginRight: 30,
                  }}
                >
                  <span
                    id="t18_950_762"
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
                  id="t18_950_763"
                  style={{
                    width: 63,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 30,
                    marginRight: 30,
                  }}
                >
                  <span
                    id="t18_950_764"
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
                    Status
                  </span>
                </div>

                <div
                  id="t18_1004_195"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    borderWidth: 0,
                    marginLeft: 30,
                    marginRight: 0,
                  }}
                ></div>
              </div>
            </div>

            <div
              id="t18_950_765"
              style={{
                height: 535,
                width: 1204,
                flexDirection: "column",
                alignItems: "center",
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
                {dl.changes.commentList.map((item, index) => {
                  return (
                    <div>
                      <AdminCommentRow
                        {...item}
                        {...dl.changes.commentList}
                        onActivate={(val) => {
                          var currentPath = dl.functions.common.getLastPath();

                          if (currentPath == "blogs") {
                            var body = {
                              id: dl.changes.commentList[index]._id,
                              status: "active",
                            };
                            dl.functions.updateBlogComments(body);
                          }

                          if (currentPath == "visaquestions") {
                            var body = {
                              visaQuestionCommentId:
                                dl.changes.commentList[index]._id,
                              status: "active",
                            };
                            dl.functions.updateVisaQuestionComment(body);
                          }
                        }}
                        onDisable={(val) => {
                          var currentPath = dl.functions.common.getLastPath();

                          if (currentPath == "blogs") {
                            var body = {
                              id: dl.changes.commentList[index]._id,
                              status: "inactive",
                            };
                            dl.functions.updateBlogComments(body);
                          }

                          if (currentPath == "visaquestions") {
                            var body = {
                              visaQuestionCommentId:
                                dl.changes.commentList[index]._id,
                              status: "inactive",
                            };
                            dl.functions.updateVisaQuestionComment(body);
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              id="t18_950_808"
              style={{
                height: 45,
                width: 1172,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "rgba(248,246,246,1.00)",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                paddingLeft: 15,
                paddingRight: 17,
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_950_809"
                style={{
                  height: 19,
                  width: 308,
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
                    id="t18_950_810"
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

                <MMPagination
                  total={dl.changes.paginationState.total}
                  active={dl.changes.paginationState.active}
                  onChange={(val) => {
                    dl.functions.getBlogComments(
                      dl.changes.commentList[0].blogId,
                      "5",
                      val,
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default CommentsModal;
