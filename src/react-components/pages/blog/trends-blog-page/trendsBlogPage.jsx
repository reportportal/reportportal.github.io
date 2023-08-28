/*
 * Copyright 2023 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import TrendsBackgroundImage from './img/trendsBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';

const TrendsBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['AutomatedTestingTrends2023']}
      date={'June 22, 2023'}
      background={TrendsBackgroundImage}
    />
    <BlogPageContent title={'Trends in automated testing in 2023'}>
      <h3>
        The GPT Gold Rush
      </h3>
      <p>
        It's undeniable that the emergence of ChatGPT has rocked the entire world and all industries, particularly software development and testing. Large Language Models (LLMs) have been around for a while, but the implementation of such a generative version of an LLM model in a chat format, which maintains conversation and feels like an extremely well-informed companion, has captured people's attention even more.
      </p>
      <p>
        Machine Learning models existed before the GPT-boom, but we've never identified them with such human-like qualities before. From generating high-quality text for your diploma or article to attempting to generate programming code – it has prompted people to reconsider how we write code or test applications.
      </p>
      <p>
        However, there's a subtle yet crucial line in how we use this tool. If we draw an analogy to the early 20th century, our attempts to use generative models mostly resemble efforts to ask the "magic box" – how to make horses faster, or how to optimally feed them on 1,000-mile journeys. In reality, we should be asking it or ourselves – what alternative modes of transport could we create and how can we create them?
      </p>
      <p>
        Every company is now trying to find the most valuable use cases for generative models in their work, somewhere to replace routine, monotonous tasks, and in other cases, to completely create everything with them.
      </p>
      <p>
        Unfortunately, these models are far from the concept of General AI and are not capable of doing all the work for us. But they can certainly assist us in areas of working with text, textual representation of steps, requirements. And even in generating basic actions and models in code.
      </p>
      <p>
        Can ChatGPT write all the code for you now? It seems unlikely, at least for the time being. We can see this in the example of Co-pilot, which has access to almost all the codebases in the world inside GitHub, but still cannot write even a somewhat complex code structure. Perhaps because GitHub is filled with far-from-perfect code, 90% of which consists of examples from people learning technologies, and copied homework from each other, inheriting errors in them.
      </p>
      <p>
        Therefore, for now, we can only talk about supplementing the development and testing process. And many companies in 2023 will be looking for optimal applications of such supplements. This will definitely continue into 2024.
      </p>
      <h3>
        AI Augmented Testing
      </h3>
      <p>
        Just as AR (Augmented Reality) occupies a space between the Real World and the Virtual (VR), so we're entering an intermediary stage between traditional testing and full-fledged testing with AI, which we'll call AI Augmented Testing. We'll inhabit this era until the advent of General AI or something closely resembling it.
      </p>
      <p>
        AI Augmented Testing could take various forms: from generating BDD scenarios based on existing keyword libraries or searching for the most similar test scenarios based on their steps, to generating templates for unit or API tests for any API in your application.
      </p>
      <p>
        This will manifest itself in the emergence of both scripts and algorithms for local application, as well as extensions for code editors (IDEs). Even within our company, we've identified over 700 valuable applications of GPT-like models, sifted from a total of several thousand. The same process will undoubtedly be happening in other companies.
      </p>
      <p>
        Are we just entering this phase? Far from it. We're already deep in it. Visual Testing with image recognition, like in <a target="_blank" href='https://applitools.com/' rel="noreferrer">Applitools</a>, self-healing capabilities for Selenium-based test cases, like in <a target="_blank" href='https://healenium.io/' rel="noreferrer">Healenium</a>, and the analysis and categorization of test results, like in <a target="_blank" href='https://reportportal.io/?utm_source=trigger&utm_medium=rp_1&utm_campaign=trends&utm_content=blog' rel="noreferrer">ReportPortal</a> - all of these are already here. Now they're receiving a new stimulus and renewed interest.
      </p>
      <p>
        The trend for 2023-2024 will be the creation of accelerators capable of incorporating these AI Augmented Capabilities. The foundation for them should be platforms that cover the maximum testing or development workflow. Alternatively, this may lead to an increasing number of accelerators being compelled to amalgamate their abilities into a unified platform.
      </p>
      <h3>
        Data Privacy and Security
      </h3>
      <p>
        Data protection is becoming even more critical. Some companies have globally prohibited the use of ChatGPT and its analogs due to concerns about data leaks or training models on company achievements. Therefore, local models like DaVinci and BERT will increasingly come into play.
      </p>
      <p>
        The cost of these local models and the amount of data required for their training will likely be limiting factors. Thus, solutions that can serve as interfaces for any model, allowing the end user to choose which provides the best results, will take the lead.
      </p>
      <p>
        Switching between local models and those from cloud providers will help achieve maximum results. 2023 and 2024 are set to be years of intensified development for local versions of these models, with a heightened focus on security.
      </p>
      <h3>
        Platform-centric Solutions
      </h3>
      <p>
        Increasingly, market solutions and tools will move from niche solutions to horizontally expanding their capabilities. We're already seeing this with tools like SauceLabs and BrowserStack. These systems, initially providing access to remote browsers, are gradually broadening their scope through the addition of tools for performance, test result management, observability, test case management, visual testing, and more.
      </p>
      <p>
        In the trends of 2023-2025, we likely anticipate a return to systems on the scale of HP ALM, but enriched with smarter features than before, augmented with AI. This could manifest in active company acquisitions or horizontal functionality growth.
      </p>
      <h3>
        More SaaS and Less On-Prem
      </h3>
      <p>
        Cloud solutions and services are permeating the development process more deeply, gaining trust from even the most conservative market players, such as banks and financial institutions. Development and system engineering, i.e., Dev and Ops, have almost entirely migrated to cloud services. It's now time for the Test part to follow suit and complete the DevTestOps cycle.
      </p>
      <p>
        This trend will be strongly supported by the <a target="_blank" href='https://www.linkedin.com/posts/ghdmitry_ai-testing-software-activity-7050208879938281472-hChI' rel="noreferrer">Containerization Revolution I've written about previously</a>. We've already learned to containerize production applications and we're doing quite well at containerizing development and testing environments. The next step is working with remote environments, which will, of course, be part of the SaaS infrastructure.
      </p>
      <p>
        The trend for 2023-2024 will be an increased transition to SaaS systems, starting from Test Case Management systems to the execution of automated tests, use of remote infrastructure, test generation, result collection, and verification. Your computer will increasingly become a "window" into a large development infrastructure where you'll be writing some code executed somewhere in the cloud. And soon, you'll just be watching how this code is written by an AI algorithm and executed somewhere out there.
      </p>
      <h3>
        JavaScript vs Programming Languages
      </h3>
      <p>
        The trend for 2023-2024 will definitely be the continued exponential growth of test automation in JavaScript. Python is battling for the second position of steady growth, leaving JVM-based languages (Java, Kotlin, etc.) behind.
      </p>
      <p>
        Based on the statistics from ReportPortal and the execution of tests involving our agents, we're witnessing the rapid growth of JS. This doesn't mean that Java automation has surrendered its position, not at all. Considering the age of this technology and the volume of existing automation in Java, it will remain in the top tier and even continue to grow for quite some time. However, the growth of JS-based automation is impressive.
      </p>
      <p>
        In general, this is good news for the JS automation community, especially for <a target="_blank" href='https://playwright.dev/' rel="noreferrer">Playwright</a>. However, it's bad news for <a target="_blank" href='https://www.cypress.io/' rel="noreferrer">Cypress</a>. Huge investments in marketing once allowed it to build its audience, but we're seeing interest in Cypress wane. Our suspicions are confirmed by <a target="_blank" href='https://www.reddit.com/r/softwaretesting/comments/12ii8ib/cypressio_is_about_to_die_you_should_migrate_your/' rel="noreferrer">discussions in the Reddit community</a>. It seems we're observing a "sunset".
      </p>
      <h3>
        Consolidation and Persistence of Test Reporting
      </h3>
      <p>
        Starting in 2021, projects have increasingly started to consider consolidated storage of testing results. This is especially considering the variety of test types, testing frameworks for their implementation, and even programming languages.
      </p>
      <p>
        In 2023, the necessity and ability to gather all testing results together to make informed decisions becomes even more critical. Yes, the world at large, and testing in particular, will have a tough time fighting against the flood of Excel reports from team leaders. But in an era of increasingly cloud-based infrastructure and GitLab pipelines that don't leave behind artifacts, the ability to save results in real-time becomes more and more relevant.
      </p>
      <p>
        <a target="_blank" href='https://reportportal.io/?utm_source=trigger&utm_medium=rp_2&utm_campaign=trends&utm_content=blog' rel="noreferrer">ReportPortal</a> has been addressing this capability for quite some time now. I'm reminded of questions at conferences about 5 years ago along the lines of "Why do we need this?" - now it's not just a possibility, it's a necessity. And we were able to catch this trend in time.
      </p>
      <h3>
        Quality Gates
      </h3>
      <p>
        Starting in 2021, the possibility of creating automated Quality Gates has become increasingly relevant.
      </p>
      <p>
        Imagine you've learned to gather all testing results at a single point, you've managed to conduct a complete analysis of failures and categorize their causes using ML algorithms, you have information about which components, flows, and priority parts have been tested, and now you'd like the ability to make an automatic decision on whether your application is ready to move further along the pipeline after the testing stage or not.
      </p>
      <p>
        This is precisely what the concept of Quality Gates is for, which provides the ability to create complex rules for decision-making. For example, we don't want to have test failures for critical functionality, we don't accept product problems in functionality related to payment, but we're ready to pass the build if we have, for example, failures in test cases with minor priority and even more so if they failed due to test irrelevance.
      </p>
      <p>
        A premium feature called Quality Gates in ReportPortal allows you to achieve exactly this and provide the simplest Go/NO-GO answer back into your pipeline.
      </p>
      <p>
        The trend for 2023-2024 will be the widespread adaptation of Quality Gates on top of the results of automated testing.
      </p>
      <h3>
        Shift-Left Testing
      </h3>
      <p>
        More and more major companies in the market are focusing on shift-left testing approaches. Namely, they're making testing tasks increasingly the responsibility of developers. Yes, there's still a need for specialized knowledge about the domain or specific testing conditions, which the testing team covers. But overall, there's a noticeable trend of moving automated testing closer to developers. What does this give companies? Primarily, it reduces expenses while improving product quality.
      </p>
      <p>
        How can one increase quality while decreasing testing costs? The answer is quite simple - it involves breaking down silos in the development team's thinking, where the mindset is "I've done my task, tossed it over the fence to testing, and it's no longer my concern." When the responsibility for quality becomes part of the developer's tasks, it changes attitudes towards how testable the code is and how resistant it is to exceptions and corner cases.
      </p>
      <p>
        One could argue that this slows down the team's velocity. And that's true. However, at the same time, it reduces the team cost for the testing and automation team. By changing the team composition, we can simply increase the number of developers on the team to maintain velocity.
      </p>
      <p>
        So, how do we save money then? If we've merely shifted costs from one team to another? The savings here occur due to accelerating the bug resolution cycle in the product. At the very least, there are fewer bugs, and at most, they're discovered faster at earlier stages, which also speeds up time to market.
      </p>
      <h3>
        In-Sprint Test Automation
      </h3>
      <p>
        Emerging from the shift-left movement, in-sprint automation will gain more attention and interest as it will be a crucial and the most beneficial way to achieve a Shift-Left approach.
      </p>
    </BlogPageContent>
  </>
);

export default TrendsBlogPage;