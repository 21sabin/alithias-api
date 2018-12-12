const emailTemplate =  ( body )=>{
    const html=`
            <table style="width:100%">
            <tr style="background-color:#f2f2f2;padding:20px;border-bottom:1px solid black">
                <td style="font-weight:bold ;padding:8px ;font-size:120%">FirstName</td>
                <td style="padding:8px;font-size:120%">${body.FirstName}</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%">LastName</td>
                <td style="padding:8px;font-size:120%">${body.LastName}</td>
            </tr>
            <tr style="background-color:#f2f2f2;padding:8px">
                <td style="font-weight:bold;padding:8px;font-size:120%">PhoneNumber</td>
                <td style="padding:8px;font-size:120%">${body.PhoneNumber}</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%">Email</td>
                <td style="padding:8px;font-size:120%">${body.Email}</td>
            </tr>
            <tr style="background-color:#f2f2f2">
                <td style="font-weight:bold;padding:8px;font-size:120%">AddressLine1</td>
                <td style="padding:8px;font-size:120%">${body.AddressLine1}</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%">ZipCode</td>
                <td style="padding:8px;font-size:120%">${body.ZipCode}</td>
            </tr>
            <tr style="background-color:#f2f2f2">
                <td style="font-weight:bold;padding:8px;font-size:120%">City</td>
                <td style="padding:8px;font-size:120%">${body.City}</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%">State</td>
                <td style="padding:8px;font-size:120%">${body.State}</td>
            </tr>
            <tr style="background-color:#f2f2f2;">
                <td style="font-weight:bold;padding:8px;font-size:120%;">Procedure</td>
                <td style="padding:8px;font-size:120%">${body.Procedure }</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%;">Radius</td>
                <td style="padding:8px;font-size:120%">${body.Radius ?body.Radius :''}</td>
           </tr>
            <tr style="background-color:#f2f2f2;">
                <td style="font-weight:bold;padding:8px;font-size:120%">Company</td>
                <td style="padding:8px;font-size:120%">${body.Company ?body.Company :'-'}</td>
            </tr>
            <tr>
                <td style="font-weight:bold;padding:8px;font-size:120%">Network</td>
                <td style="padding:8px;font-size:120%">${body.Network ? body.Network:'-'}</td>
            </tr>
            <tr style="background-color:#f2f2f2;">
                <td style="font-weight:bold;padding:8px;font-size:120%">MemberSearch</td>
                <td style="padding:8px;font-size:120%">${body.Username ? body.Username:'-'}</td>
            </tr>
        </table>
    `;

    return html;
 
}

module.exports = { emailTemplate }







