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

const EditPromotionsModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["EditPromotionsModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["EditPromotionsModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["EditPromotionsModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["EditPromotionsModal"] = false;
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

          backgroundColor: "rgba(248,246,246,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_1137_521"
          style={{
            width: 496,
            borderRadius: 20,
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingLeft: 39,
            paddingTop: 20,
            paddingBottom: 20,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_1137_522"
            style={{
              width: 457,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 17.5,
            }}
          >
            <div
              id="t18_1137_523"
              style={{
                height: 24,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
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
                id="t18_1137_524"
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
                {dl.changes.promotionTitle}
              </span>
            </div>

            <div
              id="t18_1137_525"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                borderWidth: 0,
                marginBottom: 0,
              }}
            ></div>
          </div>

          <div
            id="t18_2146_16"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 17.5,
              marginBottom: 17.5,
            }}
          >
            <div
              id="t18_1137_529"
              style={{
                width: 330,
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
              <div
                id="t18_1137_530"
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
                  id="t18_1137_531"
                  style={{
                    height: 15,
                    width: 173,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
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
                    id="t18_1137_532"
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
                    Promoted from:
                  </span>
                </div>

                <MaterialDate
                  value={dl.changes.promotiondata.promotionFrom}
                  minDate={dl.changes.todaysDate}
                  style={{
                    height: 47,
                    width: 315,
                    backgroundColor: "rgba(255,255,255,1.00)",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 15,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    borderColor: "rgba(197,18,29,1)",
                    borderLeftWidth: 3,
                    borderStyle: "solid",
                    marginBottom: 0,
                    cursor: "pointer",
                  }}
                  onChange={(val) => {
                    var date = new Date(val);
                    dl.changes.promotiondata.promotionFrom = date;
                  }}
                />
              </div>
            </div>
          </div>

          <div
            id="t18_1137_550"
            style={{
              width: 330,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 17.5,
              marginBottom: 17.5,
            }}
          >
            <div
              id="t18_1137_551"
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
                id="t18_1137_552"
                style={{
                  height: 15,
                  width: 173,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
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
                  id="t18_1137_553"
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
                  Promoted to:
                </span>
              </div>

              <MaterialDate
                value={dl.changes.promotiondata.promotionTo}
                minDate={dl.changes.todaysDate}
                style={{
                  height: 47,
                  width: 315,
                  backgroundColor: "rgba(255,255,255,1.00)",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 15,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  borderColor: "rgba(197,18,29,1)",
                  borderLeftWidth: 3,
                  borderStyle: "solid",
                  marginBottom: 0,
                  cursor: "pointer",
                }}
                onChange={(val) => {
                  var date = new Date(val);
                  dl.changes.promotiondata.promotionTo = date;
                }}
              />
            </div>
          </div>

          <div
            id="t18_1137_542"
            style={{
              width: 330,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 17.5,
              marginBottom: 17.5,
            }}
          >
            <div
              id="t18_1137_543"
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                paddingRight: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginLeft: 0,
                marginRight: 6.5,
              }}
            >
              <span
                id="t18_1137_544"
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
                Active
              </span>
            </div>

            <MaterialSwitch
              value={dl.changes.promotiondata.status}
              backgroundColor={"rgba(186,15,23,1.00)"}
              onChange={(val) => {
                dl.changes.promotiondata.status = val;
              }}
            />
          </div>

          <div
            id="t18_1137_547"
            style={{
              width: 310,
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
              marginTop: 17.5,
              marginBottom: 0,
            }}
          >
            <div
              id="t18_1137_548"
              style={{
                width: 138,
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
                dl.functions.onSavePromotionPopup();
              }}
            >
              <span
                id="t18_1137_549"
                style={{
                  fontFamily: "Inter",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "rgba(255,255,255,1)",
                  letterSpacing: 0,
                  lineHeight: "21.784090042114258px",
                  textAlign: "center",
                }}
              >
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default EditPromotionsModal;
