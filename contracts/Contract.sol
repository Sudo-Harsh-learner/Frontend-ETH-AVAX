// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CGPACalculator {
    struct Subject {
        uint256 marks;
        bool exists;
    }

    struct memo{
        string name;
        uint256 mark;
    }
    mapping(string => Subject) subjects;
    memo[] subjectList;

    function addSubject(string memory subjectName, uint256 marks) public {
        require(!subjects[subjectName].exists, "Subject already exists");
        
        subjects[subjectName] = Subject(marks, true);
        subjectList.push(memo(subjectName,marks));
        
    }

    function removeSubject(uint _index) public {
        string memory subjectName = getSubjectAtIndex(_index);
        require(subjects[subjectName].exists, "Subject does not exist");
        
        delete subjects[subjectName];
        for (uint256 i = 0; i < subjectList.length; i++) {
            if (keccak256(bytes(subjectList[i].name)) == keccak256(bytes(subjectName))) {
                subjectList[i] = subjectList[subjectList.length - 1];
                subjectList.pop();
                break;
            }
        }
        
    }

    function calculateCGPA() public view returns(uint256){
        require(subjectList.length > 0, "No subjects added yet");
         //cgpa calculation
         uint256 totalMarks = 0;
        for (uint256 i = 0; i < subjectList.length; i++) {
            totalMarks += subjectList[i].mark;
        }

        uint256 cgpa = totalMarks / (subjectList.length*10);
        return cgpa;
       
         
    }

    function getSubjectsCount() public view returns (uint256) {
        return subjectList.length;
    }

    function getSubjectAtIndex(uint256 index) private  view returns (string memory) {
        require(index < subjectList.length, "Index out of bounds");
        string memory subjectName = subjectList[index].name;
        return (subjectName);
    }

    function getTable() public view returns(memo[] memory){
        return subjectList;
    }
}
