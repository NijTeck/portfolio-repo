import React from 'react';
    import { Box, Typography, styled } from '@mui/material';

    const StyledExperience = styled(Box)({
      padding: '50px',
      textAlign: 'left',
      backgroundColor: '#252525',
      color: '#fff',
    });

    const Experience = () => {
      const experiences = [
        {
          title: 'Senior Microsoft Azure Engineer',
          company: 'MITRE Corporation',
          date: 'January 2022 – Present',
          description: [
            'Oversaw and managed 250+ Azure Subscriptions across multiple tenants, designing Azure Landing Zones for both Commercial and Gov Cloud to ensure consistent governance and security standards.',
            'Implemented Azure API Management (APIM) for secure microservices exposure, enabling custom policies (e.g., rate limiting, JWT validation) and reducing integration overhead by 30%.',
            'Established ExpressRoute connectivity for on-premises data centers, providing sub-10ms latency for mission-critical workloads and improving network reliability by 40%.',
            'Architected Conditional Access policies within Entra ID, strengthening identity and access management and reducing unauthorized access incidents by 60%.',
            'Deployed Azure Sentinel as the central SIEM/SOAR solution, integrating data from O365, firewalls, and endpoints, cutting threat detection/response times by 50%.',
            'Leveraged Azure Monitor (Log Analytics & Application Insights) for end-to-end observability across Windows and Linux VMs, reducing MTTR (mean time to resolution) by 40%.',
            'Optimized Azure SQL Databases with geo-replication and auto-failover groups, achieving a 99.99% uptime SLA for enterprise applications.',
            'Utilized Azure Event Hub for high-throughput event ingestion and Azure Queue/Notification Hub for asynchronous messaging, enabling real-time data processing and cutting operational costs by 25%.',
            'Containerized microservices with Azure Container Apps, streamlining deployments and improving scalability by 35%.',
            'Configured DNS and Private Endpoints in Azure to enhance network isolation and eliminate public exposure for sensitive PaaS services.',
          ],
        },
        {
          title: 'Systems Administrator',
          company: 'Hippo Analytics',
          date: 'September 2020 – January 2022',
          description: [
            'Managed a global Active Directory infrastructure (100k+ users) and DNS (internal & external), maintaining near-zero downtime through robust design and monitoring.',
            'Administered a large-scale Exchange 2013 environment (100,000+ mailboxes) and orchestrated Exchange DAG for high availability, reducing email service outages by 80%.',
            'Planned and managed corporate-wide Distribution List infrastructure, supporting complex routing rules and automating membership updates for thousands of users.',
            'Developed advanced PowerShell scripts, modules, and Bash utilities for enterprise automation, saving over 15 hours of manual work per week and improving accuracy.',
            'Created relational databases (PostgreSQL) to store operational metrics, leveraging SQL queries for detailed analytics and Bash scripts to automate data ingestion.',
            'Led version control best practices with Git across IT teams, ensuring clean rollbacks, branch management, and collaboration on shared automation projects.',
          ],
        },
        {
          title: 'Information Technology Specialist/Engineer',
          company: 'USAA',
          date: 'April 2018 – September 2020',
          description: [
            'Deployed, managed, and administered Windows Server Environment (Server 2003, 2008R2 and Windows Server 2012 R2).',
            'Deployed and administered HyperV and system virtualization (Hyper-V).',
            'Deployed, managed and administered Private Cloud, System Center management tools in direct relation to clients’ system virtualization.',
            'Managed and Administered file share Failover Cluster to provide centralized file store/high availability',
            'Administered Active Directory including corporate wide GPO deployment, Active Directory Migration, Upgrade and Maintenance.',
            'Administered Exchange 2007 to manage and maintain corporate wide email system (Full Deployment of Exchange 2013).',
            'Administered Certificate Authority - CA Infrastructure to issue certificates for corporate digital identity in relations to internal systems and servers.',
            'Deployed Certificate Authority – CA Infrastructure.',
            'Upgrade Certificate Authority from Server 2012 to 2016.',
            'Managed Tier one corporate wide helpdesk support system and operations.',
            'Deploy System Virtualization Hyper-V for increased virtualization capacity of the client’s data center, as well as utilizing Hyper-V high availability.',
            'Administer Citrix',
          ],
        },
        {
          title: 'IT Support Specialist III',
          company: 'Medtronic',
          date: 'January 2016 – April 2018',
          description: [
            'Managed, planned, and implemented internal IT projects including staff development training projects.',
            'Managed IT based staff development technical projects such as teaching, developing teaching materials, and presentations.',
            'Conducted content-specific conferences, workshops, or technical training programs for professional development of internal department staff.',
            'Developed and implemented training strategies and tools for virtual training projects and online classes.',
            'Identified resources, including training as needed, for staff to provide specialized services as may be required.',
          ],
        },
        {
          title: 'Quality Control specialist',
          company: 'SMS InfoCom',
          date: 'January 2014 – May 2015',
          description: [
            'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
            'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
            'Communicated system/network changes and updates, as well as work with the team to address Help Desk related issues based on those changes and updates.',
            'Developed communication plans for internal users.',
            'Managed enterprise warranty projects, both on site and virtually.',
            'Provided complex daily, weekly and monthly operation reports for the high-ranking management of the company.',
          ],
        },
      ];

      return (
        <StyledExperience>
          <Typography variant="h4" component="h2" gutterBottom>
            Experience
          </Typography>
          {experiences.map((exp, index) => (
            <Box key={index} mb={4}>
              <Typography variant="h6" component="h3">
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {exp.company} | {exp.date}
              </Typography>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>
                    <Typography variant="body1">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </StyledExperience>
      );
    };

    export default Experience;
