
# Maker Community Development Portal Proposal [WIP]

1up Haus  
Scott Herren (@scottrepreneur)  
August 13, 2019  

## Overview

1up will iterate on the commmunity development portal to leverage Docusaurus, a Facebook documentation framework, to allow additional flexibility in the portal over Gitbook.

[Requesting Issue](https://github.com/makerdao/community/issues/225)  
[Forum Post](https://forum.makerdao.com/t/wanted-a-docusaurus-setup-to-replace-the-existing-portal/149)

This repository will serve as the development origin for the project.

## Solution Requirements

### MVP
exact duplicate of the existing portal, just with docusaurus as a framework instead of gitbooks

1. Update landing/home page, given new flexibility
   - It should be noted that docusaurus doesn't seem to have any ability to have the sidebar on the home page, so we should consider the new nav potential, as well 
1. Maintain Gitbooks documentation structure
1. Manageable CSS/Theme
1. Local Search
1. note: Subcategories do not collapse in sidebar
1. 

### v2.0

adding pages with arbitrary code. we have a transparency dashboard coming for the grants program that i'd like inside the portal as well

1. 
1. 

### Milestones

v1.0
- Skeleton [10 hrs]
- Design Feedback [~1 hr]
- Implement search and determine process for translations [~3 hrs]
- Design and implement Landing page [~3 hrs]

v1.5
- Working revisions [2-5 hrs]

v2.0
- custom code 

### Success
The major hurdles of establishing the new portal are tackled at this point, so this project is tackling some smaller details to delivery. Implementing the landing page design, search, and setting up translations team are the main remaining hurdles in the MVP.

### MVP Budget

~17hrs of development time

### Deployment

It is assumed the Foundation will take on deployment of the portal or assume charges for infrastructure.

Currently deployed for testing at https://mkr-comm.scottrepreneur.now.sh

---

### Misc

Need to figure out
- How are translations handled
- Test out search integration
- Can we have dropdowns in the menu?

Need source file(s):
- favicon.ico
- images to use on landing page

#### Questions

1. Maintained most of docs structure, but need to discuss these poll archives and the transparency portal docs
   - links mostly changed (episode-46.md --> episode-46). 
   - folders all retained in provided structure, but moved the anchor/landing page for each section to the docs/ folder renamed to the match corresponding folder
   - _sounds like this is not maintained enough. potentially needs some sort of pull aspect to gather approapriate docs_
1. links transform --> + /docs/ +
   - https://community-development.makerdao.com/governance/core-principles -->https://mkr-comm.scottrepreneur.now.sh/docs/governance/core-principles
   - _not ideal_
1. Submenus don't collase so we have to handle the meeting sumarries and transcripts a bit in a workaround. https://mkr-comm.scottrepreneur.now.sh/docs/governance/governance-and-risk-meetings/summaries/episode-46
   - _will it be sufficent to link from landing page_
1. There's a v2 of docusaurus in planning stages. I'd think we've got at least 6 - 12mos for any sort of shipping there. _Chat with @burrrata as it seems they are using it for 1hive._
1. *Translations* are integrated with Crowdin, which has a free for open source projects option. It's looking to handle full translation through strings translation. I'll have to dig a good amount to handle them in (another) custom way https://crowdin.com/page/open-source-project-setup-request
   - _not sold on value/need here_
1. Footer?
   - _probably fine, touchbase with David about it_
1. What is the arbitrary code intending to do to the page?
   - _pages can be completely custom react, so that's fine. docs and their theme/layout are a bit more restrictive_
1. How do you envision the transparency dashboard being incorporated?
1. These anchor links, are acting weird in the current version. Might have to offset the scroll or link. https://mkr-comm.scottrepreneur.now.sh/docs/governance/governance-and-risk-meetings/transcripts/episode-46#000058
   - _I attempted one workaround here without luck. might be able to put a small bounty out for it and/or reach out to higher React powers_

---

Pending successful completion, could tackle

[Styling the Forum (CD Portal included in this proposal)](
https://forum.makerdao.com/t/wanted-styling-for-this-forum-and-the-community-development-portal/150)  
and
[Governance Dashboard](
https://forum.makerdao.com/t/wanted-a-governance-dashboard/87)

---





