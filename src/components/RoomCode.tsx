export function RoomCode(props: any) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props?.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>

      <span>Sala #{props.code}</span>
    </button>
  )
}