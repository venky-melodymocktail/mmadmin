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

const AddNewCategoryModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewCategoryModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewCategoryModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewCategoryModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewCategoryModal"] = false;
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
          id="t18_1340_504"
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
            id="t18_1340_505"
            style={{
              height: 325,
              width: 515,
              borderRadius: 20,
              backgroundColor: "rgba(248,246,246,1.00)",
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
            }}
          >
            <div
              id="t18_1340_527"
              style={{
                width: 440,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                display: "flex",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 5,
              }}
            >
              {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/d84713b272920278e13443da941134ff6ae973b8.png" !=
              "" ? (
                <img
                  id="t18_1340_526"
                  style={{
                    height: 13,
                    width: 13,
                    display: "flex",
                    borderWidth: 0,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    dl.functions.modalsPlugin.closeModal("addNewCategory");
                  }}
                  src={
                    "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/d84713b272920278e13443da941134ff6ae973b8.png"
                  }
                ></img>
              ) : (
                <></>
              )}
            </div>

            <div
              id="t18_1340_506"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 5,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_1340_507"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 25,
                }}
              >
                <div
                  id="t18_1340_508"
                  style={{
                    width: 458,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 14.5,
                  }}
                >
                  <div
                    id="t18_1340_509"
                    style={{
                      width: 437,
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
                      id="t18_1340_510"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 24,
                        fontWeight: 600,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "29.045454025268555px",
                        textAlign: "left",
                      }}
                    >
                      Add new category
                    </span>
                  </div>
                </div>

                <div
                  id="t18_1340_515"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 14.5,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1340_516"
                    style={{
                      height: 15,
                      width: 458,
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
                    }}
                  >
                    <span
                      id="t18_1340_517"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 500,
                        color: "rgba(113,113,113,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      Enter category name
                    </span>
                  </div>

                  <input
                    id="t18_1340_518"
                    value={dl.changes.newBlogCategory}
                    style={{
                      height: 47,
                      width: 416,
                      backgroundColor: "rgba(255,255,255,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 23,
                      paddingRight: 19,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      borderColor: "rgba(186,15,23,1)",
                      borderLeftWidth: 6,
                      borderStyle: "solid",
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.newBlogCategory = val;
                    }}
                    type="text"
                  ></input>
                </div>
              </div>

              <div
                id="t18_1340_522"
                style={{
                  width: 438,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingLeft: 10,
                  paddingRight: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 25,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_1340_523"
                  style={{
                    height: 21,
                    width: 97,
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
                    var body = {
                      category: dl.changes.newBlogCategory,
                      status: "active",
                    };
                    var res = dl.functions.createBlogCategory(body);
                    if (res == 200) {
                      dl.functions.modalsPlugin.closeModal("addNewCategory");
                    }
                  }}
                >
                  <span
                    id="t18_1340_524"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "rgba(255,255,255,1)",
                      letterSpacing: 0,
                      lineHeight: "21.784090042114258px",
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
      </div>
    </Modal>
  );
});
export default AddNewCategoryModal;
