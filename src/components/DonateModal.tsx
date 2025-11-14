import { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface BankField {
  label: string;
  value: string;
}

interface BankSection {
  title: string;
  subtitle?: string;
  fields: BankField[];
}

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scrolling
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleCopy = (text: string, fieldId: string) => {
    try {
      // Fallback copy method that works in all environments
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 1500);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      
      document.body.removeChild(textArea);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const bankSections: BankSection[] = [
    {
      title: 'Citibank US$ Local Investment Banking Account',
      fields: [
        { label: 'Beneficiary Name', value: 'Mayberry Investments Ltd' },
        { label: 'Beneficiary Bank', value: 'Citibank NA' },
        { label: 'Branch Address', value: '111 Wall Street, New York' },
        { label: 'Federal Reserve ABA', value: '21000089' },
        { label: 'For Further Credit', value: 'Citibank NA Jamaica' },
        { label: 'Branch Account No.', value: '109909033' },
        { label: 'Mayberry Account No. at Branch', value: '00185595159 / 18559153' },
        { label: 'Currency', value: 'USD' },
        { label: 'Account Type', value: 'Chequing' },
      ],
    },
    {
      title: 'Sagicor US$ Int\'l Investments',
      fields: [
        { label: 'Beneficiary Name', value: 'Mayberry Investments Ltd' },
        { label: 'Beneficiary Bank', value: 'Sagicor' },
        { label: 'Branch', value: 'New Kingston' },
        { label: 'Address', value: '17 Dominica Drive, Kingston 5' },
        { label: 'Account Number', value: '5504132066' },
        { label: 'Currency', value: 'USD' },
        { label: 'Swift Code', value: 'SAJAMJKN' },
      ],
    },
    {
      title: 'First Global – JMD Expense',
      fields: [
        { label: 'Beneficiary Name', value: 'Mayberry Investments Ltd' },
        { label: 'Beneficiary Bank', value: 'First Global' },
        { label: 'Branch', value: 'Manor Park' },
        { label: 'Beneficiary Bank Address', value: '184 Constant Spring Road, Kingston 8' },
        { label: 'Account Number', value: '990828664474' },
        { label: 'Swift Code', value: 'FILBJMKKN' },
        { label: 'Branch Code', value: '99082' },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-200">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] m-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 id="modal-title" className="text-[#101828] text-[28px] font-bold mb-1">
              Make a Donation
            </h2>
            <p className="text-[#4a5565] text-sm">
              Choose a banking option below and use the details to complete your transfer
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 ml-4"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-8 pt-[0px] pr-[24px] pb-[24px] pl-[24px]">
          {bankSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Title */}
              <div className="sm:mb-5 -mx-6 sm:mx-0 sm:bg-transparent bg-white sm:static sticky top-0 z-10 sm:px-0 px-6 sm:py-0 py-3 sm:border-0 border-b border-gray-200">
                <h3 className="text-[#101828] text-xl font-bold mb-1">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-[#4a5565] text-sm">{section.subtitle}</p>
                )}
              </div>

              {/* Fields Grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:mt-0 mt-4">
                {section.fields.map((field, fieldIndex) => {
                  const fieldId = `${sectionIndex}-${fieldIndex}`;
                  const isCopied = copiedField === fieldId;

                  return (
                    <div
                      key={fieldIndex}
                      className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 hover:border-[#053fe7] transition-all duration-200 cursor-pointer"
                      onClick={() => handleCopy(field.value, fieldId)}
                    >
                      {/* Label */}
                      <div className="text-[#4a5565] text-xs font-medium mb-1.5 uppercase tracking-wide">
                        {field.label}
                      </div>

                      {/* Value and Copy Button Container */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-[#101828] font-medium text-sm break-all">
                          {field.value}
                        </div>

                        {/* Copy Button */}
                        <button
                          className="shrink-0 p-1.5 rounded-md hover:bg-white transition-colors duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(field.value, fieldId);
                          }}
                          aria-label={`Copy ${field.label}`}
                        >
                          {isCopied ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-gray-400 group-hover:text-[#053fe7]" />
                          )}
                        </button>
                      </div>

                      {/* Copied Notification */}
                      {isCopied && (
                        <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-in fade-in zoom-in duration-200">
                          Copied!
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Divider (except after last section) */}
              {sectionIndex < bankSections.length - 1 && (
                <div className="mt-8 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#4a5565] text-sm text-center sm:text-left">
              Click any field to copy its value to your clipboard
            </p>
            <button
              onClick={onClose}
              className="bg-[#053fe7] text-white px-6 py-2.5 rounded-lg hover:bg-[#042ec4] transition-colors duration-200 font-medium"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
