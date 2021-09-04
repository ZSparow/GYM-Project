import React from 'react'
import SearchBar from '../items/SearchBar'
import UserField from '../items/UserField'
import Data from '../../data/Users.json'
function UsersSection() {
    const today = new Date("2021/8/25"),
        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();





    return (
        <div className="user-section blurred-seciton">
            <SearchBar />
            {
                Data.map(element => {

                    let date1 = new Date(date);
                    let date2 = new Date(element.lastSubscribe);

                    // To calculate the time difference of two dates
                    let Difference_In_Time = (date2.getTime() - date1.getTime()) * -1;

                    // To calculate the no. of days between two dates
                    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

                    return <UserField
                        name={element.name}
                        image={element.imagePath}
                        height={element.height}
                        weight={element.weight}
                        status={
                            Difference_In_Days < 25 ? "مفعل" : Difference_In_Days > 31 ? 'منتهي' : `باقي ${(Difference_In_Days - 31) * -1} يوم`} />
                }
                )



            }


        </div>
    )
}

export default UsersSection
