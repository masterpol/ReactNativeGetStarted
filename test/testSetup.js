import 'react-native'
import expect from 'expect'
import { createSerializer, matchers } from '@emotion/jest'
import { render } from '@testing-library/react-native'

expect.extend(matchers)
// expect.addSnapshotSerializer(createSerializer())

global.render = render
