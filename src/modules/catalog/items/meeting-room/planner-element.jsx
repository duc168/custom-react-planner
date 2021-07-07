/* eslint-disable react/display-name */
import React from 'react'
import { ReactPlannerSharedStyle } from 'react-planner'
// import CubeImage from './cube.png'
import MettingRoomImage from './meeting-room.svg'
import MettingRoomActiveImage from './active.png'
import MettingRoomInactiveImage from './inactive.png'

export default {
  name: 'room',
  prototype: 'items',

  info: {
    title: 'Meeting room',
    tag: ['demo'],
    description: 'Demo item',
    image: MettingRoomImage,
  },

  properties: {
    color: {
      label: 'Color',
      type: 'color',
      defaultValue: ReactPlannerSharedStyle.AREA_MESH_COLOR.unselected,
    },
    width: {
      label: 'Width',
      type: 'length-measure',
      defaultValue: {
        length: 450,
        unit: 'cm',
      },
    },
    height: {
      label: 'Height',
      type: 'length-measure',
      defaultValue: {
        length: 450,
        unit: 'cm',
      },
    },
    depth: {
      label: 'Depth',
      type: 'length-measure',
      defaultValue: {
        length: 450,
        unit: 'cm',
      },
    },
    widthA: {
      label: 'larghezza lato A',
      type: 'length-measure',
      defaultValue: {
        length: 450,
        unit: 'cm',
      },
    },
    widthB: {
      label: 'larghezza lato B',
      type: 'length-measure',
      defaultValue: {
        length: 450,
        unit: 'cm',
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render2D: (element, layer, scene, isAvailable = true, place = null) => {
    let style = {
      stroke: !element.selected
        ? ReactPlannerSharedStyle.LINE_MESH_COLOR.unselected
        : ReactPlannerSharedStyle.MESH_SELECTED,
      strokeWidth: 2,
      fill: element.properties.get('color'),
    }

    let w = element.properties.getIn(['width', 'length'])
    let d = element.properties.getIn(['depth', 'length'])
    let w2 = w / 2
    let d2 = d / 2
    let newWidthA = 450
    let newWidthB = 450

    let height = element.properties.get('height').get('length')
    let angle = element.rotation + 90

    let textRotation = 0
    if (Math.sin((angle * Math.PI) / 180) < 0) {
      textRotation = 180
    }

    if (!isAvailable) {
      style.fill = '#d2d2d2'
    }

    return (
      <g transform={`translate(-${w2}, -${d2})`}>
        {/* <rect x="0" y="0" width={w} height={d} style={style} /> */}
        {isAvailable ? (
          <image
            className="my-svg-alternate"
            href={MettingRoomActiveImage}
            x={newWidthA / 2 - newWidthB / 2}
            y={newWidthA / 2 - newWidthB / 2 - 20}
            height={d}
            width={w}
          />
        ) : (
          <image
            className="my-svg-alternate"
            href={MettingRoomInactiveImage}
            x={newWidthA / 2 - newWidthB / 2}
            y={newWidthA / 2 - newWidthB / 2 - 20}
            height={d}
            width={w}
          />
        )}
        {place && place.booking_user && (place.booking_status === 2 || place.booking_status === 3) && (
          <text
            key="5"
            x={w2 / 2}
            y={-height / 5.5}
            transform={`translate(${w2 / 2}, ${d2 / 2}) scale(1, -1) rotate(${textRotation})`}
            style={{ textAnchor: 'middle', fontSize: '40px' }}
          >
            {place.booking_user}
          </text>
        )}
      </g>
    )
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render3D: (element, layer, scene) => {
    return Promise.resolve(null)
  },
}
