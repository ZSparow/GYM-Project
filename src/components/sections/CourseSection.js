import React from 'react'
import InputField from '../items/InputField'
import PracticeSection from '../items/PracticeSection'

function CourseSection() {
    return (
        <div className="Course-Section blurred-seciton">
            <h1>

                عمل كورس جديد
            </h1>
            <InputField label="اسم اللاعب" labelId="3" />

            <div className="first-day day">
                <h2>
                    اليوم الاول
                </h2>
                <PracticeSection />
            </div>
            <div className="second-day day">
                <h2>
                    اليوم الثاني
                </h2>
                <PracticeSection />
            </div>
            <div className="third-day day">
                <h2>
                    اليوم الثالث
                </h2>
                <PracticeSection />
            </div>
            <div className="fourth-day day">
                <h2>
                    اليوم اليوم الرابع
                </h2>
                <PracticeSection />
            </div>
            <div className="fifth-day day">
                <h2>
                    اليوم الخامس
                </h2>
                <PracticeSection />
            </div>
            <div className="sixth-day day">
                <h2>
                    اليوم السادس
                </h2>
                <PracticeSection />
            </div>
            <div className="seventh-day day">
                <h2>
                    اليوم السابع
                </h2>
                <PracticeSection />
            </div>
        </div>
    )
}

export default CourseSection
