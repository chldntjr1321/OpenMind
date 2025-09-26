import styled from 'styled-components';
import InActiveLike from '../../assets/thumbs-up.svg';
import ActiveLike from '../../assets/thumbs-up-active.svg';
import InActiveDisLike from '../../assets/thumbs-down.svg';
import ActiveDisLike from '../../assets/thumbs-down-active.svg';
import { useState } from 'react';

const IconBox = styled.div`
  border-top: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  margin: 32px;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 24px;
  & > img {
    width: 16px;
    height: 16px;
    cursor: pointer;
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

export default function Reaction() {
  const [likeCount, setLikeCount] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);

  return (
    <>
      <IconBox>
        <Like>
          <img
            src={likeCount !== 0 ? ActiveLike : InActiveLike}
            alt="좋아요 버튼"
            onClick={() => setLikeCount(likeCount + 1)}
          />
          <p className={likeCount !== 0 ? 'active--like' : null}>
            좋아요 {likeCount !== 0 ? likeCount : null}
          </p>
        </Like>
        <DisLike>
          <img
            src={isDisLike ? ActiveDisLike : InActiveDisLike}
            alt="싫어요 버튼"
            onClick={() => setIsDisLike(!isDisLike)}
          />
          <p className={isDisLike ? 'active--dislike' : null}>싫어요</p>
        </DisLike>
      </IconBox>
    </>
  );
}
