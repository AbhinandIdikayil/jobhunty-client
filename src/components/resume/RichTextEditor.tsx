import { Button } from '@/components/ui/button';
import { Brain, LoaderCircle } from 'lucide-react';
import { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'
import { toast } from 'react-toastify';
import { UseResumeContext } from 'src/context/ResumeContext';
import { AIChatSession } from '../../../service/AIModal'


const PROMPT = 'position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags'


function RichTextEditor({ onRichTextEditorChange, index, defaultValue }: { onRichTextEditorChange: any, index: any, defaultValue: any }) {
    const [value, setValue] = useState(defaultValue);
    const { resume } = UseResumeContext()
    const [loading, setLoading] = useState(false);
    const GenerateSummeryFromAI = async () => {

        if (!resume?.experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }
        setLoading(true)
        const prompt = PROMPT.replace('{positionTitle}', resume.experience[index].title);

        const result = await AIChatSession.sendMessage(prompt);
        const resp = result.response.text()
        setValue(resp.replace('[', '').replace(']', ''));
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summery</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor style={{fontSize:'12px'}} value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e)
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor