let Questions = require('../../../models/questions');
let Options = require('../../../models/options');

module.exports.create  = async function(req,res){
    try{
        console.log(req.body)
        let question = await Questions.create(req.body)
        return res.status(200).json({
            message:'Succesfully created question',
            question:question
        })

    }
    catch(err){
        return res.status(400).json({
            message:'Unable to process request'
        })
    }
}



module.exports.create_options = async function(req,res){
    try{
        console.log(req.url,req.params.id)
        let ques = await Questions.findById(req.params.id)

        if (ques){
            let option = await Options.create({
                text: req.body.text,
                question: req.params.id
            })
            option.add_votes = `http://127.0.0.1:9999/api/v1/options/${option.id}/add_vote`
            await option.save()
            ques.options.push(option)
            await ques.save()

            return res.status(200).json({
                message:'Succesfully created Option',
                question:ques
            })
        }

        return res.status(400).json({
            message:'There is no question with that id'
        })
    }
    catch(err){
        return res.status(400).json({
            message:'Unable to process request'
        })
    }
}



module.exports.delete = async function(req,res){
    try{
        console.log(req.url,req.params.id)
        let ques = await Questions.findById(req.params.id).populate('options')
        let votes = false;
        for(let option of ques.options){
            if(option.votes > 0){
                console.log("votes are",option.votes);
                votes = true
                break
            }
        }
        if (!votes){
            await Questions.findByIdAndDelete(req.params.id);
            await Options.deleteMany({question:req.params.id})

            return res.status(200).json({
                message:'succesfully deleted',
                ques
            })
        }
        return res.status(400).json({
            message:'Cannot delete question as its options are voted'
        })

    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            message:'Unable to process request',
            err:err
        })
    }
}


module.exports.display = async function(req,res){
    try{
        console.log(req.url,req.params.id)
        let ques = await Questions.findById(req.params.id).populate('options')
        if(ques){
            return res.status(200).json({
                message:'The question and options are fetched succesfully',
                ques
            })
        }
        return res.status(400).json({
            message:'Not a valid question id',
        })
        

    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            message:'Unable to process request',
            err:err
        })
    }
}