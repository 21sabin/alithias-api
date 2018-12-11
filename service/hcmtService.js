const { pool, sql } = require('./../connection/db.connection');

class HcmtService {

    createHcmt(hcmt) {
        return pool.then(connection => {
            return connection.request()
                .input('AlithiasCompanyId', sql.Int, hcmt.AlithiasCompanyId)
                .input('AlithiasCompanyName', sql.VarChar, hcmt.AlithiasCompanyName)
                .input('FirstName', sql.VarChar, hcmt.FirstName)
                .input('MiddleName', sql.VarChar, hcmt.MiddleName)
                .input('LastName', sql.VarChar, hcmt.LastName)
                .input('EmployeeId', sql.VarChar, hcmt.EmployeeId)
                .input('PhoneNumber', sql.VarChar, hcmt.PhoneNumber)
                .input('DateOfBirth', sql.Date, new Date(hcmt.DateOfBirth))
                .input('Email', sql.VarChar, hcmt.Email)
                .input('AddressLine1', sql.VarChar, hcmt.AddressLine1)
                .input('AddressLine2', sql.VarChar, hcmt.AddressLine2)
                .input('City', sql.VarChar, hcmt.City)
                .input('State', sql.VarChar, hcmt.State)
                .input('ZipCode', sql.VarChar, hcmt.ZipCode)
                .input('CellPhoneNumber', sql.VarChar, hcmt.CellPhoneNumber)
                .input('WorkPhoneNumber', sql.VarChar, hcmt.WorkPhoneNumber)
                .input('Procedures', sql.VarChar, hcmt.Procedures)
                .input('Radius', sql.Int, hcmt.Radius )
                .input('Company', sql.VarChar, hcmt.Company )
                .input('Network', sql.VarChar, hcmt.Network  )
                .input('Username', sql.VarChar, hcmt.Username )
                .execute('dbo.Hcmdata')

        })
    }

    getHcmtData( id ){
        return pool.then(connection => {
            return connection.request()
                .input('id', sql.Int, id)
                .execute('dbo.Hcmdata_get')

        })
    }
}

module.exports = HcmtService;

 