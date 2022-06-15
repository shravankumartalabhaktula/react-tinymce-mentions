import { Editor } from '@tinymce/tinymce-react';
// import Mention from 'react-tinymce-mention';
import { useRef } from 'react';

import { usersData } from '../data';

import { USERS } from '../randomUsers';

const TinyMceComponent = () => {
  console.log(USERS);
  console.log(usersData);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="ia17ppqk13qqln679j77gaj5ry70c8gm0vgjza85y4pwfk5l"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
            'mentions',
          ],
          mentions_fetch: (query, success) => {
            console.log('Search String: ', query);
            // let users = usersData.filter(function (user) {
            //   return user.name.indexOf(query.term.toLowerCase()) !== -1;
            // });
            success(USERS);
            // success(usersData);
          },

          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      {/* <Mention dataSource={['hello', 'how', 'are', 'you']} /> */}

      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default TinyMceComponent;
