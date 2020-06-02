
module.exports = {
    env: {
        name:"local",
        aws_region: 'us-east-1',

    },

    nodeJS: {
        enableCluster:false
    },
    db: {
        host: "ec2-35-169-254-43.compute-1.amazonaws.com",
        user: "iovguoobcsamqj",
        password: "b91f65194a2466bd71c5d77410e43b3d0e4c7ffde6b259af99cc35c7f2345e8d",
        port: "5432",
        database: "db6ia04fg21gv9",
        debug: false,
        //multipleStatements: true,
        //connectionLimit: 10,
    },


};
