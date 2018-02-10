import open from '../open'


it('should fire function propertly when open field with number', () => {
    let countDownMock = jest.fn()
let openMock = jest.fn()
let gameOverMock = jest.fn()
let boomMock = jest.fn()

let props = {
    game:[
            [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
            [{value: 2, status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
            [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
        
        ],
        countDown: countDownMock,
        open: openMock,
        gameOver: gameOverMock,
        boom: boomMock,
        end: false,
        victoryStatus: false
}
    let test = open({i: 1, j: 0, ...props})
    expect(countDownMock).toHaveBeenCalled()
    expect(openMock).toHaveBeenCalled()
    expect(gameOverMock).not.toHaveBeenCalled()
    expect(boomMock).not.toHaveBeenCalled()
})

it('should fire function propertly when open field with mine', () => {
    let countDownMock = jest.fn()
    let openMock = jest.fn()
    let gameOverMock = jest.fn()
    let boomMock = jest.fn()

    let props = {
        game:[
                [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
                [{value: 'M', status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
                [{value: 'M', status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
            
            ],
            countDown: countDownMock,
            open: openMock,
            gameOver: gameOverMock,
            boom: boomMock,
            end: false,
            victoryStatus: false,
            H: 3,
            W: 3
    }
    let test = open({i: 0, j: 0, ...props})
    expect(countDownMock).not.toHaveBeenCalled()
    expect(openMock).not.toHaveBeenCalled()
    expect(gameOverMock).toHaveBeenCalled()
    expect(gameOverMock).toHaveBeenCalledWith(true)
    expect(boomMock).toHaveBeenCalled()
    expect(boomMock).toHaveBeenCalledTimes(6)
    expect(boomMock).toHaveBeenCalledWith(0, 0)
    expect(boomMock).toHaveBeenCalledWith(1, 0)
})
it('should fire function propertly when open field with zero', () => {
    let countDownMock = jest.fn()
    let openMock = jest.fn()
    let gameOverMock = jest.fn()
    let boomMock = jest.fn()
    let openMockRecurs = jest.fn()

    let props = {
        game:[
                [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
                [{value: 'M', status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
                [{value: 'M', status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
            
            ],
            countDown: countDownMock,
            open: openMock,
            gameOver: gameOverMock,
            boom: boomMock,
            end: false,
            victoryStatus: false,
            H: 3,
            W: 3
    }
    let test = open({i: 2, j: 1, ...props}, openMockRecurs)
    expect(countDownMock).toHaveBeenCalled()
    expect(openMock).toHaveBeenCalled()
    expect(openMockRecurs).toHaveBeenCalled()
    expect(openMockRecurs).toHaveBeenCalledTimes(8)
    expect(openMockRecurs).toHaveBeenCalledWith({i: 1, j: 1, ...props})
    expect(openMockRecurs).toHaveBeenCalledWith({i: 1, j: 2, ...props})
    expect(openMockRecurs).toHaveBeenCalledWith({i: 1, j: 0, ...props})
    expect(gameOverMock).not.toHaveBeenCalled()
    expect(boomMock).not.toHaveBeenCalled()
})
it('should fire function propertly in gameover situation', () => {
    let countDownMock = jest.fn()
    let openMock = jest.fn()
    let gameOverMock = jest.fn()
    let boomMock = jest.fn()

    let props = {
        game:[
                [{value: 'M', status: 'closed'}, {value: 'M', status: 'blocked'}, {value: 'M', status: 'closed'}],
                [{value: 2, status: 'closed'}, {value: 3, status: 'closed'}, {value: 2, status: 'closed'}],
                [{value: 0, status: 'closed'}, {value: 0, status: 'closed'}, {value: 0, status: 'closed'}]
            
            ],
            countDown: countDownMock,
            open: openMock,
            gameOver: gameOverMock,
            boom: boomMock,
            end: true,
            victoryStatus: false
    }
    let test = open({i: 0, j: 0, ...props})
    expect(countDownMock).not.toHaveBeenCalled()
    expect(openMock).not.toHaveBeenCalled()
    expect(gameOverMock).not.toHaveBeenCalled()
    expect(boomMock).not.toHaveBeenCalled()
})
