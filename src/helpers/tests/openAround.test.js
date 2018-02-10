import openAround from '../openAround'

it('should fire function propertly', () => {
    let openMock = jest.fn()

    let test = openAround({i: 1, j: 1}, openMock)
    expect(openMock).toHaveBeenCalled()
    expect(openMock).toHaveBeenCalledTimes(8)
    expect(openMock).toHaveBeenCalledWith({i: 0, j: 0})
    expect(openMock).toHaveBeenCalledWith({i: 0, j: 1})
    expect(openMock).toHaveBeenCalledWith({i: 0, j: 2})
    expect(openMock).toHaveBeenCalledWith({i: 1, j: 0})
    expect(openMock).toHaveBeenCalledWith({i: 1, j: 2})
    expect(openMock).toHaveBeenCalledWith({i: 2, j: 0})
    expect(openMock).toHaveBeenCalledWith({i: 2, j: 1})
    expect(openMock).toHaveBeenCalledWith({i: 2, j: 2})
    
})
