const users = [
    {
        id: 1,
        name: 'Coz',
        schoolId: 101
    },
    {
        id: 2,
        name: 'Brenna',
        schoolId: 199
    }    
];

const grades = [
    {
        id: 1,
        schoolId: 101,
        grade: 86
    },
    {
        id: 2,
        schoolId: 199,
        grade: 100
    },
    {
        id: 3,
        schoolId: 101,
        grade: 91
    }        
];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });
        if(user) {
            resolve(user);
        } else {
            reject(`unable to find user with id: ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        const grade = grades.filter((grade) => {
            return grade.schoolId === schoolId;
        });
        if(grade) {
            resolve(grade);
        } else {
            reject(`unable to find grade with school id: ${schoolId}`);
        }
    });
};

const getStatus = (userId) => {
    var user;
    return getUser(userId).then((tempuser) => {
        user = tempuser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let avg = 0;
        if(grades.length) {
         avg = grades.map((grade) => grade.grade).reduce((a, b) => {
             return (a + b) / grades.length;
         });
        }
        return `${user.name} has a ${avg}% average`
        console.log(avg);
    });
};

getUser(2)
.then((user) => {
    console.log(user);
})
.catch((err) => {
    console.log(err);
});

getGrades(101)
.then((grades) => {
    console.log(grades);
})
.catch((err) => {
    console.log(err);
});

getStatus(1)
.then((status) => {
    console.log(status);
})
.catch((err) => {
    console.log(err);
});
