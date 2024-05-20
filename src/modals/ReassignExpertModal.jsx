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

const ReassignExpertModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["ReassignExpertModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["ReassignExpertModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["ReassignExpertModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["ReassignExpertModal"] = false;
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
          id="t18_957_30"
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
            id="t18_950_1234"
            style={{
              height: 372,
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
              id="t18_950_1235"
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
                id="t18_950_1236"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 36.5,
                }}
              >
                <div
                  id="t18_950_1237"
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
                    id="t18_950_1238"
                    style={{
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
                      marginTop: 0,
                    }}
                  >
                    <span
                      id="t18_950_1239"
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
                      Reassign expert
                    </span>
                  </div>

                  <div
                    id="t18_950_1240"
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      borderWidth: 0,
                      marginBottom: 0,
                    }}
                  ></div>
                </div>

                <div
                  id="t18_950_1244"
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
                    id="t18_950_1245"
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
                      id="t18_950_1246"
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
                      Select expert:
                    </span>
                  </div>

                  <select
                    name="cars"
                    id="t18_950_1247"
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

                      for (
                        var i = 0;
                        i < dl.changes.expertDetailedList.length;
                        i++
                      ) {
                        if (dl.changes.expertDetailedList[i].name == val) {
                          dl.changes.expertId =
                            dl.changes.expertDetailedList[i].id;
                        }
                      }
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.expertNameList) &&
                      dl.changes.expertNameList.map((item, index) => {
                        return (
                          <option value={item} selected={item == undefined}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div
                id="t18_950_1251"
                style={{
                  width: 438,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingLeft: 10,
                  paddingRight: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 36.5,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_950_1252"
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
                      id: dl.changes.bookingId,
                      expertId: dl.changes.expertId,
                    };

                    dl.functions.updateBooking(body);
                  }}
                >
                  <span
                    id="t18_950_1253"
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
export default ReassignExpertModal;
