import * as React from 'react';
import Main from 'shell/Main';
import vietnam5Image from 'shell/Images/Vietnam5.jpg';
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

const Content = styled.div`
    font-size: 1.5rem;
    align-self: stretch;
`;

export const CurriculumVitae: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main backgroundImage={vietnam5Image} showMenu={menuShown} setMenuShown={setMenuShown}>
            <Title>Curriculum Vitae</Title>
            <SecondaryTitle>EXPERIENCE</SecondaryTitle>
            <img src={experienceImage} height="70px" />
            <Content>
                <Timeline>
                    <TimelineSection>
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
                    <TimelineSection>
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
                    <TimelineSection>
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
                    <TimelineSection>
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
                    <TimelineSection>
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
                    <TimelineSection>
                        Sept 2011 - July 2015
                        <TimelineSectionTitle>
                            Bachelor of Science (BSc Hons) Software Engineering with Industrial Placement First Class
                            Honours
                        </TimelineSectionTitle>
                        <TimelineSectionLocation>De Montfort University</TimelineSectionLocation> 87% Average Leicester
                    </TimelineSection>
                </Timeline>
            </Content>
            <MenuButton onClick={() => setMenuShown(true)}></MenuButton>
        </Main>
    );
};

export { CurriculumVitae as default };
