import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CustomEditor from 'ckeditor5-custom-build';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const editorConfiguration = {
  toolbar: [ 
    'heading', 
    '|', 
    'bold',
    'italic',
    'underline',
    '|',
    'bulletedList',
    'numberedList',
    'indent',
    'outdent',
    '|',
    'blockQuote',
    'link',
    'horizontalLine',
    '|',
    'undo',
    'redo'
  ]
};

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={CustomEditor}
        data={value}
        config={editorConfiguration}
        onReady={editor => {
          if (value) {
            editor.setData(value);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;