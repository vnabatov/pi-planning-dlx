const dlx = require('dancing-links')

const sprintCapacityAll = 5

const teams = [{
    teamName: 'team1',
    sprintCapacity: 5
},{
    teamName: 'team2',
    sprintCapacity: 5
}]

const stories = {
    s1: {
        sp: 2,
        dep: 0,
        team: null
    },
    s2: {
        sp: 3,
        dep: s1,
        team: null
    },
    s3: {
        sp: 4,
        dep: s1,
        team: 'team2'
    },
    s4: {
        sp: 4,
        dep: null,
        team: null
    }
}

const sprintCount = 3

/*
const sprintCapacityRatio = {
    sprint1: 1,
    sprint2: 1,
    sprint3: 1,
    sprint4: 1,
    sprint5: 1,
    sprint6: 1,
}
*/

const constraints = [
    {
        data: 'first one',
        primaryRow: [1,0],
        secondaryRow: [1]
    },
    {
        data: 'second one',
        primaryRow: [0,1],
        secondaryRow: [0]
    },
    {
        data: 'third one',
        primaryRow: [0,1],
        secondaryRow: [1]
    }
]

const fillConstarints = ({ stories, teams, sprintCount }) => {
    
    Object.entries(stories).forEach(([ storyName, { sp, dep, team } ]) => {
        
    });

    atLeastOneFunctionalStory = 1
    //atLeastOneFunctionalStory = 0 

    //positionInSprint
    // for 3 sp story and 5SP Sprint
    // 1 1 1 0 0
    // 0 1 1 1 0
    // 0 0 1 1 1 
    //positionInSprint = Array(sprintCapacityAll).fill(0);

    // addithinal tech debt 2sp at the end
    // 0 0 0 1 1
    // 0 0 0 0 1

    //alldependendDoneInSprint
    //    sp1-s1 sp2-s1 sp3-s1 sp4-s1  |  sp1-s1 sp2-s2 sp3-s2 sp4-s2  |  sp1-s3 sp2-s3 sp3-s3 sp4-s3  |  sp1-s4 sp2-s4 sp3-s4 sp4-s4
    // s1      1      1      1      1  |       1      0      0      0  |       1      0      0      0  |       0      0      0      0
    // s1      0      1      1      1  |       1      1      0      0  |       1      1      0      0  |       0      0      0      0
    // s1      0      0      1      1  |       1      1      1      0  |       1      1      1      0  |       0      0      0      0
    // s1      0      0      0      1  |       0      0      0      0  |       0      0      0      0  |       0      0      0      0
|
    // s2      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       0      0      0      0
    // s2      0      0      0      0  |       0      1      1      1  |       0      0      0      0  |       0      0      0      0
    // s2      0      0      0      0  |       0      0      1      1  |       0      0      0      0  |       0      0      0      0
    // s2      0      0      0      0  |       0      0      0      1  |       0      0      0      0  |       0      0      0      0
  
    // s3      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       0      0      0      0
    // s3      0      0      0      0  |       0      0      0      0  |       0      1      1      1  |       0      0      0      0
    // s3      0      0      0      0  |       0      0      0      0  |       0      0      1      1  |       0      0      0      0
    // s3      0      0      0      0  |       0      0      0      0  |       0      0      0      1  |       0      0      0      0

    // s4      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       1      1      1      1
    // s4      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       0      1      1      1
    // s4      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       0      0      1      1
    // s4      0      0      0      0  |       0      0      0      0  |       0      0      0      0  |       0      0      0      1

    //storyName+tech data (sprint, position)
    constraints.push({data: storyName, primaryRow: {...positionInSprint, ...alldependendDoneInSprint, atLeastOneFunctionalStory }})

    //constraints.push(...positionInSprint,...alldependendDoneInSprint,atLeastOneFunctionalStory)

    //techDebt
    //constraints.push(...positionInSprint,...alldependendDoneInSprint,atLeastOneFunctionalStory)
}

fillConstarints({ stories, teams })

const oneSolution = dlx.findOne(constraints)
//const allSolutions = dlx.findAll(constraints)
console.log(oneSolution)
