import React from "react";

const ViewCaseTable = ({ data }) => {
  return (
    <table className="border w-full text-sm view-case">
      <tbody className="border">
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            PRIMARY DETAILS
          </th>
        </tr>
        <tr>
          <td>
            <b>Main Number</b>
          </td>
          <td>{data.maincasenum}</td>
          <td>
            <b>SR Number</b>
          </td>
          <td>{data.srcasenum}</td>
        </tr>
        <tr>
          <td>
            <b>Petitioner</b>
          </td>
          <td>{data.petitioner}</td>
          <td>
            <b>Respondent</b>
          </td>
          <td>{data.respondent}</td>
        </tr>
        <tr>
          <td>
            <b>Petitioner Advocate</b>
          </td>
          <td>{data.petitioneradv}</td>
          <td>Respondent Advocate</td>
          <td>{data.respondentadv}</td>
        </tr>
        <tr>
          <td>Case Category</td>
          <td>{data.naturecd}</td>
          <td>District</td>
          <td>{data.district}</td>
        </tr>
        <tr>
          <td>Filing Date</td>
          <td>{data.filingdate}</td>
          <td>Registration Date</td>
          <td>{data.registrationdate}</td>
        </tr>
        <tr>
          <td>Listing Date</td>
          <td>{data.nexthdate}</td>
          <td>Case Status</td>
          <td>{data.pdrstatus}</td>
        </tr>
        <tr>
          <td>Purpose</td>
          <td>{data.purname}</td>
          <td>Scrutiny Officer name</td>
          <td>{data.scrutinyofcname} </td>
        </tr>
        <tr>
          <td>Hon'ble Judges</td>
          <td colspan="3">{data.judname}</td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            Category
          </th>
        </tr>
        <tr>
          <td>
            <b>Category</b>
          </td>
          <td>{data.subject}</td>
          <td>
            <b>Sub Category</b>
          </td>
          <td>{data.subject1}</td>
        </tr>
        <tr>
          <td>
            <b>Sub Sub Category</b>
          </td>
          <td>{data.subject2}</td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            IA DETAILS
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td>IA Number</td>
                  <td>Filing Date</td>
                  <td>Advocate Name</td>
                  <td>Misc.Paper Type</td>
                  <td>Status</td>
                  <td>Prayer</td>
                  <td>Order Date</td>
                  <td>Order</td>
                </tr>
                {data.mpdetails.map((each, idx) => (
                  <tr key={idx}>
                    <td>{each.mpcasenum}</td>
                    <td>{each.dateofiafiling}</td>
                    <td>{each.advname}</td>
                    <td>{each.papertype}</td>
                    <td>{each.order}</td>
                    <td>-</td>
                    <td>{each.orderdate}</td>
                    <td></td>
                  </tr>
                ))}
                {data.iasrdetails.map((each, idx) => (
                  <tr key={idx}>
                    <td>{each.iasrnum}</td>
                    <td>{each.iasrdate}</td>
                    <td>{each.iasradv}</td>
                    <td>{each.iasrtype}</td>
                    <td>{each.iasrstatus}</td>
                    <td>-</td>
                    <td>-</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            USR Details
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td>USR Number</td>
                  <td>Advocate Name</td>
                  <td>USR Type</td>
                  <td>USR Filing Date</td>
                  <td>Remarks</td>
                </tr>
                {data.usrdetails?.map((each, idx) => (
                  <tr key={idx}>
                    <td>{each.usrnum}</td>
                    <td>{each.usradv}</td>
                    <td>{each.usrtype}</td>
                    <td>{each.usrdate}</td>
                    <td>{each.usrremarks}</td>
                  </tr>
                ))}
                {data.vakalathdetails1?.map((each, idx) => (
                  <tr key={idx}>
                    <td>{each.usrnum}</td>
                    <td>{each.usradv}</td>
                    <td>{each.usrtype}</td>
                    <td>{each.usrdate}</td>
                    <td>{each.usrremarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            CONNECTED MATTERS
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <table>
              <tbody>
                <tr>
                  <td>Connected Case Number</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            VAKALATH
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Advocate Code</td>
                  <td>Advocate Name</td>
                  <td>P/R No.</td>
                  <td>Remarks</td>
                </tr>
                {data.vakalathdetails.map((vkl) => (
                  <tr key={vkl.vaktype}>
                    <td>{vkl.advcd}</td>
                    <td>{vkl.advname}</td>
                    <td>{vkl.vaktype}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            LOWER COURT DETAILS
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <table>
              <tbody></tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th colspan="4" className="text-center text-blue-600 font-semibold">
            PRAYER
          </th>
        </tr>
        <tr>
          <td colspan="4" className="p-2">
            {data.prayer}
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td colspan="2">PETITIONER(S)</td>
                </tr>

                {data.petdetails.map((ptnr) => (
                  <tr key={ptnr.psno}>
                    <td>{ptnr.psno}</td>
                    <td>
                      {ptnr.pname}
                      <br />
                      {ptnr.address}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colspan="4">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td colspan="2">RESPONDENT(S)</td>
                        </tr>
                        <tr>
                          <td>R.No</td>
                          <td>Respondent(S) Name</td>
                        </tr>

                        {data.resdetails.map((respondent) => (
                          <tr key={respondent.rsno}>
                            <td>{respondent.rsno}</td>
                            <td>
                              {respondent.rname}
                              <br />
                              {respondent.address}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th
                    colspan="4"
                    className="text-center text-blue-600 font-semibold"
                  >
                    ORDERS
                  </th>
                </tr>
                <tr>
                  <td colspan="4">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td>Order on</td>
                          <td>Judge Name</td>
                          <td>Date of Orders</td>
                          <td>Order Type</td>
                          <td>Order Details</td>
                        </tr>
                        {data.orderdetails.map((each, idx) => (
                          <tr key={idx}>
                            <td>{each.caseno}</td>
                            <td>{each.judgename}</td>
                            <td>{each.orderdt}</td>
                            <td>{each.docuname}</td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewCaseTable;
