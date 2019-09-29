function App() {
    return (
        <div>
            <div id='break-label'>Break Length</div>
            <div id='session-label'>Session Length</div>
            <button id='break-decrement'>break-decrement</button>
            <button id='session-decrement'>session-decrement</button>
            <button id='break-increment'>break-increment</button>
            <button id='session-increment'>session-increment</button>
            <div id='break-length'>5</div>
            <div id='session-length'>25</div>
            <div id='timer-label'>session</div>
            <div id='time-left'>25:00</div>
            <button id='start_stop'>start_stop</button>
            <button id='reset'>reset</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))