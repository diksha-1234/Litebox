// CompressionPage.jsx
import React, { useState, useRef } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Upload, Download, Share2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const FileUploader = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      onUpload({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="border-dashed border-4 border-blue-400 rounded-3xl p-10 text-center space-y-4 bg-gradient-to-br from-blue-100 to-white shadow-2xl hover:scale-105 transition-transform duration-300"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}
    >
      <Upload className="mx-auto w-12 h-12 text-blue-600 animate-bounce" />
      <p className="text-gray-700 font-medium">Drag & drop or click anywhere to upload</p>
      <input
        type="file"
        onChange={onUpload}
        className="hidden"
        ref={fileInputRef}
        multiple
      />
      <Button className="mt-2">Browse Files</Button>
    </div>
  );
};

const ActionBar = ({ onStart, onDownload, onShare }) => (
  <motion.div
    className="flex justify-between gap-4 mt-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <Button onClick={onStart} className="flex gap-2 items-center shadow-md">
      <PlayCircle size={20} /> Start
    </Button>
    <Button variant="outline" onClick={onDownload} className="flex gap-2 items-center shadow-md">
      <Download size={20} /> Download
    </Button>
    <Button variant="ghost" onClick={onShare} className="flex gap-2 items-center">
      <Share2 size={20} /> Share
    </Button>
  </motion.div>
);

const PageWrapper = ({ title, tagline, children }) => (
  <div className="max-w-3xl mx-auto p-6 space-y-6">
    <motion.h1
      className="text-4xl font-extrabold text-center text-blue-700 drop-shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h1>
    <motion.p
      className="text-center text-gray-600 text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {tagline}
    </motion.p>
    {children}
  </div>
);

const CompressionPage = () => {
  const [file, setFile] = useState(null);
  const handleUpload = (e) => setFile(e.target.files[0]);

  return (
    <PageWrapper
      title="CompressIt!"
      tagline="Crush your file size, not your quality."
    >
      <Card className="rounded-3xl shadow-xl border-2 border-blue-200">
        <CardContent className="p-6">
          <FileUploader onUpload={handleUpload} />
          {file && (
            <motion.p
              className="mt-4 text-md text-green-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              File ready: {file.name}
            </motion.p>
          )}
          <ActionBar
            onStart={() => alert("Compression started")}
            onDownload={() => alert("Download initiated")}
            onShare={() => alert("Link copied to clipboard")}
          />
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default CompressionPage;
