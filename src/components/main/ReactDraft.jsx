import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { Observer, observer } from "mobx-react";
import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// import dynamic from 'next/dynamic';
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//   { ssr: false }
// )
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ReactDraft = (props) => {
  const [data, setdata] = useState("");

  // const [data, setdata] = useState('')
  useEffect(() => {
    var h = props.html ? props.html : "";
    // alert(h)
    if (h == "") {
      return;
    }
    const blocksFromHTML = htmlToDraft(h);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
    setdata(EditorState.createWithContent(state));
  }, []);

  return (
    <Observer>
      {() => (
        <Editor
          editorState={data}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={(val) => {
            setdata(val);
            var html = val.getCurrentContent();
            html = draftToHtml(convertToRaw(html));
            var obj = {
              draft: val,
              html: html,
            };
            if (props.onChange) {
              props?.onChange(obj);
            }
          }}
          wrapperStyle={{
            height: props.style.height,
            width: props.style.width,
            padding: 10,
            position: "relative",
            border: "1px solid #888",
          }}
          editorStyle={{ height: props.style.height - 200 }}
        />
      )}
    </Observer>
  );
};
export default ReactDraft;
