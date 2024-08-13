import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AXIOS_INSTANCE_COMPANY, AXIOS_INSTANCE_USER } from 'src/constants/axiosInstance';
import { UseDebounce } from 'src/hooks/Debounce';
import UserListingCard from './UserListingCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { listChats } from 'src/redux/actions/chatAction';

function Sidebar({ setLoading }: { setLoading: (newState: boolean) => void }) {
    const [search, setSearch] = useState<string | null>(null)
    const debouncedValue = UseDebounce(search || '', 1000)
    const [data, setData] = useState<any[]>([]);
    const location = useLocation()
    const chatState = useSelector((state: RootState) => state?.chat)
    const dispatch: AppDispatch = useDispatch()

    const handleOnchange = async () => {
        try {
            setLoading(true)
            let res
            if (location.pathname == '/company/messages') {
                res = await AXIOS_INSTANCE_USER.get('/search-user', {
                    params: { name: debouncedValue },
                });
            } else {
                res = await AXIOS_INSTANCE_COMPANY.get('/search-company', {
                    params: { name: debouncedValue },
                });
            }
            if (Array.isArray(res.data)) {
                setData(res.data);
            } else {
                setData([]);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setData([]);
            console.error(error);
        }
    };
    useEffect(() => {
        setLoading(true)
        if (debouncedValue) {
            handleOnchange();
        } else {
            setLoading(false)
            setData([]); // Clear data if search is empty
        }
    }, [debouncedValue]);

    useEffect(() => {
        dispatch(listChats()).unwrap()
    }, [])

    return (
        <div className='w-1/3 hidden md:block'>
            <div className='w-full'>
                <input type="text" value={search || ''} onChange={(e) => setSearch(e.target.value)}
                    placeholder={location.pathname == '/company/messages' ? 'Search for users...' : 'Search for companies...'}
                    className='w-full bg-gray-200 h-8 px-2 focus:outline-gray-200 rounded-md' />
            </div>
            <div className='flex flex-col px-3 gap-2 mt-1 w-full'>
                {
                    data?.length > 0 && data?.map(data => (
                        <UserListingCard key={data?._id} data={data} setLoading={setLoading} />
                    )) ||
                    chatState?.chats?.map(data => <UserListingCard key={data?._id} data={data} setLoading={setLoading} />)
                }
            </div>
        </div>
    )
}

export default Sidebar