import { useState } from 'react';
import { storage } from 'config';
import isEmpty from 'ramda.isempty';

export function UploadForm() {
  const [selectedFile, setSelectedFile] = useState({} as any);

  const handleUpload = async () => {
    if (isEmpty(selectedFile)) return;

    try {
      const { name = '' } = selectedFile;
      const ref = storage.ref('images').child(name.replace(/ /g, '_'));

      ref.put(selectedFile);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          console.log(e.target.files![0]);
          setSelectedFile(e.target.files![0]);
        }}
      />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
}
