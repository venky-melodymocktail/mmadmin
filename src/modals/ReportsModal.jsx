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

import AdminReportRow from "../components/AdminReportRow.jsx";

const ReportsModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(dl.modalsStatus["ReportsModal"]);
  useEffect(() => {
    if (!dl.modalsStatus["ReportsModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["ReportsModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["ReportsModal"] = false;
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
          id="t18_1011_436"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingBottom: 10,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_1004_144"
            style={{
              height: 670,
              width: 1204,
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
              id="t18_1004_145"
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
                id="t18_1004_146"
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
                  id="t18_1004_147"
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
                    id="t18_1004_148"
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
                      marginRight: 20,
                    }}
                  >
                    <span
                      id="t18_1004_149"
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
                      Reason
                    </span>
                  </div>

                  <div
                    id="t18_1004_150"
                    style={{
                      width: 187,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <span
                      id="t18_1004_151"
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
                      Reported by
                    </span>
                  </div>

                  <div
                    id="t18_1004_152"
                    style={{
                      width: 85,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <span
                      id="t18_1004_153"
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
                    id="t18_1004_154"
                    style={{
                      width: 220,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <span
                      id="t18_1004_155"
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
                      Email
                    </span>
                  </div>

                  <div
                    id="t18_1004_156"
                    style={{
                      width: 110,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 20,
                      marginRight: 0,
                    }}
                  >
                    <span
                      id="t18_1004_157"
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
                      Phone
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_1004_158"
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
                  {dl.changes.reportsList.map((item, index) => {
                    return (
                      <div>
                        <AdminReportRow {...item} {...dl.changes.reportsList} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                id="t18_1004_176"
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
                <MMPagination
                  total={dl.changes.reportPaginationState.total}
                  active={dl.changes.reportPaginationState.active}
                  onChange={(val) => {
                    var id = dl.changes.reportedObjectId;
                    dl.functions.getReports(id, "6", val);
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
export default ReportsModal;
