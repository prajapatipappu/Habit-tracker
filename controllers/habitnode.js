//  importing habitnode model
const Habitnode = require('../models/habitnode');
const habit=require('../models/habitnode');


// to create tasks
module.exports.create= async function(request,response)
{
    try{
        // its days array
          let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        // all updates empty array
        let all_renews=[]; 
        for( let x=0;x<=6;x++)
        {
            // current date
            let date = new Date(); 
            
            date.setDate(date.getDate() - x);

            // getting date
            let DATE = date.getDate();

            // getting day
            let day=date.getDay();
            day=days[day]

            all_renews.push({status:'None',date:DATE,day:day})
        }

        request.body.all_renews=all_renews;
        let tasks= await habit.create(request.body);
        // console.log(tasks)

        return response.redirect('back');
    } catch (error){
        console.log(error);
        return response.redirect('back');
    };
}

//  to toggle the tasks
module.exports.toggle_tasks= async function(request,response)

{
    try{
    
        let tasks = await habit.findById(request.query.taskid);


        for( let x of tasks.all_renews)
        {
            if(x.id==request.query.day)
            {
                if(x.status == 'None')
                {
                    x.status= 'Done';
                    tasks.save();
                }
                else if (x.status == 'Done')
                {
                    x.status='NotDone';
                    tasks.save();
                }
                else if (x.status =='NotDone')
                {
                    x.status='None';
                    tasks.save();
                }
            }
        }

        return response.redirect('back');
    }catch (error){
        console.log(error);
        return response.redirect('back');
    }
}

//  to Delete tasks

module.exports.delete= async function(request,response){
    try {
        // to get ID from params
        let id= request.params.id;
        
        // find habitnode to delete
        let delete_id=await Habitnode.findByIdAndDelete(id);
        return response.redirect('back');
    }catch (error) {
        console.log(error);
        return response.redirect('back')
    }
}

//  to Render Daily tasks

module.exports.home= async function(request,response){
    let habitnode= await Habitnode.find({});
    return response.render('daily',{
        title:'Daily',
        habitnode_tasks:habitnode
    })
}

//  To Render Weekly Tasks 
module.exports.weekly = async function(request,response){
    let habitnode= await Habitnode.find({});

    return response.render('weekly',{
        title:'weekly',
        tasks:habitnode 
    })
}
