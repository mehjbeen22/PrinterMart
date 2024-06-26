import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import Footer from '../sections/Footer';

const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '200px',
};

const TermAndCondition = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClassName="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <>
          <div style={style}></div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-6xl text-red-500 m-5">
              Terms And Conditions
            </h1>
            <p className="text-3xl mb-5">
              Please Read These Terms And Conditions Carefully.
            </p>

            <ol className="p-8" style={{ width: '80%' }}>
              {termAndCondition.map(({ id, head, desc }) => {
                return (
                  <li
                    key={id}
                    className="my-8 shadow-md p-5 border border-gray-200 rounded-sm"
                  >
                    <p className="text-teal-500 text-xl mb-2">{head}</p>
                    <p>{desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default TermAndCondition;

const termAndCondition = [
  {
    id: 1,
    head: 'Terms and Conditions',
    desc: `Welcome to ijstartprinter!

These terms and conditions outline the rules and regulations for the use of ijstartprinter’s Website, located at https://ijstartprinter.com

By accessing this website, we assume you accept these terms and conditions. Do not continue to use ijstartprinter if you do not agree to take all of the terms and conditions stated on this page.`,
  },

  {
    id: 2,
    head: 'Cookies:',
    desc: `The website uses cookies to help personalize your online experience. By accessing ijstartprinter, you agreed to use the required cookies.
A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.`,
  },
  {
    id: 3,
    head: 'Content Liability:',
    desc: `We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
  },
  {
    id: 4,
    head: 'Reservation of Rights:',
    desc: `We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`,
  },
  {
    id: 5,
    head: 'Removal of links from our website:',
    desc: `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.

We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`,
  },

  {
    id: 6,
    head: 'License:',
    desc: `Unless otherwise stated, ijstartprinter and/or its licensors own the intellectual property rights for all material on ijstartprinter. All intellectual property rights are reserved. You may access this from ijstartprinter for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Copy or republish material from ijstartprinter
Sell, rent, or sub-license material from ijstartprinter
Reproduce, duplicate or copy material from ijstartprinter
Redistribute content from ijstartprinter

This Agreement shall begin on the date hereof.

Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. ijstartprinter does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of ijstartprinter, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, ijstartprinter shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

ijstartprinter reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.

You warrant and represent that:

You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.
The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.

You hereby grant ijstartprinter a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.`,
  },

  {
    id: 7,
    head: 'Hyperlinking to our Content:',
    desc: `The following organizations may link to our Website without prior written approval:

Government agencies;
Search engines;
News organizations;
Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.

These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.

We may consider and approve other link requests from the following types of organizations:

commonly-known consumer and/or business information sources
dot.com community sites;
associations or other groups representing charities;
online directory distributors;
internet portals;
accounting, law, and consulting firms; andli>
educational institutions and trade associations.

We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of ijstartprinter; and (d) the link is in the context of general resource information.

These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to ijstartprinter. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.

Approved organizations may hyperlink to our Website as follows:

By use of our corporate name; or
By use of the uniform resource locator being linked to; or
Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.

No use of ijstartprinter’s logo or other artwork will be allowed for linking absent a trademark license agreement.`,
  },

  {
    id: 8,
    head: 'Disclaimer:',
    desc: `To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

limit or exclude our or your liability for death or personal injury;
limit or exclude our or your liability for fraud or fraudulent misrepresentation;
limit any of our or your liabilities in any way that is not permitted under applicable law; or
exclude any of our or your liabilities that may not be excluded under applicable law.

The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
  },
];
