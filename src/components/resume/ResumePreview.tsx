import React, { useEffect } from 'react'
import PersonalDetails from './preview/PersonalDetails'
import { UseResumeContext } from 'src/context/ResumeContext'
import ha from './data/dummy'
import SummarPreview from './preview/SummarPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
function ResumePreview() {
  const { resume, setResume } = UseResumeContext()
  useEffect(() => {
    setResume(ha)
  }, [])
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
      style={{
        borderColor: resume?.themeColor
      }}>
      {/* Persoanal details */}
      < PersonalDetails data={resume} />
      {/* summary */}
      <SummarPreview data={resume} />
      {/* experience */}
      {resume?.experience?.length > 0 && <ExperiencePreview data={resume} />}
      {/* education */}
      {resume?.education?.length > 0 && <EducationalPreview data={resume} />}

      {/* skills */}
      {resume?.skills?.length > 0 && <SkillsPreview data={resume} />}
    </div >
  )
}

export default ResumePreview