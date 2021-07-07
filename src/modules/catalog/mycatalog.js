import { Catalog } from 'react-planner'

import * as Areas from './areas/area/planner-element.jsx'
import * as Lines from './lines/wall/planner-element.jsx'
// import * as Desks from './items/deskoffice/planner-element'
import * as Trees from './items/tree/planner-element.jsx'
import * as Door from './holes/door/planner-element.jsx'
import * as Windows from './holes/window/planner-element.jsx'
// import * as MettingRooms from './items/meeting-room/planner-element'
// import * as BigMettingRooms from './items/big-meeting-room/planner-element'
// import * as SmartDesks from './items/smart-desk/planner-element'
// import * as SchoolDesk from './items/desk/planner-element'

import * as OpenDesk from './items/open-desk/planner-element.jsx'
import * as PrivateRoom from './items/private-room/planner-element.jsx'

let catalog = new Catalog()

// import * as Holes from "./holes/**/planner-element.jsx";
// import * as Items from "./items/**/planner-element.jsx";

for (let x in Areas) catalog.registerElement(Areas[x])
for (let x in OpenDesk) catalog.registerElement(OpenDesk[x])
for (let x in PrivateRoom) catalog.registerElement(PrivateRoom[x])
for (let x in Lines) catalog.registerElement(Lines[x])

// for (let x in Desks) catalog.registerElement(Desks[x])
// for (let x in SmartDesks) catalog.registerElement(SmartDesks[x])
// for (let x in MettingRooms) catalog.registerElement(MettingRooms[x])
// for (let x in BigMettingRooms) catalog.registerElement(BigMettingRooms[x])
for (let x in Trees) catalog.registerElement(Trees[x])
for (let x in Door) catalog.registerElement(Door[x])
for (let x in Windows) catalog.registerElement(Windows[x])


// for (let x in SchoolDesk) catalog.registerElement(SchoolDesk[x])
// for (let x in Holes) catalog.registerElement(Holes[x]);
// for (let x in Items) catalog.registerElement(Items[x]);

// catalog.registerCategory("windows", "Windows", [
//   Holes.window,
//   Holes.sashWindow,
//   Holes.venetianBlindWindow,
//   Holes.windowCurtain,
// ]);
// catalog.registerCategory("doors", "Doors", [
//   Holes.door,
//   Holes.doorDouble,
//   Holes.panicDoor,
//   Holes.panicDoorDouble,
//   Holes.slidingDoor,
// ]);

export default catalog
