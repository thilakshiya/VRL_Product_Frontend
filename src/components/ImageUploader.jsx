import React, { useState } from "react";
import axios from "axios";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(null);
  const [error, setError] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setUploaded(null);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) return setError("Choose a file first");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt) => {
          setProgress(Math.round((evt.loaded * 100) / evt.total));
        },
      });

      setUploaded(res.data.file); // contains secure_url, public_id, etc.
      setProgress(0);
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h3>Upload Image</h3>

      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && (
        <div style={{ marginTop: 12 }}>
          <img src={preview} alt="preview" style={{ width: 200, height: "auto", borderRadius: 6 }} />
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <button onClick={handleUpload} disabled={!file} style={{ padding: "8px 14px" }}>
          Upload
        </button>
      </div>

      {progress > 0 && (
        <div style={{ marginTop: 8 }}>
          Uploading: {progress}% <progress value={progress} max="100" style={{ width: "100%" }} />
        </div>
      )}

      {uploaded && (
        <div style={{ marginTop: 12 }}>
          <strong>Uploaded:</strong>
          <div>
            <img src={uploaded.secure_url} alt="uploaded" style={{ width: 200, borderRadius: 6 }} />
          </div>
          <div>public_id: {uploaded.public_id}</div>
          <div>format: {uploaded.format}</div>
        </div>
      )}

      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
    </div>
  );
}
