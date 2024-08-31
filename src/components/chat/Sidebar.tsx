import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AXIOS_INSTANCE_COMPANY, AXIOS_INSTANCE_USER } from 'src/constants/axiosInstance';
import { UseDebounce } from 'src/hooks/Debounce';
import UserListingCard from './UserListingCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { listChats } from 'src/redux/actions/chatAction';

function Sidebar({ setLoading , setMessages}: { setLoading: (newState: boolean) => void, setMessages:(newState:any) => void }) {
    const [search, setSearch] = useState<string | null>(null)
    const debouncedValue = UseDebounce(search || '', 1000)
    const [data, setData] = useState<any[]>([]);
    const location = useLocation()
    const chatState = useSelector((state: RootState) => state?.chat)
    const dispatch: AppDispatch = useDispatch()

    const handleOnchange = async () => {
        try {
            let res;
            if (location.pathname === '/company/messages') {
                res = await AXIOS_INSTANCE_USER.get('/search-user', {
                    params: { name: debouncedValue },
                });
            } else {
                res = await AXIOS_INSTANCE_COMPANY.get('/search-company', {
                    params: { name: debouncedValue },
                });
            }
            setData(Array.isArray(res.data) ? res.data : []);
        } catch (error) {
            console.error(error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };
    
    const fetchChats = async () => {
        try {
            setLoading(true);
            const chats = await dispatch(listChats()).unwrap();
            if (chats) {
                // This might be redundant if you already have chats in Redux state
                setData([]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchChats = async () => {
            try {
                setLoading(true);
                await dispatch(listChats()).unwrap();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchChats();
    }, [dispatch]);

    useEffect(() => {
        setLoading(true)
        if (debouncedValue) {
            handleOnchange();
            fetchChats()
        } else {
            fetchChats()
            setLoading(false)
            setData([]); // Clear data if search is empty
        }
    }, [debouncedValue]);

    useEffect(() => {
        fetchChats()
        setData([]);
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
                    //! FOR LISTING THE USER WHEN SEARCHING THEM
                    search && search?.length > 0 ? ( 
                        data?.length > 0 ? (
                            data.map(item => (
                                <UserListingCard setMessages={setMessages}  key={item?._id} data={item} setLoading={setLoading} />
                            ))
                        ) : (
                            <div>No results found</div>
                        )
                    ) : (
                        chatState?.chats?.length > 0 ? (
                            chatState.chats.map(item => (
                                <UserListingCard setMessages={setMessages} key={item?._id} data={item} setLoading={setLoading} />
                            ))
                        ) : (
                            <div>No data available</div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar