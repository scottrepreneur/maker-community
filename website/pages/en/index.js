/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const HomeSplash = require(`${process.cwd()}/core/HomeSplash.js`);

const translate = require("../../server/translate.js").translate;

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ""} = this.props;
    const {baseUrl} = siteConfig;
    
    const currentMeeting = {
      "number": 60,
      "date": "November 7, 2019",
      "summaryUrl": baseUrl + language + "/governance/governance-and-risk-meetings/summaries/episode-60",
      "transcriptUrl": "",
      //? needs the embed URL
      "videoUrl": "https://www.youtube.com/embed/G8ga8vjMWkw?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan",
      // 61: "videoUrl": "https://www.youtube.com/embed/DD7g2t29D1E?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan",
      "nextMeetingDate": "November 14,2019",
      "imageUrl": baseUrl + "img/next_meeting.png"
    };

    //? keep it to 4 events for now
    const upcomingEvents = [
      {
        "name": "Devcon",
        "key": "devcon",
        "date": "12/13",
        "location": "Osaka, JP",
        "url": "https://devcon.ethereum.org"
      },
      {
        "name": "EthDenver",
        "key": "ethdenver",
        "date": "2/13",
        "location": "Denver, CO",
        "url": "https://ethdenver.com"
      },
      {
        "name": "Consensus",
        "key": "consensus",
        "date": "5/13",
        "location": "New York, NY",
        "url": "https://devcon.ethereum.org"
      },
      {
        "name": "EthNewYork",
        "key": "ethny",
        "date": "5/17",
        "location": "New York, NY",
        "url": "https://ethnewyork.com"
      }
    ];

    const initiatives = [
      {
        "key": "meetups",
        "imageUrl": "img/initiatives/meetups.png",
        "display": <translate>Meetups</translate>
      },
      {
        "key": "translations",
        "imageUrl": "img/initiatives/translations.png",
        "display": <translate>Translations</translate>
      },
      {
        "key": "hackathons",
        "imageUrl": "img/initiatives/hackathons.png",
        "display": <translate>Hackathons</translate>
      },
      {
        "key": "grants",
        "imageUrl": "img/initiatives/development.png",
        "display": <translate>Development</translate>
      },
      {
        "key": "contributing",
        "imageUrl": "img/initiatives/knowledge.png",
        "display": <translate>Knowledge</translate>
      }
    ];

    const amdBaseUrl = "https://awesome.makerdao.com/"
    const onboardingMaterials = [
      {
        "header": <translate>Onboarding Guides</translate>,
        "key": "onboarding",
        "tag": <translate>Get up to cadence quickly with our handy onboarding guides</translate>,
        "buttons": [
          {
            "text": <translate>Dai</translate>,
            "url": baseUrl + language + "/faqs/dai",
            "classes": "promo"
          },
          {
            "text": <translate>Contributor</translate>,
            "url": baseUrl + language + "/contributing",
            "classes": "promo"
          },
          {
            "text": <translate>Editor</translate>,
            "url": baseUrl + language + "/translations/editor-quick-start-guide"
          },
          {
            "text": <translate>Vaults</translate>,
            "url": baseUrl + language + "/faqs/cdp"
          },
          {
            "text": <translate>Translator</translate>,
            "url": baseUrl + language + "/translations/translator-quick-start-guide",
            "classes": "promo"
          },
          {
            "text": <translate>Meetup Organizer</translate>,
            "url": baseUrl + language + "/meetups/getting-started-guide"
          }
        ]
      },
      {
        "header": <translate>Governance & Risk</translate>,
        "key": "governance",
        "tag": <translate>Scientific Governance is key to stability in the Dai Credit System</translate>,
        "buttons": [
          {
            "text": <translate>Collateral Onboarding</translate>,
            "url": baseUrl + language + "/risk/collateral-onboarding-guide"
          },
          {
            "text": <translate>Forum</translate>,
            "url": "https://forum.makerdao.com",
            "classes": "promo",
            "target": "_blank"
          },
          {
            "text": <translate>Votes</translate>,
            "url": baseUrl + language + "/governance/votes"
          },
          {
            "text": <translate>Core Principles</translate>,
            "url": baseUrl + language + "/governance/core-principles",
            "classes": "promo"
          },
          {
            "text": <translate>Risk Framework</translate>,
            "url": baseUrl + language + "/governance/governance-risk-framework/risk-framework-one"
          },
          {
            "text": <translate>Voting Portal</translate>,
            "url": "https://vote.makerdao.com",
            "classes": "promo",
            "target": "_blank"
          }
        ]
      },
      {
        "header": <translate>Dai & Maker FAQs</translate>,
        "key": "faqs",
        "tag": <translate>You have questions, we have answers</translate>,
        "buttons": [
          {
            "text": <translate>Vaults</translate>,
            "url": baseUrl + language + "/faqs/cdp"
          },
          {
            "text": <translate>Dai</translate>,
            "url": baseUrl + language + "/faqs/dai"
          },
          {
            "text": <translate>Keepers</translate>,
            "url": baseUrl + language + "/faqs/keepers",
            "classes": "promo"
          },
          {
            "text": <translate>Liquidation</translate>,
            "url": baseUrl + language + "/faqs/liquidation",
            "classes": "promo"
          },
          {
            "text": <translate>Oracles</translate>,
            "url": baseUrl + language + "/faqs/oracles"
          },
          {
            "text": <translate>Stability Fee</translate>,
            "url": baseUrl + language + "/faqs/stability-fee",
            "classes": "promo"
          }
        ]
      },
      {
        "header": <translate>Awesome MakerDAO</translate>,
        "key": "amd",
        "tag": <translate>An Awsome list of resources about all facets of MakerDAO</translate>,
        "buttons": [
          {
            "text": <translate>Official Channels</translate>,
            "url": amdBaseUrl + "#channels",
            "target": "_blank"
          },
          {
            "text": <translate>Tutorials</translate>,
            "url": amdBaseUrl + "#tutorials",
            "target": "_blank"
          },
          {
            "text": <translate>Audits</translate>,
            "url": amdBaseUrl + "#audits-and-security",
            "target": "_blank"
          },
          {
            "text": <translate>Use Dai</translate>,
            "url": amdBaseUrl + "#use-dai",
            "classes": "promo",
            "target": "_blank",
          },
          {
            "text": <translate>Spend Dai</translate>,
            "url": amdBaseUrl + "#spend-dai",
            "target": "_blank"
          },
          {
            "text": <translate>Lend Dai</translate>,
            "url": amdBaseUrl + "#lend-dai",
            "classes": "promo",
            "target": "_blank"
          }
        ]
      }
    ];

    const communityMeetings = [
      {
        "name": <translate>Community</translate>,
        "key": "community",
        "daytime": <translate>Tuesdays at 17:00 UTC</translate>,
        "imageUrl": "img/meetings/community.png",
        "zoomUrl": "#",
        "agendaUrl": "#",
      },
      {
        "name": <translate>Community Development</translate>,
        "key": "comm-dev",
        "daytime": <translate>Wednesdays at 22:00 UTC</translate>,
        "imageUrl": "img/meetings/community_development.png",
        "zoomUrl": "#",
        "agendaUrl": "#",
      },
      {
        "name": <translate>Governance & Risk</translate>,
        "key": "governance",
        "daytime": <translate>Thursdays at 17:00 UTC</translate>,
        "imageUrl": "img/meetings/governance.png",
        "zoomUrl": "#",
        "agendaUrl": "#",
      }
    ];

    const contributingInfo = {
      "header": <translate>Contributing</translate>,
      "tag": <translate>Looking to help grow the Dai Ecosystem?</translate>,
      "buttons": [
        {
          "text": <translate>Help Wanted Issues</translate>,
          "key": "help-wanted",
          "url": "https://github.com/makerdao/community/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",
          "target": "_blank"
        },
        {
          "text": <translate>#community-development chat</translate>,
          "key": "comm-dev",
          "url": "https://chat.makerdao.com/channel/community-development",
          "classes": "promo",
          "target": "_blank"
        },
        {
          "text": <translate>Translate</translate>,
          "key": "translate",
          "url": baseUrl + language + "/translations"
        }
      ]
    };

   
    const Button = props => {
      let classString = "button ";
      classString = classString + props.classes;

      return (
        <a className={classString} href={props.href} target={props.target}>
          {props.children}
        </a>
      );
    };


    const Initiatives = () => {

        let initiativesBlock = initiatives.map((initiative) => {
          return (
            <a href={baseUrl + language + "/" + initiative["key"]} key={initiative["key"]}>
              <div>
                <img src={baseUrl + initiative["imageUrl"]} />
                {initiative["display"]}
              </div>
            </a>
          );
        })

        return (
          <div className="initiativeBlocks">
            <h3><translate>Community Development Initiatives</translate>Community Development Initiatives</h3>
            {initiativesBlock}
          </div>
      );
    };

    const OnboardingResources = () => {

      let resources = onboardingMaterials.map((resource) => {
        return (
          <div className={resource["key"] + " resource"} key={resource["key"]}>
            <h3>{resource["header"]}</h3>
            <p>{resource["tag"]}</p>
            {resource["buttons"].map((button) => {
              return (
                <Button href={button["url"]} key={button["url"]} classes={button["classes"] || ""} target={button["target"]}>
                  {button["text"]}
                </Button>);
            })}
          </div>
        );
      })
      
      return (
        <div className="section community-resources">
          {resources}
        </div>
      );
    };

    const MeetingCadence = () => {

      let meetingCadences = communityMeetings.map((meeting) => {
        return (
          <div className="meeting" key={meeting["key"]}>
            <h4>{meeting["name"]}</h4>
            <div className="group">
              <div className="split">
                <img src={baseUrl + meeting["imageUrl"]} />
              </div>
              <div className="split">
                <p><a href={meeting["zoomUrl"]}>Zoom</a></p>
                <p><a href={meeting["agendaUrl"]}>Agenda</a></p>
              </div>
            </div>
            <p>{meeting["daytime"]}</p>
          </div>
        );
      });

      return (
        <div className="section meetings">
          <h2>
            <img src={baseUrl + "img/meeting_cadence.png"} className="meeting-cadence-image icon" />
            <translate>Weekly Meeting Cadence</translate>
          </h2>
          <p><a href="#"><translate>MakerDAO Google Calendar</translate></a></p>
          <div>
            {meetingCadences}
          </div>
        </div>
      );
    };

    const MeetingEmbedAndEventsCalendar = () => {
      
      let events = upcomingEvents.map((event) => {
        return (
          <li key={event["key"]}>
            {event["date"]} | <b><a href={event["url"]} target="_blank">{event["name"]}</a></b><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in {event["location"]}
          </li>
        );
      })

      // add the transcriptUrl if applicable
      // <a href={currentMeeting["transcriptUrl"]}>Transcript</a> 

      return (
        <div className="section meeting-and-events">
          <div className="meeting-embed">
            <h3><translate>Scientific Governance & Risk Meeting</translate></h3>
            <p><translate>Risk Meeting</translate> #{currentMeeting["number"]} | <a href={currentMeeting["summaryUrl"]}><translate>Summary</translate></a> | {currentMeeting["date"]}</p>
            <div>
              <iframe src={currentMeeting["videoUrl"]} className="largeMeetingVideo" width="500" height="282"  frameBorder="0" allowFullScreen></iframe>
              <iframe src={currentMeeting["videoUrl"]} className="smallMeetingVideo" width="350" height="197"  frameBorder="0" allowFullScreen></iframe>
              <p className="next-meeting">
                <img src={currentMeeting["imageUrl"]} className="nextMeetingImage icon" />
                <translate>Next:</translate> {currentMeeting["nextMeetingDate"]}
              </p>
            </div>
            
          </div>
          <div className="events-calendar">
            <div>
              <h3>Upcoming Events</h3>
              <ul className="events">
                {events}  
              </ul> 
            </div>
          </div>
        </div>
      );
    };

    const Contributing = () => {

      return (
        <div className="section contributing">
          <h2>{contributingInfo["header"]}</h2>
          <p>{contributingInfo["tag"]}</p>
          <div className="contributing-buttons">
            {contributingInfo["buttons"].map((button) => {
              return (
                <Button href={button["url"]} key={button["key"]} classes={button["classes"] || ""} target={button["target"]}>
                  {button["text"]}
                </Button>
              );
            })}
          </div>
        </div>
      );
    };
    

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Initiatives />
          <OnboardingResources />
          <MeetingCadence />
          <MeetingEmbedAndEventsCalendar />
          <Contributing />
        </div>
      </div>
    );
  }
}

module.exports = Index;
