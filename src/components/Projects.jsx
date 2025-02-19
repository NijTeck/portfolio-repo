import React from 'react';
    import { Box, Typography, Grid, Card, CardContent, CardActions, Button, styled } from '@mui/material';

    const StyledProjects = styled(Box)({
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#1e1e1e',
      color: '#fff',
    });

    const StyledCard = styled(Card)({
      backgroundColor: '#252525',
      color: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    });

    const projectsData = [
      {
        title: 'Command-Line Website Boilerplate Generator',
        overview: 'Built a command-line tool that automatically generates a standard HTML/CSS/JS folder structure, complete with placeholder files and common meta tags.',
        skills: 'Bash scripting, command-line usage, automation',
        highlights: [
          'Implemented user prompts and validation to ensure proper folder naming and structure.',
          'Automated boilerplate updates by integrating Git for version tracking.',
        ],
      },
      {
        title: 'Mario Character Relational Database',
        overview: 'Created a PostgreSQL database to store and query information about classic video game characters (e.g., Mario series).',
        skills: 'SQL schema design, foreign key relationships, indexing strategies',
        highlights: [
          'Designed an ER diagram to map out relationships between characters, power-ups, and game worlds.',
          'Implemented stored procedures to automate data inserts and updates.',
        ],
      },
      {
        title: 'Celestial Bodies Database',
        overview: 'Developed a PostgreSQL database containing celestial body information (planets, moons, stars).',
        skills: 'Relational data modeling, advanced SQL joins, data integrity constraints',
        highlights: [
          'Used triggers to enforce consistency rules (e.g., linking moons to their parent planets).',
          'Created complex queries to calculate orbital relationships and distances.',
        ],
      },
      {
        title: 'Automated Tools with Bash Scripts',
        overview: 'Built five standalone Bash-based utilities (e.g., text processing, file management, system monitoring).',
        skills: 'Advanced Bash scripting, regular expressions, process automation, file I/O',
        highlights: [
          'Incorporated logging and error handling to ensure reliability.',
          'Optimized scripts for performance by leveraging built-in Bash features and parallel processing where possible.',
        ],
      },
      {
        title: 'Student Enrollment Database (Part 1)',
        overview: 'Created a Bash script that interacts with a PostgreSQL database to store and manage student enrollment information.',
        skills: 'SQL DDL, CRUD operations, Bash-driven user input and database transactions',
        highlights: [
          'Automated daily backups using cron jobs.',
          'Implemented a robust schema with constraints to prevent duplicate or invalid entries.',
        ],
      },
      {
        title: 'Advanced SQL Joins in Student Database (Part 2)',
        overview: 'Enhanced the Student Enrollment Database with advanced SQL joins and queries to cross-reference multiple tables (e.g., courses, grades, attendance).',
        skills: 'Complex SQL joins, subqueries, data aggregation, query optimization',
        highlights: [
          'Wrote complex queries to generate detailed reports on student performance.',
          'Used indexing and query plans to significantly reduce query execution times.',
        ],
      },
      {
        title: 'World Cup Statistics Database',
        overview: 'Created a PostgreSQL database and Bash script to ingest historical World Cup match data and generate performance metrics.',
        skills: 'Data parsing, bulk loading of CSV files, analytics queries, scripting with Bash',
        highlights: [
          'Built a pipeline to clean and transform raw match data before insertion.',
          'Produced dashboards with aggregated stats (goals scored, match outcomes, top scorers).',
        ],
      },
      {
        title: 'Advanced Bash Command Parser (Kitty Ipsum Translator)',
        overview: 'Developed a command parser that reads input text and translates it into a custom “Kitty Ipsum” format using advanced Bash features.',
        skills: 'String manipulation, pattern matching with sed/awk, command-line argument parsing',
        highlights: [
          'Handled edge cases (empty inputs, special characters, large text files).',
          'Showcased the power of shell expansions and built-in Bash utilities.',
        ],
      },
      {
        title: 'Interactive Bike Rental Shop Database',
        overview: 'Built a Bash-based interactive program that manages bike rentals, storing all transaction data in PostgreSQL.',
        skills: 'User interface design in the terminal, real-time database queries, transactional logic',
        highlights: [
          'Created a robust reservation system with concurrency handling.',
          'Implemented analytics for rental duration, peak usage times, and revenue.',
        ],
      },
      {
        title: 'Salon Appointment Scheduler',
        overview: 'Developed a Bash script with a PostgreSQL backend to schedule and manage salon appointments.',
        skills: 'Data validation, multi-table joins for customer, service, and stylist data, user-friendly CLI',
        highlights: [
          'Implemented time slot checks to prevent double-booking.',
          'Generated daily summary reports for stylists and services used.',
        ],
      },
      {
        title: 'File Editing with Nano for Terminal-based Website (Build a Castle)',
        overview: 'Used Nano within the terminal to build and manage a “castle” project—essentially a structured website—directly from the command line.',
        skills: 'Text editing in Nano, version control with Git, file system organization',
        highlights: [
          'Created and managed multiple HTML and CSS files exclusively from the terminal.',
          'Learned efficient navigation and editing shortcuts to speed up development.',
        ],
      },
      {
        title: 'Git-based SQL Reference Repository',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Git, SQL',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Azure Infrastructure Design and Deployment',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Azure',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Enterprise-Wide Exchange 2016 (On-Prem) to Office 365 Migration - Hybrid Infrastructure',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Exchange',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Active Directory & Exchange migration (Company Merge)',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Active Directory',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Proofpoint messaging gateway migration',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Proofpoint',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Exchange 2013 Deployment',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Exchange',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Successfully Deployed Microsoft Exchange 2013 Multi DAG Infrastructure.',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Exchange',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Active Directory Upgrade/Migration',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Active Directory',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Azure Landing Zone for Commercial and Gov Cloud',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Azure',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
      {
        title: 'Endpoint Security Sensor (CrowdStrike) Deployment using Azure Guest Configuration',
        overview: 'Constructed a personal SQL reference object stored I...',
        skills: 'Azure',
        highlights: [
          'Managed nationwide Vendor warranty repairs Services for Lenovo, Dell, and HP.',
          'Defined quality indicators, setting expectations, and putting processes in place for outcome measurements.',
        ],
      },
    ];

    const Projects = () => {
      return (
        <StyledProjects>
          <Typography variant="h4" component="h2" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {project.overview}
                    </Typography>
                    <Typography variant="subtitle2">Key Skills: {project.skills}</Typography>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>
                          <Typography variant="body2">{highlight}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </StyledProjects>
      );
    };

    export default Projects;
