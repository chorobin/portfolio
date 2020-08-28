import * as React from 'react';
import Main from 'shell/Main';
import vietnam51920Image from 'shell/Images/Vietnam5-1920.jpg';
import vietnam51024Image from 'shell/Images/Vietnam5-1024.jpg';
import Title from 'shell/Title';
import { SecondaryTitle } from '../SecondaryTitle/SecondaryTitle';
import styled from 'styled-components';
import { Timeline } from '../Timeline/Timeline';
import { TimelineSection } from '../TimelineSection/TimelineSection';
import { TimelineSectionTitle } from '../TimelineSection/TimelineSectionTitle';
import { TimelineSectionLocation } from '../TimelineSection/TimelineSectionLocation';
import MenuButton from 'shell/MenuButton';
import educationImage from './Education.svg';
import experienceImage from './Experience.svg';
import { Table } from '../Table/Table';
import { TableBody } from '../Table/TableBody';
import { TableRow } from '../Table/TableRow';
import { TableHeading } from '../Table/TableHeading';
import { TableCell } from '../Table/TableCell';
import { SubTimeline } from '../SubTimeline/SubTimeline';

const Content = styled.div`
    font-size: 1.5rem;
    align-self: stretch;
    text-align: left;
`;

export const CurriculumVitae: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main
            backgroundImage={vietnam51920Image}
            smallBackgroundImage={vietnam51024Image}
            showMenu={menuShown}
            setMenuShown={setMenuShown}
        >
            <Title>Curriculum Vitae</Title>
            <SecondaryTitle>EXPERIENCE</SecondaryTitle>
            <img src={experienceImage} height="70px" />
            <Content>
                <Timeline>
                    <TimelineSection animationDelay={1}>
                        December 2018-Present
                        <TimelineSectionTitle>Senior Developer</TimelineSectionTitle>
                        <TimelineSectionLocation>Access Group UK</TimelineSectionLocation>
                        <ul>
                            <li>
                                Successfully using React, Typescript, ASP.NET Core to develop and deliver multiple
                                products and apps.
                            </li>
                            <li>
                                Designing a TDD driven frontend architecture using Typescript, React, Redux, RxJS,
                                Redux-Observable
                            </li>
                            <li>
                                Designing a highly testable and scalable Restful API architecture with ASP.NET Core MVC,
                                following Clean Architectural principles and SOLID.
                            </li>
                            <li>Putting in place conventional branching strategies using git flow and release flow</li>
                            <li>Creating continuous integration pipelines using Jenkins, Octopus and Azure DevOps</li>
                            <li>Designing integration interfaces through Restful & GraphQL endpoints to products </li>
                            <li>
                                Designing and implementing a fast front end build process using yarn, webpack, babel 7
                                and typescript.
                            </li>
                            <li>Designing solutions for scaling web applications using load balancers.</li>
                        </ul>
                    </TimelineSection>
                    <TimelineSection animationDelay={2}>
                        October 2017 - December 2018
                        <TimelineSectionTitle>Developer</TimelineSectionTitle>
                        <TimelineSectionLocation>Access Group UK</TimelineSectionLocation>
                        <ul>
                            <li>
                                Developing and maintaining a custom command line interface using webpack to help other
                                development teams scafold frontend projects using React and TypeScript
                            </li>
                            <li>Aiding in the development of Restful Api's built in ASP.NET Core MVC.</li>
                        </ul>
                    </TimelineSection>
                    <TimelineSection animationDelay={3}>
                        August 2015 - October 2017
                        <TimelineSectionTitle>Junior Application Developer</TimelineSectionTitle>
                        <TimelineSectionLocation>Access Group UK</TimelineSectionLocation>
                        <ul>
                            <li>
                                Working and learning in a team of web application developers to ship a hosted Financial
                                based appli- cation in the cloud.
                            </li>
                            <li>Practically using Git and SVN in multiple projects with branching strategies</li>{' '}
                            <li>
                                Effectively practising AGILE to deliver story points to stakeholders and working to
                                clean sprints.
                            </li>
                            <li>
                                Effectively learning and applying frontend languages including ES5, to ES6 and
                                eventually to Type- Script.
                            </li>
                            <li>Learning and writing Restful API services using ASP.NET Core MVC and C#</li>{' '}
                            <li>
                                Learning how to write basic webpack configurations for bundling and minifying projects.{' '}
                            </li>
                            <li> Learning how to write efficient SQL Server queries.</li>
                        </ul>
                    </TimelineSection>
                    <TimelineSection animationDelay={3}>
                        January 2015 - June 2015
                        <TimelineSectionTitle>Research Traffic Condition Forecasting</TimelineSectionTitle>
                        <TimelineSectionLocation>De Montfort University, Leicester</TimelineSectionLocation>
                        <ul>
                            <li>
                                Writing software to support in managing large trac data sets, using the programming
                                languages Java and Scala.
                            </li>
                            <li>
                                Developing visualisation tools to identify relationships between trac data and building
                                energy con- sumption.
                            </li>
                            <li>
                                Aggregating large trac and energy consumption data sets to visualise using
                                multi-dimensional visu- alisation techniques.
                            </li>
                        </ul>
                    </TimelineSection>
                    <TimelineSection animationDelay={3}>
                        June 2013 - August 2014
                        <TimelineSectionTitle>
                            Synthetic Environments and Collaborative Systems Internship
                        </TimelineSectionTitle>
                        <TimelineSectionLocation>
                            Airbus Group Innovations, Newport, United Kingdown (Industrial Placement)
                        </TimelineSectionLocation>
                        <ul>
                            <li>
                                Developed proof of concept software demonstrators to support Research and Development
                                projects and activities in C++ and C#
                            </li>
                            <li>
                                Participation in the development of Virtual Collaborative Environments aimed to
                                influence industrial domains such as Cyber Security and Aircraft Maintenance.
                            </li>
                            <li>Support in Research and Development in Visualisation libraries and Visual Analytic.</li>
                        </ul>
                    </TimelineSection>
                </Timeline>
            </Content>
            <SecondaryTitle>EDUCATION</SecondaryTitle>
            <img src={educationImage} height="70px" />
            <Content>
                <Timeline>
                    <TimelineSection animationDelay={3}>
                        Sept 2011 - July 2015
                        <TimelineSectionTitle>
                            Bachelor of Science (BSc Hons) Software Engineering with Industrial Placement First Class
                            Honours
                        </TimelineSectionTitle>
                        <TimelineSectionLocation>De Montfort University Leicester</TimelineSectionLocation> 87% Average
                        <SubTimeline>
                            <TimelineSection animationDelay={3}>
                                Sept 2014 - July 2015
                                <TimelineSectionTitle>Third year modules</TimelineSectionTitle>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableHeading>Module</TableHeading>
                                            <TableHeading>Grade %</TableHeading>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Telematics</TableCell>
                                            <TableCell>83</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Rigorous Systems</TableCell>
                                            <TableCell>91</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Mobile Robotics</TableCell>
                                            <TableCell>84</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Systems Building: Methods and Management</TableCell>
                                            <TableCell>82</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Computing Project</TableCell>
                                            <TableCell>87</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Ethics and Professional Practice</TableCell>
                                            <TableCell>55</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TimelineSection>
                            <TimelineSection animationDelay={3}>
                                Sept 2012 - July 2013
                                <TimelineSectionTitle>Second year modules</TimelineSectionTitle>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableHeading>Module</TableHeading>
                                            <TableHeading>Grade %</TableHeading>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Internet Software Development</TableCell>
                                            <TableCell>82</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Object Orientated Software Design and Development</TableCell>
                                            <TableCell>92</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Data Structures and Algorithms</TableCell>
                                            <TableCell>90</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Database Design and Implementation </TableCell>
                                            <TableCell> 89</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TimelineSection>
                            <TimelineSection animationDelay={3}>
                                Sept 2011 - July 2012
                                <TimelineSectionTitle>First year modules</TimelineSectionTitle>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableHeading>Module</TableHeading>
                                            <TableHeading>Grade %</TableHeading>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Programming in C</TableCell>
                                            <TableCell>91</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Creative Client Computing</TableCell>
                                            <TableCell>93</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Computer Systems</TableCell>
                                            <TableCell>80</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Computational Modelling</TableCell>
                                            <TableCell>97</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TimelineSection>
                        </SubTimeline>
                    </TimelineSection>
                    <TimelineSection animationDelay={3}>
                        Sept 2006 - July 2011
                        <TimelineSectionTitle>Computing ADV, A2 Applied ICT Double</TimelineSectionTitle>
                        <TimelineSectionLocation>
                            Rawlins Community College Quorndon, Leicestershire
                        </TimelineSectionLocation>
                        Award B,B,B
                    </TimelineSection>
                </Timeline>
            </Content>
            <MenuButton onClick={() => setMenuShown(true)}></MenuButton>
        </Main>
    );
};

export { CurriculumVitae as default };
