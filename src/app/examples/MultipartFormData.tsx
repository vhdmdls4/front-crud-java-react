import axios from "axios";
import { ChangeEvent, useState } from "react";

type Props = {};

export default function MultipartFormData({}: Props) {
  const [file, setFile] = useState<Array<File>>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFile((prevArrayValues) => [...prevArrayValues, file]);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = "http://localhost:8080/test-multi";
    const formData = new FormData();

    // Assuming `file` is an array of files
    const listaFiles = Array.from(file);

    listaFiles.forEach((file, index) => {
      formData.append(`listaFilhos[${index}].multipartFile`, file);
      formData.append(`listaFilhos[${index}].name`, file.name);
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="flex flex-col">
      <div>
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <label htmlFor="myfile">Select a file:</label>
          <input type="file" multiple onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}
