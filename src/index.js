function App() {
    return (
        <div className='clock'>
            <div className='timer-output'> 
                <div id='timer-label'>Session||Break</div>
                <div id='time-left'>25:00</div>
            </div>
            <div className='btn-control'>
                <button id='start_stop'>Start||Stop</button>
                <button id='reset'>Reset</button>
            </div>
            
            <div className='setting'>
                <div className='break-wrap'>
                    <div id='break-label'>Break Length</div>
                    <div className='break-setting'>
                        <button id='break-decrement'>-</button>
                        <div id='break-length'>5</div>
                        <button id='break-increment'>+</button>
                    </div>
                </div>
                <div className='session-wrap'>
                    <div id='session-label'>Session Length</div>
                    <div className='session-setting'>
                        <button id='session-decrement'>-</button>
                        <div id='session-length'>25</div>
                        <button id='session-increment'>+</button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))