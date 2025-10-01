import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
    font-feature-settings: 'liga' off, 'clig' off;
    font-style: normal;
    margin: 0;
    color: ${props => props.color || 'var(--grayscale60)'};
    font-family: ${props => props.$fontFamily || 'Pretendard'};
    font-size: ${props => props.$fontSize};
    font-weight: ${props => props.$fontWeight};
    line-height: ${props => props.$lineHeight};
`;

const variantStyles = {
    'h1': {
        fontSize: '40px',
        fontWeight: 400,
        lineHeight: 'normal',
    },
    'h2': {
        fontSize: '32px',
        fontWeight: 400,
        lineHeight: '40px',
    },
    'h3': {
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '30px',
    },
    'body1-regular': {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '25px',
    },
    'body1-bold': {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '25px',
    },
    'body2-regular': {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
    },
    'body2-bold': {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '24px',
    },
    'body3-regular': {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '22px',
    },
    'body3-bold': {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '22px',
    },
    'caption1-regular': {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '18px',
    },
    'caption1-medium': {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '18px',
    },
    'caption1-bold': {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '18px',
        fontFamily: 'Actor',
    },
};

const Text = ({ 
    variant = 'body3-regular', 
    color, 
    children, 
    as,
    ...props 
}) => {
    const getDefaultTag = () => {
        if (variant === 'h1') return 'h1';
        if (variant === 'h2') return 'h2';
        if (variant === 'h3') return 'h3';
        if (variant.startsWith('caption')) return 'span';
        return 'p';
    };

    const styles = variantStyles[variant] || variantStyles['body3-regular'];

    return (
        <StyledText
            as={as || getDefaultTag()}
            color={color}
            $fontFamily={styles.fontFamily}
            $fontSize={styles.fontSize}
            $fontWeight={styles.fontWeight}
            $lineHeight={styles.lineHeight}
            {...props}
        >
            {children}
        </StyledText>
    );
};

export default Text;

function App() {
    return (
        <div>
            <Text variant="h1">메인 제목</Text>
            <Text variant="h2">서브 제목</Text>
            <Text variant="body1-regular">본문 텍스트</Text>
            <Text variant="body1-bold">굵은 본문</Text>
            <Text variant="caption1-regular" color="var(--brown40)">
                커스텀 컬러 캡션
            </Text>
        </div>
    );
}