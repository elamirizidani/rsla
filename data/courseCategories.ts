export default {
    categories:[  
    { 
        title: 'Beginning', 
        id: '1',
        topics:'10' 
    },
    { 
        title: 'Intermediate', 
        id: '2',
        topics:'10' 
    },
    { 
        title: 'Advanced', 
        id: '3',
        topics:'30' 
    }],
    courses:[
        {
            title:'Alphabets',
            contentType: 'text',
            content:require('../assets/videos/hello.mp4'),
            id:'0', 
            isChecked: 1,
            category:{
                id:'1'
            }
        },
        {
            title:"Hello",
            contentType: 'video',
            content: require('../assets/videos/hello.mp4'), 
            id:'1', 
            isChecked: 1,
            category:{
                id:'1'
            }
        },
        {
            title:"Welcome",
            contentType: 'video',
            content: require('../assets/videos/welcome.mp4'), 
            id:'2', 
            isChecked: 0,
            category:{
                id:'1'
            }
        },
        {
            title:"Hello",
            contentType: 'video',
            content: require('../assets/videos/sample.mp4'), 
            id:'3', 
            isChecked: 0,
            category:{
                id:'2'
            }
        },
        {
            title:"Hello",
            contentType: 'video',
            content: require('../assets/videos/sample.mp4'), 
            id:'4', 
            isChecked: 0,
            category:{
                id: 2
            }
        },
        {
            title:"Hello",
            contentType: 'video',
            content: require('../assets/videos/sample.mp4'), 
            id:'5', 
            isChecked: 0,
            category:{
                id:'3'
            }
        }
    ]
}