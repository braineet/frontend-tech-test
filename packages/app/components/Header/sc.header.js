import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 64px;
    box-shadow: inset 0 -2px 0 ${p => p.theme.utils.lighten('black', 0.1)};
    background: ${p => p.theme.colors.white};
`;

export const Logo = styled.img`
    max-width: 120px;
    max-height: 40px;
`;
