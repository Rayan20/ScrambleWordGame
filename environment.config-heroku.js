
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
        user: "mokojpnelcglfy",
        password: "1f655a166a71109ba18be6d383fc275db6b499d0abe9eb6d5c15d5378dbcf413",
        port: "5432",
        database: "d61bafncighchj",
        debug: false,
        //multipleStatements: true,
        //connectionLimit: 10,
    },


};
