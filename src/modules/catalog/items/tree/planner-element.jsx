/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React from 'react'
import TreeImage from './tree.png'
import TreeImageThumb from './tree-thumb.png'

export default {
  name: 'tree',
  prototype: 'items',

  info: {
    tag: ['furnishings'],
    title: 'Plant',
    description: 'desk',
    image: TreeImageThumb,
  },

  properties: {
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
  render2D: function (element, _layer, _scene) {
    let angle = element.rotation + 90

    let textRotation = 0
    if (Math.sin((angle * Math.PI) / 180) < 0) {
      textRotation = 180
    }

    return (
      <image
        href={TreeImage}
        height="150"
        width="150"
        transform={`scale(1,-1) rotate(${textRotation}) translate(-65, -75)`}
      />
    )
  },

  render3D: function (element, _layer, _scene) {
    return Promise.resolve({})
  },
}
