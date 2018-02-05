import { getState } from '../state'

it('should return array', () => {
    let test = getState(5, 5, 5)
    expect(Array.isArray(test)).toBe(true)
})

it('should retur good state', () => {
    let test = getState(3, 3, 3, () => 0.1)
    expect(test).toEqual([
        [{value: 'M', status: 'closed'}, {value: 'M', status: 'closed'}, {value: 'M', status: 'closed'}],
        [{value: 2, status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
        [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
    ])
})

it('should retur good state', () => {
    let test = getState(3, 3, 3, () => 0.9)
    expect(test).toEqual([
        [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}],
        [{value: 2, status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
        [{value: 'M', status: 'closed'}, {value: 'M', status: 'closed'}, {value: 'M', status: 'closed'}]
    ])
})