/*const UserModel = require('../model/user');

//create and save a new user

exports.create = async (req,res) => {
    if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }

    const user = new UserModel({
        email:req.body.email,
        firstName :req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone
    });

    await user.save().then(data =>{
        res.send({
            message: "User Added Successfully",
            user : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "User Not Added Successfully",
        });
    });
}; //end of create user

//Retrieve all users from the database
exports.findAll = async (req,res) =>{
    try{
        const users = await UserModel.find();
        res.status(200).json(users);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await UserModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`User not found`});
        }else{
            res.status(200).json({message:`User found and deleted`});
        }
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
};

//update user by id 

exports.update = async(req,res) =>{
    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty!!!"});
    }

    const userid = req.params.id;

    await UserModel.findByIdAndUpdate(userid,req.body,{ userFindAndModify : false})
                                     .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`User not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};


*/


const MovieModel = require('../model/movie');

//create and save a new user

exports.create = async (req,res) => {
   /* if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
        res.status(400).send({message:"Content cannot be empty!!!"});
    }*/

    const movie = new MovieModel({
        movieId:req.body.movieId,
        name :req.body.name,
        genre : req.body.genre,
        language:req.body.language,
        duration : req.body.duration,
        rating : req.body.rating,
        actors : req.body.actors,
        audi_ids : req.body.audi_ids,

    });

    await movie.save().then(data =>{
        res.send({
            message: "Movie Added Successfully",
            movie : data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Movie Not Added Successfully",
        });
    });
}; //end of create user

//Retrieve all users from the database
exports.findAll = async (req,res) =>{
    try{
        const movies = await MovieModel.find();
        res.status(200).json(movies);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//Retreive a single user with an id
exports.findOne = async (req,res) =>{
    try{
        const movie = await MovieModel.findById(req.params.id);
        res.status(200).json(movie);
    }catch{
        res.status(404).json({message:error.message})
    }
}

//delete user by id
exports.destroy = async (req,res) =>{
    await MovieModel.findByIdAndRemove(req.params.id).then(data =>{
        if(!data){
            res.status(404).json({message:`Movie not found`});
        }else{
            res.status(200).json({message:`Movie found and deleted`});
        }
    }).catch(err => {
        res.status(500).send({
            message : err.message
        });
    });
};

//update user by id 

exports.update = async(req,res) =>{
    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty!!!"});
    }

    const movieId = req.params.id;

    await MovieModel.findByIdAndUpdate(userid,req.body,{ userFindAndModify : false})
                                     .then(data =>{
                                        if(!data){
                                            res.status(404).send({message:`Movie not found`});
                                        }else{
                                            res.send({message:"Data updated successfully!!!"})
                                        }
                                     }).catch(err =>{
                                        res.status(500).send({
                                            message : err.message
                                        });
                                     });
};