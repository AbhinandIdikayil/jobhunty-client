import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoaderCircle } from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { UseResumeContext } from 'src/context/ResumeContext';

function PersonalDetail({ enabledNext }: { enabledNext: any }) {

  const { resume, setResume } = UseResumeContext()

  const [formData, setFormData] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("---", resume)
  }, [])



  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    enabledNext(false)
    const { name, value } = e?.target;

    setFormData({
      ...formData,
      [name]: value
    })
    setResume({
      ...resume,
      [name]: value
    })
  }

  const onSave = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    toast("Details updated")
    setLoading(false)
    enabledNext(true);
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input name="firstName" defaultValue={resume?.firstName} required onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input name="lastName" required onChange={handleInputChange}
              defaultValue={resume?.lastName} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input name="jobTitle" required
              defaultValue={resume?.jobTitle}
              onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input name="address" required
              defaultValue={resume?.address}
              onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input name="phone" required
              defaultValue={resume?.phone}
              onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input name="email" required
              defaultValue={resume?.email}
              onChange={handleInputChange} />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button type="submit"
            disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail