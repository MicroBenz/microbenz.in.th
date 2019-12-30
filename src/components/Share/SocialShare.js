import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > p {
    margin-bottom: 16px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;


const ShareLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  width: fit-content;
  min-width: 200px;
  padding: 0 4px;
  span {
    font-size: 16px;
  }
  &:hover {
    color: #fff;
  }
  @media(max-width: 768px) {
    padding: 8px 0;
    width: 100%;
  }
`;

const ShareButton = styled.div`
  border-radius: 5px;
  transition: 25ms ease-out;
  display: flex;
  padding: 8px 0;
  align-items: center;
  justify-content: center;
  svg {
    width: 1em;
    margin-right: 0.4em;
    vertical-align: top
  }
`;

const FacebookShareButton = styled(ShareButton)`
  background-color: #3b5998;
  &:hover {
    background-color: #2d4373;
  }
`;

const TwitterShareButton = styled(ShareButton)`
  background-color: #55acee;
  &:hover {
    background-color: #2795e9;
  }
`;

const Svg = styled.svg`
  fill: #fff;
`;

const SocialShare = props => {
  const { frontmatter } = props;
  const { title, slug } = frontmatter;
  const currentPageURL = encodeURIComponent(`https://microbenz.in.th/${slug}`);
  const twitterPrefil = encodeURIComponent(`I've read ${title} from MicroBenz!`);
  return (
    <>
      <hr />
      <Container>
        <p className="title is-4">อ่านมาถึงตรงนี้ ถ้าชอบกดแชร์ได้ตามสะดวกเลยครับ :D</p>
        <SocialContainer>
          <ShareLink
            href={`https://facebook.com/sharer/sharer.php?u=${currentPageURL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <FacebookShareButton>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </Svg>
              <span>Share on Facebook</span>
            </FacebookShareButton>
          </ShareLink>
          <ShareLink
            href={`https://twitter.com/intent/tweet/?text=${twitterPrefil};url=${currentPageURL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <TwitterShareButton>
              <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
              </Svg>
              <span>Tweet on Twitter</span>
            </TwitterShareButton>
          </ShareLink>
        </SocialContainer>
      </Container>
    </>
  );
};

export default SocialShare;
