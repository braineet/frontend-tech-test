/* eslint-disable no-unused-expressions */
import React from 'react';
import Link from 'next/Link';
import { Box } from '@braineet/ui';

import { HeaderContainer, Logo } from './sc.header';

const Header = () => {
    return (
        <HeaderContainer>
            <Box marginRight="32px">
                <Link href={'/'} passHref>
                    <a>
                        <Logo src="/logo.svg" />
                    </a>
                </Link>
            </Box>
        </HeaderContainer>
    );
};

export default React.memo(Header);
