import styled from 'styled-components';
import InActiveLike from '../../assets/thumbs-up.svg';
import ActiveLike from '../../assets/thumbs-up-active.svg';
import InActiveDisLike from '../../assets/thumbs-down.svg';
import ActiveDisLike from '../../assets/thumbs-down-active.svg';

const IconBox = styled.div`
  border-top: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 24px;
  cursor: pointer;
  & > img {
    width: 16px;
    height: 16px;
  }
  & > p {
    margin: 0;
    color: #818181;
    font-size: 14px;
    font-weight: 400;
  }
  & > p.active--like {
    color: #1877f2;
  }
  & > p.active--dislike {
    color: #000000;
  }
`;
const DisLike = styled(Like)``;

export default function Reaction({ likeCount, isDisLike, onLike, onDislike }) {
  return (
    <>
      <IconBox>
        <Like>
          <img
            src={likeCount > 0 ? ActiveLike : InActiveLike}
            alt="좋아요 버튼"
            onClick={onLike}
          />
          <p className={likeCount > 0 ? 'active--like' : null}>
            {likeCount > 0 ? `좋아요 ${likeCount}` : `좋아요`}
          </p>
        </Like>
        <DisLike>
          <img
            src={isDisLike ? ActiveDisLike : InActiveDisLike}
            alt="싫어요 버튼"
            onClick={onDislike}
          />
          <p className={isDisLike ? 'active--dislike' : null}>싫어요</p>
        </DisLike>
      </IconBox>
    </>
  );
}
