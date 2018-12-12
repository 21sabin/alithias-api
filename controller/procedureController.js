const UserService = require('../service/userService');
const userService = new UserService();
const router = require('express').Router();

let procedureNames = [];
let procedureList = [];

router.get('/names', (req, res) => {
    userService.proceduresName().then(data => {
        this.procedureNames = data;
        let test = JSON.parse(data)
        console.log(typeof test, "typeof")
        res.json({
            data: test
        })
    })
});

router.post('/', (req, res) => {
    let test = [];
    userService.proceduresName().then(result => {
        let data = JSON.parse(result);
        userService.procedureList(req.body).then(recordset => {
            procedureList = recordset.recordsets[0];
            procedureList.forEach(procedure => {
                data.forEach(procedureName => {
                    if (procedure.Procedure === procedureName.AlithiasProcedureID) {
                        let obj = Object.assign({}, procedure, { Procedure: procedureName.ProcedureName });
                        test.push(obj);
                    }
                })
            });
            res.json({
                procedureList: test
            })
        })
    }).catch(error => {

    })
});


module.exports = router;

