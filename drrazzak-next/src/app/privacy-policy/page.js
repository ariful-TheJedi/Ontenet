
import React from "react";
import LegalTerms from "@/components/sub-components/legalTems";


const PrivacyPolicy = () => {
  const sections = [
    {
      heading: "1. Purpose of This Policy",
      text: [
        "Your privacy is important to us.",
        "We are committed to ensuring that any personal information collected through this website is handled responsibly, securely, and in compliance with applicable data protection laws."
      ]
    },
    {
      heading: "2. Information We Collect",
      text: [
        "We may collect the following types of information:",
        "A. Personal Information (Provided by You)",
        "When you fill out a contact form, appointment request, or subscribe to updates, you may provide:",
        "• Your full name",
        "• Email address",
        "• Phone number",
        "• Message or inquiry details",
        "• Any other information you voluntarily share",
        "B. Automatically Collected Information",
        "When you browse the site, certain data may be automatically collected for analytics or functionality, including:",
        "• IP address and device information",
        "• Browser type and operating system",
        "• Date, time, and duration of visits",
        "• Pages viewed and referral sources",
        "• Cookies or similar tracking technologies"
      ]
    },
    {
      heading: "3. How We Use Your Information",
      text: [
        "We use the collected information for purposes such as:",
        "• Responding to inquiries or appointment requests",
        "• Providing information about our medical services",
        "• Improving website functionality and user experience",
        "• Internal record keeping and communication",
        "• Ensuring website security and preventing misuse",
        "We do not sell, rent, or trade your personal information."
      ]
    },
    {
      heading: "4. Legal Basis for Processing",
      text: [
        "We process personal information only when:",
        "• You have given explicit consent (e.g., submitting a form),",
        "• It is necessary to fulfill a legitimate interest (such as improving services), or",
        "• It is required by law or medical regulation."
      ]
    },
    {
      heading: "5. Data Security",
      text: [
        "We take appropriate technical and organizational measures to safeguard your information against unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute protection."
      ]
    },
    {
      heading: "6. Data Retention",
      text: [
        "Your personal data will be retained only as long as necessary to:",
        "• Respond to your inquiries or provide requested services,",
        "• Comply with legal or regulatory obligations, or",
        "• Maintain internal administrative records.",
        "After that period, your data will be securely deleted."
      ]
    },
    {
      heading: "7. Sharing of Information",
      text: [
        "We may share your information only under the following conditions:",
        "• With authorized staff or assistants working directly under Dr. Muhammad Abdur Razzak, bound by confidentiality;",
        "• With service providers who help operate this website (such as hosting or email services);",
        "• When required by law, regulation, or government request.",
        "We will never disclose your information to third parties for marketing or commercial purposes."
      ]
    },
    {
      heading: "8. Cookies and Analytics",
      text: [
        "This website may use cookies and analytics tools (such as Google Analytics) to improve usability and performance.",
        "Cookies are small files stored on your device that help remember preferences and analyze traffic patterns.",
        "You can control or disable cookies through your browser settings, but some site features may not function properly if you do so."
      ]
    },
    {
      heading: "9. Your Rights",
      text: [
        "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
        "• Access – Request a copy of your personal information.",
        "• Correction – Request correction of inaccurate or incomplete data.",
        "• Deletion – Request deletion of your data when no longer needed.",
        "• Withdrawal of Consent – Withdraw consent at any time.",
        "• Complaint – Lodge a complaint with a data protection authority if you believe your rights are violated.",
        "Requests can be submitted using the contact details below."
      ]
    },
    {
      heading: "10. External Links",
      text: [
        "Our website may contain links to third-party sites for reference or educational purposes.",
        "We are not responsible for the privacy practices or content of those websites.",
        "Please review their privacy policies separately."
      ]
    },
    {
      heading: "11. Updates to This Policy",
      text: [
        "We may update or revise this Privacy Policy periodically to reflect changes in legal requirements or website functionality.",
        "All updates will be posted on this page with a new “Last Updated” date.",
        "Continued use of the website after such updates constitutes your acceptance of the revised policy."
      ]
    }
  ];

  return (
    <LegalTerms
      title="Privacy Policy"
      updatedDate="October 8, 2025"
      sections={sections}
    />
  );
};

export default PrivacyPolicy;
