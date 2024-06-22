import { TransactionButton, useReadContract } from "thirdweb/react"
import { CONTRACT } from "../utils/constants"
import  "../styles/cgpa.css";
import { prepareContractCall } from "thirdweb";
import { ChangeEvent, FormEvent, useState } from "react";

const CGPA: React.FC = () => {
    const [subject, setSubject] = useState<string>('');
    const [marks, setMarks] = useState<bigint>(BigInt(0));
    const {data:count,isLoading:loadingCount} = useReadContract({
        contract:CONTRACT,
        method:"calculateCGPA"
    });
    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
      };
    
      const handleMarksChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
    setMarks(value ? BigInt(value) : BigInt(0));
      };

      const handleSubmit = () => {
        console.log('Subject:', subject);
        console.log('Marks:', marks?.toString());
        setSubject('');
        setMarks(BigInt(0));
      };

    const {data:list, isLoading:loadingList} = useReadContract({
        contract:CONTRACT,
        method:"getTable"
    })
    return(
        <div className="container">
        
        <div className="form-container">
            <h3>CGPA Calculator</h3>
            {loadingCount ? (
                <h4>...</h4>
            ) : (
                <h4>CGPA: {count?.toString()}</h4>
            )}
        
      <label htmlFor="subject">Subject</label>
      <input id="subject" type="text" name="subject" onChange={handleSubjectChange} value={subject}/><br/>
      <label htmlFor="marks">Marks</label>
      <input id="marks" type="number" name="marks" value={marks === undefined ? '' : marks.toString()} onChange={handleMarksChange}/><br/>
      <TransactionButton 
        transaction={() => prepareContractCall({
            contract:CONTRACT,
            method:"addSubject",
            params: [subject,marks]
        })}
        onTransactionSent={() => console.log("Subject Added!!")}
        onTransactionConfirmed={() =>handleSubmit() }>Add Subject</TransactionButton> </div>
        <div className="table-container">
    {loadingList? (
        <h3>Loading subjects...</h3>
    ):(
        <table >
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.mark.toString()}</td>
                <td>{<TransactionButton
                transaction={()=> prepareContractCall({
                    contract:CONTRACT,
                    method:"removeSubject",
                    params:[BigInt(index)]
                })}
                onTransactionSent={() => console.log("Subject removed")}
                onTransactionConfirmed={() => console.log("done")}
                >Remove</TransactionButton>}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )}
    </div>
    </div>
    )
};

export default CGPA;