import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email });
    
     if(!user){
       user = await User.create({ email });
       console.log(user);
     }
    
    
    return res.json(user);
  }

}

export default new SessionController();