import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import { withRoomConsumer } from "../../Context";
import Loading from "../Loading/Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomsContainer);

/*

another way to write it without the HOC in the context file is =

export default function RoomsConatiner() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            hello from rooms container
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
*/
