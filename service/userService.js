
const { pool, sql } = require('./../connection/db.connection');
const requestClient = require("request");

class UserService {

    proceduresName() {
        return new Promise((resolve, reject) => {
            requestClient.get({
                url: 'https://emapi.alithias.com/procedures/',
                headers: {
                    'DCUBE-API-KEY': '25C3661923A529B2D7AD9D88D557FFA5'
                },
                method: 'GET',
                rejectUnauthorized: false,
            },
                function (error, response, body) {
                    resolve(body)
                })
        })
    }

    userActivities() {
        return pool.then(connection => {
            return connection.request().query("select ID,CompanyID,ProcedureID,UserID from UserActivity");

        })
    }

    procedureList(value) {
        return pool.then(connection => {
            return connection.request()
                .input('StartDate', sql.DateTime, new Date(value.StartDate))
                .input('EndDate', sql.DateTime, new Date(value.EndDate))
                .input('AlithiasCompanyID', sql.Int, value.AlithiasCompanyID)
                .execute('SP_UserActivityLog_Get')
        })
    }
}

module.exports = UserService;
