const users_model =require('../models/users_models');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');

exports.CreateUsers =function(req,res,next){
    const data =req.body;
    bcrypt.hash(data.password,10).then(
     hash=>{
        const users =new users_model ({
            email :data.email, 
            password:hash,
            permission:data.permission,
        })
        users.save()
        .then(

            res.send({status:201,message:'enregistrement effectué','uid_users':users._id})
        )
        .catch(
            (error)=> {
                res.send({status:400,err:error})
            }
        )
     }
    ).catch(
        (error)=> {
            res.send({status:500,err:error})
        }
    )
}

exports.login =function(req,res,next){
    users_model.findOne({email:{$req:req.body.email}}).then(
        users =>{
            if(!users){
                return res.status(401).json({message:'paire login/password invalide'})
            }
            bcrypt.compare(req.body.password ,users.password).then(
                validation =>{
                    if(!validation){
                        return res.status(401).json({message:'paire login/password invalide'})
                    }
                    res.send({
                        status:200,
                        users_id:users._id,
                        token:jwt.sign(
                            {userId:users._id},
                            'PACIFIQUE_TOKEN_SECRET',
                            {expiresIn:'24h'}
                            )
                    })
                }
            ).catch(
                (error)=> {
                    res.send({
                        status:500,
                        err:error
                    })
                }
            )
        }
    ).catch(
        (error)=> {
            res.send({
                status:500,
                err:error
            })
        }
    )
}


exports.Verif_email = function (req,res,next){
   email = req.params.email
   users_model.findOne({email:data.email}).then(
    (validation=>{
        if(!validation){
            return res.status(401).json({message:'email inexixtant'})
        }else{
            return res.status(200).json({message:'email existant'})
        }
        }).catch((error)=>{
            res.send({'status':501,'message':error})
        })
   )
}


exports.change_password = function(req,res,next) {
    email = req.params.email
    users_model.findOne({email:data.email}).then(
     (validation=>{
         if(!validation){
             return res.status(401).json({message:'email inexixtant'})
         }else{
            //système d'envoi de mail pour le token
             return res.status(200).json({message:'email existant'})
         }
         }).catch((error)=>{
            res.send({'status':501,'message':error})
         })
    )
}

exports.DeactiverPermissions = function(req,res,next){
   const id = req.params.users_id
    const permission = req.params.permission
    const users = users_model
    users.findByIdAndUpdate(id,{permission:permission}).then(
      res.send({'status':200,'message':'Désactivation du compte effectif'})
    ).catch(
        (error) =>{
            res.send({'status':501,'message':error})
        }
    )
}

exports.ChangeEmail = function(req,res,next){
    const last_email = req.params.email
    const id = req.params.id
    const users = users_model
    users.findByIdAndUpdate(id,{email:req.params.email}).then(
        res.send({'status':200,'message':'modification effectuée'})
    ).catch(
        (error) =>{
            res.send({'status':501,'message':error})
        }
    )
}
