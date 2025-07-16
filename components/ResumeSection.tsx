import React from 'react';
import { FileText, Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4" id="resume">
      <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
      
      <div className="text-center">
        <p className="text-gray-700 mb-8">
          View my professional experience, skills, and background in detail.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            View Resume
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection; 