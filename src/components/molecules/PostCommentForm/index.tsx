import PersonalImg from '../../atoms/PersonalImg';
import PostCommentFormInput from '../../atoms/PostCommentFormInput';
import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ImgWrapper = styled.div`
  width: 2.5em;
  flex-shrink: 0;
`;

const PostCommentForm = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <PersonalImg src="https://source.unsplash.com/50x50/?portrait&img=" />
      </ImgWrapper>
      <PostCommentFormInput />
    </Wrapper>
  );
};

export default PostCommentForm;
