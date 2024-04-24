import mongoose from 'mongoose';
import path from 'path';

import { Config } from './config';
import { createMongoUri } from './shared/utils';

export const connectDatabase = async (config: Config) => {
    const mongoUri = createMongoUri(config);
    const certPath = path.resolve(__dirname, '../certs/RootCA.pem');

    await mongoose.connect(mongoUri, {
        tls: true,
        tlsCAFile: certPath
    });
};
