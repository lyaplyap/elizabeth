import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export type Environment = 'development' | 'production';

export type Config = {
    // App Variables
    environment: Environment;
    port: number | string;
    // Yandex Cloud Variables
    yandexOAuthToken: string;
    yandexFolderId: string;
    // MongoDB Variables
    mongoHost: string;
    mongoUser: string;
    mongoPassword: string;
    mongoDatabaseName: string;
};

export const createConfig = () => {
    const config: Config = {
        environment: (process.env.ENVIROMENT  || 'development') as Environment,
        port: process.env.PORT,
        yandexOAuthToken: process.env.YANDEX_OAUTH_TOKEN,
        yandexFolderId: process.env.YANDEX_FOLDER_ID,
        mongoHost: process.env.MONGO_HOST,
        mongoUser: process.env.MONGO_USER,
        mongoPassword: process.env.MONGO_PASSWORD,
        mongoDatabaseName: process.env.MONGO_DATABASE_NAME
    };

    return config;
};

export default createConfig();
