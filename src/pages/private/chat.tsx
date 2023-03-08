import dynamic from "next/dynamic";
import { FC } from "react";
import { IJitsiMeetingProps } from "@jitsi/react-sdk/lib/types";

const JitsiMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then(({ JitsiMeeting }) => JitsiMeeting) as any,
  {
    ssr: false,
  }
) as FC<IJitsiMeetingProps>;

export default function chat() {
    return (
        <JitsiMeeting
            roomName="inglesbomdmsdagalera"
            configOverwrite={{
                startWithAudioMuted: false,
                toolbarButtons: [
                    'chat',
                    'microphone',
                ],
                startAudioOnly: true,
                prejoinConfig: {
                    enabled: false,
                }
            }}
            getIFrameRef={(iframeRef) => {
                iframeRef.style.height = '100vh';
            }}
        />
    );
}
