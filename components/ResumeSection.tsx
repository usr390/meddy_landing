import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CERT_URL =
  'https://atsqa.org/documents/certificates/f23024798141476abedbbb58ec556b8c-certificate.pdf';

const CertificationsSection = () => {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4" id="certifications">
      <h2 className="text-2xl font-bold mb-6 text-center">Certifications</h2>

      <div className="rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
        <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4 flex-1">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
              <Award className="h-6 w-6 text-emerald-700" />
            </span>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold truncate">
                ISTQB Foundation Level
              </h3>
              <p className="text-sm text-gray-600 truncate">
                ATSQA • Official certificate (PDF)
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0">
            <a
              href={CERT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
              aria-label="Open certificate in a new tab"
            >
              Open Certificate
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
