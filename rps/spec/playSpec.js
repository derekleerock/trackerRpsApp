describe('play', () => {
    let requests

    beforeEach(() => {
        requests = new Game()
    })

    it('rock vs scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])


        requests.play('rock', 'scissors', observer)


        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('scissors vs rock', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])


        requests.play('scissors', 'rock', observer)


        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('scissors vs paper', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])


        requests.play('scissors', 'paper', observer)


        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('paper vs scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])


        requests.play('paper', 'scissors', observer)


        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('paper vs rock', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])


        requests.play('paper', 'rock', observer)


        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('rock vs paper', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])


        requests.play('rock', 'paper', observer)


        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('rock vs rock', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])


        requests.play('rock', 'rock', observer)


        expect(observer.tie).toHaveBeenCalled()
    })

    it('scissors vs scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])


        requests.play('scissors', 'scissors', observer)


        expect(observer.tie).toHaveBeenCalled()
    })

    it('paper vs paper', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])


        requests.play('paper', 'paper', observer)


        expect(observer.tie).toHaveBeenCalled()
    })

    it('invalid vs rock', () => {
        let observer = jasmine.createSpyObj('observer', ['invalid'])


        requests.play('sailboat', 'rock', observer)


        expect(observer.invalid).toHaveBeenCalled()
    })

    it('rock vs invalid', () => {
        let observer = jasmine.createSpyObj('observer', ['invalid'])


        requests.play('rock', 'sailboat', observer)


        expect(observer.invalid).toHaveBeenCalled()
    })

    it('invalid vs invalid', () => {
        let observer = jasmine.createSpyObj('observer', ['invalid'])


        requests.play('sailboat', 'sailboat', observer)


        expect(observer.invalid).toHaveBeenCalled()
    })
})

function Game() {
    this.play = (p1, p2, observer) => {
        if (['rock', 'scissors', 'paper'].includes(p1) === false ||
            ['rock', 'scissors', 'paper'].includes(p2) === false ) {
            observer.invalid()
        } else if (p1 === p2) {
            observer.tie()
        } else if (p1 === 'rock' && p2 === 'scissors' ||
            p1 === 'scissors' && p2 === 'paper' ||
            p1 === 'paper' && p2 === 'rock') {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }
}