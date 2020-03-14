// yargs library is use to read arguments from user in command prompt
const yargs = require('yargs');

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('title:' , argv.title);
        console.log('body:' , argv.body);
    }    
});  

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function(){
        console.log('remove a note') 
    }
});

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function(){
        console.log('Read a note');
    }
})


yargs.command({
    command: 'list',
    description: 'list a note',
    handler: function(){
        console.log('list a note');
    }
})


//console.log(yargs.argv);
// or
yargs.parse();

//console.log(yargs);
// node index.js add --title="My title" --body="my body text"
// node index.js remove
// node index.js read
// node index.js list
