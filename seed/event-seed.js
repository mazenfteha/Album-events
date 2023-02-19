const db =require('../config/database')
const Event =require('../models/Event')

let newEvents =[

    new Event({
        title:'Rodeo',
        description: 'Rodeo is the debut studio album by American rapper and record producer Travis Scott. It was released on September 4, 2015',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'Astroworld',
        description: 'Astroworld is the third studio album by American rapper Travis Scott. It was released on August 3, 2018',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'JackBoys',
        description: 'JackBoys (stylized in all caps) is a collaborative compilation album by American record label Cactus Jack Records, under the name JackBoys, and American rapper Travis Scott, its leader. It was released through the label alongside Epic Records on December 27, 2019',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'DAMN.',
        description: 'Damn (stylized as DAMN.) is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'good kid, m.A.A.d city',
        description: 'Good Kid, M.A.A.D City is the second studio album by American rapper Kendrick Lamar. It was released on October 22, 2012',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'Untitled Unmastered',
        description: 'Untitled Unmastered (stylized as untitled unmastered.) is a compilation album by American rapper Kendrick Lamar. It was released on March 4, 2016',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'Donda',
        description: 'Donda is the tenth studio album by American rapper Kanye West, released through GOOD Music on August 29, 2021',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title:'The Life of Pablo',
        description: 'The Life of Pablo is the seventh studio album by American rapper and producer Kanye West. It was released on February 14, 2016',
        location:'Spotify',
        date: Date.now(),
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=>{
        if(err){
            console.log(err)
        }
    })
})


// let newEvent =new Event({
//     title: 'this is event one',
//     description: 'this is first event',
//     location: 'Egypt',
//     date: Date.now()
// })

// newEvent.save( (err)=> {
//     if(!err) {
//         console.log('record was added')
//     } else{
//         console.log(err)
//     }
// })