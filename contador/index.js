#!/usr/bin/env node

'use strict'

const fs = require('fs')
const commandLineArgs = require('command-line-args')

let optionsDefinitions = [
  { name: 'inputFile', alias: 'i', type: String, defaultOption: true },
  { name: 'targetBehavior', alias: 't', type: String, defaultOption: false },
]

let options = commandLineArgs(optionsDefinitions)
let rawdata = fs.readFileSync(options.inputFile)
let observation = JSON.parse(rawdata)

let targetBehavior = options.targetBehavior || "bar"

let cumulativeOccurrences = 0

Object.keys(observation).forEach((minute, index) => {
  let occurrences =
    countOccurrences(targetBehavior, observation[minute])

  cumulativeOccurrences +=
    countOccurrences(targetBehavior, observation[minute])

  print(minute, occurrences, cumulativeOccurrences)

})

function countOccurrences(targetBehavior, behaviors) {
  return behaviors.reduce((counter, behavior) => {
    if(behavior == targetBehavior) {
      counter += 1
    }

    return counter
  }, 0)
}

function print(minute, occurrences, cumulativeOccurrences) {
  function format(value) {
    return value
      .toString()
      .padStart(4, ' ')
  }

  let offsetMinute = parseInt(minute) + 1

  console.log(`${format(offsetMinute)} ${format(occurrences)} ${format(cumulativeOccurrences)}`)
}

