import React from 'react';
    import { Box, Typography, styled } from '@mui/material';

    const StyledCertifications = styled(Box)({
      padding: '50px',
      textAlign: 'left',
      backgroundColor: '#252525',
      color: '#fff',
    });

    const Certifications = () => {
      const certificationsData = [
        {
          name: 'AZ-400: DevOps Engineer Expert',
          description: 'Design and implement strategies for collaboration, code, infrastructure, source control, security, compliance, continuous integration, testing, delivery, monitoring, and feedback.',
        },
        {
          name: 'AZ-305: Azure Solutions Architect Expert',
          description: 'Design cloud and hybrid solutions that run on Azure, including compute, network, storage, monitoring, security, identity, data platform, and business continuity.',
        },
        {
          name: 'AZ-500: Security Engineer Associate',
          description: 'Implement security controls and threat protection, manage identity and access, and protect data, applications, and networks in cloud and hybrid environments.',
        },
        {
          name: 'AZ-104: Azure Administrator Associate',
          description: 'Implement, manage, and monitor identity, governance, storage, compute, and virtual networks in a cloud environment.',
        },
        {
          name: 'AZ-204: Azure Developer Associate',
          description: 'Design, build, test, and maintain cloud applications and services on Microsoft Azure, including integration of caching, security and storage solutions.',
        },
      ];

      return (
        <StyledCertifications>
          <Typography variant="h4" component="h2" gutterBottom>
            Certifications
          </Typography>
          {certificationsData.map((cert, index) => (
            <Box key={index} mb={3}>
              <Typography variant="h6" component="h3">
                {cert.name}
              </Typography>
              <Typography variant="body1">{cert.description}</Typography>
            </Box>
          ))}
        </StyledCertifications>
      );
    };

    export default Certifications;
