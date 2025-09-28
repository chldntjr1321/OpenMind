import styled from 'styled-components';
import DefaultEditIcon from '../../assets/edit(gray).svg';
import HoverEditIcon from '../../assets/edit(black).svg';
import ActiveEditIcon from '../../assets/edit(blue).svg';
import DeleteIcon from '../../assets/icon_x.svg';
import { useState } from 'react';

const OptionBox = styled.div`
  width: fit-content;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  user-select: none;
  margin-top: 4px;

  & > ul {
    width: 103px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    padding: 4px 0;
    box-shadow: 0 4px 4px 0 rgba(140, 140, 140, 0.25);
  }
  & > ul > li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    color: #515151;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }
  .imgBox {
    width: 14px;
    height: 14px;
    position: relative;
  }
  .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .edit__hover,
  .edit__active {
    display: none;
  }
  li:hover .edit__before {
    display: none;
  }
  li:hover .edit__hover {
    display: block;
  }

  li:hover {
    background-color: #f9f9f9;
    color: #000000;
  }
  & img {
    width: 14px;
  }
  .selected {
    color: #1877f2;
  }
  .selected:hover {
    color: #1877f2;
  }
  .selected .edit__active,
  .selected:hover .edit__active {
    display: block;
  }
`;

export default function Edit({
  isEditActive,
  setIsEditActive,
  isDeleteActive,
  setIsDeleteActive,
  onEdit,
  onDelete,
}) {
  return (
    <>
      <OptionBox>
        <ul>
          <li
            onClick={() => {
              setIsEditActive(!isEditActive);
              onEdit();
            }}
            className={isEditActive ? 'selected' : ''}
          >
            <div className="imgBox">
              <img
                src={DefaultEditIcon}
                alt="수정하기 버튼"
                className="edit__before"
              />
              <img
                src={HoverEditIcon}
                alt="수정하기 버튼에 마우스 올라가 있을 때 아이콘"
                className="edit__hover"
              />
              <img
                src={ActiveEditIcon}
                alt="선택된 수정하기 버튼"
                className="edit__active"
              />
            </div>
            수정하기
          </li>
          <li
            onClick={() => {
              setIsDeleteActive(!isDeleteActive);
              onDelete();
            }}
            className={isDeleteActive ? 'selected' : ''}
          >
            <img src={DeleteIcon} alt="삭제하기 버튼" className="delete" />
            삭제하기
          </li>
        </ul>
      </OptionBox>
    </>
  );
}
