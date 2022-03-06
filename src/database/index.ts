import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.DATABASE_URL
const MONGODB_NAME = process.env.DATABASE_NAME

interface ConnectType {
  db: Db;
  client: MongoClient
}

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<ConnectType> {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // Connect to cluster
    let client = new MongoClient(String(MONGODB_URI));
    await client.connect();
    let db = client.db(MONGODB_NAME);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
