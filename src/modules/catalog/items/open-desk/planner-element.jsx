/* eslint-disable react/display-name */
import React from 'react'
import logic from '../../smart-desk-planner-element-logic'
// import { ReactPlannerSharedStyle } from 'react-planner'
// import CubeImage from './cube.png'
import bookedImage from './booked.png'
import iconThumb from './icon.png'
import mapNormalImage from './map-normal.png'
import mappedImage from './mapped.png'
import mappingImage from './mapping.png'
import normalImage from './normal.png'

export default {
  name: 'open-desk',
  prototype: 'items',

  // info: {
  //   tag: ['furnishings', 'wood'],
  //   // title: 'desk',
  //   title: 'Smart Workstation',
  //   id: 'working_place',
  //   description: 'smart-desk',
  //   image: SmartDeskImage,
  // },
  info: {
    tag: ['open', 'desk'],
    // title: 'desk',
    title: 'Open Desk',
    description: 'open-desk',
    image: iconThumb,
    visibility: {
      catalog: true
    },
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


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render2D: (element, layer, scene, isAvailable = true, place = null) => {
    let newWidthA = element.properties.get('widthA').get('length')
    let newWidthB = element.properties.get('widthB').get('length')
    let newDepth = element.properties.get('depth').get('length')

    const dndLogic = logic.dnd(place)
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
      href={normalImage}
      x={newWidthA / 2 - newWidthB / 2}
      y={newWidthA / 2 - newWidthB / 2 - 20}
      height={'150px'}
      width={newWidthA + 'px'}
    />
    </g>
    )
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render3D: (element, layer, scene) => {
    return Promise.resolve(null)
  },
}
