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

const ActivateConfirmationModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["ActivateConfirmationModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["ActivateConfirmationModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["ActivateConfirmationModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["ActivateConfirmationModal"] = false;
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
          id="t18_1383_502"
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
            id="t18_1382_392"
            style={{
              height: 189,
              width: 432,
              borderRadius: 20,
              backgroundColor: "rgba(248,246,246,1.00)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 39,
              paddingRight: 39,
              paddingTop: 39,
              paddingBottom: 39,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <div
              id="t18_1382_393"
              style={{
                width: 401,
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
                marginBottom: 20,
              }}
            >
              <span
                id="t18_1382_394"
                style={{
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(113,113,113,1)",
                  letterSpacing: 0,
                  lineHeight: "22px",
                  textAlign: "center",
                }}
              >
                Are you sure you want to make the ad active? The already
                assigned ad will be deactivated after you do so
              </span>
            </div>

            <div
              id="t18_1382_395"
              style={{
                width: 383,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_1382_396"
                style={{
                  height: 22,
                  width: 97,
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
                  marginRight: 74.5,
                }}
              >
                <span
                  id="t18_1382_397"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "rgba(197,18,29,1)",
                    letterSpacing: 0,
                    lineHeight: "21.784090042114258px",
                    textAlign: "center",
                  }}
                >
                  Cancel
                </span>
              </div>

              <div
                id="t18_1382_398"
                style={{
                  height: 22,
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
                  marginLeft: 74.5,
                  marginRight: 0,
                }}
              >
                <span
                  id="t18_1382_399"
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
                  Yes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default ActivateConfirmationModal;
