import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Interview() {
  const { roomId } = useParams()

  const myMeeting = async (element: any) => {
    // if (roomId) {
      const appID = 857695070;
      const serverSecret = process.env.ZEGO_CLOUD as string;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, serverSecret, roomId || '1234',
        Date.now().toString(),
        'Abhinand'
      )
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal",
            url: window.location.protocol + '//' +
              window.location.host + window.location.pathname
          },
        ],

        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference
        }
      })
    // }
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