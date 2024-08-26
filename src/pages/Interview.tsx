import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RootState } from 'src/redux/store';

function Interview() {
  const user = useSelector((state: RootState) => state?.user);
  const { room } = useParams()
  const { state } = useLocation()
  const params = room?.split('=')


  const myMeeting = async (element: any) => {
    if (params?.[1] == user?.user?._id) {
      const appID = 857695070;
      const serverSecret = process.env.ZEGO_CLOUD as string;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, serverSecret, params?.[0] || '1235',
        Date.now().toString(),
        state?.user || user?.user?.name
      )
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        // sharedLinks: [
        //   {
        //     name: "Personal",
        //     // url: window.location.protocol + '//' +
        //     //   window.location.host + 'home/interview/' + room+'='+
        //   },
        // ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference
        }
      })
    } else {
      toast.error('Invalid user',{
        position:'top-center',
      })
    }
  }

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )

}

export default Interview