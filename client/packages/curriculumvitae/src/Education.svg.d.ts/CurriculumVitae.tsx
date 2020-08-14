import * as React from 'react';
import Main from './node_modules/shell/Main';
import vietnam5Image from './node_modules/shell/Images/Vietnam5.jpg';
import Title from './node_modules/shell/Title';
import { SecondaryTitle } from '../SecondaryTitle/SecondaryTitle';
import styled from 'styled-components';
import { Jobs } from '../Jobs/Jobs';
import { Job } from '../Job/Job';
import { JobTitle } from '../Job/JobTitle';
import { JobCompany } from '../Job/JobCompany';
import MenuButton from './node_modules/shell/MenuButton';

const Content = styled.div`
    font-size: 1.5rem;
`;

export const CurriculumVitae: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main backgroundImage={vietnam5Image} showMenu={menuShown} setMenuShown={setMenuShown}>
            <Title>Curriculum Vitae</Title>
            <MenuButton onClick={() => setMenuShown(true)}></MenuButton>
            <SecondaryTitle>EXPERIENCE</SecondaryTitle>
            <Content>
                <Jobs>
                    <Job>
                        December 2018-Present
                        <JobTitle>Senior Developer</JobTitle>
                        <JobCompany>Access Group UK</JobCompany>
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
                    </Job>
                    <Job>
                        October 2017 - December 2018
                        <JobTitle>Developer</JobTitle>
                        <JobCompany>Access Group UK</JobCompany>
                        <ul>
                            <li>
                                Developing and maintaining a custom command line interface using webpack to help other
                                development teams scafold frontend projects using React and TypeScript
                            </li>
                            <li>Aiding in the development of Restful Api's built in ASP.NET Core MVC.</li>
                        </ul>
                    </Job>
                    <Job>
                        August 2015 - October 2017
                        <JobTitle>Junior Application Developer</JobTitle>
                        <JobCompany>Access Group UK</JobCompany>
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
                    </Job>
                    <Job>
                        January 2015 - June 2015
                        <JobTitle>Research Traffic Condition Forecasting</JobTitle>
                        <JobCompany>De Montfort University, Leicester</JobCompany>
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
                    </Job>
                    <Job>
                        June 2013 - August 2014
                        <JobTitle>Synthetic Environments and Collaborative Systems Internship</JobTitle>
                        <JobCompany>
                            Airbus Group Innovations, Newport, United Kingdown (Industrial Placement)
                        </JobCompany>
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
                    </Job>
                </Jobs>
            </Content>
            <SecondaryTitle>EDUCATION</SecondaryTitle>
        </Main>
    );
};

export { CurriculumVitae as default };
