import React from 'react'
import AddBtn from '../items/AddBtn'
import InputField from '../items/InputField'



function NewUserSection() {


    return (
        <div className="new-user-section blurred-seciton">
            <div className='container'>
                <h2>اضافة لاعب جديد</h2>


                <AddBtn />


            </div>
            <InputField label="اسم اللاعب" />
            <InputField label="طول اللاعب" />
            <InputField label="وزن اللاعب" />



        </div>
    )
}

export default NewUserSection
