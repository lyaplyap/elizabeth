import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';

import config from '../../config';

export const createIamToken = async () => {
    const { yandexOAuthToken } = config;
    const { iam: { iam_token_service: { CreateIamTokenRequest } } } = cloudApi;

    const session = new Session({ oauthToken: yandexOAuthToken });
    const client = session.client(serviceClients.IamTokenServiceClient);

    const { iamToken, expiresAt } = await client.create(CreateIamTokenRequest.fromPartial({
        yandexPassportOauthToken: yandexOAuthToken
    }));

    return {
        iamToken,
        expiresAt
    };
};
