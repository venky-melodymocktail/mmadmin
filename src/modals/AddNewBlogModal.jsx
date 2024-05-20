import React, { useEffect, useMemo } from "react";
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
import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from "@lexical/react/LexicalPlainTextPlugin";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import Editor from "../components/lexialComponents/Editor.tsx";
// import {SharedHistoryContext} from './context/SharedHistoryContext';
import {SharedHistoryContext} from "../components/lexialComponents/context/SharedHistoryContext.tsx"
// import PlaygroundNodes from './nodes/PlaygroundNodes';
import PlaygroundNodes from '../components/lexialComponents/nodes/PlaygroundNodes.ts';
import PlaygroundEditorTheme from "../components/lexialComponents/themes/PlaygroundEditorTheme.ts";

// Quill.register("modules/imageResize", ImageResize);

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

const exampleTheme = {
  ltr: 'ltr',
  rtl: 'rtl',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
    h6: 'editor-heading-h6',
  },
  list: {
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listItem',
    listitemChecked: 'editor-listItemChecked',
    listitemUnchecked: 'editor-listItemUnchecked',
  },
  hashtag: 'editor-hashtag',
  image: 'editor-image',
  link: 'editor-link',
  text: {
    bold: 'editor-textBold',
    code: 'editor-textCode',
    italic: 'editor-textItalic',
    strikethrough: 'editor-textStrikethrough',
    subscript: 'editor-textSubscript',
    superscript: 'editor-textSuperscript',
    underline: 'editor-textUnderline',
    underlineStrikethrough: 'editor-textUnderlineStrikethrough',
  },
  code: 'editor-code',
  codeHighlight: {
    atrule: 'editor-tokenAttr',
    attr: 'editor-tokenAttr',
    boolean: 'editor-tokenProperty',
    builtin: 'editor-tokenSelector',
    cdata: 'editor-tokenComment',
    char: 'editor-tokenSelector',
    class: 'editor-tokenFunction',
    'class-name': 'editor-tokenFunction',
    comment: 'editor-tokenComment',
    constant: 'editor-tokenProperty',
    deleted: 'editor-tokenProperty',
    doctype: 'editor-tokenComment',
    entity: 'editor-tokenOperator',
    function: 'editor-tokenFunction',
    important: 'editor-tokenVariable',
    inserted: 'editor-tokenSelector',
    keyword: 'editor-tokenAttr',
    namespace: 'editor-tokenVariable',
    number: 'editor-tokenProperty',
    operator: 'editor-tokenOperator',
    prolog: 'editor-tokenComment',
    property: 'editor-tokenProperty',
    punctuation: 'editor-tokenPunctuation',
    regex: 'editor-tokenVariable',
    selector: 'editor-tokenSelector',
    string: 'editor-tokenSelector',
    symbol: 'editor-tokenProperty',
    tag: 'editor-tokenProperty',
    url: 'editor-tokenOperator',
    variable: 'editor-tokenVariable',
  },
};

function MyOnChangePlugin({ onChange }) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext();
  // Wrap our listener in useEffect to handle the teardown and avoid stale references.
  useEffect(() => {
    // most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({editorState}) => {
      // call onChange here to pass the latest state up to the parent.
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

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
// const modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ color: [] }, { background: [] }],
//     [{ script: "sub" }, { script: "super" }],
//     ["blockquote", "code-block"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
//     ["link", "image", "video", "formula"],
//     ["clean"],
//     [{image: imageHandler}]
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
//   // handlers: {
//   //   ,
//   // },
//   imageResize: {
//     parchment: Quill.import("parchment"),
//     modules: ["Resize", "DisplaySize"],
//   },
// };



const AddNewBlogModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewBlogModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewBlogModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewBlogModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewBlogModal"] = false;
      setAnim("");
      setShowModal(false);
    }, 0);
  };


  const CustomContent = useMemo(() => {
    return (
        <ContentEditable style={{
            position: 'relative',
            borderColor: 'grey',
            border: '2px solid red',
            borderRadius: '5px',
            maxWidth: '100%',
            padding: '10px'
        }}/>
    )
}, []);

const CustomPlaceholder = useMemo(() => {
    return (
        <div style={{
            position: 'relative',  color:"black",
        }}>
            Enter some text...
        </div>
    )
}, []);

const lexicalConfig =  {
    namespace: 'My Rich Text Editor',
    onError: (e) => {
        console.log('ERROR:', e)
    }
}

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

          backgroundColor: "rgba(248,246,246,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_492_137"
          style={{
            height: 952,
            width: 1283,
            backgroundColor: "rgba(248,246,246,1.00)",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingLeft: 30,
            paddingTop: 41,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_492_138"
            style={{
              width: 1223,
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
                width: 1223,
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
                  width: 1223,
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
                width: 1223,
                backgroundColor: "rgba(255,255,255,1.00)",
                flexDirection: "row",
                alignItems: "flex-end",
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
                  height: 648,
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
                    marginBottom: 0,
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
                      height: 120,
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
                        }
                      };

                      run();
                    }}
                    type="file"
                    multiple
                  ></input>
                </div>
              </div>

              {/* <ReactDraft 
  
  html={dl.changes.blog.description.html}
  style={{height:674,width:824,backgroundImage:"url(https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/5ae319c559fcaa637fd9d3f425beac42793e3a30.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",display:"flex",overflow:"visible",borderWidth:0,marginRight:0,cursor:"pointer",}}
  
            onChange={(val)=>{
                
                dl.changes.blog.description = val
            }}
 
  
  /> */}      
            <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        
        {/* <div style={{
                height: 604,
                width: 900,
                display: "flex",
                borderWidth: 0,
                marginRight: 0,
                cursor: "pointer",
                flexDirection: "column",
                overflow: "hidden",
                paddingBottom: 100,
              }}>
              <Editor />
            </div> */}
            <div className="editor-shell">
              <Editor />
            </div>
      </SharedHistoryContext>
    </LexicalComposer>
              
                
              
              {/* <ReactQuill
                style={{
                  height: 604,
                  width: 824,
                  display: "flex",
                  borderWidth: 0,
                  marginRight: 0,
                  cursor: "pointer",
                  flexDirection: "column",
                  overflow: "hidden",
                  paddingBottom: 100,
                }}
                modules={modules}
                theme="snow"
                onChange={(val) => {
                  // console.log(val)
                  dl.changes.blog.description = {
                    "html" : val
                  };
                }}
                value={dl.changes.blog.description.html}
                placeholder="Content of the Blog.."
              /> */}
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
                dl.functions.modalsPlugin.closeModal("addNewBlog");
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
                      image: blog.image,
                    };
                    var res = dl.functions.updateBlogs(body);
                    if (res.status == 200) {
                      // dl.functions.modalsPlugin.closeModal('addNewBlog')
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
                    dl.functions.modalsPlugin.closeModal("addNewBlog");
                  } else {
                    var res = await dl.functions.createBlogs(blog);
                    // alert(JSON.stringify(res))
                    if (res.status == 200) {
                      // alert("blog created")
                      // dl.functions.modalsPlugin.openModal('addNewBlog')
                      // dl.functions.modalsPlugin.closeModal('addNewBlog')
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
                    }
                    dl.functions.modalsPlugin.closeModal("addNewBlog");
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
    </Modal>
  );
});
export default AddNewBlogModal;
