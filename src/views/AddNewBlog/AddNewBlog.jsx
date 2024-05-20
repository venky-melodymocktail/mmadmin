import { observer } from 'mobx-react'
import React, { useEffect, useMemo, useState } from "react";
import Editor from '../../components/lexialComponents/Editor'

import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import PlaygroundNodes from '../../components/lexialComponents/nodes/PlaygroundNodes.ts';
import PlaygroundEditorTheme from "../../components/lexialComponents/themes/PlaygroundEditorTheme.ts";
import {SharedHistoryContext} from "../../components/lexialComponents/context/SharedHistoryContext.tsx"
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $insertNodes } from "lexical";


///
// old imports 
import dl from '../../datalayer/state.js';




const initialConfig = {
    // editorState: isCollab
    //   ? null
    //   : emptyEditor
    //   ? undefined
    //   : prepopulatedRichText,
    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };


  const HtmlPlugin = ( {initialHtml, onHtmlChanged} ) => {
    const [editor] = useLexicalComposerContext();

    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (!initialHtml || !isFirstRender) return;

        setIsFirstRender(false);

        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(initialHtml, "text/html");
            const nodes = $generateNodesFromDOM(editor, dom);
            $insertNodes(nodes);
        });
    }, []);

    return (
        <OnChangePlugin
            onChange={(editorState) => {
                editorState.read(() => {
                    onHtmlChanged($generateHtmlFromNodes(editor));
                });
            }}
        />
    );
};

// const [editor] = useLexicalComposerContext();

