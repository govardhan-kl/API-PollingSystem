const Options = require('../../../models/options');
const Questions = require('../../../models/questions');

// to delete a option
module.exports.deleteOption = async function(req,res){
    try{
        let id = req.params.id;
        let option = await Options.findById(id)
        console.log(option)
        if(!option){
            return res.status(400).json({
                message:'Option doesnot exist'
            })
        }
        if(option.votes == 0){
            await Options.findByIdAndDelete(id)
            const ques = await Questions.findById(option.question);
            ques.options.pop(id);
            ques.save()
            return res.status(200).json({
                message:'Option succesfully deleted',
                option
            })

        }else{
            return res.status(400).json({
                message:'cannot delete Option,its voted'
            })
        }

    }catch(err){
        console.log(err)
        return res.status(400).json({
            message:'Unable to process request',
            err:err
        })
    }
}


// to add a vote to a particular option
module.exports.add_vote = async function(req,res){
    try{
        let id = req.params.id;
        let option = await Options.findById(id)
        if(!option){
            return res.status(400).json({
                message:'Option doesnot exist'
            })
        }
        option.votes += 1
        await option.save()
        return res.status(200).json({
            message:'Added vote succesfully'
        })

    }catch(err){
        console.log(err)
        return res.status(400).json({
            message:'Unable to process request',
            err:err
        })
    }
}