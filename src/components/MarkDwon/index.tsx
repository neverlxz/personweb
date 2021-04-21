import React,{useState} from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import './index.scss'

function MarkDwonEditor() {
    const [markdown, setMarkdown] = useState("");
    return (
        <div style={{height:'500px'}}>
            <MarkdownEditor
              style={{height:'500px'}}
              value="# This is a H1  \n## This is a H2  \n###### This is a H6"
              onChange={(editor, data, value) => setMarkdown(value)}
            />
        </div>
    );
}

export default MarkDwonEditor;