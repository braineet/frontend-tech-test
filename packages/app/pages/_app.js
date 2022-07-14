import { ApolloProvider } from "@apollo/react-hooks";
import { Provider as BraineetUIProvider } from '@braineet/ui';
import Header from '../components/Header';

import { client } from "../lib/apollo";

const MyApp = ({ Component, pageProps }) => {
    return (
        <BraineetUIProvider>
            <ApolloProvider client={client}>
                <Header />
                    <Component {...pageProps} />
            </ApolloProvider>
        </BraineetUIProvider>
    );
};

export default MyApp;