const AddNewBlog = observer(() => {
    
//   return (
//     <div style={{backgroundColor:"rgba(0,0,0,.1)", minHeight:"100vh", paddingTop:"30px"}}>
    // <LexicalComposer initialConfig={initialConfig}>
    //   <SharedHistoryContext>
        
    //     <div className="editor-shell">
    //           <Editor />
    //         </div>
    //     <HtmlPlugin
    //         onHtmlChanged={(html) => console.log(html)}
    //     // initialHtml="<h1>Test</h1><p>Lorem ipsum dolor sit amet</p>"
    //     />
    //     {/* <OnChangePlugin
    //         onChange={(editorState) => {
    //             editorState.read(() => {
    //                 onHtmlChanged($generateHtmlFromNodes(editor));
    //                 console.log($generateHtmlFromNodes(editor));
    //             });
    //         }}
    //     /> */}
    //   </SharedHistoryContext>
    // </LexicalComposer>
//     </div>
//   )

  return(
    <div
        className="popupModal"
        style={{
        //   position: "absolute",

        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%, -50%)",

        //   height: "90vh",

          backgroundColor: "rgba(248,246,246,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_492_137"
          style={{
            // height: 952,
            // width: 1283,
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 30,
            paddingTop: 21,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_492_138"
            style={{
            //   width: 1223,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 0.5,
            }}
          >
            <div
              id="t18_492_139"
              style={{
                // width: 1223,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 14,
              }}
            >
              <div
                id="t18_492_140"
                style={{
                  height: 51,
                //   width: 1223,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: 10,
                  paddingBottom: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  borderColor: "rgba(202,202,202,1)",
                  borderBottomWidth: 1,
                  borderStyle: "solid",
                  marginTop: 0,
                  marginBottom: 14,
                }}
              >
                <span
                  id="t18_492_141"
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
                  Add blog
                </span>
              </div>

              <div
                id="t18_492_142"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 14,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_492_143"
                  style={{
                    width: 455,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 17.5,
                  }}
                >
                  <span
                    id="t18_492_144"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 20,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "24.204544067382812px",
                      textAlign: "left",
                    }}
                  >
                    Add title & category
                  </span>
                </div>

                <div
                  id="t18_492_145"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 17.5,
                    marginRight: 0,
                  }}
                >
                  <span
                    id="t18_492_146"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 20,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "24.204544067382812px",
                      textAlign: "left",
                    }}
                  >
                    Add content
                  </span>
                </div>
              </div>
            </div>

            <div
              id="t18_492_147"
              style={{
                // width: 1223,
                backgroundColor: "rgba(255,255,255,1.00)",
                flexDirection: "row",
                // alignItems: "flex-end",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 14,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_492_148"
                style={{
                  // height: 648,
                  width: 399,
                  backgroundColor: "rgba(255,255,255,1.00)",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: 20,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginLeft: 0,
                  paddingRight:20,
                  marginRight:20,
                  borderWidth: 0,
                  borderRightWidth: "2px",
                  borderColor:"gray",
                  borderRightStyle: "solid",
                }}
              >
                <div
                  id="t18_492_149"
                  style={{
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 7.5,
                  }}
                >
                  <div
                    id="t18_492_150"
                    style={{
                      width: 326,
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
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_492_151"
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
                      Add title
                    </span>
                  </div>

                  <input
                    id="t18_492_152"
                    placeholder="Enter Title"
                    value={dl.changes.blog.title}
                    style={{
                      height: 59,
                      width: 306,
                      backgroundColor: "rgba(248,246,246,1.00)",
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

                      dl.changes.blog.title = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_492_154"
                  style={{
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 7.5,
                    marginBottom: 7.5,
                  }}
                >
                  <div
                    id="t18_492_155"
                    style={{
                      width: 326,
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
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_492_156"
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

                      dl.changes.blog.blogType = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.tsCategories) &&
                      dl.changes.tsCategories.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.blog.blogType}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div
                  id="t18_492_160"
                  style={{
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 7.5,
                    marginBottom: 7.5,
                  }}
                >
                  <span
                    id="t18_492_161"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5.5,
                    }}
                  >
                    Type
                  </span>

                  <select
                    name="cars"
                    id="t18_492_162"
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
                      marginTop: 5.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.blog.travelType = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.tsType) &&
                      dl.changes.tsType.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.blog.travelType}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div
                  id="t18_492_165"
                  style={{
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 7.5,
                    marginBottom: 7.5,
                  }}
                >
                  <div
                    id="t18_492_166"
                    style={{
                      width: 326,
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
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_492_167"
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
                      Destination
                    </span>
                  </div>

                  <select
                    name="cars"
                    id="t18_492_168"
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

                      dl.changes.blog.destination = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.tsDestinations) &&
                      dl.changes.tsDestinations.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.blog.destination}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div
                  id="t18_898_7734"
                  style={{
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 7.5,
                    marginBottom: 20,
                  }}
                >
                  <span
                    id="t18_898_7735"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5.5,
                    }}
                  >
                    Display Image
                  </span>

                  <input
                    id="t18_898_7736"
                    style={{
                      height: 40,
                      width: 326,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 5.5,
                      marginBottom: 0,
                      cursor: "pointer",
                      fontFamily: "Inter",
                      fontSize: 13,
                      color: "rgba(207,206,206,1)",
                      fontWeight: 400,
                      textAlign: "center",
                    }}
                    onChange={(val) => {
                      val = val.target.files;

                      const run = async () => {
                        dl.changes.imageData = {};
                        if (val[0]) {
                          dl.changes.imageData = val[0];
                          // alert(dl.changes.imageData)
                          dl.changes.blog.image = {
                            url: URL.createObjectURL(val[0])
                          }
                        }
                      };

                      run();
                    }}
                    type="file"
                    multiple
                  ></input>
                  {
                    dl.changes.imageData || dl.changes.blog.image.url.length > 0
                    ?
                    <img
                      style={{
                        height: "auto",
                        width: 326,
                        marginBottom:30
                      }}
                      src={dl.changes.blog.image.url}
                    />
                    :
                    null
                  }
                </div>
              </div>

                    
              <LexicalComposer initialConfig={initialConfig}>
                <SharedHistoryContext>
                    
                    <div className="editor-shell">
                        <Editor />
                        </div>
                    <HtmlPlugin
                        onHtmlChanged={(html) => {
                            dl.changes.blog.description = {
                                "html" : html
                              };
                              console.log(html);
                        }}
                        
                    initialHtml= {dl.changes.blog.description.html}
                    />
                </SharedHistoryContext>
            </LexicalComposer>
                
              
             
            </div>
          </div>

          <div
            id="t18_492_172"
            style={{
              height: 105,
              width: 1283,
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
              marginTop: 0.5,
              marginBottom: 0,
            }}
          >
            <div
              id="t18_492_173"
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
                dl.functions.viewsPlugin.showView("blogs");
                        var currentPath = dl.functions.common.getLastPath();
                        dl.functions.onLoadFunctions[currentPath]();
                // dl.functions.modalsPlugin.closeModal("addNewBlog");
              }}
            >
              <span
                id="t18_492_174"
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
              id="t18_492_175"
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
                  var blog = dl.changes.blog;
                  var res;
                  if (dl.changes.imageData instanceof File) {
                    dl.functions.modalsPlugin.openModal("loading");
                    res = await dl.functions.common.neutrodev.generateAndUpload(
                      dl.changes.imageData,
                      false,
                      "OdocRewT1nf/GhB3RCq1Xg==",
                    );
                    dl.changes.blog.image = res;
                    dl.functions.modalsPlugin.closeModal("loading");
                  }
                  // alert(dl.changes.blog.image )
                  if (blog.updating) {
                    var body = {
                      id: blog.id,
                      blogType: blog.blogType,
                      title: blog.title,
                      description: blog.description,
                      travelType: blog.travelType,
                      destination: blog.destination,
                      image: blog.image ? blog.image : {url:''},
                    };
                    var res = await dl.functions.updateBlogs(body);
                    if(res.status == 200) {
                      // dl.functions.modalsPlugin.closeModal('addNewBlog')
                      dl.functions.viewsPlugin.showView("blogs");
                        var currentPath = dl.functions.common.getLastPath();
                        dl.functions.onLoadFunctions[currentPath]();

                      dl.changes.blog = {
                        blogType: "select one",
                        title: "",
                        description: {
                          draft: {
                            string: " ",
                          },
                          html: {
                            html: "",
                          },
                        },
                        image: {},
                        travelType: "select one",
                        destination: "select one",
                        status: "",
                      };

                      var res = await dl.functions.getBlogs(
                        "5",
                        dl.changes.paginationState.active,
                      );
                    }
                    // dl.functions.modalsPlugin.closeModal("addNewBlog");
                  } else {
                    var res = await dl.functions.createBlogs(blog);
                    // alert(JSON.stringify(res))
                    if (res.status == 200) {
                      // alert("blog created")
                      // dl.functions.modalsPlugin.openModal('addNewBlog')
                      // dl.functions.modalsPlugin.closeModal('addNewBlog')
                      dl.functions.viewsPlugin.showView("blogs");
                        var currentPath = dl.functions.common.getLastPath();
                        dl.functions.onLoadFunctions[currentPath]();

                        

                      dl.changes.blog = {
                        blogType: "",
                        title: "",
                        description: {
                          draft: {
                            string: " ",
                          },
                          html: {
                            html: "",
                          },
                        },
                        image: {},
                        travelType: "",
                        destination: "",
                        status: "",
                      };
                      var res = await dl.functions.getBlogs(
                        "5",
                        dl.changes.paginationState.active,
                      );
                      // if(res.status == 200){
                        
                      // }
                    }
                    // dl.functions.modalsPlugin.closeModal("addNewBlog");
                  }
                };

                run();
              }}
            >
              <span
                id="t18_492_176"
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
  )
})

export default AddNewBlog