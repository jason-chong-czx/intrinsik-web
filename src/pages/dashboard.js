import React, { useEffect, useState } from "react";
import { postMethod } from "../library/api";
import { apiUrl } from "../library/constant";

import "../assets/css/dashboard.css";
export default function InvoiceManagement() {
  // let invoiceData = [];
  const [invoiceData, setinvoiceData] = useState(null);
  useEffect(() => {
    const getAll = async () => {
      try {
        const APIData = await postMethod(apiUrl + "getAll");
        if (APIData) {
          setinvoiceData(APIData);
        } else {
          throw new Error("no data found");
        }
      } catch (e) {
        setinvoiceData([
          { duedate: "sampleDate", userid: "jason", dueamount: 100 },
        ]);
      }
    };
    getAll();
  }, []);
  return (
    <>
      <div className="content-body">
        <div class="header">
          <a href="#default" class="logo">
            Invoice Management
          </a>
          <div class="header-right">
            <a class="active" href="#home">
              Create Invoice
            </a>
          </div>
        </div>
        <div className="card-list">
          {invoiceData &&
            invoiceData.map((invoice) => (
              <div className="card-item">
                <span class="blue">due at {invoice.duedate}</span>
                <h3>User: {invoice.userid}</h3>
                <h4>Amount: ${invoice.dueamount}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
