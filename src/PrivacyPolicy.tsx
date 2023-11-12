// PrivacyPolicy.tsx
import { Typography, Container } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Privacy Policy for GPT API
      </Typography>
      {/* You can add each section of your policy here as <Typography> components */}
      <Typography paragraph>
      
Introduction

This privacy policy governs the use of the GPT API. It outlines our practices regarding the collection, use, and protection of personal data. This policy is designed to ensure transparency and trust with our users.
Data Collection

    Types of Data Collected: We collect data that users provide directly when they interact with the API. This includes query inputs, user settings, and feedback.
    Method of Collection: Data is collected automatically when the API is used.

Data Usage

    The collected data is used to:
        Improve the performance and accuracy of the GPT API.
        Provide user support and respond to inquiries.
        Analyze API usage trends for further development.

Data Sharing and Disclosure

    We do not sell user data.
    Data may be shared with third-party service providers only for purposes critical to the functioning of the API, such as server hosting.
    Data may be disclosed if required by law.

User Consent

    Consent is obtained through clear, affirmative action by the user, such as agreeing to this policy before using the API.
    Users can withdraw consent at any time.

Data Security

    We employ industry-standard security measures to protect user data from unauthorized access, alteration, and destruction.

Compliance with Laws

    Our API complies with applicable data protection laws, including GDPR and CCPA.
    We are committed to upholding user privacy rights globally.

User Rights

    Users have the right to access, correct, delete, or transfer their data.
    Users can object to or restrict the processing of their data.

Policy Updates

    This policy may be updated periodically. Users will be notified of significant changes.

Contact Information

    For any questions or concerns regarding this privacy policy or data handling, please contact us at 128boilerrat@gmail.com.
      </Typography>
      {/* Add more <Typography> components as needed */}
    </Container>
  );
};

export default PrivacyPolicy;
