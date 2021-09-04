import React from 'react'
import InputField from './InputField'
import AddBtn from './AddBtn';


function PracticeSection() {
    return (
        <div className="PracticeSection">
            <InputField label={"اسم التمرين"} />
            <InputField label={"عدد التكرارات"} type="number" />
            <AddBtn />
        </div>
    )
}

export default PracticeSection




