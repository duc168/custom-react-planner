import { BookingStatusEnum } from "./constants";

/* eslint-disable no-console */
const DeskStatus = {
  Available: 1,
  Locked: 2,
}

const BookingStatus = {
  Available: 1,
  Booked: 2,
  CheckedIn: 3,
  CheckedOut: 4,
  Cancelled: 5,
}

const dnd = (place) => {
  const mappingDevice = place && place.mappingDevice ? place.mappingDevice : undefined

  const isDraggingStyle = {
    outline: '48px solid red',
  }
  const isDroppedStyle = {
    outline: '48px solid green',
  }
  const isDragging = mappingDevice ? mappingDevice.isDragging : false
  const isDropped = mappingDevice ? mappingDevice.isDropped : false

  const imageBorderStyle = isDragging ? isDraggingStyle : isDropped ? isDroppedStyle : {}

  return {
    isDragging,
    isDropped,
    imageBorderStyle,
  }
}

const isLocked = (place) => {
  return place?.status === DeskStatus.Locked
}

const dedicated = (place) => {
  return !place?.isMappingMode && (place && place.dedicated ? place.dedicated : '')
}

const isBooked = (place) => {
  // return place?.booking_status === BookingStatus.Booked || place?.booking_status === BookingStatus.CheckedIn
  return place?.booking_status === BookingStatusEnum.BookingStatusProcessing 
  || place?.booking_status === BookingStatusEnum.BookingStatusWaitingPayment
  || place?.booking_status === BookingStatusEnum.BookingStatusCheckIn 
  || place?.booking_status === BookingStatusEnum.BookingStatusCheckout 
}

const showLabel = (place) => {
  return (
    place &&
    !place.isMappingMode &&
    place.booking_user &&
    isBooked(place) &&
    !showDedicatedDesk(place) &&
    !showLockedDesk(place)
  )
}

const isDedicated = (place) => dedicated(place) !== ''

const showDedicatedDesk = (place) => {
  return !place?.isMappingMode && !!isDedicated(place) && !isLocked(place)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showAvailableDesk = (place, _isAvailable = fase) => {
  return !place?.isMappingMode && !isDedicated(place) && !showLockedDesk(place) && !isBooked(place)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const showBookedDesk = (place, isAvailable) => {
  return !place?.isMappingMode && !isDedicated(place) && isBooked(place) && !isLocked(place)
}

const showLockedDesk = (place = {}) => {
  return !place?.isMappingMode && isLocked(place)
}

const showUnmappedNormalSmartDesk = (place) => {
  if (place?.isMappingSmartDeviceMode !== true) {
    return false
  }
  return true
  // return place?.isMappingMode !== true
}

const showMappedSmartDesk = (place) => {
  return place?.isMappingMode ===  true && place?.device_id !== undefined
}

const showUnmappedAvailableSmartDesk = (place) => {
  if (place?.isMappingSmartDeviceMode === true) {
    return true
  }
  return false
  // console.log('showUnmappedAvailableSmartDesk', place, !!place?.isMappingMode, place?.device_id === undefined, !!place?.isAvailable)
  // return place?.isMappingMode === true && place?.device_id === undefined 
  // && !!place?.isAvailable
}

const showNoSmartDesk = (place) => {
  return place?.isMappingMode && !place?.isDesk
}

const getDeviceInfo = (place) => {
  return place?.place_label
}

export default {
  dnd,
  // dedicated,
  // showLabel,
  // showDedicatedDesk,
  // showAvailableDesk,
  showBookedDesk,
  showUnmappedNormalSmartDesk,
  showMappedSmartDesk,
  showUnmappedAvailableSmartDesk,
  // showNoSmartDesk,
  // getDeviceInfo,
  // showLockedDesk,
}
