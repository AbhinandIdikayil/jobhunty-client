import { useEffect } from 'react'
import PersonalDetails from './preview/PersonalDetails'
import { UseResumeContext } from 'src/context/ResumeContext'
import ha from './data/dummy'
import SummarPreview from './preview/SummarPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import { useLocation } from 'react-router-dom'
function ResumePreview() {
  const { resume, setResume } = UseResumeContext()
  const location = useLocation();
  const { state } = location;
  console.log(state)
  useEffect(() => {
    if(state){
      setResume(state)
    } else {
      setResume(ha)
    }
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

      {/* skills */}
      {resume?.skill?.length > 0 && <SkillsPreview data={resume} />}

      {/* experience */}
      {resume?.experience?.length > 0 && <ExperiencePreview data={resume} />}

      {/* education */}
      {resume?.education?.length > 0 && <EducationalPreview data={resume} />}

    </div >
  )
}

export default ResumePreview