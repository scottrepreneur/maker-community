/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <p>The Community Development group's mandate is to directly foster the growth of the MakerDAO 
            ecosystem by incentivizing our most motivated members. We do this through a series of initiatives 
            that encourage people to participate in, and contribute to, the success of the Dai Stablecoin platform.</p>
            <Button href={docUrl('faqs.html')}>FAQs</Button>
            <Button href="http://awesome.makerdao.com">Awesome-MakerDAO</Button>
            <Button href={docUrl('governance.html')}>Governance</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Contributing</h2>
        <MarkdownBlock>If you have any suggestions about how you think these initiatives should work, could be improved, or if you are interested in helping out, please join our [#community-development](https://chat.makerdao.com/channel/community-development) channel and introduce yourself.</MarkdownBlock>
      </div>
    );

    const FAQs = () => (
      <Block id="try">
        {[
          {
            content:
              'MakerDAO wants everyone to be comfortable with their understanding of the Dai system, its governance, and stablecoins in general. This section provides answers to commonly asked questions about everything MakerDAO.' +
              '  ' +
              'We welcome you to help improve the MakerDAO FAQs by submitting Pull Requests or reaching out to us with feedback.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'MakerDAO FAQs',
          },
        ]}
      </Block>
    );

    const Governance = () => (
      <Block background="dark">
        {[
          {
            content:
              "To ensure good governance and accountability, we've set up this section to contain helpful resources such as transcripts of the meetings, historical summaries, and more.",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Governance',
          },
        ]}
      </Block>
    );

    const AwesomeMakerdao = () => (
      <Block background="light">
        {[
          {
            content:
              'Awesome-MakerDAO is a community-curated list of MakerDAO-related resources and content to which anyone can contribute. It contains official documentation, beginner guides, in-depth analysis, links to 3rd party tools, partnership announcements, AMAs, podcasts, and much more.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Awesome MakerDAO',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "Community members play an invaluable role in building a stronger MakerDAO ecosystem. The Community Development Group wants to provide the resources needed to increase Dai adoption and help MakerDAO bring stability and financial inclusion to the world. To accomplish these goals, we created a 'Do It Yourself' Meetup guide and microgranting program dedicated to helping anyone create and organize a local community meetup.",
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Community Meetup Grants',
          },
          {
            content: "We bring MakerDAO educational content to people around the world in their native languages by incentivizing our community translators with Dai bounties.",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Community Translations',
          },
        ]}
      </Block>
    );

    const Features2 = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "The MakerDAO Community grants program provides funding for projects that increase Dai adoption, support emerging economies, open new markets, provide novel uses for the stablecoin, or otherwise further the principles of the MakerDAO Foundation.",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Development Grants Program',
          },
          {
            content: "MakerDAO participates in a number of Hackathons every year. This section contains some information about how to request our participation in an upcoming event.",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Hackathons and Bounties',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Features2 />
          <FeatureCallout />
          <AwesomeMakerdao />
          <FAQs />
          <Governance />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
