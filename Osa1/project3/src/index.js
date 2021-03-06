import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: new Array(anecdotes.length).fill(0)
        }
    }

    handleNextAnecdoteClick = () => {
        this.setState({selected: Math.floor(Math.random() * Math.floor(anecdotes.length))})
    }

    handleVoteClick = () => {
        this.setState({votes:[...this.state.votes.slice(0,this.state.selected), this.state.votes[this.state.selected]+1, ...this.state.votes.slice(this.state.selected+1, anecdotes.length)]})
    }

    render() {
        return (
            <div>
                <p>
                    {this.props.anecdotes[this.state.selected]}
                </p>
                <p>
                    Has {this.state.votes[this.state.selected]} votes
                </p>
                <button onClick={this.handleVoteClick}>
                    Vote
                </button>
                <button onClick={this.handleNextAnecdoteClick}>
                    Next anecdote
                </button>
                <h1>Anecdote with most votes:</h1>
                <p>
                    {this.props.anecdotes[this.getIndexOfMostPopular()]}
                </p>
                <p>
                    Has {this.state.votes[this.getIndexOfMostPopular()]} votes
                </p>
            </div>
        )
    }

    getIndexOfMostPopular() {
        let maxVotes = -1
        let maxIndex = 0
        this.state.votes.forEach((vote, index) => {
            if(vote > maxVotes) {
                maxVotes = vote
                maxIndex = index
            }
        })
        return maxIndex
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)