import { Config } from '../../config';

export const createMongoUri = (config: Config) => {
    const {
        mongoUser,
        mongoPassword,
        mongoHost,
        mongoDatabaseName
    } = config;

    return `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}/${mongoDatabaseName}`;
};
