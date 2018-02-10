import countMines from '../countMines'

it('should return number', () => {
    let test = countMines(0, 0, [
        [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
        [{value: 2, status: 'blocked'}, {value: 3, status: 'blocked'}, {value: 2, status: 'closed'}],
        [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
    
    ])
    expect(typeof test).toBe('number')
})

it('should return corect number of mines around chosen field', () => {
    let test = countMines(0, 0, [
        [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
        [{value: 2, status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
        [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
    
    ])
    expect(test).toBe(1)
})
it('should return corect number of mines around chosen field', () => {
    let test = countMines(1, 1, [
        [{value: 'M', status: 'blocked'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'blocked'}],
        [{value: 2, status: 'blocked'}, {value: 3, status: 'closed'}, {value: 2, status: 'blocked'}],
        [{value: 0, status: 'blocked'}, {value: 0, status: 'blocked'}, {value: 0, status: 'blocked'}]
    
    ])
    expect(test).toBe(8)
})