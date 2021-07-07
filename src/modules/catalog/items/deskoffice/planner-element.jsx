/* eslint-disable no-console */
import React from 'react'
import logic from '../../../../containers/wa/MapEditScreen/deskoffice-planner-element-logic'
import deskIconThumb from './desk-thumb.png'
import deskSmart from './desk_with_smart_device.png'
import deskNoSmart from './desk_without_smart_device.png'
import deskSmartAvailable from './desk_with_smart_device_available.png'

import deskDefaultIcon from './default-desk.png'
import deskDefaultBookedIcon from './default-desk-booked.png'
import smartDeskIcon from './smart-desk.png'
import smartDesktBookedIcon from './smart-desk-booked.png'
import deskDedicatedIcon from './dedicated-desk.png'
import deskLockedIcon from './locked-desk.png'

import mapNormalImage from './map-normal.png'
import mappedImage from './mapped.png'
import mappingImage from './mapping.png'

import './styles.scss'

export default {
  name: 'desk',
  prototype: 'items',

  info: {
    tag: ['furnishings', 'wood'],
    // title: 'desk',
    title: 'Workstation',
    id: 'working_place',
    description: 'desk',
    image: deskIconThumb,
  },

  properties: {
    widthA: {
      label: 'larghezza lato A',
      type: 'length-measure',
      defaultValue: {
        length: 400,
        unit: 'cm',
      },
    },
    widthB: {
      label: 'larghezza lato B',
      type: 'length-measure',
      defaultValue: {
        length: 400,
        unit: 'cm',
      },
    },
    depth: {
      label: 'depth',
      type: 'length-measure',
      defaultValue: {
        length: 90,
        unit: 'cm',
      },
    },
    height: {
      label: 'height',
      type: 'length-measure',
      defaultValue: {
        length: 100,
        unit: 'cm',
      },
    },
    altitude: {
      label: 'altitude',
      type: 'length-measure',
      defaultValue: {
        length: 0,
        unit: 'cm',
      },
    },
  },

  render2D: function render2D(element, layer, scene, isAvailable = true, place = null) {
    // let dragoverStatus = false
    let newWidthA = element.properties.get('widthA').get('length')
    let newWidthB = element.properties.get('widthB').get('length')
    let newDepth = element.properties.get('depth').get('length')
    let height = element.properties.get('height').get('length')
    let angle = element.rotation + 90

    let textRotation = 0
    if (Math.sin((angle * Math.PI) / 180) < 0) {
      textRotation = 180
    }
    const dndLogic = logic.dnd(place)
    // Using for mapping devices
   
    // const deviceInfo = logic.getDeviceInfo(place)

    const imageBorderStyle = dndLogic.imageBorderStyle
    const availableDeskIcon = place && place.isSmart ? smartDeskIcon : deskDefaultIcon
    const bookedDeskIcon = place && place.isSmart ? smartDesktBookedIcon : deskDefaultBookedIcon
    const isMappingSmartDeskMode = place && place.isMappingSmartDeviceMode === true    

    const isMappingSmartDeviceMode = place && place.isMappingSmartDeviceMode === true    
    if (isMappingSmartDeviceMode) {
      
      const isStartMapping = place && place.startMapping === true
      if (isStartMapping) {
        return (
          <g
          transform={`translate(${-newWidthA / 2},${-newDepth / 2})`}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <image
          className="my-svg-alternate"
          href={mappingImage}
          x={newWidthA / 2 - newWidthB / 2}
          y={newWidthA / 2 - newWidthB / 2 - 20}
          height={'150px'}
          width={newWidthA + 'px'}
        />
        </g>
        )
      }
      const isMapped = place && place.device_id !== undefined && place.device_id > 0
      if (isMapped) {
        return (
          <g
          transform={`translate(${-newWidthA / 2},${-newDepth / 2})`}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <image
          className="my-svg-alternate"
          href={mappedImage}
          x={newWidthA / 2 - newWidthB / 2}
          y={newWidthA / 2 - newWidthB / 2 - 20}
          height={'150px'}
          width={newWidthA + 'px'}
        />
        </g>
        )
      }
      return (
        <g
        transform={`translate(${-newWidthA / 2},${-newDepth / 2})`}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <image
        className="my-svg-alternate"
        href={mapNormalImage}
        x={newWidthA / 2 - newWidthB / 2}
        y={newWidthA / 2 - newWidthB / 2 - 20}
        height={'150px'}
        width={newWidthA + 'px'}
      />
      </g>
      )
    }
    return (
      <g
        transform={`translate(${-newWidthA / 2},${-newDepth / 2})`}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <image
          className="my-svg-alternate"
          href={availableDeskIcon}
          x={newWidthA / 2 - newWidthB / 2}
          y={newWidthA / 2 - newWidthB / 2 - 20}
          height={'150px'}
          width={newWidthA + 'px'}
          style={imageBorderStyle}
        />
      </g>
    )
    // return (
    //   <g
    //     transform={`translate(${-newWidthA / 2},${-newDepth / 2})`}
    //     style={{ justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     {showLabel && (
    //       <text
    //         key="5"
    //         x="0"
    //         y={`${height + height / 2 - 20}`}
    //         transform={`translate(${newWidthA / 2}, ${newDepth / 2}) scale(1, -1) rotate(${textRotation})`}
    //         style={{ textAnchor: 'middle', fontSize: '40px' }}
    //       >
    //         {place.booking_user}
    //       </text>
    //     )}
    //     {showDedicatedDesk && (
    //       <>
    //         <image
    //           className="my-svg-alternate"
    //           href={deskDedicatedIcon}
    //           x={newWidthA / 2 - newWidthB / 2}
    //           y={newWidthA / 2 - newWidthB / 2 - 20}
    //           height={'150px'}
    //           width={newWidthA + 'px'}
    //           style={imageBorderStyle}
    //         />
    //         <text
    //           key="5"
    //           x="0"
    //           y={`${height + height / 2 - 20}`}
    //           transform={`translate(${newWidthA / 2}, ${newDepth / 2}) scale(1, -1) rotate(${textRotation})`}
    //           style={{ textAnchor: 'middle', fontSize: '40px' }}
    //         >
    //           {place.dedicated_user}
    //         </text>
    //       </>
    //     )}
    //     {showAvailableDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={availableDeskIcon}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showLockedDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={deskLockedIcon}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showBookedDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={bookedDeskIcon}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showMappedSmartDesk && (
    //       // <div className="my-svg-alternate mapped-smart-desk">
    //       //   <img className="deskImg" src={deskSmart} />
    //       //   <div className="deskTextContainer">
    //       //     <div className="deskText">{deviceInfo}</div>
    //       //   </div>
    //       // </div>
    //       <image
    //         className="my-svg-alternate"
    //         href={deskDefaultIcon}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showUnmappedNormalSmartDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={deskSmart}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showUnmappedAvailableSmartDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={deskSmartAvailable}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //     {showNoSmartDesk && (
    //       <image
    //         className="my-svg-alternate"
    //         href={deskNoSmart}
    //         x={newWidthA / 2 - newWidthB / 2}
    //         y={newWidthA / 2 - newWidthB / 2 - 20}
    //         height={'150px'}
    //         width={newWidthA + 'px'}
    //         style={imageBorderStyle}
    //       />
    //     )}
    //   </g>
    // )
  },

  render3D: function () {
    return null
  },
}
