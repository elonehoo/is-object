import { describe, expect, it } from 'vitest'
import isObject from '../src/index'

describe('should', () => {
  it('returns true for objects', () => {
    expect(true).toEqual(isObject({}))
    expect(true).toEqual(isObject([]))
  })

  it('returns false for null',()=>{
    expect(false).toEqual(isObject(null))
  })

  it('returns false for undefined',()=>{
    expect(false).toEqual(isObject(undefined))
  })

  it('returns false for booleans',()=>{
    expect(false).toEqual(isObject(true))
    expect(false).toEqual(isObject(false))
  })

  it('returns false for primitives',()=>{
    expect(false).toEqual(isObject(42))
    expect(false).toEqual(isObject('bar'))
  })

  it('returns false for functions',()=>{
    expect(false).toEqual(isObject(function() {}))
  })
})
