
module.exports = {
    env: {
        name:"local",
        aws_region: 'us-east-1',

    },

    nodeJS: {
        enableCluster:false
    },
    db: {
        host: "localhost",
        user: "root",
        password: "password",
        port: "5432",
        database: "web",
        debug: false,
        //multipleStatements: true,
        //connectionLimit: 10,
    },


};
