import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({error:"Access Denied"})
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = verified.id;
        next();
    } catch (error) {
        console.log(Error)
        res.status(400).json({error:"Invalid Token"})
    }
}

export default auth;