

export const clearDocument = <T = object>(document: T) => {
    const isMongoKey = (key: string) => key.startsWith('_');
    
    for (const key in document) {
        if (isMongoKey(key)) {
            delete document[key];
        } else if (typeof document[key] == 'object' && document[key] !== null) {
            clearDocument(document[key]);
        }
    }

    return document;
};
