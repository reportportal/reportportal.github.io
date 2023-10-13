import React from 'react';

import DownloadIcon from '../../svg/download.inline.svg';

import './TermsPage.scss';

export const TermsPage: React.FC = () => (
  <div className="terms-page">
    <div className="terms-page__hero">
      <div className="container">
        <h1>Terms and Conditions</h1>
      </div>
    </div>
    <div className="terms-page__container container">
      <p className="terms-page__info">
        The following Terms and Conditions (“Terms”) govern Customer’s use of the Report Portal
        Platform and any Services provided by Test IO, Inc (“Test IO”). The Report Portal Platform
        and any other software is licensed and not sold.
      </p>
      <a
        className="btn btn--large btn--primary terms-page__download-link"
        download
        href="/ReportPortal Terms and Conditions.pdf"
      >
        <DownloadIcon />
        Download Terms and Conditions
      </a>
      <section>
        <h2>1. Definitions</h2>
        <div>
          <p>
            Capitalized terms in this Agreement have the following meanings when used in this
            Agreement or any exhibit or attachment hereto:
          </p>
          <p>
            <strong>“Content”</strong> means Customer data or any other data, information, text or
            graphics, or software provided to Test IO by Customer and/or its Users.
          </p>
          <p>
            <strong>“Effective Date”</strong> means the date these Terms are accepted by Customer.
          </p>
          <p>
            <strong>“Intellectual Property Right”</strong> means all tangible and intangible rights
            associated with works of authorship throughout the world, including but not limited to,
            copyrights, moral rights, and mask works; trademarks and trade name rights and similar
            rights; trade secret rights; patents, designs, algorithms, and other intellectual or
            industrial property rights (of every kind and nature throughout the world and however
            designated) whether arising by operation of law, contract, license, or otherwise; and
            all registrations, initial Platform, renewals, extensions, continuations, divisions, or
            reissues now or hereafter in force (including any rights in the foregoing) anywhere in
            the world, that exist as of the Effective Date or hereafter come into existence,
            regardless of whether or not such rights have been registered with the appropriate
            authorities in such jurisdictions in accordance with the relevant legislation.
          </p>
          <p>
            <strong>“Open Source Software”</strong> means software that is openly and freely
            licensed under the terms of a public license and as defined by the Open Source
            Initiative (http://opensource.org) or the Free Software Foundation (http://www.fsf.org).
          </p>
          <p>
            <strong>“Platform”</strong> means Report Portal cloud-based services including any
            related mobile applications, and all upgrades and enhancements to the Platform that may
            be provided by Test IO under this Agreement.
          </p>
          <p>
            <strong>“User”</strong> means a single person with a unique ID and password provided by
            Customer enabling access to a Site. A User may be (i) a Customer employee; or (ii) any
            contractors or other staff who are working for Customer; and (iii) any other person
            working with, or on behalf, of Customer; provided that (a) such User is accessing and
            using the Services exclusively on Customer’s behalf, and (b) Customer will at all times
            be responsible for the actions and omissions of each User as if such actions and
            omissions were that of Customer.
          </p>
          <p>
            <strong>“Services”</strong> means any services provided by Test IO through the Platform.
          </p>
          <p>
            <strong>“Site”</strong> means a section of the Platform configured for use by Customer
            intended to enable Users to create and implement tests specific to Customer. The Site
            may contain information on multiple tests designated by Customer.
          </p>
        </div>
      </section>
      <section>
        <h2>2. Licenses and Restrictions</h2>
        <div>
          <p>
            <strong>2.1. Platform License.</strong> Subject to the terms and conditions of this
            Agreement, Test IO grants to Customer during the subscription term, a limited,
            worldwide, non-exclusive, non-transferable, royalty bearing license, without right of
            sublicense, to access and use the Platform solely for Customer’s internal business
            purposes of software testing.
          </p>
          <p>
            <strong>2.2. Customer grants Test IO</strong> a world-wide, perpetual, irrevocable,
            royalty-free, license to use, display, reproduce and distribute the Content on the Site
            solely (a) for archival purposes and to carry out Test IO’s obligations under this
            Agreement, and (b) for Test IO’s internal use in improving the Site and Services so long
            as it does not disclose the identity of the Customer.
          </p>
          <p>
            <strong>2.3. Restrictions and Customer Obligations.</strong> Customer may not use the
            Platform in any manner that could damage, disable, overburden, or impair servers,
            networks or other devices running, or connected to, the Platform. Except as otherwise
            explicitly provided in this Agreement or as may be expressly permitted by applicable
            law, Customer will not, and will not permit or authorize third parties to use the
            Platform (a) to reproduce, modify, translate, enhance, decompile, disassemble, reverse
            engineer, or create derivative works of the Platform, (b) rent, lease, or sublicense the
            Platform, (c) on a service bureau or Platform service provider basis, (d) to provide,
            divulge, disclose, or make available to, or permit the use of the Platform by any third
            party, or (e) to circumvent or disable any technological features or measures in the
            Platform. Customer may not publish any benchmark or comparison information regarding the
            Platform or Services without the prior written consent of Test IO. Customer will neither
            alter nor remove any copyright notice or other proprietary rights notices that may
            appear on any part of the Platform. Customer will always comply with all applicable
            laws, statutes, ordinances, and regulations in connection with its use of the Platform.
          </p>
          <p>
            <strong>2.4. Use of Open Source Software</strong> within the Services will be governed
            by the respective Open Source Software license. Customer acknowledges and agrees that
            any use of Open Source Software, shall be made at Customer’s own risk.
          </p>
        </div>
      </section>
      <section>
        <h2>3. Reservation of Rights</h2>
        <div>
          <p>
            Access and use of the Platform is licensed by Test IO to Customer, not sold, and nothing
            in this Agreement will be interpreted or construed as a sale of the Platform. Customer
            will not have any rights in or to the Platform, except as expressly granted in this
            Agreement, and Test IO retains all Intellectual Property Rights in and to the Platform
            and Services. Other than in relation to Open Source Software, the Platform, all copies
            thereof, any derivative works, compilations, and collective works of the Platform, and
            any know-how and trade secrets related thereto are the sole and exclusive property of
            Test IO and contain Test IO’s confidential and proprietary materials. Customer will take
            appropriate steps and precautions for the protection of the Platform. Without limiting
            the generality of the foregoing, Customer will use its best efforts to prevent any use,
            possession, knowledge, examination, copying, disclosure, or other activity involving any
            part of the Platform that is not expressly authorized by this Agreement (“Unauthorized
            Use”) and immediately notify Test IO in writing of any Unauthorized Use that comes to
            Customer’s attention and will take all steps reasonably necessary to terminate such
            Unauthorized Use.
          </p>
        </div>
      </section>
      <section>
        <h2>4. Customer Obligations</h2>
        <div>
          <p>
            Customer acknowledges that certain services provided by Test IO are dependent on
            Customer providing Test IO certain data, Content, information and/or assistance.
          </p>
        </div>
      </section>
      <section>
        <h2>5. Services and Technical Support</h2>
        <div>
          <p>
            As of the Effective Date, Test IO will make available to Customer the Platform and any
            Services specified in the Order that have been purchased by Customer. Unless expressly
            purchased as managed services work, Services will not include the setting up and/or
            configuration of the Site or the configuration of any tests and such activity will be
            the responsibility of Customer. Additional Services may be purchased by Customer upon
            written agreement of the parties at the Test IO pricing current at the effective date of
            the Order.
          </p>
        </div>
      </section>
      <section>
        <h2>6. Feedback</h2>
        <div>
          <p>
            Customer may, during the term, provide Test IO with verbal feedback and/or written
            feedback related to Customer’s use of the Test IO Platform or Services, including, but
            not limited to, a report of any errors which Customer may discover. Such reports, and
            any other materials, information, ideas, concepts, feedback and know-how provided by
            Customer to Test IO concerning the Platform, Services or any other Test IO products or
            services, and any information reported automatically through the Platform or Services to
            Test IO (“Feedback”) will be the property of Test IO. Customer agrees to assign, and
            hereby assigns, all right, title and interest worldwide in the Feedback, and the related
            intellectual property rights, to Test IO and agrees to assist Test IO, at Test IO’
            expense, in perfecting and enforcing such rights.
          </p>
        </div>
      </section>
      <section>
        <h2>7. Payments</h2>
        <div>
          <p>
            <strong>7.1. Fees.</strong> The Customer agrees to pay the fees set forth in any Order.
            Unless otherwise stated in the Order, all undisputed fees are due within 14 days of the
            date of invoice. All Orders are non-cancelable and non-refundable unless otherwise
            expressly stated in this Agreement. Invoices for periods less than the subscription term
            may occasionally be issued as a convenience, but an invoice does not shorten a
            subscription term or give any early termination right to Customer. All payments will be
            made in United States dollars in immediately available funds. Any amounts not paid when
            due will bear interest at a rate of 18% per annum, compounded monthly, or the maximum
            rate permitted by law, whichever is lower. Test IO reserves the right to suspend any
            Services or Customer access to Platform if any undisputed fees are more than 10 days
            past due.
          </p>
          <p>
            <strong>7.2. Disputed Invoices.</strong> In the event Customer reasonably and in good
            faith disputes any fee(s) set forth on any invoice or record of payment issued by Test
            IO, Customer must notify Test IO in writing, setting forth the reasons for non-payment
            and the amount of such dispute (a “Dispute Notice”), no later than 30 days following the
            receipt of the invoice or record of payment. Upon receipt of a Dispute Notice, both
            parties will promptly make available appropriate personnel to work in good faith to
            resolve the dispute within 15 days. Upon resolution of the dispute by the parties,
            additional agreed amounts due from Customer, if any, in relation to the applicable
            invoice must be remitted to Test IO within 10 days following such resolution. If the
            dispute remains unresolved 60 days after the date of the invoice at issue, either party
            may declare the other party in breach of this Agreement and pursue any or all legal
            remedies available to it.
          </p>
          <p>
            <strong>7.3. Taxes.</strong> The fees hereunder are exclusive of, and Customer will pay,
            any sales, use and other taxes and similar charges based on or arising from the Services
            or any Platform, this Agreement or its performance, other than taxes based on Test IO’s
            net income.
          </p>
        </div>
      </section>
      <section>
        <h2>8. Confidentiality</h2>
        <div>
          <p>
            <strong>8.1. Generally.</strong> “Confidential Information” will mean confidential or
            other non-public proprietary information that is disclosed by either party to the other
            under this Agreement, including without limitation, Platform, software code and designs,
            hardware, product specifications and documentation, financial data, business, marketing
            and product plans, or technology.
          </p>
          <p>
            <strong>8.2. Obligations of Confidentiality.</strong> Each party agrees that it will
            hold in strict confidence and not disclose the Confidential Information of the other
            party to any third party and to use the Confidential Information of the other party for
            no purpose other than the purposes expressly permitted by this Agreement. Each party
            will only permit access to the other party’s Confidential Information to those of its or
            its affiliates’ employees, contractors and advisors having a need to know and who have
            signed or are bound by confidentiality obligations or agreements containing terms at
            least as restrictive as those contained in this Agreement. Each party will maintain the
            confidentiality and prevent accidental or other loss or disclosure of any Confidential
            Information of the other party with at least the same degree of care as it uses to
            protect its own Confidential Information, but in no event with less than reasonable
            care.
          </p>
          <p>
            <strong>8.3. Exclusions from Obligations.</strong> A party’s obligations of
            confidentiality under this Agreement will not apply to information which such party can
            document the information (a) is in the public domain without the breach of any agreement
            or fiduciary duty or the violation of any law, (b) was known to the party prior to the
            time of disclosure without the breach of any agreement or fiduciary duty or the
            violation of any law, (c) is proven by contemporaneous records to be independently
            developed by the party prior to receiving such Confidential Information and without use
            or reference to the Confidential Information.
          </p>
          <p>
            <strong>8.4. Legally Required Disclosure.</strong> In the event either party is required
            to disclose, pursuant to a judicial order, a requirement of a governmental agency or by
            operation of law, any Confidential Information provided to it by the other party then
            such party will provide the other party written notice of any such requirement
            immediately after learning of any such requirement, and take commercially reasonable
            measures to avoid or limit disclosure under such requirements and to obtain confidential
            treatment or a protective order and allow the other party to participate in the
            proceeding. Any disclosure will be the minimum disclosure as recommended by a party’s
            legal counsel and no disclosure will remove the obligations of confidentiality to any
            remaining Confidential Information nor permit any other disclosure of the Confidential
            Information in other circumstances.
          </p>
          <p>
            <strong>8.5. Injunctive Relief.</strong> Each party recognizes and acknowledges that any
            use or disclosure of the Confidential Information of the other party in a manner
            inconsistent with the provisions of this Agreement will cause the other party
            irreparable damage for which remedies at law may be inadequate. Accordingly, the
            non-breaching party will have the right to seek an immediate injunction in respect of
            any breach of these confidentiality obligations to obtain such relief. Notwithstanding
            the foregoing, this paragraph will not in any way limit the remedies in law or equity
            otherwise available to the non-breaching party.
          </p>
          <p>
            <strong>8.6. Return of Confidential Information.</strong> Upon written request by either
            party hereto, the other party will promptly return all documents and other tangible
            materials representing the requesting party’s Confidential Information and all copies
            thereof, except for any archived materials that are required to be retained by law or
            that are not easily retrievable from secured archival systems, or records created in the
            ordinary course of business that are kept by a party and used only for contract
            compliance and enforcement purposes subject to continuing confidentiality.
          </p>
        </div>
      </section>
      <section>
        <h2>9. Warranties and Disclaimers</h2>
        <div>
          <p>
            <strong>9.1. Warranty of Conformity.</strong> Test IO warrants that except for scheduled
            maintenance the Platform and Services will be generally available 99.9% of the time
            subject to Customer’s internet availability, and that Services will be performed in a
            professional manner. Test IO backs up all Report Portal data for disaster recovery
            purposes, and that it retains seven (7) days of full daily backups. Backups are used for
            disaster recovery procedures, not recovery from user error. Backups reside in a
            physically separate facility and are GPG encrypted. Test IO will use commercially
            reasonable efforts to correct, replace or re-perform the Platform and Services if they
            are not conforming to these warranties. This will be Customer’s sole and exclusive
            remedy for a breach of these warranties. Customer acknowledges that any Open Source
            Software provided by Test IO or EPAM Systems is provided &quot;as is&quot; and the
            warranties provided by Test IO or EPAM to Customer under this Agreement do not apply to
            any Open Source Software.
          </p>
          <p>
            <strong>9.2. Warranty by the Customer.</strong> The Customer warrants to Test IO that it
            has adequate rights to provide the Content it provides to the applicable Site and to
            authorize Report Portal to use and transmit such Content in the manner contemplated in
            these Terms.
          </p>
          <p>
            <strong>9.3. Disclaimer of Warranties.</strong> EXCEPT AS EXPRESSLY SET FORTH IN THIS
            AGREEMENT, REPORT PORTAL DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES OF ANY KIND
            REGARDING THIS AGREEMENT OR THE TRANSACTIONS CONTEMPLATED HEREBY, INCLUDING ANY IMPLIED
            WARRANTIES OF MERCHANTABILITY, NONINFRINGEMENT, TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            AND IMPLIED WARRANTIES ARISING FROM COURSE OF DEALING OR PERFORMANCE. THE PLATFORM,
            SERVICES, AND ALL DATA, MATERIALS AND DOCUMENTATION PROVIDED BY REPORT PORTAL IN
            CONNECTION WITH THIS AGREEMENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
            REPRESENTATIONS OR WARRANTIES OF ANY KIND. REPORT PORTAL AND ITS SUPPLIERS AND LICENSORS
            DO NOT WARRANT THAT THE PLATFORM, SERVICES, OR MATERIALS AND DOCUMENTATION OR THE
            FUNCTIONS CONTAINED THEREIN WILL BE CORRECT, UNINTERRUPTED, ERROR-FREE, COMPLETELY
            SECURE, FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT DEFECTS WILL BE CORRECTED.
            THE PLATFORM AND SERVICES MAY BE SUBJECT TO LIMITATIONS, DELAYS AND OTHER PROBLEMS
            INHERENT IN THE USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS. TEST IO IS NOT
            RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES OR OTHER DAMAGES RESULTING FROM SUCH
            PROBLEMS. EACH PARTY ACKNOWLEDGES THAT IT HAS RELIED ON NO REPRESENTATIONS OR WARRANTIES
            OTHER THAN THE EXPRESS WARRANTIES IN THIS AGREEMENT.
          </p>
        </div>
      </section>
      <section>
        <h2>10. Term and Termination</h2>
        <div>
          <p>
            <strong>10.1. Term.</strong> The term of this Agreement will commence upon the Effective
            Date and will continue for each product or service specified in the Order for the
            subscription period(s) specified in the Order, unless earlier terminated as set forth
            below, after which it will automatically renew for subsequent periods equal to the
            subscription period(s) in the Order, unless either party gives the other party not less
            than 30 days prior written notice of its intent not to renew, in which case the
            Agreement will terminate at the end of its then current term. Test IO does not send
            reminders about renewals or termination rights.
          </p>
          <p>
            <strong>10.2. Termination.</strong> Either party may terminate this Agreement (a) 30
            days after notice to the other party of a material breach if such breach remains uncured
            at the expiration of such thirty day period, or (b) in the event that the other party
            files any petition in bankruptcy or for reorganization, insolvency or debt consolidation
            under the federal bankruptcy laws, or under any comparable law, which filing is not
            dismissed within 60 days, (c) in the event that the other party makes an assignment of
            its assets for the benefit of creditors, (d) in the event that the other party applies
            for the appointment of a receiver or a trustee of its assets, or (e) in the event that
            the other party is being liquidated or dissolved. Notwithstanding any other provision of
            this Agreement, either party may immediately terminate this Agreement, with or without
            notice to the other party, for any breach of the other party’s confidentiality
            obligations under this Agreement.
          </p>
          <p>
            <strong>10.3. Effect of Termination.</strong> Immediately upon expiration or termination
            of this Agreement, Customer’s rights to use the Services will terminate and each party
            will have 30 days to return or destroy all Confidential Information it holds that
            belongs to the other party. For a period of 10 days after expiration or termination of
            the Agreement, Customer may request a download of its Content after which Test IO will
            have no obligation to retain or preserve such Content and may destroy it as part of its
            confidentiality obligation as provided herein. Customer will remain liable for all
            amounts due, and all such sums will become immediately due and payable upon termination
            or expiration of this Agreement. Except for termination arising from a breach or default
            by Test IO, no refund will be due Customer for any termination. Any other provisions
            which by their nature should survive termination or expiration of this Agreement, will
            so survive.
          </p>
        </div>
      </section>
      <section>
        <h2>11. Limitations of Liability</h2>
        <div>
          <p>
            <strong>11.1. Exclusion of Consequential Damages.</strong> TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW, EXCEPT FOR DAMAGES ARISING PURSUANT TO A BREACH OF THE
            PROVISIONS OF CONFIDENTIALITY, OR BREACH OF ANY APPLICABLE LICENSE GRANT OR RESTRICTION,
            IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR
            CONSEQUENTIAL DAMAGES ARISING OUT OF THIS AGREEMENT, INCLUDING BUT NOT LIMITED TO LOSS
            OF BUSINESS, REVENUE, PROFITS, GOODWILL, USE, DATA OR OTHER ECONOMIC ADVANTAGE AND ANY
            NON-ECONOMIC LOSSES, EVEN IF A PARTY HAS BEEN ADVISED IN ADVANCE OF THE POSSIBILITY OF
            SUCH DAMAGES.
          </p>
          <p>
            <strong>11.2. Limitation of Damages.</strong> EXCEPT FOR DAMAGES ARISING PURSUANT TO A
            BREACH OF THE PROVISIONS OF CONFIDENTIALITY, OR BREACH OF ANY APPLICABLE LICENSE GRANT,
            NEITHER PARTY’S TOTAL AGGREGATE LIABILITY FOR ANY AND ALL CLAIMS, LOSSES OR EXPENSES
            (INCLUDING ATTORNEYS’ FEES) ARISING OUT OF THIS AGREEMENT, WHETHER BASED IN CONTRACT,
            NEGLIGENCE, STRICT LIABILITY, AGENCY, WARRANTY, TRESPASS, OR ANY OTHER THEORY OF
            LIABILITY, OR ANY INDEMNITY OBLIGATION, WILL BE LIMITED TO THE FEES PAID AND PAYABLE BY
            CUSTOMER TO TEST IO DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE ACT OR
            OMISSION FIRST GIVING RISE TO THE LIABILITY.
          </p>
          <p>
            <strong>11.3. Allocation of Risk and Material Term.</strong> THE PROVISIONS OF THIS
            SECTION 11 ALLOCATE THE RISKS UNDER THIS AGREEMENT BETWEEN THE PARTIES AND ARE AN
            INTRINSIC PART OF THE BARGAIN BETWEEN THE PARTIES. THE FEES PROVIDED FOR IN THIS
            AGREEMENT REFLECT THIS ALLOCATION OF RISKS AND THE LIMITATION OF LIABILITY AND SUCH
            LIMITATION WILL APPLY NOTWITHSTANDING A FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED
            REMEDY AND TO THE FULLEST EXTENT PERMITTED BY LAW.
          </p>
        </div>
      </section>
      <section>
        <h2>12. Indemnity</h2>
        <div>
          <p>
            <strong>12.1. Intellectual Property Indemnity.</strong> Test IO will defend, indemnify
            and hold the Customer harmless from any settlements or judgments finally awarded in
            favor of a third party against the Customer to the extent such claim is based on the
            Platform (excluding any Open Source Software) infringing or misappropriating any valid
            copyright, trade secret, or United States patent issued or published as of the Effective
            Date. The indemnity provided hereunder will not apply to amounts paid in settlement of
            any claim if such settlement is made without Test IO’s prior written consent, which will
            not be unreasonably withheld. This indemnity does not apply to, and Test IO will have no
            obligation to the Customer for, any infringement claims arising out of, or resulting
            from (a) any software not developed by Test IO, (b) any software, product or service
            developed in accordance with Customer specifications; (c) any modifications of the
            Platform or Services made by Customer or any third party, if the alleged infringement
            relates to such modification, (d) a combination of the Platform or Services with other
            products, services, processes or materials of Customer, its affiliates, or any third
            party, where the alleged infringement relates to such combination, (e) Customer’s
            continued alleged infringing activity, after having been notified by Test IO and/or
            failing to use a more current release of the Platform or Services where applicable and
            where such release would prevent or avoid the alleged infringement without significant
            loss of performance or functionality, (f) use of the Platform or Services not strictly
            in accordance with this or any other written agreement signed by an officer of Test IO,
            or (g) any Open Source Software included in the Platform or Services.
          </p>
          <p>
            <strong>12.2. Customer Indemnity.</strong> Customer will defend, indemnify, and hold
            Test IO harmless from and against all claims, suits, actions, damages, settlements,
            losses, liabilities, costs (including without limitation reasonable attorney’s fees) and
            expenses in connection with (a) any breach by Customer of this Agreement, or (b)
            Customer’s gross negligence or willful misconduct.
          </p>
          <p>
            <strong>12.3. Procedure.</strong> As an express condition to the indemnifying party’s
            obligation under this Section, the party seeking indemnification must (a) promptly
            notify the indemnifying party in writing of the applicable claim for which
            indemnification is sought, and (b) provide the indemnifying party with all non-monetary
            assistance, information, and authority reasonably required for the defense and
            settlement of such claim. The indemnifying party may select counsel for defense of the
            claim and direct the course of any litigation or other disputed proceedings concerning
            the claim. The indemnified party may select its own counsel and direct its own defense
            of a claim if it chooses to do so, but it must bear the costs of its own counsel and any
            activities in any disputed proceeding conducted by counsel of its choosing. The
            indemnifying party may settle any claim, to the extent it seeks a money payment, with or
            without the consent of the indemnified party providing the settlement is a full and
            complete settlement of all claims against the indemnified party. The indemnifying party
            must obtain the indemnified party’s prior written consent to any settlement to the
            extent it consents to injunctive relief or requires any admission of fault or any public
            statement or contains contract terms governing future activities that would materially
            affect the indemnified party’s business or interests, said consent not to be
            unreasonably withheld, conditioned, or delayed.
          </p>
        </div>
      </section>
      <section>
        <h2>13. Export Control</h2>
        <div>
          <p>
            Customer represents and warrants that it will at all times during the term of this
            Agreement comply with all applicable U.S. and foreign export control laws and
            regulations governing export or re-export of the Content, and all applicable U.S. and
            foreign laws and regulations which restrict access to controlled technical data by
            foreign nationals.
          </p>
        </div>
      </section>
      <section>
        <h2>14. General</h2>
        <div>
          <p>
            <strong>14.1. Governing Law; Attorneys’ Fees.</strong> This Agreement will be governed
            by and interpreted in accordance with the laws of the State of New York, without giving
            effect to any conflict of law principles that would require the Platform of the laws of
            a different jurisdiction. If any dispute between the parties arises out of or is related
            to any of the provisions of this Agreement, and/or the performance or termination
            thereof, the prevailing party in any such action will recover all of its costs,
            including reasonable attorneys’ fees. The parties agree that United Nations Convention
            on Contracts for the International Sale of Goods (1980) is specifically excluded from
            Platform to this Agreement. Any claims for emergency or preliminary injunctive relief
            may be brought in any court of competent jurisdiction. All other disputes, claims or
            controversy arising out of or relating to this Agreement, or the interpretation, making,
            performance, breach or termination thereof, will be subject to the exclusive
            jurisdiction of the New York State Courts, or if there is federal jurisdiction, the
            United States District Court for the Southern District of New York, and the parties
            agree to submit to the personal and exclusive jurisdiction and venue of these courts.
          </p>
          <p>
            <strong>14.2. Force Majeure.</strong> Other than for payment of money, a party will be
            excused from any delay or failure in performance hereunder due to any labor dispute,
            government requirement, act of God, Internet congestion or breakdown, or any other cause
            beyond its control. Such party will use commercially reasonable efforts to cure any such
            failure or delay in performance arising from such a condition, and will timely advise
            the other party of such efforts. If such delay continues for more than 30 days, the
            performing party may, upon not less than 10 days prior written notice to the non-
            performing party, terminate this Agreement.
          </p>
          <p>
            <strong>14.3. Public Announcements.</strong> Neither party will issue or release any
            announcement, statement, press release or other publicity or marketing materials
            relating to the pricing and terms of this Agreement, without the prior written consent
            of the other party, which consent will not be unreasonably withheld, conditioned or
            delayed. During the term of this Agreement, Customer grants Test IO the right to include
            Customer’s name and logo in any public list of its customers.
          </p>
          <p>
            <strong>14.4. Contract Interpretation.</strong> Both parties to this Agreement have
            negotiated the provisions of this Agreement and have had access to counsel.
            Notwithstanding any rules of contract interpretation, both parties will be considered
            the “drafting party” and no provision of this Agreement will be construed against a
            party by reason of being the “drafting party”. Captions in this Agreement are for the
            convenience of the parties only and will not affect the interpretation or construction
            of this Agreement. In the event of any conflict between the terms of this Agreement and
            any exhibit or attachment hereto, the terms of this Agreement will prevail.
          </p>
          <p>
            <strong>14.5. Notices.</strong> Any notice provided for or permitted under this
            Agreement will be in writing and will be treated as having been given (a) when delivered
            personally, (b) when sent by confirmed facsimile or telecopy, or (c) email one (1)
            business day after being sent by nationally recognized overnight courier with written
            verification of receipt, or (d) three (3) business days after being mailed postage
            prepaid by certified or registered mail, return receipt requested, to the party to be
            notified, at the address first set forth above, or at such other place of which the
            other party has been notified in accordance with the provisions of this Agreement.
          </p>
          <p>
            <strong>14.6. Assignment.</strong> Customer will not assign this Agreement by operation
            of law or otherwise without the prior written consent of Test IO, which consent will not
            be unreasonably withheld or delayed. Test IO may assign this Agreement to an affiliate
            or in the event of a merger, acquisition, or reorganization relating to all or
            substantially all of such party’s assets. Any other attempt to assign this Agreement
            without prior consent will be void.
          </p>
          <p>
            <strong>14.7. Waivers.</strong> A waiver of any default hereunder or of any of the terms
            and conditions of this Agreement will not be deemed to be a continuing waiver or a
            waiver of any other default or of any other term or condition, but will apply solely to
            the instance to which such waiver is directed. The exercise of any right or remedy
            provided in this Agreement will be without prejudice to the right to exercise any other
            right or remedy provided by law or equity, except as expressly limited by this
            Agreement.
          </p>
          <p>
            <strong>14.8. Entire Agreement.</strong> This Agreement, including any attachments or
            exhibits constitutes the entire agreement between the parties. All prior negotiations,
            proposals, and agreements between the parties concerning the subject matter contained in
            this Agreement, are canceled and superseded by this Agreement. Any changes to this
            Agreement must be agreed to by both parties in writing.
          </p>
        </div>
      </section>
    </div>
  </div>
);
