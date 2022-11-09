import type { NextApiRequest, NextApiResponse } from "next"

const test = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        test: 'Test'
    })
}

export default test