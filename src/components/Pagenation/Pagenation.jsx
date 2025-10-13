import styled from 'styled-components';

const PageBar = styled.div`
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    cursor: pointer;
  }
  & > ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #818181;
  }
  & .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
  & .active {
    color: #542f1a;
  }
`;

export default function Pagenation({ totalPage, currentPage, onPageChange }) {
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const pages = totalPage > 0 ? range(1, totalPage, 1) : [1];

  return (
    <PageBar>
      <ul>
        <li
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >{`<`}</li>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={currentPage === page ? 'active' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          );
        })}
        <li
          className={currentPage === totalPage ? 'disabled' : ''}
          onClick={() =>
            currentPage < totalPage && onPageChange(currentPage + 1)
          }
        >{`>`}</li>
      </ul>
    </PageBar>
  );
}
