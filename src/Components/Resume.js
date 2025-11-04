import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="ResumePage">
      <Document 
        file={pdf} 
        onLoadSuccess={onDocumentLoadSuccess}
        className="resumeview"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={width < 700 ? (width > 475 ? 0.7 : 0.5) : 1}
          />
        ))}
      </Document>

      <a href={pdf} target="_blank" download="Naveen_Resume.pdf" rel="noopener noreferrer">
        <button className="downloadCV" type="button">
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
