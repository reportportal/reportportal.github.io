import { features, iconsCustomers, iconsFrameworks } from '../../utils/imageSource.js'

export const navigationList = [
  { id: 1, name: 'Single-entry point for test reporting', link: '#link-single-entry' },
  { id: 2, name: 'Categorisation of failure', link: '#link-categorisation' },
  { id: 3, name: 'AI-based failure reason detection', link: '#link-ai-based' },
  { id: 4, name: 'Rich artifacts in test reports', link: '#link-rich-artifacts-in-test-reports' },
  { id: 5, name: 'Real-time reporting', link: '#link-real-time-reporting' },
  { id: 6, name: 'Data visualisation', link: '#link-visualisation-of-tests' },
  { id: 7, name: 'REST API', link: '#link-rest-api' },
  { id: 8, name: 'Quality Gates', link: '#link-quality-gates' },
]


export const featuresList = [
  {
    title: 'Single-entry point and unified test reporting ',
    description:'Use a single-entry point to aggregate the results of all the automated tests in a unified way. It will help you to improve the efficiency and consistency of the testing process, enhance traceability and collaboration between the development team and stakeholders as all test results can be accessed, reviewed, and analyzed in one place.',
    image: features.feature1,
    link: 'link-single-entry'
  },
  {
    title: 'Categorisation of failures based on issue roots',
    description:'Get a better understanding of the underlying causes of the failures and set the appropriate Defect types to them: Product bug, Auto Bug, System Issue or custom type. Having all the failures categorized, you will be able to understand the failures context better, prioritize the issues and ensure that the most critical issues are addressed first.',
    image: features.feature2,
    link: 'link-categorisation'
  },
  {
    title: 'AI-based failure reason detection',
    description:'Reduce the time and resources by automating the process of identifying the root cause of test failures. By automating failure triaging process, your team will be able to focus on addressing the identified issues, increasing the coverage, rather than spending time on manual analysis.',
    image: features.feature3,
    link: 'link-ai-based'
  },
  {
    title: 'Rich artifacts in test reports',
    description: 'Get additional information beyond the basic test results, such as logs, screenshots, video recordings and network traffic (payloads and requests). This information will help you to speed up results analysis and categorization by providing more details about the test results and will makes it easier to replicate and debug issues.',
    image: features.feature4,
    link: 'link-rich-artifacts-in-test-reports'
  },
  {
    title: 'Real-time reporting',
    description: 'Access and view test results as soon as they are generated. No need to wait for the moment when test execution is completed. It will help you to speed up the process of addressing issues and save a significant amount of time in the long run.',
    image: features.feature5,
    link: 'link-real-time-reporting'
  },
  {
    title: 'Visualisation of test results',
    description: 'Get a better understanding of the overall status of the testing process and product health, identify areas that need improvement and make data-driven decisions on product release.',
    image: features.feature6,
    link: 'link-visualisation-of-tests'
  },
  {
    title: 'REST API ',
    description: 'Access and manipulate test results in a programmatic way in order to automate the process of sending test results, integrate with other tools, create custom reports, generate alerts or notifications and trigger certain actions like re-running of test cases, or triggering a build in a CI/CD pipeline.',
    image: features.feature7,
    link: 'link-rest-api'
  },
  {
    title: 'Quality Gates',
    description: 'Use as an objective means of evaluating the quality of a software release, as opposed to subjective opinions or guesses. This will help to ensure that the software is of high quality and is free of major defects or issues, which can improve customer satisfaction and reduce the risk of software failures.',
    image: features.feature8,
    link: 'link-quality-gates'
  },
];


export const collapsableList = [
  { id: 1, title: 'What is meant by "Premium feature"?', description : "Premium feature is an advanced feature which comes on top of Free Open Source edition. It comes at no cost with SaaS offering and included into the 168+ Managed Services package.See the the List of features and their description." },
  { id: 2, title: 'What capabilities does Rest API provide?' , description: "REST API enables users to easily integrate any testing framework or third-party tool with ReportPortal so as to report data into ReportPortal, call analyze action, add attributes, merge/update/finish launches. Besides, you can pull the data from ReportPortal in order to update the statuses in the pipeline, generate custom reports and many more."}
]


export const languageList = [
  { lang: "Java", id: "java" },
  { lang: ".NET", id: "dotnet" },
  { lang: "JavaScript", id: "javascript" },
  { lang: "Python", id: "python" },
  { lang: "PHP", id: "php" },
  { lang: "Other", id: "other" },
]


export const customerIcons = [...Object.values(iconsCustomers)]
export const frameworkIcons = [...Object.values(iconsFrameworks)]


export const frameworkIconsJava = [
  { icon: iconsFrameworks.testng },
  { icon: iconsFrameworks.junit },
  { icon: iconsFrameworks.junit5 },
  { icon: iconsFrameworks.spock },
  { icon: iconsFrameworks.soapui },
  { icon: iconsFrameworks.jbehave },
  { icon: iconsFrameworks.scalatest },
  { icon: iconsFrameworks.cucumber },
  { icon: iconsFrameworks.cucumber2 },
  { icon: iconsFrameworks.cucumber3 },
  { icon: iconsFrameworks.cucumber4 },
  { icon: iconsFrameworks.cucumber5 },
  { icon: iconsFrameworks.cucumber6 },
  { icon: iconsFrameworks.serenity },
  { icon: iconsFrameworks.karate },
  { icon: iconsFrameworks.artos },
  { icon: iconsFrameworks.android },
]

export const frameworkIconsDotNet = [
  { icon: iconsFrameworks.nunit },
  { icon: iconsFrameworks.vstest },
  { icon: iconsFrameworks.specflow },
  { icon: iconsFrameworks.unitnet }
]

export const frameworkIconsJavascript = [
  { icon: iconsFrameworks.cucumber },
  { icon: iconsFrameworks.jasmine },
  { icon: iconsFrameworks.mocha },
  { icon: iconsFrameworks.nightwatch },
  { icon: iconsFrameworks.jest },
  { icon: iconsFrameworks.cypress },
  { icon: iconsFrameworks.codecept },
  { icon: iconsFrameworks.postman },
  { icon: iconsFrameworks.testcafe },
  { icon: iconsFrameworks.webdriver },
  { icon: iconsFrameworks.playwright }
]

export const frameworkIconsPython = [
  { icon: iconsFrameworks.pytest },
  { icon: iconsFrameworks.robotframework },
  { icon: iconsFrameworks.pythonbehave },
  { icon: iconsFrameworks.nose }
]

export const frameworkIconsPhp = [
  { icon: iconsFrameworks.behat },
  { icon: iconsFrameworks.phpunit },
  { icon: iconsFrameworks.codeception }
]


export const frameworkIconsOther = [
  { icon: iconsFrameworks.st },
  { icon: iconsFrameworks.gwen },
  { icon: iconsFrameworks.gauge }
]

