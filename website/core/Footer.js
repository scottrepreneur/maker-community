/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Learn</h5>
            <a href="https://makerdao.com/en/whitepaper">
              Whitepaper
            </a>
            <a href="https://awesome.makerdao.com">
              Awesome MakerDAO
            </a>
            <a href="https://blog.makerdao.com/">
              Blog
            </a>
            <a href="https://makerdao.com/documentation/">
              Developer Documentation
            </a>
            <a href="https://makerdao.com/en/privacy">
              Privacy Policy
            </a>
          </div>
          <div>
            <h5>Dai System</h5>
            <a href="https://cdp.makerdao.com/">CDP Portal</a>
            <a href="https://vote.makerdao.com/">Governance Portal</a>
            <a href="https://mkr.tools/">Platform Tools</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://chat.makerdao.com/">Rocket Chat</a>
            <a href="https://t.me/makerdaoOfficial">
              Telegram
            </a>
            <a
              href="https://github.com/makerdao"
              target="_blank"
              rel="noreferrer noopener">
              Github
            </a>
            <a
              href="https://www.reddit.com/r/MakerDAO/"
              target="_blank"
              rel="noreferrer noopener">
              Reddit
            </a>
            <a
              href="https://twitter.com/MakerDAO"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
        </section>

        <a
          href="https://makerdao.com/"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/MakerDAO_green_logo.png`}
            alt="Facebook Open Source"
            width="250"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
