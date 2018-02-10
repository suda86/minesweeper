import minesArr from '../minesArr'

it('should return array', () => {
    let test = minesArr(5, 5, 5)
    expect(Array.isArray(test)).toBeTruthy()
})

it('should return arr with good mines schedule', () => {
    const randomMock = jest.fn(() => 0.1)
    let test = minesArr(3,3,3, randomMock)
    expect(randomMock).toHaveBeenCalled()
    expect(test).toEqual([0, 1, 2])
})

it('should return arr with good mines schedule', () => {
    let test = minesArr(5,5,3, () => 0.97)
    expect(test).toEqual([24, 23, 22])
})