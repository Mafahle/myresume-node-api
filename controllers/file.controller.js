const path=require('path');
const fs=require('fs');


//const mainPath=path.join(__dirname, '..');
exports.returnDirInfo=(req, res, next)=>{
    //Accepts objects
    let mainPath=(req.body.path===undefined? path.join(__dirname, '..'):req.body.path);
    // if(req.body.path!==undefined){
    //     mainPath=path.join(mainPath);
    //     console.log(mainPath);
    // }

    let dirStats= [];
    let permissions=[];
    setTimeout(()=>{
        
        return res.status(200).json({
            files: dirStats,
            allow: permissions
        });
    }, 1800);

    
    
    fs.readdir(mainPath, (err, files)=>{
        if(err){
            throw err;
        }

        //Get directory permissions
        fs.stat(mainPath, (err, stats)=>{
            if(err) throw err;
            
            permissions.push('Others execute : '+(stats.mode & 1? 'x':'-'));
            permissions.push('Others write   : '+(stats.mode & 2? 'w':'-'));
            permissions.push('Others read    : '+(stats.mode & 4? 'r':'-'));

            permissions.push('Group execute  : '+(stats.mode & 10? 'x':'-'));
            permissions.push('Group write    : '+(stats.mode & 20? 'w':'-'));
            permissions.push('Group read     : '+(stats.mode & 40? 'r':'-'));

            permissions.push('Owner execute  : '+(stats.mode & 100? 'x':'-'));
            permissions.push('Owner write    : '+(stats.mode & 200? 'w':'-'));
            permissions.push('Owner read     : '+(stats.mode & 400? 'r':'-'));


        });

        files.forEach(file=>{
            let fileInfo={
                name: file,
                path: path.join(mainPath.toString(), file)
            };

            //Get file stats
            fs.stat(fileInfo.path, (err, stats)=>{
                if(err) throw err;
                let date=new Date(stats.ctime);

                fileInfo['size']=stats.size;
                fileInfo['type']=(stats.isFile() ? 'file' : 'directory');
                fileInfo['date']=date.toString().slice(4, 21);

                dirStats.push(fileInfo);
                
                // console.log(dirStats);

            });
        });
        
    }); 


}

