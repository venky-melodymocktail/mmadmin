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

import MmAdminUserRow from "../../components/MmAdminUserRow.jsx";
import AdminServiceSelector from "../../components/AdminServiceSelector.jsx";
import Switch from '@mui/material/Switch';

const Webinar = observer(() => {
  useEffect(() => {
    
      
      var run = async() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
            var res = await fetch("https://webinar-backend.melodymocktail.com/webinars/webinar_names/", requestOptions)
            // console.log(res)
            if(res.status==200){
                var response = await res.json()
                dl.changes.webinarlists = response
                console.log(JSON.stringify(dl.changes.webinarlists))
            }
        } catch (error) {
            alert(error)
        }
        
        
      }

      run()
      
        // .then((response) => response.text())
        // .then((result) => console.log(result))
        // .catch((error) => console.error(error));

    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      const scale = bodyWidth / 1440;
      const element = document.getElementById("t18_243_3488");
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

  const getWebinarUser = async() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
      
    try {
        var res = await fetch(`https://webinar-backend.melodymocktail.com/webinars/attendes?webinar_name=${dl.changes.selectedWebinar}`, requestOptions)
        if(res.status==200){
            var response = await res.json()
            dl.changes.webinarUserData = response
            dl.changes.noOfAttendees = response.length
            // console.log(JSON.stringify(dl.changes.webinarUserData))
        }
    } catch (error) {
        alert(error)
    }
    

        
}

const sendMail = async() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "webinar_name": dl.changes.selectedWebinar,
    "registration_link": dl.changes.registrationLink
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    try {
        dl.functions.modalsPlugin.openModal("loading");
        var res = await fetch("https://webinar-backend.melodymocktail.com/webinars/send_invitation/", requestOptions)
        if(res.status==200){
            var response = await res.json()
            // dl.changes.webinarUserData = response
            dl.functions.modalsPlugin.closeModal("loading");
            getWebinarUser()
            alert("Invitation sent")
            console.log(JSON.stringify(response))
        }
    } catch (error) {
        alert(error)
    }

    
    
}


  const toggleAutosend = async(val) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var toggle = null
    if(val==true){
      toggle = "1"
    }
    else{
      toggle = "0"
    }
    
    const raw = JSON.stringify({
      "webinar_name": dl.changes.selectedWebinar,
      "registration_link": dl.changes.registrationLink,
      "toggle": toggle
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {

      if(dl.changes.selectedWebinar.length<1){
        alert("please select a webinar")
        return
      }

      if(dl.changes.registrationLink.length<1){
        alert("please put a link")
        return
      }
      dl.functions.modalsPlugin.openModal("loading");
      var res = await fetch("https://webinar-backend.melodymocktail.com/webinars/webinar_automate/", requestOptions)
      if(res.status==200){
        
        var response = await res.json()

        dl.functions.modalsPlugin.closeModal("loading");
        // dl.changes.webinarUserData = response
        
        // getWebinarUser()
        if(response.status){
            alert(response.status)
          getWebinarUser()
          dl.changes.automationToggle = val
        }
        
        console.log(JSON.stringify(response))
      }
    } catch (error) {
      console.log(error)
    }
    
  }



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
        id="t18_243_3488"
        style={{
          width: 1440,
          flexDirection: "column",
          alignItems: "flex-start",
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
          id="t18_243_3487"
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
              id="t18_243_3485"
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
            id="t18_243_3486"
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
          id="t18_493_286"
          style={{
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
            id="t18_493_239"
            style={{
              height: "800px",
              width: 1245,
              backgroundColor: "rgba(248,246,246,1.00)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 60,
              paddingBottom: 60,
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginRight: 0,
            }}
          >
            <div
              id="t18_493_240"
              style={{
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
                id="t18_493_241"
                style={{
                  height: 36,
                  width: 1201,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingBottom: 22,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  borderColor: "rgba(207,206,206,1)",
                  borderBottomWidth: 1,
                  borderStyle: "solid",
                  marginTop: 0,
                  marginBottom: 26,
                }}
              >
                <span
                  id="t18_493_242"
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
                  Webinar
                </span>
              </div>

              <div style={{
                width:"100%",
                display:"flex",
                flexDirection:"row",
                alignItems:"center"
              }}>
              <select
                    name="cars"
                    id="t18_492_157"
                    style={{
                      height: 46,
                      width: 306,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.selectedWebinar = val;
                      for(var i=0; i<dl.changes.webinarlists.length; i++){
                        if(dl.changes.webinarlists[i].name==dl.changes.selectedWebinar){
                          dl.changes.automationToggle = dl.changes.webinarlists[i].automate
                          dl.changes.registrationLink = dl.changes.webinarlists[i].registration_link
                        }
                        
                      }
                      
                      getWebinarUser()
                    }}
                  >
                    <option value="" disabled selected>
                      Select Wabinar Name
                    </option>
                    {Array.isArray(dl.changes.webinarlists) &&
                      dl.changes.webinarlists.map((item, index) => {
                        return (
                          <option
                            key={item.id}
                            value={item.name}
                            selected={item.name == dl.changes.selectedWebinar}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <div>
                    <input
                    onChange={(e)=>{dl.changes.registrationLink = e.target.value}}
                        style={{
                            width:"200px",
                            height:"30px",
                            marginLeft:20
                        }}
                        placeholder="Registration Link"
                        value={dl.changes.registrationLink}
                        
                    />
                  </div>
                  <div>
                    <div onClick={() => {console.log(dl.changes.registrationLink); sendMail()}} style={{
                        width:"150px",
                        height:"30px",
                        marginLeft:20,
                        backgroundColor:"black",
                        color:"white",
                        font:18,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:4,
                        cursor:"pointer"
                    }}>
                        Send Invitation
                    </div>
                  </div>
                  
                  <div>
                    
                  <div style={{
                        width:"250px",
                        height:"30px",
                        marginLeft:20,
                        backgroundColor:"grey",
                        color:"white",
                        font:18,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:4,
                        cursor:"pointer"
                    }}>
                        Total Attendees: {dl.changes.noOfAttendees}
                    </div>
                  </div>

                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    marginLeft:10
                  }}>
                    <div style={{
                      color:"black",
                      fontSize:16,
                      fontWeight:"400",
                      marginRight:5
                    }}>Auto Enable:</div>
                    <Switch checked={dl.changes.automationToggle}  defaultChecked={false}  onChange={(val)=>{console.log(val.target.checked); toggleAutosend(val.target.checked)}}/>
                  </div>
              </div>

              <div
                id="t18_493_243"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 26,
                  marginBottom: 0,
                }}
              >
                {/* <div
                  id="t18_493_244"
                  style={{
                    height: 32,
                    width: 1204,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
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
                    id="t18_493_245"
                    style={{
                      width: 222,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_246"
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
                      Name
                    </span>
                  </div>

                  <div
                    id="t18_493_247"
                    style={{
                      width: 193,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_248"
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

                  <div
                    id="t18_493_249"
                    style={{
                      width: 233,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_250"
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
                      Email
                    </span>
                  </div>

                  <div
                    id="t18_493_251"
                    style={{
                      width: 82,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 41,
                    }}
                  >
                    <span
                      id="t18_493_252"
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
                    id="t18_493_253"
                    style={{
                      width: 63,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 41,
                      marginRight: 0,
                    }}
                  >
                    <span
                      id="t18_493_254"
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
                </div> */}

                <div
                  id="t18_493_255"
                  style={{
                    height: 607,
                    width: 1204,
                    backgroundColor: "rgba(255,255,255,1.00)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_493_256"
                    style={{
                      height: 520,
                      width: 1204,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 13.5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                        {
                            dl.changes.webinarUserData.length<1 ?
                            <div style={{display:"flex", alignItems:"center", justifyContent:"center", }}>
                                <div style={{fontSize:40}}>No Data Available</div>
                            </div>
                            
                            :
                            null
                        }
                      {dl.changes.webinarUserData.map((item, index) => {
                        return (
                          <div style={{
                            width:"100%",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '20px',
                                    background: '#fff',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    width:"90%"
                                }}
                                >
                                <div style={{ margin: '0 10px', width:"200px" }}>
                                    <strong>Name:</strong> {item.name}
                                </div>
                                <div style={{ margin: '0 10px', width:"350px" }}>
                                    <strong>Email:</strong> {item.email}
                                </div>
                                <div style={{ margin: '0 10px', width:"200px" }}>
                                    <strong>Phone:</strong> {item.phone}
                                </div>
                                <div style={{ margin: '0 10px' , width:"150px"}}>
                                    <strong>Invitation sent:</strong> {item.invitation_sent? "Yes": "No"}
                                </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* <MMPagination
                    total={dl.changes.paginationState.total}
                    active={dl.changes.paginationState.active}
                    onChange={(val) => {
                      dl.changes.paginationState.active = val;
                      var page = String(val);
                      dl.functions.getUsers("9", page);
                    }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Webinar;
