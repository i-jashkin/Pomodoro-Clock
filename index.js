function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { id: 'break-label' },
            'Break Length'
        ),
        React.createElement(
            'div',
            { id: 'session-label' },
            'Session Length'
        ),
        React.createElement(
            'button',
            { id: 'break-decrement' },
            'break-decrement'
        ),
        React.createElement(
            'button',
            { id: 'session-decrement' },
            'session-decrement'
        ),
        React.createElement(
            'button',
            { id: 'break-increment' },
            'break-increment'
        ),
        React.createElement(
            'button',
            { id: 'session-increment' },
            'session-increment'
        ),
        React.createElement(
            'div',
            { id: 'break-length' },
            '5'
        ),
        React.createElement(
            'div',
            { id: 'session-length' },
            '25'
        ),
        React.createElement(
            'div',
            { id: 'timer-label' },
            'session'
        ),
        React.createElement(
            'div',
            { id: 'time-left' },
            '25:00'
        ),
        React.createElement(
            'button',
            { id: 'start_stop' },
            'start_stop'
        ),
        React.createElement(
            'button',
            { id: 'reset' },
            'reset'
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));