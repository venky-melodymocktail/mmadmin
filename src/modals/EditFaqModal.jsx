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

const EditFaqModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(dl.modalsStatus["EditFaqModal"]);
  useEffect(() => {
    if (!dl.modalsStatus["EditFaqModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["EditFaqModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["EditFaqModal"] = false;
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

          height: "90vh",

          backgroundColor: "rgba(255,255,255,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_957_27"
          style={{
            height: 1024,
            width: 797,
            backgroundColor: "rgba(255,255,255,1.00)",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingRight: 5,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_950_1004"
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
              id="t18_950_1005"
              style={{
                height: 584,
                width: 702,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                display: "flex",
                paddingLeft: 40,
                paddingRight: 55,
                paddingTop: 71,
                paddingBottom: 236,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
              }}
            >
              <div
                id="t18_950_1006"
                style={{
                  width: 701,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 22.5,
                }}
              >
                <span
                  id="t18_950_1007"
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
                  Edit
                </span>
              </div>

              <div
                id="t18_950_1008"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 22.5,
                  marginBottom: 22.5,
                }}
              >
                <div
                  id="t18_950_1009"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 13,
                  }}
                >
                  <div
                    id="t18_950_1010"
                    style={{
                      width: 701,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_950_1011"
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

                  <input
                    id="t18_950_1012"
                    value={dl.changes.visafaqDetail.question}
                    style={{
                      height: 89,
                      width: 681,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                      fontFamily: "Inter",
                      fontSize: 15,
                      color: "rgba(0,0,0,1)",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.visafaqDetail.question = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_950_1014"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 13,
                    marginBottom: 13,
                  }}
                >
                  <div
                    id="t18_950_1015"
                    style={{
                      width: 701,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 1,
                    }}
                  >
                    <span
                      id="t18_950_1016"
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
                      Answer
                    </span>
                  </div>

                  <input
                    id="t18_950_1017"
                    value={dl.changes.visafaqDetail.answer}
                    style={{
                      height: 88,
                      width: 681,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 1,
                      marginBottom: 0,
                      cursor: "pointer",
                      fontFamily: "Inter",
                      fontSize: 15,
                      color: "rgba(0,0,0,1)",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.visafaqDetail.answer = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_950_1019"
                  style={{
                    width: 701,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 13,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_950_1020"
                    style={{
                      width: 59,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_950_1021"
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
                      Category
                    </span>
                  </div>

                  <select
                    name="cars"
                    id="t18_950_1022"
                    style={{
                      height: 46,
                      width: 326,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.visafaqDetail.category = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.visaQandACategories) &&
                      dl.changes.visaQandACategories.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.visafaqDetail.category}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div
                id="t18_950_1025"
                style={{
                  width: 701,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 22.5,
                  marginBottom: 0,
                }}
              >
                <span
                  id="t18_950_1026"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(113,113,113,1)",
                    letterSpacing: 0,
                    lineHeight: "18.15340805053711px",
                    textAlign: "left",
                    marginLeft: 0,
                    marginRight: 10.5,
                  }}
                >
                  Active
                </span>

                <MaterialSwitch
                  value={dl.changes.visafaqDetail.status}
                  backgroundColor={"rgba(186,15,23,1.00)"}
                  onChange={(val) => {
                    dl.changes.visafaqDetail.status = val;
                  }}
                />
              </div>
            </div>

            <div
              id="t18_950_1029"
              style={{
                height: 133,
                width: 797,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                id="t18_950_1030"
                style={{
                  height: 20,
                  width: 105,
                  borderRadius: 100,
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
                  borderWidth: 1,
                  borderColor: "rgba(186,15,23,1)",
                  borderStyle: "solid",
                  marginLeft: 0,
                  marginRight: 19.5,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  dl.functions.modalsPlugin.closeModal("editFaq");
                }}
              >
                <span
                  id="t18_950_1031"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "rgba(186,15,23,1)",
                    letterSpacing: 0,
                    lineHeight: "20.573863983154297px",
                    textAlign: "left",
                  }}
                >
                  Cancel
                </span>
              </div>

              <div
                id="t18_950_1032"
                style={{
                  height: 20,
                  width: 105,
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
                  marginLeft: 19.5,
                  marginRight: 0,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  const run = async () => {
                    var body = {
                      id: dl.changes.visafaqDetail._id,
                      question: dl.changes.visafaqDetail.question,
                      answer: dl.changes.visafaqDetail.answer,
                      status:
                        dl.changes.visafaqDetail.status == false
                          ? "inactive"
                          : "active",
                      category: dl.changes.visafaqDetail.category,
                    };

                    var res = await dl.functions.updateVisafaq(body);
                    if (res) {
                      dl.functions.modalsPlugin.closeModal("editFaq");
                    }
                  };
                  run();
                }}
              >
                <span
                  id="t18_950_1033"
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
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default EditFaqModal;
