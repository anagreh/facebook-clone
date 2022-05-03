import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
`;

export const ImgStyled = styled.div`
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;

  flex-shrink: 0;

  overflow: hidden;
`;

export const PostDataStyled = styled.div`
  padding-inline-start: 0.4em;

  p:first-child {
    /* font-size: 1em; */
    line-height: 1.5;
  }

  time {
    display: block;
    font-size: 0.9em;
    line-height: Calc(1 / 0.9);
    width: max-content;

    color: ${({ theme }) => theme.color.font.secondary};
  }
`;

export const PStyled = styled.p``;

const PostHeader = () => {
  return (
    <HeaderStyled>
      <ImgStyled>
        <img src="https://source.unsplash.com/50x50/?portrait&img=3" alt="" />
      </ImgStyled>
      <PostDataStyled>
        <p>Emam</p>
        <time>april 2 at 7:03 PM </time>
      </PostDataStyled>
    </HeaderStyled>
  );
};

export default PostHeader;