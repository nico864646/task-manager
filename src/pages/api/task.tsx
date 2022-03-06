import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../database'

export default async (req: NextApiRequest, resp: NextApiResponse): Promise<void> => {

    if (req.method === 'POST') {
        try{
            const { task, date } = req.body;
            
            if(!task || !date ){
                throw 'Some parameter is empty';
            }
    
            const { db } = await connectToDatabase();
            
            const response = await db.collection('task').insertOne({
                created: date,
                task: task,
            })
    
            resp.status(200).json('feito')

        } catch(error){
            resp.status(400).json({ error })
        }
    } else {
        resp.status(400).json({ message: 'Wrong request method' })
    }
}